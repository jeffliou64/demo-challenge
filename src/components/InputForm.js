import React, {useState} from "react";
import styled from "styled-components";
import { getTalkdeskTokenAPI, getTalkdeskCallbackAPI } from "../services/calls";
import '../App.css';
import { createFields, extractFormValues} from "../helpers/helper";
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

const StyledInput = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
    font-size: 16px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12),0 1px 3px 0 rgba(0,0,0,.2);
`;

const StyledDetails = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
    font-size: 18px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12),0 1px 3px 0 rgba(0,0,0,.2);
`;

const StyledSelect = styled.select`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12),0 1px 3px 0 rgba(0,0,0,.2);
    cursor:pointer;
    font-size: 16px;
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

const InputForm = (history) => {
    const [phoneState, setPhoneState] = useState();
    let formSubmission = {};
    let supportFormContext = [];
    let customerNumber = "";

    const normalizeInput = (value, previousValue) => {
        if (!value) return value;
        const currentValue = value.replace(/[^\d]/g, '');
        const cvLength = currentValue.length;
        
        if (!previousValue || value.length > previousValue.length) {
          if (cvLength < 4) return currentValue;
          if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
          return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
        }
    };

    function handlePhoneChange({target:{value}}) {
        setPhoneState(normalizeInput(value, phoneState))
    }

    const submitAPI = async(event) => {
        event.preventDefault();
        formSubmission = extractFormValues(event.target);
        supportFormContext = createFields(formSubmission);
        customerNumber = formSubmission['phoneNumber'];
        
        history.push('/Submitted');
        // await getTalkdeskTokenAPI().then((res) => {
        //         //console.log(res.access_token);
        //         let accessToken = res.access_token;

        //         getTalkdeskCallbackAPI(accessToken, customerNumber, supportFormContext).then((res) => {
        //                 console.log(res);
        //                 history.push('/Submitted');
        //             }).catch(err => {
        //                 console.log(err);
        //         });
        //     }).catch(err => {
        //         console.log(err);
        // });
    }
    return (
        <div class="webForm">
            <StyledInputForm onSubmit={submitAPI}>
                <div class="row">
                    <div class="col-30">
                        <StyledLabel>Full Name</StyledLabel>
                    </div>
                    <div class="col-70">
                        <StyledInput type="text" name="name" size="30" placeholder="First Last"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-30">
                    <StyledLabel>Contact number</StyledLabel>
                    </div>
                    <div class="col-70">
                        <StyledInput type="text" name="phoneNumber" size="10" value={phoneState} placeholder="(000) 000-0000" onChange={handlePhoneChange}/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-30">
                        <StyledLabel>Select your Country</StyledLabel>
                    </div>
                    <div class="col-70">
                        <StyledSelect id="country" name="country">
                            <option value="" disabled selected>Please select: </option>
                            <option value="usa">USA</option>
                            <option value="canada">Canada</option>
                            <option value="australia">Australia</option>
                            <option value="uk">United Kingdom</option>
                        </StyledSelect>
                    </div>
                </div>
                <div class="row">
                    <div class="col-30">
                        <StyledLabel>What can we help you with?</StyledLabel>
                    </div>
                    <div class="col-70">
                        <StyledSelect id="subject" name="subject">
                            <option value="" disabled selected>Please select: </option>
                            <option value="general">1. General Inquiry</option>
                            <option value="techincalSupport">2. Technical Support</option>
                            <option value="agentSupport">3. Agent Support</option>
                            <option value="callsSupport">4. Calls Support</option>
                        </StyledSelect>
                    </div>
                </div>
                <div class="row">
                    <div class="col-30">
                        <StyledLabel>Request details</StyledLabel>
                    </div>
                    <div class="col-70">
                        <StyledDetails type="text" name="description" placeholder="Please write your question or a description of the problem you're trying to solve here."/>
                    </div>
                </div>
                <StyledSubmit type="submit"> Submit </StyledSubmit>
            </StyledInputForm>
        </div>

    );
};

export default InputForm;