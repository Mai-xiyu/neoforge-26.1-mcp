# EnchantedItemTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<EnchantedItemTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<EnchantedItemTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<EnchantedItemTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<EnchantedItemTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_27669_, ItemStack p_27670_, int p_27671_)
```

**Parameters:**

- `p_27669_` (`ServerPlayer`)
- `p_27670_` (`ItemStack`)
- `p_27671_` (`int`)

**Returns:** `public void`

### enchantedItem

```java
public static Criterion<EnchantedItemTrigger.TriggerInstance> enchantedItem()
```

**Returns:** `public static Criterion<EnchantedItemTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ItemStack p_27692_, int p_27693_)
```

**Parameters:**

- `p_27692_` (`ItemStack`)
- `p_27693_` (`int`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
