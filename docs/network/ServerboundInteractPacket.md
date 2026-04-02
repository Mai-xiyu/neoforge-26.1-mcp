# ServerboundInteractPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ServerGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<FriendlyByteBuf, ServerboundInteractPacket>` |  |

## Methods

### getType

```java
public ServerboundInteractPacket.ActionType getType()
```

**Returns:** `ServerboundInteractPacket.ActionType`

### dispatch

```java
public void dispatch(ServerboundInteractPacket.Handler p_179624_)
```

**Parameters:**

- `p_179624_` (`ServerboundInteractPacket.Handler`)

### write

```java
public void write(FriendlyByteBuf p_179622_)
```

**Parameters:**

- `p_179622_` (`FriendlyByteBuf`)

### ServerboundInteractPacket

```java
private ServerboundInteractPacket(int p_179598_, boolean p_179599_, ServerboundInteractPacket.Action p_179600_)
```

**Parameters:**

- `p_179598_` (`int`)
- `p_179599_` (`boolean`)
- `p_179600_` (`ServerboundInteractPacket.Action`)

**Returns:** `private`

### createAttackPacket

```java
public static ServerboundInteractPacket createAttackPacket(Entity p_179606_, boolean p_179607_)
```

**Parameters:**

- `p_179606_` (`Entity`)
- `p_179607_` (`boolean`)

**Returns:** `public static ServerboundInteractPacket`

### createInteractionPacket

```java
public static ServerboundInteractPacket createInteractionPacket(Entity p_179609_, boolean p_179610_, InteractionHand p_179611_)
```

**Parameters:**

- `p_179609_` (`Entity`)
- `p_179610_` (`boolean`)
- `p_179611_` (`InteractionHand`)

**Returns:** `public static ServerboundInteractPacket`

### createInteractionPacket

```java
public static ServerboundInteractPacket createInteractionPacket(Entity p_179613_, boolean p_179614_, InteractionHand p_179615_, Vec3 p_179616_)
```

**Parameters:**

- `p_179613_` (`Entity`)
- `p_179614_` (`boolean`)
- `p_179615_` (`InteractionHand`)
- `p_179616_` (`Vec3`)

**Returns:** `public static ServerboundInteractPacket`

### ServerboundInteractPacket

```java
private ServerboundInteractPacket(FriendlyByteBuf p_179602_)
```

**Parameters:**

- `p_179602_` (`FriendlyByteBuf`)

**Returns:** `private`

### write

```java
private void write(FriendlyByteBuf p_134058_)
```

**Parameters:**

- `p_134058_` (`FriendlyByteBuf`)

**Returns:** `private void`

### type

```java
public PacketType<ServerboundInteractPacket> type()
```

**Returns:** `PacketType<ServerboundInteractPacket>`

### handle

```java
public void handle(ServerGamePacketListener p_134055_)
```

**Parameters:**

- `p_134055_` (`ServerGamePacketListener`)

**Returns:** `public void`

### getTarget

```java
public Entity getTarget(ServerLevel p_179604_)
```

**Parameters:**

- `p_179604_` (`ServerLevel`)

**Returns:** `Entity`

### isUsingSecondaryAction

```java
public boolean isUsingSecondaryAction()
```

**Returns:** `public boolean`

### dispatch

```java
public void dispatch(ServerboundInteractPacket.Handler p_179618_)
```

**Parameters:**

- `p_179618_` (`ServerboundInteractPacket.Handler`)

**Returns:** `public void`

### getType

```java
ServerboundInteractPacket.ActionType getType()
```

**Returns:** `ServerboundInteractPacket.ActionType`

### dispatch

```java
void dispatch(ServerboundInteractPacket.Handler p_179626_)
```

**Parameters:**

- `p_179626_` (`ServerboundInteractPacket.Handler`)

### write

```java
void write(FriendlyByteBuf p_179625_)
```

**Parameters:**

- `p_179625_` (`FriendlyByteBuf`)

### INTERACT_AT

```java
, INTERACT_AT()
```

**Returns:** `,`

### ActionType

```java
private ActionType(Function<FriendlyByteBuf, ServerboundInteractPacket.Action> p_179636_)
```

**Parameters:**

- `p_179636_` (`Function<FriendlyByteBuf, ServerboundInteractPacket.Action>`)

**Returns:** `private`

### onInteraction

```java
void onInteraction(InteractionHand p_179643_)
```

**Parameters:**

- `p_179643_` (`InteractionHand`)

### onInteraction

```java
void onInteraction(InteractionHand p_179644_, Vec3 p_179645_)
```

**Parameters:**

- `p_179644_` (`InteractionHand`)
- `p_179645_` (`Vec3`)

### onAttack

```java
void onAttack()
```

### InteractionAction

```java
 InteractionAction(InteractionHand p_179648_)
```

**Parameters:**

- `p_179648_` (`InteractionHand`)

**Returns:** ``

### InteractionAction

```java
private InteractionAction(FriendlyByteBuf p_179650_)
```

**Parameters:**

- `p_179650_` (`FriendlyByteBuf`)

**Returns:** `private`

### getType

```java
public ServerboundInteractPacket.ActionType getType()
```

**Returns:** `ServerboundInteractPacket.ActionType`

### dispatch

```java
public void dispatch(ServerboundInteractPacket.Handler p_179655_)
```

**Parameters:**

- `p_179655_` (`ServerboundInteractPacket.Handler`)

### write

```java
public void write(FriendlyByteBuf p_179653_)
```

**Parameters:**

- `p_179653_` (`FriendlyByteBuf`)

### InteractionAtLocationAction

```java
 InteractionAtLocationAction(InteractionHand p_179659_, Vec3 p_179660_)
```

**Parameters:**

- `p_179659_` (`InteractionHand`)
- `p_179660_` (`Vec3`)

**Returns:** ``

### InteractionAtLocationAction

```java
private InteractionAtLocationAction(FriendlyByteBuf p_179662_)
```

**Parameters:**

- `p_179662_` (`FriendlyByteBuf`)

**Returns:** `private`

### getType

```java
public ServerboundInteractPacket.ActionType getType()
```

**Returns:** `ServerboundInteractPacket.ActionType`

### dispatch

```java
public void dispatch(ServerboundInteractPacket.Handler p_179667_)
```

**Parameters:**

- `p_179667_` (`ServerboundInteractPacket.Handler`)

### write

```java
public void write(FriendlyByteBuf p_179665_)
```

**Parameters:**

- `p_179665_` (`FriendlyByteBuf`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Handler` | interface |  |
