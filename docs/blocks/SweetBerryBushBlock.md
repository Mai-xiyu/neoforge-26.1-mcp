# SweetBerryBushBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SweetBerryBushBlock>` |  |
| `MAX_AGE` | `int` |  |
| `AGE` | `IntegerProperty` |  |

## Methods

### codec

```java
public MapCodec<SweetBerryBushBlock> codec()
```

**Returns:** `MapCodec<SweetBerryBushBlock>`

### SweetBerryBushBlock

```java
public SweetBerryBushBlock(BlockBehaviour.Properties p_57249_)
```

**Parameters:**

- `p_57249_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304655_, BlockPos p_57257_, BlockState p_57258_)
```

**Parameters:**

- `p_304655_` (`LevelReader`)
- `p_57257_` (`BlockPos`)
- `p_57258_` (`BlockState`)

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### getShape

```java
protected VoxelShape getShape(BlockState p_57291_, BlockGetter p_57292_, BlockPos p_57293_, CollisionContext p_57294_)
```

**Parameters:**

- `p_57291_` (`BlockState`)
- `p_57292_` (`BlockGetter`)
- `p_57293_` (`BlockPos`)
- `p_57294_` (`CollisionContext`)

**Returns:** `VoxelShape`

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_57284_)
```

**Parameters:**

- `p_57284_` (`BlockState`)

**Returns:** `boolean`

### randomTick

```java
protected void randomTick(BlockState p_222563_, ServerLevel p_222564_, BlockPos p_222565_, RandomSource p_222566_)
```

**Parameters:**

- `p_222563_` (`BlockState`)
- `p_222564_` (`ServerLevel`)
- `p_222565_` (`BlockPos`)
- `p_222566_` (`RandomSource`)

### entityInside

```java
protected void entityInside(BlockState p_57270_, Level p_57271_, BlockPos p_57272_, Entity p_57273_)
```

**Parameters:**

- `p_57270_` (`BlockState`)
- `p_57271_` (`Level`)
- `p_57272_` (`BlockPos`)
- `p_57273_` (`Entity`)

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316636_, BlockState p_316295_, Level p_316812_, BlockPos p_316380_, Player p_316731_, InteractionHand p_316188_, BlockHitResult p_316626_)
```

**Parameters:**

- `p_316636_` (`ItemStack`)
- `p_316295_` (`BlockState`)
- `p_316812_` (`Level`)
- `p_316380_` (`BlockPos`)
- `p_316731_` (`Player`)
- `p_316188_` (`InteractionHand`)
- `p_316626_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_316134_, Level p_316429_, BlockPos p_316748_, Player p_316431_, BlockHitResult p_316474_)
```

**Parameters:**

- `p_316134_` (`BlockState`)
- `p_316429_` (`Level`)
- `p_316748_` (`BlockPos`)
- `p_316431_` (`Player`)
- `p_316474_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_57282_)
```

**Parameters:**

- `p_57282_` (`StateDefinition.Builder<Block, BlockState>`)

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256056_, BlockPos p_57261_, BlockState p_57262_)
```

**Parameters:**

- `p_256056_` (`LevelReader`)
- `p_57261_` (`BlockPos`)
- `p_57262_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_222558_, RandomSource p_222559_, BlockPos p_222560_, BlockState p_222561_)
```

**Parameters:**

- `p_222558_` (`Level`)
- `p_222559_` (`RandomSource`)
- `p_222560_` (`BlockPos`)
- `p_222561_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_222553_, RandomSource p_222554_, BlockPos p_222555_, BlockState p_222556_)
```

**Parameters:**

- `p_222553_` (`ServerLevel`)
- `p_222554_` (`RandomSource`)
- `p_222555_` (`BlockPos`)
- `p_222556_` (`BlockState`)
