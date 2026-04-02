# RegisterJsonAnimationTypesEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Allows registering custom `AnimationTarget`s and
`AnimationChannel.Interpolation interpolation function`s for loading JSON entity animation files.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterJsonAnimationTypesHandler {
    @SubscribeEvent
    public static void onRegisterJsonAnimationTypes(RegisterJsonAnimationTypesEvent event) {
        // Handle event
    }
}
```
