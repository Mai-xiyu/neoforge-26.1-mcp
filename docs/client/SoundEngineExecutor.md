# SoundEngineExecutor

**Package:** `net.minecraft.client.sounds`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `BlockableEventLoop<Runnable>`
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `runningThread` | `Thread` |  |

## Accessors

- `protected Thread getRunningThread()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class SoundEngineExecutorHandler {
    @SubscribeEvent
    public static void onSoundEngineExecutor(SoundEngineExecutor event) {
        // Handle event
    }
}
```
