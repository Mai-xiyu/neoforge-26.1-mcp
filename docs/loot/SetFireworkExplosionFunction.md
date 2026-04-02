# SetFireworkExplosionFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetFireworkExplosionFunction>` |  |
| `DEFAULT_VALUE` | `FireworkExplosion` |  |

## Methods

### SetFireworkExplosionFunction

```java
public SetFireworkExplosionFunction(List<LootItemCondition> p_333763_, Optional<FireworkExplosion.Shape> p_333814_, Optional<IntList> p_333974_, Optional<IntList> p_333764_, Optional<Boolean> p_333876_, Optional<Boolean> p_334022_)
```

**Parameters:**

- `p_333763_` (`List<LootItemCondition>`)
- `p_333814_` (`Optional<FireworkExplosion.Shape>`)
- `p_333974_` (`Optional<IntList>`)
- `p_333764_` (`Optional<IntList>`)
- `p_333876_` (`Optional<Boolean>`)
- `p_334022_` (`Optional<Boolean>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### run

```java
protected ItemStack run(ItemStack p_334066_, LootContext p_333987_)
```

**Parameters:**

- `p_334066_` (`ItemStack`)
- `p_333987_` (`LootContext`)

**Returns:** `ItemStack`

### apply

```java
private FireworkExplosion apply(FireworkExplosion p_333781_)
```

**Parameters:**

- `p_333781_` (`FireworkExplosion`)

**Returns:** `private FireworkExplosion`

### getType

```java
public LootItemFunctionType<SetFireworkExplosionFunction> getType()
```

**Returns:** `LootItemFunctionType<SetFireworkExplosionFunction>`
