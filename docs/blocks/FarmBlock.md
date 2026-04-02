# FarmBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FarmBlock>` |  |
| `MOISTURE` | `IntegerProperty` |  |
| `SHAPE` | `VoxelShape` |  |
| `MAX_MOISTURE` | `int` |  |

## Methods

### codec

```java
public MapCodec<FarmBlock> codec()
```

**Returns:** `MapCodec<FarmBlock>`

### FarmBlock

```java
public FarmBlock(BlockBehaviour.Properties p_53247_)
```

**Parameters:**

- `p_53247_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### updateShape

```java
protected BlockState updateShape(BlockState p_53276_, Direction p_53277_, BlockState p_53278_, LevelAccessor p_53279_, BlockPos p_53280_, BlockPos p_53281_)
```

**Parameters:**

- `p_53276_` (`BlockState`)
- `p_53277_` (`Direction`)
- `p_53278_` (`BlockState`)
- `p_53279_` (`LevelAccessor`)
- `p_53280_` (`BlockPos`)
- `p_53281_` (`BlockPos`)

**Returns:** `BlockState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_53272_, LevelReader p_53273_, BlockPos p_53274_)
```

**Parameters:**

- `p_53272_` (`BlockState`)
- `p_53273_` (`LevelReader`)
- `p_53274_` (`BlockPos`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_53249_)
```

**Parameters:**

- `p_53249_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### useShapeForLightOcclusion

```java
protected boolean useShapeForLightOcclusion(BlockState p_53295_)
```

**Parameters:**

- `p_53295_` (`BlockState`)

**Returns:** `boolean`

### getShape

```java
protected VoxelShape getShape(BlockState p_53290_, BlockGetter p_53291_, BlockPos p_53292_, CollisionContext p_53293_)
```

**Parameters:**

- `p_53290_` (`BlockState`)
- `p_53291_` (`BlockGetter`)
- `p_53292_` (`BlockPos`)
- `p_53293_` (`CollisionContext`)

**Returns:** `VoxelShape`

### tick

```java
protected void tick(BlockState p_221134_, ServerLevel p_221135_, BlockPos p_221136_, RandomSource p_221137_)
```

**Parameters:**

- `p_221134_` (`BlockState`)
- `p_221135_` (`ServerLevel`)
- `p_221136_` (`BlockPos`)
- `p_221137_` (`RandomSource`)

### turnToDirt

```java
 turnToDirt()
```

**Returns:** ``

### randomTick

```java
protected void randomTick(BlockState p_221139_, ServerLevel p_221140_, BlockPos p_221141_, RandomSource p_221142_)
```

**Parameters:**

- `p_221139_` (`BlockState`)
- `p_221140_` (`ServerLevel`)
- `p_221141_` (`BlockPos`)
- `p_221142_` (`RandomSource`)

### turnToDirt

```java
 turnToDirt()
```

**Returns:** ``

### fallOn

```java
public void fallOn(Level p_153227_, BlockState p_153228_, BlockPos p_153229_, Entity p_153230_, float p_153231_)
```

**Parameters:**

- `p_153227_` (`Level`)
- `p_153228_` (`BlockState`)
- `p_153229_` (`BlockPos`)
- `p_153230_` (`Entity`)
- `p_153231_` (`float`)

### turnToDirt

```java
canTrample turnToDirt()
```

**Returns:** `canTrample`

### turnToDirt

```java
public static void turnToDirt(Entity p_270981_, BlockState p_270402_, Level p_270568_, BlockPos p_270551_)
```

**Parameters:**

- `p_270981_` (`Entity`)
- `p_270402_` (`BlockState`)
- `p_270568_` (`Level`)
- `p_270551_` (`BlockPos`)

**Returns:** `public static void`

### shouldMaintainFarmland

```java
private static boolean shouldMaintainFarmland(BlockGetter p_279219_, BlockPos p_279209_)
```

**Parameters:**

- `p_279219_` (`BlockGetter`)
- `p_279209_` (`BlockPos`)

**Returns:** `private static boolean`

### isNearWater

```java
private static boolean isNearWater(LevelReader p_53259_, BlockPos p_53260_)
```

**Parameters:**

- `p_53259_` (`LevelReader`)
- `p_53260_` (`BlockPos`)

**Returns:** `private static boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_53283_)
```

**Parameters:**

- `p_53283_` (`StateDefinition.Builder<Block, BlockState>`)

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_53267_, PathComputationType p_53270_)
```

**Parameters:**

- `p_53267_` (`BlockState`)
- `p_53270_` (`PathComputationType`)

**Returns:** `boolean`
