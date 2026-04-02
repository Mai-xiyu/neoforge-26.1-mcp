# BrewedPotionTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<BrewedPotionTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<BrewedPotionTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<BrewedPotionTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<BrewedPotionTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_19121_, Holder<Potion> p_312693_)
```

**Parameters:**

- `p_19121_` (`ServerPlayer`)
- `p_312693_` (`Holder<Potion>`)

**Returns:** `public void`

### brewedPotion

```java
public static Criterion<BrewedPotionTrigger.TriggerInstance> brewedPotion()
```

**Returns:** `public static Criterion<BrewedPotionTrigger.TriggerInstance>`

### matches

```java
public boolean matches(Holder<Potion> p_311987_)
```

**Parameters:**

- `p_311987_` (`Holder<Potion>`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
