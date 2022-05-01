var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public')); //__dir and not _dir
var port = 8000; // you can use any port
app.listen(port);
console.log('server on' + port);


app.post('/order', (req, res) => {
    const accountSid = 'REDACTED';
    const authToken = 'REDATED';
    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
        from: 'REDACTED',
        to: 'REDACTED'
      })
      .then(message => console.log(message.sid));
});