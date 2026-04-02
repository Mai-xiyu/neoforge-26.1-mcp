# ClientChunkCache

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Extends:** `ChunkSource`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ClientChunkCache

```java
public ClientChunkCache(ClientLevel p_104414_, int p_104415_)
```

**Parameters:**

- `p_104414_` (`ClientLevel`)
- `p_104415_` (`int`)

**Returns:** `public`

### getLightEngine

```java
public LevelLightEngine getLightEngine()
```

**Returns:** `LevelLightEngine`

### isValidChunk

```java
private static boolean isValidChunk(LevelChunk p_104439_, int p_104440_, int p_104441_)
```

**Parameters:**

- `p_104439_` (`LevelChunk`)
- `p_104440_` (`int`)
- `p_104441_` (`int`)

**Returns:** `private static boolean`

### drop

```java
public void drop(ChunkPos p_295783_)
```

**Parameters:**

- `p_295783_` (`ChunkPos`)

**Returns:** `public void`

### getChunk

```java
public LevelChunk getChunk(int p_104451_, int p_104452_, ChunkStatus p_330230_, boolean p_104454_)
```

**Parameters:**

- `p_104451_` (`int`)
- `p_104452_` (`int`)
- `p_330230_` (`ChunkStatus`)
- `p_104454_` (`boolean`)

**Returns:** `LevelChunk`

### getLevel

```java
public BlockGetter getLevel()
```

**Returns:** `BlockGetter`

### replaceBiomes

```java
public void replaceBiomes(int p_275374_, int p_275226_, FriendlyByteBuf p_275745_)
```

**Parameters:**

- `p_275374_` (`int`)
- `p_275226_` (`int`)
- `p_275745_` (`FriendlyByteBuf`)

**Returns:** `public void`

### replaceWithPacketData

```java
public LevelChunk replaceWithPacketData(int p_194117_, int p_194118_, FriendlyByteBuf p_194119_, CompoundTag p_194120_, Consumer<ClientboundLevelChunkPacketData.BlockEntityTagOutput> p_194121_)
```

**Parameters:**

- `p_194117_` (`int`)
- `p_194118_` (`int`)
- `p_194119_` (`FriendlyByteBuf`)
- `p_194120_` (`CompoundTag`)
- `p_194121_` (`Consumer<ClientboundLevelChunkPacketData.BlockEntityTagOutput>`)

**Returns:** `LevelChunk`

### tick

```java
public void tick(BooleanSupplier p_202421_, boolean p_202422_)
```

**Parameters:**

- `p_202421_` (`BooleanSupplier`)
- `p_202422_` (`boolean`)

### updateViewCenter

```java
public void updateViewCenter(int p_104460_, int p_104461_)
```

**Parameters:**

- `p_104460_` (`int`)
- `p_104461_` (`int`)

**Returns:** `public void`

### updateViewRadius

```java
public void updateViewRadius(int p_104417_)
```

**Parameters:**

- `p_104417_` (`int`)

**Returns:** `public void`

### calculateStorageRange

```java
private static int calculateStorageRange(int p_104449_)
```

**Parameters:**

- `p_104449_` (`int`)

**Returns:** `private static int`

### gatherStats

```java
public String gatherStats()
```

**Returns:** `String`

### getLoadedChunksCount

```java
public int getLoadedChunksCount()
```

**Returns:** `int`

### onLightUpdate

```java
public void onLightUpdate(LightLayer p_104436_, SectionPos p_104437_)
```

**Parameters:**

- `p_104436_` (`LightLayer`)
- `p_104437_` (`SectionPos`)

### Storage

```java
 Storage(int p_104474_)
```

**Parameters:**

- `p_104474_` (`int`)

**Returns:** ``

### getIndex

```java
int getIndex(int p_104482_, int p_104483_)
```

**Parameters:**

- `p_104482_` (`int`)
- `p_104483_` (`int`)

**Returns:** `int`

### replace

```java
protected void replace(int p_104485_, LevelChunk p_104486_)
```

**Parameters:**

- `p_104485_` (`int`)
- `p_104486_` (`LevelChunk`)

**Returns:** `protected void`

### replace

```java
protected LevelChunk replace(int p_104488_, LevelChunk p_104489_, LevelChunk p_104490_)
```

**Parameters:**

- `p_104488_` (`int`)
- `p_104489_` (`LevelChunk`)
- `p_104490_` (`LevelChunk`)

**Returns:** `protected LevelChunk`

### inRange

```java
boolean inRange(int p_104501_, int p_104502_)
```

**Parameters:**

- `p_104501_` (`int`)
- `p_104502_` (`int`)

**Returns:** `boolean`

### getChunk

```java
protected LevelChunk getChunk(int p_104480_)
```

**Parameters:**

- `p_104480_` (`int`)

**Returns:** `LevelChunk`

### dumpChunks

```java
private void dumpChunks(String p_171623_)
```

**Parameters:**

- `p_171623_` (`String`)

**Returns:** `private void`
