# PowderSnowBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `BucketPickup`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<PowderSnowBlock>` |  |

## Methods

### codec

```java
public MapCodec<PowderSnowBlock> codec()
```

**Returns:** `MapCodec<PowderSnowBlock>`

### PowderSnowBlock

```java
public PowderSnowBlock(BlockBehaviour.Properties p_154253_)
```

**Parameters:**

- `p_154253_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### skipRendering

```java
protected boolean skipRendering(BlockState p_154268_, BlockState p_154269_, Direction p_154270_)
```

**Parameters:**

- `p_154268_` (`BlockState`)
- `p_154269_` (`BlockState`)
- `p_154270_` (`Direction`)

**Returns:** `boolean`

### getOcclusionShape

```java
protected VoxelShape getOcclusionShape(BlockState p_154272_, BlockGetter p_154273_, BlockPos p_154274_)
```

**Parameters:**

- `p_154272_` (`BlockState`)
- `p_154273_` (`BlockGetter`)
- `p_154274_` (`BlockPos`)

**Returns:** `VoxelShape`

### entityInside

```java
protected void entityInside(BlockState p_154263_, Level p_154264_, BlockPos p_154265_, Entity p_154266_)
```

**Parameters:**

- `p_154263_` (`BlockState`)
- `p_154264_` (`Level`)
- `p_154265_` (`BlockPos`)
- `p_154266_` (`Entity`)

### fallOn

```java
public void fallOn(Level p_196695_, BlockState p_196696_, BlockPos p_196697_, Entity p_196698_, float p_196699_)
```

**Parameters:**

- `p_196695_` (`Level`)
- `p_196696_` (`BlockState`)
- `p_196697_` (`BlockPos`)
- `p_196698_` (`Entity`)
- `p_196699_` (`float`)

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_154285_, BlockGetter p_154286_, BlockPos p_154287_, CollisionContext p_154288_)
```

**Parameters:**

- `p_154285_` (`BlockState`)
- `p_154286_` (`BlockGetter`)
- `p_154287_` (`BlockPos`)
- `p_154288_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getVisualShape

```java
protected VoxelShape getVisualShape(BlockState p_154276_, BlockGetter p_154277_, BlockPos p_154278_, CollisionContext p_154279_)
```

**Parameters:**

- `p_154276_` (`BlockState`)
- `p_154277_` (`BlockGetter`)
- `p_154278_` (`BlockPos`)
- `p_154279_` (`CollisionContext`)

**Returns:** `VoxelShape`

### canEntityWalkOnPowderSnow

```java
public static boolean canEntityWalkOnPowderSnow(Entity p_154256_)
```

**Parameters:**

- `p_154256_` (`Entity`)

**Returns:** `public static boolean`

### pickupBlock

```java
public ItemStack pickupBlock(Player p_295645_, LevelAccessor p_154281_, BlockPos p_154282_, BlockState p_154283_)
```

**Parameters:**

- `p_295645_` (`Player`)
- `p_154281_` (`LevelAccessor`)
- `p_154282_` (`BlockPos`)
- `p_154283_` (`BlockState`)

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

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_154258_, PathComputationType p_154261_)
```

**Parameters:**

- `p_154258_` (`BlockState`)
- `p_154261_` (`PathComputationType`)

**Returns:** `boolean`
