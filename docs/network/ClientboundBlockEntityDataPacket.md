# ClientboundBlockEntityDataPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundBlockEntityDataPacket>` |  |

## Methods

### create

```java
public static ClientboundBlockEntityDataPacket create(BlockEntity p_195643_, BiFunction<BlockEntity, RegistryAccess, CompoundTag> p_324611_)
```

**Parameters:**

- `p_195643_` (`BlockEntity`)
- `p_324611_` (`BiFunction<BlockEntity, RegistryAccess, CompoundTag>`)

**Returns:** `public static ClientboundBlockEntityDataPacket`

### create

```java
public static ClientboundBlockEntityDataPacket create(BlockEntity p_195641_)
```

**Parameters:**

- `p_195641_` (`BlockEntity`)

**Returns:** `public static ClientboundBlockEntityDataPacket`

### create

```java
return create()
```

**Returns:** `return`

### ClientboundBlockEntityDataPacket

```java
private ClientboundBlockEntityDataPacket(BlockPos p_195637_, BlockEntityType<?> p_195638_, CompoundTag p_195639_)
```

**Parameters:**

- `p_195637_` (`BlockPos`)
- `p_195638_` (`BlockEntityType<?>`)
- `p_195639_` (`CompoundTag`)

**Returns:** `private`

### type

```java
public PacketType<ClientboundBlockEntityDataPacket> type()
```

**Returns:** `PacketType<ClientboundBlockEntityDataPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_131703_)
```

**Parameters:**

- `p_131703_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`

### getType

```java
public BlockEntityType<?> getType()
```

**Returns:** `public BlockEntityType<?>`

### getTag

```java
public CompoundTag getTag()
```

**Returns:** `public CompoundTag`
