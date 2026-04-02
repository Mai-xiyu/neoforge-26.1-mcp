# WandererTradesEvent

**Package:** `net.neoforged.neoforge.event.village`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

WandererTradesEvent is fired during reload by `TagsUpdatedEvent`. It is used to gather the trade lists for the wandering merchant.
It is fired on the `NeoForge#EVENT_BUS`.
The wandering merchant picks a few trades from `generic` and a single trade from `rare`.
To add trades to the merchant, simply add new trades to the list. `BasicItemListing` provides a default implementation.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `generic` | `List<ItemListing>` |  |
| `rare` | `List<ItemListing>` |  |
| `genericTrades` | `public List<ItemListing>` |  |
| `rareTrades` | `public List<ItemListing>` |  |
| `registryAccess` | `public RegistryAccess` |  |

## Accessors

- `public List<ItemListing> getGenericTrades()` 
- `public List<ItemListing> getRareTrades()` 
- `public RegistryAccess getRegistryAccess()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class WandererTradesHandler {
    @SubscribeEvent
    public static void onWandererTrades(WandererTradesEvent event) {
        // Handle event
    }
}
```
