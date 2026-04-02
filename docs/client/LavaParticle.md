# LavaParticle

**Package:** `net.minecraft.client.particle`
**Type:** class
**Extends:** `TextureSheetParticle`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### LavaParticle

```java
protected LavaParticle(ClientLevel p_107074_, double p_107075_, double p_107076_, double p_107077_)
```

**Parameters:**

- `p_107074_` (`ClientLevel`)
- `p_107075_` (`double`)
- `p_107076_` (`double`)
- `p_107077_` (`double`)

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

### getLightColor

```java
public int getLightColor(float p_107086_)
```

**Parameters:**

- `p_107086_` (`float`)

**Returns:** `int`

### getQuadSize

```java
public float getQuadSize(float p_107089_)
```

**Parameters:**

- `p_107089_` (`float`)

**Returns:** `float`

### tick

```java
public void tick()
```

### Provider

```java
public Provider(SpriteSet p_107092_)
```

**Parameters:**

- `p_107092_` (`SpriteSet`)

**Returns:** `public`

### createParticle

```java
public Particle createParticle(SimpleParticleType p_107103_, ClientLevel p_107104_, double p_107105_, double p_107106_, double p_107107_, double p_107108_, double p_107109_, double p_107110_)
```

**Parameters:**

- `p_107103_` (`SimpleParticleType`)
- `p_107104_` (`ClientLevel`)
- `p_107105_` (`double`)
- `p_107106_` (`double`)
- `p_107107_` (`double`)
- `p_107108_` (`double`)
- `p_107109_` (`double`)
- `p_107110_` (`double`)

**Returns:** `public Particle`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Provider` | class |  |
