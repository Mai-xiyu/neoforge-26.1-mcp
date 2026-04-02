# PistonMovingBlockEntity

**Package:** `net.minecraft.world.level.block.piston`
**Type:** class
**Extends:** `BlockEntity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TICK_MOVEMENT` | `double` |  |

## Methods

### PistonMovingBlockEntity

```java
public PistonMovingBlockEntity(BlockPos p_155901_, BlockState p_155902_)
```

**Parameters:**

- `p_155901_` (`BlockPos`)
- `p_155902_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### PistonMovingBlockEntity

```java
public PistonMovingBlockEntity(BlockPos p_155904_, BlockState p_155905_, BlockState p_155906_, Direction p_155907_, boolean p_155908_, boolean p_155909_)
```

**Parameters:**

- `p_155904_` (`BlockPos`)
- `p_155905_` (`BlockState`)
- `p_155906_` (`BlockState`)
- `p_155907_` (`Direction`)
- `p_155908_` (`boolean`)
- `p_155909_` (`boolean`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### getUpdateTag

```java
public CompoundTag getUpdateTag(HolderLookup.Provider p_324521_)
```

**Parameters:**

- `p_324521_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### isExtending

```java
public boolean isExtending()
```

**Returns:** `public boolean`

### getDirection

```java
public Direction getDirection()
```

**Returns:** `public Direction`

### isSourcePiston

```java
public boolean isSourcePiston()
```

**Returns:** `public boolean`

### getProgress

```java
public float getProgress(float p_60351_)
```

**Parameters:**

- `p_60351_` (`float`)

**Returns:** `public float`

### getXOff

```java
public float getXOff(float p_60381_)
```

**Parameters:**

- `p_60381_` (`float`)

**Returns:** `public float`

### getYOff

```java
public float getYOff(float p_60386_)
```

**Parameters:**

- `p_60386_` (`float`)

**Returns:** `public float`

### getZOff

```java
public float getZOff(float p_60389_)
```

**Parameters:**

- `p_60389_` (`float`)

**Returns:** `public float`

### getExtendedProgress

```java
private float getExtendedProgress(float p_60391_)
```

**Parameters:**

- `p_60391_` (`float`)

**Returns:** `private float`

### getCollisionRelatedBlockState

```java
private BlockState getCollisionRelatedBlockState()
```

**Returns:** `private BlockState`

### moveCollidedEntities

```java
private static void moveCollidedEntities(Level p_155911_, BlockPos p_155912_, float p_155913_, PistonMovingBlockEntity p_155914_)
```

**Parameters:**

- `p_155911_` (`Level`)
- `p_155912_` (`BlockPos`)
- `p_155913_` (`float`)
- `p_155914_` (`PistonMovingBlockEntity`)

**Returns:** `private static void`

### moveEntityByPiston

```java
 moveEntityByPiston()
```

**Returns:** ``

### fixEntityWithinPistonBase

```java
 fixEntityWithinPistonBase()
```

**Returns:** ``

### moveEntityByPiston

```java
private static void moveEntityByPiston(Direction p_60372_, Entity p_60373_, double p_60374_, Direction p_60375_)
```

**Parameters:**

- `p_60372_` (`Direction`)
- `p_60373_` (`Entity`)
- `p_60374_` (`double`)
- `p_60375_` (`Direction`)

**Returns:** `private static void`

### moveStuckEntities

```java
private static void moveStuckEntities(Level p_155932_, BlockPos p_155933_, float p_155934_, PistonMovingBlockEntity p_155935_)
```

**Parameters:**

- `p_155932_` (`Level`)
- `p_155933_` (`BlockPos`)
- `p_155934_` (`float`)
- `p_155935_` (`PistonMovingBlockEntity`)

**Returns:** `private static void`

### moveEntityByPiston

```java
 moveEntityByPiston()
```

**Returns:** ``

### matchesStickyCritera

```java
private static boolean matchesStickyCritera(AABB p_287782_, Entity p_287720_, BlockPos p_287775_)
```

**Parameters:**

- `p_287782_` (`AABB`)
- `p_287720_` (`Entity`)
- `p_287775_` (`BlockPos`)

**Returns:** `private static boolean`

### isStickyForEntities

```java
private boolean isStickyForEntities()
```

**Returns:** `private boolean`

### getMovementDirection

```java
public Direction getMovementDirection()
```

**Returns:** `public Direction`

### getMovement

```java
private static double getMovement(AABB p_60368_, Direction p_60369_, AABB p_60370_)
```

**Parameters:**

- `p_60368_` (`AABB`)
- `p_60369_` (`Direction`)
- `p_60370_` (`AABB`)

**Returns:** `private static double`

### moveByPositionAndProgress

```java
private static AABB moveByPositionAndProgress(BlockPos p_155926_, AABB p_155927_, PistonMovingBlockEntity p_155928_)
```

**Parameters:**

- `p_155926_` (`BlockPos`)
- `p_155927_` (`AABB`)
- `p_155928_` (`PistonMovingBlockEntity`)

**Returns:** `private static AABB`

### fixEntityWithinPistonBase

```java
private static void fixEntityWithinPistonBase(BlockPos p_155921_, Entity p_155922_, Direction p_155923_, double p_155924_)
```

**Parameters:**

- `p_155921_` (`BlockPos`)
- `p_155922_` (`Entity`)
- `p_155923_` (`Direction`)
- `p_155924_` (`double`)

**Returns:** `private static void`

### moveEntityByPiston

```java
 moveEntityByPiston()
```

**Returns:** ``

### getMovedState

```java
public BlockState getMovedState()
```

**Returns:** `public BlockState`

### finalTick

```java
public void finalTick()
```

**Returns:** `public void`

### tick

```java
public static void tick(Level p_155916_, BlockPos p_155917_, BlockState p_155918_, PistonMovingBlockEntity p_155919_)
```

**Parameters:**

- `p_155916_` (`Level`)
- `p_155917_` (`BlockPos`)
- `p_155918_` (`BlockState`)
- `p_155919_` (`PistonMovingBlockEntity`)

**Returns:** `public static void`

### moveCollidedEntities

```java
 moveCollidedEntities()
```

**Returns:** ``

### moveStuckEntities

```java
 moveStuckEntities()
```

**Returns:** ``

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_155930_, HolderLookup.Provider p_324214_)
```

**Parameters:**

- `p_155930_` (`CompoundTag`)
- `p_324214_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187530_, HolderLookup.Provider p_323923_)
```

**Parameters:**

- `p_187530_` (`CompoundTag`)
- `p_323923_` (`HolderLookup.Provider`)

### getCollisionShape

```java
public VoxelShape getCollisionShape(BlockGetter p_60357_, BlockPos p_60358_)
```

**Parameters:**

- `p_60357_` (`BlockGetter`)
- `p_60358_` (`BlockPos`)

**Returns:** `public VoxelShape`

### getLastTicked

```java
public long getLastTicked()
```

**Returns:** `public long`

### setLevel

```java
public void setLevel(Level p_250671_)
```

**Parameters:**

- `p_250671_` (`Level`)
