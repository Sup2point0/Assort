# My Syntax Highlighting Colours
<!-- #SQUARK live!
| date = 2026 July 29
| update = 2026 September 10
-->

I’ve stuck with (pretty much) the same colours for syntax highlighting code ever since I first customised them in VSCode. Some of my colour choices have firm principles behind them, but a lot were also kinda random. I thought I’d try justifying them, just for fun!

My first time making choices for colours would’ve been when typing out supcode snippets in Microsoft Word, and colouring them to make it look like real code. Kinda crazy that most of those choices live on to today. Nothing as permanent as a temporary solution!


<br>


## Preamble

### Why Care?
I think the benefits of syntax highlighting are pretty evident. However, beyond that, why care so much about the particular colour choixes?

Well of course, a huge part is just personal preference. We like looking at nice things. Looking at nice things makes us comfortable. Being comfortable makes us relaxed and happy. And that means we can be more productive!

But from a more objective standpoint, much like [syntax](style.md), our choice of colour can expose information and facilitate understanding. For a very simple and concrete example, many times I’ve managed to spot a typo because that identifier was coloured wrong. Semantic highlighting is very useful.

### Principles
Beyond just looking nice, my choices of colours help me interpret code more efficiently.

#### High Contrast Separates Components
I use very different colours between structurally distinct components, such as operands vs operators. This minimises the amount of work my eyes have to do. It’s immediately obvious at a glance how things are structured. We've already got a parser in the compiler, no need for me to recreate parsing myself!

#### Colour Conveys Importance
Bright, distinctive colours represent important entities. Low, faded colours are structural boilerplate of less importance. This lets me zone in on the important stuff.

#### Similar Colours, Similar Semantics
Related entities have similar hues. For instance, purple for types and orange for operators.

Not much to say for this one, I think it’s pretty self-explanatory; it wouldn’t make sense to do it any other way.

#### But Not Too Similar!
That being said, having *very* similar colours is unideal. It all too easily turns into a meaningless mush. This is a problem with many colour themes I find out there. It’s kind of inevitable, really – you only have so many colours, but there can be so many entities to colour.

Luckily, since supcode Nova colours are so saturated, they naturally have high contrast with each other. However, in languages with a *lot* of syntax (like Rust), I’m really struggling with colours. It’s kinda rough.


<br>


## General

### Background: Midnight Blue

I’m famously a light mode enjoyer, but when it comes to code – or more accurately, anything that requires heavy use of contrasting colours – dark mode is definitely better.

In light mode bright colours aren’t too visible, so you have to darken them, but that lowers contrast. You’re much more limited with the colours you can use.

With a dark background the text *pops* out, and you can pick freely from the entire saturated colour spectrum without concern.

I tend a little blue because it feels much more atmospheric than pure black.

#### Lore
Originally I used Midnight Blue, `#00172a`. In July 2026 I revamped my VSCode colours, and darkened my background to `#000020` for increased contrast. Little jarring at first, but haven’t looked back.


### Text: White

Not much to say here. Including because some themes actually change the default text colour, like Tomorrow Night Blue. Every colour is precious, so I reserve it for special constructs.


### Errors: Nova Red

Using red for anything other than errors will always feel wrong to me. (No, my functions are *pink*, not red, tyvm ;)

It’s very satisfying when I get something wrong and get blasted with deeply saturated blood red. Oh boy, that’s a crash alright.


<br>


## Code Constructs

### Keywords: Nova Blue

#### Includes
- all language keywords such as `if`, `function`, `import`, etc.

#### Rationale
- They’re ‘intrinsics’, so I want a similar colour to the background colour.
- Keywords are extremely common, so they can’t be too distinctive. A colour similar to the background helps it settle in more.
- They should still contrast nicely with plain white text.

#### Lore
Since *Nova Blue* was the first colour I created for *supcode Nova*, I thought it fitting to give it to keywords.

Fun fact, there was a time I used Solar Yellow (#ffc720) for keywords, to mirror Scratch. A little too prominent!


### Namespaces: Nova Teal

#### Includes
- imported modules, such as Python’s `import random` or TypeScript’s `import * as path from "path"`
- exported namespaces, such as C#’s `namespace Application` or Rust’s `mod application`

#### Lore
Nova Teal is probably the ‘brightest’ colour in the supcode Nova palette; it’s extremely distinctive. iirc, I very naturally gravitate towards using it for namespaces. No regrets, I just wish it showed up more in languages other than Python!


### Functions: Nova Pink

#### Includes
- functions
- methods of classes
- callable objects, such as callback parameters


### Function Parameters: Spirit Pink

#### Includes
- functions parameters
- method parameters
- anonymous function parameters

#### Rationale


### Types: Nova Lilac

#### Includes
- classes
- structs
- type aliases
- Rust `enum` types


### Interfaces: Crescent Lilac

#### Includes
- interfaces
- traits


### Type Parameters: Spirit Blue

#### Includes
- type parameters in any context
- `Self` (e.g. Rust)
- `This` (e.g. TypeScript)

#### Lore
I used to use Electric Blue (`#40e0ff`) before, but with how much type parameters can show up (and I loveee generics[^love-generics]), it got a little too dazzling. Spirit blue is a lot calmer on the eyes!

[^love-generics]: I already loved them before Haskell, but now I love them even more.


### Self & Super: Crescent Pink + Italic

#### Includes
- `self`
- `super`
- `this`

#### Rationale
These are function/method parameters, but *special*. So they get a different shade of pink.
This mirrors class/interface.

#### Lore
Very early on, I liked italicising types. I still think this is pretty nice tbh; I don’t have italics enough in my code, it’s great for subtly adding contrast.

But with types, it just can’t be consistent – once you start using constructors, it’s all messed up.

```ts
function mutate(data: Data): Data {
   let default = new Data();
   ...
}
```

The question is, should `new Data()` be italicised? It’s a ‘type’, so it should; but then italicising code with `()` looks wonky. Yet if I don’t italicise it, then there’s inconsistency between the usage in the signature vs implementation. You could argue that’s actually a useful distinction. Like `import { Data }` vs `import { type Data }` in TypeScript. I still don’t like the inconsistency =(


### Variables: White

#### Includes
- variables and constants
- locals and globals

#### Excludes
- callables (notably anonymous functions)
- object fields

#### Rationale
Oh, my! What a boring colour!

Well, if you think about it, it’d be kinda stupid if you ended up syntax highlighting *absolutely everything*. White is a super powerful colour (it’s got the highest contrast!) and one of the most important options in our arsenal.

When it unlocks its power is in **exclusivity**. Just like every other colour, it needs to uniquely represent one thing. If you half-ass syntax highlighting and leave many things defaulted to white, it loses that power. It no longer represents anything, it’s just ‘unimportant boilerplate’ that the syntax highlighter failed on.[^failed-highlight]

[^failed-highlight]: This is a genuine pain point for me. A lot of languages with subpar VSCode support don’t highlight to the fullest, leaving much white. It looks terrible and really throws me off, I can’t help it...

For me, I chose variables. Given how ubiquitous, unassuming and unstructural they are, I think it’s the best candidate by far. Variables are the bread and butter of programming, nothing else deserves to be pure white more. The result is that throughout all my code, the colours of functions, constants, parameters, etc. become ‘broken up’ by the white of variables, which is extremely helpful. It makes the colours stand out, and it makes the white stand out.

When I look at themes that colour variables, I wince. Like, you’re sacrificing a valuable colour there on such a plain construct. It’s even worse if they then *don’t* use white anywhere else.


### Fields: Mellow Yellow

#### Includes
- class/struct/interface/object fields
- class/struct/interface/object properties (getters/setters)
- static class fields

#### Excludes
- variables
- methods

#### Rationale
When accessing something like `object.field.value`, keeping them all white would be a little *too* plain. Again, I want a bit of structure to help guide my eyes.
Naturally, a slightly coloured, but still light, pastel colour works great.
Crescent mellow is soothing, but distinctive.
I’ve got a solutely no problem seeing it en-masse, and it’s honestly one of my favourite colours in the whole palette.

#### Lore
I actually picked this up from replit, they used a similar pastel yellow (iirc, slightly more saturated) in their editor.


### Numbers: Crescent Blue

#### Includes
- number literals of any base

#### Rationale
Literals are like regular text but with special meaning, so are almost white but with a splash of light colour.
Numbers are blue, nuff said.

#### Notes
I think most syntax highlighters bundle the `-` of a negative number with the literal, so it’s part of the Crescent Blue highlight. Not too fussed here, tbh, no problems.


### Strings: Crescent Red

#### Includes
- string literals
- multi-line string literals
- template literals

#### Rationale
Literals are like regular text but with special meaning, so are almost white but with a splash of light colour.
String literals can be long and prevalent, so I want a colour that’s not too vibrant and very easy to read.

#### Lore
I don’t actually like this red too much, but I’ve tried other colours and none work. The red is just too perfect.


### Language Constants: Crescent Teal + Italic

#### Includes
- `true` `false`
- `none` `null` `undefined`

#### Rationale
Literals are like regular text but with special meaning, so are almost white but with a splash of light colour.
I don’t get to use use italics enough, this is a great place to sprinkle them in.

#### Lore
I used to colour them Crescent Lilac due to a lack of colours. Not a great choice, because they conflicted with interfaces. But this was while I still mained Python, so we didn’t exactly have interfaces.


### Enums: Crescent Lilac


### Enum Members: Crescent Teal

#### Excludes
- algebraic enums (in Rust)

#### Rationale
They’re basically constants!


## Punctuation

#### Rationale
Punctuation has distinctly different purpose to other text, so I want high contrast with surrounding elements.
Structural punctuation is necessary but boilerplate. I want it less prominent so it’s present, but out of the way.


### Semicolons: Nova Teal

#### Rationale
I need them STANDOUT
I want it super obvious where I’ve used a semicolon, so that if I haven’t, it’s also easier to realise.

#### Lore
I used to colour them Deep Blue to get them out of the way, like with braces. Bad, bad idea...


### Special Operators: Yellow

#### Includes
- anonymous function arrows (JS, TS)
- nullish coalescing
- borrowing and dereferencing (Rust, C)


### Operators: Orange

#### Includes
- assignment Operators
- arithmetic operators
- comparison operators
- logical operators
- bitwise operators


### Braces: Deep Blue

#### Rationale
Pure structural boilerplate of no interest, I want it out of the way.

#### Lore
Switching from white/grey? braces to Deep Blue was a great choice. It made reading code feel much smoother.
I made the same migration with angle brackets in HTML, with the same feeling. Much smoother!


### Dots, Commas, Colons: Grey

#### Rationale
Want a little contrast with regular white text so it doesn’t all meld together.
Not quite as irrelevant as braces, so not as far as Deep Blue.


### Parentheses & Brackets: White

A lot of people/themes colour them, I don’t!

#### Rationale
I’m not actually sure. I think it’s ok leaving them uncoloured because I have so much colour elsewhere.
Parentheses is very prevalent for grouping, so needs to mesh well with any colour; white is, naturally, the best at this.
Angle brackets do blend together with white variables, but it’s honestly fine. The `[]` characters also inherently have high-contrast structure.


### Stringterpolation: Purple

Ran out of colours here. It’s actually not ideal, but yeah.


<br>


## Non-Code

### Comments: Nova Grey

#### Includes
- single-line comments
- multi-line comments

#### Excludes
- documentation comments (see next)

#### Rationale
Not much to say, pretty standard.
Colours are precious, so I don’t want to expend one on comments. Grey also stands out *more* than an actual colour would, but is still discreet (especially en-masse) so I can tune it out when unneeded.


### Documentation: Nova Teal

#### Includes
- documentation comments, like `///` and `/** */`

#### Rationale
These are semantically different to regular comments because they show up in the IDE. They are (ideally) properly written and well-structured, not freeform or temporary. Hence a different colour is meaningful.
Teal is similarly muted to the Nova Grey of comments, so can be tuned out when necessary.


### Comment Markers: Nova Yellow

#### Includes
- `TODO`
- `NOTE`
- `SAFETY`

#### Excludes
- `FIXME` (that one’s red)


<br>


## RegEx

RegEx is a whole other world. Why is it here? Well, most languages support RegRx, so it’s essentially common syntax. For JS and Ruby, they even allow embedding RegEx in the language itself, and my VSCode extensions actually highlight that (which, I gotta say, is sick).

However, that does mean ...even more colours to decide.

#### Plain
#### Escaped Characters
#### Repetitions
#### Sets
#### Matching Groups: Electric Pink
#### Non-Matching Groups
#### Positive Lookaround
#### Negative Lookaround


<br>


## Oddities

Some languages I’ve worked with have very unique constructs which have required me to come up with completely new colour choices.

Yeah, it’s mostly Rust.


### Labels & Regions: Nova Yellow

### Lifetimes: Hot Pink


<br>


## Extending to Non-Programming Languages

I really love my colour palette. At this point, it’s a core part of how I code, and using any other colour scheme makes me feel very not-at-home.

Here I’ve described how I map this colour palette onto different programming languages, which all share similar concepts and constructs. But what about for markup or config languages, like HTML, CSS, Markdown, LaTeX, TOML, etc.?

### Keys: Spirit Pink
### Values: Crescent Mellow
### Categories


<br>
