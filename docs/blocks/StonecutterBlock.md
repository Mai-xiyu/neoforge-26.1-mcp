# StonecutterBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<StonecutterBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<StonecutterBlock> codec()
```

**Returns:** `MapCodec<StonecutterBlock>`

### StonecutterBlock

```java
public StonecutterBlock(BlockBehaviour.Properties p_57068_)
```

**Parameters:**

- `p_57068_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_57070_)
```

**Parameters:**

- `p_57070_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_57083_, Level p_57084_, BlockPos p_57085_, Player p_57086_, BlockHitResult p_57088_)
```

**Parameters:**

- `p_57083_` (`BlockState`)
- `p_57084_` (`Level`)
- `p_57085_` (`BlockPos`)
- `p_57086_` (`Player`)
- `p_57088_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### getMenuProvider

```java
protected MenuProvider getMenuProvider(BlockState p_57105_, Level p_57106_, BlockPos p_57107_)
```

**Parameters:**

- `p_57105_` (`BlockState`)
- `p_57106_` (`Level`)
- `p_57107_` (`BlockPos`)

**Returns:** `MenuProvider`

### getShape

```java
protected VoxelShape getShape(BlockState p_57100_, BlockGetter p_57101_, BlockPos p_57102_, CollisionContext p_57103_)
```

**Parameters:**

- `p_57100_` (`BlockState`)
- `p_57101_` (`BlockGetter`)
- `p_57102_` (`BlockPos`)
- `p_57103_` (`CollisionContext`)

**Returns:** `VoxelShape`

### useShapeForLightOcclusion

```java
protected boolean useShapeForLightOcclusion(BlockState p_57109_)
```

**Parameters:**

- `p_57109_` (`BlockState`)

**Returns:** `boolean`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_57098_)
```

**Parameters:**

- `p_57098_` (`BlockState`)

**Returns:** `RenderShape`

### rotate

```java
protected BlockState rotate(BlockState p_57093_, Rotation p_57094_)
```

**Parameters:**

- `p_57093_` (`BlockState`)
- `p_57094_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_57090_, Mirror p_57091_)
```

**Parameters:**

- `p_57090_` (`BlockState`)
- `p_57091_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_57096_)
```

**Parameters:**

- `p_57096_` (`StateDefinition.Builder<Block, BlockState>`)

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_57078_, PathComputationType p_57081_)
```

**Parameters:**

- `p_57078_` (`BlockState`)
- `p_57081_` (`PathComputationType`)

**Returns:** `boolean`
