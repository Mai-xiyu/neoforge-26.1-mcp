# ServerboundKeyPacket

**Package:** `net.minecraft.network.protocol.login`
**Type:** class
**Implements:** `Packet<ServerLoginPacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundKeyPacket>` |  |

## Methods

### ServerboundKeyPacket

```java
public ServerboundKeyPacket(SecretKey p_134856_, PublicKey p_134857_, byte[] p_134858_)
```

**Parameters:**

- `p_134856_` (`SecretKey`)
- `p_134857_` (`PublicKey`)
- `p_134858_` (`byte[]`)

**Returns:** `public`

### ServerboundKeyPacket

```java
private ServerboundKeyPacket(FriendlyByteBuf p_179829_)
```

**Parameters:**

- `p_179829_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134870_)
```

**Parameters:**

- `p_134870_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundKeyPacket> type()
```

**Returns:** `PacketType<ServerboundKeyPacket>`

### handle

```java
public void handle(ServerLoginPacketListener p_134866_)
```

**Parameters:**

- `p_134866_` (`ServerLoginPacketListener`)

**Returns:** `public void`

### getSecretKey

```java
public SecretKey getSecretKey(PrivateKey p_134860_)
```

**Parameters:**

- `p_134860_` (`PrivateKey`)

**Returns:** `public SecretKey`

### isChallengeValid

```java
public boolean isChallengeValid(byte[] p_254210_, PrivateKey p_253763_)
```

**Parameters:**

- `p_254210_` (`byte[]`)
- `p_253763_` (`PrivateKey`)

**Returns:** `public boolean`
