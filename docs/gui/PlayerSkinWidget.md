# PlayerSkinWidget

**Package:** `net.minecraft.client.gui.components`
**Type:** class
**Extends:** `AbstractWidget`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### PlayerSkinWidget

```java
public PlayerSkinWidget(int p_300014_, int p_299867_, EntityModelSet p_299948_, Supplier<PlayerSkin> p_299853_)
```

**Parameters:**

- `p_300014_` (`int`)
- `p_299867_` (`int`)
- `p_299948_` (`EntityModelSet`)
- `p_299853_` (`Supplier<PlayerSkin>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### renderWidget

```java
protected void renderWidget(GuiGraphics p_299897_, int p_299826_, int p_300009_, float p_299921_)
```

**Parameters:**

- `p_299897_` (`GuiGraphics`)
- `p_299826_` (`int`)
- `p_300009_` (`int`)
- `p_299921_` (`float`)

### onDrag

```java
protected void onDrag(double p_299829_, double p_299876_, double p_300028_, double p_299872_)
```

**Parameters:**

- `p_299829_` (`double`)
- `p_299876_` (`double`)
- `p_300028_` (`double`)
- `p_299872_` (`double`)

### playDownSound

```java
public void playDownSound(SoundManager p_299880_)
```

**Parameters:**

- `p_299880_` (`SoundManager`)

### updateWidgetNarration

```java
protected void updateWidgetNarration(NarrationElementOutput p_299955_)
```

**Parameters:**

- `p_299955_` (`NarrationElementOutput`)

### isActive

```java
public boolean isActive()
```

**Returns:** `boolean`

### nextFocusPath

```java
public ComponentPath nextFocusPath(FocusNavigationEvent p_299934_)
```

**Parameters:**

- `p_299934_` (`FocusNavigationEvent`)

**Returns:** `ComponentPath`

### Model

```java
static record Model(PlayerModel<?> wideModel, PlayerModel<?> slimModel)
```

**Parameters:**

- `wideModel` (`PlayerModel<?>`)
- `slimModel` (`PlayerModel<?>`)

**Returns:** `record`

### bake

```java
public static PlayerSkinWidget.Model bake(EntityModelSet p_300003_)
```

**Parameters:**

- `p_300003_` (`EntityModelSet`)

**Returns:** `public static PlayerSkinWidget.Model`

### render

```java
public void render(GuiGraphics p_300018_, PlayerSkin p_299991_)
```

**Parameters:**

- `p_300018_` (`GuiGraphics`)
- `p_299991_` (`PlayerSkin`)

**Returns:** `public void`
