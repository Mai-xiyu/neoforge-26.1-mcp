# RegisterStructureConversionsEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired for registering structure conversions for pre-1.18.2 worlds. This is used by `StructuresBecomeConfiguredFix`
for converting old structure IDs in pre-1.18.2 worlds to their new equivalents, which can be differentiated per biome.


By default, structures whose old ID has a namespace which is not equal to {@value ResourceLocation#DEFAULT_NAMESPACE}
will be assumed to belong to a modded structure and will be used as the new ID. Mods may choose to register structure
conversions for their structures, if they wish to override this default behavior.


This event will only fire if `StructuresBecomeConfiguredFix` is used, as a result of converting a
pre-1.18.2 world to the current version.


This event is not ICancellableEvent cancelable, and does not HasResult have a result.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the net.neoforged.fml.LogicalSide#SERVER logical server. 
@see StructuresBecomeConfiguredFix
@see #register(String, StructuresBecomeConfiguredFix.Conversion)

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterStructureConversionsHandler {
    @SubscribeEvent
    public static void onRegisterStructureConversions(RegisterStructureConversionsEvent event) {
        // Handle event
    }
}
```
