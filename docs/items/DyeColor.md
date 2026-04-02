# DyeColor

**Package:** `net.minecraft.world.item`
**Type:** enum
**Implements:** `StringRepresentable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `StringRepresentable.EnumCodec<DyeColor>` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, DyeColor>` |  |

## Methods

### BLACK

```java
, BLACK()
```

**Returns:** `,`

### DyeColor

```java
private DyeColor(int p_41046_, String p_41047_, int p_41048_, MapColor p_285297_, int p_41050_, int p_41051_)
```

**Parameters:**

- `p_41046_` (`int`)
- `p_41047_` (`String`)
- `p_41048_` (`int`)
- `p_285297_` (`MapColor`)
- `p_41050_` (`int`)
- `p_41051_` (`int`)

**Returns:** `private`

### getId

```java
public int getId()
```

**Returns:** `public int`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getTextureDiffuseColor

```java
public int getTextureDiffuseColor()
```

**Returns:** `public int`

### getMapColor

```java
public MapColor getMapColor()
```

**Returns:** `public MapColor`

### getFireworkColor

```java
public int getFireworkColor()
```

**Returns:** `public int`

### getTextColor

```java
public int getTextColor()
```

**Returns:** `public int`

### byId

```java
public static DyeColor byId(int p_41054_)
```

**Parameters:**

- `p_41054_` (`int`)

**Returns:** `public static DyeColor`

### byName

```java
public static DyeColor byName(String p_41058_, DyeColor p_41059_)
```

**Parameters:**

- `p_41058_` (`String`)
- `p_41059_` (`DyeColor`)

**Returns:** `DyeColor`

### byFireworkColor

```java
public static DyeColor byFireworkColor(int p_41062_)
```

**Parameters:**

- `p_41062_` (`int`)

**Returns:** `DyeColor`

### toString

```java
public String toString()
```

**Returns:** `String`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### getTag

```java
public net.minecraft.tags.TagKey<Item> getTag()
```

**Returns:** `net.minecraft.tags.TagKey<Item>`

### getDyedTag

```java
public net.minecraft.tags.TagKey<Item> getDyedTag()
```

**Returns:** `net.minecraft.tags.TagKey<Item>`

### getColor

```java
public static DyeColor getColor(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `DyeColor`
