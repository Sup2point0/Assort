# In Perfection – Rust
<!-- #SQUARK live!
| dest = dev/in-perfection/rust
| index = dev / in-perfection
| date = 2025 December 20
| update = 2026 September 7
-->

I like to describe Rust as “the last language I learn”.

Which isn’t literally true, but I do sort of see it as the end to my programming journey. It’s the language that everything’s been building up to, combining high-level abstract purity with low-level memory access. I also consider it quite a perfect language – pure perfection doesn’t exist ofc, but Rust comes the closest!


<br>


## What I Love

### An Expression Language
The fact that everything is an expression is beautiful. The flexibility is incredible, and it’s really annoying to give up when going back to other languages.

I can’t think of an example right now, maybe I’ll add one when I do.

### Conditionally Implemented Traits
```rust
impl<T> SomeStruct<T> where T: SomeTraitBound
{}
```

So extremely powerful, and yet completely safe because of Rust’s powerful compiler.

Encoding *behaviour* in the type system is an unexpected superpower that I don’t use enough. Of course, if you want it to reflect state, you’ll need to encode state through type parameters which is usually more effort than it’s worth. But for heavily reused, polymorphic provider structs, it’s fantastic for keeping things safe.

### Const Generics
They’re great. The more invariants you can encode into the type system at compile time, the better.

```rust
struct Grid<const N: usize>
{
    data: [usize; { N * N }],
}
```

### Cargo
No-nonsense, got everything you need, pleasure to use.

I like TOML as a config format, it’s much more pleasant to read than JSON.

Also “crates” and “cargo” is very flavourful, I love it.

### rust-analyzer
The best LSP I’ve ever used. It just *works*. The best part is that it’s just an interface to the compiler, so all the error messages are familiar and consistent.

Rust syntax highlighting is also flawless, I can’t even find any faults.


<br>


## What I Love Less

### No Keyword Parameters
This is a damn shame. I personally view this as genuinely one of the most important features in any language.

One thing I’m a huge fan of is documentation through code, not through comments. That means conveying as much meaning as you can through naming, signatures and types.[^meaning-types] Keyword parameters are insanely helpful at this: they convey exactly *why* you’re passing these values into a function call. It saves you effort needing to hover and check a function’s parameters, documentation, or even worse, having to delve into its definition, which adds a layer to your context stack.

[^meaning-types]: Famously, Haskell doesn’t need parameter names in documentation because the type signature is almost always enough to deduce the ‘only possible’ (nontrivial) implementation of a function. So by looking at the type alone, you can figure out exactly what it does. Power!

### No Immutable Attributes
Ok, so in regular variable declarations, function parameters, passing arguments and borrowing, you’re telling me `mut` must be explicit, but for struct attributes they’re just always `mut`?

Ostensibly the counterargument is to make the attribute non-`pub` and instead expose a getter method. But I’m talking about even an *already* non-`pub` attribute! I’m not trying to protect against the users of my struct you see, I’m trying to protect against the **developers** of my struct :0

Being able to mark a field non-`mut` lets the compiler enforce that no one, not even internally, can mutate an attribute that shouldn’t be changed after initialisation. I love this in C# with `readonly` or `{ get; init; }`.

This doesn’t come up too much so it’s not a dealbreaker at all, just a little inconsistency that I think is a shame.

### Traits are only behavioural, not structural
I seriously need this ALL the time, and maybe it’s just cuz I’m going down a non-idiomatic route, but it seems like a pretty common thing. I want to write a method that accepts any object with an `id: u32` attribute. I don’t care about any other details of the object, and I won’t use them. I don’t see a difference between this and a trait with `fn id(&self) -> u32`.[^see-diff]

[^see-diff]: Please correct me if I’m wrong!

My current explanation is that type-checking with structural traits is too difficult to justify implementing.

This does result in me using traits perhaps less than I should, because often the implementations will want refer to fields (because ofc they would), but can’t because the trait doesn’t define any fields.

### Turbofish Syntax
`::<>()` really does get a bit long, ngl. I know it’s iconic, and it solves a very real problem. But ouch. It’s pretty messy.

### `*` to Dereference
A very minor thing. But overloading `*` to be both multiplication and a pointer dereference – 2 extremely common operations – can be frustrating. Nothing like reading `*count * *target`. Syntax highlighting helps immensely, ofc. And I understand why it is, it’s just historical baggage from C. Just feels a little unfortunate.

What alternative would I propose tho? Hmm, good question... it’s tough. `*ident` is very lightweight. `@ident` would probably be too prominent. `#ident` is rather mushed together. `$ident` looks like jQuery. `%ident` looks like string interpolation. AHHHH.

I think I’d be ok with `^ident`, tbh. And the `^` caret is an arrow, kinda like you’re following what the pointer points to.

Looks a bit weird, but like all things we’d probably get used to it very quickly.

```rust
func(^expected, ^count * ^actual);
```
