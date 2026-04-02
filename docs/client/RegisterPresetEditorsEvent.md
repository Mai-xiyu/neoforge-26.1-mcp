# RegisterPresetEditorsEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description



Event for registering `PresetEditor` screen factories for world presets.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterPresetEditorsHandler {
    @SubscribeEvent
    public static void onRegisterPresetEditors(RegisterPresetEditorsEvent event) {
        // Handle event
    }
}
```
