# ClientboundUpdateRecipesPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundUpdateRecipesPacket>` |  |

## Methods

### ClientboundUpdateRecipesPacket

```java
public ClientboundUpdateRecipesPacket(Collection<RecipeHolder<?>> p_133632_)
```

**Parameters:**

- `p_133632_` (`Collection<RecipeHolder<?>>`)

**Returns:** `public`

### type

```java
public PacketType<ClientboundUpdateRecipesPacket> type()
```

**Returns:** `PacketType<ClientboundUpdateRecipesPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133641_)
```

**Parameters:**

- `p_133641_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getRecipes

```java
public List<RecipeHolder<?>> getRecipes()
```

**Returns:** `public List<RecipeHolder<?>>`
