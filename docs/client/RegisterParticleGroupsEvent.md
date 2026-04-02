# RegisterParticleGroupsEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired for registering additional ParticleGroup particle group factories.


This is used when creating particle groups for particles in `ParticleEngine`.


This event is fired on the mod-specific event bus,
only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterParticleGroupsHandler {
    @SubscribeEvent
    public static void onRegisterParticleGroups(RegisterParticleGroupsEvent event) {
        // Handle event
    }
}
```
