# ShriekParticle

**Package:** `net.minecraft.client.particle`
**Type:** class
**Extends:** `TextureSheetParticle`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ShriekParticle

```java
protected ShriekParticle(ClientLevel p_233976_, double p_233977_, double p_233978_, double p_233979_, int p_233980_)
```

**Parameters:**

- `p_233976_` (`ClientLevel`)
- `p_233977_` (`double`)
- `p_233978_` (`double`)
- `p_233979_` (`double`)
- `p_233980_` (`int`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### getQuadSize

```java
public float getQuadSize(float p_234003_)
```

**Parameters:**

- `p_234003_` (`float`)

**Returns:** `float`

### render

```java
public void render(VertexConsumer p_233985_, Camera p_233986_, float p_233987_)
```

**Parameters:**

- `p_233985_` (`VertexConsumer`)
- `p_233986_` (`Camera`)
- `p_233987_` (`float`)

### getLightColor

```java
public int getLightColor(float p_233983_)
```

**Parameters:**

- `p_233983_` (`float`)

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
public Provider(SpriteSet p_234008_)
```

**Parameters:**

- `p_234008_` (`SpriteSet`)

**Returns:** `public`

### createParticle

```java
public Particle createParticle(ShriekParticleOption p_234019_, ClientLevel p_234020_, double p_234021_, double p_234022_, double p_234023_, double p_234024_, double p_234025_, double p_234026_)
```

**Parameters:**

- `p_234019_` (`ShriekParticleOption`)
- `p_234020_` (`ClientLevel`)
- `p_234021_` (`double`)
- `p_234022_` (`double`)
- `p_234023_` (`double`)
- `p_234024_` (`double`)
- `p_234025_` (`double`)
- `p_234026_` (`double`)

**Returns:** `public Particle`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Provider` | class |  |
