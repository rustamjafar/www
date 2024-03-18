20240317085954

# ssh: keep alive the session

* [server keep alive](#server-keep-alive)
* [client keep alive](#client-keep-alive)

## server keep alive

the settings shown below has to be put into `config` file on the *server* side

## client keep alive

the settings shown below has to be put into `.ssh/config` on the *client* side

* `ServerAliveCountMax <number>` means:

client will send `<number>` of packets before disconnecting from the sever

* `ServerAliveInterval `<seconds>` means:

client will send packets every `<seconds>` to keep the connection alive

thanks to <https://www.golinuxcloud.com/keep-alive-ssh-sessions-in-linux/#Why_SSH_connections_close_automatically_after_some_time>
