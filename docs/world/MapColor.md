# MapColor

**Package:** `net.minecraft.world.level.material`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NONE` | `MapColor` |  |
| `GRASS` | `MapColor` |  |
| `SAND` | `MapColor` |  |
| `WOOL` | `MapColor` |  |
| `FIRE` | `MapColor` |  |
| `ICE` | `MapColor` |  |
| `METAL` | `MapColor` |  |
| `PLANT` | `MapColor` |  |
| `SNOW` | `MapColor` |  |
| `CLAY` | `MapColor` |  |
| `DIRT` | `MapColor` |  |
| `STONE` | `MapColor` |  |
| `WATER` | `MapColor` |  |
| `WOOD` | `MapColor` |  |
| `QUARTZ` | `MapColor` |  |
| `COLOR_ORANGE` | `MapColor` |  |
| `COLOR_MAGENTA` | `MapColor` |  |
| `COLOR_LIGHT_BLUE` | `MapColor` |  |
| `COLOR_YELLOW` | `MapColor` |  |
| `COLOR_LIGHT_GREEN` | `MapColor` |  |
| `COLOR_PINK` | `MapColor` |  |
| `COLOR_GRAY` | `MapColor` |  |
| `COLOR_LIGHT_GRAY` | `MapColor` |  |
| `COLOR_CYAN` | `MapColor` |  |
| `COLOR_PURPLE` | `MapColor` |  |
| `COLOR_BLUE` | `MapColor` |  |
| `COLOR_BROWN` | `MapColor` |  |
| `COLOR_GREEN` | `MapColor` |  |
| `COLOR_RED` | `MapColor` |  |
| `COLOR_BLACK` | `MapColor` |  |
| `GOLD` | `MapColor` |  |
| `DIAMOND` | `MapColor` |  |
| `LAPIS` | `MapColor` |  |
| `EMERALD` | `MapColor` |  |
| `PODZOL` | `MapColor` |  |
| `NETHER` | `MapColor` |  |
| `TERRACOTTA_WHITE` | `MapColor` |  |
| `TERRACOTTA_ORANGE` | `MapColor` |  |
| `TERRACOTTA_MAGENTA` | `MapColor` |  |
| `TERRACOTTA_LIGHT_BLUE` | `MapColor` |  |
| `TERRACOTTA_YELLOW` | `MapColor` |  |
| `TERRACOTTA_LIGHT_GREEN` | `MapColor` |  |
| `TERRACOTTA_PINK` | `MapColor` |  |
| `TERRACOTTA_GRAY` | `MapColor` |  |
| `TERRACOTTA_LIGHT_GRAY` | `MapColor` |  |
| `TERRACOTTA_CYAN` | `MapColor` |  |
| `TERRACOTTA_PURPLE` | `MapColor` |  |
| `TERRACOTTA_BLUE` | `MapColor` |  |
| `TERRACOTTA_BROWN` | `MapColor` |  |
| `TERRACOTTA_GREEN` | `MapColor` |  |
| `TERRACOTTA_RED` | `MapColor` |  |
| `TERRACOTTA_BLACK` | `MapColor` |  |
| `CRIMSON_NYLIUM` | `MapColor` |  |
| `CRIMSON_STEM` | `MapColor` |  |
| `CRIMSON_HYPHAE` | `MapColor` |  |
| `WARPED_NYLIUM` | `MapColor` |  |
| `WARPED_STEM` | `MapColor` |  |
| `WARPED_HYPHAE` | `MapColor` |  |
| `WARPED_WART_BLOCK` | `MapColor` |  |
| `DEEPSLATE` | `MapColor` |  |
| `RAW_IRON` | `MapColor` |  |
| `GLOW_LICHEN` | `MapColor` |  |
| `col` | `int` |  |
| `id` | `int` |  |

## Methods

### MapColor

```java
private MapColor(int p_285303_, int p_284979_)
```

**Parameters:**

- `p_285303_` (`int`)
- `p_284979_` (`int`)

**Returns:** `private`

### calculateRGBColor

```java
public int calculateRGBColor(MapColor.Brightness p_285401_)
```

**Parameters:**

- `p_285401_` (`MapColor.Brightness`)

**Returns:** `public int`

### byId

```java
public static MapColor byId(int p_285273_)
```

**Parameters:**

- `p_285273_` (`int`)

**Returns:** `public static MapColor`

### byIdUnsafe

```java
return byIdUnsafe()
```

**Returns:** `return`

### byIdUnsafe

```java
private static MapColor byIdUnsafe(int p_285180_)
```

**Parameters:**

- `p_285180_` (`int`)

**Returns:** `private static MapColor`

### getColorFromPackedId

```java
public static int getColorFromPackedId(int p_285190_)
```

**Parameters:**

- `p_285190_` (`int`)

**Returns:** `public static int`

### getPackedId

```java
public byte getPackedId(MapColor.Brightness p_285070_)
```

**Parameters:**

- `p_285070_` (`MapColor.Brightness`)

**Returns:** `public byte`

### LOWEST

```java
, LOWEST()
```

**Returns:** `,`

### Brightness

```java
private Brightness(int p_284956_, int p_285069_)
```

**Parameters:**

- `p_284956_` (`int`)
- `p_285069_` (`int`)

**Returns:** `private`

### byId

```java
public static MapColor.Brightness byId(int p_284960_)
```

**Parameters:**

- `p_284960_` (`int`)

**Returns:** `public static MapColor.Brightness`

### byIdUnsafe

```java
return byIdUnsafe()
```

**Returns:** `return`

### byIdUnsafe

```java
static MapColor.Brightness byIdUnsafe(int p_285089_)
```

**Parameters:**

- `p_285089_` (`int`)

**Returns:** `static MapColor.Brightness`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Brightness` | enum |  |
