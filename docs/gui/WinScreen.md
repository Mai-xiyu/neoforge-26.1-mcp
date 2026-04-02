# WinScreen

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### WinScreen

```java
public WinScreen(boolean p_276286_, Runnable p_276294_)
```

**Parameters:**

- `p_276286_` (`boolean`)
- `p_276294_` (`Runnable`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### calculateScrollSpeed

```java
private float calculateScrollSpeed()
```

**Returns:** `private float`

### tick

```java
public void tick()
```

### keyPressed

```java
public boolean keyPressed(int p_169469_, int p_169470_, int p_169471_)
```

**Parameters:**

- `p_169469_` (`int`)
- `p_169470_` (`int`)
- `p_169471_` (`int`)

**Returns:** `boolean`

### keyReleased

```java
public boolean keyReleased(int p_169476_, int p_169477_, int p_169478_)
```

**Parameters:**

- `p_169476_` (`int`)
- `p_169477_` (`int`)
- `p_169478_` (`int`)

**Returns:** `boolean`

### onClose

```java
public void onClose()
```

### respawn

```java
private void respawn()
```

**Returns:** `private void`

### init

```java
protected void init()
```

### wrapCreditsIO

```java
private void wrapCreditsIO(ResourceLocation p_350854_, WinScreen.CreditsReader p_197400_)
```

**Parameters:**

- `p_350854_` (`ResourceLocation`)
- `p_197400_` (`WinScreen.CreditsReader`)

**Returns:** `private void`

### addPoemFile

```java
private void addPoemFile(Reader p_232818_)
```

**Parameters:**

- `p_232818_` (`Reader`)

**Returns:** `private void`

### addCreditsFile

```java
private void addCreditsFile(Reader p_232820_)
```

**Parameters:**

- `p_232820_` (`Reader`)

**Returns:** `private void`

### addEmptyLine

```java
private void addEmptyLine()
```

**Returns:** `private void`

### addPoemLines

```java
private void addPoemLines(String p_181398_)
```

**Parameters:**

- `p_181398_` (`String`)

**Returns:** `private void`

### addCreditsLine

```java
private void addCreditsLine(Component p_169473_, boolean p_169474_)
```

**Parameters:**

- `p_169473_` (`Component`)
- `p_169474_` (`boolean`)

**Returns:** `private void`

### render

```java
public void render(GuiGraphics p_281907_, int p_282364_, int p_282696_, float p_281316_)
```

**Parameters:**

- `p_281907_` (`GuiGraphics`)
- `p_282364_` (`int`)
- `p_282696_` (`int`)
- `p_281316_` (`float`)

### renderVignette

```java
private void renderVignette(GuiGraphics p_331973_)
```

**Parameters:**

- `p_331973_` (`GuiGraphics`)

**Returns:** `private void`

### renderBackground

```java
public void renderBackground(GuiGraphics p_282239_, int p_294762_, int p_295473_, float p_296441_)
```

**Parameters:**

- `p_282239_` (`GuiGraphics`)
- `p_294762_` (`int`)
- `p_295473_` (`int`)
- `p_296441_` (`float`)

### renderMenuBackground

```java
protected void renderMenuBackground(GuiGraphics p_333914_, int p_333869_, int p_334014_, int p_333930_, int p_333890_)
```

**Parameters:**

- `p_333914_` (`GuiGraphics`)
- `p_333869_` (`int`)
- `p_334014_` (`int`)
- `p_333930_` (`int`)
- `p_333890_` (`int`)

### isPauseScreen

```java
public boolean isPauseScreen()
```

**Returns:** `boolean`

### removed

```java
public void removed()
```

### getBackgroundMusic

```java
public Music getBackgroundMusic()
```

**Returns:** `Music`

### read

```java
void read(Reader p_232822_)
```

**Parameters:**

- `p_232822_` (`Reader`)
