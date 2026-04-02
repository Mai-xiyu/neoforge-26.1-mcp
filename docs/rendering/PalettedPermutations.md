# PalettedPermutations

**Package:** `net.minecraft.client.renderer.texture.atlas.sources`
**Type:** class
**Implements:** `SpriteSource`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<PalettedPermutations>` |  |

## Methods

### PalettedPermutations

```java
public PalettedPermutations(List<ResourceLocation> p_267282_, ResourceLocation p_266681_, Map<String, ResourceLocation> p_266741_)
```

**Parameters:**

- `p_267282_` (`List<ResourceLocation>`)
- `p_266681_` (`ResourceLocation`)
- `p_266741_` (`Map<String, ResourceLocation>`)

**Returns:** `public`

### run

```java
public void run(ResourceManager p_267219_, SpriteSource.Output p_267250_)
```

**Parameters:**

- `p_267219_` (`ResourceManager`)
- `p_267250_` (`SpriteSource.Output`)

### createPaletteMapping

```java
private static IntUnaryOperator createPaletteMapping(int[] p_266839_, int[] p_266776_)
```

**Parameters:**

- `p_266839_` (`int[]`)
- `p_266776_` (`int[]`)

**Returns:** `private static IntUnaryOperator`

### IllegalArgumentException

```java
throw new IllegalArgumentException()
```

**Returns:** `throw new`

### loadPaletteEntryFromImage

```java
public static int[] loadPaletteEntryFromImage(ResourceManager p_267184_, ResourceLocation p_267059_)
```

**Parameters:**

- `p_267184_` (`ResourceManager`)
- `p_267059_` (`ResourceLocation`)

**Returns:** `public static int[]`

### IllegalArgumentException

```java
throw new IllegalArgumentException()
```

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException()
```

**Returns:** `throw new`

### type

```java
public SpriteSourceType type()
```

**Returns:** `SpriteSourceType`

### apply

```java
public SpriteContents apply(SpriteResourceLoader p_295023_)
```

**Parameters:**

- `p_295023_` (`SpriteResourceLoader`)

**Returns:** `SpriteContents`

### discard

```java
public void discard()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `PalettedSpriteSupplier` | record |  |
