# AttackSweepParticle

**Package:** `net.minecraft.client.particle`
**Type:** class
**Extends:** `TextureSheetParticle`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### AttackSweepParticle

```java
protected AttackSweepParticle(ClientLevel p_105546_, double p_105547_, double p_105548_, double p_105549_, double p_105550_, SpriteSet p_105551_)
```

**Parameters:**

- `p_105546_` (`ClientLevel`)
- `p_105547_` (`double`)
- `p_105548_` (`double`)
- `p_105549_` (`double`)
- `p_105550_` (`double`)
- `p_105551_` (`SpriteSet`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### getLightColor

```java
public int getLightColor(float p_105562_)
```

**Parameters:**

- `p_105562_` (`float`)

**Returns:** `int`

### tick

```java
public void tick()
```

### getRenderType

```java
public ParticleRenderType getRenderType()
```

**Returns:** `ParticleRenderType`

### Provider

```java
public Provider(SpriteSet p_105566_)
```

**Parameters:**

- `p_105566_` (`SpriteSet`)

**Returns:** `public`

### createParticle

```java
public Particle createParticle(SimpleParticleType p_105577_, ClientLevel p_105578_, double p_105579_, double p_105580_, double p_105581_, double p_105582_, double p_105583_, double p_105584_)
```

**Parameters:**

- `p_105577_` (`SimpleParticleType`)
- `p_105578_` (`ClientLevel`)
- `p_105579_` (`double`)
- `p_105580_` (`double`)
- `p_105581_` (`double`)
- `p_105582_` (`double`)
- `p_105583_` (`double`)
- `p_105584_` (`double`)

**Returns:** `public Particle`

### AttackSweepParticle

```java
return new AttackSweepParticle()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Provider` | class |  |
