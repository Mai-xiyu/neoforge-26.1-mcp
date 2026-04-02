# ChorusPlantBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `PipeBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ChorusPlantBlock>` |  |

## Methods

### codec

```java
public MapCodec<ChorusPlantBlock> codec()
```

**Returns:** `MapCodec<ChorusPlantBlock>`

### ChorusPlantBlock

```java
public ChorusPlantBlock(BlockBehaviour.Properties p_51707_)
```

**Parameters:**

- `p_51707_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_51709_)
```

**Parameters:**

- `p_51709_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getStateWithConnections

```java
public static BlockState getStateWithConnections(BlockGetter p_51711_, BlockPos p_51712_, BlockState p_304771_)
```

**Parameters:**

- `p_51711_` (`BlockGetter`)
- `p_51712_` (`BlockPos`)
- `p_304771_` (`BlockState`)

**Returns:** `public static BlockState`

### updateShape

```java
protected BlockState updateShape(BlockState p_51728_, Direction p_51729_, BlockState p_51730_, LevelAccessor p_51731_, BlockPos p_51732_, BlockPos p_51733_)
```

**Parameters:**

- `p_51728_` (`BlockState`)
- `p_51729_` (`Direction`)
- `p_51730_` (`BlockState`)
- `p_51731_` (`LevelAccessor`)
- `p_51732_` (`BlockPos`)
- `p_51733_` (`BlockPos`)

**Returns:** `BlockState`

### tick

```java
protected void tick(BlockState p_220985_, ServerLevel p_220986_, BlockPos p_220987_, RandomSource p_220988_)
```

**Parameters:**

- `p_220985_` (`BlockState`)
- `p_220986_` (`ServerLevel`)
- `p_220987_` (`BlockPos`)
- `p_220988_` (`RandomSource`)

### canSurvive

```java
protected boolean canSurvive(BlockState p_51724_, LevelReader p_51725_, BlockPos p_51726_)
```

**Parameters:**

- `p_51724_` (`BlockState`)
- `p_51725_` (`LevelReader`)
- `p_51726_` (`BlockPos`)

**Returns:** `boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_51735_)
```

**Parameters:**

- `p_51735_` (`StateDefinition.Builder<Block, BlockState>`)

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_51719_, PathComputationType p_51722_)
```

**Parameters:**

- `p_51719_` (`BlockState`)
- `p_51722_` (`PathComputationType`)

**Returns:** `boolean`
