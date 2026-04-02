# RemotePlayer

**Package:** `net.minecraft.client.player`
**Type:** class
**Extends:** `AbstractClientPlayer`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RemotePlayer

```java
public RemotePlayer(ClientLevel p_252213_, GameProfile p_250471_)
```

**Parameters:**

- `p_252213_` (`ClientLevel`)
- `p_250471_` (`GameProfile`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### shouldRenderAtSqrDistance

```java
public boolean shouldRenderAtSqrDistance(double p_108770_)
```

**Parameters:**

- `p_108770_` (`double`)

**Returns:** `boolean`

### hurt

```java
public boolean hurt(DamageSource p_108772_, float p_108773_)
```

**Parameters:**

- `p_108772_` (`DamageSource`)
- `p_108773_` (`float`)

**Returns:** `boolean`

### tick

```java
public void tick()
```

### aiStep

```java
public void aiStep()
```

### lerpMotion

```java
public void lerpMotion(double p_273090_, double p_272647_, double p_273555_)
```

**Parameters:**

- `p_273090_` (`double`)
- `p_272647_` (`double`)
- `p_273555_` (`double`)

### updatePlayerPose

```java
protected void updatePlayerPose()
```

### sendSystemMessage

```java
public void sendSystemMessage(Component p_234163_)
```

**Parameters:**

- `p_234163_` (`Component`)

### recreateFromPacket

```java
public void recreateFromPacket(ClientboundAddEntityPacket p_302238_)
```

**Parameters:**

- `p_302238_` (`ClientboundAddEntityPacket`)
