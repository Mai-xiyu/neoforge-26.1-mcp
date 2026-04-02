# ClientboundAddEntityPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundAddEntityPacket>` |  |

## Methods

### ClientboundAddEntityPacket

```java
public ClientboundAddEntityPacket(Entity p_131483_, ServerEntity p_352367_)
```

**Parameters:**

- `p_131483_` (`Entity`)
- `p_352367_` (`ServerEntity`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### ClientboundAddEntityPacket

```java
public ClientboundAddEntityPacket(Entity p_131481_, ServerEntity p_352292_, int p_352422_)
```

**Parameters:**

- `p_131481_` (`Entity`)
- `p_352292_` (`ServerEntity`)
- `p_352422_` (`int`)

**Returns:** `public`

### ClientboundAddEntityPacket

```java
public ClientboundAddEntityPacket(Entity p_237558_, int p_237559_, BlockPos p_237560_)
```

**Parameters:**

- `p_237558_` (`Entity`)
- `p_237559_` (`int`)
- `p_237560_` (`BlockPos`)

**Returns:** `public`

### ClientboundAddEntityPacket

```java
public ClientboundAddEntityPacket(int p_237546_, UUID p_237547_, double p_237548_, double p_237549_, double p_237550_, float p_237551_, float p_237552_, EntityType<?> p_237553_, int p_237554_, Vec3 p_237555_, double p_237556_)
```

**Parameters:**

- `p_237546_` (`int`)
- `p_237547_` (`UUID`)
- `p_237548_` (`double`)
- `p_237549_` (`double`)
- `p_237550_` (`double`)
- `p_237551_` (`float`)
- `p_237552_` (`float`)
- `p_237553_` (`EntityType<?>`)
- `p_237554_` (`int`)
- `p_237555_` (`Vec3`)
- `p_237556_` (`double`)

**Returns:** `public`

### ClientboundAddEntityPacket

```java
private ClientboundAddEntityPacket(RegistryFriendlyByteBuf p_319919_)
```

**Parameters:**

- `p_319919_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(RegistryFriendlyByteBuf p_320192_)
```

**Parameters:**

- `p_320192_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ClientboundAddEntityPacket> type()
```

**Returns:** `PacketType<ClientboundAddEntityPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_131495_)
```

**Parameters:**

- `p_131495_` (`ClientGamePacketListener`)

**Returns:** `public void`

### getId

```java
public int getId()
```

**Returns:** `public int`

### getUUID

```java
public UUID getUUID()
```

**Returns:** `public UUID`

### getType

```java
public EntityType<?> getType()
```

**Returns:** `public EntityType<?>`

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

### getXa

```java
public double getXa()
```

**Returns:** `public double`

### getYa

```java
public double getYa()
```

**Returns:** `public double`

### getZa

```java
public double getZa()
```

**Returns:** `public double`

### getXRot

```java
public float getXRot()
```

**Returns:** `public float`

### getYRot

```java
public float getYRot()
```

**Returns:** `public float`

### getYHeadRot

```java
public float getYHeadRot()
```

**Returns:** `public float`

### getData

```java
public int getData()
```

**Returns:** `public int`
