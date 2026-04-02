# ClientboundPlayerInfoUpdatePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundPlayerInfoUpdatePacket>` |  |

## Methods

### ClientboundPlayerInfoUpdatePacket

```java
public ClientboundPlayerInfoUpdatePacket(EnumSet<ClientboundPlayerInfoUpdatePacket.Action> p_251739_, Collection<ServerPlayer> p_251579_)
```

**Parameters:**

- `p_251739_` (`EnumSet<ClientboundPlayerInfoUpdatePacket.Action>`)
- `p_251579_` (`Collection<ServerPlayer>`)

**Returns:** `public`

### ClientboundPlayerInfoUpdatePacket

```java
public ClientboundPlayerInfoUpdatePacket(ClientboundPlayerInfoUpdatePacket.Action p_251648_, ServerPlayer p_252273_)
```

**Parameters:**

- `p_251648_` (`ClientboundPlayerInfoUpdatePacket.Action`)
- `p_252273_` (`ServerPlayer`)

**Returns:** `public`

### createPlayerInitializing

```java
public static ClientboundPlayerInfoUpdatePacket createPlayerInitializing(Collection<ServerPlayer> p_252314_)
```

**Parameters:**

- `p_252314_` (`Collection<ServerPlayer>`)

**Returns:** `public static ClientboundPlayerInfoUpdatePacket`

### ClientboundPlayerInfoUpdatePacket

```java
return new ClientboundPlayerInfoUpdatePacket()
```

**Returns:** `return new`

### ClientboundPlayerInfoUpdatePacket

```java
private ClientboundPlayerInfoUpdatePacket(RegistryFriendlyByteBuf p_323822_)
```

**Parameters:**

- `p_323822_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_323752_)
```

**Parameters:**

- `p_323752_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundPlayerInfoUpdatePacket> type()
```

**Returns:** `PacketType<ClientboundPlayerInfoUpdatePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_249935_)
```

**Parameters:**

- `p_249935_` (`ClientGamePacketListener`)

**Returns:** `public void`

### actions

```java
public EnumSet<ClientboundPlayerInfoUpdatePacket.Action> actions()
```

**Returns:** `public EnumSet<ClientboundPlayerInfoUpdatePacket.Action>`

### entries

```java
public List<ClientboundPlayerInfoUpdatePacket.Entry> entries()
```

**Returns:** `public List<ClientboundPlayerInfoUpdatePacket.Entry>`

### newEntries

```java
public List<ClientboundPlayerInfoUpdatePacket.Entry> newEntries()
```

**Returns:** `public List<ClientboundPlayerInfoUpdatePacket.Entry>`

### toString

```java
public String toString()
```

**Returns:** `String`

### Action

```java
private Action(ClientboundPlayerInfoUpdatePacket.Action.Reader p_249392_, ClientboundPlayerInfoUpdatePacket.Action.Writer p_250487_)
```

**Parameters:**

- `p_249392_` (`ClientboundPlayerInfoUpdatePacket.Action.Reader`)
- `p_250487_` (`ClientboundPlayerInfoUpdatePacket.Action.Writer`)

**Returns:** `private`

### read

```java
void read(ClientboundPlayerInfoUpdatePacket.EntryBuilder p_251859_, RegistryFriendlyByteBuf p_324148_)
```

**Parameters:**

- `p_251859_` (`ClientboundPlayerInfoUpdatePacket.EntryBuilder`)
- `p_324148_` (`RegistryFriendlyByteBuf`)

### write

```java
void write(RegistryFriendlyByteBuf p_324483_, ClientboundPlayerInfoUpdatePacket.Entry p_249783_)
```

**Parameters:**

- `p_324483_` (`RegistryFriendlyByteBuf`)
- `p_249783_` (`ClientboundPlayerInfoUpdatePacket.Entry`)

### Entry

```java
public static record Entry(UUID profileId, GameProfile profile, boolean listed, int latency, GameType gameMode, Component displayName, RemoteChatSession.Data chatSession)
```

**Parameters:**

- `profileId` (`UUID`)
- `profile` (`GameProfile`)
- `listed` (`boolean`)
- `latency` (`int`)
- `gameMode` (`GameType`)
- `displayName` (`Component`)
- `chatSession` (`RemoteChatSession.Data`)

**Returns:** `public static record`

### Entry

```java
 Entry(ServerPlayer p_252094_)
```

**Parameters:**

- `p_252094_` (`ServerPlayer`)

**Returns:** ``

### EntryBuilder

```java
 EntryBuilder(UUID p_251670_)
```

**Parameters:**

- `p_251670_` (`UUID`)

**Returns:** ``

### build

```java
ClientboundPlayerInfoUpdatePacket.Entry build()
```

**Returns:** `ClientboundPlayerInfoUpdatePacket.Entry`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Action` | enum |  |
| `Reader` | interface |  |
| `Writer` | interface |  |
| `Entry` | record |  |
