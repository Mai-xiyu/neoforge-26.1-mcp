# CreateFluidSourceEvent

**Package:** `net.neoforged.neoforge.event.level.block`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `BlockEvent`

## Description

Fired when a fluid checks if nearby blocks can convert it to a source block.



This can be used to manipulate if fluids are allowed to create sources dynamically.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `level` | `Level` |  |
| `fluidState` | `public FluidState` |  |
| `vanillaResult` | `boolean` |  |

## Accessors

- `public Level getLevel()` 
- `public FluidState getFluidState()` 
- `public boolean getVanillaResult()` 
- `public boolean canConvert()` 
- `public void setCanConvert(boolean convert)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class CreateFluidSourceHandler {
    @SubscribeEvent
    public static void onCreateFluidSource(CreateFluidSourceEvent event) {
        // Handle event
    }
}
```
