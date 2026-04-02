# DustColorTransitionParticle

**Package:** `net.minecraft.client.particle`
**Type:** class
**Extends:** `DustParticleBase<DustColorTransitionOptions>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### DustColorTransitionParticle

```java
protected DustColorTransitionParticle(ClientLevel p_172053_, double p_172054_, double p_172055_, double p_172056_, double p_172057_, double p_172058_, double p_172059_, DustColorTransitionOptions p_172060_, SpriteSet p_172061_)
```

**Parameters:**

- `p_172053_` (`ClientLevel`)
- `p_172054_` (`double`)
- `p_172055_` (`double`)
- `p_172056_` (`double`)
- `p_172057_` (`double`)
- `p_172058_` (`double`)
- `p_172059_` (`double`)
- `p_172060_` (`DustColorTransitionOptions`)
- `p_172061_` (`SpriteSet`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### randomizeColor

```java
private Vector3f randomizeColor(Vector3f p_254318_, float p_254472_)
```

**Parameters:**

- `p_254318_` (`Vector3f`)
- `p_254472_` (`float`)

**Returns:** `private Vector3f`

### lerpColors

```java
private void lerpColors(float p_172070_)
```

**Parameters:**

- `p_172070_` (`float`)

**Returns:** `private void`

### render

```java
public void render(VertexConsumer p_172063_, Camera p_172064_, float p_172065_)
```

**Parameters:**

- `p_172063_` (`VertexConsumer`)
- `p_172064_` (`Camera`)
- `p_172065_` (`float`)

### Provider

```java
public Provider(SpriteSet p_172073_)
```

**Parameters:**

- `p_172073_` (`SpriteSet`)

**Returns:** `public`

### createParticle

```java
public Particle createParticle(DustColorTransitionOptions p_172075_, ClientLevel p_172076_, double p_172077_, double p_172078_, double p_172079_, double p_172080_, double p_172081_, double p_172082_)
```

**Parameters:**

- `p_172075_` (`DustColorTransitionOptions`)
- `p_172076_` (`ClientLevel`)
- `p_172077_` (`double`)
- `p_172078_` (`double`)
- `p_172079_` (`double`)
- `p_172080_` (`double`)
- `p_172081_` (`double`)
- `p_172082_` (`double`)

**Returns:** `public Particle`

### DustColorTransitionParticle

```java
return new DustColorTransitionParticle()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Provider` | class |  |
