this page is to be written in asciidoc

# webpage

root folder is `docs/`

## structure

### mbuild script

usage: mbuild <root | lang <ar | en | he | ru>>

### makeindex script

usage: makeindex lang <ar | en | he |ru>

purpose: create `index.md` in `notes/$LANG`

### makenote script

usage: makenote <ar | en | he |ru>

for `mbuild` script to run properly

* launch it only when you're inside git pages repo on your local machine
* repo should contain `docs/` folder
* repo should contain `notes/` folder
* note should contain `date` specified on 1 line (to be used as a title)

## just a

*gmt* is the time standard

for long notes toc is built w/ `tocbuild` script

built w/ `mbuild` script

available at:

* https://www.rustamjafar.com
