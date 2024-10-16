# Programming Style Cipher Text
<!-- #SQUARK live!
| dest = yugioh/psct
| desc = An esoteric reimagining of Yu-Gi-Oh card text for programmers
| style = dev
| index = yugioh
| shard = #INDEX / dev
| clean = braces / angles
-->

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
  [C] opt cond: self.Summon(Xyz) with Monsters[Link, link=2] as Monster[level=2]
[1] cont eff if self.materials has Monster[class=EXTRA]: Alt(self.ATK.orig, *2)
[2] opt ignit eff [HOPT]: Detach(Monster[Xyz, control=YOU], 1) to
  Summon(Special, DECK, Monster[level=2]) + Apply(turn=THIS) {
    Player[].Summon!(Special, Monster[level!=2]) } </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Exosisters_Magnifica">Exosisters Magnifica<sup>↗</sup></a> </td>
    <td> 2 Rank 4 "Exosister" Xyz Monsters <br> Must be Xyz Summoned with the above materials. This card can make a second attack during each Battle Phase. Once per turn (Quick Effect): You can detach 1 material from this card; banish 1 card your opponent controls. When your opponent activates a card or effect (Quick Effect): You can return 1 Xyz Monster you own attached to this card to your Extra Deck, then you can Special Summon that monster from your Extra Deck, by using this card you control as material. (This is treated as an Xyz Summon. Transfer this card's materials to the Summoned monster.) </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[S] req 2 * Monster['Exosister', Xyz, rank=4]
[1] cont eff: Attack?(count=+1, each=Phase.Battle)
[2] opt quick eff [OPT]: self.Detach(1); Banish(Card[control=OPP])
[3] opt quick eff on OPP.Activate(Card/Effect[]): 
  Return(self.materials, EXTRA, Monster[Xyz, own=YOU] -> t),
  t.Summon?(Xyz, transfer=TRUE) with self </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Drytron_Meteonis_Draconids">Drytron Meteonis Draconids<sup>↗</sup></a> </td>
    <td> You can Ritual Summon this card with "Meteonis Drytron". Your opponent cannot target this card with monster effects. If the total Levels of monsters used for its Ritual Summon are 2 or less, this card can attack all Special Summoned monsters your opponent controls once each. During your opponent's turn (Quick Effect): You can banish monsters from your GY whose combined ATK equals exactly 2000 or 4000, then target 1 face-up card your opponent controls for every 2000 ATK of the total; send that card(s) to the GY. You can only use this effect of "Drytron Meteonis Draconids" once per turn. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[S] 'Meteonis Drytron'
[1] cont eff: OPP.Target!(self) with Effects[Monster]
[2] opt cont eff if Total(self.Summon[Ritual].Monsters[].levels) =< 2:
  self.Attack?(all Monsters[SS=TRUE, control=OPP])
[3] opt quick eff [HOPT, turn=OPP]:
  Banish(YOU.GY, Monsters[ATK > 0]) -> fuel, where Total(fuel, ATK) -> c = 2000/4000,
  Target(2000 \ t * Card[control=OPP, face=UP]) -> t; Send(GY, t) </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Dogmatika_Alba_Zoa">Dogmatika Alba Zoa<sup>↗</sup></a> </td>
    <td> Cannot be Ritual Summoned, except by "Dogmatikalamity" or another "Dogmatika" card effect. "Dogmatika" monsters you control are unaffected by the activated effects of your opponent's Fusion, Synchro, Xyz, and Link Monsters. During your Main Phase: You can make your opponent choose and apply 1 of these effects ('you' in these effects means that opponent). <br> ● For every 2 cards in your Extra Deck, send 1 card from your hand or Extra Deck to the GY. <br> ● Return all Fusion, Synchro, Xyz, and Link Monsters you control to the Extra Deck. <br> You can only use this effect of "Dogmatika Alba Zoa" once per turn. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[S] req Card["Dogmatika"]
[1] cont eff: Unaffected(Monsters['Dogmatika', control=YOU]) by {
  Effects[OPP, activated, Monsters[class=EXTRA]] }
[2] opt ignit eff [HOPT]: OPP.Apply(Effect[]) from {
  [2.1] Total(Cards[] in OPP.EXTRA) \ 2 -> c, OPP.Send(HAND/EXTRA, GY, c * Card[])
  [2.2] OPP.Return(EXTRA, Monsters[class=EXTRA], control=OPP])
} </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Kashtira_Arise-Heart">Kashtira Arise-Heart<sup>↗</sup></a> </td>
    <td> 3 Level 7 monsters <br> Once per turn, you can also Xyz Summon "Kashtira Arise-Heart" by using 1 "Kashtira" monster you control, if an effect of "Kashtira Shangri-Ira" was successfully activated this turn. (Transfer its materials to this card.) Any card sent to the GY is banished instead. Once per Chain, each time a card(s) is banished: Attach 1 banished card to this card as material. Once per turn (Quick Effect): You can detach 3 materials from this card, then target 1 card on the field; banish it face-down. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[S] 3 * Monster[level=7]
  opt cond [HOPT]: if 'Kashtira Shangri-Ira'.Activated(Effect[], success=TRUE, turn=THIS):
  self.Summon(Xyz, transfer=TRUE) with Monster('Kashtira', control=YOU)
[1] req cont eff: if would Send(GY, Card[] -> card), Banish(card)
[2] req trig eff [OPC] on Banish(Card[]): Target(Card[VOID]) -> t; self.Attach(t)
[3] opt quick eff [OPT]: self.Detach(3), Target(Card[FIELD]) -> t; Banish(t, face=DOWN) </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="3"> <a href="https://yugipedia.com/wiki/Nirvana_High_Paladin">Nirvana High Paladin<sup>↗</sup></a> </td>
    <td> If a Pendulum Monster you control attacks, for that battle, it cannot be destroyed by battle, also you take no battle damage. At the end of the Damage Step, if a Pendulum Monster you control attacked: All monsters your opponent currently controls lose ATK equal to that attacking monster's ATK, until the end of this turn. </td>
  </tr>
  <tr>
    <td> 1 Tuner + 1+ non-Tuner Synchro Monsters <br> For this card's Synchro Summon, you can treat 1 Pendulum Summoned Pendulum Monster you control as a Tuner. If this card is Synchro Summoned using a Pendulum Summoned Pendulum Monster Tuner: You can target 1 card in your GY; add it to your hand. When this card destroys an opponent's monster by battle: You can halve your opponent's LP. If this card in the Monster Zone is destroyed by battle or card effect: You can place this card in your Pendulum Zone. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[P1] req cont eff: if (Monster[Pend, control=YOU] -> t).Attack() -> b,
  t.Destroy!(Battle), Alt(b.damage, 0)
[P2] req trig eff [Step[Damage].end]: if (Monster[Pend, control=YOU] -> t).Attack(),
  Monsters[control=OPP].Alt(ATK, -t.ATK) until TURN.end </code> </pre>
      <pre lang="coffee"><code>[S] Monster[Tuner], 1~ * Monster[Synchro, Tuner=FALSE]
[C] opt cond self.Summon(Synchro) with {
  Monster[Pend, summon=Pend, control=YOU] as Monster[Tuner] }
[1] opt trig eff on self.Summon(Synchro) with Monster[Tuner, summon=Pend]:
  Target(Card[YOU.GY]) -> t; t.Add(HAND)
[2] opt trig eff on self.Destroy(Monster[control=OPP], Battle): Alt(OPP.LP, -OPP.LP\2)
[3] opt trig eff on self.Destroy(Battle/Effect): self.Place(YOU.Zone[Pend]) </code></pre>
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
  <tr>
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Inspector_Boarder">Inspector Boarder<sup>↗</sup></a> </td>
    <td> Cannot be Normal or Special Summoned if you control a monster. Neither player can activate monster effects unless the number of monster effects that player has previously activated that turn is less than the number of monster card types currently on the field (Ritual, Fusion, Synchro, Xyz, Pendulum, and Link). (If an effect's activation was negated, it still counts toward the total for that turn. Only count effects that were activated while this monster was face-up on the field.) </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[C] cond: if YOU.Control(Monster[]) then self.Summon!(Normal / Special)
[D] var Players[].count = 0
[1] req act! eff on (Player[] -> p).Activate(Effect[Monster]): Alt(p.count, +1)
[2] req cont eff: Count(Monsters[FIELD].classes[R/F/S/X/P/L], UNIQUE) -> c,
  if (Player[count>=c] -> p) then p.Activate!(Effect[Monster])
[3] req act! eff on Turn[].end: Players[].count = 0 </code></pre>
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
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Rank-Up-Magic_Revolution_Force">Rank-Up-Magic Revolution Force<sup>↗</sup></a> </td>
    <td> ● During your turn: Target 1 "Raidraptor" Xyz Monster you control; Special Summon from your Extra Deck, 1 "Raidraptor" monster that is 1 Rank higher than that target, by using that target as the Xyz Material. <br> ● During your opponent's turn: Target 1 Xyz Monster your opponent controls with no Xyz Materials; take control of that Xyz Monster, then Special Summon from your Extra Deck, 1 "Raidraptor" monster that is 1 Rank higher than that monster, by using it as the Xyz Material. <br> (These Special Summons are treated as Xyz Summons. Attached Xyz Materials also become Xyz Materials on the Summoned monster.) </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[1] act eff Choose() {
  [1.1] [turn=YOU]: Target(Monster[Xyz, 'Raidraptor', control=YOU]) -> t;
    Summon(Xyz, Extra, Monster[Xyz, 'Raidraptor', rank=t.rank+1], transfer=TRUE) with t
  [1.2] [turn=OPP]: Target(Monster[Xyz, control=OPP, materials=0]) -> t; t.Alt(control=YOU),
    Summon(Xyz, Extra, Monster[Xyz, 'Raidraptor', rank=t.rank+1], transfer=TRUE) with t
} </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="2"> <a href="https://yugipedia.com/Small_World">Small World<sup>↗</sup></a> </td>
    <td> Reveal 1 monster in your hand, choose 1 monster from your Deck that has exactly 1 of the same Type, Attribute, Level, ATK or DEF, and banish the revealed monster from your hand face-down. Then add, from the Deck to your hand, 1 monster that has exactly 1 of the same Type, Attribute, Level, ATK or DEF as the monster chosen from your Deck, and banish the card chosen from the Deck face-down. You can only activate 1 "Small World" per turn. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[D] func Data(Monster[] -> c) gives List[c.level, c.type, c.attr, c.ATK, c.DEF]
[D] func Connected(2 * Monster[] -> c1, c2) {
  List[Bool[Data(c1)[i] = Data(c2)[i]] for i = 1~5] -> d,
  Bool[Count(d, TRUE) = 1] -> OUT
}
[1] act eff [HOPT[Activate]]: Reveal(HAND, Monster[] -> t1), Reveal(DECK, Monster[] -> t2)
  where Connected(t1, t2), Banish(t1, face=DOWN), Add(DECK, HAND, Monster[] -> t3)
  where Connected(t3, t2), Banish(t2, face=DOWN) </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Branded_Retribution">Branded Retribution<sup>↗</sup></a> </td>
    <td> When a Spell/Trap Card, or monster effect, is activated that includes an effect that Special Summons a monster(s): Return to the Extra Deck, 1 face-up Fusion Monster you control, or 2 Fusion Monsters in your GY, that mention "Fallen of Albaz" as material, and if you do, negate the activation, and if you do that, destroy that card. You can banish this card from your GY, then target 1 "Branded" Spell/Trap in your GY, except "Branded Retribution"; add it to your hand. You can only use 1 "Branded Retribution" effect per turn, and only once that turn. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>act [HOPT[Activate]] on Activate(Card[Spell/Trap] / Effect[Monster]) -> e
  where e would Summon(Special, Monster[]):
  Monster[Fusion, materials has 'Fallen of Albaz'] -> t,
  Return(t[YOU.FIELD] / 2 * t[YOU.GY]) to Negate(e.activation) to Destroy(e.card)
[1] opt quick? eff [HOPT]: self.Banish(GY),
  Target(GY, Spell/Trap['Branded']) -> t; Add(GY, HAND, t)
[C] cond YOU.Use?(self.Effect[], count=1, each=turn) </code></pre>
    </td>
  </tr>
  <tr>
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Last_Turn">Last Turn<sup>↗</sup></a> </td>
    <td> This card can only be activated during your opponent's turn when your Life Points are 1000 or less. Select 1 monster on your side of the field and send all other cards on the field and in their respective owners' hands to their respective Graveyards. After that, your opponent selects and Special Summons 1 monster from their Deck in face-up Attack Position and attacks your selected monster. (Any Battle Damage from this battle is treated as 0.) The player whose monster remains alone on the field at the End Phase of this turn wins the Duel. Any other case results in a DRAW. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[1] act eff [turn = OPP] while YOU.LP =< 1000: {
  Choose(Monster[], Monsters[control = YOU]) -> t
  and Send(Players[].(HAND & FIELD), GY, Cards[Card != t])
}  
  [1.1] req act! eff on Resolve([1].Chain): OPP.Summon(Special, DECK, Monster[], pos=ATK) -> k,
    k.Attack(t) -> b, Alt(b.damage = 0)
  [1.2] req act! eff [phase=END, turn=THIS]: {
    if (t.control = YOU and k.control = NONE) then DUEL.win = YOU
    else if t.control = NONE and k.control = OPP) then DUEL.win = OPP
    else DUEL.win = NONE
  } </code></pre>
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
Num
String
```

### Constants

```coffee
Player = [YOU/OPP]
Location = [HAND/FIELD/DECK/EXTRA/GY/VOID]
Zone = [MONSTER/ST/FIELD/EXTRA]

Attribute = [FIRE/WATER/EARTH/WIND/LIGHT/DARK/DIVINE]
Type = [Aqua/.../Zombie]
Ability = [Gemini/Spirit/Toon/Tuner/Union]

Position = [ATK/DEF]
Face = [UP/DOWN]
Direction = [T/L/D/R/TL/TR/DL/DR]
```

### Objects

```coffee
Player {
  LP: Num
}

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
  pos: Position = ATK
  face: Face = UP
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

.Alt(
  property: Property [LEVEL/TYPE/ATTR/ATK/DEF]
  .target: Card/s
  value = ?
)

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
  target: Monster/Player
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

Choose(
  {options}: Options
) -> Option/s

.Destroy(
  source: Location [HAND/FIELD/DECK/EXTRA] = auto
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

player.Gain(
  points: Int
)

Card.Gain(
  effect: Effect/s
)

Inflict(
  damage: Int
)

.Leave(
  .target: Card/s
  loc: Location
) -> Card/s

.Negate(
  .target: Event
  kind: [effect/activation]
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

### Functions

```coffee
.Count(
  .list: List
  target: Item/s / 
)
```
