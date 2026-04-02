# BubbleColumnBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `BucketPickup`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BubbleColumnBlock>` |  |
| `DRAG_DOWN` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<BubbleColumnBlock> codec()
```

**Returns:** `MapCodec<BubbleColumnBlock>`

### BubbleColumnBlock

```java
public BubbleColumnBlock(BlockBehaviour.Properties p_50959_)
```

**Parameters:**

- `p_50959_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### entityInside

```java
protected void entityInside(BlockState p_50976_, Level p_50977_, BlockPos p_50978_, Entity p_50979_)
```

**Parameters:**

- `p_50976_` (`BlockState`)
- `p_50977_` (`Level`)
- `p_50978_` (`BlockPos`)
- `p_50979_` (`Entity`)

### tick

```java
protected void tick(BlockState p_220888_, ServerLevel p_220889_, BlockPos p_220890_, RandomSource p_220891_)
```

**Parameters:**

- `p_220888_` (`BlockState`)
- `p_220889_` (`ServerLevel`)
- `p_220890_` (`BlockPos`)
- `p_220891_` (`RandomSource`)

### getFluidState

```java
protected FluidState getFluidState(BlockState p_51016_)
```

**Parameters:**

- `p_51016_` (`BlockState`)

**Returns:** `FluidState`

### updateColumn

```java
public static void updateColumn(LevelAccessor p_152708_, BlockPos p_152709_, BlockState p_152710_)
```

**Parameters:**

- `p_152708_` (`LevelAccessor`)
- `p_152709_` (`BlockPos`)
- `p_152710_` (`BlockState`)

**Returns:** `public static void`

### updateColumn

```java
public static void updateColumn(LevelAccessor p_152703_, BlockPos p_152704_, BlockState p_152705_, BlockState p_152706_)
```

**Parameters:**

- `p_152703_` (`LevelAccessor`)
- `p_152704_` (`BlockPos`)
- `p_152705_` (`BlockState`)
- `p_152706_` (`BlockState`)

**Returns:** `public static void`

### canExistIn

```java
private static boolean canExistIn(BlockState p_152716_)
```

**Parameters:**

- `p_152716_` (`BlockState`)

**Returns:** `private static boolean`

### getColumnState

```java
private static BlockState getColumnState(BlockState p_152718_)
```

**Parameters:**

- `p_152718_` (`BlockState`)

**Returns:** `private static BlockState`

### animateTick

```java
public void animateTick(BlockState p_220893_, Level p_220894_, BlockPos p_220895_, RandomSource p_220896_)
```

**Parameters:**

- `p_220893_` (`BlockState`)
- `p_220894_` (`Level`)
- `p_220895_` (`BlockPos`)
- `p_220896_` (`RandomSource`)

### updateShape

```java
protected BlockState updateShape(BlockState p_50990_, Direction p_50991_, BlockState p_50992_, LevelAccessor p_50993_, BlockPos p_50994_, BlockPos p_50995_)
```

**Parameters:**

- `p_50990_` (`BlockState`)
- `p_50991_` (`Direction`)
- `p_50992_` (`BlockState`)
- `p_50993_` (`LevelAccessor`)
- `p_50994_` (`BlockPos`)
- `p_50995_` (`BlockPos`)

**Returns:** `BlockState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_50986_, LevelReader p_50987_, BlockPos p_50988_)
```

**Parameters:**

- `p_50986_` (`BlockState`)
- `p_50987_` (`LevelReader`)
- `p_50988_` (`BlockPos`)

**Returns:** `boolean`

### getShape

```java
protected VoxelShape getShape(BlockState p_51005_, BlockGetter p_51006_, BlockPos p_51007_, CollisionContext p_51008_)
```

**Parameters:**

- `p_51005_` (`BlockState`)
- `p_51006_` (`BlockGetter`)
- `p_51007_` (`BlockPos`)
- `p_51008_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_51003_)
```

**Parameters:**

- `p_51003_` (`BlockState`)

**Returns:** `RenderShape`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_50997_)
```

**Parameters:**

- `p_50997_` (`StateDefinition.Builder<Block, BlockState>`)

### pickupBlock

```java
public ItemStack pickupBlock(Player p_295722_, LevelAccessor p_152712_, BlockPos p_152713_, BlockState p_152714_)
```

**Parameters:**

- `p_295722_` (`Player`)
- `p_152712_` (`LevelAccessor`)
- `p_152713_` (`BlockPos`)
- `p_152714_` (`BlockState`)

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### getPickupSound

```java
public Optional<SoundEvent> getPickupSound()
```

**Returns:** `Optional<SoundEvent>`
