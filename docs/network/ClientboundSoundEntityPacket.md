# ClientboundSoundEntityPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundSoundEntityPacket>` |  |

## Methods

### ClientboundSoundEntityPacket

```java
public ClientboundSoundEntityPacket(Holder<SoundEvent> p_263513_, SoundSource p_263511_, Entity p_263496_, float p_263519_, float p_263523_, long p_263532_)
```

**Parameters:**

- `p_263513_` (`Holder<SoundEvent>`)
- `p_263511_` (`SoundSource`)
- `p_263496_` (`Entity`)
- `p_263519_` (`float`)
- `p_263523_` (`float`)
- `p_263532_` (`long`)

**Returns:** `public`

### ClientboundSoundEntityPacket

```java
private ClientboundSoundEntityPacket(RegistryFriendlyByteBuf p_319844_)
```

**Parameters:**

- `p_319844_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_320141_)
```

**Parameters:**

- `p_320141_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSoundEntityPacket> type()
```

**Returns:** `PacketType<ClientboundSoundEntityPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133425_)
```

**Parameters:**

- `p_133425_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getSound

```java
public Holder<SoundEvent> getSound()
```

**Returns:** `public Holder<SoundEvent>`

### getSource

```java
public SoundSource getSource()
```

**Returns:** `public SoundSource`

### getId

```java
public int getId()
```

**Returns:** `public int`

### getVolume

```java
public float getVolume()
```

**Returns:** `public float`

### getPitch

```java
public float getPitch()
```

**Returns:** `public float`

### getSeed

```java
public long getSeed()
```

**Returns:** `public long`
