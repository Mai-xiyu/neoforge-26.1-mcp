# NeoForgeLoadingOverlay

**Package:** `net.neoforged.neoforge.client.loading`
**Type:** class
**Extends:** `LoadingOverlay`
**Side:** 🖥️ Client

## Description

This is an implementation of the LoadingOverlay that calls back into the early window rendering, as part of the
game loading cycle. We completely replace the `#render(GuiGraphics, int, int, float)` call from the parent
with one of our own, that allows us to blend our early loading screen into the main window, in the same manner as
the Mojang screen. It also allows us to see and tick appropriately as the later stages of the loading system run.
It is somewhat a copy of the superclass render method.

## Methods

### NeoForgeLoadingOverlay

```java
public NeoForgeLoadingOverlay(Minecraft mc, ReloadInstance reloader, Consumer<Optional<Throwable>> errorConsumer, DisplayWindow displayWindow)
```

**Parameters:**

- `mc` (`Minecraft`)
- `reloader` (`ReloadInstance`)
- `errorConsumer` (`Consumer<Optional<Throwable>>`)
- `displayWindow` (`DisplayWindow`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### newInstance

```java
public static Supplier<LoadingOverlay> newInstance(Supplier<Minecraft> mc, Supplier<ReloadInstance> ri, Consumer<Optional<Throwable>> handler, DisplayWindow window)
```

**Parameters:**

- `mc` (`Supplier<Minecraft>`)
- `ri` (`Supplier<ReloadInstance>`)
- `handler` (`Consumer<Optional<Throwable>>`)
- `window` (`DisplayWindow`)

**Returns:** `public static Supplier<LoadingOverlay>`

### render

```java
public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick)
```

**Parameters:**

- `graphics` (`GuiGraphics`)
- `mouseX` (`int`)
- `mouseY` (`int`)
- `partialTick` (`float`)

### addQuad

```java
top box from hpos addQuad()
```

**Returns:** `top box from hpos`

### addQuad

```java
bottom box to hpos addQuad()
```

**Returns:** `bottom box to hpos`

### addQuad

```java
left box to wpos addQuad()
```

**Returns:** `left box to wpos`

### addQuad

```java
right box from wpos addQuad()
```

**Returns:** `right box from wpos`

### addQuad

```java
private static void addQuad(VertexConsumer bufferbuilder, float x0, float x1, float y0, float y1, ColourScheme.Colour colour, float fade)
```

**Parameters:**

- `bufferbuilder` (`VertexConsumer`)
- `x0` (`float`)
- `x1` (`float`)
- `y0` (`float`)
- `y1` (`float`)
- `colour` (`ColourScheme.Colour`)
- `fade` (`float`)

**Returns:** `private static void`
