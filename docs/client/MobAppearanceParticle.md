# MobAppearanceParticle

**Package:** `net.minecraft.client.particle`
**Type:** class
**Extends:** `Particle`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### MobAppearanceParticle

```java
protected MobAppearanceParticle(ClientLevel p_107114_, double p_107115_, double p_107116_, double p_107117_)
```

**Parameters:**

- `p_107114_` (`ClientLevel`)
- `p_107115_` (`double`)
- `p_107116_` (`double`)
- `p_107117_` (`double`)

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
public void render(VertexConsumer p_107125_, Camera p_107126_, float p_107127_)
```

**Parameters:**

- `p_107125_` (`VertexConsumer`)
- `p_107126_` (`Camera`)
- `p_107127_` (`float`)

### getRenderBoundingBox

```java
public net.minecraft.world.phys.AABB getRenderBoundingBox(float partialTicks)
```

**Parameters:**

- `partialTicks` (`float`)

**Returns:** `net.minecraft.world.phys.AABB`

### createParticle

```java
public Particle createParticle(SimpleParticleType p_107140_, ClientLevel p_107141_, double p_107142_, double p_107143_, double p_107144_, double p_107145_, double p_107146_, double p_107147_)
```

**Parameters:**

- `p_107140_` (`SimpleParticleType`)
- `p_107141_` (`ClientLevel`)
- `p_107142_` (`double`)
- `p_107143_` (`double`)
- `p_107144_` (`double`)
- `p_107145_` (`double`)
- `p_107146_` (`double`)
- `p_107147_` (`double`)

**Returns:** `public Particle`

### MobAppearanceParticle

```java
return new MobAppearanceParticle()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Provider` | class |  |
