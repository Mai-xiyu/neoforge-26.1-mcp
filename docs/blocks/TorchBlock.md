# TorchBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseTorchBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PARTICLE_OPTIONS_FIELD` | `MapCodec<SimpleParticleType>` |  |
| `CODEC` | `MapCodec<TorchBlock>` |  |
| `flameParticle` | `SimpleParticleType` |  |

## Methods

### codec

```java
public MapCodec<? extends TorchBlock> codec()
```

**Returns:** `MapCodec<? extends TorchBlock>`

### TorchBlock

```java
public TorchBlock(SimpleParticleType p_304940_, BlockBehaviour.Properties p_57491_)
```

**Parameters:**

- `p_304940_` (`SimpleParticleType`)
- `p_57491_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### animateTick

```java
public void animateTick(BlockState p_222593_, Level p_222594_, BlockPos p_222595_, RandomSource p_222596_)
```

**Parameters:**

- `p_222593_` (`BlockState`)
- `p_222594_` (`Level`)
- `p_222595_` (`BlockPos`)
- `p_222596_` (`RandomSource`)
