# FlameParticle

**Package:** `net.minecraft.client.particle`
**Type:** class
**Extends:** `RisingParticle`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### FlameParticle

```java
protected FlameParticle(ClientLevel p_106800_, double p_106801_, double p_106802_, double p_106803_, double p_106804_, double p_106805_, double p_106806_)
```

**Parameters:**

- `p_106800_` (`ClientLevel`)
- `p_106801_` (`double`)
- `p_106802_` (`double`)
- `p_106803_` (`double`)
- `p_106804_` (`double`)
- `p_106805_` (`double`)
- `p_106806_` (`double`)

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
public void move(double p_106817_, double p_106818_, double p_106819_)
```

**Parameters:**

- `p_106817_` (`double`)
- `p_106818_` (`double`)
- `p_106819_` (`double`)

### getQuadSize

```java
public float getQuadSize(float p_106824_)
```

**Parameters:**

- `p_106824_` (`float`)

**Returns:** `float`

### getLightColor

```java
public int getLightColor(float p_106821_)
```

**Parameters:**

- `p_106821_` (`float`)

**Returns:** `int`

### Provider

```java
public Provider(SpriteSet p_106827_)
```

**Parameters:**

- `p_106827_` (`SpriteSet`)

**Returns:** `public`

### createParticle

```java
public Particle createParticle(SimpleParticleType p_106838_, ClientLevel p_106839_, double p_106840_, double p_106841_, double p_106842_, double p_106843_, double p_106844_, double p_106845_)
```

**Parameters:**

- `p_106838_` (`SimpleParticleType`)
- `p_106839_` (`ClientLevel`)
- `p_106840_` (`double`)
- `p_106841_` (`double`)
- `p_106842_` (`double`)
- `p_106843_` (`double`)
- `p_106844_` (`double`)
- `p_106845_` (`double`)

**Returns:** `public Particle`

### SmallFlameProvider

```java
public SmallFlameProvider(SpriteSet p_172113_)
```

**Parameters:**

- `p_172113_` (`SpriteSet`)

**Returns:** `public`

### createParticle

```java
public Particle createParticle(SimpleParticleType p_172124_, ClientLevel p_172125_, double p_172126_, double p_172127_, double p_172128_, double p_172129_, double p_172130_, double p_172131_)
```

**Parameters:**

- `p_172124_` (`SimpleParticleType`)
- `p_172125_` (`ClientLevel`)
- `p_172126_` (`double`)
- `p_172127_` (`double`)
- `p_172128_` (`double`)
- `p_172129_` (`double`)
- `p_172130_` (`double`)
- `p_172131_` (`double`)

**Returns:** `public Particle`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Provider` | class |  |
| `SmallFlameProvider` | class |  |
