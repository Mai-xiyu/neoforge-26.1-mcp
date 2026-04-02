# SpriteSources

**Package:** `net.minecraft.client.renderer.texture.atlas`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SINGLE_FILE` | `SpriteSourceType` |  |
| `DIRECTORY` | `SpriteSourceType` |  |
| `FILTER` | `SpriteSourceType` |  |
| `UNSTITCHER` | `SpriteSourceType` |  |
| `PALETTED_PERMUTATIONS` | `SpriteSourceType` |  |
| `TYPE_CODEC` | `Codec<SpriteSourceType>` |  |
| `CODEC` | `Codec<SpriteSource>` |  |
| `FILE_CODEC` | `Codec<List<SpriteSource>>` |  |

## Methods

### register

```java
private static SpriteSourceType register(String p_262175_, MapCodec<? extends SpriteSource> p_338536_)
```

**Parameters:**

- `p_262175_` (`String`)
- `p_338536_` (`MapCodec<? extends SpriteSource>`)

**Returns:** `private static SpriteSourceType`

### IllegalStateException

```java
throw new IllegalStateException("Duplicate registration " + resourcelocation)
```

**Parameters:**

- `resourcelocation` (`"Duplicate registration " +`)

**Returns:** `throw new`
