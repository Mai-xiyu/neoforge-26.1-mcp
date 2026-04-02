# PickedUpItemTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<PickedUpItemTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<PickedUpItemTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<PickedUpItemTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<PickedUpItemTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_221299_, ItemStack p_221300_, Entity p_221301_)
```

**Parameters:**

- `p_221299_` (`ServerPlayer`)
- `p_221300_` (`ItemStack`)
- `p_221301_` (`Entity`)

**Returns:** `public void`

### thrownItemPickedUpByEntity

```java
public static Criterion<PickedUpItemTrigger.TriggerInstance> thrownItemPickedUpByEntity(ContextAwarePredicate p_286865_, Optional<ItemPredicate> p_299099_, Optional<ContextAwarePredicate> p_299117_)
```

**Parameters:**

- `p_286865_` (`ContextAwarePredicate`)
- `p_299099_` (`Optional<ItemPredicate>`)
- `p_299117_` (`Optional<ContextAwarePredicate>`)

**Returns:** `public static Criterion<PickedUpItemTrigger.TriggerInstance>`

### thrownItemPickedUpByPlayer

```java
public static Criterion<PickedUpItemTrigger.TriggerInstance> thrownItemPickedUpByPlayer(Optional<ContextAwarePredicate> p_298917_, Optional<ItemPredicate> p_298224_, Optional<ContextAwarePredicate> p_298405_)
```

**Parameters:**

- `p_298917_` (`Optional<ContextAwarePredicate>`)
- `p_298224_` (`Optional<ItemPredicate>`)
- `p_298405_` (`Optional<ContextAwarePredicate>`)

**Returns:** `public static Criterion<PickedUpItemTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ServerPlayer p_221323_, ItemStack p_221324_, LootContext p_221325_)
```

**Parameters:**

- `p_221323_` (`ServerPlayer`)
- `p_221324_` (`ItemStack`)
- `p_221325_` (`LootContext`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_312248_)
```

**Parameters:**

- `p_312248_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
