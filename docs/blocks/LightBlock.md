# LightBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LightBlock>` |  |
| `MAX_LEVEL` | `int` |  |
| `LEVEL` | `IntegerProperty` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `LIGHT_EMISSION` | `ToIntFunction<BlockState>` |  |

## Methods

### codec

```java
public MapCodec<LightBlock> codec()
```

**Returns:** `MapCodec<LightBlock>`

### LightBlock

```java
public LightBlock(BlockBehaviour.Properties p_153662_)
```

**Parameters:**

- `p_153662_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_153687_)
```

**Parameters:**

- `p_153687_` (`StateDefinition.Builder<Block, BlockState>`)

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_153673_, Level p_153674_, BlockPos p_153675_, Player p_153676_, BlockHitResult p_153678_)
```

**Parameters:**

- `p_153673_` (`BlockState`)
- `p_153674_` (`Level`)
- `p_153675_` (`BlockPos`)
- `p_153676_` (`Player`)
- `p_153678_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### getShape

```java
protected VoxelShape getShape(BlockState p_153668_, BlockGetter p_153669_, BlockPos p_153670_, CollisionContext p_153671_)
```

**Parameters:**

- `p_153668_` (`BlockState`)
- `p_153669_` (`BlockGetter`)
- `p_153670_` (`BlockPos`)
- `p_153671_` (`CollisionContext`)

**Returns:** `VoxelShape`

### propagatesSkylightDown

```java
protected boolean propagatesSkylightDown(BlockState p_153695_, BlockGetter p_153696_, BlockPos p_153697_)
```

**Parameters:**

- `p_153695_` (`BlockState`)
- `p_153696_` (`BlockGetter`)
- `p_153697_` (`BlockPos`)

**Returns:** `boolean`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_153693_)
```

**Parameters:**

- `p_153693_` (`BlockState`)

**Returns:** `RenderShape`

### getShadeBrightness

```java
protected float getShadeBrightness(BlockState p_153689_, BlockGetter p_153690_, BlockPos p_153691_)
```

**Parameters:**

- `p_153689_` (`BlockState`)
- `p_153690_` (`BlockGetter`)
- `p_153691_` (`BlockPos`)

**Returns:** `float`

### updateShape

```java
protected BlockState updateShape(BlockState p_153680_, Direction p_153681_, BlockState p_153682_, LevelAccessor p_153683_, BlockPos p_153684_, BlockPos p_153685_)
```

**Parameters:**

- `p_153680_` (`BlockState`)
- `p_153681_` (`Direction`)
- `p_153682_` (`BlockState`)
- `p_153683_` (`LevelAccessor`)
- `p_153684_` (`BlockPos`)
- `p_153685_` (`BlockPos`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_153699_)
```

**Parameters:**

- `p_153699_` (`BlockState`)

**Returns:** `FluidState`

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304798_, BlockPos p_153665_, BlockState p_153666_)
```

**Parameters:**

- `p_304798_` (`LevelReader`)
- `p_153665_` (`BlockPos`)
- `p_153666_` (`BlockState`)

**Returns:** `ItemStack`

### setLightOnStack

```java
public static ItemStack setLightOnStack(ItemStack p_259339_, int p_259353_)
```

**Parameters:**

- `p_259339_` (`ItemStack`)
- `p_259353_` (`int`)

**Returns:** `public static ItemStack`
