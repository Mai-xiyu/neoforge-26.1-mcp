# ServerboundPlayerAbilitiesPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundPlayerAbilitiesPacket>` |  |

## Methods

### ServerboundPlayerAbilitiesPacket

```java
public ServerboundPlayerAbilitiesPacket(Abilities p_134257_)
```

**Parameters:**

- `p_134257_` (`Abilities`)

**Returns:** `public`

### ServerboundPlayerAbilitiesPacket

```java
private ServerboundPlayerAbilitiesPacket(FriendlyByteBuf p_179709_)
```

**Parameters:**

- `p_179709_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134266_)
```

**Parameters:**

- `p_134266_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundPlayerAbilitiesPacket> type()
```

**Returns:** `PacketType<ServerboundPlayerAbilitiesPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134263_)
```

**Parameters:**

- `p_134263_` (`ServerGamePacketListener`)

**Returns:** `public void`

### isFlying

```java
public boolean isFlying()
```

**Returns:** `public boolean`
