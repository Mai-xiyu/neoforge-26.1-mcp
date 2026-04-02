# BossHealthOverlay

**Package:** `net.minecraft.client.gui.components`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### BossHealthOverlay

```java
public BossHealthOverlay(Minecraft p_93702_)
```

**Parameters:**

- `p_93702_` (`Minecraft`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_283175_)
```

**Parameters:**

- `p_283175_` (`GuiGraphics`)

**Returns:** `public void`

### drawBar

```java
private void drawBar(GuiGraphics p_283672_, int p_283570_, int p_283306_, BossEvent p_283156_)
```

**Parameters:**

- `p_283672_` (`GuiGraphics`)
- `p_283570_` (`int`)
- `p_283306_` (`int`)
- `p_283156_` (`BossEvent`)

**Returns:** `private void`

### drawBar

```java
private void drawBar(GuiGraphics p_281657_, int p_283675_, int p_282498_, BossEvent p_281288_, int p_283619_, ResourceLocation[] p_296156_, ResourceLocation[] p_296292_)
```

**Parameters:**

- `p_281657_` (`GuiGraphics`)
- `p_283675_` (`int`)
- `p_282498_` (`int`)
- `p_281288_` (`BossEvent`)
- `p_283619_` (`int`)
- `p_296156_` (`ResourceLocation[]`)
- `p_296292_` (`ResourceLocation[]`)

**Returns:** `private void`

### update

```java
public void update(ClientboundBossEventPacket p_93712_)
```

**Parameters:**

- `p_93712_` (`ClientboundBossEventPacket`)

**Returns:** `public void`

### add

```java
public void add(UUID p_168824_, Component p_168825_, float p_168826_, BossEvent.BossBarColor p_168827_, BossEvent.BossBarOverlay p_168828_, boolean p_168829_, boolean p_168830_, boolean p_168831_)
```

**Parameters:**

- `p_168824_` (`UUID`)
- `p_168825_` (`Component`)
- `p_168826_` (`float`)
- `p_168827_` (`BossEvent.BossBarColor`)
- `p_168828_` (`BossEvent.BossBarOverlay`)
- `p_168829_` (`boolean`)
- `p_168830_` (`boolean`)
- `p_168831_` (`boolean`)

### remove

```java
public void remove(UUID p_168812_)
```

**Parameters:**

- `p_168812_` (`UUID`)

### updateProgress

```java
public void updateProgress(UUID p_168814_, float p_168815_)
```

**Parameters:**

- `p_168814_` (`UUID`)
- `p_168815_` (`float`)

### updateName

```java
public void updateName(UUID p_168821_, Component p_168822_)
```

**Parameters:**

- `p_168821_` (`UUID`)
- `p_168822_` (`Component`)

### updateStyle

```java
public void updateStyle(UUID p_168817_, BossEvent.BossBarColor p_168818_, BossEvent.BossBarOverlay p_168819_)
```

**Parameters:**

- `p_168817_` (`UUID`)
- `p_168818_` (`BossEvent.BossBarColor`)
- `p_168819_` (`BossEvent.BossBarOverlay`)

### updateProperties

```java
public void updateProperties(UUID p_168833_, boolean p_168834_, boolean p_168835_, boolean p_168836_)
```

**Parameters:**

- `p_168833_` (`UUID`)
- `p_168834_` (`boolean`)
- `p_168835_` (`boolean`)
- `p_168836_` (`boolean`)

### reset

```java
public void reset()
```

**Returns:** `public void`

### shouldPlayMusic

```java
public boolean shouldPlayMusic()
```

**Returns:** `public boolean`

### shouldDarkenScreen

```java
public boolean shouldDarkenScreen()
```

**Returns:** `public boolean`

### shouldCreateWorldFog

```java
public boolean shouldCreateWorldFog()
```

**Returns:** `public boolean`
