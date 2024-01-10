# Programming Style Cipher Text

Ah, don’t we all love [PSCT<sup>↗</sup>](https://yugipedia.com/wiki/Problem-Solving_Card_Text) – ~~Problem-Solving Card Text~~ *Programming Style Cipher Text*, ofc.


<br>


## Overview


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
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Gigantic_Spright">Gigantic Spright<sup>↗</sup></a> </td>
    <td> 2 Level 2 monsters <br> For this card's Xyz Summon, you can treat Link-2 monsters you control as Level 2 monsters for material. The original ATK of this card that has a Fusion, Synchro, Xyz, or Link Monster as material becomes doubled. During your Main Phase: You can activate this effect; detach 1 material from a monster you control, and if you do, Special Summon 1 Level 2 monster from your Deck, also neither player can Special Summon monsters for the rest of this turn, except Level/Rank/Link 2 monsters. You can only use this effect of "Gigantic Spright" once per turn. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[S] 2 * Monster[level=2]
  opt cond: self.Summon?(Xyz) with Monsters[Link, link=2]
[1] cont eff if self.materials has Monster[class=EXTRA] : Change(self.ATK.orig, * 2)
[2] opt ignit eff [HOPT]: {}; Detach(Monster[Xyz, control=YOU], 1) to
  Summon(Special, DECK, Monster[level=2]) + Apply(turn=THIS) {
    (YOU, OPP).Summon!(Special, Monster[level!=2]) } </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Exosisters_Magnifica">Exosisters Magnifica<sup>↗</sup></a> </td>
    <td> 2 Rank 4 "Exosister" Xyz Monsters <br> Must be Xyz Summoned with the above materials. This card can make a second attack during each Battle Phase. Once per turn (Quick Effect): You can detach 1 material from this card; banish 1 card your opponent controls. When your opponent activates a card or effect (Quick Effect): You can return 1 Xyz Monster you own attached to this card to your Extra Deck, then you can Special Summon that monster from your Extra Deck, by using this card you control as material. (This is treated as an Xyz Summon. Transfer this card's materials to the Summoned monster.) </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[S] req 2 * Monster['Exosister', Xyz, ran=4]
[1] cont eff: Attack?(count=+1, each=Phase[Battle])
[2] opt quick eff [OPT]: self.Detach(1); Banish(Card[control=OPP])
[3] opt quick eff on OPP.Activate(Card/Effect[]): 
  Return(self.materials, EXTRA, Monster[Xyz, YOU] -> t), t.Summon?(Xyz, transfer=TRUE) with self </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Drytron_Meteonis_Draconids">Drytron Meteonis Draconids<sup>↗</sup></a> </td>
    <td> You can Ritual Summon this card with "Meteonis Drytron". Your opponent cannot target this card with monster effects. If the total Levels of monsters used for its Ritual Summon are 2 or less, this card can attack all Special Summoned monsters your opponent controls once each. During your opponent's turn (Quick Effect): You can banish monsters from your GY whose combined ATK equals exactly 2000 or 4000, then target 1 face-up card your opponent controls for every 2000 ATK of the total; send that card(s) to the GY. You can only use this effect of "Drytron Meteonis Draconids" once per turn. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[S] 'Meteonis Drytron'
[1] cont eff: OPP.Cannot(Target(self) with Effects[Monster])
[2] opt cont eff if Total(self.SS(Ritual).Monsters.Levels) < 3:
  self.Can(Attack(all Monsters[SS=TRUE, control=OPP]))
[3] opt quick eff [HOPT, turn=OPP]:
  Banish(YOU.GY, Monsters[ATK > 0]) -> fuel, where Total(fuel, ATK) = 2000/4000,
  Target(Card[control=OPP, face=UP]) -> t; Send(GY, t) </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Dogmatika_Alba_Zoa">Dogmatika Alba Zoa<sup>↗</sup></a> </td>
    <td> Cannot be Ritual Summoned, except by "Dogmatikalamity" or another "Dogmatika" card effect. "Dogmatika" monsters you control are unaffected by the activated effects of your opponent's Fusion, Synchro, Xyz, and Link Monsters. During your Main Phase: You can make your opponent choose and apply 1 of these effects ('you' in these effects means that opponent). <br> ● For every 2 cards in your Extra Deck, send 1 card from your hand or Extra Deck to the GY. <br> ● Return all Fusion, Synchro, Xyz, and Link Monsters you control to the Extra Deck. <br> You can only use this effect of "Dogmatika Alba Zoa" once per turn. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[SS] req Card["Dogmatika"]
[1] cont eff: Unaffected(Monsters['Dogmatika', control=YOU] by {
  Effects[OPP, activated, Monsters[class=EXTRA]]) }
[2] opt ignit eff [HOPT]: OPP.Choose(Effect) to Apply() from {
  [2.1] for every 2 Cards in (OPP.(HAND/EXTRA) as loc), OPP.Send(loc, OPP.GY, Card[])
  [2.2] Return(OPP.EXTRA, Monsters[class=EXTRA], control=OPP])
} </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Kashtira_Arise-Heart">Kashtira Arise-Heart<sup>↗</sup></a> </td>
    <td> 3 Level 7 monsters <br> Once per turn, you can also Xyz Summon "Kashtira Arise-Heart" by using 1 "Kashtira" monster you control, if an effect of "Kashtira Shangri-Ira" was successfully activated this turn. (Transfer its materials to this card.) Any card sent to the GY is banished instead. Once per Chain, each time a card(s) is banished: Attach 1 banished card to this card as material. Once per turn (Quick Effect): You can detach 3 materials from this card, then target 1 card on the field; banish it face-down. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[SS] 3 * Monster[level=3]
  opt cond [HOPT]: if 'Kashtira Shangri-Ira'.Activated(Effect[], success=TRUE, turn=THIS):
  self.SS(Xyz, transfer=TRUE) with Monster('Kashtira', control=YOU)
[1] req cont eff: if would Send(GY, Card[] -> card), Banish(card)
[2] req trig eff [OPC] on Banish(Card[]): Target(Card[VOID]) -> t; self.Attach(t)
[3] opt quick eff [OPT]: self.Detach(3), Target(Card[FIELD]) -> t; Banish(t, face=DOWN) </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="3"> <a href="https://yugipedia.com/wiki/Endymion,_the_Mighty_Master_of_Magic">Endymion, the Mighty Master of Magic<sup>↗</sup></a> </td>
    <td> You can remove 6 Spell Counters from your field; Special Summon this card from the Pendulum Zone, then count the number of cards you control that can have a Spell Counter, destroy up to that many cards on the field, and if you do, place Spell Counters on this card equal to the number of cards destroyed. You can only use this effect of "Endymion, the Mighty Master of Magic" once per turn. </td>
  </tr>
  <tr>
    <td> Once per turn, when a Spell/Trap Card or effect is activated (Quick Effect): You can return 1 card you control with a Spell Counter to the hand, and if you do, negate the activation, and if you do that, destroy it. Then, you can place the same number of Spell Counters on this card that the returned card had. While this card has a Spell Counter, your opponent cannot target it with card effects, also it cannot be destroyed by your opponent's card effects. When this card with a Spell Counter is destroyed by battle: You can add 1 Normal Spell from your Deck to your hand. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[1] opt ignit? eff [HOPT]: Remove(YOU.FIELD, 6 * Counter[Spell]);
  self.Summon(Special), Cards[FIELD, counters[Spell] > 0] -> n,
  {Destroy(FIELD, 0~n * Card[]) -> d} to Change(self.Counters[Spell], +d) </code> </pre>
      <pre lang="coffee"><code>[1] cont eff while self.counters[Spell] > 0: OPP.(Target/Destroy)!(self) with Effects[]
[2] opt quick eff [OPT] on Activate(Card/Effect[Spell/Trap] -> e:
  Return(HAND, Card[control=YOU, {counters[Spell] -> c} > 0])
  to Negate(e.activation) to Destroy(e.card), Change?(self.counters[Spell], +c)
[3] opt trig eff on Destroy(self) with Battle() while self.counters[Spell] > 0:
  Add(DECK, HAND, Spell[Normal]) </code></pre>
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
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Primeval_Planet_Perlereino">Primeval Planet Perlereino<sup>↗</sup></a> </td>
    <td> When this card is activated: You can add 1 "Tearlaments" monster or 1 "Visas Starfrost" from your Deck to your hand. Fusion Monsters and "Tearlaments" monsters you control gain 500 ATK. If a "Tearlaments" monster(s) you control or in your GY is shuffled into the Deck or Extra Deck (except during the Damage Step): You can target 1 card on the field; destroy it. You can only use this effect of "Primeval Planet Perlereino" once per turn. You can only activate 1 "Primeval Planet Perlereino" per turn. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>act eff [OPT]: HAND.Add(DECK, Monster['Tearlaments']/'Visas Starfrost')
[1] req cont eff: Alt(ATK, Monsters['Tearlaments']/Monsters[Fusion])[control=YOU], +500)
[2] trig? eff [HOPT, Step[Damage]=FALSE]
  on Shuffle(YOU.(FIELD/GY), YOU.(DECK/EXTRA) Monster['Tearlaments']):
  Target(Card[FIELD]) -> t; Destroy(t) </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Branded_Retribution">Branded Retribution<sup>↗</sup></a> </td>
    <td> When a Spell/Trap Card, or monster effect, is activated that includes an effect that Special Summons a monster(s): Return to the Extra Deck, 1 face-up Fusion Monster you control, or 2 Fusion Monsters in your GY, that mention "Fallen of Albaz" as material, and if you do, negate the activation, and if you do that, destroy that card. You can banish this card from your GY, then target 1 "Branded" Spell/Trap in your GY, except "Branded Retribution"; add it to your hand. You can only use 1 "Branded Retribution" effect per turn, and only once that turn. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>act [HOPT] on Activate(Card[Spell/Trap] / Effect[Monster]) -> e would Summon(Special, Monster[]):
  Monster[Fusion, materials has 'Fallen of Albaz'] -> t,
  Return(t[YOU.FIELD] / 2 * t[YOU.GY]) to Negate(e.activation) to Destroy(e.card)
[1] opt quick? eff [HOPT]: self.Banish(GY), Target(GY, Spell/Trap['Branded']) -> t ; Add(GY, HAND, t)
[C] cond YOU.Use?(self.Effect[], count=1, each=turn) </code></pre>
    </td>
  </tr>
</table>


<br>


## Documentation

> [!Note]
> If it isn’t abundantly clear already, this is entirely esoteric and *not* intended for actual use. For now.
>
> Regardless, here I’ll try to document all the defined keywords and all!

### Types

```coffee
Boolean = [TRUE/FALSE]
Int
List
None = NONE
String
```

### Slots

```coffee
Player = [YOU/OPP]
Location = [HAND/FIELD/DECK/EXTRA/GY/VOID]
Zone = [MONSTER/ST/FIELD/EXTRA]

Attribute = [FIRE/WATER/EARTH/WIND/LIGHT/DARK/DIVINE]
Type = [Aqua/ ... /Zombie]
Ability = [Spirit/Toon/Tuner/Union]

Direction = [T/L/D/R/TL/TR/DL/DR]
```

### Objects

```coffee
Card {
  type [Monster/Spell/Trap]
  name: String
  archetype: String = NONE
}

Monster[Card] {
  ATK: Int/None = 0
  DEF: Int/None = 0
  effect: Boolean = auto
  pendulum: Boolean = FALSE
  kind: [MAIN/EXTRA] = NONE
  class: [Fusion/Synchro/Xyz/Link]
  attr: Attribute
  type: Type
  ability: Ability/s = NONE
  level: Int [0~13]
  rank: Int [0~13] = NONE
  link: Int [1~8] = NONE
  arrows: Direction / List[Direction] = NONE
}

Spell[Card] {
  property: [Normal/Quick/Field/Cont/Equip/Ritual]
}

Trap[Card] {
  property: [Normal/Cont/Counter]
}

Effect {
  type: [NONE / Quick/? / Trigger/? / Ignit? / Cont]
  cool: [OPT/HOPT/ ...]
}

Counter {
  type: [Spell/ ...]
}
```

### Actions

```coffee
.Add(
  source: Location [DECK/GY/VOID]
  dest: Location [HAND/EXTRA]
  .target: Card/s
) -> Card/s

.Apply(
  effect: Effect/Condition
  .target: Card/s
)

.Attach(
  .target: Monster[Xyz]
  cards: Card
)

.Attack(
  .source: Monster = SELF
  target: Monster / Player
)

.Banish(
  source: Location [HAND/FIELD/DECK/EXTRA/GY] = auto
  .target: Card/s
  face: [UP/DOWN] = UP
)

.Battle(
  .attack: Monster
  target: Monster
)

.Change(
  property: Property [LEVEL/TYPE/ATTR/ATK/DEF]
  .target: Card/s
  value = ?
)

Choose(
  options: Options
) -> Option/s

.Destroy(
  source: Location [HAND/FIELD/DECK/EXTRA]] = auto
  .target: Card/s
) -> Card/s

.Detach(
  .target: Monster[Xyz]
  material: Int / Card/s = 1 * Card[]
) -> Card/s

Discard(
  cards: Int / Card/s = 1 * Card[]
) -> Card/s

Draw(
  count: Int = 1
)

Excavate(
  count: Int = 1
) -> Card/s

Inflict(
  damage: Int
)

.Return(
  source: Location [FIELD/GY/VOID]
  dest: Location [HAND/EXTRA/GY]
  .target: Card/s
) -> Card/s

.Reveal(
  source: Location [HAND/DECK/EXTRA]
  .target: Card/s
) -> Card/s

.Send(
  source: Location [HAND/FIELD/DECK/EXTRA]
  dest: Location [GY] = YOU.GY
  .target: Card/s
) -> Card/s

.Shuffle(
  source: Location [HAND/FIELD/GY/VOID]
  dest: Location [DECK/EXTRA]
  .target: Card/s
)

.Summon(
  source: Location [HAND/FIELD/DECK/EXTRA/GY/VOID]
  .target: Monster/s
)

.Use(
  .target: Card/Player
  use: Effect / ...
)

.Target(
  .target: Card/s
) -> Card/s
```
