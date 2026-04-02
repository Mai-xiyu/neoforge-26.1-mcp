# ServerboundJigsawGeneratePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundJigsawGeneratePacket>` |  |

## Methods

### ServerboundJigsawGeneratePacket

```java
public ServerboundJigsawGeneratePacket(BlockPos p_134078_, int p_134079_, boolean p_134080_)
```

**Parameters:**

- `p_134078_` (`BlockPos`)
- `p_134079_` (`int`)
- `p_134080_` (`boolean`)

**Returns:** `public`

### ServerboundJigsawGeneratePacket

```java
private ServerboundJigsawGeneratePacket(FriendlyByteBuf p_179669_)
```

**Parameters:**

- `p_179669_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134089_)
```

**Parameters:**

- `p_134089_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundJigsawGeneratePacket> type()
```

**Returns:** `PacketType<ServerboundJigsawGeneratePacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134086_)
```

**Parameters:**

- `p_134086_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`

### levels

```java
public int levels()
```

**Returns:** `public int`

### keepJigsaws

```java
public boolean keepJigsaws()
```

**Returns:** `public boolean`
