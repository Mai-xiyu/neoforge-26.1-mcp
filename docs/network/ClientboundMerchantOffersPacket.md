# ClientboundMerchantOffersPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundMerchantOffersPacket>` |  |

## Methods

### ClientboundMerchantOffersPacket

```java
public ClientboundMerchantOffersPacket(int p_132456_, MerchantOffers p_132457_, int p_132458_, int p_132459_, boolean p_132460_, boolean p_132461_)
```

**Parameters:**

- `p_132456_` (`int`)
- `p_132457_` (`MerchantOffers`)
- `p_132458_` (`int`)
- `p_132459_` (`int`)
- `p_132460_` (`boolean`)
- `p_132461_` (`boolean`)

**Returns:** `public`

### ClientboundMerchantOffersPacket

```java
private ClientboundMerchantOffersPacket(RegistryFriendlyByteBuf p_320716_)
```

**Parameters:**

- `p_320716_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_320747_)
```

**Parameters:**

- `p_320747_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundMerchantOffersPacket> type()
```

**Returns:** `PacketType<ClientboundMerchantOffersPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132467_)
```

**Parameters:**

- `p_132467_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getContainerId

```java
public int getContainerId()
```

**Returns:** `public int`

### getOffers

```java
public MerchantOffers getOffers()
```

**Returns:** `public MerchantOffers`

### getVillagerLevel

```java
public int getVillagerLevel()
```

**Returns:** `public int`

### getVillagerXp

```java
public int getVillagerXp()
```

**Returns:** `public int`

### showProgress

```java
public boolean showProgress()
```

**Returns:** `public boolean`

### canRestock

```java
public boolean canRestock()
```

**Returns:** `public boolean`
