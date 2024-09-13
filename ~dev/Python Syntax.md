# What’s up with my Python syntax?
<!-- #SQUARK live!
| dest = dev/python-syntax
| desc = A deep dive into my Python syntax preferences and conventions.
| style = dev
| duality = dark
| index = dev / writing
| shard = #INDEX / opinion
| date = 2024 spring
| index = 
-->

If you‘ve taken a look at any of my code written in Python, you may have noticed its syntax is perhaps unconventional in many aspects – nothing that actually affects functionality, but plenty of idiosyncrasies that would immediately stick out to any seasoned Pythonista. I am well aware of this, and I apologise if this has caused any difficulty or distress (as I have been notified of – on several occasions) to anyone perusing my code.

I tend to hold very specific personal preferences, especially when it comes to aesthetics. This, of course, means I pay meticulous attention to detail, and care (perhaps a little too much) about how my code looks.[^time] It working is just one aspect; cleaning, optimising, and refining continue for much longer. Ultimately, I endure in this because I have high standards for myself: I endeavour to write clean, clear and consistent code.[^standard] I genuinely believe my style is more effective at achieving this than ‘standard’ Python code conforming to [PEP 8](https://peps.python.org/pep-0008/).[^pep] Every instance where I deviate from convention was a justified and thought-out decision, and each has been reconsidered several times afterwards.

[^time]: It is not entirely untrue that I often spend more time fussing over syntax and style than actually writing code. I find inexplicable joy in this.
[^standard]: As to whether or not I achieve this...
[^pep]: Please note this is only an opinion.

I very much agree (from experience) that “code is read far more than it is written”.[^code] My first large-scale Python project, a [multi-purpose Discord bot<sup>↗</sup>](https://github.com/Sup2point0/PENGUIN), contains some of the most (objectively) horrific code I have ever written, with utterly obfuscated names, ridiculous line breaking, and far too many one-liners.[^line] I still look back fondly on the code for sure, since it is just so *me* – but to anyone who might decide to go back and work on it,[^work] uh, you might wanna procure some spare replacement brain cells.[^brain-cells]

[^code]: Quote by Guido Van Rossum. I think?
[^line]: I thought they looked cool. I mean I still do, but also it’s kinda bad for readability. They’re wonderfully efficient, but can get pretty unwieldy. Use them in moderation, I suppose.
[^work]: That’s me, buddy.
[^brain-cells]: I hear they don’t come cheap nowadays.

At the time, like any programmer who has gone through the journey of development, I thought, *yeah, I’ll perfectly understand how all this works years on*. And now? Oh yeah no, I actually still pretty much get how it works,[^get] but that isn’t to say that continuing development wouldn’t be a nightmare. Cuz it absolutely would be. So many names to re-familiarise with. Dependencies I forgot existed. Navigating the abject mess that is PENGUIN’s 2000+ line `main.py` file.

[^get]: I think. Currently untested.

Oh, and I can still write convention-conforming Python code, I just much prefer writing it in my style, and so that’s the kind you’ll see throughout most of my projects. Some that I intend to be a little more ‘public’ (projects that are a little less ‘casual’, I suppose) will have perhaps less ‘flavourful’ code.[^flavour] Whenever I work collaboratively though, I’m perfectly happy to adjust to whichever style or standard the team is following. Even if it kills me a little inside.

[^flavour]: The only distinction I can think of for this, really, is import aliases – see [§ Names](#Names).

Of course, I am only human,[^sup][^sip] so I’m not perfect, and neither is the code I write.

[^sup]: Or so it would seem.
[^sip]: Nah seriously.


<br>


## Analysis

To illustrate the difference, consider the following ‘standard’ Python code:

```py
  class Soup:
      """Showing what standard Python code looks like."""

      def __init__(self, flavour: str = 'mushroom', hot=True):
          """Cook up some soup."""
          self.flavour = flavour
          self.hot = hot
          if hot:
              self.notes = 'warning: hot'
          else:
              self.notes = 'warning: delicious'
          self.content = 1.0

  supSoup = Soup(hot=False)
```

And this is how it looks nicest to me:

```diff
  class Soup:
+   '''Showing what my Python code looks like.'''

+   def __init__(self, flavour: str = 'mushroom', hot = True):
+     '''Cook up some soup.'''
+
      self.flavour = flavour
+
      self.hot = hot
      if hot:
+        self.notes = "warning: hot"
      else:
+       self.notes = "warning: delicious"
+
     self.content = 1.0

+
+ sup_soup = Soup(hot = False)
```

Which of these are ‘better’ is certainly dependent on the reader. For me at least, the latter is far nicer, consistent, and clear.

### Whitespace

This is probably the defining characteristic of my code, and also the most difficult to justify and manage. There are several kinds of whitespace – literal space characters, line breaks, and empty lines themselves.

Firstly, I use 2-space indentation. Always have done, and most likely always will. I really don't like how expanded 4-space indentation looks; 2-space just appears far neater and more subtle. 4-space might be better for clarity with really deep nesting, but like... just don’t nest that that far?

Let’s talk about keyword arguments. Of all the things in PEP 8, this is the one I hate most.[^hate] Convention is to not add spaces around the `=`, like so:

[^hate]: Ok ‘hate’ is a strong word. I just strongly disagree with it.

```py
async def unpep(source, style='sup', light=False):
  ...

await unpep(source=[], style='soup', light=True)
```

I mean, I get that it looks neater with loads of parameters on a single line. It even looks kinda neat with just one. But when you’re splitting them over multiple lines:

```py
obj = Class(
  prop=val,
  attr=var,
  nice=False,
)
soup = obj.sup
```

Look at that inconsistency. Some `=` with spaces, and some without. WHY. Why would you not add spaces. And what if your argument is really long too?

```py
await unpep(
  source=a_dict[a_key] * a_val,
  style=a_func(a_par),
  light=bool(a_object.a_method()),
)
```

An absolute mess. The `a_dict[a_key]` looks like one entity with the `source=` while `* a_val` is separate. True, you could assign them to variables beforehand and pass in the short variable names. But sometimes that’s just a bit long-winded – say we’re creating UI elements and need to do some calculations for each of their properties. Maybe we’re defining them directly in a list, so creating the variables for those properties would need to go outside of the list definition. That could be a *long* way away.

```py
obj1_attr1 = -1 * (calcx() - calcy())
obj1_attr2 = ...
obj2_attr1 = ...
...

objects = [
  Class(
    attr1=obj1_attr1,
    attr2=...,
    ...,
  ),
  Class(
    attr1=obj2_attr1,
    ...,
  ),
]

# really?
```

What really gets me is what happens when you add type hints.

```py
def typetest(source=None, dur: int = 60, numbers=False):
  ...
```

The inconsistency – it’s unbelievable. An `=` without spaces, then one with, followed by another without. Like I seriously don’t understand. Why would you do this. Just add spaces around all of them, it’s so much neater.

One of the things I often find most difficult when browsing (specifically Python) code written by others is identifying the structure, especially when there are many lines of code one after the other without any kind of segmentation. Of course, if they're all doing the same or similar thing, that's fair enough. But things like nested loops and if-else statements and all can get pretty unwieldy to navigate.

### Quotes

For strings in Python one can use either `'single'` or `"double"` quotes, generally left as a matter of preference. Since the Python interpreter outputs strings with single quotes, I take this to be the default.

Single quotes are indeed much cleaner than double quotes – especially considering the monospace typefaces used in coding, which leave the `"2"` quote marks of double quotes somewhat cramped. Often, when I compare single-quote strings to double-quote strings, it seems like the choice would be obvious.

Yet single quotes have one downside in that using an apostrophe in the string requires a `\` to escape it. The same of course also applies for double quotes, but as it happens single quotes run into this issue far more, since apostrophes are so much more likely to show up in strings for possessives and contractions. Hence, double quotes for strings.

But then when it comes to multi-line strings, you no longer have to worry about escaping quote marks at all (unless your text happens to have 3 or more consecutive quote marks, which is generally quite rare). So in this case, I see no reason not to use the far cleaner single quotes `'''` instead of `"""`. I honestly don't get why PEP 8 recommends using `"""` for docstrings so much, but honestly I doubt anyone really cares.

### Names

I was debating over whether to even discuss this here, but I think it's relevant enough.

It’s said there are only 2 hard things in computer science: cache invalidation and naming things.[^hard] I have yet to utilise caching, but boy does the latter one hit hard.

[^hard]: Quote by Phil Karlton. Pretty sure this time.

I’ve made a meme before about my time distribution when programming, and it’s unfortunately scarily accurate.[^accurate] I probably care way too much about names. See, I find that the perfect name should be clear, concise, cool, maybe a little obfuscated, and ideally only a single word. Like `core`, `slot`, `pick`. But that’s a lotta requirements to fulfil, *especially* if you’re tryna do it for every single object. Naturally, that’s exactly what I try to do.

[^accurate]: Not *actually* accurate, ofc, but the idea is definitely there.

I honestly don’t really like `camelCase`. Or `snake_case` either. It just feels uncomfortable having object names where some have to that extra modifier because their name is longer. It’s definitely worse for `camelCase` since the change in capitalisation is kinda jarring, but the `_` in `snake_case` can also stick out.

```py
var: str
myObject: MyClass
dangThatsALongName = None

val: int
my_function: MyLambda
would_you_stop_already()
```

In cases where I can, I refactor the code to use a `.` attribute accessor instead. For instance:

```py
# this...
screen_width = 1600
screen_height = 900

# goes to:
class screen:
width = 1600
height = 900
```

I really love this technique. It’s a fantastic way to segment and categorise objects, works well with global cross-file variables, and... I actually don’t see why there aren’t more people using it. Not just in Python, but in any language. Maybe there’s a non-obvious[^obvious] caveat or vulnerability that I’m aware of – in which case please let me know, I’d be happy to stop.

[^obvious]: Or maybe it is obvious and I’m just delusional.

The solution, of course, IS TO HAVE NO SEPARATOR AT ALL :DD

No, seriously, I wasn’t joking.

...


<br>


## Appendix

I can be somewhat stubborn in my ways, although there have genuinely been instances where I have changed my perspectives on conventions.

A notable case is the capitalisation of object names. Previously, I enjoyed having everything lowercase – variables, functions, and in particular, classes. My reasoning was that I wanted my classes to follow the same format as the inbuilt classes, like `str` and `int`, which are all simple lowercase words. Now, I’ve come to appreciate `PascalCase` when naming classes, as it very clearly separates it from other kinds of objects. As for keeping in with the inbuilt classes, I realised having user-defined classes follow a different naming format is probably better. It also lends itself more nicely to multi-word names.


<br>
