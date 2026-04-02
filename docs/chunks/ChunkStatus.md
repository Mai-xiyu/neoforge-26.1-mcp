# ChunkStatus

**Package:** `net.minecraft.world.level.chunk.status`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_STRUCTURE_DISTANCE` | `int` |  |
| `FINAL_HEIGHTMAPS` | `EnumSet<Heightmap.Types>` |  |
| `EMPTY` | `ChunkStatus` |  |
| `STRUCTURE_STARTS` | `ChunkStatus` |  |
| `STRUCTURE_REFERENCES` | `ChunkStatus` |  |
| `BIOMES` | `ChunkStatus` |  |
| `NOISE` | `ChunkStatus` |  |
| `SURFACE` | `ChunkStatus` |  |
| `CARVERS` | `ChunkStatus` |  |
| `FEATURES` | `ChunkStatus` |  |
| `INITIALIZE_LIGHT` | `ChunkStatus` |  |
| `LIGHT` | `ChunkStatus` |  |
| `SPAWN` | `ChunkStatus` |  |
| `FULL` | `ChunkStatus` |  |

## Methods

### register

```java
private static ChunkStatus register(String p_330494_, ChunkStatus p_331829_, EnumSet<Heightmap.Types> p_330717_, ChunkType p_331982_)
```

**Parameters:**

- `p_330494_` (`String`)
- `p_331829_` (`ChunkStatus`)
- `p_330717_` (`EnumSet<Heightmap.Types>`)
- `p_331982_` (`ChunkType`)

**Returns:** `private static ChunkStatus`

### getStatusList

```java
public static List<ChunkStatus> getStatusList()
```

**Returns:** `public static List<ChunkStatus>`

### ChunkStatus

```java
protected protected ChunkStatus(ChunkStatus p_330316_, EnumSet<Heightmap.Types> p_331442_, ChunkType p_331412_)
```

**Parameters:**

- `p_330316_` (`ChunkStatus`)
- `p_331442_` (`EnumSet<Heightmap.Types>`)
- `p_331412_` (`ChunkType`)

**Returns:** `protected`

### getIndex

```java
public int getIndex()
```

**Returns:** `public int`

### getParent

```java
public ChunkStatus getParent()
```

**Returns:** `public ChunkStatus`

### getChunkType

```java
public ChunkType getChunkType()
```

**Returns:** `public ChunkType`

### byName

```java
public static ChunkStatus byName(String p_330923_)
```

**Parameters:**

- `p_330923_` (`String`)

**Returns:** `public static ChunkStatus`

### heightmapsAfter

```java
public EnumSet<Heightmap.Types> heightmapsAfter()
```

**Returns:** `public EnumSet<Heightmap.Types>`

### isOrAfter

```java
public boolean isOrAfter(ChunkStatus p_330216_)
```

**Parameters:**

- `p_330216_` (`ChunkStatus`)

**Returns:** `public boolean`

### isAfter

```java
public boolean isAfter(ChunkStatus p_347553_)
```

**Parameters:**

- `p_347553_` (`ChunkStatus`)

**Returns:** `public boolean`

### isOrBefore

```java
public boolean isOrBefore(ChunkStatus p_347528_)
```

**Parameters:**

- `p_347528_` (`ChunkStatus`)

**Returns:** `public boolean`

### isBefore

```java
public boolean isBefore(ChunkStatus p_347551_)
```

**Parameters:**

- `p_347551_` (`ChunkStatus`)

**Returns:** `public boolean`

### max

```java
public static ChunkStatus max(ChunkStatus p_347651_, ChunkStatus p_347554_)
```

**Parameters:**

- `p_347651_` (`ChunkStatus`)
- `p_347554_` (`ChunkStatus`)

**Returns:** `public static ChunkStatus`

### toString

```java
public String toString()
```

**Returns:** `String`

### getName

```java
public String getName()
```

**Returns:** `public String`
