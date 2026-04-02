# ClientboundInitializeBorderPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundInitializeBorderPacket>` |  |

## Methods

### ClientboundInitializeBorderPacket

```java
private ClientboundInitializeBorderPacket(FriendlyByteBuf p_178879_)
```

**Parameters:**

- `p_178879_` (`FriendlyByteBuf`)

**Returns:** `private`

### ClientboundInitializeBorderPacket

```java
public ClientboundInitializeBorderPacket(WorldBorder p_178877_)
```

**Parameters:**

- `p_178877_` (`WorldBorder`)

**Returns:** `public`

### write

```java
private void write(FriendlyByteBuf p_178881_)
```

**Parameters:**

- `p_178881_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundInitializeBorderPacket> type()
```

**Returns:** `PacketType<ClientboundInitializeBorderPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_178885_)
```

**Parameters:**

- `p_178885_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getNewCenterX

```java
public double getNewCenterX()
```

**Returns:** `public double`

### getNewCenterZ

```java
public double getNewCenterZ()
```

**Returns:** `public double`

### getNewSize

```java
public double getNewSize()
```

**Returns:** `public double`

### getOldSize

```java
public double getOldSize()
```

**Returns:** `public double`

### getLerpTime

```java
public long getLerpTime()
```

**Returns:** `public long`

### getNewAbsoluteMaxSize

```java
public int getNewAbsoluteMaxSize()
```

**Returns:** `public int`

### getWarningTime

```java
public int getWarningTime()
```

**Returns:** `public int`

### getWarningBlocks

```java
public int getWarningBlocks()
```

**Returns:** `public int`
