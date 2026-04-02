# LoggedChatMessage

**Package:** `net.minecraft.client.multiplayer.chat`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `LoggedChatEvent`
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `CODEC` | `MapCodec<LoggedChatMessage.Player>` |  |
| `CODEC` | `MapCodec<LoggedChatMessage.System>` |  |
| `timeComponent` | `private Component` |  |

## Accessors

- `boolean canReport(UUID p_242315_)` 
- `private Component getTimeComponent()` 
- `public boolean canReport(UUID p_242210_)` 
- `public boolean canReport(UUID p_242173_)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LoggedChatMessageHandler {
    @SubscribeEvent
    public static void onLoggedChatMessage(LoggedChatMessage event) {
        // Handle event
    }
}
```

## Sub-Events

### Player

### System
