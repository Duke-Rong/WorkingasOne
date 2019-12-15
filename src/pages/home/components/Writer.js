import React, { PureComponent } from 'react';
import { WritterWrapper } from '../style'
import { connect } from 'react-redux'

class Writer extends PureComponent {
    render() {
        return <WritterWrapper>
            Homework
        </WritterWrapper>;
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Writer);