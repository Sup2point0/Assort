# *In Perfection*
<!-- #SQUARK live!
| dest = dev/in-perfection
| index = dev / in-perfection
| date = 2026 September 7
| update = 2026 September 9
-->

I’ve worked with quite a few programming languages in my time. Each language has its own quirks, oddities and idiosyncrasies which make it unique and ultimately shape its character.

Here you’ll find those little parts of each language that I really love, or don’t really love. Many of these will be really small things – but hey, when you’re working with a language every day, deep in a project, it’s precisely those little things that make or break your day ;)


<br>


## Directory

(In the order that I learnt them:)

- [Python](python.md)
- [Ruby](ruby.md)
- [Haskell](haskell.md)
- [Rust](rust.md)


<br>


## Crafting the Perfect Language

No language is perfect, and I don’t think perfection is possible.[^perfection] But every language I’ve worked with has at least one unique feature that I adore, and when I think of that language, and why I might want to work in it, my mind will jump to that feature.

[^perfection]: I mean, I made [supcode](https://github.com/Sup2point0/supcode), and I don’t think it’s perfect.

### Python
For Python, it’s function/method parameters.

```py
def f1(p, q, /): ...
def f2(p, q, *, r = None): ...
def f3(first, *rest): ...
def f4(**pairs: dict[str, bool]): ...
```

Python is the real deal. It’s got everything – optional parameters, keyword parameters, variadic arguments, keyword enforcing with `*`, positional enforcing with `/`, type hinting. It’s incredibly flexible, but intuitive and ergonomic.

Of all these features, I think keyword arguments is the most beneficial.[^kwarg] The languages I work in most, TypeScript and Rust, don’t have this, and it drives me nuts.

[^kwarg]: Yeah, even over optional parameters! At least you can workaround by defining a differently named callable that forwards a default value to the actual function, like `function open_write_connection() { open_connection("write"); }`

### C#
C# has a lot of noise that I often lose track of, but amidst that are `required`, `init` and record initialisation.

### JavaScript/TypeScript
Plain-old JS objects (POJOs), but in particular, *hierarchical* objects.

### Ruby
`!` and `?` in identifiers.

Such a tiny feature, but so immensely useful.

### Haskell
Haskell is a tough one, because a lot of the stuff I love *technically* already exists in all other languages – it’s just that Haskell makes it effortless, first-class, and unbearably concise.

- Pattern-matched literal definitions
- Recursion
- Locally-scoped helper functions with `where`
- Partial function application

There is one thing I can pick out, though. Allowing `'` in identifiers! My days, the amount of headache I would save by being able to name a variable `ident'`. Ofc, you could argue you *should* give it a more meaningful name, like `ident_normalised`. But there are simply cases where it’s abundantly clear from surrounding context, and you really do just need a throwaway identifier.

### Rust
Rust, being Rust, has quite a few features I adore working with.

- Explicit `&var` and `&mut`. I don’t even need this enforced in other languages, it’s just an extremely useful documentation tool for understanding how a function works.
- Short-circuiting with `?`. It’s so effortless, lightweight, and natural.


<br>
