# RespawnAnchorBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RespawnAnchorBlock>` |  |
| `MIN_CHARGES` | `int` |  |
| `MAX_CHARGES` | `int` |  |
| `CHARGE` | `IntegerProperty` |  |

## Methods

### codec

```java
public MapCodec<RespawnAnchorBlock> codec()
```

**Returns:** `MapCodec<RespawnAnchorBlock>`

### RespawnAnchorBlock

```java
public RespawnAnchorBlock(BlockBehaviour.Properties p_55838_)
```

**Parameters:**

- `p_55838_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316531_, BlockState p_316665_, Level p_316165_, BlockPos p_316402_, Player p_316556_, InteractionHand p_316586_, BlockHitResult p_316326_)
```

**Parameters:**

- `p_316531_` (`ItemStack`)
- `p_316665_` (`BlockState`)
- `p_316165_` (`Level`)
- `p_316402_` (`BlockPos`)
- `p_316556_` (`Player`)
- `p_316586_` (`InteractionHand`)
- `p_316326_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### charge

```java
 charge()
```

**Returns:** ``

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_316377_, Level p_316150_, BlockPos p_316161_, Player p_316889_, BlockHitResult p_316358_)
```

**Parameters:**

- `p_316377_` (`BlockState`)
- `p_316150_` (`Level`)
- `p_316161_` (`BlockPos`)
- `p_316889_` (`Player`)
- `p_316358_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### isRespawnFuel

```java
private static boolean isRespawnFuel(ItemStack p_55849_)
```

**Parameters:**

- `p_55849_` (`ItemStack`)

**Returns:** `private static boolean`

### canBeCharged

```java
private static boolean canBeCharged(BlockState p_55895_)
```

**Parameters:**

- `p_55895_` (`BlockState`)

**Returns:** `private static boolean`

### isWaterThatWouldFlow

```java
private static boolean isWaterThatWouldFlow(BlockPos p_55888_, Level p_55889_)
```

**Parameters:**

- `p_55888_` (`BlockPos`)
- `p_55889_` (`Level`)

**Returns:** `private static boolean`

### explode

```java
private void explode(BlockState p_55891_, Level p_55892_, BlockPos p_55893_)
```

**Parameters:**

- `p_55891_` (`BlockState`)
- `p_55892_` (`Level`)
- `p_55893_` (`BlockPos`)

**Returns:** `private void`

### getBlockExplosionResistance

```java
public Optional<Float> getBlockExplosionResistance(Explosion p_55904_, BlockGetter p_55905_, BlockPos p_55906_, BlockState p_55907_, FluidState p_55908_)
```

**Parameters:**

- `p_55904_` (`Explosion`)
- `p_55905_` (`BlockGetter`)
- `p_55906_` (`BlockPos`)
- `p_55907_` (`BlockState`)
- `p_55908_` (`FluidState`)

**Returns:** `Optional<Float>`

### canSetSpawn

```java
public static boolean canSetSpawn(Level p_55851_)
```

**Parameters:**

- `p_55851_` (`Level`)

**Returns:** `public static boolean`

### charge

```java
public static void charge(Entity p_270997_, Level p_270172_, BlockPos p_270534_, BlockState p_270661_)
```

**Parameters:**

- `p_270997_` (`Entity`)
- `p_270172_` (`Level`)
- `p_270534_` (`BlockPos`)
- `p_270661_` (`BlockState`)

**Returns:** `public static void`

### animateTick

```java
public void animateTick(BlockState p_221969_, Level p_221970_, BlockPos p_221971_, RandomSource p_221972_)
```

**Parameters:**

- `p_221969_` (`BlockState`)
- `p_221970_` (`Level`)
- `p_221971_` (`BlockPos`)
- `p_221972_` (`RandomSource`)

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_55886_)
```

**Parameters:**

- `p_55886_` (`StateDefinition.Builder<Block, BlockState>`)

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_55860_)
```

**Parameters:**

- `p_55860_` (`BlockState`)

**Returns:** `boolean`

### getScaledChargeLevel

```java
public static int getScaledChargeLevel(BlockState p_55862_, int p_55863_)
```

**Parameters:**

- `p_55862_` (`BlockState`)
- `p_55863_` (`int`)

**Returns:** `public static int`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_55870_, Level p_55871_, BlockPos p_55872_)
```

**Parameters:**

- `p_55870_` (`BlockState`)
- `p_55871_` (`Level`)
- `p_55872_` (`BlockPos`)

**Returns:** `int`

### getScaledChargeLevel

```java
return getScaledChargeLevel()
```

**Returns:** `return`

### findStandUpPosition

```java
public static Optional<Vec3> findStandUpPosition(EntityType<?> p_55840_, CollisionGetter p_55841_, BlockPos p_55842_)
```

**Parameters:**

- `p_55840_` (`EntityType<?>`)
- `p_55841_` (`CollisionGetter`)
- `p_55842_` (`BlockPos`)

**Returns:** `public static Optional<Vec3>`

### findStandUpPosition

```java
private static Optional<Vec3> findStandUpPosition(EntityType<?> p_55844_, CollisionGetter p_55845_, BlockPos p_55846_, boolean p_55847_)
```

**Parameters:**

- `p_55844_` (`EntityType<?>`)
- `p_55845_` (`CollisionGetter`)
- `p_55846_` (`BlockPos`)
- `p_55847_` (`boolean`)

**Returns:** `private static Optional<Vec3>`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_55865_, PathComputationType p_55868_)
```

**Parameters:**

- `p_55865_` (`BlockState`)
- `p_55868_` (`PathComputationType`)

**Returns:** `boolean`
