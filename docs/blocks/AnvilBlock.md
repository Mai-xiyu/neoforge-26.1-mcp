# AnvilBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `FallingBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<AnvilBlock>` |  |
| `FACING` | `DirectionProperty` |  |

## Methods

### codec

```java
public MapCodec<AnvilBlock> codec()
```

**Returns:** `MapCodec<AnvilBlock>`

### AnvilBlock

```java
public AnvilBlock(BlockBehaviour.Properties p_48777_)
```

**Parameters:**

- `p_48777_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_48781_)
```

**Parameters:**

- `p_48781_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_48804_, Level p_48805_, BlockPos p_48806_, Player p_48807_, BlockHitResult p_48809_)
```

**Parameters:**

- `p_48804_` (`BlockState`)
- `p_48805_` (`Level`)
- `p_48806_` (`BlockPos`)
- `p_48807_` (`Player`)
- `p_48809_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### getMenuProvider

```java
protected MenuProvider getMenuProvider(BlockState p_48821_, Level p_48822_, BlockPos p_48823_)
```

**Parameters:**

- `p_48821_` (`BlockState`)
- `p_48822_` (`Level`)
- `p_48823_` (`BlockPos`)

**Returns:** `MenuProvider`

### getShape

```java
protected VoxelShape getShape(BlockState p_48816_, BlockGetter p_48817_, BlockPos p_48818_, CollisionContext p_48819_)
```

**Parameters:**

- `p_48816_` (`BlockState`)
- `p_48817_` (`BlockGetter`)
- `p_48818_` (`BlockPos`)
- `p_48819_` (`CollisionContext`)

**Returns:** `VoxelShape`

### falling

```java
protected void falling(FallingBlockEntity p_48779_)
```

**Parameters:**

- `p_48779_` (`FallingBlockEntity`)

### onLand

```java
public void onLand(Level p_48793_, BlockPos p_48794_, BlockState p_48795_, BlockState p_48796_, FallingBlockEntity p_48797_)
```

**Parameters:**

- `p_48793_` (`Level`)
- `p_48794_` (`BlockPos`)
- `p_48795_` (`BlockState`)
- `p_48796_` (`BlockState`)
- `p_48797_` (`FallingBlockEntity`)

### onBrokenAfterFall

```java
public void onBrokenAfterFall(Level p_152053_, BlockPos p_152054_, FallingBlockEntity p_152055_)
```

**Parameters:**

- `p_152053_` (`Level`)
- `p_152054_` (`BlockPos`)
- `p_152055_` (`FallingBlockEntity`)

### getFallDamageSource

```java
public DamageSource getFallDamageSource(Entity p_254036_)
```

**Parameters:**

- `p_254036_` (`Entity`)

**Returns:** `DamageSource`

### damage

```java
public static BlockState damage(BlockState p_48825_)
```

**Parameters:**

- `p_48825_` (`BlockState`)

**Returns:** `BlockState`

### rotate

```java
protected BlockState rotate(BlockState p_48811_, Rotation p_48812_)
```

**Parameters:**

- `p_48811_` (`BlockState`)
- `p_48812_` (`Rotation`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_48814_)
```

**Parameters:**

- `p_48814_` (`StateDefinition.Builder<Block, BlockState>`)

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_48799_, PathComputationType p_48802_)
```

**Parameters:**

- `p_48799_` (`BlockState`)
- `p_48802_` (`PathComputationType`)

**Returns:** `boolean`

### getDustColor

```java
public int getDustColor(BlockState p_48827_, BlockGetter p_48828_, BlockPos p_48829_)
```

**Parameters:**

- `p_48827_` (`BlockState`)
- `p_48828_` (`BlockGetter`)
- `p_48829_` (`BlockPos`)

**Returns:** `int`
