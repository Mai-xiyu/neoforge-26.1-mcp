# BeeNestDestroyedTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<BeeNestDestroyedTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<BeeNestDestroyedTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<BeeNestDestroyedTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<BeeNestDestroyedTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_146652_, BlockState p_146653_, ItemStack p_146654_, int p_146655_)
```

**Parameters:**

- `p_146652_` (`ServerPlayer`)
- `p_146653_` (`BlockState`)
- `p_146654_` (`ItemStack`)
- `p_146655_` (`int`)

**Returns:** `public void`

### destroyedBeeNest

```java
public static Criterion<BeeNestDestroyedTrigger.TriggerInstance> destroyedBeeNest(Block p_17513_, ItemPredicate.Builder p_17514_, MinMaxBounds.Ints p_17515_)
```

**Parameters:**

- `p_17513_` (`Block`)
- `p_17514_` (`ItemPredicate.Builder`)
- `p_17515_` (`MinMaxBounds.Ints`)

**Returns:** `public static Criterion<BeeNestDestroyedTrigger.TriggerInstance>`

### matches

```java
public boolean matches(BlockState p_146662_, ItemStack p_146663_, int p_146664_)
```

**Parameters:**

- `p_146662_` (`BlockState`)
- `p_146663_` (`ItemStack`)
- `p_146664_` (`int`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
