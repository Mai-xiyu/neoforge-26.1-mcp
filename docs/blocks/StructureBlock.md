# StructureBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`
**Implements:** `GameMasterBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<StructureBlock>` |  |
| `MODE` | `EnumProperty<StructureMode>` |  |

## Methods

### codec

```java
public MapCodec<StructureBlock> codec()
```

**Returns:** `MapCodec<StructureBlock>`

### StructureBlock

```java
public StructureBlock(BlockBehaviour.Properties p_57113_)
```

**Parameters:**

- `p_57113_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_154732_, BlockState p_154733_)
```

**Parameters:**

- `p_154732_` (`BlockPos`)
- `p_154733_` (`BlockState`)

**Returns:** `BlockEntity`

### StructureBlockEntity

```java
return new StructureBlockEntity()
```

**Returns:** `return new`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_57128_, Level p_57129_, BlockPos p_57130_, Player p_57131_, BlockHitResult p_57133_)
```

**Parameters:**

- `p_57128_` (`BlockState`)
- `p_57129_` (`Level`)
- `p_57130_` (`BlockPos`)
- `p_57131_` (`Player`)
- `p_57133_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### setPlacedBy

```java
public void setPlacedBy(Level p_57122_, BlockPos p_57123_, BlockState p_57124_, LivingEntity p_57125_, ItemStack p_57126_)
```

**Parameters:**

- `p_57122_` (`Level`)
- `p_57123_` (`BlockPos`)
- `p_57124_` (`BlockState`)
- `p_57125_` (`LivingEntity`)
- `p_57126_` (`ItemStack`)

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_57144_)
```

**Parameters:**

- `p_57144_` (`BlockState`)

**Returns:** `RenderShape`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_57142_)
```

**Parameters:**

- `p_57142_` (`StateDefinition.Builder<Block, BlockState>`)

### neighborChanged

```java
protected void neighborChanged(BlockState p_57135_, Level p_57136_, BlockPos p_57137_, Block p_57138_, BlockPos p_57139_, boolean p_57140_)
```

**Parameters:**

- `p_57135_` (`BlockState`)
- `p_57136_` (`Level`)
- `p_57137_` (`BlockPos`)
- `p_57138_` (`Block`)
- `p_57139_` (`BlockPos`)
- `p_57140_` (`boolean`)

### trigger

```java
private void trigger(ServerLevel p_57115_, StructureBlockEntity p_57116_)
```

**Parameters:**

- `p_57115_` (`ServerLevel`)
- `p_57116_` (`StructureBlockEntity`)

**Returns:** `private void`
