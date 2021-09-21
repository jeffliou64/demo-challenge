import React from 'react';
import styled from "styled-components";
import talkdesk_icon from '../talkdesk_icon_3.svg';
import "../App.css";

const StyledFooter = styled.div`
    background-color: #F8F8F8;
    border-top: 1px solid #E7E7E7;
    text-align: center;
    padding: 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 60px;
    width: 100%;
    color: #5405BD;
`;

const Footer = () => {

    return(
        <StyledFooter>
            Terms of Service&emsp;|&emsp;Terms of Use&emsp;|&emsp;Privacy Policy&emsp;|&emsp;© 2021 Talkdesk
        </StyledFooter>
    )
}

export default Footer;