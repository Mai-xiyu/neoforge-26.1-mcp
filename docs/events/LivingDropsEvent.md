# LivingDropsEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LivingEvent`

## Description

LivingDropsEvent is fired when an Entity's death causes dropped items to appear.
This event is fired whenever an Entity dies and drops items in
`LivingEntity#die(DamageSource)`.

This event is fired via the `CommonHooks#onLivingDrops(LivingEntity, DamageSource, Collection, int, boolean)` .

`#source` contains the DamageSource that caused the drop to occur.
`#drops` contains the ArrayList of EntityItems that will be dropped.
`#lootingLevel` contains the amount of loot that will be dropped.
`#recentlyHit` determines whether the Entity doing the drop has recently been damaged.

This event is `ICancellableEvent`.
If this event is canceled, the Entity does not drop anything.

This event does not have a result. `HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `source` | `public DamageSource` |  |
| `drops` | `public Collection<ItemEntity>` |  |
| `recentlyHit` | `public boolean` |  |

## Accessors

- `public DamageSource getSource()` 
- `public Collection<ItemEntity> getDrops()` 
- `public boolean isRecentlyHit()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingDropsHandler {
    @SubscribeEvent
    public static void onLivingDrops(LivingDropsEvent event) {
        // Handle event
    }
}
```
