# Problem-Solving Super Simple and Compact Custom Card Text

Card text in *Yu-Gi-Oh!* is wonderfully written (in that it flows like regular text, easily allowing players to understand what it does) ...but at the same time is also horrendously cluttered and inefficient for playing a card game, especially one on tiny pieces of cardboard. Problem-Solving Card Text is awesome, don’t get me wrong, but it has plenty of issues, inefficiencys, and inconsistencys that should really be addressed.

And so, here’s *PSSSCCCT*, the successor to PSCT, which I exclusively utilyze on DuelingBook to allow the opponent (and me) to far more easily interpret and keep track of what all my cards do.


<br>


## Rationale

There have been some great changes to PSCT in the past – for instance, simply stating ‘inflict piercing battle damage’ instead explaining how piercing battle damage works – but the thing is, they just don’t *do* enough.

A signficant instance of this is the simplyzacion of `Graveyard` to `GY`. This is a keyword that is very likely to appear on cards (especially with modern cards), and often more than once, so saving those characters brings widespread benefit. So, why not do the same for other keywords, those that are even more prevalent than 'Graveyard'? The main culprit is gonna be `Special Summon`. Look how much space this saves:

<table>
  <tr>
    <th> PSCT </th>
    <td> <em>If this card is Normal or Special Summoned: {...}</em> </td>
  </tr>
  <tr>
    <th> PSSSCCCT </th>
    <td> <em>If this card is NSd or SSd: {...}</em> </td>
  </tr>
</table>

And imagine that across almost every card, even several times in the same card.

{...}

Now, the main thing PSCT's got going for it is how it ensures consistency in effect wording. But it really, really annoys me how it's *consistently inconsistent*. In particular, there are some keywords that aren't capitalyzen by themselves, but *are* when modifyzen by another word.

| alone | affected |
| :---- | :------- |
| material | Fusion Material, Synchro Material


<br>


## Overview

{...}


<br>


## Changes

A list of all the syntax changes.

| original | novel | notes |
| :------- | :---- | :---- |
| Condition: Cost; resolution. You can only {...} once per turn. | `[~] Condition: Cost; Resolution.` | – |
| You can only use this effect of ‘...’ once per turn. | `[HOPT]` | placed at the start of the effect after the number |
| (Quick Effect) | `[Quick]` | placed at start of effect, can be merged with other modifyzers |
| Spell/Trap | `S/T` | |
| Extra Deck | `XD` | |
| ~ Phase | `~P` | `BP` for ‘Battle Phase’, `MP2` for ‘Main Phase 2’, etc. |
| Normal Summon | `NS` | `NSs` and `NSd` for Normal ‘Summons’ and ‘Summoned’ |
| Special Summon | `SS` | `SSs` and `SSd` for Special ‘Summons’ and ‘Summoned’ |
| Attack/Defense Position | `ATK/DEF Position` | the abbrevyzacions are already there, why not use them? |
