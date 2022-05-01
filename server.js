var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public')); //__dir and not _dir
var port = 8000; // you can use any port
app.listen(port);
console.log('server on' + port);


app.post('/order', (req, res) => {
    // console.log("HI");
    // const accountSid = 'REDACTED';
    // const authToken = 'REDACTED';
    // const twilio = require('twilio');
    // const client = new twilio(accountSid, authToken);

    // client.messages
    //   .create({
    //     body: 'REDACTE',
    //     from: 'REDACTED',
    //     to: 'REDACTED'
    //   })
    //   .then(message => console.log(message.sid));
    const client = require('twilio')(accountSid, authToken);
    client.calls
      .create({
         url: 'REDACTED',
         to: 'REDACTED',
         from: 'REDACTED'
       })
      .then(call => console.log(call.sid));

    res.redirect('/success')
});

app.get('/success', function (req, res) {
    res.sendFile(__dirname + '/public/success.html')
  })