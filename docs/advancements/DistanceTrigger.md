# DistanceTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<DistanceTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<DistanceTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<DistanceTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<DistanceTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_186166_, Vec3 p_186167_)
```

**Parameters:**

- `p_186166_` (`ServerPlayer`)
- `p_186167_` (`Vec3`)

**Returns:** `public void`

### fallFromHeight

```java
public static Criterion<DistanceTrigger.TriggerInstance> fallFromHeight(EntityPredicate.Builder p_186198_, DistancePredicate p_186199_, LocationPredicate.Builder p_299057_)
```

**Parameters:**

- `p_186198_` (`EntityPredicate.Builder`)
- `p_186199_` (`DistancePredicate`)
- `p_299057_` (`LocationPredicate.Builder`)

**Returns:** `public static Criterion<DistanceTrigger.TriggerInstance>`

### rideEntityInLava

```java
public static Criterion<DistanceTrigger.TriggerInstance> rideEntityInLava(EntityPredicate.Builder p_186195_, DistancePredicate p_186196_)
```

**Parameters:**

- `p_186195_` (`EntityPredicate.Builder`)
- `p_186196_` (`DistancePredicate`)

**Returns:** `public static Criterion<DistanceTrigger.TriggerInstance>`

### travelledThroughNether

```java
public static Criterion<DistanceTrigger.TriggerInstance> travelledThroughNether(DistancePredicate p_186193_)
```

**Parameters:**

- `p_186193_` (`DistancePredicate`)

**Returns:** `public static Criterion<DistanceTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ServerLevel p_186189_, Vec3 p_186190_, Vec3 p_186191_)
```

**Parameters:**

- `p_186189_` (`ServerLevel`)
- `p_186190_` (`Vec3`)
- `p_186191_` (`Vec3`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
