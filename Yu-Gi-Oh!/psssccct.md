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

Where `HOPT` represents ‘hard once per turn’. If it’s `each effect` (instead of `this effect`), then `[HOPT]` goes before every applicable effect. This also brings the added advantage of being able to easily designate each effect different turnly restrictions, facilityzing more flexible card design. It also means `you can only use each of the following effects of {...} once per turn` will be no more, which always disrupts text structure.

Similarly, for Summon conditions:

| PSCT | PSSSCCCT |
| :--- | :------- |
| `If you control a Level/Rank 2 monster, you can Special Summon this card (from your hand). You can only Special Summon "Spright Blue" once per turn this way.` | `[HOPT] If you control a Level/Rank 2 Monster, you can SS this card (from your hand).` |
| `Once per turn, you can also Xyz Summon "Cyber Dragon Infinity" by using "Cyber Dragon Nova" you control as material. (Transfer its materials to this card.)` | `[HOPT] You can also Xyz Summon this card by using a "Cyber Dragon Nova" you control as Material. (Transfer Materials.)` |

For the other types, some are placed into a modifyzer before, while others are left as they are to avoid confusion. To summaryze:

| PSCT | PSSSCCCT |
| :--- | :------- |
| `Once per turn: You can discard 1 card; draw 1 card.` | `[OPT]: You can discard 1 card; Draw 1 card.` |
| `Once per Chain, if a card is discarded: Draw 1 card.` | `[Once per Chain] If a card is discarded: Draw 1 card.` |
| `You can discard 1 card; draw 1 card. You can only this effect of {...} once per turn.` | `[HOPT] You can discard 1 card; Draw 1 card.` |
| `If a card is discarded: Draw 1 card. You can only this effect of {...} once per Chain.` | `[Hard Once per Chain] If a card is discarded: Draw 1 card.` |
| `{effect}. {effect}. You can only use 1 {...} effect per turn, and only once that turn.` | `[HOPT] {effect}. [HOPT] {effect}. You can only use 1 effect of {...} each turn.` |

### Capitalyzacion
The main thing PSCT’s got going for it is how it ensures consistency in effect wording. But it really, really annoys me how it’s *consistently inconsistent*. In particular, there are some keywords that aren’t capitalyzen by themselves, but *are* when modifyzen by another word. Observe:

| uncapitalyzen | capitalyzen |
| :------------ | :---------- |
| `target 1 monster you control` | `target 1 Xyz Monster you control` <br> `1 Tuner Synchro Monster + 1+ non-Tuner monsters` |
| `a zone this card links to` | `your Spell/Trap Zone` <br> `if this card in the Monster Zone is destroyed` |

Then there’s the weird capitalyzacion of effects – `Condition: Cost; resolution` – where the text after a colon is capitalyzen, but not after the semicolon, what’s up with that?

So, a lot of the changes will tackle inconsistencys in structure and capitalyzacion, while condensing several well-known key words or phrases – above all, the aim was to maintain readability alongside balancing efficiency.


<br>


## Cases

### Monsters
| card | PSCT | PSSSCCCT |
| :--- | :--- | :------- |
| [Gigantic Spright](https://yugippedia.com/wiki/Gigantic_Spright) | For this card's Xyz Summon, you can treat Link-2 monsters you control as Level 2 monsters for material. The original ATK of this card that has a Fusion, Synchro, Xyz, or Link Monster as material becomes doubled. During your Main Phase: You can activate this effect; detach 1 material from a monster you control, and if you do, Special Summon 1 Level 2 monster from your Deck, also neither player can Special Summon monsters for the rest of this turn, except Level/Rank/Link 2 monsters. You can only use this effect of "Gigantic Spright" once per turn. | You can treat Link-2 Monsters you control as Lv2 Monsters for this card's Xyz Summon. ➊ While this card has an XD Monster attached as Material, its original ATK is doubled. ➋ [HOPT]: You can detach 1 Material from a Monster you control, and if you do, SS 1 Lv2 Monster from your Deck, also neither player can SS Monsters for the rest of this turn, except Level/Rank/Link 2 Monsters. |
| [Divine Arsenal AA-ZEUS - Sky Thunder](https://yugipedia.com/wiki/Divine_Arsenal_AA-ZEUS_-_Sky_Thunder) | Once per turn, if an Xyz Monster battled this turn, you can also Xyz Summon "Divine Arsenal AA-ZEUS - Sky Thunder" by using 1 Xyz Monster you control as material. (Transfer its materials to this card.) (Quick Effect): You can detach 2 materials from this card; send all other cards from the field to the GY. Once per turn, if another card(s) you control is destroyed by battle or an opponent's card effect: You can attach 1 card from your hand, Deck, or Extra Deck to this card as material. | [HOPT] If an Xyz Monster battled this turn, you can Xyz Summon this card by using 1 Xyz Monster you control as Material. (Transfer Materials). ➊ [Quick] You can detach 2 Materials from this card; Send all other cards on the field to the GY. ➋ [OPT] If another card you control is destroyed by battle or an opponent's card effect: You can attach 1 card from your hand, Deck, XD to this card as Material. |
| [Borreload Savage Dragon](https://yugipedia.com/wiki/Borreload_Savage_Dragon) | If this card is Synchro Summoned: You can equip 1 Link Monster from your GY to this card, and if you do, place Borrel Counters on this card equal to that Link Monster's Link Rating. This card gains ATK equal to half the ATK of the monster equipped to it by its effect. When your opponent activates a card or effect (Quick Effect): You can remove 1 Borrel Counter from this card; negate the activation. You can only use this effect of "Borreload Savage Dragon" once per turn. | ➊ If this card is Synchro Summoned: You can equip 1 Link Monster from your GY to this card, and if you do, place Borrel Counters on this card equal to that Monster's Link Rating. ➋ This card gains ATK equal to half the ATK of the Monster equipped to it by this effect. ➌ [HOPT Quick] When your opponent activates a card or effect: You can remove 1 Borrel Counter from this card; Negate the activation. |
| [Drytron Meteonis Draconids](https://yugipedia.com/wiki/Drytron_Meteonis_Draconids) | You can Ritual Summon this card with "Meteonis Drytron". Your opponent cannot target this card with monster effects. If the total Levels of monsters used for its Ritual Summon are 2 or less, this card can attack all Special Summoned monsters your opponent controls once each. During your opponent's turn (Quick Effect): You can banish monsters from your GY whose combined ATK equals exactly 2000 or 4000, then target 1 face-up card your opponent controls for every 2000 ATK of the total; send that card(s) to the GY. You can only use this effect of "Drytron Meteonis Draconids" once per turn. | Can be Ritual Summoned with "Meteonis Drytron". ➊ Cannot be targeted by your opponent's Monster effects. ➋ If the total Levels of the Monsters used for this card's Ritual Summon were 2 or less, it can attack all SSd Monsters your opponent controls, once each. ➌ [HOPT Quick] During your opponent's turn: You can banish Monsters from your GY, whose total ATK equals exactly 2000 or 4000, then target 1 face-up card your opponent controls for every 2000 ATK of the total; Send that card(s) to the GY. |
| [Dogmatika Alba Zoa](https://yugipedia.com/wiki/Dogmatika_Alba_Zoa) | Cannot be Ritual Summoned, except by "Dogmatikalamity" or another "Dogmatika" card effect. "Dogmatika" monsters you control are unaffected by the activated effects of your opponent's Fusion, Synchro, Xyz, and Link Monsters. During your Main Phase: You can make your opponent choose and apply 1 of these effects ('you' in these effects means that opponent). <br> ● For every 2 cards in your Extra Deck, send 1 card from your hand or Extra Deck to the GY. <br> ● Return all Fusion, Synchro, Xyz, and Link Monsters you control to the Extra Deck. <br> You can only use this effect of "Dogmatika Alba Zoa" once per turn. | Must be Ritual Summoned by a "Dogmatika" card. ➊ "Dogmatika" Monsters you control are unaffected by the activated effects of your opponent's XD Monsters. ➋ [HOPT]: You can make your opponent choose and apply 1 of the following effects. <br> ● They send 1 card from their hand or XD to the GY for every 2 cards in their XD. <br> ● They return all XD Monsters they control to the XD. |
| [Kashtira Arise-Heart](https://yugipedia.com/wiki/Kashtira_Arise-Heart) | 3 Level 7 monsters <br> Once per turn, you can also Xyz Summon "Kashtira Arise-Heart" by using 1 "Kashtira" monster you control, if an effect of "Kashtira Shangri-Ira" was successfully activated this turn. (Transfer its materials to this card.) Any card sent to the GY is banished instead. Once per Chain, each time a card(s) is banished: Attach 1 banished card to this card as material. Once per turn (Quick Effect): You can detach 3 materials from this card, then target 1 card on the field; banish it face-down. | 3 Lv7 Monsters <br> [HOPT] If an effect of "Kashtira Shangri-Ira" was activated this turn, you can also Xyz Summon this card by using 1 "Kashtira" Monster you control as Material. (Transfer Materials, if any.) ➊ Any card sent to the GY is banished instead. ➋ [Once per Chain] If a card is banished: Attach 1 banished card to this card as Material. ➌ [OPT Quick] You can detach 3 Materials from this card, then target 1 card on the field; Banish it face-down.
| [Cyberse Clock Dragon](https://yugipedia.com/wiki/Cyberse_Clock_Dragon) | When this card is Fusion Summoned: You can send cards from the top of your Deck to the GY, equal to the total Link Rating of the materials used for this card's Fusion Summon, and if you do, until the end of the next turn, other monsters you control cannot attack, also this card gains 1000 ATK for each card sent to the GY by this effect. While you control a Link Monster(s), your opponent's monsters cannot target other monsters you control for attacks, also your opponent cannot target other monsters you control with card effects. If this Fusion Summoned card you control is sent to your GY by an opponent's card effect: You can add 1 Spell from your Deck to your hand. | ➊ While you control a Link Monster, your opponent cannot target Monsters you control other than this card for attacks or with card effects. ➋ When this card is Fusion Summoned: You can send cards from the top of your Deck to the GY, equal to the total Link Rating of the Fusion Materials used, and if you do, until the end of next turn, this card gains 1000 ATK for each card sent to the GY by this effect, also your other Monsters cannot attack. ➌ If this Fusion Summoned card you control is sent to the GY by an opponent's card effect: You can add 1 Spell from your Deck to your hand. |
| [Nirvana High Paladin](https://yugipedia.com/wiki/Nirvana_High_Paladin) | If a Pendulum Monster you control attacks, for that battle, it cannot be destroyed by battle, also you take no battle damage. At the end of the Damage Step, if a Pendulum Monster you control attacked: All monsters your opponent currently controls lose ATK equal to that attacking monster's ATK, until the end of this turn. <br> --- </br> For this card's Synchro Summon, you can treat 1 Pendulum Summoned Pendulum Monster you control as a Tuner. If this card is Synchro Summoned using a Pendulum Summoned Pendulum Monster Tuner: You can target 1 card in your GY; add it to your hand. When this card destroys an opponent's monster by battle: You can halve your opponent's LP. If this card in the Monster Zone is destroyed by battle or card effect: You can place this card in your Pendulum Zone. | ➊ If your Pendulum Monster attacks, it cannot be destroyed by battle, also you take no damage from that battle. ➋ At the end of the Damage Step, if your Pendulum Monster attacked: All Monsters your opponent currently controls lose ATK equal to your Monster's ATK, until the end of this turn. <br> --- </br> You can treat 1 Pendulum Summoned Pendulum Monster you control as a Tuner for this card's Synchro Summon. ➊ If this card is Synchro Summoned using a Pendulum Summoned Pendulum Tuner Monster as Material: You can target 1 card in your GY; Add it to your hand. ➋ When this card destroys an opponent's Monster by battle: You can halve your opponent's LP. ➌ If this card in the Monster Zone is destroyed by battle or card effect: You can place it in your Pendulum Zone. |
| [Endymion, the Mighty Master of Magic](https://yugipedia.com/wiki/Endymion,_the_Mighty_Master_of_Magic) | You can remove 6 Spell Counters from your field; Special Summon this card from the Pendulum Zone, then count the number of cards you control that can have a Spell Counter, destroy up to that many cards on the field, and if you do, place Spell Counters on this card equal to the number of cards destroyed. You can only use this effect of "Endymion, the Mighty Master of Magic" once per turn. <br> --- </br> Once per turn, when a Spell/Trap Card or effect is activated (Quick Effect): You can return 1 card you control with a Spell Counter to the hand, and if you do, negate the activation, and if you do that, destroy it. Then, you can place the same number of Spell Counters on this card that the returned card had. While this card has a Spell Counter, your opponent cannot target it with card effects, also it cannot be destroyed by your opponent's card effects. When this card with a Spell Counter is destroyed by battle: You can add 1 Normal Spell from your Deck to your hand. | ➊ [HOPT] You can remove 6 SCs from your field; SS this card from your Pendulum Zone, then destroy cards on the field, up to the number of cards you control that can have a SC, and if you do, place 1 SC on this card for each destroyed. <br> --- <br> ➊ While this card has a SC, it cannot be targeted or destroyed by your opponent's card effects. ➋ [OPT Quick] When a S/T card or effect is activated: You can return 1 card you control with a SC to the hand, and if you do, negate the activation, and if you do that, destroy that card, then you can place the same number of SCs on this card that the returned card had. ➌ When this card with a SC is destroyed by battle: You can add 1 Normal Spell from your Deck to your hand. |

### Spell/Traps
| card | PSCT | PSSSCCCT |
| :--- | :--- | :------- |
| [Primitive Planet Reichphobia](https://yugipedia.com/wiki/Primitive_Planet_Reichphobia) | When this card is activated: You can add 1 "Scareclaw" monster or "Visas Starfrost" from your Deck to your hand. Monsters your opponent controls lose 100 ATK/DEF for each Defense Position monster on the field. If 3 or more Defense Position monsters are on the field: You can target 1 card your opponent controls; destroy it. You can only use this effect of "Primitive Planet Reichphobia" once per turn. You can only activate 1 "Primitive Planet Reichphobia" per turn. | ➊ When this card is activated: You can add 1 "Scareclaw" Monster or "Visas Starfrost" from your Deck to your hand. ➋ Monsters your opponent controls lose 100 ATK/DEF for each DEF Position Monster on the field. ➌ [HOPT] If 3+ Monsters on the field are in DEF Position: You can target 1 card your opponent controls; Destroy it. You can only activate "Primitive Planet Reichphobia" once per turn. |
| [Rank-Up-Magic Revolution Force](https://yugipedia.com/wiki/Rank-Up-Magic_Revolution_Force) | ● During your turn: Target 1 "Raidraptor" Xyz Monster you control; Special Summon from your Extra Deck, 1 "Raidraptor" monster that is 1 Rank higher than that target, by using that target as the Xyz Material. <br> ● During your opponent's turn: Target 1 Xyz Monster your opponent controls with no Xyz Materials; take control of that Xyz Monster, then Special Summon from your Extra Deck, 1 "Raidraptor" monster that is 1 Rank higher than that monster, by using it as the Xyz Material. <br> (These Special Summons are treated as Xyz Summons. Attached Xyz Materials also become Xyz Materials on the Summoned monster.) | ➊ During your turn: Target 1 "Raidraptor" Xyz Monster you control; SS from your XD, 1 "Raidraptor" Xyz Monster that is 1 Rank higher, by using that target as Material. <br> ➋ During your opponent's turn: Target 1 Xyz Monster your opponent controls with no Material; Take control of that Xyz Monster, then SS from your XD, 1 "Raidraptor" Xyz Monster that is 1 Rank higher, by using it as Material. <br> (These are treated as Xyz Summons. Transfer Materials.) |
| [Branded Retribution](https://yugipedia.com/wiki/Branded_Retribution) | When a Spell/Trap Card, or monster effect, is activated that includes an effect that Special Summons a monster(s): Return to the Extra Deck, 1 face-up Fusion Monster you control, or 2 Fusion Monsters in your GY, that mention "Fallen of Albaz" as material, and if you do, negate the activation, and if you do that, destroy that card. You can banish this card from your GY, then target 1 "Branded" Spell/Trap in your GY, except "Branded Retribution"; add it to your hand. You can only use 1 "Branded Retribution" effect per turn, and only once that turn. | ➊ When a S/T card or Monster effect is activated that would SS a Monster: Return to the XD, either 1 face-up Fusion Monster you control, or 2 Fusion Monsters in your GY that list "Fallen of Albaz" as Material, and if you do, negate the activation, and if you do that, destroy that card. ➋ [HOPT] You can banish this card from your GY, then target 1 "Branded" S/T in your GY, except "Branded Retribution"; Add it to your hand. You can only use 1 effect of "Branded Retribution" each turn. |


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
