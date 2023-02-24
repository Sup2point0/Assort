# Programming Style Cipher Text

Ah, don’t we all love [PSCT](https://yugipedia.com/wiki/Problem-Solving_Card_Text) – ~~Problem-Solving Card Text~~ Programming Style Cipher Text, ofc.


<br>


## Overview

Take [Endymion, the Mighty Master of Magic](https://yugipedia.com/wiki/Endymion,_the_Mighty_Master_of_Magic) – the card in *Yu-Gi-Oh!* with the longest overall text.

```coffee
• inf eff while self.Counters.Spell > 0: self.Destroy(eff, opp) = False, self.Target(eff, opp) = False
• opt fast eff [OPT] on Activate(card/effect, S/T): Return(FD › HD, Card(Counters.Spell > 0)) - Negate(activation) - Destroy() » Place(Counters.Spell, self, ...)
• opt trig eff on Destroy(battle, self) if self.Counters.Spell > 0: Add(DK › HD, Spell(Normal))
```


<br>


## Documentation
