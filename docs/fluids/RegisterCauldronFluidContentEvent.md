# RegisterCauldronFluidContentEvent

**Package:** `net.neoforged.neoforge.fluids`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Event to register `CauldronFluidContent` for modded cauldrons.


Registering cauldrons is done by calling `CauldronFluidContent#register`
and allows all cauldrons registered in this way to interoperate with each other
when accessed via the `Capabilities.FluidHandler#BLOCK` capability.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterCauldronFluidContentHandler {
    @SubscribeEvent
    public static void onRegisterCauldronFluidContent(RegisterCauldronFluidContentEvent event) {
        // Handle event
    }
}
```
