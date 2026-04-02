# EntityAttributeModificationEvent

**Package:** `net.neoforged.neoforge.event.entity`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

EntityAttributeModificationEvent.
Use this event to add attributes to existing entity types.
This event is fired after registration and before common setup, and after `EntityAttributeCreationEvent`

Fired on the Mod bus `IModBusEvent`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `types` | `public List<EntityType<? extends LivingEntity>>` |  |

## Accessors

- `public List<EntityType<? extends LivingEntity>> getTypes()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class EntityAttributeModificationHandler {
    @SubscribeEvent
    public static void onEntityAttributeModification(EntityAttributeModificationEvent event) {
        // Handle event
    }
}
```
