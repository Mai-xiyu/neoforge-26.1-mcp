# ViewArea

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `levelRenderer` | `LevelRenderer` |  |
| `level` | `Level` |  |
| `sectionGridSizeY` | `int` |  |
| `sectionGridSizeX` | `int` |  |
| `sectionGridSizeZ` | `int` |  |
| `sections` | `SectionRenderDispatcher.RenderSection[]` |  |

## Methods

### ViewArea

```java
public ViewArea(SectionRenderDispatcher p_296460_, Level p_110846_, int p_110847_, LevelRenderer p_110848_)
```

**Parameters:**

- `p_296460_` (`SectionRenderDispatcher`)
- `p_110846_` (`Level`)
- `p_110847_` (`int`)
- `p_110848_` (`LevelRenderer`)

**Returns:** `public`

### createSections

```java
protected void createSections(SectionRenderDispatcher p_294825_)
```

**Parameters:**

- `p_294825_` (`SectionRenderDispatcher`)

**Returns:** `protected void`

### releaseAllBuffers

```java
public void releaseAllBuffers()
```

**Returns:** `public void`

### getSectionIndex

```java
private int getSectionIndex(int p_295999_, int p_294097_, int p_294966_)
```

**Parameters:**

- `p_295999_` (`int`)
- `p_294097_` (`int`)
- `p_294966_` (`int`)

**Returns:** `private int`

### setViewDistance

```java
protected void setViewDistance(int p_110854_)
```

**Parameters:**

- `p_110854_` (`int`)

**Returns:** `protected void`

### getViewDistance

```java
public int getViewDistance()
```

**Returns:** `public int`

### getLevelHeightAccessor

```java
public LevelHeightAccessor getLevelHeightAccessor()
```

**Returns:** `public LevelHeightAccessor`

### repositionCamera

```java
public void repositionCamera(double p_110851_, double p_110852_)
```

**Parameters:**

- `p_110851_` (`double`)
- `p_110852_` (`double`)

**Returns:** `public void`

### setDirty

```java
public void setDirty(int p_110860_, int p_110861_, int p_110862_, boolean p_110863_)
```

**Parameters:**

- `p_110860_` (`int`)
- `p_110861_` (`int`)
- `p_110862_` (`int`)
- `p_110863_` (`boolean`)

**Returns:** `public void`

### getRenderSectionAt

```java
protected SectionRenderDispatcher.RenderSection getRenderSectionAt(BlockPos p_294239_)
```

**Parameters:**

- `p_294239_` (`BlockPos`)

**Returns:** `SectionRenderDispatcher.RenderSection`
