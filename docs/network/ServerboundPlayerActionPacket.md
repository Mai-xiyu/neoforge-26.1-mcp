# ServerboundPlayerActionPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundPlayerActionPacket>` |  |

## Methods

### ServerboundPlayerActionPacket

```java
public ServerboundPlayerActionPacket(ServerboundPlayerActionPacket.Action p_237983_, BlockPos p_237984_, Direction p_237985_, int p_237986_)
```

**Parameters:**

- `p_237983_` (`ServerboundPlayerActionPacket.Action`)
- `p_237984_` (`BlockPos`)
- `p_237985_` (`Direction`)
- `p_237986_` (`int`)

**Returns:** `public`

### ServerboundPlayerActionPacket

```java
public ServerboundPlayerActionPacket(ServerboundPlayerActionPacket.Action p_134272_, BlockPos p_134273_, Direction p_134274_)
```

**Parameters:**

- `p_134272_` (`ServerboundPlayerActionPacket.Action`)
- `p_134273_` (`BlockPos`)
- `p_134274_` (`Direction`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### ServerboundPlayerActionPacket

```java
private ServerboundPlayerActionPacket(FriendlyByteBuf p_179711_)
```

**Parameters:**

- `p_179711_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134283_)
```

**Parameters:**

- `p_134283_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundPlayerActionPacket> type()
```

**Returns:** `PacketType<ServerboundPlayerActionPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134280_)
```

**Parameters:**

- `p_134280_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`

### getDirection

```java
public Direction getDirection()
```

**Returns:** `public Direction`

### getAction

```java
public ServerboundPlayerActionPacket.Action getAction()
```

**Returns:** `public ServerboundPlayerActionPacket.Action`

### getSequence

```java
public int getSequence()
```

**Returns:** `public int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Action` | enum |  |
