# KelpPlantBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `GrowingPlantBodyBlock`
**Implements:** `LiquidBlockContainer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<KelpPlantBlock>` |  |

## Methods

### codec

```java
public MapCodec<KelpPlantBlock> codec()
```

**Returns:** `MapCodec<KelpPlantBlock>`

### KelpPlantBlock

```java
public KelpPlantBlock(BlockBehaviour.Properties p_54323_)
```

**Parameters:**

- `p_54323_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### getHeadBlock

```java
protected GrowingPlantHeadBlock getHeadBlock()
```

**Returns:** `GrowingPlantHeadBlock`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_54336_)
```

**Parameters:**

- `p_54336_` (`BlockState`)

**Returns:** `FluidState`

### canAttachTo

```java
protected boolean canAttachTo(BlockState p_153457_)
```

**Parameters:**

- `p_153457_` (`BlockState`)

**Returns:** `boolean`

### canPlaceLiquid

```java
public boolean canPlaceLiquid(Player p_296032_, BlockGetter p_54325_, BlockPos p_54326_, BlockState p_54327_, Fluid p_54328_)
```

**Parameters:**

- `p_296032_` (`Player`)
- `p_54325_` (`BlockGetter`)
- `p_54326_` (`BlockPos`)
- `p_54327_` (`BlockState`)
- `p_54328_` (`Fluid`)

**Returns:** `boolean`

### placeLiquid

```java
public boolean placeLiquid(LevelAccessor p_54330_, BlockPos p_54331_, BlockState p_54332_, FluidState p_54333_)
```

**Parameters:**

- `p_54330_` (`LevelAccessor`)
- `p_54331_` (`BlockPos`)
- `p_54332_` (`BlockState`)
- `p_54333_` (`FluidState`)

**Returns:** `boolean`
