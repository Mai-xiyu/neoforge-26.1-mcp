# ModMismatchEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fires when the mod loader is in the process of loading a world that was last saved
with mod versions that differ from the currently-loaded versions. This can be used to
enqueue work to run at a later point, such as multi-file migration of data.



Note that level and world information has not yet been fully loaded; as such, it is
unsafe to access server or level information during handling of this event.



This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the mod-specific event bus, on both LogicalSide logical sides.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `levelDirectory` | `LevelStorageSource.LevelDirectory` |  |
| `unresolved` | `public Stream<MismatchResolutionResult>` |  |
| `resolved` | `public Stream<MismatchResolutionResult>` |  |
| `missing` | `public boolean` |  |

## Accessors

- `private final LevelStorageSource.LevelDirectory getLevelDirectory()` 
- `public ArtifactVersion getPreviousVersion(String modId)` 
- `public ArtifactVersion getCurrentVersion(String modId)` 
- `public Optional<MismatchedVersionInfo> getVersionDifference(String modid)` 
- `public Optional<ModContainer> getResolver(String modid)` 
- `public Stream<MismatchResolutionResult> getUnresolved()` 
- `public Stream<MismatchResolutionResult> getResolved()` 
- `public boolean isMissing()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ModMismatchHandler {
    @SubscribeEvent
    public static void onModMismatch(ModMismatchEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### MismatchResolutionResult

### MismatchedVersionInfo
