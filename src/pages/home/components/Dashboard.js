import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Collapse, Timeline } from 'antd';

class Dashboard extends PureComponent {

    // Collapse + TimeLine

    listItem(item, index) {
        return (
            <Link key={index} to={'/detail/' + item.get('id')} style={{ textDecoration: 'none' }}>
                <Timeline.Item>
                    - {item.get('title')}
                </Timeline.Item>
            </Link>
        )
    }

    render() {
        const { Panel } = Collapse;
        return (
            <Collapse defaultActiveKey={['1']}>
                <Panel header="Welcome, Duke" key="1">
                    <p>You have {this.props.articleList.size} projects</p>
                    <br />
                    <Timeline>
                        {this.props.articleList.map((item, index) => {
                            return this.listItem(item, index);
                        })}
                    </Timeline>
                </Panel>
            </Collapse>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.get('home').get('articleList')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);