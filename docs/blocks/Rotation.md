# Rotation

**Package:** `net.minecraft.world.level.block`
**Type:** enum
**Implements:** `StringRepresentable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<Rotation>` |  |

## Methods

### COUNTERCLOCKWISE_90

```java
, COUNTERCLOCKWISE_90()
```

**Returns:** `,`

### Rotation

```java
private Rotation(String p_221988_, OctahedralGroup p_221989_)
```

**Parameters:**

- `p_221988_` (`String`)
- `p_221989_` (`OctahedralGroup`)

**Returns:** `private`

### getRotated

```java
public Rotation getRotated(Rotation p_55953_)
```

**Parameters:**

- `p_55953_` (`Rotation`)

**Returns:** `public Rotation`

### rotation

```java
public OctahedralGroup rotation()
```

**Returns:** `public OctahedralGroup`

### rotate

```java
public Direction rotate(Direction p_55955_)
```

**Parameters:**

- `p_55955_` (`Direction`)

**Returns:** `public Direction`

### rotate

```java
public int rotate(int p_55950_, int p_55951_)
```

**Parameters:**

- `p_55950_` (`int`)
- `p_55951_` (`int`)

**Returns:** `public int`

### getRandom

```java
public static Rotation getRandom(RandomSource p_221991_)
```

**Parameters:**

- `p_221991_` (`RandomSource`)

**Returns:** `public static Rotation`

### getShuffled

```java
public static List<Rotation> getShuffled(RandomSource p_221993_)
```

**Parameters:**

- `p_221993_` (`RandomSource`)

**Returns:** `public static List<Rotation>`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`
