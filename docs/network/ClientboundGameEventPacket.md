# ClientboundGameEventPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ClientboundGameEventPacket>` |  |
| `NO_RESPAWN_BLOCK_AVAILABLE` | `ClientboundGameEventPacket.Type` |  |
| `START_RAINING` | `ClientboundGameEventPacket.Type` |  |
| `STOP_RAINING` | `ClientboundGameEventPacket.Type` |  |
| `CHANGE_GAME_MODE` | `ClientboundGameEventPacket.Type` |  |
| `WIN_GAME` | `ClientboundGameEventPacket.Type` |  |
| `DEMO_EVENT` | `ClientboundGameEventPacket.Type` |  |
| `ARROW_HIT_PLAYER` | `ClientboundGameEventPacket.Type` |  |
| `RAIN_LEVEL_CHANGE` | `ClientboundGameEventPacket.Type` |  |
| `THUNDER_LEVEL_CHANGE` | `ClientboundGameEventPacket.Type` |  |
| `PUFFER_FISH_STING` | `ClientboundGameEventPacket.Type` |  |
| `GUARDIAN_ELDER_EFFECT` | `ClientboundGameEventPacket.Type` |  |
| `IMMEDIATE_RESPAWN` | `ClientboundGameEventPacket.Type` |  |
| `LIMITED_CRAFTING` | `ClientboundGameEventPacket.Type` |  |
| `LEVEL_CHUNKS_LOAD_START` | `ClientboundGameEventPacket.Type` |  |
| `DEMO_PARAM_INTRO` | `int` |  |
| `DEMO_PARAM_HINT_1` | `int` |  |
| `DEMO_PARAM_HINT_2` | `int` |  |
| `DEMO_PARAM_HINT_3` | `int` |  |
| `DEMO_PARAM_HINT_4` | `int` |  |

## Methods

### ClientboundGameEventPacket

```java
public ClientboundGameEventPacket(ClientboundGameEventPacket.Type p_132170_, float p_132171_)
```

**Parameters:**

- `p_132170_` (`ClientboundGameEventPacket.Type`)
- `p_132171_` (`float`)

**Returns:** `public`

### ClientboundGameEventPacket

```java
private ClientboundGameEventPacket(FriendlyByteBuf p_178865_)
```

**Parameters:**

- `p_178865_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_132180_)
```

**Parameters:**

- `p_132180_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundGameEventPacket> type()
```

**Returns:** `PacketType<ClientboundGameEventPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132177_)
```

**Parameters:**

- `p_132177_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getEvent

```java
public ClientboundGameEventPacket.Type getEvent()
```

**Returns:** `public ClientboundGameEventPacket.Type`

### getParam

```java
public float getParam()
```

**Returns:** `public float`

### Type

```java
public Type(int p_132186_)
```

**Parameters:**

- `p_132186_` (`int`)

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | class |  |
