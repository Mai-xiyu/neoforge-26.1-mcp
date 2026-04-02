# ClientboundSetPlayerTeamPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundSetPlayerTeamPacket>` |  |

## Methods

### ClientboundSetPlayerTeamPacket

```java
private ClientboundSetPlayerTeamPacket(String p_179318_, int p_179319_, Optional<ClientboundSetPlayerTeamPacket.Parameters> p_179320_, Collection<String> p_179321_)
```

**Parameters:**

- `p_179318_` (`String`)
- `p_179319_` (`int`)
- `p_179320_` (`Optional<ClientboundSetPlayerTeamPacket.Parameters>`)
- `p_179321_` (`Collection<String>`)

**Returns:** `private`

### createAddOrModifyPacket

```java
public static ClientboundSetPlayerTeamPacket createAddOrModifyPacket(PlayerTeam p_179333_, boolean p_179334_)
```

**Parameters:**

- `p_179333_` (`PlayerTeam`)
- `p_179334_` (`boolean`)

**Returns:** `public static ClientboundSetPlayerTeamPacket`

### createRemovePacket

```java
public static ClientboundSetPlayerTeamPacket createRemovePacket(PlayerTeam p_179327_)
```

**Parameters:**

- `p_179327_` (`PlayerTeam`)

**Returns:** `public static ClientboundSetPlayerTeamPacket`

### createPlayerPacket

```java
public static ClientboundSetPlayerTeamPacket createPlayerPacket(PlayerTeam p_179329_, String p_179330_, ClientboundSetPlayerTeamPacket.Action p_179331_)
```

**Parameters:**

- `p_179329_` (`PlayerTeam`)
- `p_179330_` (`String`)
- `p_179331_` (`ClientboundSetPlayerTeamPacket.Action`)

**Returns:** `public static ClientboundSetPlayerTeamPacket`

### ClientboundSetPlayerTeamPacket

```java
private ClientboundSetPlayerTeamPacket(RegistryFriendlyByteBuf p_323831_)
```

**Parameters:**

- `p_323831_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_323648_)
```

**Parameters:**

- `p_323648_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### shouldHavePlayerList

```java
private static boolean shouldHavePlayerList(int p_179325_)
```

**Parameters:**

- `p_179325_` (`int`)

**Returns:** `private static boolean`

### shouldHaveParameters

```java
private static boolean shouldHaveParameters(int p_179337_)
```

**Parameters:**

- `p_179337_` (`int`)

**Returns:** `private static boolean`

### getPlayerAction

```java
public ClientboundSetPlayerTeamPacket.Action getPlayerAction()
```

**Returns:** `ClientboundSetPlayerTeamPacket.Action`

### getTeamAction

```java
public ClientboundSetPlayerTeamPacket.Action getTeamAction()
```

**Returns:** `ClientboundSetPlayerTeamPacket.Action`

### type

```java
public PacketType<ClientboundSetPlayerTeamPacket> type()
```

**Returns:** `PacketType<ClientboundSetPlayerTeamPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133310_)
```

**Parameters:**

- `p_133310_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getPlayers

```java
public Collection<String> getPlayers()
```

**Returns:** `public Collection<String>`

### getParameters

```java
public Optional<ClientboundSetPlayerTeamPacket.Parameters> getParameters()
```

**Returns:** `public Optional<ClientboundSetPlayerTeamPacket.Parameters>`

### Parameters

```java
public Parameters(PlayerTeam p_179360_)
```

**Parameters:**

- `p_179360_` (`PlayerTeam`)

**Returns:** `public`

### Parameters

```java
public Parameters(RegistryFriendlyByteBuf p_323739_)
```

**Parameters:**

- `p_323739_` (`RegistryFriendlyByteBuf`)

**Returns:** `public`

### getDisplayName

```java
public Component getDisplayName()
```

**Returns:** `public Component`

### getOptions

```java
public int getOptions()
```

**Returns:** `public int`

### getColor

```java
public ChatFormatting getColor()
```

**Returns:** `public ChatFormatting`

### getNametagVisibility

```java
public String getNametagVisibility()
```

**Returns:** `public String`

### getCollisionRule

```java
public String getCollisionRule()
```

**Returns:** `public String`

### getPlayerPrefix

```java
public Component getPlayerPrefix()
```

**Returns:** `public Component`

### getPlayerSuffix

```java
public Component getPlayerSuffix()
```

**Returns:** `public Component`

### write

```java
public void write(RegistryFriendlyByteBuf p_323527_)
```

**Parameters:**

- `p_323527_` (`RegistryFriendlyByteBuf`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Action` | enum |  |
| `Parameters` | class |  |
