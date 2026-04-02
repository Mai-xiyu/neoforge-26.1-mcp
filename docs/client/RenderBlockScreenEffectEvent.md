# RenderBlockScreenEffectEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ✅ Yes
**Extends:** `Event`

## Description

Fired before a block texture will be overlaid on the player's view.


This event is ICancellableEvent cancellable, and does not HasResult have a result.
If this event is cancelled, then the overlay will not be rendered.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `player` | `Player` |  |
| `poseStack` | `PoseStack` |  |
| `overlayType` | `OverlayType` |  |
| `blockState` | `BlockState` |  |
| `blockPos` | `BlockPos` |  |

## Accessors

- `public Player getPlayer()` 
- `public PoseStack getPoseStack()` 
- `public OverlayType getOverlayType()` 
- `public BlockState getBlockState()` 
- `public BlockPos getBlockPos()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RenderBlockScreenEffectHandler {
    @SubscribeEvent
    public static void onRenderBlockScreenEffect(RenderBlockScreenEffectEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### OverlayType
