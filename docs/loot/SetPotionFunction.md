# SetPotionFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetPotionFunction>` |  |

## Methods

### SetPotionFunction

```java
private SetPotionFunction(List<LootItemCondition> p_299010_, Holder<Potion> p_298587_)
```

**Parameters:**

- `p_299010_` (`List<LootItemCondition>`)
- `p_298587_` (`Holder<Potion>`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<SetPotionFunction> getType()
```

**Returns:** `LootItemFunctionType<SetPotionFunction>`

### run

```java
public ItemStack run(ItemStack p_193073_, LootContext p_193074_)
```

**Parameters:**

- `p_193073_` (`ItemStack`)
- `p_193074_` (`LootContext`)

**Returns:** `ItemStack`

### setPotion

```java
public static LootItemConditionalFunction.Builder<?> setPotion(Holder<Potion> p_316540_)
```

**Parameters:**

- `p_316540_` (`Holder<Potion>`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`
