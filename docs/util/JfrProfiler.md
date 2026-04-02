# JfrProfiler

**Package:** `net.minecraft.util.profiling.jfr`
**Type:** class
**Implements:** `JvmProfiler`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ROOT_CATEGORY` | `String` |  |
| `WORLD_GEN_CATEGORY` | `String` |  |
| `TICK_CATEGORY` | `String` |  |
| `NETWORK_CATEGORY` | `String` |  |
| `STORAGE_CATEGORY` | `String` |  |

## Methods

### JfrProfiler

```java
private JfrProfiler()
```

**Returns:** `private`

### getInstance

```java
public static JfrProfiler getInstance()
```

**Returns:** `public static JfrProfiler`

### start

```java
public boolean start(Environment p_185307_)
```

**Parameters:**

- `p_185307_` (`Environment`)

**Returns:** `boolean`

### stop

```java
public Path stop()
```

**Returns:** `Path`

### IllegalStateException

```java
throw new IllegalStateException("Not currently profiling")
```

**Parameters:**

- `profiling"` (`"Not currently`)

**Returns:** `throw new`

### isRunning

```java
public boolean isRunning()
```

**Returns:** `boolean`

### isAvailable

```java
public boolean isAvailable()
```

**Returns:** `boolean`

### start

```java
private boolean start(Reader p_185317_, Environment p_185318_)
```

**Parameters:**

- `p_185317_` (`Reader`)
- `p_185318_` (`Environment`)

**Returns:** `private boolean`

### setupSummaryListener

```java
private void setupSummaryListener()
```

**Returns:** `private void`

### recordingStateChanged

```java
public void recordingStateChanged(Recording p_185339_)
```

**Parameters:**

- `p_185339_` (`Recording`)

### onServerTick

```java
public void onServerTick(float p_185300_)
```

**Parameters:**

- `p_185300_` (`float`)

### onPacketReceived

```java
public void onPacketReceived(ConnectionProtocol p_294286_, PacketType<?> p_320639_, SocketAddress p_185304_, int p_185302_)
```

**Parameters:**

- `p_294286_` (`ConnectionProtocol`)
- `p_320639_` (`PacketType<?>`)
- `p_185304_` (`SocketAddress`)
- `p_185302_` (`int`)

### onPacketSent

```java
public void onPacketSent(ConnectionProtocol p_295940_, PacketType<?> p_320751_, SocketAddress p_185325_, int p_185323_)
```

**Parameters:**

- `p_295940_` (`ConnectionProtocol`)
- `p_320751_` (`PacketType<?>`)
- `p_185325_` (`SocketAddress`)
- `p_185323_` (`int`)

### networkStatFor

```java
private NetworkSummaryEvent.SumAggregation networkStatFor(SocketAddress p_185320_)
```

**Parameters:**

- `p_185320_` (`SocketAddress`)

**Returns:** `private NetworkSummaryEvent.SumAggregation`

### onRegionFileRead

```java
public void onRegionFileRead(RegionStorageInfo p_326253_, ChunkPos p_326199_, RegionFileVersion p_326089_, int p_325934_)
```

**Parameters:**

- `p_326253_` (`RegionStorageInfo`)
- `p_326199_` (`ChunkPos`)
- `p_326089_` (`RegionFileVersion`)
- `p_325934_` (`int`)

### onRegionFileWrite

```java
public void onRegionFileWrite(RegionStorageInfo p_326009_, ChunkPos p_326210_, RegionFileVersion p_326516_, int p_326455_)
```

**Parameters:**

- `p_326009_` (`RegionStorageInfo`)
- `p_326210_` (`ChunkPos`)
- `p_326516_` (`RegionFileVersion`)
- `p_326455_` (`int`)

### onWorldLoadedStarted

```java
public ProfiledDuration onWorldLoadedStarted()
```

**Returns:** `ProfiledDuration`

### onChunkGenerate

```java
public ProfiledDuration onChunkGenerate(ChunkPos p_185313_, ResourceKey<Level> p_185314_, String p_185315_)
```

**Parameters:**

- `p_185313_` (`ChunkPos`)
- `p_185314_` (`ResourceKey<Level>`)
- `p_185315_` (`String`)

**Returns:** `ProfiledDuration`
