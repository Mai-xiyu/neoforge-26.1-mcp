# ContainerEventHandler

**Package:** `net.minecraft.client.gui.components.events`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `GuiEventListener`
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `dragging` | `boolean` |  |
| `focused` | `GuiEventListener` |  |
| `currentFocusPath` | `ComponentPath` |  |

## Accessors

- `default Optional<GuiEventListener> getChildAt(double p_94730_, double p_94731_)` 
- `boolean isDragging()` 
- `void setDragging(boolean p_94720_)` 
- `GuiEventListener getFocused()` 
- `void setFocused(GuiEventListener p_94713_)` 
- `default void setFocused(boolean p_265504_)` 
- `default boolean isFocused()` 
- `default ComponentPath getCurrentFocusPath()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ContainerHandlerHandler {
    @SubscribeEvent
    public static void onContainerHandler(ContainerEventHandler event) {
        // Handle event
    }
}
```
