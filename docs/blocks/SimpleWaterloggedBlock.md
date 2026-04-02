# SimpleWaterloggedBlock

**Package:** `net.minecraft.world.level.block`
**Type:** interface
**Extends:** `BucketPickup, LiquidBlockContainer`

## Methods

### canPlaceLiquid

```java
default boolean canPlaceLiquid(Player p_294196_, BlockGetter p_56301_, BlockPos p_56302_, BlockState p_56303_, Fluid p_56304_)
```

**Parameters:**

- `p_294196_` (`Player`)
- `p_56301_` (`BlockGetter`)
- `p_56302_` (`BlockPos`)
- `p_56303_` (`BlockState`)
- `p_56304_` (`Fluid`)

**Returns:** `boolean`

### placeLiquid

```java
default boolean placeLiquid(LevelAccessor p_56306_, BlockPos p_56307_, BlockState p_56308_, FluidState p_56309_)
```

**Parameters:**

- `p_56306_` (`LevelAccessor`)
- `p_56307_` (`BlockPos`)
- `p_56308_` (`BlockState`)
- `p_56309_` (`FluidState`)

**Returns:** `boolean`

### pickupBlock

```java
default ItemStack pickupBlock(Player p_294786_, LevelAccessor p_154560_, BlockPos p_154561_, BlockState p_154562_)
```

**Parameters:**

- `p_294786_` (`Player`)
- `p_154560_` (`LevelAccessor`)
- `p_154561_` (`BlockPos`)
- `p_154562_` (`BlockState`)

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### getPickupSound

```java
default Optional<SoundEvent> getPickupSound()
```

**Returns:** `Optional<SoundEvent>`
