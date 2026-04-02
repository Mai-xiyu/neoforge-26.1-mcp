# LightEventListener

**Package:** `net.minecraft.world.level.lighting`
**Type:** interface

## Methods

### checkBlock

```java
void checkBlock(BlockPos p_164454_)
```

**Parameters:**

- `p_164454_` (`BlockPos`)

### hasLightWork

```java
boolean hasLightWork()
```

**Returns:** `boolean`

### runLightUpdates

```java
int runLightUpdates()
```

**Returns:** `int`

### updateSectionStatus

```java
default void updateSectionStatus(BlockPos p_75835_, boolean p_75836_)
```

**Parameters:**

- `p_75835_` (`BlockPos`)
- `p_75836_` (`boolean`)

**Returns:** `default void`

### updateSectionStatus

```java
void updateSectionStatus(SectionPos p_75837_, boolean p_75838_)
```

**Parameters:**

- `p_75837_` (`SectionPos`)
- `p_75838_` (`boolean`)

### setLightEnabled

```java
void setLightEnabled(ChunkPos p_164452_, boolean p_164453_)
```

**Parameters:**

- `p_164452_` (`ChunkPos`)
- `p_164453_` (`boolean`)

### propagateLightSources

```java
void propagateLightSources(ChunkPos p_285263_)
```

**Parameters:**

- `p_285263_` (`ChunkPos`)
