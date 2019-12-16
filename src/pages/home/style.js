import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 1030px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    margin-top: 30px;
    width: 700px;
    float: left;
    background-color:#F5F5F5;
    text-indent:1em;
    border-radius: 15px;
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
`;

export const ListItem = styled.div`
    padding: 15px 20px;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .list-pic {
        display: block;
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
        background: url(${(props) => props.imgurl});
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
`;

export const ListInfo = styled.div`
    width: 400px;
    float: left;
    .title {
        line-height: 18px;
        font-size: 24px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 18px;
        font-size: 18px;
        color: #999;
    }
`;

export const Button = styled.div`
    float: left;
    width: 35%;
    height: 40px;
    margin: 30px 0px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    &.addProject {
        margin: 30px 30px;
        background: #F08080;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: -10px;
    border-radius: 20px;
    background-color: ${(props) => props.backgroundColor};
    line-height: 50px;
    text-align: center;
    p {
        font-size:20px;
        color: ${(props) => props.contentColor};
    }
`;

export const WritterWrapper = styled.div`
    width: 278px;
    height: 300px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    text-indent: 1em;
    background-color: #F5F5F5;
`;

export const ProjectItem = styled.p`
    color: #006400;
`;