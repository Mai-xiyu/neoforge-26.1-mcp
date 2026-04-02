# IFluidHandlerItem

**Package:** `net.neoforged.neoforge.fluids.capability`
**Type:** interface
**Extends:** `IFluidHandler`

## Description

ItemStacks handled by an `IFluidHandler` may change, so this class allows
users of the fluid handler to get the container after it has been used.

## Methods

### getContainer

```java
ItemStack getContainer()
```

**Returns:** `ItemStack`
