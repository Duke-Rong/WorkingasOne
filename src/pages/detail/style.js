import styled from 'styled-components';

export const DetailWrapper = styled.div`
    overflow: hidden;
    width: 800px;
    margin: 0 auto;
    padding: 0 20px 100px 20px;
    margin-top: 30px;
    background-color:#F5F5F5;
`;

export const Header = styled.div`
    margin: 50px 0 20px 0;
    line-height: 44px;
    font-size: 30px;
    font-weight: 700;
    color: #333;
`;

export const Content = styled.div`
    .pic-div {
        text-align: center;
        img {
            width: 550px;
            height: 300px;
        }
    }
    p { 
        text-indent:2em;
        margin: 25px 0;
        font-size: 16px;
        line-height: 30px;
        color: #2f2f2f;
    }
`;