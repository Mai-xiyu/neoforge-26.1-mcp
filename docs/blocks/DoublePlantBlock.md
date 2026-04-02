# DoublePlantBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DoublePlantBlock>` |  |
| `HALF` | `EnumProperty<DoubleBlockHalf>` |  |

## Methods

### codec

```java
public MapCodec<? extends DoublePlantBlock> codec()
```

**Returns:** `MapCodec<? extends DoublePlantBlock>`

### DoublePlantBlock

```java
public DoublePlantBlock(BlockBehaviour.Properties p_52861_)
```

**Parameters:**

- `p_52861_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### updateShape

```java
protected BlockState updateShape(BlockState p_52894_, Direction p_52895_, BlockState p_52896_, LevelAccessor p_52897_, BlockPos p_52898_, BlockPos p_52899_)
```

**Parameters:**

- `p_52894_` (`BlockState`)
- `p_52895_` (`Direction`)
- `p_52896_` (`BlockState`)
- `p_52897_` (`LevelAccessor`)
- `p_52898_` (`BlockPos`)
- `p_52899_` (`BlockPos`)

**Returns:** `BlockState`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_52863_)
```

**Parameters:**

- `p_52863_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### setPlacedBy

```java
public void setPlacedBy(Level p_52872_, BlockPos p_52873_, BlockState p_52874_, LivingEntity p_52875_, ItemStack p_52876_)
```

**Parameters:**

- `p_52872_` (`Level`)
- `p_52873_` (`BlockPos`)
- `p_52874_` (`BlockState`)
- `p_52875_` (`LivingEntity`)
- `p_52876_` (`ItemStack`)

### canSurvive

```java
protected boolean canSurvive(BlockState p_52887_, LevelReader p_52888_, BlockPos p_52889_)
```

**Parameters:**

- `p_52887_` (`BlockState`)
- `p_52888_` (`LevelReader`)
- `p_52889_` (`BlockPos`)

**Returns:** `boolean`

### placeAt

```java
public static void placeAt(LevelAccessor p_153174_, BlockState p_153175_, BlockPos p_153176_, int p_153177_)
```

**Parameters:**

- `p_153174_` (`LevelAccessor`)
- `p_153175_` (`BlockState`)
- `p_153176_` (`BlockPos`)
- `p_153177_` (`int`)

**Returns:** `public static void`

### copyWaterloggedFrom

```java
public static BlockState copyWaterloggedFrom(LevelReader p_182454_, BlockPos p_182455_, BlockState p_182456_)
```

**Parameters:**

- `p_182454_` (`LevelReader`)
- `p_182455_` (`BlockPos`)
- `p_182456_` (`BlockState`)

**Returns:** `public static BlockState`

### playerWillDestroy

```java
public BlockState playerWillDestroy(Level p_52878_, BlockPos p_52879_, BlockState p_52880_, Player p_52881_)
```

**Parameters:**

- `p_52878_` (`Level`)
- `p_52879_` (`BlockPos`)
- `p_52880_` (`BlockState`)
- `p_52881_` (`Player`)

**Returns:** `BlockState`

### preventDropFromBottomPart

```java
 preventDropFromBottomPart()
```

**Returns:** ``

### playerDestroy

```java
public void playerDestroy(Level p_52865_, Player p_52866_, BlockPos p_52867_, BlockState p_52868_, BlockEntity p_52869_, ItemStack p_52870_)
```

**Parameters:**

- `p_52865_` (`Level`)
- `p_52866_` (`Player`)
- `p_52867_` (`BlockPos`)
- `p_52868_` (`BlockState`)
- `p_52869_` (`BlockEntity`)
- `p_52870_` (`ItemStack`)

### preventDropFromBottomPart

```java
protected static void preventDropFromBottomPart(Level p_52904_, BlockPos p_52905_, BlockState p_52906_, Player p_52907_)
```

**Parameters:**

- `p_52904_` (`Level`)
- `p_52905_` (`BlockPos`)
- `p_52906_` (`BlockState`)
- `p_52907_` (`Player`)

**Returns:** `protected static void`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_52901_)
```

**Parameters:**

- `p_52901_` (`StateDefinition.Builder<Block, BlockState>`)

### getSeed

```java
protected long getSeed(BlockState p_52891_, BlockPos p_52892_)
```

**Parameters:**

- `p_52891_` (`BlockState`)
- `p_52892_` (`BlockPos`)

**Returns:** `long`
