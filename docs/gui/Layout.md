# Layout

**Package:** `net.minecraft.client.gui.layouts`
**Type:** interface
**Extends:** `LayoutElement`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### visitChildren

```java
void visitChildren(Consumer<LayoutElement> p_270255_)
```

**Parameters:**

- `p_270255_` (`Consumer<LayoutElement>`)

### visitWidgets

```java
default void visitWidgets(Consumer<AbstractWidget> p_270962_)
```

**Parameters:**

- `p_270962_` (`Consumer<AbstractWidget>`)

### arrangeElements

```java
default void arrangeElements()
```

**Returns:** `default void`
