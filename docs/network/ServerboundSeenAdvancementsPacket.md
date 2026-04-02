# ServerboundSeenAdvancementsPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundSeenAdvancementsPacket>` |  |

## Methods

### ServerboundSeenAdvancementsPacket

```java
public ServerboundSeenAdvancementsPacket(ServerboundSeenAdvancementsPacket.Action p_134434_, ResourceLocation p_134435_)
```

**Parameters:**

- `p_134434_` (`ServerboundSeenAdvancementsPacket.Action`)
- `p_134435_` (`ResourceLocation`)

**Returns:** `public`

### openedTab

```java
public static ServerboundSeenAdvancementsPacket openedTab(AdvancementHolder p_301294_)
```

**Parameters:**

- `p_301294_` (`AdvancementHolder`)

**Returns:** `public static ServerboundSeenAdvancementsPacket`

### closedScreen

```java
public static ServerboundSeenAdvancementsPacket closedScreen()
```

**Returns:** `public static ServerboundSeenAdvancementsPacket`

### ServerboundSeenAdvancementsPacket

```java
return new ServerboundSeenAdvancementsPacket()
```

**Returns:** `return new`

### ServerboundSeenAdvancementsPacket

```java
private ServerboundSeenAdvancementsPacket(FriendlyByteBuf p_179744_)
```

**Parameters:**

- `p_179744_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134446_)
```

**Parameters:**

- `p_134446_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundSeenAdvancementsPacket> type()
```

**Returns:** `PacketType<ServerboundSeenAdvancementsPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134441_)
```

**Parameters:**

- `p_134441_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getAction

```java
public ServerboundSeenAdvancementsPacket.Action getAction()
```

**Returns:** `public ServerboundSeenAdvancementsPacket.Action`

### getTab

```java
public ResourceLocation getTab()
```

**Returns:** `ResourceLocation`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Action` | enum |  |
