const { Consumer } = require('sqs-consumer');
const AWS = require('aws-sdk');
AWS.config.update({region: 'ap-southeast-1'});

const app = Consumer.create({
  queueUrl: 'http://localhost:4566/000000000000/test-sqs',
  handleMessage: async (message) => {
    console.log(message)
  },
  sqs: new AWS.SQS()
});

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.start();