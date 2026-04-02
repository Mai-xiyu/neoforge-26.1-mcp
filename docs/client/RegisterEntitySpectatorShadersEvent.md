# RegisterEntitySpectatorShadersEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Allows users to register custom shaders to be used when the player spectates a certain kind of entity.
Vanilla examples of this are the green effect for creepers and the invert effect for endermen.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterEntitySpectatorShadersHandler {
    @SubscribeEvent
    public static void onRegisterEntitySpectatorShaders(RegisterEntitySpectatorShadersEvent event) {
        // Handle event
    }
}
```
