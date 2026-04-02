# RegisterMenuScreensEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterMenuScreensHandler {
    @SubscribeEvent
    public static void onRegisterMenuScreens(RegisterMenuScreensEvent event) {
        // Handle event
    }
}
```
