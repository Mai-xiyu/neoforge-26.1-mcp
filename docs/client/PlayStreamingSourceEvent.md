# PlayStreamingSourceEvent

**Package:** `net.neoforged.neoforge.client.event.sound`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `SoundSourceEvent`

## Description

Fired when a streaming sound is being played. A streaming sound is streamed directly from its source
(such as a file), and used for sounds of long length which are unsuitable to keep fully loaded in-memory in a buffer
(as is done for regular non-streaming sounds), such as background music or music discs.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.
@see PlayStreamingSourceEvent

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PlayStreamingSourceHandler {
    @SubscribeEvent
    public static void onPlayStreamingSource(PlayStreamingSourceEvent event) {
        // Handle event
    }
}
```
