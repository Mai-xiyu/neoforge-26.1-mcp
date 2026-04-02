# TabNavigationBar

**Package:** `net.minecraft.client.gui.components.tabs`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `AbstractContainerEventHandler`
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `rectangle` | `ScreenRectangle` |  |

## Accessors

- `public void setWidth(int p_268094_)` 
- `public void setFocused(boolean p_275488_)` 
- `public void setFocused(GuiEventListener p_275675_)` 
- `public ScreenRectangle getRectangle()` 
- `private int getNextTabIndex(int p_270508_)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class TabNavigationBarHandler {
    @SubscribeEvent
    public static void onTabNavigationBar(TabNavigationBar event) {
        // Handle event
    }
}
```

## Sub-Events

### Builder
