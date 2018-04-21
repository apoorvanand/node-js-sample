var express = require('express')
var app = express()

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '2t0TVymMMJBPvjmKTYyHILexb',
  consumer_secret: 'wF0j2ns1JleqsoNOGBtvvZ02BTzudF8yBTkYksZptcakrK8KQd',
  access_token_key: '51658568-7YLQ6CF3v6SbSi20OHPJUvcwrbPtDvZOJ97UkDUzH',
  access_token_secret: 'ZfsEeDJrr9LmsSH2fDYp1DSqWe1ClQZkWA89aXpaaKXzX'
});
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  client.get('search/tweets', {q: 'rip avicii',since:2017-04-19,count:20}, function(error, tweets, response) {
   console.log(tweets);
    response.send(tweets);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
  client.get('search/tweets', {q: 'rip avicii',since:2017-04-19,count:20}, function(error, tweets, response) {
   console.log(tweets);
});
})
