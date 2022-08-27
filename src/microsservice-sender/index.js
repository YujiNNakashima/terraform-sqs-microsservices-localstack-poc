const AWS = require('aws-sdk');
AWS.config.update({region: 'ap-southeast-1'});

const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

const params = {

  DelaySeconds: 5,
  MessageAttributes: {
    "Title": {
      DataType: "String",
      StringValue: "The Whistler"
    },
    "Author": {
      DataType: "String",
      StringValue: "John Grisham"
    },
    "WeeksOn": {
      DataType: "Number",
      StringValue: "6"
    }
  },
  MessageBody: "O Kenzo é fera na cloud",

  QueueUrl: "http://localhost:4566/000000000000/test-sqs"
};

sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});