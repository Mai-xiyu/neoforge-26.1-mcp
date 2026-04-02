# TextureAtlasStitchedEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired after a texture atlas is stitched together and all textures therein have been loaded.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.
@see TextureAtlas

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `atlas` | `TextureAtlas` |  |

## Accessors

- `public TextureAtlas getAtlas()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class TextureAtlasStitchedHandler {
    @SubscribeEvent
    public static void onTextureAtlasStitched(TextureAtlasStitchedEvent event) {
        // Handle event
    }
}
```
