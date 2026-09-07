# In Perfection – Rust

I like to describe Rust as “the last language I learn”.

Which isn’t literally true, but I do sort of see it as the end to my programming journey. It’s the language that everything’s been building up to, and the language that teaches me the final major thing I had left: low-level programming. I also consider it quite a perfect language – pure perfection doesn’t exist, but Rust is the closest!


## What I Love

### An Expression Language
The fact that everything is an expression is just beautiful. The flexibility is incredible, and it’s really annoying to give up when going back to other languages.

### Conditionally Implemented Traits
```rust
impl<T> SomeStruct<T> where T: SomeTraitBound
{}
```

So extremely powerful, and yet completely safe because of Rust’s powerful compiler. 

### Const Generics
They’re great. The more invariants you can encode into the type system, the better.

### cargo
No-nonsense, got everything you need, pleasure to use.

### rust-analyzer
The best LSP I’ve ever used. It just *works*. The best part is that it’s just an interface to the compiler, so all the error messages are familiar and consistent.


## What I Love Less

### No Keyword Parameters
This is a damn shame. I personally view this as genuinely one of the most important features in any language.

One thing I’m a huge fan of is documentation through code, not through comments. That means conveying as much meaning as you can through naming, signatures and types.[^meaning-types] Keyword parameters are insanely helpful at this: they convey exactly why you’re passing these values into a function call. It saves you  effort needing to hover and check a function’s parameters – or even worse, having to delve into its definition.

[^meaning-types]: Famously, Haskell doesn’t need parameter names in documentation because the type signature is almost always enough to deduce the ‘only possible’ (nontrivial) implementation of a function. So by looking at the type alone, you can figure out exactly what it does.

### Immutable Attributes
Ok, so in regular variable declarations, function parameters, passing arguments and borrowing, you’re telling me `mut` must be explicit, but for struct attributes they’re just always `mut`?

Ostensibly the counterargument is to make the attribute non-`pub` and instead expose a getter method. But I’m talking about even an *already* non-`pub` attribute! I’m not trying to protect against the users of my struct you see, I’m trying to protect against the **developers** of my struct.

Being able to mark a field non-`mut` lets the compiler enforce that no one, not even internally, can mutate an attribute that shouldn’t be changed after initialisation. I love this in C#.

This doesn’t come up too much so it’s not a dealbreaker at all, just a little inconsistency that I think is a shame.

### Traits cannot specify attributes/fields
I seriously need this ALL the time, and maybe it’s just cuz I’m going down a non-idiomatic route, but it seems like a pretty common thing. I want to write a method that accepts any object with an `id: u32` attribute. I don’t care about any other details of the object, and I won’t use them. I don’t see a difference between this and a trait with `fn id(&self) -> u32`.[^see-diff]

[^see-diff]: Please correct me if I’m wrong!

### Enum Members as Types

### Turbofish Syntax
`::<>()` really does get a bit long, ngl. I know it’s iconic, and it solves a very real problem. But ouch. It’s pretty messy.
