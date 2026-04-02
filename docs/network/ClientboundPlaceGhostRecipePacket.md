# ClientboundPlaceGhostRecipePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundPlaceGhostRecipePacket>` |  |

## Methods

### ClientboundPlaceGhostRecipePacket

```java
public ClientboundPlaceGhostRecipePacket(int p_132647_, RecipeHolder<?> p_301206_)
```

**Parameters:**

- `p_132647_` (`int`)
- `p_301206_` (`RecipeHolder<?>`)

**Returns:** `public`

### ClientboundPlaceGhostRecipePacket

```java
private ClientboundPlaceGhostRecipePacket(FriendlyByteBuf p_179027_)
```

**Parameters:**

- `p_179027_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_132657_)
```

**Parameters:**

- `p_132657_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundPlaceGhostRecipePacket> type()
```

**Returns:** `PacketType<ClientboundPlaceGhostRecipePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132654_)
```

**Parameters:**

- `p_132654_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getRecipe

```java
public ResourceLocation getRecipe()
```

**Returns:** `public ResourceLocation`

### getContainerId

```java
public int getContainerId()
```

**Returns:** `public int`
