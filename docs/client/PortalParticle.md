# PortalParticle

**Package:** `net.minecraft.client.particle`
**Type:** class
**Extends:** `TextureSheetParticle`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### PortalParticle

```java
protected PortalParticle(ClientLevel p_107551_, double p_107552_, double p_107553_, double p_107554_, double p_107555_, double p_107556_, double p_107557_)
```

**Parameters:**

- `p_107551_` (`ClientLevel`)
- `p_107552_` (`double`)
- `p_107553_` (`double`)
- `p_107554_` (`double`)
- `p_107555_` (`double`)
- `p_107556_` (`double`)
- `p_107557_` (`double`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### getRenderType

```java
public ParticleRenderType getRenderType()
```

**Returns:** `ParticleRenderType`

### move

```java
public void move(double p_107560_, double p_107561_, double p_107562_)
```

**Parameters:**

- `p_107560_` (`double`)
- `p_107561_` (`double`)
- `p_107562_` (`double`)

### getQuadSize

```java
public float getQuadSize(float p_107567_)
```

**Parameters:**

- `p_107567_` (`float`)

**Returns:** `float`

### getLightColor

```java
public int getLightColor(float p_107564_)
```

**Parameters:**

- `p_107564_` (`float`)

**Returns:** `int`

### tick

```java
public void tick()
```

### Provider

```java
public Provider(SpriteSet p_107570_)
```

**Parameters:**

- `p_107570_` (`SpriteSet`)

**Returns:** `public`

### createParticle

```java
public Particle createParticle(SimpleParticleType p_107581_, ClientLevel p_107582_, double p_107583_, double p_107584_, double p_107585_, double p_107586_, double p_107587_, double p_107588_)
```

**Parameters:**

- `p_107581_` (`SimpleParticleType`)
- `p_107582_` (`ClientLevel`)
- `p_107583_` (`double`)
- `p_107584_` (`double`)
- `p_107585_` (`double`)
- `p_107586_` (`double`)
- `p_107587_` (`double`)
- `p_107588_` (`double`)

**Returns:** `public Particle`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Provider` | class |  |
