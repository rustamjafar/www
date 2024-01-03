20240102133615

# latex: installing tex

i use ubuntu server 22.04 lts

## issue

the thing w/ installing tex distribution through ubuntu repositories, such as apt,
apt-get, etc., is that you won't be able to manage stand-alone tex packages
later as needed.

<https://help.ubuntu.com/community/LaTeX>

so, for you to install single *tex package* you first have to check in which *ubuntu
package* it is located, through `apt-cache search <tex-package-name>`, and
then install that *ubuntu package* which in turn contains other unnecessary
*tex packages* that you don't need right now, thus taking free space on you
machine.

## solution

in order for you to be able to install tex packages one by one i recommend
you to install texlive distribition as stated on the page below:

<https://tug.org/texlive/doc/texlive-en/texlive-en.html#installation>
