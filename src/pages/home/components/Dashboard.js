import React, { PureComponent } from 'react';
import { WritterWrapper, ProjectItem } from '../style';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends PureComponent {

    listItem(item, index) {
        return (
            <Link key={index} to={'/detail/' + item.get('id')} style={{ textDecoration: 'none' }}>
                <ProjectItem>
                    - {item.get('title')}
                </ProjectItem>
            </Link>
        )
    }

    render() {
        return <WritterWrapper>
            <h3>Welcome, Duke</h3>
            <p>You have {this.props.articleList.size} projects</p>
            {this.props.articleList.map((item, index) => {
                    return this.listItem(item, index);
                })}
        </WritterWrapper>;
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