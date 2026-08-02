# My Syntax Highlighting Colours
<!-- #SQUARK live!
| date = 2026 July 29
-->

I’ve stuck with (pretty much) the same colours for syntax highlighting code ever since I first customised them in VSCode. Some of my colour choices have firm principles behind them, altho a lot were also kinda random. I thought I’d try justifying them, just for fun!

My first time making choices for colours would’ve been when typing out supcode snippets in Microsoft Word, and colouring them to make it look like real code. Kinda crazy that most of those choices live on to today.


## Preamble

### Why Care?
I think the benefits of syntax highlighting are pretty evident. However, beyond that, why care so much about the particular colour choixes?

Well of course, a huge part is just personal preference. We like looking at nice things. Looking at nice things makes us comfortable. Being comfortable makes us relaxed and happy. And that means we can be more productive!

But from a more objective standpoint, much like [syntax](style.md), our choice of colour can expose information and facilitate understanding. For a very simple and concrete example, many times I’ve managed to spot a typo because that identifier was coloured wrong. Semantic highlighting is very useful.

### Principles
Beyond just looking nice, my choices of colours help me interpret code more efficiently.

#### Separate Components with High Contrast
I use very different colours between structurally distinct components, such as operands vs operators. This minimises manual parsing of structure; it’s immediately obvious.

#### Colour Conveys Importance
Bright, distinctive colours represent important entities. Low, faded colours are structural boilerplate of less importance.

#### Similar Colours, Similar Semantics
Related entities have similar hues.

#### Not Too Similar
I need to be able to easily tell at a glance what’s what, so having components with very similar colours is unideal. This is a problem with many colour themes I find out there. Luckily, since supcode Nova colours are so saturated, they naturally have high contrast with each other.



## General


### Background: Midnight Blue hi

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


## Code Constructs

### Keywords: Nova Blue

#### Includes
- All language keywords such as `if`, `function`, `import`, etc.

#### Reasoning
- They’re ‘intrinsics’, so I want a similar colour to the background colour.
- Keywords are extremely common, so they can’t be too distinctive. A colour similar to the background helps it settle in more.
- They should still contrast nicely with plain white text.

#### Lore
Since *Nova Blue* was the first colour I created for *supcode Nova*, I thought it fitting to give it to keywords.

Fun fact, there was a time I used Solar Yellow (#ffc720) for keywords, to mirror Scratch. A little too prominent!


### Namespaces: Nova Teal

#### Includes
- Imported modules, such as Python’s `import random` or TypeScript’s `import * as path from "path"`
- Exported namespaces, such as C#’s `namespace Application` or Rust’s `mod application`

#### Lore
Nova Teal is probably the ‘brightest’ colour in the supcode Nova palette; it’s extremely distinctive. iirc, I very naturally gravitate towards using it for namespaces. No regrets, I just wish it showed up more in languages other than Python!


### Functions: Nova Pink

#### Includes
- Functions
- Methods of classes
- Callable objects, such as callback parameters



### Function Parameters: Pink

#### Includes
- Functions parameters
- Method parameters
- Anonymous function parameters

#### Reasoning
- 


### Self & Super: Crescent Pink + Italic


### Classes: Nova Lilac

#### Includes
- Classes
- Structs
- Type aliases


### Interfaces: Crescent Lilac
weaker

#### Includes
- Interfaces
- Traits


### Type Parameters: Electric Blue

#### Includes
- Type parameters in any context


### Variables: White


### Properties: Mellow Yellow


### Numbers: Crescent Blue

#### Includes
- Number literals of any base


### Strings: Crescent Red

#### Includes
- String literals
- Multi-line string literals
- Template literals


### Language Constants: Crescent Teal

#### Includes
- `true` false
- none null undefined


### Enums: Lilac


### Enum Members: Crescent Teal


## Punctuation

#### Reasoning
- Punctuation has distinctly different purpose to other text, so I want high contrast with surrounding elements.
- Structural punctuation is necessary but boilerplate, do I want it less prominent so it’s present but out of the way.


### Semicolons: Nova Teal

#### Reasoning
- I need them STANDOUT
- I want it super obvious where I’ve used a semicolon, so that if I haven’t also easier to realise.

#### Lore
- I used to colour them deep blue to get them out of the way. Bad, bad idea...


### Special Operators: Yellow

#### Includes
- Anonymous function arrows
- Nullish coalescing
- Borrowing and dereferencing


### Operators: Orange

#### Includes
- Assignment Operators
- Arithmetic operators
- Comparison operators
- Logical operators
- Bitwise operators


### Braces: Deep Blue


### Commas: Grey


### Colons: Grey


### Parentheses & Brackets: White


### Stringterpolation: Purple


## Non-Code


### Comments: Nova Grey


### Documentation: Teal


### Comment Markers: Yellow


## Oddities


### Labels & Regions: Yellow


### RegEx: Teal


### Lifetimes: Hot Pink
