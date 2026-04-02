# EntityAttributeCreationEvent

**Package:** `net.neoforged.neoforge.event.entity`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

EntityAttributeCreationEvent.
Use this event to register attributes for your own EntityTypes.
This event is fired after registration and before common setup.

Fired on the Mod bus `IModBusEvent`.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class EntityAttributeCreationHandler {
    @SubscribeEvent
    public static void onEntityAttributeCreation(EntityAttributeCreationEvent event) {
        // Handle event
    }
}
```
