# ServerboundRecipeBookSeenRecipePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundRecipeBookSeenRecipePacket>` |  |

## Methods

### ServerboundRecipeBookSeenRecipePacket

```java
public ServerboundRecipeBookSeenRecipePacket(RecipeHolder<?> p_301152_)
```

**Parameters:**

- `p_301152_` (`RecipeHolder<?>`)

**Returns:** `public`

### ServerboundRecipeBookSeenRecipePacket

```java
private ServerboundRecipeBookSeenRecipePacket(FriendlyByteBuf p_179736_)
```

**Parameters:**

- `p_179736_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134392_)
```

**Parameters:**

- `p_134392_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundRecipeBookSeenRecipePacket> type()
```

**Returns:** `PacketType<ServerboundRecipeBookSeenRecipePacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134389_)
```

**Parameters:**

- `p_134389_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getRecipe

```java
public ResourceLocation getRecipe()
```

**Returns:** `public ResourceLocation`
