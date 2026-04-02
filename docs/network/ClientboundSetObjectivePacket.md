# ClientboundSetObjectivePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundSetObjectivePacket>` |  |
| `METHOD_ADD` | `int` |  |
| `METHOD_REMOVE` | `int` |  |
| `METHOD_CHANGE` | `int` |  |

## Methods

### ClientboundSetObjectivePacket

```java
public ClientboundSetObjectivePacket(Objective p_133258_, int p_133259_)
```

**Parameters:**

- `p_133258_` (`Objective`)
- `p_133259_` (`int`)

**Returns:** `public`

### ClientboundSetObjectivePacket

```java
private ClientboundSetObjectivePacket(RegistryFriendlyByteBuf p_319795_)
```

**Parameters:**

- `p_319795_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_320623_)
```

**Parameters:**

- `p_320623_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSetObjectivePacket> type()
```

**Returns:** `PacketType<ClientboundSetObjectivePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133265_)
```

**Parameters:**

- `p_133265_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getObjectiveName

```java
public String getObjectiveName()
```

**Returns:** `public String`

### getDisplayName

```java
public Component getDisplayName()
```

**Returns:** `public Component`

### getMethod

```java
public int getMethod()
```

**Returns:** `public int`

### getRenderType

```java
public ObjectiveCriteria.RenderType getRenderType()
```

**Returns:** `public ObjectiveCriteria.RenderType`

### getNumberFormat

```java
public Optional<NumberFormat> getNumberFormat()
```

**Returns:** `public Optional<NumberFormat>`
