# AttributeUtil

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class

## Description

Utility code to support `IAttributeExtension`.

## Methods

### addAttributeTooltips

```java
public static final void addAttributeTooltips(ItemStack stack, Consumer<Component> tooltip, AttributeTooltipContext ctx)
```

**Parameters:**

- `stack` (`ItemStack`)
- `tooltip` (`Consumer<Component>`)
- `ctx` (`AttributeTooltipContext`)

### applyModifierTooltips

```java
 applyModifierTooltips()
```

**Returns:** ``

### applyModifierTooltips

```java
public static void applyModifierTooltips(ItemStack stack, Consumer<Component> tooltip, AttributeTooltipContext ctx)
```

**Parameters:**

- `stack` (`ItemStack`)
- `tooltip` (`Consumer<Component>`)
- `ctx` (`AttributeTooltipContext`)

### applyTextFor

```java
 applyTextFor()
```

**Returns:** ``

### applyTextFor

```java
public static void applyTextFor(ItemStack stack, Consumer<Component> tooltip, Multimap<Holder<Attribute>, AttributeModifier> modifierMap, AttributeTooltipContext ctx)
```

**Parameters:**

- `stack` (`ItemStack`)
- `tooltip` (`Consumer<Component>`)
- `modifierMap` (`Multimap<Holder<Attribute>, AttributeModifier>`)
- `ctx` (`AttributeTooltipContext`)

### addPotionTooltip

```java
public static void addPotionTooltip(List<Pair<Holder<Attribute>, AttributeModifier>> list, Consumer<Component> tooltips)
```

**Parameters:**

- `list` (`List<Pair<Holder<Attribute>, AttributeModifier>>`)
- `tooltips` (`Consumer<Component>`)

### sortedMap

```java
public static Multimap<Holder<Attribute>, AttributeModifier> sortedMap()
```

**Returns:** `Multimap<Holder<Attribute>, AttributeModifier>`

### getSortedModifiers

```java
public static Multimap<Holder<Attribute>, AttributeModifier> getSortedModifiers(ItemStack stack, EquipmentSlotGroup slot)
```

**Parameters:**

- `stack` (`ItemStack`)
- `slot` (`EquipmentSlotGroup`)

**Returns:** `Multimap<Holder<Attribute>, AttributeModifier>`

### getTooltipFlag

```java
static TooltipFlag getTooltipFlag()
```

**Returns:** `static TooltipFlag`
