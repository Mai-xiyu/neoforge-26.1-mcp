# MudBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<MudBlock>` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<MudBlock> codec()
```

**Returns:** `MapCodec<MudBlock>`

### MudBlock

```java
public MudBlock(BlockBehaviour.Properties p_221545_)
```

**Parameters:**

- `p_221545_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_221561_, BlockGetter p_221562_, BlockPos p_221563_, CollisionContext p_221564_)
```

**Parameters:**

- `p_221561_` (`BlockState`)
- `p_221562_` (`BlockGetter`)
- `p_221563_` (`BlockPos`)
- `p_221564_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getBlockSupportShape

```java
protected VoxelShape getBlockSupportShape(BlockState p_221566_, BlockGetter p_221567_, BlockPos p_221568_)
```

**Parameters:**

- `p_221566_` (`BlockState`)
- `p_221567_` (`BlockGetter`)
- `p_221568_` (`BlockPos`)

**Returns:** `VoxelShape`

### getVisualShape

```java
protected VoxelShape getVisualShape(BlockState p_221556_, BlockGetter p_221557_, BlockPos p_221558_, CollisionContext p_221559_)
```

**Parameters:**

- `p_221556_` (`BlockState`)
- `p_221557_` (`BlockGetter`)
- `p_221558_` (`BlockPos`)
- `p_221559_` (`CollisionContext`)

**Returns:** `VoxelShape`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_221547_, PathComputationType p_221550_)
```

**Parameters:**

- `p_221547_` (`BlockState`)
- `p_221550_` (`PathComputationType`)

**Returns:** `boolean`

### getShadeBrightness

```java
protected float getShadeBrightness(BlockState p_221552_, BlockGetter p_221553_, BlockPos p_221554_)
```

**Parameters:**

- `p_221552_` (`BlockState`)
- `p_221553_` (`BlockGetter`)
- `p_221554_` (`BlockPos`)

**Returns:** `float`
