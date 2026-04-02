# CustomBossEvent

**Package:** `net.minecraft.server.bossevents`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `ServerBossEvent`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `textId` | `public ResourceLocation` |  |
| `value` | `public int` |  |
| `max` | `public int` |  |
| `displayName` | `public final Component` |  |

## Accessors

- `public ResourceLocation getTextId()` 
- `public int getValue()` 
- `public int getMax()` 
- `public void setValue(int p_136265_)` 
- `public void setMax(int p_136279_)` 
- `public final Component getDisplayName()` 
- `public boolean setPlayers(Collection<ServerPlayer> p_136269_)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class CustomBossHandler {
    @SubscribeEvent
    public static void onCustomBoss(CustomBossEvent event) {
        // Handle event
    }
}
```
