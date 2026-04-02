# AnyBlockInteractionTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<AnyBlockInteractionTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<AnyBlockInteractionTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<AnyBlockInteractionTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<AnyBlockInteractionTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_319979_, BlockPos p_320093_, ItemStack p_320553_)
```

**Parameters:**

- `p_319979_` (`ServerPlayer`)
- `p_320093_` (`BlockPos`)
- `p_320553_` (`ItemStack`)

**Returns:** `public void`

### matches

```java
public boolean matches(LootContext p_320453_)
```

**Parameters:**

- `p_320453_` (`LootContext`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_319820_)
```

**Parameters:**

- `p_319820_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
