# RegisterDimensionTransitionScreenEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description



Event for registering screen effects when transitioning across dimensions.
Note that there is a priority order when it comes to what screens are displayed: 
- Using registerConditionalEffect has priority over the usual transition effects, and will only fire when travelling to the specified dimension coming from a certain dimension. 
- If a dimension has a screen that displays when entering it, that will have priority over a dimension that has one when you leave it. 


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterDimensionTransitionScreenHandler {
    @SubscribeEvent
    public static void onRegisterDimensionTransitionScreen(RegisterDimensionTransitionScreenEvent event) {
        // Handle event
    }
}
```
