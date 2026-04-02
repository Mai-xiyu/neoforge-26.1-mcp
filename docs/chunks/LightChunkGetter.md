# LightChunkGetter

**Package:** `net.minecraft.world.level.chunk`
**Type:** interface

## Methods

### getChunkForLighting

```java
LightChunk getChunkForLighting(int p_63023_, int p_63024_)
```

**Parameters:**

- `p_63023_` (`int`)
- `p_63024_` (`int`)

**Returns:** `LightChunk`

### onLightUpdate

```java
default void onLightUpdate(LightLayer p_63021_, SectionPos p_63022_)
```

**Parameters:**

- `p_63021_` (`LightLayer`)
- `p_63022_` (`SectionPos`)

**Returns:** `default void`

### getLevel

```java
BlockGetter getLevel()
```

**Returns:** `BlockGetter`
