provider "aws" {
    region = "ap-southeast-1"
    access_key = "test1"
    secret_key = "testa"
    skip_credentials_validation = true 
    skip_requesting_account_id = true
    skip_metadata_api_check = true
    endpoints {
      sqs = "http://localhost:4566/"
    }
}

resource "aws_sqs_queue" "queue" {
  name = "test-sqs"
}