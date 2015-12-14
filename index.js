var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;


console.log('Loading function');

exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));

    var key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    var url = 'http://54.189.147.2/server/rest/services/utils/pingstreet/GPServer/gpTaskPingstreet/execute?f=pjson&key=' + key;
    console.log(url);
    
    var client = new XMLHttpRequest();
    client.open('POST', url);
    client.addEventListener('load', function() {
      var data = client.response;
      
      console.log(data);
      console.log('url was successfully executed with key ');

    }, false);
    client.send();
};

