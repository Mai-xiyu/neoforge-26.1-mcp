# LootTableLoadEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

Fired when a `LootTable` is loaded from JSON.
Can be used to modify the loot table, cancel loading it, or outright replace it.
This event is currently fired for all loot tables coming from vanilla, mods, and user datapacks.
This event is fired whenever server resources are loaded or reloaded.


This event is ICancellableEvent cancellable, and does not HasResult have a result.
If the event is cancelled, the loot table will be made empty.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#SERVER logical server.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | `public ResourceLocation` |  |
| `table` | `public LootTable` |  |

## Accessors

- `public ResourceLocation getName()` 
- `public LootTable getTable()` 
- `public void setTable(LootTable table)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LootTableLoadHandler {
    @SubscribeEvent
    public static void onLootTableLoad(LootTableLoadEvent event) {
        // Handle event
    }
}
```
