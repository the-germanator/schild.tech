terraform {
   backend "s3" {
    bucket = "schild-tech-tf"
    key = "tf-prod"
    region = "us-east-1"
    endpoint = "nyc3.digitaloceanspaces.com"
    skip_credentials_validation = true
    skip_metadata_api_check = true
  }
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}
variable "do_token" {}

provider "digitalocean" {
  token = var.do_token
}

resource "digitalocean_droplet" "prod" {
  image  = "ubuntu-18-04-x64"
  name   = "prod"
  region = "nyc3"
  size   = "s-2vcpu-2gb"
  ssh_keys = [ "31420189" ]
}

resource "digitalocean_floating_ip_assignment" "prod_floating_ips" {
  ip_address = "138.197.55.27"
  droplet_id = digitalocean_droplet.prod.id
}
