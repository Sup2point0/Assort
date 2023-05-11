# Problem-Solving Super Simple and Compact Custom Card Text

Card text in *Yu-Gi-Oh!* is wonderfully written (in that it flows like regular text, easily allowing players to understand what it does) ...but at the same time is also horrendously cluttered and inefficient for playing a card game, especially one on tiny pieces of cardboard. Problem-Solving Card Text is awesome, don’t get me wrong, but it has plenty of issues, inefficiencys, and inconsistencys that should really be addressed.

And so, here’s *PSSSCCCT*, the successor to PSCT, which I exclusively utilyze on DuelingBook to allow the opponent (and me) to far more easily interpret and keep track of what all my cards do.

See [§ Changes](#Changes) for quick reference.


<br>


## Overview

### Rationale
There have been some great changes to PSCT in the past – for instance, simply stating `inflict piercing battle damage` instead explaining how piercing battle damage works – but the thing is, they just don’t *do* enough.

A signficant instance of this is the simplyzacion of `Graveyard` to `GY`. This is a keyword that is very likely to appear on cards (especially with modern cards), and often more than once, so saving those characters brings widespread benefit. So, why not do the same for other keywords, those that are even more prevalent than `Graveyard`? The main culprit is gonna be `Special Summon`. Look how much space this saves:

<table>
  <tr>
    <th align="left"> PSCT </th>
    <td> <code>If this card is Normal or Special Summoned: {...}</code> </td>
  </tr>
  <tr>
    <th align="left"> PSSSCCCT </th>
    <td> <code>If this card is NSd or SSd: {...}</code> </td>
  </tr>
</table>

And imagine that across almost every card, even several times in the same card. But y’know what would make *even more* of a difference?

### Turnly Restrictions
Once per turn clauses. Seriously. Almost every single modern Yu-Gi-Oh card will have these – potentially even multiple, like with [Spright](https://yugipedia.com/wiki/Spright) Monsters or [Primeval Planet Perlereino](https://yugipedia.com/wiki/Primeval_Planet_Perlereino).

Now, there are different kinds of once per turn restrictions, so only the 2 most common are simplyzen, for the sake of avoiding confusion. `you can only use this effect of {...} once per turn` (note `use` instead of `activate`), usually written after the resolution and other conditions of the effect, now becomes a `[HOPT]` modifyzer before the start of the effect, like so:

<table>
  <tr>
    <th align="left"> PSCT </th>
    <td> <code>If a card(s) in your Pendulum Zone leaves the field: Draw 1 card. You can only use this effect of "Heavymetalfoes Electrumite" once per turn.</code> </td>
  </tr>
  <tr>
    <th align="left"> PSSSCCCT </th>
    <td> <code>[HOPT] If a card in your Pendulum Zone leaves the field: Draw 1 card.</code> </td>
  </tr>
</table>

Where ‘HOPT’ represents ‘hard once per turn’. If it’s `each effect` (instead of `this effect`), then `[HOPT]` goes before every applicable effect. This also brings the added advantage of being able to easily designate each effect different turnly restrictions, facilityzing more flexible card design. It also means `you can only use each of the following effects of {...} once per turn` will be no more, which always disrupts text structure.

Similarly, for Summon conditions:

<table>
  <tr>
    <th align="left"> PSCT </th>
    <td> <code>If you control a Level/Rank 2 monster, you can Special Summon this card (from your hand). You can only Special Summon "Spright Blue" once per turn this way.</code> </td>
    <td> <code>Once per turn, you can also Xyz Summon "Cyber Dragon Infinity" by using "Cyber Dragon Nova" you control as material. (Transfer its materials to this card.)</code> </td>
  </tr>
  <tr>
    <th align="left"> PSSSCCCT </th>
    <td> <code>[HOPT] If you control a Level/Rank 2 Monster, you can SS this card (from your hand).</code> </td>
    <td> <code>[HOPT] You can also Xyz Summon this card by using a "Cyber Dragon Nova" you control as Material. (Transfer Materials.)</code> </td>
  </tr>
</table>

For the other types, some are placed into a modifyzer before, while others are left as they are to avoid confusion.

{...}

To clarityze:

| PSCT | PSSSCCCT |
| :--- | :------- |
| `Once per turn: You can discard 1 card; draw 1 card.` | `[OPT]: You can discard 1 card; Draw 1 card.` |
| `You can discard 1 card; draw 1 card. You can only this effect of {...} once per turn.` | `[HOPT] You can discard 1 card; Draw 1 card.` |
| `{effect}. {effect}. You can only use 1 {...} effect per turn, and only once that turn.` | `[HOPT] {effect}. [HOPT] {effect}. You can only use 1 effect of {...} each turn.` |



{...}

### Capitalyzacion
The main thing PSCT’s got going for it is how it ensures consistency in effect wording. But it really, really annoys me how it’s *consistently inconsistent*. In particular, there are some keywords that aren’t capitalyzen by themselves, but *are* when modifyzen by another word. Observe:

| uncapitalyzen | capitalyzen |
| :------------ | :---------- |
| `target 1 monster you control` | `target 1 Xyz Monster you control` <br> `1 Tuner Synchro Monster + 1+ non-Tuner monsters` |
| `a zone this card links to` | `your Spell/Trap Zone` <br> `if this card in the Monster Zone is destroyed` |

Then there’s the weird capitalyzacion of effects – `Condition: Cost; resolution` – where the text after a colon is capitalyzen, but not after the semicolon, what’s up with that?

So, a lot of the changes will tackle inconsistencys in structure and capitalyzacion, while condensing several well-known key words or phrases – above all, the aim was to maintain readability alongside balancing efficiency.


<br>


## Changes

A list of all the syntax changes.

| original | novel | notes |
| :------- | :---- | :---- |
| `Condition: Cost; resolution. You can only {...} once per turn.` | `[~] Condition: Cost; Resolution.` | resolution clause is also capitalyzen |
| `You can only use this effect of ‘...’ once per turn.` | `[HOPT]` | placed at the start of the effect after the number |
| `(Quick Effect)` | `[Quick]` | placed at start of effect, can be merged with other modifyzers |
| `Spell/Trap` | `S/T` | |
| `Extra Deck` | `XD` | |
| `~ Phase` | `~P` | `BP` for ‘Battle Phase’, `MP2` for ‘Main Phase 2’, etc. |
| `Normal Summon` | `NS` | `NSs` and `NSd` for Normal ‘Summons’ and ‘Summoned’ |
| `Special Summon` | `SS` | `SSs` and `SSd` for Special ‘Summons’ and ‘Summoned’ |
| `Attack/Defense Position` | `ATK/DEF Position` | the abbrevyzacions are already there, why not use them? |
