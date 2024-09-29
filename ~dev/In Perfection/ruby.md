# In Perfection – Ruby
<!-- #SQUARK live!
| dest = dev/in-perfection/ruby
| title = Ruby
| desc = Everything I love and dislove about the Ruby programming language
| style = dev
| duality = dark
| series = In Perfection
| index = lists / dev
| shard = #INDEX / opinion
-->


<br>


## What I Love

### The name!!
Ruby is such a cute name, and what drew me to the language in the first place (no seriously).

Calling packages ‘gems’ is also peak programmer humour. Love it.

### `method!`
Using `method!` for in-place variants of `method` is genius. Absolute genius. It’s such an easy, consistent and elegant way of doing it, and makes me wish other languages had it.

### Blocks
They were weird at first, but they’ve kinda grown on me. It’s essentially an anonymous lambda function, but the fact that you can expand it is really helpful sometimes.

### Optional Parenthesis
These being optional was also weird, but I can certainly see the merits. It does make passing around callable objects a little more fiddly? Nevertheless, it’s definitely a distinctive part of Ruby’s character.

The blurred line between an instance variable and get/set methods is super cool to me.

```rb
class Look
  def initialize(sup:)
    @sup = sup
  end

  def sup
    @sup
  end

  def sup=(val)
    @sup = val
  end
end


yo = Look.new(sup: 2.0)
yo.sup #=> 2.0

yo.sup = "ayo" #=> 'ayo'
```

### String Interpolation
Super quick and easy. No adding symbols before the opening quote mark needed, which is really nice when you need to add interpolation to a string.

```rb
puts "Ruby is #{'awesome'.uppercase}"
```

### Structs
Lightweight classes.

### Path Handling
The way Ruby handles paths saves me so many headaches compared to everything else. `require_relative` is such a blessing, and `Pathname` works wonderfully.

### Rake
What an awesome tool. Love that it’s just a Ruby file in essence too.

```rb
ruby "sup-world.rb"
```


<br>


## What I Love Less

### `end`
I’m just not a fan of `end` in general. It clutters the code with way too much irrelevant boilerplate text, which is nowhere near as easy to ignore as curly beaces.

### Syntax
Ruby’s syntax just looks a bit funky in general. I mean, it gives it character for sure, but it’s also somewhat inconsistent at times. It doesn’t magically ‘slot’ together in the same coherent way that Python manages?

### Function Parameters
Function parameters take both positional and keyword arguments.

### Public Instance Variables
Having to explicitly declare these gets a bit long when you have a *lot* of properties.

```rb
class Uh
  attr_accessor :a, :really, :long, :collection, :of, :public, :instance, :variables
end
```

### Symbols & Strings
Converting between symbols and strings, and having to deal with `@` and `@@` in classes is fiddly.

To be honest, while I love declarings hashes like:

```rb
hash = {
  key: "val"
}
```

Strings are often much easier to work with than symbols.
