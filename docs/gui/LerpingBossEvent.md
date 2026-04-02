# LerpingBossEvent

**Package:** `net.minecraft.client.gui.components`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `BossEvent`
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `targetPercent` | `float` |  |
| `setTime` | `long` |  |
| `progress` | `float` |  |

## Accessors

- `public void setProgress(float p_169030_)` 
- `public float getProgress()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LerpingBossHandler {
    @SubscribeEvent
    public static void onLerpingBoss(LerpingBossEvent event) {
        // Handle event
    }
}
```
