terraform {
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

resource "digitalocean_droplet" "test" {
  image  = "ubuntu-18-04-x64"
  name   = "test"
  region = "nyc3"
  size   = "s-1vcpu-1gb"
  ssh_keys = [ "31420095" ]
}

resource "digitalocean_floating_ip_assignment" "test_floating_ips" {
  ip_address = "159.89.252.171"
  droplet_id = digitalocean_droplet.test.id
}