# ConcretePowderBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `FallingBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ConcretePowderBlock>` |  |

## Methods

### codec

```java
public MapCodec<ConcretePowderBlock> codec()
```

**Returns:** `MapCodec<ConcretePowderBlock>`

### ConcretePowderBlock

```java
public ConcretePowderBlock(Block p_52060_, BlockBehaviour.Properties p_52061_)
```

**Parameters:**

- `p_52060_` (`Block`)
- `p_52061_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### onLand

```java
public void onLand(Level p_52068_, BlockPos p_52069_, BlockState p_52070_, BlockState p_52071_, FallingBlockEntity p_52072_)
```

**Parameters:**

- `p_52068_` (`Level`)
- `p_52069_` (`BlockPos`)
- `p_52070_` (`BlockState`)
- `p_52071_` (`BlockState`)
- `p_52072_` (`FallingBlockEntity`)

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_52063_)
```

**Parameters:**

- `p_52063_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### shouldSolidify

```java
private static boolean shouldSolidify(BlockGetter p_52081_, BlockPos p_52082_, BlockState p_52083_, net.minecraft.world.level.material.FluidState fluidState)
```

**Parameters:**

- `p_52081_` (`BlockGetter`)
- `p_52082_` (`BlockPos`)
- `p_52083_` (`BlockState`)
- `fluidState` (`net.minecraft.world.level.material.FluidState`)

**Returns:** `private static boolean`

### shouldSolidify

```java
private static boolean shouldSolidify(BlockGetter p_52081_, BlockPos p_52082_, BlockState p_52083_)
```

**Parameters:**

- `p_52081_` (`BlockGetter`)
- `p_52082_` (`BlockPos`)
- `p_52083_` (`BlockState`)

**Returns:** `private static boolean`

### touchesLiquid

```java
private static boolean touchesLiquid(BlockGetter p_52065_, BlockPos p_52066_, BlockState state)
```

**Parameters:**

- `p_52065_` (`BlockGetter`)
- `p_52066_` (`BlockPos`)
- `state` (`BlockState`)

**Returns:** `private static boolean`

### canSolidify

```java
private static boolean canSolidify(BlockState p_52089_)
```

**Parameters:**

- `p_52089_` (`BlockState`)

**Returns:** `private static boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_52074_, Direction p_52075_, BlockState p_52076_, LevelAccessor p_52077_, BlockPos p_52078_, BlockPos p_52079_)
```

**Parameters:**

- `p_52074_` (`BlockState`)
- `p_52075_` (`Direction`)
- `p_52076_` (`BlockState`)
- `p_52077_` (`LevelAccessor`)
- `p_52078_` (`BlockPos`)
- `p_52079_` (`BlockPos`)

**Returns:** `BlockState`

### getDustColor

```java
public int getDustColor(BlockState p_52085_, BlockGetter p_52086_, BlockPos p_52087_)
```

**Parameters:**

- `p_52085_` (`BlockState`)
- `p_52086_` (`BlockGetter`)
- `p_52087_` (`BlockPos`)

**Returns:** `int`
