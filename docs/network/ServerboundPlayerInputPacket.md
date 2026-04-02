# ServerboundPlayerInputPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundPlayerInputPacket>` |  |

## Methods

### ServerboundPlayerInputPacket

```java
public ServerboundPlayerInputPacket(float p_134345_, float p_134346_, boolean p_134347_, boolean p_134348_)
```

**Parameters:**

- `p_134345_` (`float`)
- `p_134346_` (`float`)
- `p_134347_` (`boolean`)
- `p_134348_` (`boolean`)

**Returns:** `public`

### ServerboundPlayerInputPacket

```java
private ServerboundPlayerInputPacket(FriendlyByteBuf p_179720_)
```

**Parameters:**

- `p_179720_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134357_)
```

**Parameters:**

- `p_134357_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundPlayerInputPacket> type()
```

**Returns:** `PacketType<ServerboundPlayerInputPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134354_)
```

**Parameters:**

- `p_134354_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getXxa

```java
public float getXxa()
```

**Returns:** `public float`

### getZza

```java
public float getZza()
```

**Returns:** `public float`

### isJumping

```java
public boolean isJumping()
```

**Returns:** `public boolean`

### isShiftKeyDown

```java
public boolean isShiftKeyDown()
```

**Returns:** `public boolean`
