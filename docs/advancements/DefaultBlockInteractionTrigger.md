# DefaultBlockInteractionTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<DefaultBlockInteractionTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<DefaultBlockInteractionTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<DefaultBlockInteractionTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<DefaultBlockInteractionTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_320398_, BlockPos p_320593_)
```

**Parameters:**

- `p_320398_` (`ServerPlayer`)
- `p_320593_` (`BlockPos`)

**Returns:** `public void`

### matches

```java
public boolean matches(LootContext p_320120_)
```

**Parameters:**

- `p_320120_` (`LootContext`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_320246_)
```

**Parameters:**

- `p_320246_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
