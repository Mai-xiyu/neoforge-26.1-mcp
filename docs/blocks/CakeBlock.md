# CakeBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CakeBlock>` |  |
| `MAX_BITES` | `int` |  |
| `BITES` | `IntegerProperty` |  |
| `FULL_CAKE_SIGNAL` | `int` |  |
| `AABB_OFFSET` | `float` |  |
| `AABB_SIZE_PER_BITE` | `float` |  |
| `SHAPE_BY_BITE` | `VoxelShape[]` |  |

## Methods

### codec

```java
public MapCodec<CakeBlock> codec()
```

**Returns:** `MapCodec<CakeBlock>`

### CakeBlock

```java
public CakeBlock(BlockBehaviour.Properties p_51184_)
```

**Parameters:**

- `p_51184_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_51222_, BlockGetter p_51223_, BlockPos p_51224_, CollisionContext p_51225_)
```

**Parameters:**

- `p_51222_` (`BlockState`)
- `p_51223_` (`BlockGetter`)
- `p_51224_` (`BlockPos`)
- `p_51225_` (`CollisionContext`)

**Returns:** `VoxelShape`

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316238_, BlockState p_316837_, Level p_316766_, BlockPos p_316227_, Player p_316853_, InteractionHand p_316422_, BlockHitResult p_316869_)
```

**Parameters:**

- `p_316238_` (`ItemStack`)
- `p_316837_` (`BlockState`)
- `p_316766_` (`Level`)
- `p_316227_` (`BlockPos`)
- `p_316853_` (`Player`)
- `p_316422_` (`InteractionHand`)
- `p_316869_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_316481_, Level p_316406_, BlockPos p_316218_, Player p_316212_, BlockHitResult p_316525_)
```

**Parameters:**

- `p_316481_` (`BlockState`)
- `p_316406_` (`Level`)
- `p_316218_` (`BlockPos`)
- `p_316212_` (`Player`)
- `p_316525_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### eat

```java
return eat()
```

**Returns:** `return`

### eat

```java
protected static InteractionResult eat(LevelAccessor p_51186_, BlockPos p_51187_, BlockState p_51188_, Player p_51189_)
```

**Parameters:**

- `p_51186_` (`LevelAccessor`)
- `p_51187_` (`BlockPos`)
- `p_51188_` (`BlockState`)
- `p_51189_` (`Player`)

**Returns:** `protected static InteractionResult`

### updateShape

```java
protected BlockState updateShape(BlockState p_51213_, Direction p_51214_, BlockState p_51215_, LevelAccessor p_51216_, BlockPos p_51217_, BlockPos p_51218_)
```

**Parameters:**

- `p_51213_` (`BlockState`)
- `p_51214_` (`Direction`)
- `p_51215_` (`BlockState`)
- `p_51216_` (`LevelAccessor`)
- `p_51217_` (`BlockPos`)
- `p_51218_` (`BlockPos`)

**Returns:** `BlockState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_51209_, LevelReader p_51210_, BlockPos p_51211_)
```

**Parameters:**

- `p_51209_` (`BlockState`)
- `p_51210_` (`LevelReader`)
- `p_51211_` (`BlockPos`)

**Returns:** `boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_51220_)
```

**Parameters:**

- `p_51220_` (`StateDefinition.Builder<Block, BlockState>`)

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_51198_, Level p_51199_, BlockPos p_51200_)
```

**Parameters:**

- `p_51198_` (`BlockState`)
- `p_51199_` (`Level`)
- `p_51200_` (`BlockPos`)

**Returns:** `int`

### getOutputSignal

```java
public static int getOutputSignal(int p_152747_)
```

**Parameters:**

- `p_152747_` (`int`)

**Returns:** `public static int`

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_51191_)
```

**Parameters:**

- `p_51191_` (`BlockState`)

**Returns:** `boolean`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_51193_, PathComputationType p_51196_)
```

**Parameters:**

- `p_51193_` (`BlockState`)
- `p_51196_` (`PathComputationType`)

**Returns:** `boolean`
