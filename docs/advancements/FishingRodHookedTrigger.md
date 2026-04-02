# FishingRodHookedTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<FishingRodHookedTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<FishingRodHookedTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<FishingRodHookedTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<FishingRodHookedTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_40417_, ItemStack p_40418_, FishingHook p_40419_, Collection<ItemStack> p_40420_)
```

**Parameters:**

- `p_40417_` (`ServerPlayer`)
- `p_40418_` (`ItemStack`)
- `p_40419_` (`FishingHook`)
- `p_40420_` (`Collection<ItemStack>`)

**Returns:** `public void`

### fishedItem

```java
public static Criterion<FishingRodHookedTrigger.TriggerInstance> fishedItem(Optional<ItemPredicate> p_298233_, Optional<EntityPredicate> p_298660_, Optional<ItemPredicate> p_298847_)
```

**Parameters:**

- `p_298233_` (`Optional<ItemPredicate>`)
- `p_298660_` (`Optional<EntityPredicate>`)
- `p_298847_` (`Optional<ItemPredicate>`)

**Returns:** `public static Criterion<FishingRodHookedTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ItemStack p_40444_, LootContext p_40445_, Collection<ItemStack> p_40446_)
```

**Parameters:**

- `p_40444_` (`ItemStack`)
- `p_40445_` (`LootContext`)
- `p_40446_` (`Collection<ItemStack>`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_312572_)
```

**Parameters:**

- `p_312572_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
