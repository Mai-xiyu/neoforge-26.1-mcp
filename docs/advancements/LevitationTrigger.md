# LevitationTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<LevitationTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<LevitationTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<LevitationTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<LevitationTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_49117_, Vec3 p_49118_, int p_49119_)
```

**Parameters:**

- `p_49117_` (`ServerPlayer`)
- `p_49118_` (`Vec3`)
- `p_49119_` (`int`)

**Returns:** `public void`

### levitated

```java
public static Criterion<LevitationTrigger.TriggerInstance> levitated(DistancePredicate p_49145_)
```

**Parameters:**

- `p_49145_` (`DistancePredicate`)

**Returns:** `public static Criterion<LevitationTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ServerPlayer p_49141_, Vec3 p_49142_, int p_49143_)
```

**Parameters:**

- `p_49141_` (`ServerPlayer`)
- `p_49142_` (`Vec3`)
- `p_49143_` (`int`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
