# TrappedChestBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `ChestBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TrappedChestBlock>` |  |

## Methods

### codec

```java
public MapCodec<TrappedChestBlock> codec()
```

**Returns:** `MapCodec<TrappedChestBlock>`

### TrappedChestBlock

```java
public TrappedChestBlock(BlockBehaviour.Properties p_57573_)
```

**Parameters:**

- `p_57573_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_154834_, BlockState p_154835_)
```

**Parameters:**

- `p_154834_` (`BlockPos`)
- `p_154835_` (`BlockState`)

**Returns:** `BlockEntity`

### TrappedChestBlockEntity

```java
return new TrappedChestBlockEntity()
```

**Returns:** `return new`

### getOpenChestStat

```java
protected Stat<ResourceLocation> getOpenChestStat()
```

**Returns:** `Stat<ResourceLocation>`

### isSignalSource

```java
protected boolean isSignalSource(BlockState p_57587_)
```

**Parameters:**

- `p_57587_` (`BlockState`)

**Returns:** `boolean`

### getSignal

```java
protected int getSignal(BlockState p_57577_, BlockGetter p_57578_, BlockPos p_57579_, Direction p_57580_)
```

**Parameters:**

- `p_57577_` (`BlockState`)
- `p_57578_` (`BlockGetter`)
- `p_57579_` (`BlockPos`)
- `p_57580_` (`Direction`)

**Returns:** `int`

### getDirectSignal

```java
protected int getDirectSignal(BlockState p_57582_, BlockGetter p_57583_, BlockPos p_57584_, Direction p_57585_)
```

**Parameters:**

- `p_57582_` (`BlockState`)
- `p_57583_` (`BlockGetter`)
- `p_57584_` (`BlockPos`)
- `p_57585_` (`Direction`)

**Returns:** `int`
