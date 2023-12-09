20231007174446

# `entr` and bash scripting

using `entr` while writing bash scripts is precious. this small utility
**listens to the file, you give it, being modified and executes whatever
it is set to execute**. you can even execute the same file to which `entr` listens to.

so, in my case, as i am not a pro bash script writer, the usage is:

```
entr -sc "source <file_to_execute>" <<< $( echo <file_to_listen> )
```

i also want to note that there may be completely different `file_to_execute`
and `file_to_listen`.

---

recommended book:

* *bash - oreilly*

  <https://www.oreilly.com/library/view/learning-the-bash/0596009658/>
