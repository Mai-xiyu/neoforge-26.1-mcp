# ChanneledLightningTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<ChanneledLightningTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<ChanneledLightningTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<ChanneledLightningTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<ChanneledLightningTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_21722_, Collection<? extends Entity> p_21723_)
```

**Parameters:**

- `p_21722_` (`ServerPlayer`)
- `p_21723_` (`Collection<? extends Entity>`)

**Returns:** `public void`

### channeledLightning

```java
public static Criterion<ChanneledLightningTrigger.TriggerInstance> channeledLightning(EntityPredicate.Builder[]... p_298972_)
```

**Parameters:**

- `p_298972_` (`EntityPredicate.Builder[]...`)

**Returns:** `public static Criterion<ChanneledLightningTrigger.TriggerInstance>`

### matches

```java
public boolean matches(Collection<? extends LootContext> p_21745_)
```

**Parameters:**

- `p_21745_` (`Collection<? extends LootContext>`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_312314_)
```

**Parameters:**

- `p_312314_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
