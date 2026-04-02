# SelectMusicEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

Fired when the `net.minecraft.client.sounds.MusicManager` checks what situational music should be used. This fires before the music begins playing.
If the music is set to `null` by a modder, it will cancel any music that was already playing.

Note that the higher priority you make your event listener, the earlier the music will be set.
Because of this, if you want your music to take precedence over others (perhaps you want to have seperate nighttime music for a biome for instance) then you may want it to have a lower priority.

To make your music instantly play rather than waiting for the playing music to stop, set the music to one that Music#replaceCurrentMusic() is set to replace the current music.

Higher priorities would likely be better suited for biome-based or dimension-based musics, whereas lower priority is likely good for specific structures or situations.

This event is ICancellableEvent cancellable, and does not HasResult have a result.
If the event is canceled, then whatever the latest music set was will be used as the music.

This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `originalMusic` | `Music` |  |
| `playingMusic` | `SoundInstance` |  |
| `music` | `Music` |  |

## Accessors

- `public Music getOriginalMusic()` 
- `public SoundInstance getPlayingMusic()` 
- `public Music getMusic()` 
- `public void setMusic(Music newMusic)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class SelectMusicHandler {
    @SubscribeEvent
    public static void onSelectMusic(SelectMusicEvent event) {
        // Handle event
    }
}
```
