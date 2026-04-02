# ClientboundContainerSetSlotPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundContainerSetSlotPacket>` |  |
| `CARRIED_ITEM` | `int` |  |
| `PLAYER_INVENTORY` | `int` |  |

## Methods

### ClientboundContainerSetSlotPacket

```java
public ClientboundContainerSetSlotPacket(int p_131982_, int p_182713_, int p_131983_, ItemStack p_131984_)
```

**Parameters:**

- `p_131982_` (`int`)
- `p_182713_` (`int`)
- `p_131983_` (`int`)
- `p_131984_` (`ItemStack`)

**Returns:** `public`

### ClientboundContainerSetSlotPacket

```java
private ClientboundContainerSetSlotPacket(RegistryFriendlyByteBuf p_320589_)
```

**Parameters:**

- `p_320589_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_320916_)
```

**Parameters:**

- `p_320916_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundContainerSetSlotPacket> type()
```

**Returns:** `PacketType<ClientboundContainerSetSlotPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_131990_)
```

**Parameters:**

- `p_131990_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getContainerId

```java
public int getContainerId()
```

**Returns:** `public int`

### getSlot

```java
public int getSlot()
```

**Returns:** `public int`

### getItem

```java
public ItemStack getItem()
```

**Returns:** `public ItemStack`

### getStateId

```java
public int getStateId()
```

**Returns:** `public int`
