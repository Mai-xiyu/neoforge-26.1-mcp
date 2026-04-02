# ClientboundUpdateAttributesPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundUpdateAttributesPacket>` |  |
| `MODIFIER_STREAM_CODEC` | `StreamCodec<ByteBuf, AttributeModifier>` |  |
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundUpdateAttributesPacket.AttributeSnapshot>` |  |

## Methods

### ClientboundUpdateAttributesPacket

```java
public ClientboundUpdateAttributesPacket(int p_133580_, Collection<AttributeInstance> p_133581_)
```

**Parameters:**

- `p_133580_` (`int`)
- `p_133581_` (`Collection<AttributeInstance>`)

**Returns:** `public`

### ClientboundUpdateAttributesPacket

```java
private ClientboundUpdateAttributesPacket(int p_320052_, List<ClientboundUpdateAttributesPacket.AttributeSnapshot> p_320480_)
```

**Parameters:**

- `p_320052_` (`int`)
- `p_320480_` (`List<ClientboundUpdateAttributesPacket.AttributeSnapshot>`)

**Returns:** `private`

### type

```java
public PacketType<ClientboundUpdateAttributesPacket> type()
```

**Returns:** `PacketType<ClientboundUpdateAttributesPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133587_)
```

**Parameters:**

- `p_133587_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getEntityId

```java
public int getEntityId()
```

**Returns:** `public int`

### getValues

```java
public List<ClientboundUpdateAttributesPacket.AttributeSnapshot> getValues()
```

**Returns:** `public List<ClientboundUpdateAttributesPacket.AttributeSnapshot>`

### AttributeSnapshot

```java
public static record AttributeSnapshot(Holder<Attribute> attribute, double base, Collection<AttributeModifier> modifiers)
```

**Parameters:**

- `attribute` (`Holder<Attribute>`)
- `base` (`double`)
- `modifiers` (`Collection<AttributeModifier>`)

**Returns:** `public static record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `AttributeSnapshot` | record |  |
