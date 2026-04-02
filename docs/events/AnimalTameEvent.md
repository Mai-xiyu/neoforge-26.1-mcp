# AnimalTameEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LivingEvent`

## Description

This event is fired when an `Animal` is tamed. 
It is fired via `EventHooks#onAnimalTame(Animal, Player)`.
Forge fires this event for applicable vanilla animals, mods need to fire it themselves.
This event is `net.neoforged.bus.api.ICancellableEvent`. If canceled, taming the animal will fail.
This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `animal` | `public Animal` |  |
| `tamer` | `public Player` |  |

## Accessors

- `public Animal getAnimal()` 
- `public Player getTamer()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class AnimalTameHandler {
    @SubscribeEvent
    public static void onAnimalTame(AnimalTameEvent event) {
        // Handle event
    }
}
```
