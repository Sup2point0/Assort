# A Primer to Programming in Desmos
<!-- #SQUARK live!
| dest = desmos/dev
| index = desmos / dev / writing
| shard = #INDEX
| date = 2024 autumn
| clean = braces
-->

Did you know you can develop games in Desmos?

Aw yeah, Desmos is *so* much more than just a graphical calculator. In fact, you can create animations, interfaces, or even entire programs. It’s kinda like [Scratch<sup>↗</sup>](https://scratch.mit.edu) – you can create anything you want, if you try hard enough!


<br>


## Desmos in Action

The singular feature which makes programming in Desmos possible is **actions**. The [Desmos article<sup>↗</sup>>](https://help.desmos.com/hc/en-us/articles/4407725009165-Actions) explains them far better than I could, so have a read of that if you’re not familiar with them.

Critically, actions give us the ability to mutate state. If you think about variables:

![Setting variables in Desmos](.assets/desmos/dev/primer/variables.png)

We can set them to particular values; we can change them (manually) with a slider; we can even keep them oscillating by animating the slider. What we can’t do (without actions) is use Desmos itself to change their values. We either have to type in a new value, drag the slider, or ...wait for the slider to momentarily hit the value we wanted. Not exactly ideal for programming!

Actions, then, give us a programmatic way to alter variables. Check it out:

![Actions in action](.assets/desmos/dev/primer/actions.png)

When we run the action, it updates the value of the variable. Now let’s pull a JavaScript and assign this expression to an identifier:

![Naming an action](.assets/desmos/dev/primer/naming-action.png)

Now we can use $a()$ anywhere to run this action. And since it’s pretty much just a function, we can of course add parameters too:

![Action with parameters](.assets/desmos/dev/primer/action-parameters.png)

Lo and behold, what have we here? Might as well just be a function / procedure / method / whatever you wanna call it.

So, we’ve got variables, and we’ve got functions to change them. All we’re missing now is the logic to control how we go about that!


<br>


## Control Flow


<br>


## Circular Motion


<br>


## Geometrical Graphics


<br>
