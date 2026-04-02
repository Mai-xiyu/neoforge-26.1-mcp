# ConstructBeaconTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<ConstructBeaconTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<ConstructBeaconTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<ConstructBeaconTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<ConstructBeaconTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_148030_, int p_148031_)
```

**Parameters:**

- `p_148030_` (`ServerPlayer`)
- `p_148031_` (`int`)

**Returns:** `public void`

### constructedBeacon

```java
public static Criterion<ConstructBeaconTrigger.TriggerInstance> constructedBeacon()
```

**Returns:** `public static Criterion<ConstructBeaconTrigger.TriggerInstance>`

### constructedBeacon

```java
public static Criterion<ConstructBeaconTrigger.TriggerInstance> constructedBeacon(MinMaxBounds.Ints p_301138_)
```

**Parameters:**

- `p_301138_` (`MinMaxBounds.Ints`)

**Returns:** `public static Criterion<ConstructBeaconTrigger.TriggerInstance>`

### matches

```java
public boolean matches(int p_148033_)
```

**Parameters:**

- `p_148033_` (`int`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
