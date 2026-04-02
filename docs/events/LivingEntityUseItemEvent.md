# LivingEntityUseItemEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `LivingEvent`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `item` | `public ItemStack` |  |
| `duration` | `public int` |  |
| `resultStack` | `public ItemStack` |  |

## Accessors

- `public ItemStack getItem()` 
- `public int getDuration()` 
- `public void setDuration(int duration)` 
- `public ItemStack getResultStack()` 
- `public void setResultStack(ItemStack result)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingEntityUseItemHandler {
    @SubscribeEvent
    public static void onLivingEntityUseItem(LivingEntityUseItemEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### Start

### Tick

### Stop

### Finish
