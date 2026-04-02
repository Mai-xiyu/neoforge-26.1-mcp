# ServerboundSetStructureBlockPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundSetStructureBlockPacket>` |  |

## Methods

### ServerboundSetStructureBlockPacket

```java
public ServerboundSetStructureBlockPacket(BlockPos p_179771_, StructureBlockEntity.UpdateType p_179772_, StructureMode p_179773_, String p_179774_, BlockPos p_179775_, Vec3i p_179776_, Mirror p_179777_, Rotation p_179778_, String p_179779_, boolean p_179780_, boolean p_179781_, boolean p_179782_, float p_179783_, long p_179784_)
```

**Parameters:**

- `p_179771_` (`BlockPos`)
- `p_179772_` (`StructureBlockEntity.UpdateType`)
- `p_179773_` (`StructureMode`)
- `p_179774_` (`String`)
- `p_179775_` (`BlockPos`)
- `p_179776_` (`Vec3i`)
- `p_179777_` (`Mirror`)
- `p_179778_` (`Rotation`)
- `p_179779_` (`String`)
- `p_179780_` (`boolean`)
- `p_179781_` (`boolean`)
- `p_179782_` (`boolean`)
- `p_179783_` (`float`)
- `p_179784_` (`long`)

**Returns:** `public`

### ServerboundSetStructureBlockPacket

```java
private ServerboundSetStructureBlockPacket(FriendlyByteBuf p_179786_)
```

**Parameters:**

- `p_179786_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134631_)
```

**Parameters:**

- `p_134631_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundSetStructureBlockPacket> type()
```

**Returns:** `PacketType<ServerboundSetStructureBlockPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134628_)
```

**Parameters:**

- `p_134628_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`

### getUpdateType

```java
public StructureBlockEntity.UpdateType getUpdateType()
```

**Returns:** `public StructureBlockEntity.UpdateType`

### getMode

```java
public StructureMode getMode()
```

**Returns:** `public StructureMode`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getOffset

```java
public BlockPos getOffset()
```

**Returns:** `public BlockPos`

### getSize

```java
public Vec3i getSize()
```

**Returns:** `public Vec3i`

### getMirror

```java
public Mirror getMirror()
```

**Returns:** `public Mirror`

### getRotation

```java
public Rotation getRotation()
```

**Returns:** `public Rotation`

### getData

```java
public String getData()
```

**Returns:** `public String`

### isIgnoreEntities

```java
public boolean isIgnoreEntities()
```

**Returns:** `public boolean`

### isShowAir

```java
public boolean isShowAir()
```

**Returns:** `public boolean`

### isShowBoundingBox

```java
public boolean isShowBoundingBox()
```

**Returns:** `public boolean`

### getIntegrity

```java
public float getIntegrity()
```

**Returns:** `public float`

### getSeed

```java
public long getSeed()
```

**Returns:** `public long`
