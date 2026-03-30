variable "domain_name" {
  description = "Custom domain name (e.g. www.example.com)"
  type        = string
}

variable "bucket_name" {
  description = "S3 bucket for static site"
  type        = string
}