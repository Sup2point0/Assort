# The IDE-less Coding Experience
<!-- #SQUARK live! dev!
| dest = dev/ide-less
| desc = What it’s like writing code in Notes
| date = 2025 February 7
-->

Due to personal circumstance, I often find myself wanting to write code but not having access to an IDE. Which kinda sucks. How do you code without an IDE? You can’t code without an IDE, right?

Right?

![coding without an IDE](../.assets/writing/ide-less-coding.jpg)

As of writing, I’ve probably typed more code outside an IDE than inside one (altho this gap is closing quite quickly). It’s complicated.


<br>


## What?

IDEs boost your productivity, they really do. To be honest, I probably don’t use many of VSCode’s advertised features as much as I should. idk, the extensions just never seem to work. I find multi-select, change all occurrences and alt-arrow shortcuts wayyyy more helpful than any extension has ever been.

But coding without an IDE can still work. It’s not unbearable by any means. On my broken iPhone 5s running iOS 12, Notes is still as functional as ever, and more than satisfactory for writing code.[^5s-notes] My iPhone SE 2 is much nicer since I can see a lot more code at once, altho with recent iOS updates selecting has become a lot more painful. My iPad Air 5 is fantastic (especially since I’m still on iPadOS 15, before they changed how select works). And of course, I’ve written a lot of conceptual [supcode](https://github.com/Sup2point0/supcode) in Microsoft Word.

[^5s-notes]: I’m writing this piece right now on my iPhone 5s in Notes. Go figure.


<br>


## Levels

Now, there are levels to this. You can code without an IDE on standard difficulty, moderate difficulty or *extreme* difficulty.

### Standard
Standard is just the ‘no IDE’ part. I do still have a keyboard – so it’ll be iPad with Magic Keyboard in Notes, or laptop in Microsoft Word (maybe PowerPoint, depends on context).

It’s fine, all things considered. I can make up for a lot of the missing shortcuts and autocomplete by just typing fast. The limiting factor when writing code is never my typing speed anyway.[^limit-factor]

[^limit-factor]: I just don’t think fast, lmao.

### Moderate
At moderate, the keyboard is gone. It’s just the iPad screen with its virtual keyboard, which is a very different experience. The size of the iPad does mean I can still type on it with all fingers engaged, and almost as fast as a physical keyboard. The key difference is that I have to switch to an alternate menu to type punctuation. And boy does a lot of punctuation come up in programming. Switching is 2 extra key-presses (1 to switch, and 1 to switch back). That seriously racks up.

Luckily, iPadOS lets you slide on keys to type the punctuation mark that *would* correspond to that key in the punctuation menu, which is pretty nice. Sliding on the keys often feels a bit icky? and it also doesn’t work great when you type really fast (such as for repeated strokes) – but it’s better than nothing at least.

![sliding while pressing a key](~)

### Extreme
Extreme is a phone. Tiny screen, tiny keyboard, may even lag for good measure. There’s no way to avoid switching menus.

It’s slow. It’s so, so much slower than doing it with a keyboard, and the constant switching really slows you down. Honestly tho, I’ve become quite fast at it.[^phone-typing] It’s almost scary lmao. My fingers just naturally fly over the virtual keys and type out what I need to type. I’m *rapid* when switching between menus. It just becomes a part of your ‘typing’ workflow at some point, iygwim.

[^phone-typing]: Altho tbh, at this point most Gen Z and Gen Alpha kids are astoundingly fast at typing on a phone. Some people I know even type faster on a phone keyboard than on a physical keyboard 💀

It’s also much easier to make typos, and fixing these wastes so much time. Moving your cursor is thankfully easy on iOS with space+drag, but it still feels a bit slow at times[^space-slow] and having to do it many, many times gets real tedious.

[^space-slow]: It’s reasonable to have the existing delay, tho, to prevent mistriggers. That would probably be more annoying tbh, especially given we use space at least once for every word we type.


<br>


## What You Lose

Well, a lot.

Developing anything I’ve already made offline outside an IDE is near impossible. Anything I write in Notes pretty much has to be standalone and detached from the rest of the project, if there is one. Otherwise, there’s no way for me to develop while being able to see, test and even update the other parts of my existing codebase.

This works pretty well for my website projects, where each page often has unique content (altho typing HTML without tag duplication is PAIN). A program, game or non-web application, less so.

Sometimes I start my projects in Notes, in which case then development is super fluid. But at that early stage of the project a lot of it is just setting up infrastructure. Figuring out modules, namespaces, how everything will fit together. It’s designing more than coding, so that’s defo a lot more manageable on Notes. Or course, seeing all the files in an explorer pane in VSCode is probably nicer...[^probably-nicer]

[^probably-nicer]: Not probably. It *is* nicer. lmao.

But yeah, here I can still keep track of everything in my mind. I’m writing the layout and classes from the ground up, so I have a good understanding of what everything is and where it is. Then naturally, as a project progresses I’ll develop many classes and utils; some I’ll lose familiarity with and some I won’t touch for a while. They’ll just become tools to build the larger application, with their technicalities becoming implementation details.

Once this happens the IDE tools like hover tooltips, type hinting and peeking definition become essential for working with all the different interfaces I’ve created for myself. I only have so much mental RAM, of course. Memory can’t keep me going at this point, and being able to nimbly navigate the codespace becomes super important.[^nimble-nav]

[^nimble-nav]: So it’s *really* annoying when the extension decides it doesn’t want to work and Ctrl+D won’t take me to the definition!!


<br>


## What You Gain

As I like to say, “suffering builds character”.

Coding without an IDE is *such* a great learning experience.[^learn-exp] Without the hints and suggestions and real-time error detection (and now AI too), you’re forced to write the code *completely* by yourself. It’s coding at its purest.

[^learn-exp]: I had a thought about this, and considered whether it’s a good learning experience for beginners, veterans, or both. I think it’s actually more useful to veterans, because whereas we can go through the code and spot all our mistakes, for a beginner being hit with error after error when you try running your code for the first time isn’t a great experience. When you’re just starting out, the instant feedback and basic error detection from the IDE as you type code is much better for getting to grips with the language. It’s like doing exercise questions vs exam papers – when you don’t know the content, doing the exercise questions builds your understanding and familiarity; once you have that down, doing a paper in one go reveals your wider weaknesses and misconceptions.

It’s really funny (and educational (and humbling)) to ctrl+CV my non-IDE code into an IDE and be hit with barrages of errors. Some that reveal flaws in my logic, some that make me question what I was thinking when writing the code, and some that make me wonder if I even know how to code. Syntax errors especially. Like, I’ve missed closing `</tags>` in HTML an uncountable number of times now. Or not closing a function call’s parentheses. Like, what are you doing Sup...

Of course, in the grand scheme of things syntax matters very little in comparison to higher-level logic and structure. What writing code without checking does is train you to be much more accurate in your code *first-try*. When you have no help to hide behind, it’s up to you to really *learn* the language. This is for sure a good thing – altho that being said, whether it’s worthwhile to sacrifice productivity *for it* a different question.[^sacrifice]

[^sacrifice]: Everything in moderation, of course.
