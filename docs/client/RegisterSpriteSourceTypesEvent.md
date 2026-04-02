# RegisterSpriteSourceTypesEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired to allow mods to register their own SpriteSourceType.
This event is fired once during the construction of the `Minecraft` instance or
before datagen when client datagen is enabled.


This event is not ICancellableEvent cancellable.


This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterSpriteSourceTypesHandler {
    @SubscribeEvent
    public static void onRegisterSpriteSourceTypes(RegisterSpriteSourceTypesEvent event) {
        // Handle event
    }
}
```
