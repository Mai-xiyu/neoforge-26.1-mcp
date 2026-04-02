# RegisterKeyMappingsEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Allows users to register custom `net.minecraft.client.KeyMapping key mappings`.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterKeyMappingsHandler {
    @SubscribeEvent
    public static void onRegisterKeyMappings(RegisterKeyMappingsEvent event) {
        // Handle event
    }
}
```
