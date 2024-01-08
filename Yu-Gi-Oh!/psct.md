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
    <td rowspan="2"> <a href="https://yugipedia.com/wiki/Kashtira_Arise-Heart">Kashtira Arise-Heart</a> </td>
    <td> 3 Level 7 monsters <br> Once per turn, you can also Xyz Summon "Kashtira Arise-Heart" by using 1 "Kashtira" monster you control, if an effect of "Kashtira Shangri-Ira" was successfully activated this turn. (Transfer its materials to this card.) Any card sent to the GY is banished instead. Once per Chain, each time a card(s) is banished: Attach 1 banished card to this card as material. Once per turn (Quick Effect): You can detach 3 materials from this card, then target 1 card on the field; banish it face-down. </td>
  </tr>
  <tr>
    <td>
      <code coffee>
        3 * Monster[level = 3] <br> 
        ...
      </code>
    </td>
  </tr>
</table>

| card | PSCT | PSSSCCCT |
| :--- | :--- | :------- |
| [Kashtira Arise-Heart](https://yugipedia.com/wiki/Kashtira_Arise-Heart) | 


<br>


## Documentation
