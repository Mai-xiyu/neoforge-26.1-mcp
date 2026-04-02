# RegisterRenderStateModifiersEvent

**Package:** `net.neoforged.neoforge.client.renderstate`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired for registering modifier functions for various render state objects. Useful for gathering context for
custom rendering with objects that are not your own.


This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterRenderStateModifiersHandler {
    @SubscribeEvent
    public static void onRegisterRenderStateModifiers(RegisterRenderStateModifiersEvent event) {
        // Handle event
    }
}
```
