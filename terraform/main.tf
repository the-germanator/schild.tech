terraform {
    required_providers {
        digitalocean = {
            source = "digitalocean/digitalocean"
            version = "~> 2.0"
        }
    }
}
variable "do_token" {}

provider "digitalocean" {
  token = var.do_token
}

# resource "digitalocean_droplet" "test" {
#   image  = "ubuntu-18-04-x64"
#   name   = "test"
#   region = "nyc3"
#   size   = "s-1vcpu-1gb"
# }


# resource "digitalocean_droplet" "prod" {
#   image  = "ubuntu-18-04-x64"
#   name   = "prod"
#   region = "nyc3"
#   size   = "s-1vcpu-1gb"
# }

# resource "digitalocean_floating_ip_assignment" "test_floating_ips" {
#   ip_address = "159.89.252.171"
#   droplet_id = digitalocean_droplet.test.id
# }
# resource "digitalocean_floating_ip_assignment" "prod_floating_ips" {
#   ip_address = "138.197.55.27"
#   droplet_id = digitalocean_droplet.prod.id
# }






# output "test_ip_address" {
#     value = digitalocean_droplet.test.ipv4_address
# }
# output "prod_ip_address" {
#     value = digitalocean_droplet.prod.ipv4_address
# }