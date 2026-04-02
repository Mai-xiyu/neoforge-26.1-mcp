# JigsawBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `EntityBlock`, `GameMasterBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<JigsawBlock>` |  |
| `ORIENTATION` | `EnumProperty<FrontAndTop>` |  |

## Methods

### codec

```java
public MapCodec<JigsawBlock> codec()
```

**Returns:** `MapCodec<JigsawBlock>`

### JigsawBlock

```java
public JigsawBlock(BlockBehaviour.Properties p_54225_)
```

**Parameters:**

- `p_54225_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_54244_)
```

**Parameters:**

- `p_54244_` (`StateDefinition.Builder<Block, BlockState>`)

### rotate

```java
protected BlockState rotate(BlockState p_54241_, Rotation p_54242_)
```

**Parameters:**

- `p_54241_` (`BlockState`)
- `p_54242_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_54238_, Mirror p_54239_)
```

**Parameters:**

- `p_54238_` (`BlockState`)
- `p_54239_` (`Mirror`)

**Returns:** `BlockState`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_54227_)
```

**Parameters:**

- `p_54227_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_153448_, BlockState p_153449_)
```

**Parameters:**

- `p_153448_` (`BlockPos`)
- `p_153449_` (`BlockState`)

**Returns:** `BlockEntity`

### JigsawBlockEntity

```java
return new JigsawBlockEntity()
```

**Returns:** `return new`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_54231_, Level p_54232_, BlockPos p_54233_, Player p_54234_, BlockHitResult p_54236_)
```

**Parameters:**

- `p_54231_` (`BlockState`)
- `p_54232_` (`Level`)
- `p_54233_` (`BlockPos`)
- `p_54234_` (`Player`)
- `p_54236_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### canAttach

```java
public static boolean canAttach(StructureTemplate.StructureBlockInfo p_54246_, StructureTemplate.StructureBlockInfo p_54247_)
```

**Parameters:**

- `p_54246_` (`StructureTemplate.StructureBlockInfo`)
- `p_54247_` (`StructureTemplate.StructureBlockInfo`)

**Returns:** `public static boolean`

### getFrontFacing

```java
public static Direction getFrontFacing(BlockState p_54251_)
```

**Parameters:**

- `p_54251_` (`BlockState`)

**Returns:** `public static Direction`

### getTopFacing

```java
public static Direction getTopFacing(BlockState p_54253_)
```

**Parameters:**

- `p_54253_` (`BlockState`)

**Returns:** `public static Direction`
