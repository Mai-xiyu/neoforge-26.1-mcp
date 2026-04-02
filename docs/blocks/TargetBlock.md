# TargetBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TargetBlock>` |  |

## Methods

### codec

```java
public MapCodec<TargetBlock> codec()
```

**Returns:** `MapCodec<TargetBlock>`

### TargetBlock

```java
public TargetBlock(BlockBehaviour.Properties p_57379_)
```

**Parameters:**

- `p_57379_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### onProjectileHit

```java
protected void onProjectileHit(Level p_57381_, BlockState p_57382_, BlockHitResult p_57383_, Projectile p_57384_)
```

**Parameters:**

- `p_57381_` (`Level`)
- `p_57382_` (`BlockState`)
- `p_57383_` (`BlockHitResult`)
- `p_57384_` (`Projectile`)

### updateRedstoneOutput

```java
private static int updateRedstoneOutput(LevelAccessor p_57392_, BlockState p_57393_, BlockHitResult p_57394_, Entity p_57395_)
```

**Parameters:**

- `p_57392_` (`LevelAccessor`)
- `p_57393_` (`BlockState`)
- `p_57394_` (`BlockHitResult`)
- `p_57395_` (`Entity`)

**Returns:** `private static int`

### getRedstoneStrength

```java
private static int getRedstoneStrength(BlockHitResult p_57409_, Vec3 p_57410_)
```

**Parameters:**

- `p_57409_` (`BlockHitResult`)
- `p_57410_` (`Vec3`)

**Returns:** `private static int`

### setOutputPower

```java
private static void setOutputPower(LevelAccessor p_57386_, BlockState p_57387_, int p_57388_, BlockPos p_57389_, int p_57390_)
```

**Parameters:**

- `p_57386_` (`LevelAccessor`)
- `p_57387_` (`BlockState`)
- `p_57388_` (`int`)
- `p_57389_` (`BlockPos`)
- `p_57390_` (`int`)

**Returns:** `private static void`

### tick

```java
protected void tick(BlockState p_222588_, ServerLevel p_222589_, BlockPos p_222590_, RandomSource p_222591_)
```

**Parameters:**

- `p_222588_` (`BlockState`)
- `p_222589_` (`ServerLevel`)
- `p_222590_` (`BlockPos`)
- `p_222591_` (`RandomSource`)

### getSignal

```java
protected int getSignal(BlockState p_57402_, BlockGetter p_57403_, BlockPos p_57404_, Direction p_57405_)
```

**Parameters:**

- `p_57402_` (`BlockState`)
- `p_57403_` (`BlockGetter`)
- `p_57404_` (`BlockPos`)
- `p_57405_` (`Direction`)

**Returns:** `int`

### isSignalSource

```java
protected boolean isSignalSource(BlockState p_57418_)
```

**Parameters:**

- `p_57418_` (`BlockState`)

**Returns:** `boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_57407_)
```

**Parameters:**

- `p_57407_` (`StateDefinition.Builder<Block, BlockState>`)

### onPlace

```java
protected void onPlace(BlockState p_57412_, Level p_57413_, BlockPos p_57414_, BlockState p_57415_, boolean p_57416_)
```

**Parameters:**

- `p_57412_` (`BlockState`)
- `p_57413_` (`Level`)
- `p_57414_` (`BlockPos`)
- `p_57415_` (`BlockState`)
- `p_57416_` (`boolean`)
