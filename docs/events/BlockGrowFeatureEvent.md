# BlockGrowFeatureEvent

**Package:** `net.neoforged.neoforge.event.level`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LevelEvent`

## Description

This event is fired whenever a block (like a sapling) grows into a feature (like a tree).



In vanilla, this fires for saplings, fungi, mushrooms and azaleas. Mods may fire it for similar blocks.



This event is only fired on the logical server.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `random` | `RandomSource` |  |
| `pos` | `BlockPos` |  |
| `feature` | `Holder<ConfiguredFeature<?, ?>>` |  |

## Accessors

- `public RandomSource getRandom()` 
- `public BlockPos getPos()` 
- `public Holder<ConfiguredFeature<?, ?>> getFeature()` 
- `public void setFeature(Holder<ConfiguredFeature<?, ?>> feature)` 
- `public void setFeature(ResourceKey<ConfiguredFeature<?, ?>> featureKey)` 
- `public void setCanceled(boolean canceled)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class BlockGrowFeatureHandler {
    @SubscribeEvent
    public static void onBlockGrowFeature(BlockGrowFeatureEvent event) {
        // Handle event
    }
}
```
