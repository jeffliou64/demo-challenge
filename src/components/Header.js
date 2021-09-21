import React from 'react';
import styled from "styled-components";
import talkdesk_icon from '../talkdesk_icon_3.svg';
import history from "../helpers/history";
import "../App.css"

const StyledHeader = styled.header`
    height: 60px;
    background-color: #172241;
    padding: 10px 10px 10px 30px;
    margin: 0;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12),0 5px 5px 0 rgba(0,0,0,.5);
`;

const StyledLogo = styled.img`
    float: left;
    width: 5%;
    cursor:pointer;
    text-align: left;
    display: inline-block;
    height: 40px;
    width: 40px;
`;


const StyledName = styled.div`
    float: right;
    width: 20%;
    font-size: 16px;
    color:white;
    text-align: right;
`;

const StyledNavBar = styled.div`
    float: left;
    padding: 10px;
    margin-left: 10px;
    width: 40%;
    color: white;
    text-align: left;
    font-family: Roboto,"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
`;

const StyledNavLink = styled.div`
    cursor: pointer;
    float: left;
    margin: 0px 12px 10px 12px;
    font-size: 16px;
    opacity: 0.8;
    transition: 0.3s;
    &:hover {
        opacity: 1;
    }
`;

const Header = () => {
    const returnToHome = () => {
        history.push('/');
        window.location.reload();
    }

    return (
        <StyledHeader>
            <StyledLogo src={talkdesk_icon} alt="icon" onClick={returnToHome}/>
            <StyledNavBar>
                <StyledNavLink>Calls</StyledNavLink>
                <StyledNavLink>Contacts</StyledNavLink>
                <StyledNavLink>Voicemails</StyledNavLink>
            </StyledNavBar>
            <StyledName invert>
                <div>Talkdesk Demo</div>
                <div>Jeffrey Liou</div>
            </StyledName>
        </StyledHeader>
    )
}

export default Header;