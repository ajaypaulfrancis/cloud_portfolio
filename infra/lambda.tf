resource "aws_lambda_function" "visitor_counter" {
  function_name = "visitor_counter"
  role          = aws_iam_role.lambda_role.arn
  handler       = "visitor_counter.lambda_handler"
  runtime       = "python3.12"
  filename      = "${path.module}/lambda/function.zip"

  source_code_hash = filebase64sha256(
    "${path.module}/lambda/function.zip"
  )

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.visitor_counter.name
    }
  }
}
