# CoralBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEAD_CORAL_FIELD` | `MapCodec<Block>` |  |
| `CODEC` | `MapCodec<CoralBlock>` |  |

## Methods

### CoralBlock

```java
public CoralBlock(Block p_52130_, BlockBehaviour.Properties p_52131_)
```

**Parameters:**

- `p_52130_` (`Block`)
- `p_52131_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### codec

```java
public MapCodec<CoralBlock> codec()
```

**Returns:** `MapCodec<CoralBlock>`

### tick

```java
protected void tick(BlockState p_221020_, ServerLevel p_221021_, BlockPos p_221022_, RandomSource p_221023_)
```

**Parameters:**

- `p_221020_` (`BlockState`)
- `p_221021_` (`ServerLevel`)
- `p_221022_` (`BlockPos`)
- `p_221023_` (`RandomSource`)

### updateShape

```java
protected BlockState updateShape(BlockState p_52143_, Direction p_52144_, BlockState p_52145_, LevelAccessor p_52146_, BlockPos p_52147_, BlockPos p_52148_)
```

**Parameters:**

- `p_52143_` (`BlockState`)
- `p_52144_` (`Direction`)
- `p_52145_` (`BlockState`)
- `p_52146_` (`LevelAccessor`)
- `p_52147_` (`BlockPos`)
- `p_52148_` (`BlockPos`)

**Returns:** `BlockState`

### scanForWater

```java
protected boolean scanForWater(BlockGetter p_52135_, BlockPos p_52136_)
```

**Parameters:**

- `p_52135_` (`BlockGetter`)
- `p_52136_` (`BlockPos`)

**Returns:** `protected boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_52133_)
```

**Parameters:**

- `p_52133_` (`BlockPlaceContext`)

**Returns:** `BlockState`
