# StartRidingTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<StartRidingTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<StartRidingTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<StartRidingTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<StartRidingTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_160388_)
```

**Parameters:**

- `p_160388_` (`ServerPlayer`)

**Returns:** `public void`

### playerStartsRiding

```java
public static Criterion<StartRidingTrigger.TriggerInstance> playerStartsRiding(EntityPredicate.Builder p_160402_)
```

**Parameters:**

- `p_160402_` (`EntityPredicate.Builder`)

**Returns:** `public static Criterion<StartRidingTrigger.TriggerInstance>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
