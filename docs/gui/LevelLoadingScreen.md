# LevelLoadingScreen

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### LevelLoadingScreen

```java
public LevelLoadingScreen(StoringChunkProgressListener p_96143_)
```

**Parameters:**

- `p_96143_` (`StoringChunkProgressListener`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### shouldCloseOnEsc

```java
public boolean shouldCloseOnEsc()
```

**Returns:** `boolean`

### shouldNarrateNavigation

```java
protected boolean shouldNarrateNavigation()
```

**Returns:** `boolean`

### removed

```java
public void removed()
```

### updateNarratedWidget

```java
protected void updateNarratedWidget(NarrationElementOutput p_169312_)
```

**Parameters:**

- `p_169312_` (`NarrationElementOutput`)

### getFormattedProgress

```java
private Component getFormattedProgress()
```

**Returns:** `private Component`

### render

```java
public void render(GuiGraphics p_283534_, int p_96146_, int p_96147_, float p_96148_)
```

**Parameters:**

- `p_283534_` (`GuiGraphics`)
- `p_96146_` (`int`)
- `p_96147_` (`int`)
- `p_96148_` (`float`)

### renderChunks

```java
 renderChunks()
```

**Returns:** ``

### renderChunks

```java
public static void renderChunks(GuiGraphics p_283467_, StoringChunkProgressListener p_96151_, int p_96152_, int p_96153_, int p_96154_, int p_96155_)
```

**Parameters:**

- `p_283467_` (`GuiGraphics`)
- `p_96151_` (`StoringChunkProgressListener`)
- `p_96152_` (`int`)
- `p_96153_` (`int`)
- `p_96154_` (`int`)
- `p_96155_` (`int`)

**Returns:** `public static void`
