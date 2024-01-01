20231013183014

# git: commit identity

* [issue](#issue)
* [background](#background)
  * [git](#git)
  * [github](#github)
* [workflow](#workflow)
  * [check `git` configurations](#check-git-configurations)
  * [check commit's author and committer](#check-commits-author-and-committer)
  * [changing *author email*](#changing-author-email)

## issue

usually, i don't use graphical user interface when working w/ git repos, and all of my work is
happening in terminal. the same w/ github web page, i rarely visit it.
one day, i decided to do so, to see how things are
going there, and discovered that on my github landing page there was no
any single commit that i had been doing through time. actually, when going into
the repos, all of the commits were listed, but...

## background

### git

googling this issue, i've found that *git* tracks commits based on their
*author* and *committer* emails.

the question is who is the author and who is the committer?

an *author* is one who creates a patch file. patch file is, as i get it,
basically, a list of files and changes that will be included in next
commit.

a *committer* is one who makes a patch file one step further into a commit.

the same w/ books. a writer is an author of a book. but a book can have
completely different publisher.

*then i remembered, that i've changed my github email address last month, and
not having this change reproduced in my local config file*

### github

github hosting service treats commit as **yours** if its [commit's] *author email* is
same w/ your *github account email*. no matter who the committer was, if it
has *author email* matched w/ you *github account email* then you're *the author* and
the commit will be displayed on your github landing page.

thus, when i've changed my github email address, i lost ownership of all of my past
commits at once.

## workflow

### check `git` configurations

first of all, once you are in your git repo, it is good to check user name and 
email w/ the following cmds:

* `git config --<global | local> --list | grep user`

i *strongly* recommend you to set git user name and email on you machine
before you start any work w/ the repo,
cause this will get you rid of many troubles hereafter. do this w/ the following:

* `git config --<global | local> user.name "<your-name>"`
* `git config --<global | local> user.name "<your-email>"`

starting from here, your future commits will have both *author email* and *commit
email* the same.

### check commit's author and committer

already having commits in your repo, you can check who is the author and the
committer w/:

`git cat-file -p <commit>`

again, for github to treat the commit as yours, *author email* has to match w/
*github account email*.

### changing *author email*

in my case, i wanted to change commits' author name. some googling, and i've
done this w/ the following:

```
git rebase -r --root --exec \
'git commit --amend --no-edit --author="your-name <your-email>"
```

this introduces completely new commits w/ new sha-hashes. in fact, only your
*account email* will be changed. in order for *commit email* to be changed, you
have to make sure that you've configured `--<global | local>` name and
email address before executing this command.

---

recommended book: *git - oreilly*

<https://www.oreilly.com/library/view/version-control-with/9781492091189/>
