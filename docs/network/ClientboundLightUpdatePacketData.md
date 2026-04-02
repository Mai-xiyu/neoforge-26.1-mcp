# ClientboundLightUpdatePacketData

**Package:** `net.minecraft.network.protocol.game`
**Type:** class

## Methods

### ClientboundLightUpdatePacketData

```java
public ClientboundLightUpdatePacketData(ChunkPos p_285385_, LevelLightEngine p_285143_, BitSet p_285253_, BitSet p_285051_)
```

**Parameters:**

- `p_285385_` (`ChunkPos`)
- `p_285143_` (`LevelLightEngine`)
- `p_285253_` (`BitSet`)
- `p_285051_` (`BitSet`)

**Returns:** `public`

### ClientboundLightUpdatePacketData

```java
public ClientboundLightUpdatePacketData(FriendlyByteBuf p_195737_, int p_195738_, int p_195739_)
```

**Parameters:**

- `p_195737_` (`FriendlyByteBuf`)
- `p_195738_` (`int`)
- `p_195739_` (`int`)

**Returns:** `public`

### write

```java
public void write(FriendlyByteBuf p_195750_)
```

**Parameters:**

- `p_195750_` (`FriendlyByteBuf`)

**Returns:** `public void`

### prepareSectionData

```java
private void prepareSectionData(ChunkPos p_195742_, LevelLightEngine p_195743_, LightLayer p_195744_, int p_195745_, BitSet p_195746_, BitSet p_195747_, List<byte[]> p_195748_)
```

**Parameters:**

- `p_195742_` (`ChunkPos`)
- `p_195743_` (`LevelLightEngine`)
- `p_195744_` (`LightLayer`)
- `p_195745_` (`int`)
- `p_195746_` (`BitSet`)
- `p_195747_` (`BitSet`)
- `p_195748_` (`List<byte[]>`)

**Returns:** `private void`

### getSkyYMask

```java
public BitSet getSkyYMask()
```

**Returns:** `public BitSet`

### getEmptySkyYMask

```java
public BitSet getEmptySkyYMask()
```

**Returns:** `public BitSet`

### getSkyUpdates

```java
public List<byte[]> getSkyUpdates()
```

**Returns:** `public List<byte[]>`

### getBlockYMask

```java
public BitSet getBlockYMask()
```

**Returns:** `public BitSet`

### getEmptyBlockYMask

```java
public BitSet getEmptyBlockYMask()
```

**Returns:** `public BitSet`

### getBlockUpdates

```java
public List<byte[]> getBlockUpdates()
```

**Returns:** `public List<byte[]>`
