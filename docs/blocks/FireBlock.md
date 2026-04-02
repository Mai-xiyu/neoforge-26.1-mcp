# FireBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseFireBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FireBlock>` |  |
| `MAX_AGE` | `int` |  |
| `AGE` | `IntegerProperty` |  |
| `NORTH` | `BooleanProperty` |  |
| `EAST` | `BooleanProperty` |  |
| `SOUTH` | `BooleanProperty` |  |
| `WEST` | `BooleanProperty` |  |
| `UP` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<FireBlock> codec()
```

**Returns:** `MapCodec<FireBlock>`

### FireBlock

```java
public FireBlock(BlockBehaviour.Properties p_53425_)
```

**Parameters:**

- `p_53425_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### calculateShape

```java
private static VoxelShape calculateShape(BlockState p_53491_)
```

**Parameters:**

- `p_53491_` (`BlockState`)

**Returns:** `private static VoxelShape`

### updateShape

```java
protected BlockState updateShape(BlockState p_53458_, Direction p_53459_, BlockState p_53460_, LevelAccessor p_53461_, BlockPos p_53462_, BlockPos p_53463_)
```

**Parameters:**

- `p_53458_` (`BlockState`)
- `p_53459_` (`Direction`)
- `p_53460_` (`BlockState`)
- `p_53461_` (`LevelAccessor`)
- `p_53462_` (`BlockPos`)
- `p_53463_` (`BlockPos`)

**Returns:** `BlockState`

### getShape

```java
protected VoxelShape getShape(BlockState p_53474_, BlockGetter p_53475_, BlockPos p_53476_, CollisionContext p_53477_)
```

**Parameters:**

- `p_53474_` (`BlockState`)
- `p_53475_` (`BlockGetter`)
- `p_53476_` (`BlockPos`)
- `p_53477_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_53427_)
```

**Parameters:**

- `p_53427_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getStateForPlacement

```java
protected BlockState getStateForPlacement(BlockGetter p_53471_, BlockPos p_53472_)
```

**Parameters:**

- `p_53471_` (`BlockGetter`)
- `p_53472_` (`BlockPos`)

**Returns:** `protected BlockState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_53454_, LevelReader p_53455_, BlockPos p_53456_)
```

**Parameters:**

- `p_53454_` (`BlockState`)
- `p_53455_` (`LevelReader`)
- `p_53456_` (`BlockPos`)

**Returns:** `boolean`

### tick

```java
protected void tick(BlockState p_221160_, ServerLevel p_221161_, BlockPos p_221162_, RandomSource p_221163_)
```

**Parameters:**

- `p_221160_` (`BlockState`)
- `p_221161_` (`ServerLevel`)
- `p_221162_` (`BlockPos`)
- `p_221163_` (`RandomSource`)

### isNearRain

```java
protected boolean isNearRain(Level p_53429_, BlockPos p_53430_)
```

**Parameters:**

- `p_53429_` (`Level`)
- `p_53430_` (`BlockPos`)

**Returns:** `protected boolean`

### getBurnOdds ⚠️ *Deprecated*

```java
Use IForgeBlockState.getFlammability, Public for default implementation only.
    public int getBurnOdds(BlockState p_221165_)
```

**Parameters:**

- `p_221165_` (`BlockState`)

**Returns:** `Use IForgeBlockState.getFlammability, Public for default implementation only.
    public int`

### getIgniteOdds ⚠️ *Deprecated*

```java
Use IForgeBlockState.getFireSpreadSpeed
    public int getIgniteOdds(BlockState p_221167_)
```

**Parameters:**

- `p_221167_` (`BlockState`)

**Returns:** `Use IForgeBlockState.getFireSpreadSpeed
    public int`

### checkBurnOut

```java
private void checkBurnOut(Level p_221151_, BlockPos p_221152_, int p_221153_, RandomSource p_221154_, int p_221155_, Direction face)
```

**Parameters:**

- `p_221151_` (`Level`)
- `p_221152_` (`BlockPos`)
- `p_221153_` (`int`)
- `p_221154_` (`RandomSource`)
- `p_221155_` (`int`)
- `face` (`Direction`)

**Returns:** `private void`

### getStateWithAge

```java
private BlockState getStateWithAge(LevelAccessor p_53438_, BlockPos p_53439_, int p_53440_)
```

**Parameters:**

- `p_53438_` (`LevelAccessor`)
- `p_53439_` (`BlockPos`)
- `p_53440_` (`int`)

**Returns:** `private BlockState`

### isValidFireLocation

```java
private boolean isValidFireLocation(BlockGetter p_53486_, BlockPos p_53487_)
```

**Parameters:**

- `p_53486_` (`BlockGetter`)
- `p_53487_` (`BlockPos`)

**Returns:** `private boolean`

### getIgniteOdds

```java
private int getIgniteOdds(LevelReader p_221157_, BlockPos p_221158_)
```

**Parameters:**

- `p_221157_` (`LevelReader`)
- `p_221158_` (`BlockPos`)

**Returns:** `private int`

### canBurn ⚠️ *Deprecated*

```java
Use canCatchFire with more context
    protected boolean canBurn(BlockState p_53489_)
```

**Parameters:**

- `p_53489_` (`BlockState`)

**Returns:** `Use canCatchFire with more context
    protected boolean`

### onPlace

```java
protected void onPlace(BlockState p_53479_, Level p_53480_, BlockPos p_53481_, BlockState p_53482_, boolean p_53483_)
```

**Parameters:**

- `p_53479_` (`BlockState`)
- `p_53480_` (`Level`)
- `p_53481_` (`BlockPos`)
- `p_53482_` (`BlockState`)
- `p_53483_` (`boolean`)

### getFireTickDelay

```java
private static int getFireTickDelay(RandomSource p_221149_)
```

**Parameters:**

- `p_221149_` (`RandomSource`)

**Returns:** `private static int`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_53465_)
```

**Parameters:**

- `p_53465_` (`StateDefinition.Builder<Block, BlockState>`)

### setFlammable

```java
public void setFlammable(Block p_53445_, int p_53446_, int p_53447_)
```

**Parameters:**

- `p_53445_` (`Block`)
- `p_53446_` (`int`)
- `p_53447_` (`int`)

**Returns:** `public void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Tried to set air on fire[] This is... bad.")
```

**Parameters:**

- `bad."` (`"Tried to set air on fire[] This is...`)

**Returns:** `throw new`

### canCatchFire

```java
public boolean canCatchFire(BlockGetter world, BlockPos pos, Direction face)
```

**Parameters:**

- `world` (`BlockGetter`)
- `pos` (`BlockPos`)
- `face` (`Direction`)

**Returns:** `boolean`

### bootStrap

```java
public static void bootStrap()
```

**Returns:** `public static void`
