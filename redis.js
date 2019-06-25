var redis = require("redis");
var client = redis.createClient(6379,"127.0.0.1");
// client.on('error',function(err){
//     console.log("Error" + err);
// })
// client.set('key1','value1',redis.print);
// client.get('key1',redis.print);

client.subscribe('testPublish');

client.on('message', function(channel, msg){
  console.log('client.on message, channel:', channel, ' message:', msg);
});