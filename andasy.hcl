# andasy.hcl app configuration file generated for portfolioanitha on Wednesday, 06-Aug-25 16:00:42 SAST
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "portfolioanitha"

app {

  env = {
    HOST = "::"
  }

  port = 3000

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "portfolioanitha"
  }

}
