# BambooStalkBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BambooStalkBlock>` |  |
| `SMALL_LEAVES_AABB_OFFSET` | `float` |  |
| `LARGE_LEAVES_AABB_OFFSET` | `float` |  |
| `COLLISION_AABB_OFFSET` | `float` |  |
| `SMALL_SHAPE` | `VoxelShape` |  |
| `LARGE_SHAPE` | `VoxelShape` |  |
| `COLLISION_SHAPE` | `VoxelShape` |  |
| `AGE` | `IntegerProperty` |  |
| `LEAVES` | `EnumProperty<BambooLeaves>` |  |
| `STAGE` | `IntegerProperty` |  |
| `MAX_HEIGHT` | `int` |  |
| `STAGE_GROWING` | `int` |  |
| `STAGE_DONE_GROWING` | `int` |  |
| `AGE_THIN_BAMBOO` | `int` |  |
| `AGE_THICK_BAMBOO` | `int` |  |

## Methods

### codec

```java
public MapCodec<BambooStalkBlock> codec()
```

**Returns:** `MapCodec<BambooStalkBlock>`

### BambooStalkBlock

```java
public BambooStalkBlock(BlockBehaviour.Properties p_261753_)
```

**Parameters:**

- `p_261753_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_261641_)
```

**Parameters:**

- `p_261641_` (`StateDefinition.Builder<Block, BlockState>`)

### propagatesSkylightDown

```java
protected boolean propagatesSkylightDown(BlockState p_261479_, BlockGetter p_261942_, BlockPos p_261844_)
```

**Parameters:**

- `p_261479_` (`BlockState`)
- `p_261942_` (`BlockGetter`)
- `p_261844_` (`BlockPos`)

**Returns:** `boolean`

### getShape

```java
protected VoxelShape getShape(BlockState p_261515_, BlockGetter p_261586_, BlockPos p_261526_, CollisionContext p_261930_)
```

**Parameters:**

- `p_261515_` (`BlockState`)
- `p_261586_` (`BlockGetter`)
- `p_261526_` (`BlockPos`)
- `p_261930_` (`CollisionContext`)

**Returns:** `VoxelShape`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_262166_, PathComputationType p_261513_)
```

**Parameters:**

- `p_262166_` (`BlockState`)
- `p_261513_` (`PathComputationType`)

**Returns:** `boolean`

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_261560_, BlockGetter p_261965_, BlockPos p_261950_, CollisionContext p_261571_)
```

**Parameters:**

- `p_261560_` (`BlockState`)
- `p_261965_` (`BlockGetter`)
- `p_261950_` (`BlockPos`)
- `p_261571_` (`CollisionContext`)

**Returns:** `VoxelShape`

### isCollisionShapeFullBlock

```java
protected boolean isCollisionShapeFullBlock(BlockState p_262062_, BlockGetter p_261848_, BlockPos p_261466_)
```

**Parameters:**

- `p_262062_` (`BlockState`)
- `p_261848_` (`BlockGetter`)
- `p_261466_` (`BlockPos`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_261764_)
```

**Parameters:**

- `p_261764_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### tick

```java
protected void tick(BlockState p_261612_, ServerLevel p_261527_, BlockPos p_261846_, RandomSource p_261638_)
```

**Parameters:**

- `p_261612_` (`BlockState`)
- `p_261527_` (`ServerLevel`)
- `p_261846_` (`BlockPos`)
- `p_261638_` (`RandomSource`)

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_262083_)
```

**Parameters:**

- `p_262083_` (`BlockState`)

**Returns:** `boolean`

### randomTick

```java
protected void randomTick(BlockState p_261931_, ServerLevel p_261751_, BlockPos p_261616_, RandomSource p_261766_)
```

**Parameters:**

- `p_261931_` (`BlockState`)
- `p_261751_` (`ServerLevel`)
- `p_261616_` (`BlockPos`)
- `p_261766_` (`RandomSource`)

### canSurvive

```java
protected boolean canSurvive(BlockState p_261860_, LevelReader p_262154_, BlockPos p_261493_)
```

**Parameters:**

- `p_261860_` (`BlockState`)
- `p_262154_` (`LevelReader`)
- `p_261493_` (`BlockPos`)

**Returns:** `boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_261476_, Direction p_261512_, BlockState p_262167_, LevelAccessor p_261956_, BlockPos p_261876_, BlockPos p_262140_)
```

**Parameters:**

- `p_261476_` (`BlockState`)
- `p_261512_` (`Direction`)
- `p_262167_` (`BlockState`)
- `p_261956_` (`LevelAccessor`)
- `p_261876_` (`BlockPos`)
- `p_262140_` (`BlockPos`)

**Returns:** `BlockState`

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_262065_, BlockPos p_262033_, BlockState p_261700_)
```

**Parameters:**

- `p_262065_` (`LevelReader`)
- `p_262033_` (`BlockPos`)
- `p_261700_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_261870_, RandomSource p_261802_, BlockPos p_262123_, BlockState p_261972_)
```

**Parameters:**

- `p_261870_` (`Level`)
- `p_261802_` (`RandomSource`)
- `p_262123_` (`BlockPos`)
- `p_261972_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_261845_, RandomSource p_262034_, BlockPos p_261955_, BlockState p_261685_)
```

**Parameters:**

- `p_261845_` (`ServerLevel`)
- `p_262034_` (`RandomSource`)
- `p_261955_` (`BlockPos`)
- `p_261685_` (`BlockState`)

### getDestroyProgress

```java
protected float getDestroyProgress(BlockState p_261691_, Player p_262171_, BlockGetter p_261621_, BlockPos p_261500_)
```

**Parameters:**

- `p_261691_` (`BlockState`)
- `p_262171_` (`Player`)
- `p_261621_` (`BlockGetter`)
- `p_261500_` (`BlockPos`)

**Returns:** `float`

### growBamboo

```java
protected void growBamboo(BlockState p_261855_, Level p_262076_, BlockPos p_262109_, RandomSource p_261633_, int p_261759_)
```

**Parameters:**

- `p_261855_` (`BlockState`)
- `p_262076_` (`Level`)
- `p_262109_` (`BlockPos`)
- `p_261633_` (`RandomSource`)
- `p_261759_` (`int`)

**Returns:** `protected void`

### getHeightAboveUpToMax

```java
protected int getHeightAboveUpToMax(BlockGetter p_261541_, BlockPos p_261593_)
```

**Parameters:**

- `p_261541_` (`BlockGetter`)
- `p_261593_` (`BlockPos`)

**Returns:** `protected int`

### getHeightBelowUpToMax

```java
protected int getHeightBelowUpToMax(BlockGetter p_261927_, BlockPos p_261481_)
```

**Parameters:**

- `p_261927_` (`BlockGetter`)
- `p_261481_` (`BlockPos`)

**Returns:** `protected int`
