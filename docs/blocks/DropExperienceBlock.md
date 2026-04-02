# DropExperienceBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DropExperienceBlock>` |  |

## Methods

### codec

```java
public MapCodec<? extends DropExperienceBlock> codec()
```

**Returns:** `MapCodec<? extends DropExperienceBlock>`

### DropExperienceBlock

```java
public DropExperienceBlock(IntProvider p_221084_, BlockBehaviour.Properties p_221083_)
```

**Parameters:**

- `p_221084_` (`IntProvider`)
- `p_221083_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### spawnAfterBreak

```java
protected void spawnAfterBreak(BlockState p_221086_, ServerLevel p_221087_, BlockPos p_221088_, ItemStack p_221089_, boolean p_221090_)
```

**Parameters:**

- `p_221086_` (`BlockState`)
- `p_221087_` (`ServerLevel`)
- `p_221088_` (`BlockPos`)
- `p_221089_` (`ItemStack`)
- `p_221090_` (`boolean`)

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
