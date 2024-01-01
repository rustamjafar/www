20231105052733

# bash: script_dir one liner

here's the small one liner to get the current directory of a script executed

```
SCRIPT_DIR=$(cd $(dirname "${BASH_SOURCE[0]}") && pwd)
```

thanks to

<https://codefather.tech/blog/bash-get-script-directory/>
