# TradeWithVillagerEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Description

Fired when a player trades with an `AbstractVillager`.


This event is not ICancellableEvent cancellable, and does not Event.HasResult have a result.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#SERVER logical server.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `merchantOffer` | `MerchantOffer` |  |
| `abstractVillager` | `AbstractVillager` |  |

## Accessors

- `public MerchantOffer getMerchantOffer()` 
- `public AbstractVillager getAbstractVillager()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class TradeWithVillagerHandler {
    @SubscribeEvent
    public static void onTradeWithVillager(TradeWithVillagerEvent event) {
        // Handle event
    }
}
```
