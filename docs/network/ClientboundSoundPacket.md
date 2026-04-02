# ClientboundSoundPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundSoundPacket>` |  |
| `LOCATION_ACCURACY` | `float` |  |

## Methods

### ClientboundSoundPacket

```java
public ClientboundSoundPacket(Holder<SoundEvent> p_263366_, SoundSource p_263375_, double p_263378_, double p_263367_, double p_263394_, float p_263415_, float p_263399_, long p_263409_)
```

**Parameters:**

- `p_263366_` (`Holder<SoundEvent>`)
- `p_263375_` (`SoundSource`)
- `p_263378_` (`double`)
- `p_263367_` (`double`)
- `p_263394_` (`double`)
- `p_263415_` (`float`)
- `p_263399_` (`float`)
- `p_263409_` (`long`)

**Returns:** `public`

### ClientboundSoundPacket

```java
private ClientboundSoundPacket(RegistryFriendlyByteBuf p_320320_)
```

**Parameters:**

- `p_320320_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_320266_)
```

**Parameters:**

- `p_320266_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundSoundPacket> type()
```

**Returns:** `PacketType<ClientboundSoundPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_133454_)
```

**Parameters:**

- `p_133454_` (`ClientGamePacketListener`)

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

### getX

```java
public double getX()
```

**Returns:** `public double`

### getY

```java
public double getY()
```

**Returns:** `public double`

### getZ

```java
public double getZ()
```

**Returns:** `public double`

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
