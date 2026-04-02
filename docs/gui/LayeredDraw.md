# LayeredDraw

**Package:** `net.minecraft.client.gui`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `Z_SEPARATION` | `float` |  |

## Methods

### add

```java
public LayeredDraw add(LayeredDraw.Layer p_316797_)
```

**Parameters:**

- `p_316797_` (`LayeredDraw.Layer`)

**Returns:** `public LayeredDraw`

### add

```java
public LayeredDraw add(LayeredDraw p_316830_, BooleanSupplier p_316449_)
```

**Parameters:**

- `p_316830_` (`LayeredDraw`)
- `p_316449_` (`BooleanSupplier`)

**Returns:** `public LayeredDraw`

### render

```java
public void render(GuiGraphics p_316283_, DeltaTracker p_348508_)
```

**Parameters:**

- `p_316283_` (`GuiGraphics`)
- `p_348508_` (`DeltaTracker`)

**Returns:** `public void`

### renderInner

```java
private void renderInner(GuiGraphics p_316483_, DeltaTracker p_348478_)
```

**Parameters:**

- `p_316483_` (`GuiGraphics`)
- `p_348478_` (`DeltaTracker`)

**Returns:** `private void`

### render

```java
void render(GuiGraphics p_316811_, DeltaTracker p_348559_)
```

**Parameters:**

- `p_316811_` (`GuiGraphics`)
- `p_348559_` (`DeltaTracker`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Layer` | interface |  |
