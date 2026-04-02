# EndPortalBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`
**Implements:** `Portal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<EndPortalBlock>` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<EndPortalBlock> codec()
```

**Returns:** `MapCodec<EndPortalBlock>`

### EndPortalBlock

```java
public EndPortalBlock(BlockBehaviour.Properties p_53017_)
```

**Parameters:**

- `p_53017_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_153196_, BlockState p_153197_)
```

**Parameters:**

- `p_153196_` (`BlockPos`)
- `p_153197_` (`BlockState`)

**Returns:** `BlockEntity`

### TheEndPortalBlockEntity

```java
return new TheEndPortalBlockEntity()
```

**Returns:** `return new`

### getShape

```java
protected VoxelShape getShape(BlockState p_53038_, BlockGetter p_53039_, BlockPos p_53040_, CollisionContext p_53041_)
```

**Parameters:**

- `p_53038_` (`BlockState`)
- `p_53039_` (`BlockGetter`)
- `p_53040_` (`BlockPos`)
- `p_53041_` (`CollisionContext`)

**Returns:** `VoxelShape`

### entityInside

```java
protected void entityInside(BlockState p_53025_, Level p_53026_, BlockPos p_53027_, Entity p_53028_)
```

**Parameters:**

- `p_53025_` (`BlockState`)
- `p_53026_` (`Level`)
- `p_53027_` (`BlockPos`)
- `p_53028_` (`Entity`)

### getPortalDestination

```java
public DimensionTransition getPortalDestination(ServerLevel p_351032_, Entity p_350274_, BlockPos p_350589_)
```

**Parameters:**

- `p_351032_` (`ServerLevel`)
- `p_350274_` (`Entity`)
- `p_350589_` (`BlockPos`)

**Returns:** `DimensionTransition`

### animateTick

```java
public void animateTick(BlockState p_221102_, Level p_221103_, BlockPos p_221104_, RandomSource p_221105_)
```

**Parameters:**

- `p_221102_` (`BlockState`)
- `p_221103_` (`Level`)
- `p_221104_` (`BlockPos`)
- `p_221105_` (`RandomSource`)

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304508_, BlockPos p_53022_, BlockState p_53023_)
```

**Parameters:**

- `p_304508_` (`LevelReader`)
- `p_53022_` (`BlockPos`)
- `p_53023_` (`BlockState`)

**Returns:** `ItemStack`

### canBeReplaced

```java
protected boolean canBeReplaced(BlockState p_53035_, Fluid p_53036_)
```

**Parameters:**

- `p_53035_` (`BlockState`)
- `p_53036_` (`Fluid`)

**Returns:** `boolean`
