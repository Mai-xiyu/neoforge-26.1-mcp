# ItemPickupParticle

**Package:** `net.minecraft.client.particle`
**Type:** class
**Extends:** `Particle`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ItemPickupParticle

```java
public ItemPickupParticle(EntityRenderDispatcher p_107023_, RenderBuffers p_107024_, ClientLevel p_107025_, Entity p_107026_, Entity p_107027_)
```

**Parameters:**

- `p_107023_` (`EntityRenderDispatcher`)
- `p_107024_` (`RenderBuffers`)
- `p_107025_` (`ClientLevel`)
- `p_107026_` (`Entity`)
- `p_107027_` (`Entity`)

**Returns:** `public`

### ItemPickupParticle

```java
private ItemPickupParticle(EntityRenderDispatcher p_107029_, RenderBuffers p_107030_, ClientLevel p_107031_, Entity p_107032_, Entity p_107033_, Vec3 p_107034_)
```

**Parameters:**

- `p_107029_` (`EntityRenderDispatcher`)
- `p_107030_` (`RenderBuffers`)
- `p_107031_` (`ClientLevel`)
- `p_107032_` (`Entity`)
- `p_107033_` (`Entity`)
- `p_107034_` (`Vec3`)

**Returns:** `private`

### getSafeCopy

```java
private Entity getSafeCopy(Entity p_107037_)
```

**Parameters:**

- `p_107037_` (`Entity`)

**Returns:** `private Entity`

### getRenderType

```java
public ParticleRenderType getRenderType()
```

**Returns:** `ParticleRenderType`

### render

```java
public void render(VertexConsumer p_107039_, Camera p_107040_, float p_107041_)
```

**Parameters:**

- `p_107039_` (`VertexConsumer`)
- `p_107040_` (`Camera`)
- `p_107041_` (`float`)

### tick

```java
public void tick()
```

### updatePosition

```java
private void updatePosition()
```

**Returns:** `private void`

### saveOldPosition

```java
private void saveOldPosition()
```

**Returns:** `private void`

### getRenderBoundingBox

```java
public net.minecraft.world.phys.AABB getRenderBoundingBox(float partialTicks)
```

**Parameters:**

- `partialTicks` (`float`)

**Returns:** `net.minecraft.world.phys.AABB`
