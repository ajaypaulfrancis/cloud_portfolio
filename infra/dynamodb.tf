resource "aws_dynamodb_table" "visitor_counter" {
  name         = "visitor_counter"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "site_id"

  attribute {
    name = "site_id"
    type = "S"
  }

  tags = {
    Project = "cloud-portfolio"
  }
}
