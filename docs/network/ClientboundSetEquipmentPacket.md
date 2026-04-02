# ClientboundSetEquipmentPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundSetEquipmentPacket>` |  |

## Methods

### ClientboundSetEquipmentPacket

```java
public ClientboundSetEquipmentPacket(int p_133202_, List<Pair<EquipmentSlot, ItemStack>> p_133203_)
```

**Parameters:**

- `p_133202_` (`int`)
- `p_133203_` (`List<Pair<EquipmentSlot, ItemStack>>`)

**Returns:** `public`

### ClientboundSetEquipmentPacket

```java
private ClientboundSetEquipmentPacket(RegistryFriendlyByteBuf p_320957_)
```

**Parameters:**

- `p_320957_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_320609_)
```

**Parameters:**

- `p_320609_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetEquipmentPacket> type()
```

**Returns:** `PacketType<ClientboundSetEquipmentPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133209_)
```

**Parameters:**

- `p_133209_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getEntity

```java
public int getEntity()
```

**Returns:** `public int`

### getSlots

```java
public List<Pair<EquipmentSlot, ItemStack>> getSlots()
```

**Returns:** `public List<Pair<EquipmentSlot, ItemStack>>`
