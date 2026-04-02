# BlockTagIngredient

**Package:** `net.neoforged.neoforge.common.crafting`
**Type:** class
**Implements:** `ICustomIngredient`

## Description

`Ingredient` that matches `ItemStack`s of `Block`s from a `TagKey<Block>`, useful in cases
like `"minecraft:convertable_to_mud"` where there isn't an accompanying item tag



Notice: This should not be used as a replacement for the normal `Ingredient#of(TagKey)`,
This should only be used when there is no way an item tag can be used in your use case

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BlockTagIngredient>` |  |
| `tag` | `TagKey<Block>` |  |

## Methods

### BlockTagIngredient

```java
public BlockTagIngredient(TagKey<Block> tag)
```

**Parameters:**

- `tag` (`TagKey<Block>`)

**Returns:** `public`

### dissolve

```java
protected void dissolve()
```

**Returns:** `protected void`

### getItems

```java
public Stream<ItemStack> getItems()
```

**Returns:** `Stream<ItemStack>`

### dissolve

```java
 dissolve()
```

**Returns:** ``

### test

```java
public boolean test(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### dissolve

```java
 dissolve()
```

**Returns:** ``

### getTag

```java
public TagKey<Block> getTag()
```

**Returns:** `public TagKey<Block>`

### isSimple

```java
public boolean isSimple()
```

**Returns:** `boolean`

### getType

```java
public IngredientType<?> getType()
```

**Returns:** `IngredientType<?>`

### equals

```java
public boolean equals(Object o)
```

**Parameters:**

- `o` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`
