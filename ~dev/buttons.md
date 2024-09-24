# Buttons: More Complicated Than They Look
<!-- #SQUARK live!
| dest = dev/buttons
| style = dev
| index = dev
| shard = #INDEX / writing
-->

I don’t see this covered anywhere for some reason – maybe cuz frameworks and game engines already handle it for you, or people just don’t consider that deeply when programming buttons themselves.

Consider [this link]() here, which is, effectively, a button. If you have a cursor, try hover over it. Then click it, but don’t let go. See what happens if you drag your cursor away.

It seems simple – surely all you need to do is check if the cursor is touching (colliding, for the game devs) the button, and whether the user has clicked down. Illustrating with some pseudocode then, we’d just have something like this within the event loop of a button:

```py
if touching-cursor and mouse-down:
    do-action()
```

Alright, but if you’ll test this you’ll immediately run into a problem: whenever the button is clicked, it will continue running `do-action()` every iteration until the cursor either leaves the button or the user releases the click. Probably not ideal, since we want the button to only do its thing once.

But wait, *when* do we want it to do that thing? When it’s first clicked? when the click is released? Some time in between?

See, if a user clicks on something but doesn’t let go, it might mean they’re thinking or hesitating.[hesitate] In that case, it’d be nice if they could cancel their click by dragging their cursor off the button. Of course, this won’t be suitable for all scenarios, and like many things is a design decision very much dependent on context. For instance, while it’s probably better for a [SUBMIT]() button to be cancellable, something like a scrollbar (probably) won’t have side effects and can be easily reverted. Generally, I think most buttons 

[^hesitate]: Hey, why didn’t they just think it through before? Well, humans aren’t perfect, so the user might only realise it’s not what they intended *after* clicking down. It’s like playing touch-it-move-it in chess and realising only after you’ve picked a piece that it’s not gonna be the best play.


<br>
