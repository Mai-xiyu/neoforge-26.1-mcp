# BlockInWorld

**Package:** `net.minecraft.world.level.block.state.pattern`
**Type:** class

## Methods

### BlockInWorld

```java
public BlockInWorld(LevelReader p_61165_, BlockPos p_61166_, boolean p_61167_)
```

**Parameters:**

- `p_61165_` (`LevelReader`)
- `p_61166_` (`BlockPos`)
- `p_61167_` (`boolean`)

**Returns:** `public`

### getState

```java
public BlockState getState()
```

**Returns:** `public BlockState`

### getEntity

```java
public BlockEntity getEntity()
```

**Returns:** `BlockEntity`

### getLevel

```java
public LevelReader getLevel()
```

**Returns:** `public LevelReader`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`

### hasState

```java
public static Predicate<BlockInWorld> hasState(Predicate<BlockState> p_61170_)
```

**Parameters:**

- `p_61170_` (`Predicate<BlockState>`)

**Returns:** `public static Predicate<BlockInWorld>`
