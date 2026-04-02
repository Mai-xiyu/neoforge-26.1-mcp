# SculkCatalystBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SculkCatalystBlock>` |  |
| `PULSE` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<SculkCatalystBlock> codec()
```

**Returns:** `MapCodec<SculkCatalystBlock>`

### SculkCatalystBlock

```java
public SculkCatalystBlock(BlockBehaviour.Properties p_222090_)
```

**Parameters:**

- `p_222090_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_222115_)
```

**Parameters:**

- `p_222115_` (`StateDefinition.Builder<Block, BlockState>`)

### tick

```java
protected void tick(BlockState p_222104_, ServerLevel p_222105_, BlockPos p_222106_, RandomSource p_222107_)
```

**Parameters:**

- `p_222104_` (`BlockState`)
- `p_222105_` (`ServerLevel`)
- `p_222106_` (`BlockPos`)
- `p_222107_` (`RandomSource`)

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_222117_, BlockState p_222118_)
```

**Parameters:**

- `p_222117_` (`BlockPos`)
- `p_222118_` (`BlockState`)

**Returns:** `BlockEntity`

### SculkCatalystBlockEntity

```java
return new SculkCatalystBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_222100_, BlockState p_222101_, BlockEntityType<T> p_222102_)
```

**Parameters:**

- `p_222100_` (`Level`)
- `p_222101_` (`BlockState`)
- `p_222102_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_222120_)
```

**Parameters:**

- `p_222120_` (`BlockState`)

**Returns:** `RenderShape`

### spawnAfterBreak

```java
protected void spawnAfterBreak(BlockState p_222109_, ServerLevel p_222110_, BlockPos p_222111_, ItemStack p_222112_, boolean p_222113_)
```

**Parameters:**

- `p_222109_` (`BlockState`)
- `p_222110_` (`ServerLevel`)
- `p_222111_` (`BlockPos`)
- `p_222112_` (`ItemStack`)
- `p_222113_` (`boolean`)

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
