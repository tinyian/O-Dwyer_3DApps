const express = require('express');

var client_id = '650c310f0b86447a986d654cad6f4053';
var redirect_uri = 'http://users.sussex.ac.uk/~io202/dissertation/client/public/index.html';

const app = express();

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});
