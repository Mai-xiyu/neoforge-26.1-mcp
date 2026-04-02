# ClientboundLevelParticlesPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundLevelParticlesPacket>` |  |

## Methods

### ClientboundLevelParticlesPacket

```java
public <T extends ParticleOptions> ClientboundLevelParticlesPacket(T p_132292_, boolean p_132293_, double p_132294_, double p_132295_, double p_132296_, float p_132297_, float p_132298_, float p_132299_, float p_132300_, int p_132301_)
```

**Parameters:**

- `p_132292_` (`T`)
- `p_132293_` (`boolean`)
- `p_132294_` (`double`)
- `p_132295_` (`double`)
- `p_132296_` (`double`)
- `p_132297_` (`float`)
- `p_132298_` (`float`)
- `p_132299_` (`float`)
- `p_132300_` (`float`)
- `p_132301_` (`int`)

**Returns:** `public <T extends ParticleOptions>`

### ClientboundLevelParticlesPacket

```java
private ClientboundLevelParticlesPacket(RegistryFriendlyByteBuf p_320636_)
```

**Parameters:**

- `p_320636_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_320262_)
```

**Parameters:**

- `p_320262_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundLevelParticlesPacket> type()
```

**Returns:** `PacketType<ClientboundLevelParticlesPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132310_)
```

**Parameters:**

- `p_132310_` (`ClientGamePacketListener`)

**Returns:** `public void`

### isOverrideLimiter

```java
public boolean isOverrideLimiter()
```

**Returns:** `public boolean`

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

### getXDist

```java
public float getXDist()
```

**Returns:** `public float`

### getYDist

```java
public float getYDist()
```

**Returns:** `public float`

### getZDist

```java
public float getZDist()
```

**Returns:** `public float`

### getMaxSpeed

```java
public float getMaxSpeed()
```

**Returns:** `public float`

### getCount

```java
public int getCount()
```

**Returns:** `public int`

### getParticle

```java
public ParticleOptions getParticle()
```

**Returns:** `public ParticleOptions`
