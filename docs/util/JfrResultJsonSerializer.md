# JfrResultJsonSerializer

**Package:** `net.minecraft.util.profiling.jfr.serialize`
**Type:** class

## Methods

### serializePacketId

```java
private static void serializePacketId(PacketIdentification p_326086_, JsonObject p_326120_)
```

**Parameters:**

- `p_326086_` (`PacketIdentification`)
- `p_326120_` (`JsonObject`)

**Returns:** `private static void`

### serializeChunkId

```java
private static void serializeChunkId(ChunkIdentification p_325926_, JsonObject p_325916_)
```

**Parameters:**

- `p_325926_` (`ChunkIdentification`)
- `p_325916_` (`JsonObject`)

**Returns:** `private static void`

### format

```java
public String format(JfrStatsResult p_185536_)
```

**Parameters:**

- `p_185536_` (`JfrStatsResult`)

**Returns:** `public String`

### heap

```java
private JsonElement heap(GcHeapStat.Summary p_185542_)
```

**Parameters:**

- `p_185542_` (`GcHeapStat.Summary`)

**Returns:** `private JsonElement`

### chunkGen

```java
private JsonElement chunkGen(List<Pair<ChunkStatus, TimedStatSummary<ChunkGenStat>>> p_185573_)
```

**Parameters:**

- `p_185573_` (`List<Pair<ChunkStatus, TimedStatSummary<ChunkGenStat>>>`)

**Returns:** `private JsonElement`

### threadAllocations

```java
private JsonElement threadAllocations(ThreadAllocationStat.Summary p_185546_)
```

**Parameters:**

- `p_185546_` (`ThreadAllocationStat.Summary`)

**Returns:** `private JsonElement`

### serverTicks

```java
private JsonElement serverTicks(List<TickTimeStat> p_185587_)
```

**Parameters:**

- `p_185587_` (`List<TickTimeStat>`)

**Returns:** `private JsonElement`

### fileIO

```java
private JsonElement fileIO(JfrStatsResult p_185578_)
```

**Parameters:**

- `p_185578_` (`JfrStatsResult`)

**Returns:** `private JsonElement`

### fileIoSummary

```java
private JsonElement fileIoSummary(FileIOStat.Summary p_185540_)
```

**Parameters:**

- `p_185540_` (`FileIOStat.Summary`)

**Returns:** `private JsonElement`

### network

```java
private JsonElement network(JfrStatsResult p_185589_)
```

**Parameters:**

- `p_185589_` (`JfrStatsResult`)

**Returns:** `private JsonElement`

### ioSummary

```java
<T> private <T> JsonElement ioSummary(IoSummary<T> p_326081_, BiConsumer<T, JsonObject> p_326072_)
```

**Parameters:**

- `p_326081_` (`IoSummary<T>`)
- `p_326072_` (`BiConsumer<T, JsonObject>`)

**Returns:** `private <T> JsonElement`

### cpu

```java
private JsonElement cpu(List<CpuLoadStat> p_185591_)
```

**Parameters:**

- `p_185591_` (`List<CpuLoadStat>`)

**Returns:** `private JsonElement`
