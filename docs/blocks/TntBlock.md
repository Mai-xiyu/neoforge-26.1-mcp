# TntBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TntBlock>` |  |
| `UNSTABLE` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<TntBlock> codec()
```

**Returns:** `MapCodec<TntBlock>`

### TntBlock

```java
public TntBlock(BlockBehaviour.Properties p_57422_)
```

**Parameters:**

- `p_57422_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### onCaughtFire

```java
public void onCaughtFire(BlockState state, Level world, BlockPos pos, net.minecraft.core.Direction face, LivingEntity igniter)
```

**Parameters:**

- `state` (`BlockState`)
- `world` (`Level`)
- `pos` (`BlockPos`)
- `face` (`net.minecraft.core.Direction`)
- `igniter` (`LivingEntity`)

### explode

```java
 explode()
```

**Returns:** ``

### onPlace

```java
protected void onPlace(BlockState p_57466_, Level p_57467_, BlockPos p_57468_, BlockState p_57469_, boolean p_57470_)
```

**Parameters:**

- `p_57466_` (`BlockState`)
- `p_57467_` (`Level`)
- `p_57468_` (`BlockPos`)
- `p_57469_` (`BlockState`)
- `p_57470_` (`boolean`)

**Returns:** `protected void`

### onCaughtFire

```java
 onCaughtFire()
```

**Returns:** ``

### neighborChanged

```java
protected void neighborChanged(BlockState p_57457_, Level p_57458_, BlockPos p_57459_, Block p_57460_, BlockPos p_57461_, boolean p_57462_)
```

**Parameters:**

- `p_57457_` (`BlockState`)
- `p_57458_` (`Level`)
- `p_57459_` (`BlockPos`)
- `p_57460_` (`Block`)
- `p_57461_` (`BlockPos`)
- `p_57462_` (`boolean`)

### onCaughtFire

```java
 onCaughtFire()
```

**Returns:** ``

### playerWillDestroy

```java
public BlockState playerWillDestroy(Level p_57445_, BlockPos p_57446_, BlockState p_57447_, Player p_57448_)
```

**Parameters:**

- `p_57445_` (`Level`)
- `p_57446_` (`BlockPos`)
- `p_57447_` (`BlockState`)
- `p_57448_` (`Player`)

**Returns:** `BlockState`

### onCaughtFire

```java
 onCaughtFire()
```

**Returns:** ``

### wasExploded

```java
public void wasExploded(Level p_57441_, BlockPos p_57442_, Explosion p_57443_)
```

**Parameters:**

- `p_57441_` (`Level`)
- `p_57442_` (`BlockPos`)
- `p_57443_` (`Explosion`)

### explode ⚠️ *Deprecated*

```java
catchFire
    public static void explode(Level p_57434_, BlockPos p_57435_)
```

**Parameters:**

- `p_57434_` (`Level`)
- `p_57435_` (`BlockPos`)

**Returns:** `catchFire
    public static void`

### explode

```java
 explode()
```

**Returns:** ``

### explode ⚠️ *Deprecated*

```java
catchFire
    private static void explode(Level p_57437_, BlockPos p_57438_, LivingEntity p_57439_)
```

**Parameters:**

- `p_57437_` (`Level`)
- `p_57438_` (`BlockPos`)
- `p_57439_` (`LivingEntity`)

**Returns:** `catchFire
    private static void`

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316149_, BlockState p_316217_, Level p_316520_, BlockPos p_316601_, Player p_316770_, InteractionHand p_316393_, BlockHitResult p_316532_)
```

**Parameters:**

- `p_316149_` (`ItemStack`)
- `p_316217_` (`BlockState`)
- `p_316520_` (`Level`)
- `p_316601_` (`BlockPos`)
- `p_316770_` (`Player`)
- `p_316393_` (`InteractionHand`)
- `p_316532_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### onProjectileHit

```java
protected void onProjectileHit(Level p_57429_, BlockState p_57430_, BlockHitResult p_57431_, Projectile p_57432_)
```

**Parameters:**

- `p_57429_` (`Level`)
- `p_57430_` (`BlockState`)
- `p_57431_` (`BlockHitResult`)
- `p_57432_` (`Projectile`)

### dropFromExplosion

```java
public boolean dropFromExplosion(Explosion p_57427_)
```

**Parameters:**

- `p_57427_` (`Explosion`)

**Returns:** `boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_57464_)
```

**Parameters:**

- `p_57464_` (`StateDefinition.Builder<Block, BlockState>`)
