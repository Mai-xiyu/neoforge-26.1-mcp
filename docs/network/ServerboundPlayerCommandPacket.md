# ServerboundPlayerCommandPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundPlayerCommandPacket>` |  |

## Methods

### ServerboundPlayerCommandPacket

```java
public ServerboundPlayerCommandPacket(Entity p_134306_, ServerboundPlayerCommandPacket.Action p_134307_)
```

**Parameters:**

- `p_134306_` (`Entity`)
- `p_134307_` (`ServerboundPlayerCommandPacket.Action`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### ServerboundPlayerCommandPacket

```java
public ServerboundPlayerCommandPacket(Entity p_134309_, ServerboundPlayerCommandPacket.Action p_134310_, int p_134311_)
```

**Parameters:**

- `p_134309_` (`Entity`)
- `p_134310_` (`ServerboundPlayerCommandPacket.Action`)
- `p_134311_` (`int`)

**Returns:** `public`

### ServerboundPlayerCommandPacket

```java
private ServerboundPlayerCommandPacket(FriendlyByteBuf p_179714_)
```

**Parameters:**

- `p_179714_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134319_)
```

**Parameters:**

- `p_134319_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundPlayerCommandPacket> type()
```

**Returns:** `PacketType<ServerboundPlayerCommandPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134317_)
```

**Parameters:**

- `p_134317_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getId

```java
public int getId()
```

**Returns:** `public int`

### getAction

```java
public ServerboundPlayerCommandPacket.Action getAction()
```

**Returns:** `public ServerboundPlayerCommandPacket.Action`

### getData

```java
public int getData()
```

**Returns:** `public int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Action` | enum |  |
