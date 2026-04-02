# InventoryChangeTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<InventoryChangeTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<InventoryChangeTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<InventoryChangeTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<InventoryChangeTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_43150_, Inventory p_43151_, ItemStack p_43152_)
```

**Parameters:**

- `p_43150_` (`ServerPlayer`)
- `p_43151_` (`Inventory`)
- `p_43152_` (`ItemStack`)

**Returns:** `public void`

### trigger

```java
private void trigger(ServerPlayer p_43154_, Inventory p_43155_, ItemStack p_43156_, int p_43157_, int p_43158_, int p_43159_)
```

**Parameters:**

- `p_43154_` (`ServerPlayer`)
- `p_43155_` (`Inventory`)
- `p_43156_` (`ItemStack`)
- `p_43157_` (`int`)
- `p_43158_` (`int`)
- `p_43159_` (`int`)

**Returns:** `private void`

### hasItems

```java
public static Criterion<InventoryChangeTrigger.TriggerInstance> hasItems(ItemPredicate.Builder[]... p_298231_)
```

**Parameters:**

- `p_298231_` (`ItemPredicate.Builder[]...`)

**Returns:** `public static Criterion<InventoryChangeTrigger.TriggerInstance>`

### hasItems

```java
public static Criterion<InventoryChangeTrigger.TriggerInstance> hasItems(ItemPredicate[]... p_43198_)
```

**Parameters:**

- `p_43198_` (`ItemPredicate[]...`)

**Returns:** `public static Criterion<InventoryChangeTrigger.TriggerInstance>`

### hasItems

```java
public static Criterion<InventoryChangeTrigger.TriggerInstance> hasItems(ItemLike[]... p_43200_)
```

**Parameters:**

- `p_43200_` (`ItemLike[]...`)

**Returns:** `public static Criterion<InventoryChangeTrigger.TriggerInstance>`

### hasItems

```java
return hasItems()
```

**Returns:** `return`

### matches

```java
public boolean matches(Inventory p_43187_, ItemStack p_43188_, int p_43189_, int p_43190_, int p_43191_)
```

**Parameters:**

- `p_43187_` (`Inventory`)
- `p_43188_` (`ItemStack`)
- `p_43189_` (`int`)
- `p_43190_` (`int`)
- `p_43191_` (`int`)

**Returns:** `public boolean`

### Slots

```java
public static record Slots(MinMaxBounds.Ints occupied, MinMaxBounds.Ints full, MinMaxBounds.Ints empty)
```

**Parameters:**

- `occupied` (`MinMaxBounds.Ints`)
- `full` (`MinMaxBounds.Ints`)
- `empty` (`MinMaxBounds.Ints`)

**Returns:** `public static record`

### matches

```java
public boolean matches(int p_312470_, int p_312809_, int p_311989_)
```

**Parameters:**

- `p_312470_` (`int`)
- `p_312809_` (`int`)
- `p_311989_` (`int`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
| `Slots` | record |  |
