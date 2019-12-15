import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'

class Recommend extends PureComponent {
    render() {
        return <RecommendWrapper>
            {this.props.recommendList.map((item)=>{
                return <RecommendItem key={item.get('id')} imgurl={item.get('pic')}/>
            })}
        </RecommendWrapper>;
    }
}

const mapStateToProps = (state) => {
    return {
        recommendList: state.get('home').get('recommendList')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recommend);