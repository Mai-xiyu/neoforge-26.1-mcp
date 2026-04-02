# ClientboundBundlePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Extends:** `BundlePacket<ClientGamePacketListener>`

## Methods

### ClientboundBundlePacket

```java
public ClientboundBundlePacket(Iterable<Packet<? super ClientGamePacketListener>> p_265231_)
```

**Parameters:**

- `p_265231_` (`Iterable<Packet<? super ClientGamePacketListener>>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### type

```java
public PacketType<ClientboundBundlePacket> type()
```

**Returns:** `PacketType<ClientboundBundlePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_265490_)
```

**Parameters:**

- `p_265490_` (`ClientGamePacketListener`)

**Returns:** `public void`
