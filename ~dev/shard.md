# Shards
<!-- #SQUARK live!
| dest = dev/shards
| capt = A casing standard for permanent unique readable identifiers
| index = dev
| date = 2025 September
| update = 2025 December 13
-->

A ***shard*** is a permanent, unique, compact and human-readable string identifier for an entity.

For instance, consider a soundtrack with the name *+ERABY+E CONNEC+10N*, or an in-game item with the name *Decryption Key (Single Use)*. Referencing these entities in code with the exact displayed string is a headache and fragile, since their names are complex.

But readable text identifiers are still extremely useful. So shards facilitate this by compressing an object’s name into its raw essence, stripping away casing, punctuation, decoration, etc. and only leaving a few key words by which the entity can be identified.

For the examples above, their shards might look like `terabyte-connection` and `decryption-key--single-use`.


<br>


## Specification

Shards *must* fulfil the following requirements:

- They must unambiguously identify the entity.
  - No two entitites should share the same shard.
- They must contain only lowercase letters `a-z`, numbers `0-9`, and `-`.
  - Shards take the `kebab-case` casing.

Shards *should* ideally also satisfy the following properties:

- They should be permanent for the lifetime of the entity.
  - This means once a shard has been assigned, it should not be changed. *Ever*.[^change]
- They should be short.
  - This allows them to help improve efficiency, by storing a shorter reference to an object instead of the entire value of the object itself.
- They should be human readable.
  - Contractions and acronyms should be avoided where possible.
- They should be intuitive and predictable.
  - This means given an entity’s displayed name, it should be obvious what the corresponding shard would be, and vice versa.
- An entity should only have 1 shard.
  - If a rename occurs, this may be violated.

[^change]: Like Rust crates. Once they’re out there, anything or anyone could be using them, so you cannot retract it.


<br>


## Use Cases

I use shards all throughout my projects, usually when there is some sort of data persistence involved, *especially* on other users' devices.

For instance, on [*Integrity*](https://sup2point0.github.io/integrity), every question has its own highly compact shard that looks like `s25f-sy1`. Any user data relating to questions stores the shard as a permanent reference to the question. This data is persisted to `localStorage`.

While parts of the question content may change, the shard remains permanent by contract. So even if changes are made to the question, when those changes are rolled out, the user’s data remains intact.
