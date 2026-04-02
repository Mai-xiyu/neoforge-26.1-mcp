# PlaySoundEvent

**Package:** `net.neoforged.neoforge.client.event.sound`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `SoundEvent`

## Description

Fired when a sound is about to be played by the sound engine. This fires before the sound is played and before any
checks on the sound (such as a zeroed volume, an empty `net.minecraft.client.resources.sounds.Sound`, and
others). This can be used to change or prevent (by passing `null)` a sound from being played through
`#setSound(SoundInstance)`).


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.
@see PlaySoundSourceEvent
@see PlayStreamingSourceEvent

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | `String` |  |
| `originalSound` | `SoundInstance` |  |
| `sound` | `SoundInstance` |  |

## Accessors

- `public String getName()` 
- `public SoundInstance getOriginalSound()` 
- `public SoundInstance getSound()` 
- `public void setSound(SoundInstance newSound)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PlaySoundHandler {
    @SubscribeEvent
    public static void onPlaySound(PlaySoundEvent event) {
        // Handle event
    }
}
```
