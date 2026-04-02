# SpawnerBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SpawnerBlock>` |  |

## Methods

### codec

```java
public MapCodec<SpawnerBlock> codec()
```

**Returns:** `MapCodec<SpawnerBlock>`

### SpawnerBlock

```java
public SpawnerBlock(BlockBehaviour.Properties p_56781_)
```

**Parameters:**

- `p_56781_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_154687_, BlockState p_154688_)
```

**Parameters:**

- `p_154687_` (`BlockPos`)
- `p_154688_` (`BlockState`)

**Returns:** `BlockEntity`

### SpawnerBlockEntity

```java
return new SpawnerBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_154683_, BlockState p_154684_, BlockEntityType<T> p_154685_)
```

**Parameters:**

- `p_154683_` (`Level`)
- `p_154684_` (`BlockState`)
- `p_154685_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### createTickerHelper

```java
return createTickerHelper(p_154683_.isClientSide ? SpawnerBlockEntity::clientTick : SpawnerBlockEntity::serverTick)
```

**Parameters:**

- `SpawnerBlockEntity::serverTick` (`p_154683_.isClientSide ? SpawnerBlockEntity::clientTick :`)

**Returns:** `return`

### spawnAfterBreak

```java
protected void spawnAfterBreak(BlockState p_222477_, ServerLevel p_222478_, BlockPos p_222479_, ItemStack p_222480_, boolean p_222481_)
```

**Parameters:**

- `p_222477_` (`BlockState`)
- `p_222478_` (`ServerLevel`)
- `p_222479_` (`BlockPos`)
- `p_222480_` (`ItemStack`)
- `p_222481_` (`boolean`)

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

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_56794_)
```

**Parameters:**

- `p_56794_` (`BlockState`)

**Returns:** `RenderShape`

### appendHoverText

```java
public void appendHoverText(ItemStack p_255714_, Item.TooltipContext p_339639_, List<Component> p_255708_, TooltipFlag p_255667_)
```

**Parameters:**

- `p_255714_` (`ItemStack`)
- `p_339639_` (`Item.TooltipContext`)
- `p_255708_` (`List<Component>`)
- `p_255667_` (`TooltipFlag`)
