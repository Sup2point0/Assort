# `git checkout future-reference`

Unfortunately command line commands take a pretty significant amount of repetition and regular usage to sink in. I mean, I somehow managed to forget `mkdir` creates a folder, so... probably better to note down the really important ones here rather than have to dig up an old Stack Overflow post every time :v


<br>


## Core

Remember `git clone` creates a new folder for the cloned repo, so we don’t need to create it ourselves beforehand.


<br>


## Messing with History

If we’ve pushed to remote, then we’re screwed. If not, then...

### Undo the last commit, but keep the changes locally

```
git reset --soft HEAD^
```

### Undo the last commit, but erase the changes too

```
git reset --hard HEAD^
```

### Retrace to a particular commit id

```
git reset 1f1e33
```


<br>


## Tackling the Submodules

Given a project `superior` and a subproject `interior` which will be a submodule within the project...

### Add, but then you gotta clone too

```
git submodule add https://github.com/Sup2point0/interior
git submodule update --init
```

### We’re not on a branch!

```
cd interior
git checkout main
```

### Update

```
git submodule update --remote
```

### Delete, and delete properly

```
git rm interior
```
