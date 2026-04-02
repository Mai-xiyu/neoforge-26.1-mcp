# EnterBlockTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<EnterBlockTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<EnterBlockTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<EnterBlockTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<EnterBlockTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_31270_, BlockState p_31271_)
```

**Parameters:**

- `p_31270_` (`ServerPlayer`)
- `p_31271_` (`BlockState`)

**Returns:** `public void`

### validate

```java
private static DataResult<EnterBlockTrigger.TriggerInstance> validate(EnterBlockTrigger.TriggerInstance p_311841_)
```

**Parameters:**

- `p_311841_` (`EnterBlockTrigger.TriggerInstance`)

**Returns:** `private static DataResult<EnterBlockTrigger.TriggerInstance>`

### entersBlock

```java
public static Criterion<EnterBlockTrigger.TriggerInstance> entersBlock(Block p_31298_)
```

**Parameters:**

- `p_31298_` (`Block`)

**Returns:** `public static Criterion<EnterBlockTrigger.TriggerInstance>`

### matches

```java
public boolean matches(BlockState p_31300_)
```

**Parameters:**

- `p_31300_` (`BlockState`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
