# SetStewEffectFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetStewEffectFunction>` |  |
| `CODEC` | `Codec<SetStewEffectFunction.EffectEntry>` |  |

## Methods

### SetStewEffectFunction

```java
 SetStewEffectFunction(List<LootItemCondition> p_298938_, List<SetStewEffectFunction.EffectEntry> p_298439_)
```

**Parameters:**

- `p_298938_` (`List<LootItemCondition>`)
- `p_298439_` (`List<SetStewEffectFunction.EffectEntry>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<SetStewEffectFunction> getType()
```

**Returns:** `LootItemFunctionType<SetStewEffectFunction>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### run

```java
public ItemStack run(ItemStack p_81223_, LootContext p_81224_)
```

**Parameters:**

- `p_81223_` (`ItemStack`)
- `p_81224_` (`LootContext`)

**Returns:** `ItemStack`

### stewEffect

```java
public static SetStewEffectFunction.Builder stewEffect()
```

**Returns:** `public static SetStewEffectFunction.Builder`

### getThis

```java
protected SetStewEffectFunction.Builder getThis()
```

**Returns:** `protected SetStewEffectFunction.Builder`

### withEffect

```java
public SetStewEffectFunction.Builder withEffect(Holder<MobEffect> p_316210_, NumberProvider p_165474_)
```

**Parameters:**

- `p_316210_` (`Holder<MobEffect>`)
- `p_165474_` (`NumberProvider`)

**Returns:** `public SetStewEffectFunction.Builder`

### build

```java
public LootItemFunction build()
```

**Returns:** `LootItemFunction`

### EffectEntry

```java
static record EffectEntry(Holder<MobEffect> effect, NumberProvider duration)
```

**Parameters:**

- `effect` (`Holder<MobEffect>`)
- `duration` (`NumberProvider`)

**Returns:** `static record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
