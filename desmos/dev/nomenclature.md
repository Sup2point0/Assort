# Nomenclature
<!-- #SQUARK live!
| dest = desmos/dev/nomenclature
-->

Unfortunately, we can’t name functions we define in Desmos with more than 1 letter like $\text{random}()$ or $\text{length}()$. It’s gotta be like $f(x)$ or $g(x)$. This is evidently not ideal, as we’ll run out of letters eventually, and we need to represent a lot of things when developing a program.

What we can do, however, is add a subscript to whichever letter we choose. $f_\text{subscript}()$ is still very much a valid function for Desmos![^subscripts] Now, I’ve seen a lot of people name them like $t_\text{his}()$, which I find absolutely repulsive. So instead, I settle on a set of conventions for what the function letter represents – its precise purpose can then be described by the subscript.

[^subscripts]: Unlike in the case of, say, quantum wave functions for electron orbitals, subscripts don’t represent parameters in Desmos, and are purely decorative. Hopefully this doesn’t change, or we’re screwed!


<br>


## Variables

| letter | instances | semantics | description | notes |
| :----- | :-------- | :-------- | :---------- | :---- |
| `C` | | colour | Stores a hex colour. | |
| `G` | | global | A global variable, whether dynamic or static. | |
| `T` | | tick | A tick variable for timing events. | |
| `W` | | world | A globally accessible store of game data, often objects. |
| `` | | | The output of render. | |


<br>


## Functions

| letter | instances | semantics | description | notes |
| :----- | :-------- | :-------- | :---------- | :---- |
| `a` | | action | | |
| `c` | | control / core | Core functions for running the game.
| `d` | | draw | Renders visible polygons. | |
| `f` | $f_\{xrange()}$ | | A pure function,[^pure] performs calculations instead of modifying state. | Intended for commonly used utility functions. |
| `n` | | new | Create a new object (internally). | |
| `v` | $v_\text{tick}()$ | move | Moves something forward in time – either literally or by processing its updates. | *v* for velocity in physics, literally changing position. |
| `w` | | handle | Abstraction upon $v()$, usually for branching between different $v()$ depending on conditional.

[^pure]: In the functional programming sense!


<br>


## Parameters

| letter | instances | semantics | description | notes |
| :----- | :-------- | :-------- | :---------- | :---- |
| `i` | | index | | $i \in \mathbb{Z}, i \geq 1$ |
| `l` | | list | A list of objects. | The type of the objects can be described in the subscript, like $l_p$ for a list of points. |
| `n` | | number | | $n \in \mathbb{Z}, n \geq 0$ |
| `p` | | point | An $(x, y)$ pair of values. | Must be a point, cannot be a list (will be accessed via $p\text{.}x$, so a list would break it). |
| `s` | | parameter | A generic parameter. | |
| `t` | | time | Progression along a spectrum. | $0 \lte t \lte 1$ |


<br>
