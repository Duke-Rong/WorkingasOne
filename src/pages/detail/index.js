import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import * as actionCreators from './store/actionCreators'
import { connect } from 'react-redux';
import { Card, Icon, List } from 'antd';

class Detail extends PureComponent {
    
    render() {
        const newList = this.props.list;
        const id = this.props.match.params.id;
        const data = [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
          ];
        return ( 
            <DetailWrapper>
                <Header>{newList.getIn([id-1,'title'])}</Header>
                <Content>
                    <div class='pic-div'>
                        <img src={newList.getIn([id-1,'pic'])} alt=''/>
                    </div>
                    <p>{newList.getIn([id-1,'description'])}</p>
                </Content>
                <Card title="Todo List" extra={<Icon type="plus" />} style={{ margin: '80px 0 0 10%', width: '80%' }}>
                <List
                    size="large"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                    />
                </Card>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getData(this.props.match.params.id);
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get('detail').get('list')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       getData(id) {
           dispatch(actionCreators.getDetail(id));
       }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);