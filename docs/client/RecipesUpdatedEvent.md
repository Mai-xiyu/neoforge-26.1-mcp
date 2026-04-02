# RecipesUpdatedEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Fired when the `RecipeManager` has received and synced the recipes from the server to the client.


This event is not ICancellableEvent cancellable, and does not HasResult have a result.


This event is fired on the NeoForge#EVENT_BUS main Forge event bus,
only on the LogicalSide#CLIENT logical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `recipeManager` | `RecipeManager` |  |

## Accessors

- `public RecipeManager getRecipeManager()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RecipesUpdatedHandler {
    @SubscribeEvent
    public static void onRecipesUpdated(RecipesUpdatedEvent event) {
        // Handle event
    }
}
```
