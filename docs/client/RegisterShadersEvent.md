# RegisterShadersEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired to allow mods to register custom ShaderInstance shaders.
This event is fired after the default Minecraft shaders have been registered.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `resourceProvider` | `ResourceProvider` |  |

## Accessors

- `public ResourceProvider getResourceProvider()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterShadersHandler {
    @SubscribeEvent
    public static void onRegisterShaders(RegisterShadersEvent event) {
        // Handle event
    }
}
```
