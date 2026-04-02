# TargetBlockTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<TargetBlockTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<TargetBlockTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<TargetBlockTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<TargetBlockTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_70212_, Entity p_70213_, Vec3 p_70214_, int p_70215_)
```

**Parameters:**

- `p_70212_` (`ServerPlayer`)
- `p_70213_` (`Entity`)
- `p_70214_` (`Vec3`)
- `p_70215_` (`int`)

**Returns:** `public void`

### targetHit

```java
public static Criterion<TargetBlockTrigger.TriggerInstance> targetHit(MinMaxBounds.Ints p_286700_, Optional<ContextAwarePredicate> p_298563_)
```

**Parameters:**

- `p_286700_` (`MinMaxBounds.Ints`)
- `p_298563_` (`Optional<ContextAwarePredicate>`)

**Returns:** `public static Criterion<TargetBlockTrigger.TriggerInstance>`

### matches

```java
public boolean matches(LootContext p_70242_, Vec3 p_70243_, int p_70244_)
```

**Parameters:**

- `p_70242_` (`LootContext`)
- `p_70243_` (`Vec3`)
- `p_70244_` (`int`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_312460_)
```

**Parameters:**

- `p_312460_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
