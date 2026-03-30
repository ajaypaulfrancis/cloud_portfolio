output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.site.domain_name
}

output "acm_validation_records" {
  value = aws_acm_certificate.cert.domain_validation_options
}
output "visitor_api_url" {
  value = "${aws_apigatewayv2_api.visitor_api.api_endpoint}/counter"
}
