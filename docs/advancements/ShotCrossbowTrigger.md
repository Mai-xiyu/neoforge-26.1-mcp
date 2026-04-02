# ShotCrossbowTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<ShotCrossbowTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<ShotCrossbowTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<ShotCrossbowTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<ShotCrossbowTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_65463_, ItemStack p_65464_)
```

**Parameters:**

- `p_65463_` (`ServerPlayer`)
- `p_65464_` (`ItemStack`)

**Returns:** `public void`

### shotCrossbow

```java
public static Criterion<ShotCrossbowTrigger.TriggerInstance> shotCrossbow(Optional<ItemPredicate> p_300988_)
```

**Parameters:**

- `p_300988_` (`Optional<ItemPredicate>`)

**Returns:** `public static Criterion<ShotCrossbowTrigger.TriggerInstance>`

### shotCrossbow

```java
public static Criterion<ShotCrossbowTrigger.TriggerInstance> shotCrossbow(ItemLike p_301042_)
```

**Parameters:**

- `p_301042_` (`ItemLike`)

**Returns:** `public static Criterion<ShotCrossbowTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ItemStack p_65482_)
```

**Parameters:**

- `p_65482_` (`ItemStack`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
