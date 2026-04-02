# ServerboundSetJigsawBlockPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundSetJigsawBlockPacket>` |  |

## Methods

### ServerboundSetJigsawBlockPacket

```java
public ServerboundSetJigsawBlockPacket(BlockPos p_134573_, ResourceLocation p_134574_, ResourceLocation p_134575_, ResourceLocation p_134576_, String p_134577_, JigsawBlockEntity.JointType p_134578_, int p_308944_, int p_309128_)
```

**Parameters:**

- `p_134573_` (`BlockPos`)
- `p_134574_` (`ResourceLocation`)
- `p_134575_` (`ResourceLocation`)
- `p_134576_` (`ResourceLocation`)
- `p_134577_` (`String`)
- `p_134578_` (`JigsawBlockEntity.JointType`)
- `p_308944_` (`int`)
- `p_309128_` (`int`)

**Returns:** `public`

### ServerboundSetJigsawBlockPacket

```java
private ServerboundSetJigsawBlockPacket(FriendlyByteBuf p_179766_)
```

**Parameters:**

- `p_179766_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134587_)
```

**Parameters:**

- `p_134587_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundSetJigsawBlockPacket> type()
```

**Returns:** `PacketType<ServerboundSetJigsawBlockPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134584_)
```

**Parameters:**

- `p_134584_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`

### getName

```java
public ResourceLocation getName()
```

**Returns:** `public ResourceLocation`

### getTarget

```java
public ResourceLocation getTarget()
```

**Returns:** `public ResourceLocation`

### getPool

```java
public ResourceLocation getPool()
```

**Returns:** `public ResourceLocation`

### getFinalState

```java
public String getFinalState()
```

**Returns:** `public String`

### getJoint

```java
public JigsawBlockEntity.JointType getJoint()
```

**Returns:** `public JigsawBlockEntity.JointType`

### getSelectionPriority

```java
public int getSelectionPriority()
```

**Returns:** `public int`

### getPlacementPriority

```java
public int getPlacementPriority()
```

**Returns:** `public int`
