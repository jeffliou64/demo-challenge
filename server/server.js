const express = require('express')
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express()
const port = process.env.PORT || 5000;
app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });
  

app.post('/api/world', (req,res) => {
    console.log(req.body);
    res.send(`I received your post request. this is what you sent me: ${req.body.post}`);
});

app.post('/token', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const params = new URLSearchParams();
    params.append('scope', 'callback:write')
    params.append('grant_type', 'client_credentials')

    let url = "https://demoeng.talkdeskid.com/oauth/token"
    let code = "MGY0YmRiNWYxNTgyNDUyNmJmMjNkODZjMmQwYzlhYTc6amQ0c25LRU9xMmZ0WkNfaDdxWWthREtCYmo5SU93dEV4YVhLQ1RKWEt4RFczVi1lU0lMcVBEbm5Zb2hGbFIxVVZBQm1XS196NTNpeUZVNjdNc0RYemc="

    await axios.post(url, params, {
        headers: {
            'Authorization': `Basic ${code}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(resp => {
        //console.log(resp.data);
        res.send(resp.data);
    }).catch(error=>{
        //console.log(error);
        res.send(error);
    });
});

app.post('/callback', async(request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    console.log(request.body);
    let token = request.body.access_token;
    let url = "https://api.talkdeskapp.com/calls/callback"
    let data = JSON.stringify({
        'talkdesk_phone_number': '+15034794672',
        'contact_phone_number': `+1${request.body.customerNumber}`
        // ,
        // 'context': {
        //     'fields': request.body.fields
        // }
    });

    console.log(data);

    await axios.request({
        method: 'post',
        url: "https://api.talkdeskapp.com/calls/callback",
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        data
    }).then(resp => {
        //console.log(resp.data);
        response.send(resp.data);
    }).catch(error=>{
        //console.log(error);
        response.send(error);
    });
})
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})