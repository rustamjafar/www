20230912082236
 
# ssh: server and dynamic port forwarding

* [running `sshd`](#running-sshd)
* [`sshd.service` not found on ubuntu](#sshd.service-not-found-on-ubuntu)
* [ssh config file](#ssh-config-file)
* [which key where](#which-key-where)

### running `sshd`

keep in mind that running `sshd` on *ubuntu*, starts server in current
user scope, and won't start it system-wide. thus, when running these commands:

1. `/usr/sbin/sshd` and then
1. `systemctl start sshd`

you get `inactive` as the response. so, to start server system-wide just run
the following command:

```
systemctl start <sshd | ssh>
```

now, after running `system status sshd` command, you'll find its status changed
to `active`.

*This is only done to ease management of ssh server through `systemctl`
commands*

### `sshd.service` not found on ubuntu

1. `sudo apt purge openssh-server`
2. `sudo apt install openssh-server -y`

here, the `purge` command is what makes the difference.

### ssh config file

when you start system-wide ssh server through `systemctl`, you should edit
global config file which is usually located in `/etc/ssh/sshd_config/`.

configuring server through `sshd -f <your-config-file>` is done only when you start
client-wide ssh server.

### which key where

small reminder here

* remote `hostkey` -> local `known_hosts`
* local `publickey` -> remote `authorized_keys`

## dynamic port forwarding

to configure dynamic port forwarding, ssh makes use of `socks` protocol. thus
general syntax is:

```
ssh -D <local-port> <remote-username>@<remote-host>
```

then i wanted to enter something like this in firefox search bar

`localhost:8000`

to get into my vmware machine, but firefox wouldn't allow me to. after some
searching, i've found this issue described here

<https://unix.stackexchange.com/questions/532292/browsing-localhost-via-ssh-socks-tunnel-not-working>

the thing is, is that firefox browser won't tunnel `localhost` address through
proxy, thus you need to change firefox internal configuration in order to 
force it:

1. type `about:config` in search bar, then accept all risks and continue
1. change `network.proxy.allow_hijacking_localhost` to true

that's it. now you can proxy you `localhost` address w/ firefox. but keep in
mind that these settings vary between different browsers.

---

recommended book: *ssh - oreilly*

<https://www.oreilly.com/library/view/ssh-the-secure/0596008953/>
