# ClientboundContainerSetContentPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundContainerSetContentPacket>` |  |

## Methods

### ClientboundContainerSetContentPacket

```java
public ClientboundContainerSetContentPacket(int p_182704_, int p_182705_, NonNullList<ItemStack> p_182706_, ItemStack p_182707_)
```

**Parameters:**

- `p_182704_` (`int`)
- `p_182705_` (`int`)
- `p_182706_` (`NonNullList<ItemStack>`)
- `p_182707_` (`ItemStack`)

**Returns:** `public`

### ClientboundContainerSetContentPacket

```java
private ClientboundContainerSetContentPacket(RegistryFriendlyByteBuf p_319794_)
```

**Parameters:**

- `p_319794_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_320758_)
```

**Parameters:**

- `p_320758_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundContainerSetContentPacket> type()
```

**Returns:** `PacketType<ClientboundContainerSetContentPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_131953_)
```

**Parameters:**

- `p_131953_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getContainerId

```java
public int getContainerId()
```

**Returns:** `public int`

### getItems

```java
public List<ItemStack> getItems()
```

**Returns:** `public List<ItemStack>`

### getCarriedItem

```java
public ItemStack getCarriedItem()
```

**Returns:** `public ItemStack`

### getStateId

```java
public int getStateId()
```

**Returns:** `public int`
