# RedStoneOreBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RedStoneOreBlock>` |  |
| `LIT` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<RedStoneOreBlock> codec()
```

**Returns:** `MapCodec<RedStoneOreBlock>`

### RedStoneOreBlock

```java
public RedStoneOreBlock(BlockBehaviour.Properties p_55453_)
```

**Parameters:**

- `p_55453_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### attack

```java
protected void attack(BlockState p_55467_, Level p_55468_, BlockPos p_55469_, Player p_55470_)
```

**Parameters:**

- `p_55467_` (`BlockState`)
- `p_55468_` (`Level`)
- `p_55469_` (`BlockPos`)
- `p_55470_` (`Player`)

### interact

```java
 interact()
```

**Returns:** ``

### stepOn

```java
public void stepOn(Level p_154299_, BlockPos p_154300_, BlockState p_154301_, Entity p_154302_)
```

**Parameters:**

- `p_154299_` (`Level`)
- `p_154300_` (`BlockPos`)
- `p_154301_` (`BlockState`)
- `p_154302_` (`Entity`)

### interact

```java
 interact()
```

**Returns:** ``

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316235_, BlockState p_316208_, Level p_316432_, BlockPos p_316592_, Player p_316564_, InteractionHand p_316389_, BlockHitResult p_316390_)
```

**Parameters:**

- `p_316235_` (`ItemStack`)
- `p_316208_` (`BlockState`)
- `p_316432_` (`Level`)
- `p_316592_` (`BlockPos`)
- `p_316564_` (`Player`)
- `p_316389_` (`InteractionHand`)
- `p_316390_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### spawnParticles

```java
 spawnParticles()
```

**Returns:** ``

### interact

```java
 interact()
```

**Returns:** ``

### interact

```java
private static void interact(BlockState p_55493_, Level p_55494_, BlockPos p_55495_)
```

**Parameters:**

- `p_55493_` (`BlockState`)
- `p_55494_` (`Level`)
- `p_55495_` (`BlockPos`)

**Returns:** `private static void`

### spawnParticles

```java
 spawnParticles()
```

**Returns:** ``

### isRandomlyTicking

```java
protected boolean isRandomlyTicking(BlockState p_55486_)
```

**Parameters:**

- `p_55486_` (`BlockState`)

**Returns:** `boolean`

### randomTick

```java
protected void randomTick(BlockState p_221918_, ServerLevel p_221919_, BlockPos p_221920_, RandomSource p_221921_)
```

**Parameters:**

- `p_221918_` (`BlockState`)
- `p_221919_` (`ServerLevel`)
- `p_221920_` (`BlockPos`)
- `p_221921_` (`RandomSource`)

### spawnAfterBreak

```java
protected void spawnAfterBreak(BlockState p_221907_, ServerLevel p_221908_, BlockPos p_221909_, ItemStack p_221910_, boolean p_221911_)
```

**Parameters:**

- `p_221907_` (`BlockState`)
- `p_221908_` (`ServerLevel`)
- `p_221909_` (`BlockPos`)
- `p_221910_` (`ItemStack`)
- `p_221911_` (`boolean`)

### getExpDrop

```java
public int getExpDrop(BlockState state, net.minecraft.world.level.LevelAccessor level, BlockPos pos, .jetbrains.annotations.Nullable net.minecraft.world.level.block.entity.BlockEntity blockEntity, .jetbrains.annotations.Nullable net.minecraft.world.entity.Entity breaker, ItemStack tool)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`net.minecraft.world.level.LevelAccessor`)
- `pos` (`BlockPos`)
- `blockEntity` (`.jetbrains.annotations.Nullable net.minecraft.world.level.block.entity.BlockEntity`)
- `breaker` (`.jetbrains.annotations.Nullable net.minecraft.world.entity.Entity`)
- `tool` (`ItemStack`)

**Returns:** `int`

### animateTick

```java
public void animateTick(BlockState p_221913_, Level p_221914_, BlockPos p_221915_, RandomSource p_221916_)
```

**Parameters:**

- `p_221913_` (`BlockState`)
- `p_221914_` (`Level`)
- `p_221915_` (`BlockPos`)
- `p_221916_` (`RandomSource`)

### spawnParticles

```java
 spawnParticles()
```

**Returns:** ``

### spawnParticles

```java
private static void spawnParticles(Level p_55455_, BlockPos p_55456_)
```

**Parameters:**

- `p_55455_` (`Level`)
- `p_55456_` (`BlockPos`)

**Returns:** `private static void`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_55484_)
```

**Parameters:**

- `p_55484_` (`StateDefinition.Builder<Block, BlockState>`)
