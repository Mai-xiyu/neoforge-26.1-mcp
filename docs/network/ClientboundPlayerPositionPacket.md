# ClientboundPlayerPositionPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundPlayerPositionPacket>` |  |

## Methods

### ClientboundPlayerPositionPacket

```java
public ClientboundPlayerPositionPacket(double p_275438_, double p_275354_, double p_275276_, float p_275280_, float p_275203_, Set<RelativeMovement> p_275228_, int p_275614_)
```

**Parameters:**

- `p_275438_` (`double`)
- `p_275354_` (`double`)
- `p_275276_` (`double`)
- `p_275280_` (`float`)
- `p_275203_` (`float`)
- `p_275228_` (`Set<RelativeMovement>`)
- `p_275614_` (`int`)

**Returns:** `public`

### ClientboundPlayerPositionPacket

```java
private ClientboundPlayerPositionPacket(FriendlyByteBuf p_179158_)
```

**Parameters:**

- `p_179158_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_132820_)
```

**Parameters:**

- `p_132820_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundPlayerPositionPacket> type()
```

**Returns:** `PacketType<ClientboundPlayerPositionPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132817_)
```

**Parameters:**

- `p_132817_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getX

```java
public double getX()
```

**Returns:** `public double`

### getY

```java
public double getY()
```

**Returns:** `public double`

### getZ

```java
public double getZ()
```

**Returns:** `public double`

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

### getId

```java
public int getId()
```

**Returns:** `public int`

### getRelativeArguments

```java
public Set<RelativeMovement> getRelativeArguments()
```

**Returns:** `public Set<RelativeMovement>`
