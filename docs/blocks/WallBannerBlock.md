# WallBannerBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `AbstractBannerBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WallBannerBlock>` |  |
| `FACING` | `DirectionProperty` |  |

## Methods

### codec

```java
public MapCodec<WallBannerBlock> codec()
```

**Returns:** `MapCodec<WallBannerBlock>`

### WallBannerBlock

```java
public WallBannerBlock(DyeColor p_57920_, BlockBehaviour.Properties p_57921_)
```

**Parameters:**

- `p_57920_` (`DyeColor`)
- `p_57921_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `String`

### canSurvive

```java
protected boolean canSurvive(BlockState p_57925_, LevelReader p_57926_, BlockPos p_57927_)
```

**Parameters:**

- `p_57925_` (`BlockState`)
- `p_57926_` (`LevelReader`)
- `p_57927_` (`BlockPos`)

**Returns:** `boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_57935_, Direction p_57936_, BlockState p_57937_, LevelAccessor p_57938_, BlockPos p_57939_, BlockPos p_57940_)
```

**Parameters:**

- `p_57935_` (`BlockState`)
- `p_57936_` (`Direction`)
- `p_57937_` (`BlockState`)
- `p_57938_` (`LevelAccessor`)
- `p_57939_` (`BlockPos`)
- `p_57940_` (`BlockPos`)

**Returns:** `BlockState`

### getShape

```java
protected VoxelShape getShape(BlockState p_57944_, BlockGetter p_57945_, BlockPos p_57946_, CollisionContext p_57947_)
```

**Parameters:**

- `p_57944_` (`BlockState`)
- `p_57945_` (`BlockGetter`)
- `p_57946_` (`BlockPos`)
- `p_57947_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_57923_)
```

**Parameters:**

- `p_57923_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### rotate

```java
protected BlockState rotate(BlockState p_57932_, Rotation p_57933_)
```

**Parameters:**

- `p_57932_` (`BlockState`)
- `p_57933_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_57929_, Mirror p_57930_)
```

**Parameters:**

- `p_57929_` (`BlockState`)
- `p_57930_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_57942_)
```

**Parameters:**

- `p_57942_` (`StateDefinition.Builder<Block, BlockState>`)
