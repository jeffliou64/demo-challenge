import React from "react";
import styled from "styled-components";
import '../App.css';
import history from "../helpers/history";

const StyledInputForm = styled.form`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: 750px;
    display: inline-block;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12),0 1px 3px 0 rgba(0,0,0,.2);
`;

const StyledLabel = styled.div`
    padding: 12px 12px 12px 0;
    display: inline-block;
    font-size:20px;
`;
const StyledSubmit = styled.button`
    margin-top: 20px;
    background-color: #5405BD;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    font-size: 20px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12),0 1px 3px 0 rgba(0,0,0,.2);
`;

const SubmittedForm = () => {
    const changePage = (event) => {
        history.push("/")
    }
    return (
        <div class="webForm">
            <StyledInputForm onSubmit={changePage}>
            <div class="row">
                    <div class="col-30">
                        <StyledLabel>Full Name</StyledLabel>
                    </div>
                </div>
                <StyledSubmit type="submit"> Submit </StyledSubmit>
            </StyledInputForm>
        </div>

    );
};

export default SubmittedForm;