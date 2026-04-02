# ProgressScreen

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Extends:** `Screen`
**Implements:** `ProgressListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ProgressScreen

```java
public ProgressScreen(boolean p_169364_)
```

**Parameters:**

- `p_169364_` (`boolean`)

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

### progressStartNoAbort

```java
public void progressStartNoAbort(Component p_96520_)
```

**Parameters:**

- `p_96520_` (`Component`)

### progressStart

```java
public void progressStart(Component p_96523_)
```

**Parameters:**

- `p_96523_` (`Component`)

### progressStage

```java
public void progressStage(Component p_96525_)
```

**Parameters:**

- `p_96525_` (`Component`)

### progressStagePercentage

```java
public void progressStagePercentage(int p_96513_)
```

**Parameters:**

- `p_96513_` (`int`)

### stop

```java
public void stop()
```

### render

```java
public void render(GuiGraphics p_283582_, int p_96516_, int p_96517_, float p_96518_)
```

**Parameters:**

- `p_283582_` (`GuiGraphics`)
- `p_96516_` (`int`)
- `p_96517_` (`int`)
- `p_96518_` (`float`)
