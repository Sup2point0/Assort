# My Style Guide for Code
<!-- #SQUARK live!
| date = 2026 July 12
-->

PREFERRED | UNIDEAL

When it comes to writing code, I have very particular syntactic preferences. I think a lot of them could be considered strange, unpopular or downright ugly, but I always tell people that I can justify every last one of them, and that’s exactly what I’m going to do here.

I have ordered the sections from *most *pervasive* to least. “Pervasive” refers to things which will be **immediately** noticeable, and that might incite a reaction in the programmer reading the code. This is distinct to importance; some later preferences are more fundamental but less noticeable, such as naming preferences.

One last thing: most of this is personal taste, so in a non-personal project (team, open source, etc.), a lot is moot. For a collaborative project, just use a formatter, no more to say. Then there can be no arguments over style, and the team can rightfully focus on the much more relevant issues.


## Preamble

### Why Care??
I consider syntax not orthogonal to semantics, but *complementary*. Good syntax elucidates semantics. It serves 3 main purposes (in this order of priority):

* To make code readable
* To make code easily changeable
* To convey intent behind the code

Every one of my preferences directly serves one of more of these, beyond just “looks nice” – altho a lot of time this is a natural result of “more readable”!

#### Readability
Reading code is – I won’t lie – tiresome. I want reading code to be as effortless as possible, which means minimising friction as much as possible. When I’m in the middle of implementing a method and need to check how a helper function works, I don’t want to dedicate too much mental stack space that I’ll forget the context of how I was implementing the method.

#### Changeability
I’m fairly slow at writing code if I’m honest, and part of that is cuz I pay more attention to syntax than other people. Good syntax can help with this by making making changes easier. This includes stuff like splitting over multiple lines and trailing commas, which let me add and reorder things freely.

#### Intent
This is a subtle, but powerful one. I think usefulness is directly proportional to consistency – when you are extremely disciplined about how you choose to apply syntax rules, the syntax itself becomes extra information. It’s like type guards providing information to a compiler.

A fantastic example of this is trailing commas: when they’re there, that means I can add more entries as I want. But when they’re not, **that sticks out**. It means there’s only this many entries for a specific reason. The lack of a trailing comma encodes that intent. TODO

### Why Do?
I think we can all agree, far more important than the choices you make, is *sticking to those choices* with absolute consistency. I stick to my preferences rigorously, which is why I’ve never needed a formatter.

This is actually noteworthy – a lot of people counter the necessity or relevance of good code formatting because “it’s pointless”, “it’s a waste of time”, “it’s a distraction”. I disagree! I think it can certainly be that *at first*. But critically, when you uphold those high standards for an extended period of time, they become muscle memory. You no longer need to divert brainpower to considering formatting – it’s just how you write code.

I consider it like a musician saying “I don’t need to worry about timing, it can be fixed in post.” Which is, again, certainly true at a lower level. But once you reach a high level of proficiency, you’re able to play with good timing, and hell, you can bend the timings for expression, groove, variation to suit the context. In my coding style, there are things that I don’t think a rule-based linter could ever catch (an LLM could emulate me, but that defeats the point).

More abstractly, coding style is a reflection of your mentality and work ethic. It’s like laying out your work neatly in maths or science, or organising your tracks logically in music production. Of course, you don’t at all need to be neat and tidy to create good stuff, and I’m sure some of the greatest artists ever were plenty messy in their workflow. But for me, it keeps me focused, content, and most importantly, lets me understand my own code as fast as possible.


## Casing

Oh boy, the big one everyone knows.

I won’t spend too much time here, my preferences are straightforward.

### kebab-case
If I could, `kebab-case` for everything. It’s the most readable, easiest to type, and looks elegant too. Which is why [supcode uses it] ;)

Unfortunately the only language I use supporting `kebab-case` in source code identifiers is CSS (maybe this contributes to me loving CSS!), so I must make do in other languages.

### snake_case
If no `kebab-case`, then `snake_case` is the next best I’ve come to accept. This is for functions, variables, fields, parameters, labels, and other identifiers.

The underscores are a little ugly, but it’s significantly more readable for me than `camelCase` (in particular *at a glance*). I’ve also never found typing underscores to be much of an issue. The extra character(s) to `camelCase` is imho a worthwhile tradeoff for the increased readability.

### PascalCase
Can’t use `snake_case` for everything tho, so I use `PascalCase` for types. This varies a lot more broadly depending on the language, but includes classes, interfaces, traits. I’ll also use for other significant constructs such as namespaces.

It’s less readable than `snake_case`, that’s for sure, but it’s more consistent than `camelCase`, and thankfully all languages I work with use it conventionally (except C, where convention varies).

### Directories
I will use `kebab-case` for file and folder names (if I need a multi-word name, which is admittedly rare). If the module system doesn’t permit it (e.g. Python, Rust), I will fallback to `snake_case`.

### Other
My preferences are language-agnostic: unless I am developing a library for others, I’ll go against the language’s conventions if need be. Yes, that means I use `snake_case` in C# and TypeScript. No, I have no regrets. I’m more productive because of it 😎

> I have a [VSCode extension] that renders the underscores in `snake_case` identifiers as hyphens, achieving `kebab-case`. When you go to edit that line, the rendering alias is disabled so you get the original underscore.
>
> It’s cursed, yes. And it was a little trippy at first. But just like building syntax habits, I’ve stuck with it, and it is gawddamn amazing.

### Haskell
Haskell is the exception, because it’s syntactically very different. `snake_case` is not readable in Haskell unfortunately, the spaces for function application conflict with the underscores and make separating atoms too effortful. As a result, I use `camelCase`, which is painful, but a necessary evil. I try to keep my identifiers short.


## Braces

The other daunting one...

This one is messy, and you might not like it. I believe my preferences can be summarised as:

* 1TBS for *symmetric* small constructs.
* Stroustrup for *asymmetric* small constructs.
* Allman for large constructs.

All 3 conventions, the horror! What happened to consistency?

I can justify. Also, I’ll clarify that I advocate consistency in *application*, not necessarily consistency in *preferences*; there’s a distinction. Each style has its benefits, so I choose (with consistent principles) whichever is best for the context.

CODE

So:

- `if`, `for`, `while` keep the brace on the same line.
- `else`, `catch` keep the brace on the same line, but themselves *may* start a new line, depending on context.
- Classes, functions, and other declarations always put the brace on its own line.

### Allman
I’ll start by justifying the Allman (braces always on their own line). Functions are the best example for this.

Function declarations are actually pretty involved: they’ve got the identifier, parameters, the return type, and the entire body. Note the first 3 form the **signature**, while the body contains the **implementation**. As both a maintainer and client, these are two distinct things, and I will often be interested in only one of them without the other.

Putting the brace on its own line separates the signature from the implementation. This makes scanning a complex class or library significantly easier for me. In fact, it makes scanning even a non-complex series of declarations easier.

The same applies for classes, interfaces, enums and the like: they all can contain a large number of declarations within them, and I find the visual separation from the signature extremely helpful.

The clearest edge case for justifying Allman’s worth is when you break the signature over multiple lines. What happens if you leave the brace on the same line?

CODE

Bleugh, everything is cramped, and at a glance, the only indication for where the signature ends is the closing `)` parenthesis. If you’re using 2-space indentation (which I do in TypeScript), it’s even weirder:

CODE

Or even worse, when you have a bound like in C# or Rust:

CODE

Now it’s truly all mushed together. I don’t really how people can read this without significant effort lmao

That’s not to say 1TBS in general isn’t readable; the Rust docs use it for instance, and I fare fine. But I find Allman here much *more* readable, and most importantly *effortless*. Mentally, that logical break exists between signature and implementation. We can save ourselves that effort by physically adding in the line break.

Wait, add in the line break, you say? This is my favourite counter:

CODE

Ah, so we’ve got the same goal here – create visual separation! You want the benefits of Allman! But this looks much stranger, breaks the symmetry between the start and end braces, and also invites undoing when a new line is inevitably added to the start of the function.

CODE

At that point, you mayyy as well put the brace on its own line, right? ;)

### Stroustrup
Then let’s talk about small constructs. We’ll take `if` `else` as our example. There is a little consistency violation here, and this illustrates the “conveying intent” aspect.

Firstly, not Allman, because these small constructs appear too often, and often contain very small isolated logic. Think `if (x == 0) break;`. Creating so much visual separation would be detrimental rather than helpful.

However, whether to use 1TBS or Stroustrup is contextual. In most cases, I prefer Stroustrup, for the same reasons as Allman; it’s too cramped otherwise. For instance:

CODE

This is too cramped for my liking. The `try` logic and error handling are separate components, but you can’t easily see that from this.

CODE

The downside is that this could be seen as 2 completely separate blocks, but I use line breaks excessively between blocks anyway so I’m fine ;)

### 1TBS
The exception to this rule is when the 2 branches are *symmetric* – that is, they share the same structure.

CODE

In this scenario, 1TBS is an advantage because it keeps the bodies close together, **highlighting** the symmetry. This touches on conveying intent – it shows the 2 branches are small variants of the same logic, instead of more significantly diverging paths.

Pretty sure no formatter, even a quasi/semantic one like ESlint, is ever gonna be able to pick something like this up, since it’s very contextual (and not that well-defined anyway).

### Braceless
I always use braces for blocks starting on a new line. It keeps things simple, consistent, and extensible.

CODE

However, for an extremely short single-statement block of an `if` statement – think `return` or `continue` – I may put it on the same line, in which case I omit braces.

CODE

While this violates changeability because turning it into a full block is cumbersome, I think the saved space on newlines is worth it. Often I’ll have many such checks that would otherwise blow up the count; what’s more, keeping them flat helps with alignment and revealing symmetries.

```ts
// TODO
if () return;
if () return;
```


## Line Breaking

```
var x = target.position.x
```

One major difference I notice between my code and others’ is my usage of empty line breaks in between statements.

### Whitespace

### Expanding

### Line Width


## Identifier Naming

Famously, there are only 2 hard problems in computer science: naming things, cache invalidation, and off-by-1 errors.

Oh boy, naming things. If I’m completely honest, I think I spend a liiittle too much time on this. But hey, I find it fun, and in my experience, it’s worth every bit of the effort.

### Principles
My principles for how I name things have morphed quite a bit over the years.

Towards earlier on, I was a big fan of ‘elegance’ – short, neat names, sometimes maybe a little abstract of detached. I did not like underscores,[^dislike-m] so I kept identifiers to single words. Things like `pick`, etc.

[^dislike-m]: I also didn’t like `m`, because it looks incredibly cramped in monospace typefaces. At some point I (thankfully) stopped noticing/caring, but prior to that I would actively avoid `m` in my identifiers TvT

I definitely still hold onto that today, because I find elegance in naming things very nice. However, I do prioritise *clarity* significantly more now.

The way to summarise it is this: when I read an identifier, I want to **immediately** and **unambiguously** know what it means. As little mental overhead as possible – even the *tiniest* amount! Over the years, what I’ve found is those slightly clever and magical names, while neat, take the slightest moment to figure out if I haven’t touched the code in a while. And that friction is really frustrating.

No abstract `process()`. Call it what it is: `set_fields_from_data()`. No generic `find()`, but `find_project_files()`.

This ~~sometimes~~ often results in longer names. y’know what, I think that’s OK. The sacrifice is worth it for the clarity. I don’t mean `AbstractSingletonFactoryStrategyImplementer`, I mean `entity_id_to_entity_source` over `map`.

### Booleans
A variable with a boolean type, or a function returning a boolean value, should start with a predicate verb: usually `is_` or `has_`, as well as `should_`, `can_`, `does_`, etc.

As with everything, when you apply this *consistently* **with no exceptions**, it becomes very rewarding. You can instantly tell where your conditions are (and these singular bits carry a lot of information!).

### Functions

#### Start with a verb.
I like this one, feels very intuitive. Calling something like `module.session()` feels weird, I would associate that with a constructor.

### Callback Parameters
In anonymous online functions, `x` is a common name for a generic parameter which doesn’t really warrant a more dignified name.

I don’t like `x` for some reason. I think it might be because I prefer reserving it for an actual $x$ co-ordinate.

In loops, I like to use `each`. This looks like this:

CODE

For singular values, I may use `val`.

### Ordering of Compound Qualifiers
This doesn’t get brought up much, but ‘compound’ identifiers are extremely common. Anything containing a noun and an adjective or other qualifier is subject to this. You can either do `noun_qualifier` or `qualifier_noun`. The question is, which is better?

Of course, there’s no right answer for this. Let’s take this example:

```ts
let amps = create_wave();

// do we prefer this...
let amps_normalised = normalise(amps);

// or this?
let normalised_amps = normalise(amps);
```

The latter reads like regular English. The former reads like maths (or physics), where $v_\text{qualifier}$ is common.

I’ve come to prefer the former. Not because I’m a mathematician (I’m also a linguist! kinda), but because I think it’s better for code. My reasoning is thus: I want to understand the code as linearly as possible when reading it. The less backtracking or ‘shuffling’, the better. i.e. I would like information to come in a linear flow.

> This is why, altho Ruby’s `x unless y` is neat, it’s not the greatest for readability – when you’re reading, you’ll first think “wait, we’re doing this?” and then a (even if very) short moment later, you see the `unless` and mentally correct that. It’s effort.

So when I see the noun first, I can see immediately what this *is*. For instance, `files_*` contains something to do with files; this sets the context, and the qualifier will narrow the context.

With, say, `cleaned_*`, this could be anything, like `cleaned_content`, or `cleaned_output`, and I won’t know until I read the rest of the identifier. It’s still context narrowing, but from a different angle that is less immediately useful.

Also, it aligns nicely. If I have a function that needs 2 versions of an argument:

```ts
apply(nodes, nodes_reduced, style_node, style_edge);
```

I can very easily see from skimming that the first 2 parameters relate to nodes, while the last 2 are styling. This is even more clear if the function call were broken over multiple lines:

```ts
apply(
    nodes,
    nodes_reduced,
    style_node,
    style_edge,
);
```


## Documentation


## Comments

```ts
/// This is a documentation comment.
function count_duplicates<T>(items: Array<T>)
{
    /* This is an explanatory comment. */

    /* NOTE: `items` is nonempty */
    var compare = items[0];

    // TODO
}
```

### Explanatory Comments
I use `/* comment */` or `#` for explanatory comments, regardless of length


- I use `/* NOTE: comment */ for noting down important details.
- I reserve `//` only for **temporary** comments like `// TODO` or commenting out code.


## Operators

### Operators Start the Line
When splitting expressions involving binary operators over multiple lines, I put the operator at the start of the following line, instead of the end of the preceding line:

```rust
let is_highlighted = (
    should_check_syntax
    && has_error(word)
);

if does_look_good
&& does_pass_tests
{
    merge();
}
```

### Ternary Operators
I’ve come to enjoy the modern ternary format:

```ts
cond ?
  value
: value
```


## Trailing Commas


## Awkward Indentation

### If Conditions

### Call Chaining

### Return Values


## Miscellaneous

### Semicolons
### Explicit Null Check
### Multiple Assignments
### Destructing Parameters
### Nesting If Conditions


## Language-Specific

### Svelte

#### Flat Indentation
