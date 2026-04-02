# ClientboundRecipePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundRecipePacket>` |  |

## Methods

### ClientboundRecipePacket

```java
public ClientboundRecipePacket(ClientboundRecipePacket.State p_132855_, Collection<ResourceLocation> p_132856_, Collection<ResourceLocation> p_132857_, RecipeBookSettings p_132858_)
```

**Parameters:**

- `p_132855_` (`ClientboundRecipePacket.State`)
- `p_132856_` (`Collection<ResourceLocation>`)
- `p_132857_` (`Collection<ResourceLocation>`)
- `p_132858_` (`RecipeBookSettings`)

**Returns:** `public`

### ClientboundRecipePacket

```java
private ClientboundRecipePacket(FriendlyByteBuf p_179162_)
```

**Parameters:**

- `p_179162_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_132867_)
```

**Parameters:**

- `p_132867_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundRecipePacket> type()
```

**Returns:** `PacketType<ClientboundRecipePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132864_)
```

**Parameters:**

- `p_132864_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getRecipes

```java
public List<ResourceLocation> getRecipes()
```

**Returns:** `public List<ResourceLocation>`

### getHighlights

```java
public List<ResourceLocation> getHighlights()
```

**Returns:** `public List<ResourceLocation>`

### getBookSettings

```java
public RecipeBookSettings getBookSettings()
```

**Returns:** `public RecipeBookSettings`

### getState

```java
public ClientboundRecipePacket.State getState()
```

**Returns:** `public ClientboundRecipePacket.State`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `State` | enum |  |
