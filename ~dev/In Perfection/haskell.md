# In Perfection – Haskell
<!-- #SQUARK live!
| date = 2025 December 19
| update = 2026 July 17
-->

Learning functional programming was one of the most transformative experiences I’ve ever had. I can’t even quite put my finger on what specifically was so magical. Recursion, pattern matching, sum types, currying, monads – it was just such a package. Everything clicked together in a way it hadn’t before. It satisfied my itch for deep, principled, abstract theory.


## What I Love

### Concision
Haskell is the most concise language I’ve ever seen. (Sometimes to a fault!) As a result, it’s incredibly elegant, and feels amazing to write.

Some of my favourite examples of concision include:

```hs
sum = foldr (+) 0
```

### Partial Function Application
Of course, what aids that concision is currying. It’s really the glue that holds this all together.

It’s a really neat way of thinking about functions. Very fun, too, tho expectedly a little trippy at times.

### Function Pattern Matching
```hs
```

Ugh, it’s just so clear.

It feels akin to function overloading in other languages, except in, say C#, you’d have those function definitions all spaced and separate. Haskell’s convention of extreme concision places them as tight together as you can. It feels like laying out a specification or declaration, rather than fussing over implementation details. Very gratifying.

### Sum Types / Parameterised Enums
This is one of those things that I didn’t think too much when I learnt about, but slowly realised was extremely powerful. And then I started wondering how I ever lived in other languages without it. (Inheritance, I guess.)

Thinking about it, there are actually a lot of cases where inheritance does a fine job anyway. But where it does less so are **Nulls** and **Errors**. Being able to differentiate against `None` and `Just None` is something you don’t think about much, but are really glad for when you need it.

### Rank-N Polymorphism
This is a natural result of wanting to generalise signatures in Haskell. In TypeScript you’d probably just type it `any` and call it a day, but Haskell has this immense expressive power.

I first ran into this when I was writing a test function that would take a sorting algorithm `[a] -> [a]` and run it over many different input lists. These could be `[Int]`, `[String]`, anything. What would the signature of the test function be? I tried:

```
test :: ([a] -> [a]) -> Bool`
×

“Give me a sorting algorithm, I’ll tell you if it works.” The issue is, this is really:

```hs
test :: forall a. ([a] -> [a]) -> Bool`
```

That `a` belongs to `test`, not the *sorting algorithm*. So I’m running a monomorphised `test @Int`, meaning I can only sort `[Int]`s, not multiple list types as desired!

The solution was amazingly simple: move the `forall` *into* the accepted callback, to give `test :: (forall a. [a] -> [a]) -> Bool`. The algorithm is generic, `test` is not. Done and dusted! But you *can’t* do that in most other languages. Say TypeScript; what you want is something like this:

```ts
function test(
  algorithm: <T>(items: T[]) => T[]
): bool;
```

But that `<T>()` isn’t valid syntax. It’s what you need, but you can’t express this in TypeScript.

### Type Signatures
Saving the best for last, I think one of the greatest contributions Haskell provides to one as a programmer is the way it changes your relationship with types.

It’s remarkable – truly remarkable – how comfortable I’ve become relying purely on the type of a function to deduce its meaning. When browsing stdlib, or writing my own functions, I’ve reached for documentation less and less.

The reason behind this (I would highly recommend reading around about this, it’s a well-known phenomenon) is that when a function signature is sufficiently generic, it becomes so restricted[^restricted] that *there can only be 1 (nontrivial) implementation*. If you have `a -> a`, you know nothing about an object `a`, so you can’t do anything with it; this function *can only* be `id`. With `[a] -> Int`, the only meaningful thing you can do with it is to find its length.[^length]

[^restricted]: This is a little counter-intuitive, since in a sense generic functions are also more *unrestricted* in that they can accept a much larger set of types.
[^length]: You could also return `0`, or `length - 1`, or `1679`. But realistically, you know it wouldn’t be any of these, hence the “1 *nontrivial* implementation” part. Either way, the point is you can very accurately guess the implementation most of the time (plus additional context from the function name), which is a phenomenal time-saver.

The power of types is incredible. They can convey so much meaning, capture intent, constraints and context (and with sum types, these is even more potent), in a far more efficient manner than documentation or even identifier names.

I mentioned Haskell came as a package. This is a really important part – each of these features is great in isolation, certainly, but it’s really the way Haskell puts them together that makes it truly special. It’s the ease with which you can introduce arbitrary type parameters to functions, making `a -> b -> b` the norm; the concision and density, resulting in short type names that make the signature easily comprehendable; currying, which tends to a certain optimal signature structure.
