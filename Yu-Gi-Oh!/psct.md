# Programming Style Cipher Text

Ah, don’t we all love [PSCT<sup>↗</sup>](https://yugipedia.com/wiki/Problem-Solving_Card_Text) – ~~Problem-Solving Card Text~~ *Programming Style Cipher Text*, ofc.


<br>


## Overview

Take [Endymion, the Mighty Master of Magic](https://yugipedia.com/wiki/Endymion,_the_Mighty_Master_of_Magic) – the card in *Yu-Gi-Oh!* with the longest overall text.

```coffee
• inf eff while self.Counters.Spell > 0: self.Destroy(eff, opp) = False, self.Target(eff, opp) = False
• opt fast eff [OPT] on Activate(card/effect, S/T): Return(FD › HD, Card(Counters.Spell > 0)) - Negate(activation) - Destroy() » Place(Counters.Spell, self, ...)
• opt trig eff on Destroy(battle, self) if self.Counters.Spell > 0: Add(DK › HD, Spell(Normal))
```


<br>


## Cases

A selection of diverse instances to illustrate how *PSCT* works.

### Monsters

<table>
  <tr>
    <th rowspan="2"> card </th>
    <th> PSCT </th>
  </tr>
  <tr>
    <th> <em>PSCT</em> </th>
  </tr>
  <tr>
    <td rowspan="2"> Drytron Meteonis Draconids </td>
    <td> You can Ritual Summon this card with "Meteonis Drytron". Your opponent cannot target this card with monster effects. If the total Levels of monsters used for its Ritual Summon are 2 or less, this card can attack all Special Summoned monsters your opponent controls once each. During your opponent's turn (Quick Effect): You can banish monsters from your GY whose combined ATK equals exactly 2000 or 4000, then target 1 face-up card your opponent controls for every 2000 ATK of the total; send that card(s) to the GY. You can only use this effect of "Drytron Meteonis Draconids" once per turn. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[SS] "Meteonis Drytron"
[1] cont eff: OPP.Cannot(Target(self) with Effects[Monster])
[2] opt cont eff if Total(self.SS(Ritual).Monsters.Levels) < 3:
  self.Can(Attack(all Monsters[SS=TRUE, control=OPP]))
[3] opt quick eff [HOPT, turn=OPP]:
  Banish(YOU.GY, Monsters[ATK > 0]) -> fuel where Total(fuel, ATK) = 2000/4000,
  Target(Card[control=OPP, face=UP]) -> t; Send(GY, t) </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="2"> <a href="">Dogmatika Alba Zoa</a> </td>
    <td> Cannot be Ritual Summoned, except by "Dogmatikalamity" or another "Dogmatika" card effect. "Dogmatika" monsters you control are unaffected by the activated effects of your opponent's Fusion, Synchro, Xyz, and Link Monsters. During your Main Phase: You can make your opponent choose and apply 1 of these effects ('you' in these effects means that opponent). <br> ● For every 2 cards in your Extra Deck, send 1 card from your hand or Extra Deck to the GY. <br> ● Return all Fusion, Synchro, Xyz, and Link Monsters you control to the Extra Deck. <br> You can only use this effect of "Dogmatika Alba Zoa" once per turn. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[SS] req Card["Dogmatika"]
[1] cont eff: Unaffected(Monsters["Dogmatika", control=YOU] by {
  Effects[OPP, activated, Monsters[class=EXTRA]]) }
[2] opt ignit eff [HOPT]: OPP.Choose(Effect) from {
  [2.1] for every 2 Cards in (OPP.(HAND/EXTRA) as loc) Send(loc, OPP.GY, Card[])
  [2.2] Return(OPP.EXTRA, Monsters[class=EXTRA], control=OPP])
} </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="2"> Kashtira Arise-Heart </td>
    <td> 3 Level 7 monsters <br> Once per turn, you can also Xyz Summon "Kashtira Arise-Heart" by using 1 "Kashtira" monster you control, if an effect of "Kashtira Shangri-Ira" was successfully activated this turn. (Transfer its materials to this card.) Any card sent to the GY is banished instead. Once per Chain, each time a card(s) is banished: Attach 1 banished card to this card as material. Once per turn (Quick Effect): You can detach 3 materials from this card, then target 1 card on the field; banish it face-down. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[SS] 3 * Monster[level=3]
  opt cond [HOPT]: if "Kashtira Shangri-Ira".Activated(Effect[], success=TRUE, turn=THIS):
  self.SS(Xyz, transfer=TRUE) with Monster("Kashtira", control=YOU)
[1] req cont eff: if would Send(GY, Card[] -> card), Banish(card)
[2] req trig eff [OPC] on Banish(Card[]): Target(Card[VOID]) -> t; self.Attach(t)
[3] opt quick eff [OPT]: self.Detach(3), Target(Card[FIELD]) -> t; Banish(t, face=DOWN) </code></pre>
    </td>
  </tr>
</table>

### Spell/Traps

<table>
  <tr>
    <th rowspan="2"> card </th>
    <th> PSCT </th>
  </tr>
  <tr>
    <th> <em>PSCT</em> </th>
  </tr>
  <tr>
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Primeval_Planet_Perlereino">Primeval Planet Perlereino</a> </td>
    <td> When this card is activated: You can add 1 "Tearlaments" monster or 1 "Visas Starfrost" from your Deck to your hand. Fusion Monsters and "Tearlaments" monsters you control gain 500 ATK. If a "Tearlaments" monster(s) you control or in your GY is shuffled into the Deck or Extra Deck (except during the Damage Step): You can target 1 card on the field; destroy it. You can only use this effect of "Primeval Planet Perlereino" once per turn. You can only activate 1 "Primeval Planet Perlereino" per turn. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>act eff [OPT]: HAND.Add(DECK, Monster["Tearlaments"]/"Visas Starfrost")
[1] req cont eff: Alt(ATK, Monsters["Tearlaments"]/Monsters[Fusion])[control=YOU], +500)
[2] trig? eff [HOPT, Step[Damage]=FALSE] on Shuffle(YOU.(FIELD/GY), YOU.(DECK/EXTRA) Monster["Tearlaments"]):
  Target(Card[FIELD]) -> t; Destroy(t) </code></pre>
    </td>
  </tr>
</table>


<br>


## Documentation

> [!Note]
> If it isn’t abundantly clear already, this is entirely esoteric and *not* intended for actual use. For now.
>
> Regardless, here I’ll try to document all the defined keywords and all!

### Actions

```coffee
Add(
  source: Location [DECK/GY/VOID]
  dest: Location [HAND/EXTRA]
  target: Card/s
) -> Card/s

Alt(
  property: Property [LEVEL/TYPE/ATTR/ATK/DEF]
  target: Card/s
  value = ?
)

Banish(
  source: Location [HAND/FIELD/DECK/EXTRA/GY] = auto
  target: Card/s
  face: [UP/DOWN] = UP
)

Destroy(
  source: Location [HAND/FIELD/DECK/EXTRA]] = auto
  target: Card/s
) -> Card/s

Draw(
  count: Number = 1
)

Return(
  source: Location [FIELD/GY/VOID]
  dest: Location [HAND/EXTRA/GY]
) -> Card/s

Reveal(
  source: Location [HAND/DECK/EXTRA]
  target: Card/s
)

Send(
  source: Location [HAND/FIELD/DECK/EXTRA]
  dest: Location [GY] = YOU.GY
  target: Card/s
) -> Card/s

Target(
  target: Card/s
) -> Card/s
```
