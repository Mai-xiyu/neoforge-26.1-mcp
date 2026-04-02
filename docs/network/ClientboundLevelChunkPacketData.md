# ClientboundLevelChunkPacketData

**Package:** `net.minecraft.network.protocol.game`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundLevelChunkPacketData.BlockEntityInfo>` |  |
| `LIST_STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, List<ClientboundLevelChunkPacketData.BlockEntityInfo>>` |  |

## Methods

### ClientboundLevelChunkPacketData

```java
public ClientboundLevelChunkPacketData(LevelChunk p_195651_)
```

**Parameters:**

- `p_195651_` (`LevelChunk`)

**Returns:** `public`

### ClientboundLevelChunkPacketData

```java
public ClientboundLevelChunkPacketData(RegistryFriendlyByteBuf p_320343_, int p_195654_, int p_195655_)
```

**Parameters:**

- `p_320343_` (`RegistryFriendlyByteBuf`)
- `p_195654_` (`int`)
- `p_195655_` (`int`)

**Returns:** `public`

### RuntimeException

```java
throw new RuntimeException("Can't read heightmap in packet for [" + p_195654_ + ", " + p_195655_ + "]")
```

**Parameters:**

- `"` (`"Can't read heightmap in packet for [" + p_195654_ +`)
- `"]"` (`" + p_195655_ +`)

**Returns:** `throw new`

### RuntimeException

```java
throw new RuntimeException("Chunk Packet trying to allocate too much memory on read.")
```

**Parameters:**

- `read."` (`"Chunk Packet trying to allocate too much memory on`)

**Returns:** `throw new`

### write

```java
public void write(RegistryFriendlyByteBuf p_320863_)
```

**Parameters:**

- `p_320863_` (`RegistryFriendlyByteBuf`)

**Returns:** `public void`

### calculateChunkSize

```java
private static int calculateChunkSize(LevelChunk p_195665_)
```

**Parameters:**

- `p_195665_` (`LevelChunk`)

**Returns:** `private static int`

### getWriteBuffer

```java
private ByteBuf getWriteBuffer()
```

**Returns:** `private ByteBuf`

### extractChunkData

```java
public static void extractChunkData(FriendlyByteBuf p_195669_, LevelChunk p_195670_)
```

**Parameters:**

- `p_195669_` (`FriendlyByteBuf`)
- `p_195670_` (`LevelChunk`)

**Returns:** `public static void`

### getBlockEntitiesTagsConsumer

```java
public Consumer<ClientboundLevelChunkPacketData.BlockEntityTagOutput> getBlockEntitiesTagsConsumer(int p_195658_, int p_195659_)
```

**Parameters:**

- `p_195658_` (`int`)
- `p_195659_` (`int`)

**Returns:** `public Consumer<ClientboundLevelChunkPacketData.BlockEntityTagOutput>`

### getBlockEntitiesTags

```java
private void getBlockEntitiesTags(ClientboundLevelChunkPacketData.BlockEntityTagOutput p_195675_, int p_195676_, int p_195677_)
```

**Parameters:**

- `p_195675_` (`ClientboundLevelChunkPacketData.BlockEntityTagOutput`)
- `p_195676_` (`int`)
- `p_195677_` (`int`)

**Returns:** `private void`

### getReadBuffer

```java
public FriendlyByteBuf getReadBuffer()
```

**Returns:** `public FriendlyByteBuf`

### getHeightmaps

```java
public CompoundTag getHeightmaps()
```

**Returns:** `public CompoundTag`

### BlockEntityInfo

```java
private BlockEntityInfo(int p_195685_, int p_195686_, BlockEntityType<?> p_195687_, CompoundTag p_195688_)
```

**Parameters:**

- `p_195685_` (`int`)
- `p_195686_` (`int`)
- `p_195687_` (`BlockEntityType<?>`)
- `p_195688_` (`CompoundTag`)

**Returns:** `private`

### BlockEntityInfo

```java
private BlockEntityInfo(RegistryFriendlyByteBuf p_319780_)
```

**Parameters:**

- `p_319780_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_320914_)
```

**Parameters:**

- `p_320914_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### create

```java
static ClientboundLevelChunkPacketData.BlockEntityInfo create(BlockEntity p_195692_)
```

**Parameters:**

- `p_195692_` (`BlockEntity`)

**Returns:** `static ClientboundLevelChunkPacketData.BlockEntityInfo`

### accept

```java
void accept(BlockPos p_195696_, BlockEntityType<?> p_195697_, CompoundTag p_195698_)
```

**Parameters:**

- `p_195696_` (`BlockPos`)
- `p_195697_` (`BlockEntityType<?>`)
- `p_195698_` (`CompoundTag`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BlockEntityTagOutput` | interface |  |
