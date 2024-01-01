20240101202420

# ssh: permissions

here's a small list of permissions that ssh wants you to follow

* `.ssh` directory: `700 (drwx------)`
* public key: `644 (rw-r--r--)`
* private key: `600 (rw-------)`
* home directory: `755 (drwxr-xr-x)`

thanks to 

<https://superuser.com/questions/215504/permissions-on-private-key-in-ssh-folder>
