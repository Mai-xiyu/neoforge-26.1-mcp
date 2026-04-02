# BlockSnapshot

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class

## Description

Represents a captured snapshot of a block, including the level, position, state, BE data, and setBlock flags.



Used to record the prior state and unwind changes if the change was denied, such as during `BlockEvent.BreakEvent`.

## Methods

### BlockSnapshot

```java
private BlockSnapshot(ResourceKey<Level> dim, LevelAccessor level, BlockPos pos, BlockState state, CompoundTag nbt, int flags)
```

**Parameters:**

- `dim` (`ResourceKey<Level>`)
- `level` (`LevelAccessor`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `nbt` (`CompoundTag`)
- `flags` (`int`)

**Returns:** `private`

### create

```java
public static BlockSnapshot create(ResourceKey<Level> dim, LevelAccessor level, BlockPos pos, int flag)
```

**Parameters:**

- `dim` (`ResourceKey<Level>`)
- `level` (`LevelAccessor`)
- `pos` (`BlockPos`)
- `flag` (`int`)

**Returns:** `BlockSnapshot`

### create

```java
public static BlockSnapshot create(ResourceKey<Level> dim, LevelAccessor level, BlockPos pos)
```

**Parameters:**

- `dim` (`ResourceKey<Level>`)
- `level` (`LevelAccessor`)
- `pos` (`BlockPos`)

**Returns:** `BlockSnapshot`

### create

```java
return create()
```

**Returns:** `return`

### getDimension

```java
public ResourceKey<Level> getDimension()
```

**Returns:** `ResourceKey<Level>`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `BlockPos`

### getFlags

```java
public int getFlags()
```

**Returns:** `int`

### getTag

```java
public CompoundTag getTag()
```

**Returns:** `CompoundTag`

### getState

```java
public BlockState getState()
```

**Returns:** `BlockState`

### getLevel

```java
public LevelAccessor getLevel()
```

**Returns:** `LevelAccessor`

### getCurrentState

```java
public BlockState getCurrentState()
```

**Returns:** `BlockState`

### recreateBlockEntity

```java
public BlockEntity recreateBlockEntity(HolderLookup.Provider provider)
```

**Parameters:**

- `provider` (`HolderLookup.Provider`)

**Returns:** `BlockEntity`

### restoreToLocation

```java
public boolean restoreToLocation(LevelAccessor level, BlockPos pos, int flags)
```

**Parameters:**

- `level` (`LevelAccessor`)
- `pos` (`BlockPos`)
- `flags` (`int`)

**Returns:** `boolean`

### restoreBlockEntity

```java
 restoreBlockEntity()
```

**Returns:** ``

### restore

```java
public boolean restore(int flags)
```

**Parameters:**

- `flags` (`int`)

**Returns:** `boolean`

### restore

```java
public boolean restore()
```

**Returns:** `boolean`

### restoreBlockEntity

```java
public boolean restoreBlockEntity(LevelAccessor level, BlockPos pos)
```

**Parameters:**

- `level` (`LevelAccessor`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### equals

```java
public boolean equals(Object obj)
```

**Parameters:**

- `obj` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`
