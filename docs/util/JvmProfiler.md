# JvmProfiler

**Package:** `net.minecraft.util.profiling.jfr`
**Type:** interface

## Methods

### start

```java
boolean start(Environment p_185347_)
```

**Parameters:**

- `p_185347_` (`Environment`)

**Returns:** `boolean`

### stop

```java
Path stop()
```

**Returns:** `Path`

### isRunning

```java
boolean isRunning()
```

**Returns:** `boolean`

### isAvailable

```java
boolean isAvailable()
```

**Returns:** `boolean`

### onServerTick

```java
void onServerTick(float p_185342_)
```

**Parameters:**

- `p_185342_` (`float`)

### onPacketReceived

```java
void onPacketReceived(ConnectionProtocol p_294356_, PacketType<?> p_320354_, SocketAddress p_185345_, int p_185343_)
```

**Parameters:**

- `p_294356_` (`ConnectionProtocol`)
- `p_320354_` (`PacketType<?>`)
- `p_185345_` (`SocketAddress`)
- `p_185343_` (`int`)

### onPacketSent

```java
void onPacketSent(ConnectionProtocol p_295578_, PacketType<?> p_320775_, SocketAddress p_185353_, int p_185351_)
```

**Parameters:**

- `p_295578_` (`ConnectionProtocol`)
- `p_320775_` (`PacketType<?>`)
- `p_185353_` (`SocketAddress`)
- `p_185351_` (`int`)

### onRegionFileRead

```java
void onRegionFileRead(RegionStorageInfo p_325986_, ChunkPos p_326233_, RegionFileVersion p_325994_, int p_326396_)
```

**Parameters:**

- `p_325986_` (`RegionStorageInfo`)
- `p_326233_` (`ChunkPos`)
- `p_325994_` (`RegionFileVersion`)
- `p_326396_` (`int`)

### onRegionFileWrite

```java
void onRegionFileWrite(RegionStorageInfo p_326304_, ChunkPos p_326296_, RegionFileVersion p_326215_, int p_326501_)
```

**Parameters:**

- `p_326304_` (`RegionStorageInfo`)
- `p_326296_` (`ChunkPos`)
- `p_326215_` (`RegionFileVersion`)
- `p_326501_` (`int`)

### onWorldLoadedStarted

```java
ProfiledDuration onWorldLoadedStarted()
```

**Returns:** `ProfiledDuration`

### onChunkGenerate

```java
ProfiledDuration onChunkGenerate(ChunkPos p_185348_, ResourceKey<Level> p_185349_, String p_185350_)
```

**Parameters:**

- `p_185348_` (`ChunkPos`)
- `p_185349_` (`ResourceKey<Level>`)
- `p_185350_` (`String`)

**Returns:** `ProfiledDuration`

### start

```java
public boolean start(Environment p_185368_)
```

**Parameters:**

- `p_185368_` (`Environment`)

**Returns:** `boolean`

### stop

```java
public Path stop()
```

**Returns:** `Path`

### IllegalStateException

```java
throw new IllegalStateException("Attempted to stop Flight Recorder, but it's not supported on this JVM")
```

**Parameters:**

- `Recorder` (`"Attempted to stop Flight`)
- `JVM"` (`but it's not supported on this`)

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

### onPacketReceived

```java
public void onPacketReceived(ConnectionProtocol p_296240_, PacketType<?> p_320930_, SocketAddress p_185365_, int p_185363_)
```

**Parameters:**

- `p_296240_` (`ConnectionProtocol`)
- `p_320930_` (`PacketType<?>`)
- `p_185365_` (`SocketAddress`)
- `p_185363_` (`int`)

### onPacketSent

```java
public void onPacketSent(ConnectionProtocol p_294630_, PacketType<?> p_319941_, SocketAddress p_185377_, int p_185375_)
```

**Parameters:**

- `p_294630_` (`ConnectionProtocol`)
- `p_319941_` (`PacketType<?>`)
- `p_185377_` (`SocketAddress`)
- `p_185375_` (`int`)

### onRegionFileRead

```java
public void onRegionFileRead(RegionStorageInfo p_326355_, ChunkPos p_325955_, RegionFileVersion p_326373_, int p_326370_)
```

**Parameters:**

- `p_326355_` (`RegionStorageInfo`)
- `p_325955_` (`ChunkPos`)
- `p_326373_` (`RegionFileVersion`)
- `p_326370_` (`int`)

### onRegionFileWrite

```java
public void onRegionFileWrite(RegionStorageInfo p_326307_, ChunkPos p_326173_, RegionFileVersion p_325998_, int p_326021_)
```

**Parameters:**

- `p_326307_` (`RegionStorageInfo`)
- `p_326173_` (`ChunkPos`)
- `p_325998_` (`RegionFileVersion`)
- `p_326021_` (`int`)

### onServerTick

```java
public void onServerTick(float p_185361_)
```

**Parameters:**

- `p_185361_` (`float`)

### onWorldLoadedStarted

```java
public ProfiledDuration onWorldLoadedStarted()
```

**Returns:** `ProfiledDuration`

### onChunkGenerate

```java
public ProfiledDuration onChunkGenerate(ChunkPos p_185370_, ResourceKey<Level> p_185371_, String p_185372_)
```

**Parameters:**

- `p_185370_` (`ChunkPos`)
- `p_185371_` (`ResourceKey<Level>`)
- `p_185372_` (`String`)

**Returns:** `ProfiledDuration`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `NoOpProfiler` | class |  |
