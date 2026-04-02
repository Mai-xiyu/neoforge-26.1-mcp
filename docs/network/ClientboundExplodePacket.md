# ClientboundExplodePacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundExplodePacket>` |  |

## Methods

### ClientboundExplodePacket

```java
public ClientboundExplodePacket(double p_132115_, double p_132116_, double p_132117_, float p_132118_, List<BlockPos> p_132119_, Vec3 p_132120_, Explosion.BlockInteraction p_312296_, ParticleOptions p_312499_, ParticleOptions p_312203_, Holder<SoundEvent> p_320679_)
```

**Parameters:**

- `p_132115_` (`double`)
- `p_132116_` (`double`)
- `p_132117_` (`double`)
- `p_132118_` (`float`)
- `p_132119_` (`List<BlockPos>`)
- `p_132120_` (`Vec3`)
- `p_312296_` (`Explosion.BlockInteraction`)
- `p_312499_` (`ParticleOptions`)
- `p_312203_` (`ParticleOptions`)
- `p_320679_` (`Holder<SoundEvent>`)

**Returns:** `public`

### ClientboundExplodePacket

```java
private ClientboundExplodePacket(RegistryFriendlyByteBuf p_320217_)
```

**Parameters:**

- `p_320217_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### BlockPos

```java
return new BlockPos()
```

**Returns:** `return new`

### write

```java
private void write(RegistryFriendlyByteBuf p_319914_)
```

**Parameters:**

- `p_319914_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundExplodePacket> type()
```

**Returns:** `PacketType<ClientboundExplodePacket>`

### handle

```java
public void handle(ClientGamePacketListener p_132126_)
```

**Parameters:**

- `p_132126_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getKnockbackX

```java
public float getKnockbackX()
```

**Returns:** `public float`

### getKnockbackY

```java
public float getKnockbackY()
```

**Returns:** `public float`

### getKnockbackZ

```java
public float getKnockbackZ()
```

**Returns:** `public float`

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

### getPower

```java
public float getPower()
```

**Returns:** `public float`

### getToBlow

```java
public List<BlockPos> getToBlow()
```

**Returns:** `public List<BlockPos>`

### getBlockInteraction

```java
public Explosion.BlockInteraction getBlockInteraction()
```

**Returns:** `public Explosion.BlockInteraction`

### getSmallExplosionParticles

```java
public ParticleOptions getSmallExplosionParticles()
```

**Returns:** `public ParticleOptions`

### getLargeExplosionParticles

```java
public ParticleOptions getLargeExplosionParticles()
```

**Returns:** `public ParticleOptions`

### getExplosionSound

```java
public Holder<SoundEvent> getExplosionSound()
```

**Returns:** `public Holder<SoundEvent>`
