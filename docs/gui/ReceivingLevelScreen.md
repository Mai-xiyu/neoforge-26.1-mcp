# ReceivingLevelScreen

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ReceivingLevelScreen

```java
public ReceivingLevelScreen(BooleanSupplier p_304926_, ReceivingLevelScreen.Reason p_341661_)
```

**Parameters:**

- `p_304926_` (`BooleanSupplier`)
- `p_341661_` (`ReceivingLevelScreen.Reason`)

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

### render

```java
public void render(GuiGraphics p_281489_, int p_282902_, int p_283018_, float p_281251_)
```

**Parameters:**

- `p_281489_` (`GuiGraphics`)
- `p_282902_` (`int`)
- `p_283018_` (`int`)
- `p_281251_` (`float`)

### renderBackground

```java
public void renderBackground(GuiGraphics p_341670_, int p_341687_, int p_341693_, float p_341684_)
```

**Parameters:**

- `p_341670_` (`GuiGraphics`)
- `p_341687_` (`int`)
- `p_341693_` (`int`)
- `p_341684_` (`float`)

### getNetherPortalSprite

```java
private TextureAtlasSprite getNetherPortalSprite()
```

**Returns:** `private TextureAtlasSprite`

### tick

```java
public void tick()
```

### onClose

```java
public void onClose()
```

### isPauseScreen

```java
public boolean isPauseScreen()
```

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Reason` | enum |  |
