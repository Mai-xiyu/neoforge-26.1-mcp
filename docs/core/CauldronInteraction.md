# CauldronInteraction

**Package:** `net.minecraft.core.cauldron`
**Type:** interface

## Methods

### newInteractionMap

```java
static CauldronInteraction.InteractionMap newInteractionMap(String p_304841_)
```

**Parameters:**

- `p_304841_` (`String`)

**Returns:** `static CauldronInteraction.InteractionMap`

### interact

```java
ItemInteractionResult interact(BlockState p_175711_, Level p_175712_, BlockPos p_175713_, Player p_175714_, InteractionHand p_175715_, ItemStack p_175716_)
```

**Parameters:**

- `p_175711_` (`BlockState`)
- `p_175712_` (`Level`)
- `p_175713_` (`BlockPos`)
- `p_175714_` (`Player`)
- `p_175715_` (`InteractionHand`)
- `p_175716_` (`ItemStack`)

**Returns:** `ItemInteractionResult`

### bootStrap

```java
static void bootStrap()
```

**Returns:** `static void`

### addDefaultInteractions

```java
 addDefaultInteractions()
```

**Returns:** ``

### addDefaultInteractions

```java
 addDefaultInteractions()
```

**Returns:** ``

### addDefaultInteractions

```java
 addDefaultInteractions()
```

**Returns:** ``

### addDefaultInteractions

```java
 addDefaultInteractions()
```

**Returns:** ``

### addDefaultInteractions

```java
static void addDefaultInteractions(Map<Item, CauldronInteraction> p_175648_)
```

**Parameters:**

- `p_175648_` (`Map<Item, CauldronInteraction>`)

**Returns:** `static void`

### fillBucket

```java
static ItemInteractionResult fillBucket(BlockState p_175636_, Level p_175637_, BlockPos p_175638_, Player p_175639_, InteractionHand p_175640_, ItemStack p_175641_, ItemStack p_175642_, Predicate<BlockState> p_175643_, SoundEvent p_175644_)
```

**Parameters:**

- `p_175636_` (`BlockState`)
- `p_175637_` (`Level`)
- `p_175638_` (`BlockPos`)
- `p_175639_` (`Player`)
- `p_175640_` (`InteractionHand`)
- `p_175641_` (`ItemStack`)
- `p_175642_` (`ItemStack`)
- `p_175643_` (`Predicate<BlockState>`)
- `p_175644_` (`SoundEvent`)

**Returns:** `static ItemInteractionResult`

### emptyBucket

```java
static ItemInteractionResult emptyBucket(Level p_175619_, BlockPos p_175620_, Player p_175621_, InteractionHand p_175622_, ItemStack p_175623_, BlockState p_175624_, SoundEvent p_175625_)
```

**Parameters:**

- `p_175619_` (`Level`)
- `p_175620_` (`BlockPos`)
- `p_175621_` (`Player`)
- `p_175622_` (`InteractionHand`)
- `p_175623_` (`ItemStack`)
- `p_175624_` (`BlockState`)
- `p_175625_` (`SoundEvent`)

**Returns:** `static ItemInteractionResult`

### InteractionMap

```java
public static record InteractionMap(String name, Map<Item, CauldronInteraction> map)
```

**Parameters:**

- `name` (`String`)
- `map` (`Map<Item, CauldronInteraction>`)

**Returns:** `public static record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `InteractionMap` | record |  |
