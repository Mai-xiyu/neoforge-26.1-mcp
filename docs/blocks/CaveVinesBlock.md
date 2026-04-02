# CaveVinesBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `GrowingPlantHeadBlock`
**Implements:** `BonemealableBlock`, `CaveVines`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CaveVinesBlock>` |  |

## Methods

### codec

```java
public MapCodec<CaveVinesBlock> codec()
```

**Returns:** `MapCodec<CaveVinesBlock>`

### CaveVinesBlock

```java
public CaveVinesBlock(BlockBehaviour.Properties p_152959_)
```

**Parameters:**

- `p_152959_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getBlocksToGrowWhenBonemealed

```java
protected int getBlocksToGrowWhenBonemealed(RandomSource p_220928_)
```

**Parameters:**

- `p_220928_` (`RandomSource`)

**Returns:** `int`

### canGrowInto

```java
protected boolean canGrowInto(BlockState p_152998_)
```

**Parameters:**

- `p_152998_` (`BlockState`)

**Returns:** `boolean`

### getBodyBlock

```java
protected Block getBodyBlock()
```

**Returns:** `Block`

### updateBodyAfterConvertedFromHead

```java
protected BlockState updateBodyAfterConvertedFromHead(BlockState p_152987_, BlockState p_152988_)
```

**Parameters:**

- `p_152987_` (`BlockState`)
- `p_152988_` (`BlockState`)

**Returns:** `BlockState`

### getGrowIntoState

```java
protected BlockState getGrowIntoState(BlockState p_220935_, RandomSource p_220936_)
```

**Parameters:**

- `p_220935_` (`BlockState`)
- `p_220936_` (`RandomSource`)

**Returns:** `BlockState`

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304590_, BlockPos p_152967_, BlockState p_152968_)
```

**Parameters:**

- `p_304590_` (`LevelReader`)
- `p_152967_` (`BlockPos`)
- `p_152968_` (`BlockState`)

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_152980_, Level p_152981_, BlockPos p_152982_, Player p_152983_, BlockHitResult p_152985_)
```

**Parameters:**

- `p_152980_` (`BlockState`)
- `p_152981_` (`Level`)
- `p_152982_` (`BlockPos`)
- `p_152983_` (`Player`)
- `p_152985_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_152993_)
```

**Parameters:**

- `p_152993_` (`StateDefinition.Builder<Block, BlockState>`)

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256026_, BlockPos p_152971_, BlockState p_152972_)
```

**Parameters:**

- `p_256026_` (`LevelReader`)
- `p_152971_` (`BlockPos`)
- `p_152972_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_220930_, RandomSource p_220931_, BlockPos p_220932_, BlockState p_220933_)
```

**Parameters:**

- `p_220930_` (`Level`)
- `p_220931_` (`RandomSource`)
- `p_220932_` (`BlockPos`)
- `p_220933_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_220923_, RandomSource p_220924_, BlockPos p_220925_, BlockState p_220926_)
```

**Parameters:**

- `p_220923_` (`ServerLevel`)
- `p_220924_` (`RandomSource`)
- `p_220925_` (`BlockPos`)
- `p_220926_` (`BlockState`)
