# GameEventTagsProvider

**Package:** `net.minecraft.data.tags`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `TagsProvider<GameEvent>`

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class GameTagsProviderHandler {
    @SubscribeEvent
    public static void onGameTagsProvider(GameEventTagsProvider event) {
        // Handle event
    }
}
```
