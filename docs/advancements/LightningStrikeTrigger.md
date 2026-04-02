# LightningStrikeTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<LightningStrikeTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<LightningStrikeTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<LightningStrikeTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<LightningStrikeTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_153392_, LightningBolt p_153393_, List<Entity> p_153394_)
```

**Parameters:**

- `p_153392_` (`ServerPlayer`)
- `p_153393_` (`LightningBolt`)
- `p_153394_` (`List<Entity>`)

**Returns:** `public void`

### lightningStrike

```java
public static Criterion<LightningStrikeTrigger.TriggerInstance> lightningStrike(Optional<EntityPredicate> p_301078_, Optional<EntityPredicate> p_301001_)
```

**Parameters:**

- `p_301078_` (`Optional<EntityPredicate>`)
- `p_301001_` (`Optional<EntityPredicate>`)

**Returns:** `public static Criterion<LightningStrikeTrigger.TriggerInstance>`

### matches

```java
public boolean matches(LootContext p_153419_, List<LootContext> p_153420_)
```

**Parameters:**

- `p_153419_` (`LootContext`)
- `p_153420_` (`List<LootContext>`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_312845_)
```

**Parameters:**

- `p_312845_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
