# MapRenderer

**Package:** `net.minecraft.client.gui`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### MapRenderer

```java
public MapRenderer(TextureManager p_93259_, MapDecorationTextureManager p_335870_)
```

**Parameters:**

- `p_93259_` (`TextureManager`)
- `p_335870_` (`MapDecorationTextureManager`)

**Returns:** `public`

### update

```java
public void update(MapId p_323687_, MapItemSavedData p_168767_)
```

**Parameters:**

- `p_323687_` (`MapId`)
- `p_168767_` (`MapItemSavedData`)

**Returns:** `public void`

### render

```java
public void render(PoseStack p_168772_, MultiBufferSource p_168773_, MapId p_324127_, MapItemSavedData p_168775_, boolean p_168776_, int p_168774_)
```

**Parameters:**

- `p_168772_` (`PoseStack`)
- `p_168773_` (`MultiBufferSource`)
- `p_324127_` (`MapId`)
- `p_168775_` (`MapItemSavedData`)
- `p_168776_` (`boolean`)
- `p_168774_` (`int`)

**Returns:** `public void`

### getOrCreateMapInstance

```java
private MapRenderer.MapInstance getOrCreateMapInstance(MapId p_323495_, MapItemSavedData p_168780_)
```

**Parameters:**

- `p_323495_` (`MapId`)
- `p_168780_` (`MapItemSavedData`)

**Returns:** `private MapRenderer.MapInstance`

### resetData

```java
public void resetData()
```

**Returns:** `public void`

### close

```java
public void close()
```

### MapInstance

```java
 MapInstance(int p_168783_, MapItemSavedData p_168784_)
```

**Parameters:**

- `p_168783_` (`int`)
- `p_168784_` (`MapItemSavedData`)

**Returns:** ``

### replaceMapData

```java
void replaceMapData(MapItemSavedData p_182568_)
```

**Parameters:**

- `p_182568_` (`MapItemSavedData`)

### forceUpload

```java
public void forceUpload()
```

**Returns:** `public void`

### updateTexture

```java
private void updateTexture()
```

**Returns:** `private void`

### draw

```java
void draw(PoseStack p_93292_, MultiBufferSource p_93293_, boolean p_93294_, int p_93295_)
```

**Parameters:**

- `p_93292_` (`PoseStack`)
- `p_93293_` (`MultiBufferSource`)
- `p_93294_` (`boolean`)
- `p_93295_` (`int`)

### close

```java
public void close()
```
