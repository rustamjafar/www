20240211114916

# css: multi-directional layout

here're some notes for those of you who use multi-dir on their websites.

## css-tricks

first, i recommend scamming through this article if you can find a solution here.

<https://css-tricks.com/building-multi-directional-layouts>

`<div dir="auto">{content}</div>`

you can use any other tag in place of `div`. just keep in mind the tag is not
recursive, meaning its children won't be affected by this.

## unicode-bidi

i've also found smth. interesting on stack overflow

```
* {
  unicode-bidi: plaintext;
  text-align: start;
}
```

the same goes here as well, `*` selector can be replaced as you wish.

thanks to user *mamrezo*

<https://stackoverflow.com/questions/44660362/how-to-test-css-direction-auto-as-an-english-speaker>
