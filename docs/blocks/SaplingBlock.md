# SaplingBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SaplingBlock>` |  |
| `STAGE` | `IntegerProperty` |  |
| `AABB_OFFSET` | `float` |  |
| `SHAPE` | `VoxelShape` |  |
| `treeGrower` | `TreeGrower` |  |

## Methods

### codec

```java
public MapCodec<? extends SaplingBlock> codec()
```

**Returns:** `MapCodec<? extends SaplingBlock>`

### SaplingBlock

```java
public SaplingBlock(TreeGrower p_304782_, BlockBehaviour.Properties p_55979_)
```

**Parameters:**

- `p_304782_` (`TreeGrower`)
- `p_55979_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_56008_, BlockGetter p_56009_, BlockPos p_56010_, CollisionContext p_56011_)
```

**Parameters:**

- `p_56008_` (`BlockState`)
- `p_56009_` (`BlockGetter`)
- `p_56010_` (`BlockPos`)
- `p_56011_` (`CollisionContext`)

**Returns:** `VoxelShape`

### randomTick

```java
protected void randomTick(BlockState p_222011_, ServerLevel p_222012_, BlockPos p_222013_, RandomSource p_222014_)
```

**Parameters:**

- `p_222011_` (`BlockState`)
- `p_222012_` (`ServerLevel`)
- `p_222013_` (`BlockPos`)
- `p_222014_` (`RandomSource`)

### advanceTree

```java
public void advanceTree(ServerLevel p_222001_, BlockPos p_222002_, BlockState p_222003_, RandomSource p_222004_)
```

**Parameters:**

- `p_222001_` (`ServerLevel`)
- `p_222002_` (`BlockPos`)
- `p_222003_` (`BlockState`)
- `p_222004_` (`RandomSource`)

**Returns:** `public void`

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256124_, BlockPos p_55992_, BlockState p_55993_)
```

**Parameters:**

- `p_256124_` (`LevelReader`)
- `p_55992_` (`BlockPos`)
- `p_55993_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_222006_, RandomSource p_222007_, BlockPos p_222008_, BlockState p_222009_)
```

**Parameters:**

- `p_222006_` (`Level`)
- `p_222007_` (`RandomSource`)
- `p_222008_` (`BlockPos`)
- `p_222009_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_221996_, RandomSource p_221997_, BlockPos p_221998_, BlockState p_221999_)
```

**Parameters:**

- `p_221996_` (`ServerLevel`)
- `p_221997_` (`RandomSource`)
- `p_221998_` (`BlockPos`)
- `p_221999_` (`BlockState`)

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_56001_)
```

**Parameters:**

- `p_56001_` (`StateDefinition.Builder<Block, BlockState>`)
