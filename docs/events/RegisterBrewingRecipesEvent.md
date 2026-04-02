# RegisterBrewingRecipesEvent

**Package:** `net.neoforged.neoforge.event.brewing`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Event to register new brewing recipes.


Fired on both client and server side, on the main event bus.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `builder` | `public PotionBrewing.Builder` |  |
| `registryAccess` | `public RegistryAccess` |  |

## Accessors

- `public PotionBrewing.Builder getBuilder()` 
- `public RegistryAccess getRegistryAccess()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterBrewingRecipesHandler {
    @SubscribeEvent
    public static void onRegisterBrewingRecipes(RegisterBrewingRecipesEvent event) {
        // Handle event
    }
}
```
