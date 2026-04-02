# TrialSpawnerBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TrialSpawnerBlock>` |  |
| `STATE` | `EnumProperty<TrialSpawnerState>` |  |
| `OMINOUS` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<TrialSpawnerBlock> codec()
```

**Returns:** `MapCodec<TrialSpawnerBlock>`

### TrialSpawnerBlock

```java
public TrialSpawnerBlock(BlockBehaviour.Properties p_312795_)
```

**Parameters:**

- `p_312795_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_312785_)
```

**Parameters:**

- `p_312785_` (`StateDefinition.Builder<Block, BlockState>`)

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_312710_)
```

**Parameters:**

- `p_312710_` (`BlockState`)

**Returns:** `RenderShape`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_311941_, BlockState p_312821_)
```

**Parameters:**

- `p_311941_` (`BlockPos`)
- `p_312821_` (`BlockState`)

**Returns:** `BlockEntity`

### TrialSpawnerBlockEntity

```java
return new TrialSpawnerBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_311756_, BlockState p_312797_, BlockEntityType<T> p_312122_)
```

**Parameters:**

- `p_311756_` (`Level`)
- `p_312797_` (`BlockState`)
- `p_312122_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### appendHoverText

```java
public void appendHoverText(ItemStack p_312446_, Item.TooltipContext p_339621_, List<Component> p_312088_, TooltipFlag p_311895_)
```

**Parameters:**

- `p_312446_` (`ItemStack`)
- `p_339621_` (`Item.TooltipContext`)
- `p_312088_` (`List<Component>`)
- `p_311895_` (`TooltipFlag`)
