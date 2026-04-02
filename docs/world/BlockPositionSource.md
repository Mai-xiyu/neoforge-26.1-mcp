# BlockPositionSource

**Package:** `net.minecraft.world.level.gameevent`
**Type:** class
**Implements:** `PositionSource`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BlockPositionSource>` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, BlockPositionSource>` |  |

## Methods

### BlockPositionSource

```java
public BlockPositionSource(BlockPos p_157703_)
```

**Parameters:**

- `p_157703_` (`BlockPos`)

**Returns:** `public`

### getPosition

```java
public Optional<Vec3> getPosition(Level p_157708_)
```

**Parameters:**

- `p_157708_` (`Level`)

**Returns:** `Optional<Vec3>`

### getType

```java
public PositionSourceType<BlockPositionSource> getType()
```

**Returns:** `PositionSourceType<BlockPositionSource>`

### codec

```java
public MapCodec<BlockPositionSource> codec()
```

**Returns:** `MapCodec<BlockPositionSource>`

### streamCodec

```java
public StreamCodec<ByteBuf, BlockPositionSource> streamCodec()
```

**Returns:** `StreamCodec<ByteBuf, BlockPositionSource>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | class |  |
