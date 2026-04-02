# ServerboundContainerClickPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ServerboundContainerClickPacket>` |  |

## Methods

### ServerboundContainerClickPacket

```java
public ServerboundContainerClickPacket(int p_182734_, int p_182735_, int p_182736_, int p_182737_, ClickType p_182738_, ItemStack p_182739_, Int2ObjectMap<ItemStack> p_182740_)
```

**Parameters:**

- `p_182734_` (`int`)
- `p_182735_` (`int`)
- `p_182736_` (`int`)
- `p_182737_` (`int`)
- `p_182738_` (`ClickType`)
- `p_182739_` (`ItemStack`)
- `p_182740_` (`Int2ObjectMap<ItemStack>`)

**Returns:** `public`

### ServerboundContainerClickPacket

```java
private ServerboundContainerClickPacket(RegistryFriendlyByteBuf p_319940_)
```

**Parameters:**

- `p_319940_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_319872_)
```

**Parameters:**

- `p_319872_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundContainerClickPacket> type()
```

**Returns:** `PacketType<ServerboundContainerClickPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_133958_)
```

**Parameters:**

- `p_133958_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getContainerId

```java
public int getContainerId()
```

**Returns:** `public int`

### getSlotNum

```java
public int getSlotNum()
```

**Returns:** `public int`

### getButtonNum

```java
public int getButtonNum()
```

**Returns:** `public int`

### getCarriedItem

```java
public ItemStack getCarriedItem()
```

**Returns:** `public ItemStack`

### getChangedSlots

```java
public Int2ObjectMap<ItemStack> getChangedSlots()
```

**Returns:** `public Int2ObjectMap<ItemStack>`

### getClickType

```java
public ClickType getClickType()
```

**Returns:** `public ClickType`

### getStateId

```java
public int getStateId()
```

**Returns:** `public int`
