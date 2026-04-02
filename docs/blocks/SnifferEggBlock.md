# SnifferEggBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SnifferEggBlock>` |  |
| `MAX_HATCH_LEVEL` | `int` |  |
| `HATCH` | `IntegerProperty` |  |

## Methods

### codec

```java
public MapCodec<SnifferEggBlock> codec()
```

**Returns:** `MapCodec<SnifferEggBlock>`

### SnifferEggBlock

```java
public SnifferEggBlock(BlockBehaviour.Properties p_277906_)
```

**Parameters:**

- `p_277906_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_277441_)
```

**Parameters:**

- `p_277441_` (`StateDefinition.Builder<Block, BlockState>`)

### getShape

```java
public VoxelShape getShape(BlockState p_277872_, BlockGetter p_278090_, BlockPos p_277364_, CollisionContext p_278016_)
```

**Parameters:**

- `p_277872_` (`BlockState`)
- `p_278090_` (`BlockGetter`)
- `p_277364_` (`BlockPos`)
- `p_278016_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getHatchLevel

```java
public int getHatchLevel(BlockState p_279125_)
```

**Parameters:**

- `p_279125_` (`BlockState`)

**Returns:** `public int`

### isReadyToHatch

```java
private boolean isReadyToHatch(BlockState p_278021_)
```

**Parameters:**

- `p_278021_` (`BlockState`)

**Returns:** `private boolean`

### tick

```java
public void tick(BlockState p_277841_, ServerLevel p_277739_, BlockPos p_277692_, RandomSource p_277973_)
```

**Parameters:**

- `p_277841_` (`BlockState`)
- `p_277739_` (`ServerLevel`)
- `p_277692_` (`BlockPos`)
- `p_277973_` (`RandomSource`)

### onPlace

```java
public void onPlace(BlockState p_277964_, Level p_277827_, BlockPos p_277526_, BlockState p_277618_, boolean p_277819_)
```

**Parameters:**

- `p_277964_` (`BlockState`)
- `p_277827_` (`Level`)
- `p_277526_` (`BlockPos`)
- `p_277618_` (`BlockState`)
- `p_277819_` (`boolean`)

### isPathfindable

```java
public boolean isPathfindable(BlockState p_279414_, PathComputationType p_279299_)
```

**Parameters:**

- `p_279414_` (`BlockState`)
- `p_279299_` (`PathComputationType`)

**Returns:** `boolean`

### hatchBoost

```java
public static boolean hatchBoost(BlockGetter p_277485_, BlockPos p_278065_)
```

**Parameters:**

- `p_277485_` (`BlockGetter`)
- `p_278065_` (`BlockPos`)

**Returns:** `public static boolean`
