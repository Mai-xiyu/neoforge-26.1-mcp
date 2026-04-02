# ObserverBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `DirectionalBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ObserverBlock>` |  |
| `POWERED` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<ObserverBlock> codec()
```

**Returns:** `MapCodec<ObserverBlock>`

### ObserverBlock

```java
public ObserverBlock(BlockBehaviour.Properties p_55085_)
```

**Parameters:**

- `p_55085_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_55125_)
```

**Parameters:**

- `p_55125_` (`StateDefinition.Builder<Block, BlockState>`)

### rotate

```java
protected BlockState rotate(BlockState p_55115_, Rotation p_55116_)
```

**Parameters:**

- `p_55115_` (`BlockState`)
- `p_55116_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_55112_, Mirror p_55113_)
```

**Parameters:**

- `p_55112_` (`BlockState`)
- `p_55113_` (`Mirror`)

**Returns:** `BlockState`

### tick

```java
protected void tick(BlockState p_221840_, ServerLevel p_221841_, BlockPos p_221842_, RandomSource p_221843_)
```

**Parameters:**

- `p_221840_` (`BlockState`)
- `p_221841_` (`ServerLevel`)
- `p_221842_` (`BlockPos`)
- `p_221843_` (`RandomSource`)

### updateShape

```java
protected BlockState updateShape(BlockState p_55118_, Direction p_55119_, BlockState p_55120_, LevelAccessor p_55121_, BlockPos p_55122_, BlockPos p_55123_)
```

**Parameters:**

- `p_55118_` (`BlockState`)
- `p_55119_` (`Direction`)
- `p_55120_` (`BlockState`)
- `p_55121_` (`LevelAccessor`)
- `p_55122_` (`BlockPos`)
- `p_55123_` (`BlockPos`)

**Returns:** `BlockState`

### startSignal

```java
private void startSignal(LevelAccessor p_55093_, BlockPos p_55094_)
```

**Parameters:**

- `p_55093_` (`LevelAccessor`)
- `p_55094_` (`BlockPos`)

**Returns:** `private void`

### updateNeighborsInFront

```java
protected void updateNeighborsInFront(Level p_55089_, BlockPos p_55090_, BlockState p_55091_)
```

**Parameters:**

- `p_55089_` (`Level`)
- `p_55090_` (`BlockPos`)
- `p_55091_` (`BlockState`)

**Returns:** `protected void`

### isSignalSource

```java
protected boolean isSignalSource(BlockState p_55138_)
```

**Parameters:**

- `p_55138_` (`BlockState`)

**Returns:** `boolean`

### getDirectSignal

```java
protected int getDirectSignal(BlockState p_55127_, BlockGetter p_55128_, BlockPos p_55129_, Direction p_55130_)
```

**Parameters:**

- `p_55127_` (`BlockState`)
- `p_55128_` (`BlockGetter`)
- `p_55129_` (`BlockPos`)
- `p_55130_` (`Direction`)

**Returns:** `int`

### getSignal

```java
protected int getSignal(BlockState p_55101_, BlockGetter p_55102_, BlockPos p_55103_, Direction p_55104_)
```

**Parameters:**

- `p_55101_` (`BlockState`)
- `p_55102_` (`BlockGetter`)
- `p_55103_` (`BlockPos`)
- `p_55104_` (`Direction`)

**Returns:** `int`

### onPlace

```java
protected void onPlace(BlockState p_55132_, Level p_55133_, BlockPos p_55134_, BlockState p_55135_, boolean p_55136_)
```

**Parameters:**

- `p_55132_` (`BlockState`)
- `p_55133_` (`Level`)
- `p_55134_` (`BlockPos`)
- `p_55135_` (`BlockState`)
- `p_55136_` (`boolean`)

### onRemove

```java
protected void onRemove(BlockState p_55106_, Level p_55107_, BlockPos p_55108_, BlockState p_55109_, boolean p_55110_)
```

**Parameters:**

- `p_55106_` (`BlockState`)
- `p_55107_` (`Level`)
- `p_55108_` (`BlockPos`)
- `p_55109_` (`BlockState`)
- `p_55110_` (`boolean`)

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_55087_)
```

**Parameters:**

- `p_55087_` (`BlockPlaceContext`)

**Returns:** `BlockState`
