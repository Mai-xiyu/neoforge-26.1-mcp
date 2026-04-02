# DustColorTransitionOptions

**Package:** `net.minecraft.core.particles`
**Type:** class
**Extends:** `ScalableParticleOptionsBase`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SCULK_PARTICLE_COLOR` | `Vector3f` |  |
| `SCULK_TO_REDSTONE` | `DustColorTransitionOptions` |  |
| `CODEC` | `MapCodec<DustColorTransitionOptions>` |  |
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, DustColorTransitionOptions>` |  |

## Methods

### DustColorTransitionOptions

```java
public DustColorTransitionOptions(Vector3f p_254199_, Vector3f p_254529_, float p_254178_)
```

**Parameters:**

- `p_254199_` (`Vector3f`)
- `p_254529_` (`Vector3f`)
- `p_254178_` (`float`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getFromColor

```java
public Vector3f getFromColor()
```

**Returns:** `public Vector3f`

### getToColor

```java
public Vector3f getToColor()
```

**Returns:** `public Vector3f`

### getType

```java
public ParticleType<DustColorTransitionOptions> getType()
```

**Returns:** `ParticleType<DustColorTransitionOptions>`
