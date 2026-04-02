# AddPackFindersEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired on `PackRepository` creation to allow mods to add new pack finders.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `packType` | `PackType` |  |
| `trusted` | `boolean` |  |

## Accessors

- `public PackType getPackType()` 
- `public boolean isTrusted()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class AddPackFindersHandler {
    @SubscribeEvent
    public static void onAddPackFinders(AddPackFindersEvent event) {
        // Handle event
    }
}
```
