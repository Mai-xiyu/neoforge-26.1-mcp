# SoulParticle

**Package:** `net.minecraft.client.particle`
**Type:** class
**Extends:** `RisingParticle`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `isGlowing` | `boolean` |  |

## Methods

### SoulParticle

```java
protected SoulParticle(ClientLevel p_107717_, double p_107718_, double p_107719_, double p_107720_, double p_107721_, double p_107722_, double p_107723_, SpriteSet p_107724_)
```

**Parameters:**

- `p_107717_` (`ClientLevel`)
- `p_107718_` (`double`)
- `p_107719_` (`double`)
- `p_107720_` (`double`)
- `p_107721_` (`double`)
- `p_107722_` (`double`)
- `p_107723_` (`double`)
- `p_107724_` (`SpriteSet`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### getLightColor

```java
public int getLightColor(float p_234080_)
```

**Parameters:**

- `p_234080_` (`float`)

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

### EmissiveProvider

```java
public EmissiveProvider(SpriteSet p_234083_)
```

**Parameters:**

- `p_234083_` (`SpriteSet`)

**Returns:** `public`

### createParticle

```java
public Particle createParticle(SimpleParticleType p_234094_, ClientLevel p_234095_, double p_234096_, double p_234097_, double p_234098_, double p_234099_, double p_234100_, double p_234101_)
```

**Parameters:**

- `p_234094_` (`SimpleParticleType`)
- `p_234095_` (`ClientLevel`)
- `p_234096_` (`double`)
- `p_234097_` (`double`)
- `p_234098_` (`double`)
- `p_234099_` (`double`)
- `p_234100_` (`double`)
- `p_234101_` (`double`)

**Returns:** `public Particle`

### Provider

```java
public Provider(SpriteSet p_107739_)
```

**Parameters:**

- `p_107739_` (`SpriteSet`)

**Returns:** `public`

### createParticle

```java
public Particle createParticle(SimpleParticleType p_107750_, ClientLevel p_107751_, double p_107752_, double p_107753_, double p_107754_, double p_107755_, double p_107756_, double p_107757_)
```

**Parameters:**

- `p_107750_` (`SimpleParticleType`)
- `p_107751_` (`ClientLevel`)
- `p_107752_` (`double`)
- `p_107753_` (`double`)
- `p_107754_` (`double`)
- `p_107755_` (`double`)
- `p_107756_` (`double`)
- `p_107757_` (`double`)

**Returns:** `public Particle`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `EmissiveProvider` | class |  |
| `Provider` | class |  |
