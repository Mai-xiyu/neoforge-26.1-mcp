# BrushableBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`
**Implements:** `Fallable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BrushableBlock>` |  |
| `TICK_DELAY` | `int` |  |

## Methods

### codec

```java
public MapCodec<BrushableBlock> codec()
```

**Returns:** `MapCodec<BrushableBlock>`

### BrushableBlock

```java
public BrushableBlock(Block p_277629_, SoundEvent p_278060_, SoundEvent p_277352_, BlockBehaviour.Properties p_277373_)
```

**Parameters:**

- `p_277629_` (`Block`)
- `p_278060_` (`SoundEvent`)
- `p_277352_` (`SoundEvent`)
- `p_277373_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_277623_)
```

**Parameters:**

- `p_277623_` (`StateDefinition.Builder<Block, BlockState>`)

### getRenderShape

```java
public RenderShape getRenderShape(BlockState p_277553_)
```

**Parameters:**

- `p_277553_` (`BlockState`)

**Returns:** `RenderShape`

### onPlace

```java
public void onPlace(BlockState p_277817_, Level p_277984_, BlockPos p_277869_, BlockState p_277926_, boolean p_277736_)
```

**Parameters:**

- `p_277817_` (`BlockState`)
- `p_277984_` (`Level`)
- `p_277869_` (`BlockPos`)
- `p_277926_` (`BlockState`)
- `p_277736_` (`boolean`)

### updateShape

```java
public BlockState updateShape(BlockState p_277801_, Direction p_277455_, BlockState p_277832_, LevelAccessor p_277473_, BlockPos p_278111_, BlockPos p_277904_)
```

**Parameters:**

- `p_277801_` (`BlockState`)
- `p_277455_` (`Direction`)
- `p_277832_` (`BlockState`)
- `p_277473_` (`LevelAccessor`)
- `p_278111_` (`BlockPos`)
- `p_277904_` (`BlockPos`)

**Returns:** `BlockState`

### tick

```java
public void tick(BlockState p_277544_, ServerLevel p_277779_, BlockPos p_278019_, RandomSource p_277471_)
```

**Parameters:**

- `p_277544_` (`BlockState`)
- `p_277779_` (`ServerLevel`)
- `p_278019_` (`BlockPos`)
- `p_277471_` (`RandomSource`)

### onBrokenAfterFall

```java
public void onBrokenAfterFall(Level p_278097_, BlockPos p_277734_, FallingBlockEntity p_277539_)
```

**Parameters:**

- `p_278097_` (`Level`)
- `p_277734_` (`BlockPos`)
- `p_277539_` (`FallingBlockEntity`)

### animateTick

```java
public void animateTick(BlockState p_277390_, Level p_277525_, BlockPos p_278107_, RandomSource p_277574_)
```

**Parameters:**

- `p_277390_` (`BlockState`)
- `p_277525_` (`Level`)
- `p_278107_` (`BlockPos`)
- `p_277574_` (`RandomSource`)

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_277683_, BlockState p_277381_)
```

**Parameters:**

- `p_277683_` (`BlockPos`)
- `p_277381_` (`BlockState`)

**Returns:** `BlockEntity`

### BrushableBlockEntity

```java
return new BrushableBlockEntity()
```

**Returns:** `return new`

### getTurnsInto

```java
public Block getTurnsInto()
```

**Returns:** `public Block`

### getBrushSound

```java
public SoundEvent getBrushSound()
```

**Returns:** `public SoundEvent`

### getBrushCompletedSound

```java
public SoundEvent getBrushCompletedSound()
```

**Returns:** `public SoundEvent`
