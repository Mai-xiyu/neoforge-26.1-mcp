# EmptyFluid

**Package:** `net.minecraft.world.level.material`
**Type:** class
**Extends:** `Fluid`

## Methods

### getBucket

```java
public Item getBucket()
```

**Returns:** `Item`

### canBeReplacedWith

```java
public boolean canBeReplacedWith(FluidState p_75930_, BlockGetter p_75931_, BlockPos p_75932_, Fluid p_75933_, Direction p_75934_)
```

**Parameters:**

- `p_75930_` (`FluidState`)
- `p_75931_` (`BlockGetter`)
- `p_75932_` (`BlockPos`)
- `p_75933_` (`Fluid`)
- `p_75934_` (`Direction`)

**Returns:** `boolean`

### getFlow

```java
public Vec3 getFlow(BlockGetter p_75918_, BlockPos p_75919_, FluidState p_75920_)
```

**Parameters:**

- `p_75918_` (`BlockGetter`)
- `p_75919_` (`BlockPos`)
- `p_75920_` (`FluidState`)

**Returns:** `Vec3`

### getTickDelay

```java
public int getTickDelay(LevelReader p_75922_)
```

**Parameters:**

- `p_75922_` (`LevelReader`)

**Returns:** `int`

### isEmpty

```java
protected boolean isEmpty()
```

**Returns:** `boolean`

### getExplosionResistance

```java
protected float getExplosionResistance()
```

**Returns:** `float`

### getHeight

```java
public float getHeight(FluidState p_75926_, BlockGetter p_75927_, BlockPos p_75928_)
```

**Parameters:**

- `p_75926_` (`FluidState`)
- `p_75927_` (`BlockGetter`)
- `p_75928_` (`BlockPos`)

**Returns:** `float`

### getOwnHeight

```java
public float getOwnHeight(FluidState p_75924_)
```

**Parameters:**

- `p_75924_` (`FluidState`)

**Returns:** `float`

### createLegacyBlock

```java
protected BlockState createLegacyBlock(FluidState p_75937_)
```

**Parameters:**

- `p_75937_` (`FluidState`)

**Returns:** `BlockState`

### isSource

```java
public boolean isSource(FluidState p_75944_)
```

**Parameters:**

- `p_75944_` (`FluidState`)

**Returns:** `boolean`

### getAmount

```java
public int getAmount(FluidState p_75946_)
```

**Parameters:**

- `p_75946_` (`FluidState`)

**Returns:** `int`

### getShape

```java
public VoxelShape getShape(FluidState p_75939_, BlockGetter p_75940_, BlockPos p_75941_)
```

**Parameters:**

- `p_75939_` (`FluidState`)
- `p_75940_` (`BlockGetter`)
- `p_75941_` (`BlockPos`)

**Returns:** `VoxelShape`
