# SnowyDirtBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SnowyDirtBlock>` |  |
| `SNOWY` | `BooleanProperty` |  |

## Methods

### codec

```java
protected MapCodec<? extends SnowyDirtBlock> codec()
```

**Returns:** `MapCodec<? extends SnowyDirtBlock>`

### SnowyDirtBlock

```java
public SnowyDirtBlock(BlockBehaviour.Properties p_56640_)
```

**Parameters:**

- `p_56640_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### updateShape

```java
protected BlockState updateShape(BlockState p_56644_, Direction p_56645_, BlockState p_56646_, LevelAccessor p_56647_, BlockPos p_56648_, BlockPos p_56649_)
```

**Parameters:**

- `p_56644_` (`BlockState`)
- `p_56645_` (`Direction`)
- `p_56646_` (`BlockState`)
- `p_56647_` (`LevelAccessor`)
- `p_56648_` (`BlockPos`)
- `p_56649_` (`BlockPos`)

**Returns:** `BlockState`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_56642_)
```

**Parameters:**

- `p_56642_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### isSnowySetting

```java
private static boolean isSnowySetting(BlockState p_154649_)
```

**Parameters:**

- `p_154649_` (`BlockState`)

**Returns:** `private static boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_56651_)
```

**Parameters:**

- `p_56651_` (`StateDefinition.Builder<Block, BlockState>`)
