# VibrationSignalParticle

**Package:** `net.minecraft.client.particle`
**Type:** class
**Extends:** `TextureSheetParticle`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### VibrationSignalParticle

```java
protected VibrationSignalParticle(ClientLevel p_234105_, double p_234106_, double p_234107_, double p_234108_, PositionSource p_234109_, int p_234110_)
```

**Parameters:**

- `p_234105_` (`ClientLevel`)
- `p_234106_` (`double`)
- `p_234107_` (`double`)
- `p_234108_` (`double`)
- `p_234109_` (`PositionSource`)
- `p_234110_` (`int`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### render

```java
public void render(VertexConsumer p_172475_, Camera p_172476_, float p_172477_)
```

**Parameters:**

- `p_172475_` (`VertexConsumer`)
- `p_172476_` (`Camera`)
- `p_172477_` (`float`)

### getLightColor

```java
public int getLightColor(float p_172469_)
```

**Parameters:**

- `p_172469_` (`float`)

**Returns:** `int`

### getRenderType

```java
public ParticleRenderType getRenderType()
```

**Returns:** `ParticleRenderType`

### tick

```java
public void tick()
```

### Provider

```java
public Provider(SpriteSet p_172490_)
```

**Parameters:**

- `p_172490_` (`SpriteSet`)

**Returns:** `public`

### createParticle

```java
public Particle createParticle(VibrationParticleOption p_172501_, ClientLevel p_172502_, double p_172503_, double p_172504_, double p_172505_, double p_172506_, double p_172507_, double p_172508_)
```

**Parameters:**

- `p_172501_` (`VibrationParticleOption`)
- `p_172502_` (`ClientLevel`)
- `p_172503_` (`double`)
- `p_172504_` (`double`)
- `p_172505_` (`double`)
- `p_172506_` (`double`)
- `p_172507_` (`double`)
- `p_172508_` (`double`)

**Returns:** `public Particle`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Provider` | class |  |
