# VillagerTradesEvent

**Package:** `net.neoforged.neoforge.event.village`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

VillagerTradesEvent is fired during reload by `TagsUpdatedEvent`. It is used to gather the trade lists for each profession.
It is fired on the `NeoForge#EVENT_BUS`.
It is fired once for each registered villager profession.
Villagers pick two trades from their trade map, based on their level.
Villager level is increased by successful trades.
The map is populated for levels 1-5 (inclusive), so Map#get will never return null for those keys.
Levels outside of this range do nothing, as specified by `VillagerData#canLevelUp(int)` which is called before attempting to level up.
To add trades to the merchant, simply add new trades to the list. `BasicItemListing` provides a default implementation.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `trades` | `Int2ObjectMap<List<ItemListing>>` |  |
| `type` | `VillagerProfession` |  |
| `registryAccess` | `public RegistryAccess` |  |

## Accessors

- `public Int2ObjectMap<List<ItemListing>> getTrades()` 
- `public VillagerProfession getType()` 
- `public RegistryAccess getRegistryAccess()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class VillagerTradesHandler {
    @SubscribeEvent
    public static void onVillagerTrades(VillagerTradesEvent event) {
        // Handle event
    }
}
```
