# EnchantmentScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `AbstractContainerScreen<EnchantmentMenu>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `time` | `int` |  |
| `flip` | `float` |  |
| `oFlip` | `float` |  |
| `flipT` | `float` |  |
| `flipA` | `float` |  |
| `open` | `float` |  |
| `oOpen` | `float` |  |

## Methods

### EnchantmentScreen

```java
public EnchantmentScreen(EnchantmentMenu p_98754_, Inventory p_98755_, Component p_98756_)
```

**Parameters:**

- `p_98754_` (`EnchantmentMenu`)
- `p_98755_` (`Inventory`)
- `p_98756_` (`Component`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### init

```java
protected void init()
```

### containerTick

```java
public void containerTick()
```

### mouseClicked

```java
public boolean mouseClicked(double p_98758_, double p_98759_, int p_98760_)
```

**Parameters:**

- `p_98758_` (`double`)
- `p_98759_` (`double`)
- `p_98760_` (`int`)

**Returns:** `boolean`

### renderBg

```java
protected void renderBg(GuiGraphics p_282430_, float p_282530_, int p_281621_, int p_283333_)
```

**Parameters:**

- `p_282430_` (`GuiGraphics`)
- `p_282530_` (`float`)
- `p_281621_` (`int`)
- `p_283333_` (`int`)

### renderBook

```java
private void renderBook(GuiGraphics p_289697_, int p_289667_, int p_289669_, float p_289670_)
```

**Parameters:**

- `p_289697_` (`GuiGraphics`)
- `p_289667_` (`int`)
- `p_289669_` (`int`)
- `p_289670_` (`float`)

**Returns:** `private void`

### render

```java
public void render(GuiGraphics p_283462_, int p_282491_, int p_281953_, float p_282182_)
```

**Parameters:**

- `p_283462_` (`GuiGraphics`)
- `p_282491_` (`int`)
- `p_281953_` (`int`)
- `p_282182_` (`float`)

### tickBook

```java
public void tickBook()
```

**Returns:** `public void`
