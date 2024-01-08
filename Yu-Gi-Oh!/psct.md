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
    <th> card </th>
    <th> PSCT / <em>PSCT</em> </th>
  </tr>
  <tr>
    <td rowspan="2"> Kashtira Arise-Heart </td>
    <td> 3 Level 7 monsters <br> Once per turn, you can also Xyz Summon "Kashtira Arise-Heart" by using 1 "Kashtira" monster you control, if an effect of "Kashtira Shangri-Ira" was successfully activated this turn. (Transfer its materials to this card.) Any card sent to the GY is banished instead. Once per Chain, each time a card(s) is banished: Attach 1 banished card to this card as material. Once per turn (Quick Effect): You can detach 3 materials from this card, then target 1 card on the field; banish it face-down. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[SS] 3 * Monster[level=3]
  opt cond [HOPT]: if "Kashtira Shangri-Ira".Activated(Effect[], success=TRUE, turn=THIS):
  self.SS(XYZ, transfer=TRUE) with Monster("Kashtira", control=YOU)
[1] req inf eff: if would Send(Card[] as card, GY), Banish(card)
[2] req trig eff [OPC] on Card[].Banished(): Target(Card[BND]) as t; self.Attach(t)
[3] opt quick eff [OPT]: self.Detach(3), Target(Card[FLD]) as t; Banish(t, face=down) </code> </pre>
    </td>
  </tr>
  <tr>
    <td rowspan="2"> Drytron Meteonis Draconids </td>
    <td> You can Ritual Summon this card with "Meteonis Drytron". Your opponent cannot target this card with monster effects. If the total Levels of monsters used for its Ritual Summon are 2 or less, this card can attack all Special Summoned monsters your opponent controls once each. During your opponent's turn (Quick Effect): You can banish monsters from your GY whose combined ATK equals exactly 2000 or 4000, then target 1 face-up card your opponent controls for every 2000 ATK of the total; send that card(s) to the GY. You can only use this effect of "Drytron Meteonis Draconids" once per turn. </td>
  </tr>
  <tr>
    <td>
      <pre lang="coffee"><code>[SS] "Meteonis Drytron"
[1] req inf eff: opp.Target[self, Effect[Monster]]=FALSE
[2] opt inf eff: ...
[3] opt quick eff [HOPT, turn=OPP]: ... </code> </pre>
    </td>
  </tr>
</table>


<br>


## Documentation
