# AnvilRepairEvent

**Package:** `net.neoforged.neoforge.event.entity.player`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `PlayerEvent`

## Description

Fired when the player removes a "repaired" item from the Anvil's Output slot.
breakChance specifies as a percentage the chance that the anvil will be "damaged" when used.
ItemStacks are the inputs/output from the anvil. They cannot be edited.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `output` | `ItemStack` |  |
| `left` | `ItemStack` |  |
| `right` | `ItemStack` |  |
| `breakChance` | `public float` |  |

## Accessors

- `public ItemStack getOutput()` 
- `public ItemStack getLeft()` 
- `public ItemStack getRight()` 
- `public float getBreakChance()` 
- `public void setBreakChance(float breakChance)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class AnvilRepairHandler {
    @SubscribeEvent
    public static void onAnvilRepair(AnvilRepairEvent event) {
        // Handle event
    }
}
```
