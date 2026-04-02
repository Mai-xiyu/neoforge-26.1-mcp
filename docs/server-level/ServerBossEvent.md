# ServerBossEvent

**Package:** `net.minecraft.server.level`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `BossEvent`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `visible` | `public boolean` |  |
| `players` | `public Collection<ServerPlayer>` |  |

## Accessors

- `public void setProgress(float p_143223_)` 
- `public void setColor(BossEvent.BossBarColor p_8307_)` 
- `public void setOverlay(BossEvent.BossBarOverlay p_8309_)` 
- `public BossEvent setDarkenScreen(boolean p_8315_)` 
- `public BossEvent setPlayBossMusic(boolean p_8318_)` 
- `public BossEvent setCreateWorldFog(boolean p_8320_)` 
- `public void setName(Component p_8311_)` 
- `public boolean isVisible()` 
- `public void setVisible(boolean p_8322_)` 
- `public Collection<ServerPlayer> getPlayers()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ServerBossHandler {
    @SubscribeEvent
    public static void onServerBoss(ServerBossEvent event) {
        // Handle event
    }
}
```
