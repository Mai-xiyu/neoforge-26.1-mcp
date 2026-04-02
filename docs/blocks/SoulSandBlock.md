# SoulSandBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SoulSandBlock>` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<SoulSandBlock> codec()
```

**Returns:** `MapCodec<SoulSandBlock>`

### SoulSandBlock

```java
public SoulSandBlock(BlockBehaviour.Properties p_56672_)
```

**Parameters:**

- `p_56672_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_56702_, BlockGetter p_56703_, BlockPos p_56704_, CollisionContext p_56705_)
```

**Parameters:**

- `p_56702_` (`BlockState`)
- `p_56703_` (`BlockGetter`)
- `p_56704_` (`BlockPos`)
- `p_56705_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getBlockSupportShape

```java
protected VoxelShape getBlockSupportShape(BlockState p_56707_, BlockGetter p_56708_, BlockPos p_56709_)
```

**Parameters:**

- `p_56707_` (`BlockState`)
- `p_56708_` (`BlockGetter`)
- `p_56709_` (`BlockPos`)

**Returns:** `VoxelShape`

### getVisualShape

```java
protected VoxelShape getVisualShape(BlockState p_56684_, BlockGetter p_56685_, BlockPos p_56686_, CollisionContext p_56687_)
```

**Parameters:**

- `p_56684_` (`BlockState`)
- `p_56685_` (`BlockGetter`)
- `p_56686_` (`BlockPos`)
- `p_56687_` (`CollisionContext`)

**Returns:** `VoxelShape`

### tick

```java
protected void tick(BlockState p_222457_, ServerLevel p_222458_, BlockPos p_222459_, RandomSource p_222460_)
```

**Parameters:**

- `p_222457_` (`BlockState`)
- `p_222458_` (`ServerLevel`)
- `p_222459_` (`BlockPos`)
- `p_222460_` (`RandomSource`)

### updateShape

```java
protected BlockState updateShape(BlockState p_56689_, Direction p_56690_, BlockState p_56691_, LevelAccessor p_56692_, BlockPos p_56693_, BlockPos p_56694_)
```

**Parameters:**

- `p_56689_` (`BlockState`)
- `p_56690_` (`Direction`)
- `p_56691_` (`BlockState`)
- `p_56692_` (`LevelAccessor`)
- `p_56693_` (`BlockPos`)
- `p_56694_` (`BlockPos`)

**Returns:** `BlockState`

### onPlace

```java
protected void onPlace(BlockState p_56696_, Level p_56697_, BlockPos p_56698_, BlockState p_56699_, boolean p_56700_)
```

**Parameters:**

- `p_56696_` (`BlockState`)
- `p_56697_` (`Level`)
- `p_56698_` (`BlockPos`)
- `p_56699_` (`BlockState`)
- `p_56700_` (`boolean`)

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_56679_, PathComputationType p_56682_)
```

**Parameters:**

- `p_56679_` (`BlockState`)
- `p_56682_` (`PathComputationType`)

**Returns:** `boolean`

### getShadeBrightness

```java
protected float getShadeBrightness(BlockState p_222462_, BlockGetter p_222463_, BlockPos p_222464_)
```

**Parameters:**

- `p_222462_` (`BlockState`)
- `p_222463_` (`BlockGetter`)
- `p_222464_` (`BlockPos`)

**Returns:** `float`
