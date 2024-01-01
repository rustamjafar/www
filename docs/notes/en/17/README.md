20231231113805

# nginx: local server static webpage

* [mime types](#mime-types)
* [403 forbidden](#403-forbidden)

below are some problems that occured while i was setting up nginx local server
for testing my website.

## mime types

when browser throws out *mime* type error, try adding following to nginx config
file `/etc/nginx/nginx.conf`:

```
http {
  include /etc/nginx/mime.types;
  include /etc/nginx/conf.d/*.conf;
}
```
don't forget reloading w/:

`sudo nginx -s reload`

## 403 forbidden

first, read about this error here:

<https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403>

then, set `user` in your `/etc/nginx/nginx.conf` file as:

`user root;`

in my case this small change has fixed the problem
