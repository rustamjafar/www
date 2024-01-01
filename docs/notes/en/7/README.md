20231008120442

# latex: fonts terminology

* [font sizes](#font-sizes)
* [font styles](#font-styles)
* [font families](#font-families)
* [font typefaces](#font-typefaces)
* [workflow](#workflow)

here i will try to describe some confusing terms i've used while setting up my
latex document:

* font sizes
* font styles
* font families
* font typefaces

## font sizes

in latex font size is declared by using special commands:

* `\small`
* `\large`
* etc.

check out ref guide <https://en.wikibooks.org/wiki/LaTeX/Fonts#Sizing_text> for a
complete list

i also want to note that these commands are **relative to the size set in
document's preamble**

## font styles

styles in latex are bold, italics, underlined, etc.

check out ref guide <https://en.wikibooks.org/wiki/LaTeX/Fonts#Font_styles> for a
complete list

## font families

in latex font family is the first setting configured after selecting typeface. so, for
example, you have one big typeface which itself can contain one or several different
families. different typefaces have a different amount of families you can choose.
thus you've to check which font families are available in the font typeface,
before using it [typeface] in your document.

generally, families in latex are:

* `rmdefault` - roman (serif)
* `sfdefault` - sans
* `ttdefault` - typewriter

check out ref guide <https://en.wikibooks.org/wiki/LaTeX/Fonts#Font_families> for a
complete list

## font typefaces

these are what you're used to select when choosing font in standard *ms word*
editor. include:

* Times New Roman
* Arial
* Courier
* you name it.

## workflow

so, to stay consistent in configuring your font settings i prefer the following
workflow order:

typeface > family > style > size

---

recommended book:  *latex (beginners) - packt*

<https://www.packtpub.com/product/latex-beginners-guide/9781847199867>
