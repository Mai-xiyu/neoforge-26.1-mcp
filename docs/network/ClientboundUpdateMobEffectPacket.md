# ClientboundUpdateMobEffectPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundUpdateMobEffectPacket>` |  |

## Methods

### ClientboundUpdateMobEffectPacket

```java
public ClientboundUpdateMobEffectPacket(int p_133611_, MobEffectInstance p_133612_, boolean p_316376_)
```

**Parameters:**

- `p_133611_` (`int`)
- `p_133612_` (`MobEffectInstance`)
- `p_316376_` (`boolean`)

**Returns:** `public`

### ClientboundUpdateMobEffectPacket

```java
private ClientboundUpdateMobEffectPacket(RegistryFriendlyByteBuf p_320890_)
```

**Parameters:**

- `p_320890_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_320214_)
```

**Parameters:**

- `p_320214_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundUpdateMobEffectPacket> type()
```

**Returns:** `PacketType<ClientboundUpdateMobEffectPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133618_)
```

**Parameters:**

- `p_133618_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getEntityId

```java
public int getEntityId()
```

**Returns:** `public int`

### getEffect

```java
public Holder<MobEffect> getEffect()
```

**Returns:** `public Holder<MobEffect>`

### getEffectAmplifier

```java
public int getEffectAmplifier()
```

**Returns:** `public int`

### getEffectDurationTicks

```java
public int getEffectDurationTicks()
```

**Returns:** `public int`

### isEffectVisible

```java
public boolean isEffectVisible()
```

**Returns:** `public boolean`

### isEffectAmbient

```java
public boolean isEffectAmbient()
```

**Returns:** `public boolean`

### effectShowsIcon

```java
public boolean effectShowsIcon()
```

**Returns:** `public boolean`

### shouldBlend

```java
public boolean shouldBlend()
```

**Returns:** `public boolean`
