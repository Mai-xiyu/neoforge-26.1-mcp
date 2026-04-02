# LiquidBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `BucketPickup`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LiquidBlock>` |  |
| `LEVEL` | `IntegerProperty` |  |
| `fluid` | `FlowingFluid` |  |
| `STABLE_SHAPE` | `VoxelShape` |  |
| `POSSIBLE_FLOW_DIRECTIONS` | `ImmutableList<Direction>` |  |

## Methods

### codec

```java
public MapCodec<LiquidBlock> codec()
```

**Returns:** `MapCodec<LiquidBlock>`

### LiquidBlock

```java
public LiquidBlock(FlowingFluid p_54694_, BlockBehaviour.Properties p_54695_)
```

**Parameters:**

- `p_54694_` (`FlowingFluid`)
- `p_54695_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_54760_, BlockGetter p_54761_, BlockPos p_54762_, CollisionContext p_54763_)
```

**Parameters:**

- `p_54760_` (`BlockState`)
- `p_54761_` (`BlockGetter`)
- `p_54762_` (`BlockPos`)
- `p_54763_` (`CollisionContext`)

**Returns:** `VoxelShape`

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_54732_)
```

**Parameters:**

- `p_54732_` (`BlockState`)

**Returns:** `boolean`

### randomTick

```java
protected void randomTick(BlockState p_221410_, ServerLevel p_221411_, BlockPos p_221412_, RandomSource p_221413_)
```

**Parameters:**

- `p_221410_` (`BlockState`)
- `p_221411_` (`ServerLevel`)
- `p_221412_` (`BlockPos`)
- `p_221413_` (`RandomSource`)

### propagatesSkylightDown

```java
protected boolean propagatesSkylightDown(BlockState p_54745_, BlockGetter p_54746_, BlockPos p_54747_)
```

**Parameters:**

- `p_54745_` (`BlockState`)
- `p_54746_` (`BlockGetter`)
- `p_54747_` (`BlockPos`)

**Returns:** `boolean`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_54704_, PathComputationType p_54707_)
```

**Parameters:**

- `p_54704_` (`BlockState`)
- `p_54707_` (`PathComputationType`)

**Returns:** `boolean`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_54765_)
```

**Parameters:**

- `p_54765_` (`BlockState`)

**Returns:** `FluidState`

### skipRendering

```java
protected boolean skipRendering(BlockState p_54716_, BlockState p_54717_, Direction p_54718_)
```

**Parameters:**

- `p_54716_` (`BlockState`)
- `p_54717_` (`BlockState`)
- `p_54718_` (`Direction`)

**Returns:** `boolean`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_54738_)
```

**Parameters:**

- `p_54738_` (`BlockState`)

**Returns:** `RenderShape`

### getDrops

```java
protected List<ItemStack> getDrops(BlockState p_54720_, LootParams.Builder p_287727_)
```

**Parameters:**

- `p_54720_` (`BlockState`)
- `p_287727_` (`LootParams.Builder`)

**Returns:** `List<ItemStack>`

### getShape

```java
protected VoxelShape getShape(BlockState p_54749_, BlockGetter p_54750_, BlockPos p_54751_, CollisionContext p_54752_)
```

**Parameters:**

- `p_54749_` (`BlockState`)
- `p_54750_` (`BlockGetter`)
- `p_54751_` (`BlockPos`)
- `p_54752_` (`CollisionContext`)

**Returns:** `VoxelShape`

### onPlace

```java
protected void onPlace(BlockState p_54754_, Level p_54755_, BlockPos p_54756_, BlockState p_54757_, boolean p_54758_)
```

**Parameters:**

- `p_54754_` (`BlockState`)
- `p_54755_` (`Level`)
- `p_54756_` (`BlockPos`)
- `p_54757_` (`BlockState`)
- `p_54758_` (`boolean`)

### updateShape

```java
protected BlockState updateShape(BlockState p_54723_, Direction p_54724_, BlockState p_54725_, LevelAccessor p_54726_, BlockPos p_54727_, BlockPos p_54728_)
```

**Parameters:**

- `p_54723_` (`BlockState`)
- `p_54724_` (`Direction`)
- `p_54725_` (`BlockState`)
- `p_54726_` (`LevelAccessor`)
- `p_54727_` (`BlockPos`)
- `p_54728_` (`BlockPos`)

**Returns:** `BlockState`

### neighborChanged

```java
protected void neighborChanged(BlockState p_54709_, Level p_54710_, BlockPos p_54711_, Block p_54712_, BlockPos p_54713_, boolean p_54714_)
```

**Parameters:**

- `p_54709_` (`BlockState`)
- `p_54710_` (`Level`)
- `p_54711_` (`BlockPos`)
- `p_54712_` (`Block`)
- `p_54713_` (`BlockPos`)
- `p_54714_` (`boolean`)

### shouldSpreadLiquid ⚠️ *Deprecated*

```java
canInteract instead
    private boolean shouldSpreadLiquid(Level p_54697_, BlockPos p_54698_, BlockState p_54699_)
```

**Parameters:**

- `p_54697_` (`Level`)
- `p_54698_` (`BlockPos`)
- `p_54699_` (`BlockState`)

**Returns:** `canInteract instead
    private boolean`

### fizz

```java
private void fizz(LevelAccessor p_54701_, BlockPos p_54702_)
```

**Parameters:**

- `p_54701_` (`LevelAccessor`)
- `p_54702_` (`BlockPos`)

**Returns:** `private void`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_54730_)
```

**Parameters:**

- `p_54730_` (`StateDefinition.Builder<Block, BlockState>`)

### pickupBlock

```java
public ItemStack pickupBlock(Player p_295410_, LevelAccessor p_153772_, BlockPos p_153773_, BlockState p_153774_)
```

**Parameters:**

- `p_295410_` (`Player`)
- `p_153772_` (`LevelAccessor`)
- `p_153773_` (`BlockPos`)
- `p_153774_` (`BlockState`)

**Returns:** `ItemStack`

### getPickupSound

```java
public Optional<SoundEvent> getPickupSound()
```

**Returns:** `Optional<SoundEvent>`
