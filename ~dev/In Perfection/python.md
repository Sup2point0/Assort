# In Perfection – Python
<!-- #SQUARK live!
| dest = dev/in-perfection/python
| title = Python
| desc = Everything I love and dislove about the Python programming language
| style = dev
| series = In Perfection
| index = lists / dev
| shard = #INDEX / opinion
-->


<br>


## What I Love

### Aesthetics
Python is so clean.

### Docstrings
This is always the feature I miss most when switching to other languages. It’s an astonishingly good solution to the issue of documentation, fitting it right alongside the code. It’s such a staple of Python that code without docstrings looks ...empty.

Sure, comments work the same way, but docstrings give a consistent, conventional way to indicate “yo, this is documentation, you can always refer to it”. Where the difference shines for me is that docstrings and comments are highlighted totally differently – which makes sense, because they tend to serve different purposes. Docstrings are for reference when using something externally; comments explain what’s happened within.

### Type Hinting

### Objects
Everything is an object. Everything is an object!

It makes so, so much sense. The entire language slots together in an incredibly elegant and natural way. It’s so intuitive to me that I can’t imagine any other way it could be.

### Dunder Methods
Whenever I talk about Python I just want to use the word ‘elegant’ again, but that’s exactly what these are. They just look so ...Pythonic. And it feels so much less hacky than, say, being able to override operators in C# where you literally declare a definition for `+` and `-`.

### ...
It’s pretty cool. The `...` object, y’know?

### Packages
The privilege of `__init__.py` existing is something you don’t understand until you *start using it*. It makes very little functional difference, but makes imports just that much cleaner.


<br>


## What I Love Less

### Aesthetics
That said, Python’s concision is also somewhat of an achilles heel. The lack of braces to break up the code does mean it can get pretty *dense* at times.[^dense]

[^dense]: Machine learning code always manages to end up looking like this, fsr. Or any kind of data handling, really...

```
[training a neural network]
```

Of course, we add line breaks and spread things out over multiple lines, but this often then leads to overly *sparse* code. The prolific case is functions: many take multiple arguments, and if there’s any more than 2 keyword arguments it becomes a lot more readable if they’re each on their own line.

```py
# acceptable
evaluate("python", metrics = "default")

# starting to get a little cluttered!
evaluate("python", metrics = "custom", origin = "sup")

# let’s spread it out...
evaluate(
  "python",
  metrics = "custom",
  origin = "sup",
  strict = True,
  normalise = False,
)
```

This is really nice for declarative stuff, but if this is part of an algorithm or sequence it becomes pretty unwieldy to navigate that with this (or more of it) bulking it all up.[^unwieldy] And if we start nesting stuff, well then, it’s starting to look like JavaScript’s callback hell...

[^unwieldy]: PTSD to Discord bot programming...

```py
# uh oh...
evaluate(
  "python",
  metrics = "custom",
  origin = {
    "author": "Sup#2.0",
    "platform": "GitHub",
  },
  strict = True,
  normalise = False,
  params = {
    "beauty": 4.0,
    "concision": 4.0,
    "function": 2.0,
    "awesomeness": 1.0,
  },
)
```

### Imports
Gimme a break. It feels like no matter how many projects I work on, this never fails to crop up as an insurmountable issue.

Burned into my mind are the words no dev ever wants to hear again:

```
attempted relative import with no known parent package
attempted relative import beyond top-level package
```
