# ConfigureMainRenderTargetEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired when configuring the MainTarget main render target during startup.



This event is not ICancellableEvent cancellable.



This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `stencilEnabled` | `boolean` |  |

## Accessors

- `public boolean isStencilEnabled()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ConfigureMainRenderTargetHandler {
    @SubscribeEvent
    public static void onConfigureMainRenderTarget(ConfigureMainRenderTargetEvent event) {
        // Handle event
    }
}
```
