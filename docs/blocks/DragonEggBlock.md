# DragonEggBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `FallingBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DragonEggBlock>` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<DragonEggBlock> codec()
```

**Returns:** `MapCodec<DragonEggBlock>`

### DragonEggBlock

```java
public DragonEggBlock(BlockBehaviour.Properties p_52911_)
```

**Parameters:**

- `p_52911_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_52930_, BlockGetter p_52931_, BlockPos p_52932_, CollisionContext p_52933_)
```

**Parameters:**

- `p_52930_` (`BlockState`)
- `p_52931_` (`BlockGetter`)
- `p_52932_` (`BlockPos`)
- `p_52933_` (`CollisionContext`)

**Returns:** `VoxelShape`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_52923_, Level p_52924_, BlockPos p_52925_, Player p_52926_, BlockHitResult p_52928_)
```

**Parameters:**

- `p_52923_` (`BlockState`)
- `p_52924_` (`Level`)
- `p_52925_` (`BlockPos`)
- `p_52926_` (`Player`)
- `p_52928_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### attack

```java
protected void attack(BlockState p_52918_, Level p_52919_, BlockPos p_52920_, Player p_52921_)
```

**Parameters:**

- `p_52918_` (`BlockState`)
- `p_52919_` (`Level`)
- `p_52920_` (`BlockPos`)
- `p_52921_` (`Player`)

### teleport

```java
private void teleport(BlockState p_52936_, Level p_52937_, BlockPos p_52938_)
```

**Parameters:**

- `p_52936_` (`BlockState`)
- `p_52937_` (`Level`)
- `p_52938_` (`BlockPos`)

**Returns:** `private void`

### getDelayAfterPlace

```java
protected int getDelayAfterPlace()
```

**Returns:** `int`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_52913_, PathComputationType p_52916_)
```

**Parameters:**

- `p_52913_` (`BlockState`)
- `p_52916_` (`PathComputationType`)

**Returns:** `boolean`
