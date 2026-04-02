# JukeboxBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<JukeboxBlock>` |  |
| `HAS_RECORD` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<JukeboxBlock> codec()
```

**Returns:** `MapCodec<JukeboxBlock>`

### JukeboxBlock

```java
public JukeboxBlock(BlockBehaviour.Properties p_54257_)
```

**Parameters:**

- `p_54257_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setPlacedBy

```java
public void setPlacedBy(Level p_54264_, BlockPos p_54265_, BlockState p_54266_, LivingEntity p_54267_, ItemStack p_54268_)
```

**Parameters:**

- `p_54264_` (`Level`)
- `p_54265_` (`BlockPos`)
- `p_54266_` (`BlockState`)
- `p_54267_` (`LivingEntity`)
- `p_54268_` (`ItemStack`)

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_54281_, Level p_54282_, BlockPos p_54283_, Player p_54284_, BlockHitResult p_54286_)
```

**Parameters:**

- `p_54281_` (`BlockState`)
- `p_54282_` (`Level`)
- `p_54283_` (`BlockPos`)
- `p_54284_` (`Player`)
- `p_54286_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_350348_, BlockState p_351033_, Level p_350995_, BlockPos p_350838_, Player p_350684_, InteractionHand p_350461_, BlockHitResult p_351025_)
```

**Parameters:**

- `p_350348_` (`ItemStack`)
- `p_351033_` (`BlockState`)
- `p_350995_` (`Level`)
- `p_350838_` (`BlockPos`)
- `p_350684_` (`Player`)
- `p_350461_` (`InteractionHand`)
- `p_351025_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### onRemove

```java
protected void onRemove(BlockState p_54288_, Level p_54289_, BlockPos p_54290_, BlockState p_54291_, boolean p_54292_)
```

**Parameters:**

- `p_54288_` (`BlockState`)
- `p_54289_` (`Level`)
- `p_54290_` (`BlockPos`)
- `p_54291_` (`BlockState`)
- `p_54292_` (`boolean`)

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_153451_, BlockState p_153452_)
```

**Parameters:**

- `p_153451_` (`BlockPos`)
- `p_153452_` (`BlockState`)

**Returns:** `BlockEntity`

### JukeboxBlockEntity

```java
return new JukeboxBlockEntity()
```

**Returns:** `return new`

### isSignalSource

```java
public boolean isSignalSource(BlockState p_273404_)
```

**Parameters:**

- `p_273404_` (`BlockState`)

**Returns:** `boolean`

### getSignal

```java
public int getSignal(BlockState p_272942_, BlockGetter p_273232_, BlockPos p_273524_, Direction p_272902_)
```

**Parameters:**

- `p_272942_` (`BlockState`)
- `p_273232_` (`BlockGetter`)
- `p_273524_` (`BlockPos`)
- `p_272902_` (`Direction`)

**Returns:** `int`

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_54275_)
```

**Parameters:**

- `p_54275_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_54277_, Level p_54278_, BlockPos p_54279_)
```

**Parameters:**

- `p_54277_` (`BlockState`)
- `p_54278_` (`Level`)
- `p_54279_` (`BlockPos`)

**Returns:** `int`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_54296_)
```

**Parameters:**

- `p_54296_` (`BlockState`)

**Returns:** `RenderShape`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_54294_)
```

**Parameters:**

- `p_54294_` (`StateDefinition.Builder<Block, BlockState>`)

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_239682_, BlockState p_239683_, BlockEntityType<T> p_239684_)
```

**Parameters:**

- `p_239682_` (`Level`)
- `p_239683_` (`BlockState`)
- `p_239684_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`
