#!/usr/bin/env node

/* jshint quotmark: false */

'use strict';
var lambda = require('./index.js');

var evt = {
    "Records":
        [{
            "s3": {
                "object": {
                    "key": "test"
                }
            }
        }]
};

var context = {
    done: function(err, data) {
        if(err) console.log('lambda exited with errors: ', err);
        else console.log('lambda exited without errors ', JSON.stringify(data));
    }
};

lambda.handler(evt, context);
