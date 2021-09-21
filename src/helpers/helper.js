export function createFields (callFields){
    let fields = [
        {
            "data_type": "text",
            "display_name": "customer Name",
            "name": "customer_name",
            "tooltip_text": "Name of customer",
            "value": callFields['name']
        },
        {
            "data_type": "phone",
            "display_name": "customer phone",
            "name": "customer_phone",
            "tooltip_text": "Phone number of customer",
            "value": callFields['phoneNumber']
        },
        {
            "data_type": "text",
            "display_name": "customer country",
            "name": "customer_country",
            "tooltip_text": "Country of customer",
            "value": callFields['country']
        },
        {
            "data_type": "text",
            "display_name": "Request Subject",
            "name": "request_subject",
            "tooltip_text": "Subject of support request",
            "value": callFields['subject']
        },
        {
            "data_type": "text",
            "display_name": "Request description",
            "name": "request_description",
            "tooltip_text": "Description of support rquest",
            "value": callFields['description']
        }
    ]
    return fields;
}

export function extractFormValues(values) {
    let output = {};
    output['name']=values[0].value;
    output['phoneNumber']=values[1].value;
    output['country']=values[2].value;
    output['subject']=values[3].value;
    output['description']=values[4].value;
    return output;
}