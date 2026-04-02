# ClientboundUpdateAdvancementsPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundUpdateAdvancementsPacket>` |  |

## Methods

### ClientboundUpdateAdvancementsPacket

```java
public ClientboundUpdateAdvancementsPacket(boolean p_133560_, Collection<AdvancementHolder> p_133561_, Set<ResourceLocation> p_133562_, Map<ResourceLocation, AdvancementProgress> p_133563_)
```

**Parameters:**

- `p_133560_` (`boolean`)
- `p_133561_` (`Collection<AdvancementHolder>`)
- `p_133562_` (`Set<ResourceLocation>`)
- `p_133563_` (`Map<ResourceLocation, AdvancementProgress>`)

**Returns:** `public`

### ClientboundUpdateAdvancementsPacket

```java
private ClientboundUpdateAdvancementsPacket(RegistryFriendlyByteBuf p_320832_)
```

**Parameters:**

- `p_320832_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_319915_)
```

**Parameters:**

- `p_319915_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundUpdateAdvancementsPacket> type()
```

**Returns:** `PacketType<ClientboundUpdateAdvancementsPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133569_)
```

**Parameters:**

- `p_133569_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getAdded

```java
public List<AdvancementHolder> getAdded()
```

**Returns:** `public List<AdvancementHolder>`

### getRemoved

```java
public Set<ResourceLocation> getRemoved()
```

**Returns:** `public Set<ResourceLocation>`

### getProgress

```java
public Map<ResourceLocation, AdvancementProgress> getProgress()
```

**Returns:** `public Map<ResourceLocation, AdvancementProgress>`

### shouldReset

```java
public boolean shouldReset()
```

**Returns:** `public boolean`
