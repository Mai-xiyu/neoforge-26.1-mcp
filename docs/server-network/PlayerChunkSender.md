# PlayerChunkSender

**Package:** `net.minecraft.server.network`
**Type:** class
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MIN_CHUNKS_PER_TICK` | `float` |  |
| `MAX_CHUNKS_PER_TICK` | `float` |  |

## Methods

### PlayerChunkSender

```java
public PlayerChunkSender(boolean p_294754_)
```

**Parameters:**

- `p_294754_` (`boolean`)

**Returns:** `public`

### markChunkPendingToSend

```java
public void markChunkPendingToSend(LevelChunk p_296454_)
```

**Parameters:**

- `p_296454_` (`LevelChunk`)

**Returns:** `public void`

### dropChunk

```java
public void dropChunk(ServerPlayer p_294214_, ChunkPos p_294933_)
```

**Parameters:**

- `p_294214_` (`ServerPlayer`)
- `p_294933_` (`ChunkPos`)

**Returns:** `public void`

### sendNextChunks

```java
public void sendNextChunks(ServerPlayer p_296009_)
```

**Parameters:**

- `p_296009_` (`ServerPlayer`)

**Returns:** `public void`

### sendChunk

```java
 sendChunk()
```

**Returns:** ``

### sendChunk

```java
private static void sendChunk(ServerGamePacketListenerImpl p_295237_, ServerLevel p_294963_, LevelChunk p_295144_)
```

**Parameters:**

- `p_295237_` (`ServerGamePacketListenerImpl`)
- `p_294963_` (`ServerLevel`)
- `p_295144_` (`LevelChunk`)

**Returns:** `private static void`

### collectChunksToSend

```java
private List<LevelChunk> collectChunksToSend(ChunkMap p_296053_, ChunkPos p_295659_)
```

**Parameters:**

- `p_296053_` (`ChunkMap`)
- `p_295659_` (`ChunkPos`)

**Returns:** `private List<LevelChunk>`

### onChunkBatchReceivedByClient

```java
public void onChunkBatchReceivedByClient(float p_294462_)
```

**Parameters:**

- `p_294462_` (`float`)

**Returns:** `public void`

### isPending

```java
public boolean isPending(long p_296128_)
```

**Parameters:**

- `p_296128_` (`long`)

**Returns:** `public boolean`
