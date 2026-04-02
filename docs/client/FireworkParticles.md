# FireworkParticles

**Package:** `net.minecraft.client.particle`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### FlashProvider

```java
public FlashProvider(SpriteSet p_106657_)
```

**Parameters:**

- `p_106657_` (`SpriteSet`)

**Returns:** `public`

### createParticle

```java
public Particle createParticle(SimpleParticleType p_106668_, ClientLevel p_106669_, double p_106670_, double p_106671_, double p_106672_, double p_106673_, double p_106674_, double p_106675_)
```

**Parameters:**

- `p_106668_` (`SimpleParticleType`)
- `p_106669_` (`ClientLevel`)
- `p_106670_` (`double`)
- `p_106671_` (`double`)
- `p_106672_` (`double`)
- `p_106673_` (`double`)
- `p_106674_` (`double`)
- `p_106675_` (`double`)

**Returns:** `public Particle`

### OverlayParticle

```java
protected OverlayParticle(ClientLevel p_106677_, double p_106678_, double p_106679_, double p_106680_)
```

**Parameters:**

- `p_106677_` (`ClientLevel`)
- `p_106678_` (`double`)
- `p_106679_` (`double`)
- `p_106680_` (`double`)

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

### render

```java
public void render(VertexConsumer p_106688_, Camera p_106689_, float p_106690_)
```

**Parameters:**

- `p_106688_` (`VertexConsumer`)
- `p_106689_` (`Camera`)
- `p_106690_` (`float`)

### getQuadSize

```java
public float getQuadSize(float p_106693_)
```

**Parameters:**

- `p_106693_` (`float`)

**Returns:** `float`

### SparkParticle

```java
protected SparkParticle(ClientLevel p_106702_, double p_106703_, double p_106704_, double p_106705_, double p_106706_, double p_106707_, double p_106708_, ParticleEngine p_106709_, SpriteSet p_106710_)
```

**Parameters:**

- `p_106702_` (`ClientLevel`)
- `p_106703_` (`double`)
- `p_106704_` (`double`)
- `p_106705_` (`double`)
- `p_106706_` (`double`)
- `p_106707_` (`double`)
- `p_106708_` (`double`)
- `p_106709_` (`ParticleEngine`)
- `p_106710_` (`SpriteSet`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### setTrail

```java
public void setTrail(boolean p_106728_)
```

**Parameters:**

- `p_106728_` (`boolean`)

**Returns:** `public void`

### setTwinkle

```java
public void setTwinkle(boolean p_331940_)
```

**Parameters:**

- `p_331940_` (`boolean`)

**Returns:** `public void`

### render

```java
public void render(VertexConsumer p_106724_, Camera p_106725_, float p_106726_)
```

**Parameters:**

- `p_106724_` (`VertexConsumer`)
- `p_106725_` (`Camera`)
- `p_106726_` (`float`)

### tick

```java
public void tick()
```

### SparkProvider

```java
public SparkProvider(SpriteSet p_106733_)
```

**Parameters:**

- `p_106733_` (`SpriteSet`)

**Returns:** `public`

### createParticle

```java
public Particle createParticle(SimpleParticleType p_106744_, ClientLevel p_106745_, double p_106746_, double p_106747_, double p_106748_, double p_106749_, double p_106750_, double p_106751_)
```

**Parameters:**

- `p_106744_` (`SimpleParticleType`)
- `p_106745_` (`ClientLevel`)
- `p_106746_` (`double`)
- `p_106747_` (`double`)
- `p_106748_` (`double`)
- `p_106749_` (`double`)
- `p_106750_` (`double`)
- `p_106751_` (`double`)

**Returns:** `public Particle`

### Starter

```java
public Starter(ClientLevel p_106757_, double p_106758_, double p_106759_, double p_106760_, double p_106761_, double p_106762_, double p_106763_, ParticleEngine p_106764_, List<FireworkExplosion> p_330899_)
```

**Parameters:**

- `p_106757_` (`ClientLevel`)
- `p_106758_` (`double`)
- `p_106759_` (`double`)
- `p_106760_` (`double`)
- `p_106761_` (`double`)
- `p_106762_` (`double`)
- `p_106763_` (`double`)
- `p_106764_` (`ParticleEngine`)
- `p_330899_` (`List<FireworkExplosion>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### IllegalArgumentException

```java
throw new IllegalArgumentException("Cannot create firework starter with no explosions")
```

**Parameters:**

- `explosions"` (`"Cannot create firework starter with no`)

**Returns:** `throw new`

### tick

```java
public void tick()
```

### isFarAwayFromCamera

```java
private boolean isFarAwayFromCamera()
```

**Returns:** `private boolean`

### createParticle

```java
public void createParticle(double p_106768_, double p_106769_, double p_106770_, double p_106771_, double p_106772_, double p_106773_, IntList p_330262_, IntList p_330897_, boolean p_106776_, boolean p_106777_)
```

**Parameters:**

- `p_106768_` (`double`)
- `p_106769_` (`double`)
- `p_106770_` (`double`)
- `p_106771_` (`double`)
- `p_106772_` (`double`)
- `p_106773_` (`double`)
- `p_330262_` (`IntList`)
- `p_330897_` (`IntList`)
- `p_106776_` (`boolean`)
- `p_106777_` (`boolean`)

**Returns:** `public void`

### createParticleBall

```java
public void createParticleBall(double p_106779_, int p_106780_, IntList p_331243_, IntList p_330912_, boolean p_106783_, boolean p_106784_)
```

**Parameters:**

- `p_106779_` (`double`)
- `p_106780_` (`int`)
- `p_331243_` (`IntList`)
- `p_330912_` (`IntList`)
- `p_106783_` (`boolean`)
- `p_106784_` (`boolean`)

**Returns:** `public void`

### createParticleShape

```java
public void createParticleShape(double p_106786_, double[][] p_106787_, IntList p_330715_, IntList p_331438_, boolean p_106790_, boolean p_106791_, boolean p_106792_)
```

**Parameters:**

- `p_106786_` (`double`)
- `p_106787_` (`double[][]`)
- `p_330715_` (`IntList`)
- `p_331438_` (`IntList`)
- `p_106790_` (`boolean`)
- `p_106791_` (`boolean`)
- `p_106792_` (`boolean`)

**Returns:** `public void`

### createParticleBurst

```java
public void createParticleBurst(IntList p_330681_, IntList p_331575_, boolean p_106796_, boolean p_106797_)
```

**Parameters:**

- `p_330681_` (`IntList`)
- `p_331575_` (`IntList`)
- `p_106796_` (`boolean`)
- `p_106797_` (`boolean`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `FlashProvider` | class |  |
| `OverlayParticle` | class |  |
| `SparkProvider` | class |  |
| `Starter` | class |  |
