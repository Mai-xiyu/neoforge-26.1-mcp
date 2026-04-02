# SoundEngineLoadEvent

**Package:** `net.neoforged.neoforge.client.event.sound`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `SoundEvent`

## Description

Fired when the `SoundEngine` is constructed or (re)loaded, such as during game initialization or when the sound
output device is changed.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class SoundEngineLoadHandler {
    @SubscribeEvent
    public static void onSoundEngineLoad(SoundEngineLoadEvent event) {
        // Handle event
    }
}
```
