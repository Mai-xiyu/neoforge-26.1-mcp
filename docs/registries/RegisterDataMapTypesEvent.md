# RegisterDataMapTypesEvent

**Package:** `net.neoforged.neoforge.registries.datamaps`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Event fired on the mod event bus, in order to register `DataMapType data map types`.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterDataMapTypesHandler {
    @SubscribeEvent
    public static void onRegisterDataMapTypes(RegisterDataMapTypesEvent event) {
        // Handle event
    }
}
```
