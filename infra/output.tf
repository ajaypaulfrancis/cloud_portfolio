output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.site.domain_name
}

output "acm_validation_records" {
  value = aws_acm_certificate.cert.domain_validation_options
}
