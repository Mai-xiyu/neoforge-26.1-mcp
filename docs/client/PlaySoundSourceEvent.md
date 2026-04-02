# PlaySoundSourceEvent

**Package:** `net.neoforged.neoforge.client.event.sound`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `SoundSourceEvent`

## Description

Fired when a non-streaming sound is being played. A non-streaming sound is loaded fully into memory
in a buffer before being played, and used for most sounds of short length such as sound effects for clicking
buttons.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.
@see PlayStreamingSourceEvent

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PlaySoundSourceHandler {
    @SubscribeEvent
    public static void onPlaySoundSource(PlaySoundSourceEvent event) {
        // Handle event
    }
}
```
