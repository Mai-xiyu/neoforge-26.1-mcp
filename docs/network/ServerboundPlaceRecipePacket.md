# ServerboundPlaceRecipePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundPlaceRecipePacket>` |  |

## Methods

### ServerboundPlaceRecipePacket

```java
public ServerboundPlaceRecipePacket(int p_134240_, RecipeHolder<?> p_300889_, boolean p_134242_)
```

**Parameters:**

- `p_134240_` (`int`)
- `p_300889_` (`RecipeHolder<?>`)
- `p_134242_` (`boolean`)

**Returns:** `public`

### ServerboundPlaceRecipePacket

```java
private ServerboundPlaceRecipePacket(FriendlyByteBuf p_179706_)
```

**Parameters:**

- `p_179706_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134251_)
```

**Parameters:**

- `p_134251_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundPlaceRecipePacket> type()
```

**Returns:** `PacketType<ServerboundPlaceRecipePacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134248_)
```

**Parameters:**

- `p_134248_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getContainerId

```java
public int getContainerId()
```

**Returns:** `public int`

### getRecipe

```java
public ResourceLocation getRecipe()
```

**Returns:** `public ResourceLocation`

### isShiftDown

```java
public boolean isShiftDown()
```

**Returns:** `public boolean`
