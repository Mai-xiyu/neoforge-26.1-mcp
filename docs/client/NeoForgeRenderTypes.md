# NeoForgeRenderTypes

**Package:** `net.neoforged.neoforge.client`
**Type:** enum
**Side:** 🖥️ Client
**Annotations:** `@SuppressWarnings("deprecation")`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `enableTextTextureLinearFiltering` | `boolean` |  |

## Methods

### getItemLayeredSolid

```java
public static RenderType getItemLayeredSolid(ResourceLocation textureLocation)
```

**Parameters:**

- `textureLocation` (`ResourceLocation`)

**Returns:** `RenderType`

### getItemLayeredCutout

```java
public static RenderType getItemLayeredCutout(ResourceLocation textureLocation)
```

**Parameters:**

- `textureLocation` (`ResourceLocation`)

**Returns:** `RenderType`

### getItemLayeredCutoutMipped

```java
public static RenderType getItemLayeredCutoutMipped(ResourceLocation textureLocation)
```

**Parameters:**

- `textureLocation` (`ResourceLocation`)

**Returns:** `RenderType`

### getItemLayeredTranslucent

```java
public static RenderType getItemLayeredTranslucent(ResourceLocation textureLocation)
```

**Parameters:**

- `textureLocation` (`ResourceLocation`)

**Returns:** `RenderType`

### getUnsortedTranslucent

```java
public static RenderType getUnsortedTranslucent(ResourceLocation textureLocation)
```

**Parameters:**

- `textureLocation` (`ResourceLocation`)

**Returns:** `RenderType`

### getUnlitTranslucent

```java
public static RenderType getUnlitTranslucent(ResourceLocation textureLocation)
```

**Parameters:**

- `textureLocation` (`ResourceLocation`)

**Returns:** `RenderType`

### getUnlitTranslucent

```java
public static RenderType getUnlitTranslucent(ResourceLocation textureLocation, boolean sortingEnabled)
```

**Parameters:**

- `textureLocation` (`ResourceLocation`)
- `sortingEnabled` (`boolean`)

**Returns:** `RenderType`

### getEntityCutoutMipped

```java
public static RenderType getEntityCutoutMipped(ResourceLocation textureLocation)
```

**Parameters:**

- `textureLocation` (`ResourceLocation`)

**Returns:** `RenderType`

### getText

```java
public static RenderType getText(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `RenderType`

### getTextIntensity

```java
public static RenderType getTextIntensity(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `RenderType`

### getTextPolygonOffset

```java
public static RenderType getTextPolygonOffset(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `RenderType`

### getTextIntensityPolygonOffset

```java
public static RenderType getTextIntensityPolygonOffset(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `RenderType`

### getTextSeeThrough

```java
public static RenderType getTextSeeThrough(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `RenderType`

### getTextIntensitySeeThrough

```java
public static RenderType getTextIntensitySeeThrough(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `RenderType`

### getTranslucentParticlesTarget

```java
public static RenderType getTranslucentParticlesTarget(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `RenderType`

### NeoForgeRenderTypes

```java
 NeoForgeRenderTypes(Supplier<RenderType> renderTypeSupplier)
```

**Parameters:**

- `renderTypeSupplier` (`Supplier<RenderType>`)

**Returns:** ``

### get

```java
public RenderType get()
```

**Returns:** `public RenderType`

### unsortedTranslucent

```java
private static RenderType unsortedTranslucent(ResourceLocation textureLocation)
```

**Parameters:**

- `textureLocation` (`ResourceLocation`)

**Returns:** `private static RenderType`

### unlitTranslucent

```java
private static RenderType unlitTranslucent(ResourceLocation textureLocation, boolean sortingEnabled)
```

**Parameters:**

- `textureLocation` (`ResourceLocation`)
- `sortingEnabled` (`boolean`)

**Returns:** `private static RenderType`

### layeredItemSolid

```java
private static RenderType layeredItemSolid(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `private static RenderType`

### layeredItemCutout

```java
private static RenderType layeredItemCutout(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `private static RenderType`

### layeredItemCutoutMipped

```java
private static RenderType layeredItemCutoutMipped(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `private static RenderType`

### layeredItemTranslucent

```java
private static RenderType layeredItemTranslucent(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `private static RenderType`

### getText

```java
private static RenderType getText(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `private static RenderType`

### getTextIntensity

```java
private static RenderType getTextIntensity(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `private static RenderType`

### getTextPolygonOffset

```java
private static RenderType getTextPolygonOffset(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `private static RenderType`

### getTextIntensityPolygonOffset

```java
private static RenderType getTextIntensityPolygonOffset(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `private static RenderType`

### getTextSeeThrough

```java
private static RenderType getTextSeeThrough(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `private static RenderType`

### getTextIntensitySeeThrough

```java
private static RenderType getTextIntensitySeeThrough(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `private static RenderType`

### getTranslucentParticlesTarget

```java
private static RenderType getTranslucentParticlesTarget(ResourceLocation locationIn)
```

**Parameters:**

- `locationIn` (`ResourceLocation`)

**Returns:** `private static RenderType`

### CustomizableTextureState

```java
private CustomizableTextureState(ResourceLocation resLoc, BooleanSupplier blur, BooleanSupplier mipmap)
```

**Parameters:**

- `resLoc` (`ResourceLocation`)
- `blur` (`BooleanSupplier`)
- `mipmap` (`BooleanSupplier`)

**Returns:** `private`

### setupRenderState

```java
public void setupRenderState()
```
