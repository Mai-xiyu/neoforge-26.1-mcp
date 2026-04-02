# ServerboundUseItemOnPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundUseItemOnPacket>` |  |

## Methods

### ServerboundUseItemOnPacket

```java
public ServerboundUseItemOnPacket(InteractionHand p_238005_, BlockHitResult p_238006_, int p_238007_)
```

**Parameters:**

- `p_238005_` (`InteractionHand`)
- `p_238006_` (`BlockHitResult`)
- `p_238007_` (`int`)

**Returns:** `public`

### ServerboundUseItemOnPacket

```java
private ServerboundUseItemOnPacket(FriendlyByteBuf p_179796_)
```

**Parameters:**

- `p_179796_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134705_)
```

**Parameters:**

- `p_134705_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundUseItemOnPacket> type()
```

**Returns:** `PacketType<ServerboundUseItemOnPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134702_)
```

**Parameters:**

- `p_134702_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getHand

```java
public InteractionHand getHand()
```

**Returns:** `public InteractionHand`

### getHitResult

```java
public BlockHitResult getHitResult()
```

**Returns:** `public BlockHitResult`

### getSequence

```java
public int getSequence()
```

**Returns:** `public int`
