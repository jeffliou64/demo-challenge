export const getTalkdeskTokenAPI = async() => {
    console.log("getting Token");
    try {
        const response = await fetch('/token',{
            method: 'POST'
        });
        const body = await response.json();
        console.log(body);
        return body;
    } catch(error){
        console.log(error);
        return error;
    }
};

export const getTalkdeskCallbackAPI = async(token, customerNumber, callBackData) => {
    console.log("getting Callback");
    var payload = callBackData;
    payload = Object.assign({'access_token': token}, {'customerNumber': customerNumber}, {'fields': callBackData})
    //console.log(payload)
    
    try {
        const response = await fetch('/callback',{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(payload)
        });
        const body = await response.json();
        console.log(body);
        return body;
    } catch(error){
        console.log(error);
        return error;
    }
};