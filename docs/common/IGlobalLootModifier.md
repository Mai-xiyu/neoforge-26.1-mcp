# IGlobalLootModifier

**Package:** `net.neoforged.neoforge.common.loot`
**Type:** interface

## Description

Implementation that defines what a global loot modifier must implement in order to be functional.
`LootModifier` Supplies base functionality; most modders should only need to extend that.
Requires a `Codec` to be registered: `NeoForgeRegistries#GLOBAL_LOOT_MODIFIER_SERIALIZERS`, and returned in `#codec()`
Individual instances of modifiers must be registered via json, see neoforge:loot_modifiers/global_loot_modifiers

## Methods

### apply

```java
ObjectArrayList<ItemStack> apply(ObjectArrayList<ItemStack> generatedLoot, LootContext context)
```

**Parameters:**

- `generatedLoot` (`ObjectArrayList<ItemStack>`)
- `context` (`LootContext`)

**Returns:** `ObjectArrayList<ItemStack>`

### codec

```java
MapCodec<? extends IGlobalLootModifier> codec()
```

**Returns:** `MapCodec<? extends IGlobalLootModifier>`
