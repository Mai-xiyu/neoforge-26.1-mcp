# BigDripleafBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `HorizontalDirectionalBlock`
**Implements:** `BonemealableBlock`, `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BigDripleafBlock>` |  |

## Methods

### codec

```java
public MapCodec<BigDripleafBlock> codec()
```

**Returns:** `MapCodec<BigDripleafBlock>`

### BigDripleafBlock

```java
public BigDripleafBlock(BlockBehaviour.Properties p_152214_)
```

**Parameters:**

- `p_152214_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### calculateShape

```java
private static VoxelShape calculateShape(BlockState p_152318_)
```

**Parameters:**

- `p_152318_` (`BlockState`)

**Returns:** `private static VoxelShape`

### placeWithRandomHeight

```java
public static void placeWithRandomHeight(LevelAccessor p_220793_, RandomSource p_220794_, BlockPos p_220795_, Direction p_220796_)
```

**Parameters:**

- `p_220793_` (`LevelAccessor`)
- `p_220794_` (`RandomSource`)
- `p_220795_` (`BlockPos`)
- `p_220796_` (`Direction`)

**Returns:** `public static void`

### canReplace

```java
private static boolean canReplace(BlockState p_152320_)
```

**Parameters:**

- `p_152320_` (`BlockState`)

**Returns:** `private static boolean`

### canPlaceAt

```java
protected static boolean canPlaceAt(LevelHeightAccessor p_152252_, BlockPos p_152253_, BlockState p_152254_)
```

**Parameters:**

- `p_152252_` (`LevelHeightAccessor`)
- `p_152253_` (`BlockPos`)
- `p_152254_` (`BlockState`)

**Returns:** `protected static boolean`

### place

```java
protected static boolean place(LevelAccessor p_152242_, BlockPos p_152243_, FluidState p_152244_, Direction p_152245_)
```

**Parameters:**

- `p_152242_` (`LevelAccessor`)
- `p_152243_` (`BlockPos`)
- `p_152244_` (`FluidState`)
- `p_152245_` (`Direction`)

**Returns:** `protected static boolean`

### onProjectileHit

```java
protected void onProjectileHit(Level p_152228_, BlockState p_152229_, BlockHitResult p_152230_, Projectile p_152231_)
```

**Parameters:**

- `p_152228_` (`Level`)
- `p_152229_` (`BlockState`)
- `p_152230_` (`BlockHitResult`)
- `p_152231_` (`Projectile`)

### getFluidState

```java
protected FluidState getFluidState(BlockState p_152312_)
```

**Parameters:**

- `p_152312_` (`BlockState`)

**Returns:** `FluidState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_152289_, LevelReader p_152290_, BlockPos p_152291_)
```

**Parameters:**

- `p_152289_` (`BlockState`)
- `p_152290_` (`LevelReader`)
- `p_152291_` (`BlockPos`)

**Returns:** `boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_152293_, Direction p_152294_, BlockState p_152295_, LevelAccessor p_152296_, BlockPos p_152297_, BlockPos p_152298_)
```

**Parameters:**

- `p_152293_` (`BlockState`)
- `p_152294_` (`Direction`)
- `p_152295_` (`BlockState`)
- `p_152296_` (`LevelAccessor`)
- `p_152297_` (`BlockPos`)
- `p_152298_` (`BlockPos`)

**Returns:** `BlockState`

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_255698_, BlockPos p_256302_, BlockState p_255648_)
```

**Parameters:**

- `p_255698_` (`LevelReader`)
- `p_256302_` (`BlockPos`)
- `p_255648_` (`BlockState`)

**Returns:** `boolean`

### canReplace

```java
return canReplace()
```

**Returns:** `return`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_220788_, RandomSource p_220789_, BlockPos p_220790_, BlockState p_220791_)
```

**Parameters:**

- `p_220788_` (`Level`)
- `p_220789_` (`RandomSource`)
- `p_220790_` (`BlockPos`)
- `p_220791_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_220783_, RandomSource p_220784_, BlockPos p_220785_, BlockState p_220786_)
```

**Parameters:**

- `p_220783_` (`ServerLevel`)
- `p_220784_` (`RandomSource`)
- `p_220785_` (`BlockPos`)
- `p_220786_` (`BlockState`)

### entityInside

```java
protected void entityInside(BlockState p_152266_, Level p_152267_, BlockPos p_152268_, Entity p_152269_)
```

**Parameters:**

- `p_152266_` (`BlockState`)
- `p_152267_` (`Level`)
- `p_152268_` (`BlockPos`)
- `p_152269_` (`Entity`)

### tick

```java
protected void tick(BlockState p_220798_, ServerLevel p_220799_, BlockPos p_220800_, RandomSource p_220801_)
```

**Parameters:**

- `p_220798_` (`BlockState`)
- `p_220799_` (`ServerLevel`)
- `p_220800_` (`BlockPos`)
- `p_220801_` (`RandomSource`)

### resetTilt

```java
 resetTilt()
```

**Returns:** ``

### resetTilt

```java
 resetTilt()
```

**Returns:** ``

### neighborChanged

```java
protected void neighborChanged(BlockState p_152271_, Level p_152272_, BlockPos p_152273_, Block p_152274_, BlockPos p_152275_, boolean p_152276_)
```

**Parameters:**

- `p_152271_` (`BlockState`)
- `p_152272_` (`Level`)
- `p_152273_` (`BlockPos`)
- `p_152274_` (`Block`)
- `p_152275_` (`BlockPos`)
- `p_152276_` (`boolean`)

### resetTilt

```java
 resetTilt()
```

**Returns:** ``

### playTiltSound

```java
private static void playTiltSound(Level p_152233_, BlockPos p_152234_, SoundEvent p_152235_)
```

**Parameters:**

- `p_152233_` (`Level`)
- `p_152234_` (`BlockPos`)
- `p_152235_` (`SoundEvent`)

**Returns:** `private static void`

### canEntityTilt

```java
private static boolean canEntityTilt(BlockPos p_152302_, Entity p_152303_)
```

**Parameters:**

- `p_152302_` (`BlockPos`)
- `p_152303_` (`Entity`)

**Returns:** `private static boolean`

### setTiltAndScheduleTick

```java
private void setTiltAndScheduleTick(BlockState p_152283_, Level p_152284_, BlockPos p_152285_, Tilt p_152286_, SoundEvent p_152287_)
```

**Parameters:**

- `p_152283_` (`BlockState`)
- `p_152284_` (`Level`)
- `p_152285_` (`BlockPos`)
- `p_152286_` (`Tilt`)
- `p_152287_` (`SoundEvent`)

**Returns:** `private void`

### setTilt

```java
 setTilt()
```

**Returns:** ``

### playTiltSound

```java
 playTiltSound()
```

**Returns:** ``

### resetTilt

```java
private static void resetTilt(BlockState p_152314_, Level p_152315_, BlockPos p_152316_)
```

**Parameters:**

- `p_152314_` (`BlockState`)
- `p_152315_` (`Level`)
- `p_152316_` (`BlockPos`)

**Returns:** `private static void`

### setTilt

```java
 setTilt()
```

**Returns:** ``

### playTiltSound

```java
 playTiltSound()
```

**Returns:** ``

### setTilt

```java
private static void setTilt(BlockState p_152278_, Level p_152279_, BlockPos p_152280_, Tilt p_152281_)
```

**Parameters:**

- `p_152278_` (`BlockState`)
- `p_152279_` (`Level`)
- `p_152280_` (`BlockPos`)
- `p_152281_` (`Tilt`)

**Returns:** `private static void`

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_152307_, BlockGetter p_152308_, BlockPos p_152309_, CollisionContext p_152310_)
```

**Parameters:**

- `p_152307_` (`BlockState`)
- `p_152308_` (`BlockGetter`)
- `p_152309_` (`BlockPos`)
- `p_152310_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getShape

```java
protected VoxelShape getShape(BlockState p_152261_, BlockGetter p_152262_, BlockPos p_152263_, CollisionContext p_152264_)
```

**Parameters:**

- `p_152261_` (`BlockState`)
- `p_152262_` (`BlockGetter`)
- `p_152263_` (`BlockPos`)
- `p_152264_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_152221_)
```

**Parameters:**

- `p_152221_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_152300_)
```

**Parameters:**

- `p_152300_` (`StateDefinition.Builder<Block, BlockState>`)
