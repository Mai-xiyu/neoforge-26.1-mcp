# RegisterGameTestsEvent

**Package:** `net.neoforged.neoforge.event`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Game tests are registered on client or server startup.
It is only run once for a given instance of the game if `GameTestHooks#isGametestEnabled` returns true.
This is the preferred way to register your game tests.



Fired on the Mod bus, see `IModBusEvent`.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterGameTestsHandler {
    @SubscribeEvent
    public static void onRegisterGameTests(RegisterGameTestsEvent event) {
        // Handle event
    }
}
```
