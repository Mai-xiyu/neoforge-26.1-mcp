# RegisterCapabilitiesEvent

**Package:** `net.neoforged.neoforge.capabilities`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired to register capability providers at an appropriate time.

## Accessors

- `public boolean isBlockRegistered(BlockCapability<?, ?> capability, Block block)` 
- `public boolean isEntityRegistered(EntityCapability<?, ?> capability, EntityType<?> entityType)` 
- `public boolean isItemRegistered(ItemCapability<?, ?> capability, Item item)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterCapabilitiesHandler {
    @SubscribeEvent
    public static void onRegisterCapabilities(RegisterCapabilitiesEvent event) {
        // Handle event
    }
}
```
