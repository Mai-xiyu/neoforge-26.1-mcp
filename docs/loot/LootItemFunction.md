# LootItemFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** interface
**Extends:** `LootContextUser, BiFunction<ItemStack, LootContext, ItemStack>`

## Methods

### getType

```java
LootItemFunctionType<? extends LootItemFunction> getType()
```

**Returns:** `LootItemFunctionType<? extends LootItemFunction>`

### decorate

```java
static Consumer<ItemStack> decorate(BiFunction<ItemStack, LootContext, ItemStack> p_80725_, Consumer<ItemStack> p_80726_, LootContext p_80727_)
```

**Parameters:**

- `p_80725_` (`BiFunction<ItemStack, LootContext, ItemStack>`)
- `p_80726_` (`Consumer<ItemStack>`)
- `p_80727_` (`LootContext`)

**Returns:** `static Consumer<ItemStack>`

### build

```java
LootItemFunction build()
```

**Returns:** `LootItemFunction`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | interface |  |
