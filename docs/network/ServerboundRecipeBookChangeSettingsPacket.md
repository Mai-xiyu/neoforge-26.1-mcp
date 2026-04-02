# ServerboundRecipeBookChangeSettingsPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundRecipeBookChangeSettingsPacket>` |  |

## Methods

### ServerboundRecipeBookChangeSettingsPacket

```java
public ServerboundRecipeBookChangeSettingsPacket(RecipeBookType p_134366_, boolean p_134367_, boolean p_134368_)
```

**Parameters:**

- `p_134366_` (`RecipeBookType`)
- `p_134367_` (`boolean`)
- `p_134368_` (`boolean`)

**Returns:** `public`

### ServerboundRecipeBookChangeSettingsPacket

```java
private ServerboundRecipeBookChangeSettingsPacket(FriendlyByteBuf p_179734_)
```

**Parameters:**

- `p_179734_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134377_)
```

**Parameters:**

- `p_134377_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundRecipeBookChangeSettingsPacket> type()
```

**Returns:** `PacketType<ServerboundRecipeBookChangeSettingsPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134374_)
```

**Parameters:**

- `p_134374_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getBookType

```java
public RecipeBookType getBookType()
```

**Returns:** `public RecipeBookType`

### isOpen

```java
public boolean isOpen()
```

**Returns:** `public boolean`

### isFiltering

```java
public boolean isFiltering()
```

**Returns:** `public boolean`
