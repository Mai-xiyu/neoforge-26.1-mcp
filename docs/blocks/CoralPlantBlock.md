# CoralPlantBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseCoralPlantTypeBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CoralPlantBlock>` |  |
| `AABB_OFFSET` | `float` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<CoralPlantBlock> codec()
```

**Returns:** `MapCodec<CoralPlantBlock>`

### CoralPlantBlock

```java
public CoralPlantBlock(Block p_52175_, BlockBehaviour.Properties p_52176_)
```

**Parameters:**

- `p_52175_` (`Block`)
- `p_52176_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### onPlace

```java
protected void onPlace(BlockState p_52195_, Level p_52196_, BlockPos p_52197_, BlockState p_52198_, boolean p_52199_)
```

**Parameters:**

- `p_52195_` (`BlockState`)
- `p_52196_` (`Level`)
- `p_52197_` (`BlockPos`)
- `p_52198_` (`BlockState`)
- `p_52199_` (`boolean`)

### tick

```java
protected void tick(BlockState p_221030_, ServerLevel p_221031_, BlockPos p_221032_, RandomSource p_221033_)
```

**Parameters:**

- `p_221030_` (`BlockState`)
- `p_221031_` (`ServerLevel`)
- `p_221032_` (`BlockPos`)
- `p_221033_` (`RandomSource`)

### updateShape

```java
protected BlockState updateShape(BlockState p_52183_, Direction p_52184_, BlockState p_52185_, LevelAccessor p_52186_, BlockPos p_52187_, BlockPos p_52188_)
```

**Parameters:**

- `p_52183_` (`BlockState`)
- `p_52184_` (`Direction`)
- `p_52185_` (`BlockState`)
- `p_52186_` (`LevelAccessor`)
- `p_52187_` (`BlockPos`)
- `p_52188_` (`BlockPos`)

**Returns:** `BlockState`

### getShape

```java
protected VoxelShape getShape(BlockState p_52190_, BlockGetter p_52191_, BlockPos p_52192_, CollisionContext p_52193_)
```

**Parameters:**

- `p_52190_` (`BlockState`)
- `p_52191_` (`BlockGetter`)
- `p_52192_` (`BlockPos`)
- `p_52193_` (`CollisionContext`)

**Returns:** `VoxelShape`
