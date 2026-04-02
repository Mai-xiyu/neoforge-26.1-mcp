# PlayLevelSoundEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

PlayLevelSoundEvent is fired when a sound is played on a `Level`.
This event is fired from `Level#playSound`, `Level#playSeededSound`, and `LocalPlayer#playSound`.



`#getLevel()` contains the level the sound is being played in.
`#getSound()` contains the sound event to be played.
`#getOriginalVolume()` contains the original volume for the sound to be played at.
`#getOriginalPitch()` contains the original pitch for the sound to be played at.
`#getNewVolume()` contains the volume the sound will be played at.
`#getNewPitch()` contains the pitch the sound will be played at.



This event is `ICancellableEvent cancelable`.
If this event is canceled, the sound is not played.



This event does not have a result.



This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `level` | `Level` |  |
| `sound` | `Holder<SoundEvent>` |  |
| `source` | `SoundSource` |  |
| `originalVolume` | `float` |  |
| `originalPitch` | `float` |  |
| `newVolume` | `float` |  |
| `newPitch` | `float` |  |
| `entity` | `Entity` |  |
| `position` | `Vec3` |  |

## Accessors

- `public Level getLevel()` 
- `public Holder<SoundEvent> getSound()` 
- `public void setSound(Holder<SoundEvent> sound)` 
- `public SoundSource getSource()` 
- `public void setSource(SoundSource source)` 
- `public float getOriginalVolume()` 
- `public float getOriginalPitch()` 
- `public float getNewVolume()` 
- `public void setNewVolume(float newVolume)` 
- `public float getNewPitch()` 
- `public void setNewPitch(float newPitch)` 
- `public static Entity getEntity()` 
- `public static Vec3 getPosition()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class PlayLevelSoundHandler {
    @SubscribeEvent
    public static void onPlayLevelSound(PlayLevelSoundEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### AtEntity

### AtPosition
