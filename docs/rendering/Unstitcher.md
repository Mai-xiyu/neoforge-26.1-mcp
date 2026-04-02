# Unstitcher

**Package:** `net.minecraft.client.renderer.texture.atlas.sources`
**Type:** class
**Implements:** `SpriteSource`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<Unstitcher>` |  |
| `CODEC` | `Codec<Unstitcher.Region>` |  |

## Methods

### Unstitcher

```java
public Unstitcher(ResourceLocation p_261679_, List<Unstitcher.Region> p_261974_, double p_262181_, double p_261631_)
```

**Parameters:**

- `p_261679_` (`ResourceLocation`)
- `p_261974_` (`List<Unstitcher.Region>`)
- `p_262181_` (`double`)
- `p_261631_` (`double`)

**Returns:** `public`

### run

```java
public void run(ResourceManager p_261498_, SpriteSource.Output p_261828_)
```

**Parameters:**

- `p_261498_` (`ResourceManager`)
- `p_261828_` (`SpriteSource.Output`)

### type

```java
public SpriteSourceType type()
```

**Returns:** `SpriteSourceType`

### Region

```java
public static record Region(ResourceLocation sprite, double x, double y, double width, double height)
```

**Parameters:**

- `sprite` (`ResourceLocation`)
- `x` (`double`)
- `y` (`double`)
- `width` (`double`)
- `height` (`double`)

**Returns:** `record`

### RegionInstance

```java
public RegionInstance(LazyLoadedImage p_266678_, Unstitcher.Region p_267197_, double p_266911_, double p_266789_)
```

**Parameters:**

- `p_266678_` (`LazyLoadedImage`)
- `p_267197_` (`Unstitcher.Region`)
- `p_266911_` (`double`)
- `p_266789_` (`double`)

**Returns:** `public`

### apply

```java
public SpriteContents apply(SpriteResourceLoader p_296272_)
```

**Parameters:**

- `p_296272_` (`SpriteResourceLoader`)

**Returns:** `public SpriteContents`

### discard

```java
public void discard()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Region` | record |  |
| `RegionInstance` | class |  |
