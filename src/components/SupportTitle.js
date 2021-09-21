import React from 'react';
import styled from "styled-components";

const StyledBanner = styled.header`
    height: 150px;
    background-color: #949BAD;
    padding: 10px 10px 10px 30px;
    margin-top: 1px;
    text-align: center;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12),0 5px 5px 0 rgba(0,0,0,.2);
`;

const StyledHeading = styled.div`
    margin-top: 10px;
    font-size: 55px;
    color: #F4F5F7;
`;

const StyledDescription = styled.div`
    margin-top: 5px;
    font-size: 20px;
    color: #F4F5F7;
`;


const SupportTitle = () => {
    return (
        <StyledBanner>
            <StyledHeading>Support Form</StyledHeading>
            <StyledDescription>Please input your name, contact number, and request details below!</StyledDescription>
        </StyledBanner>
    )
}

export default SupportTitle;