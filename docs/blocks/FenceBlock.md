# FenceBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `CrossCollisionBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FenceBlock>` |  |

## Methods

### codec

```java
public MapCodec<FenceBlock> codec()
```

**Returns:** `MapCodec<FenceBlock>`

### FenceBlock

```java
public FenceBlock(BlockBehaviour.Properties p_53302_)
```

**Parameters:**

- `p_53302_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getOcclusionShape

```java
protected VoxelShape getOcclusionShape(BlockState p_53338_, BlockGetter p_53339_, BlockPos p_53340_)
```

**Parameters:**

- `p_53338_` (`BlockState`)
- `p_53339_` (`BlockGetter`)
- `p_53340_` (`BlockPos`)

**Returns:** `VoxelShape`

### getVisualShape

```java
protected VoxelShape getVisualShape(BlockState p_53311_, BlockGetter p_53312_, BlockPos p_53313_, CollisionContext p_53314_)
```

**Parameters:**

- `p_53311_` (`BlockState`)
- `p_53312_` (`BlockGetter`)
- `p_53313_` (`BlockPos`)
- `p_53314_` (`CollisionContext`)

**Returns:** `VoxelShape`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_53306_, PathComputationType p_53309_)
```

**Parameters:**

- `p_53306_` (`BlockState`)
- `p_53309_` (`PathComputationType`)

**Returns:** `boolean`

### connectsTo

```java
public boolean connectsTo(BlockState p_53330_, boolean p_53331_, Direction p_53332_)
```

**Parameters:**

- `p_53330_` (`BlockState`)
- `p_53331_` (`boolean`)
- `p_53332_` (`Direction`)

**Returns:** `public boolean`

### isSameFence

```java
private boolean isSameFence(BlockState p_153255_)
```

**Parameters:**

- `p_153255_` (`BlockState`)

**Returns:** `private boolean`

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316871_, BlockState p_316305_, Level p_316763_, BlockPos p_316504_, Player p_316364_, InteractionHand p_316507_, BlockHitResult p_316760_)
```

**Parameters:**

- `p_316871_` (`ItemStack`)
- `p_316305_` (`BlockState`)
- `p_316763_` (`Level`)
- `p_316504_` (`BlockPos`)
- `p_316364_` (`Player`)
- `p_316507_` (`InteractionHand`)
- `p_316760_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_316111_, Level p_316725_, BlockPos p_316646_, Player p_316453_, BlockHitResult p_316769_)
```

**Parameters:**

- `p_316111_` (`BlockState`)
- `p_316725_` (`Level`)
- `p_316646_` (`BlockPos`)
- `p_316453_` (`Player`)
- `p_316769_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_53304_)
```

**Parameters:**

- `p_53304_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_53323_, Direction p_53324_, BlockState p_53325_, LevelAccessor p_53326_, BlockPos p_53327_, BlockPos p_53328_)
```

**Parameters:**

- `p_53323_` (`BlockState`)
- `p_53324_` (`Direction`)
- `p_53325_` (`BlockState`)
- `p_53326_` (`LevelAccessor`)
- `p_53327_` (`BlockPos`)
- `p_53328_` (`BlockPos`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_53334_)
```

**Parameters:**

- `p_53334_` (`StateDefinition.Builder<Block, BlockState>`)
