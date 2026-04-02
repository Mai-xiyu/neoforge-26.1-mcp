# RegisterTicketControllersEvent

**Package:** `net.neoforged.neoforge.common.world.chunk`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired in order to register chunk `TicketController ticket controllers`.
This event is fired on the mod-specific event bus.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterTicketControllersHandler {
    @SubscribeEvent
    public static void onRegisterTicketControllers(RegisterTicketControllersEvent event) {
        // Handle event
    }
}
```
