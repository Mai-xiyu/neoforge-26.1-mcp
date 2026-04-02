# ServerboundUseItemPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundUseItemPacket>` |  |

## Methods

### ServerboundUseItemPacket

```java
public ServerboundUseItemPacket(InteractionHand p_238011_, int p_238012_, float p_348579_, float p_348520_)
```

**Parameters:**

- `p_238011_` (`InteractionHand`)
- `p_238012_` (`int`)
- `p_348579_` (`float`)
- `p_348520_` (`float`)

**Returns:** `public`

### ServerboundUseItemPacket

```java
private ServerboundUseItemPacket(FriendlyByteBuf p_179798_)
```

**Parameters:**

- `p_179798_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134719_)
```

**Parameters:**

- `p_134719_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundUseItemPacket> type()
```

**Returns:** `PacketType<ServerboundUseItemPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134716_)
```

**Parameters:**

- `p_134716_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getHand

```java
public InteractionHand getHand()
```

**Returns:** `public InteractionHand`

### getSequence

```java
public int getSequence()
```

**Returns:** `public int`

### getYRot

```java
public float getYRot()
```

**Returns:** `public float`

### getXRot

```java
public float getXRot()
```

**Returns:** `public float`
