# AnvilUpdateEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

AnvilUpdateEvent is fired whenever the input stacks (left or right) or the name in an anvil changed. 
It is called from `AnvilMenu#createResult()`. 
If the event is canceled, vanilla behavior will not run, and the output will be set to `ItemStack#EMPTY`. 
If the event is not canceled, but the output is not empty, it will set the output and not run vanilla behavior. 
if the output is empty, and the event is not canceled, vanilla behavior will execute. 

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `left` | `ItemStack` |  |
| `right` | `ItemStack` |  |
| `name` | `String` |  |
| `output` | `ItemStack` |  |
| `cost` | `long` |  |
| `materialCost` | `int` |  |
| `player` | `Player` |  |

## Accessors

- `public ItemStack getLeft()` 
- `public ItemStack getRight()` 
- `public String getName()` 
- `public ItemStack getOutput()` 
- `public void setOutput(ItemStack output)` 
- `public long getCost()` 
- `public void setCost(long cost)` 
- `public int getMaterialCost()` 
- `public void setMaterialCost(int materialCost)` 
- `public Player getPlayer()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class AnvilUpdateHandler {
    @SubscribeEvent
    public static void onAnvilUpdate(AnvilUpdateEvent event) {
        // Handle event
    }
}
```
