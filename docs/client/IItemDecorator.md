# IItemDecorator

**Package:** `net.neoforged.neoforge.client`
**Type:** interface
**Side:** 🖥️ Client

## Description

An ItemDecorator that is used to render something on specific items, when the DurabilityBar and StackCount is rendered.
Add it to an item using RegisterItemDecorationsEvent#register(ItemLike, IItemDecorator).

## Methods

### render

```java
boolean render(GuiGraphics guiGraphics, Font font, ItemStack stack, int xOffset, int yOffset)
```

**Parameters:**

- `guiGraphics` (`GuiGraphics`)
- `font` (`Font`)
- `stack` (`ItemStack`)
- `xOffset` (`int`)
- `yOffset` (`int`)

**Returns:** `boolean`
