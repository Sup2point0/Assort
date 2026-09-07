# *In Perfection*
<!-- #SQUARK live!
| dest = dev/in-perfection
| index = dev / in-perfection
| date = 2026 September 7
| update = 2026 September 7
-->

I’ve worked with quite a few programming languages in my time. Each language has its own quirks, oddities and idiosyncrasies which make it unique and ultimately shape its character.

Here you’ll find those little parts of each language that I really love, or don’t really love. Many of these will be really small things – but hey, when you’re working with a language every day, deep in a project, it’s those little things that trip you up and make things a little less or little more ergonomic ;)


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
For Python, it’s function/method parameters. Python is the real deal. It’s got everything – optional parameters, keyword parameters, arbitrary arguments, keyword enforcing. It’s incredibly flexible, but intuitive and ergonomic.

Of all these features, I think keyword arguments is the most beneficial.[^kwarg] The languages I work in most, TypeScript and Rust, don’t have this, and it drives me nuts.

[^kwarg]: Yeah, even over optional parameters! At least you can workaround by defining a differently named callable that forwards a default value to the actual function, like `function open_write_connection() { open_connection("write"); }`


<br>
