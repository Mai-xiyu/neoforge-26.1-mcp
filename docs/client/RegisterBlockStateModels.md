# RegisterBlockStateModels

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fire to register new types of `CustomUnbakedBlockStateModel` and `CustomBlockModelDefinition`.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterBlockStateModelsHandler {
    @SubscribeEvent
    public static void onRegisterBlockStateModels(RegisterBlockStateModels event) {
        // Handle event
    }
}
```
