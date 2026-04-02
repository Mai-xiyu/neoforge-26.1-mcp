# RecipesReceivedEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

This event is fired on the client when it has finished receiving recipe data
from the server. This will be the case shortly after first entering the world,
and whenever the server decides to reload its datapacks. Note that recipe data
will only be sent for recipe types requested using `net.neoforged.neoforge.event.OnDatapackSyncEvent#sendRecipes`
on the server-side.


You should clean up any data you kept from this event when the player disconnects,
for example when `ClientPlayerNetworkEvent.LoggingOut` is fired.


These events are fired on the NeoForge#EVENT_BUS main event bus,
only on the LogicalSide#CLIENT logical client.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `recipeTypes` | `Set<RecipeType<?>>` |  |
| `recipeMap` | `RecipeMap` |  |

## Accessors

- `public Set<RecipeType<?>> getRecipeTypes()` 
- `public RecipeMap getRecipeMap()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RecipesReceivedHandler {
    @SubscribeEvent
    public static void onRecipesReceived(RecipesReceivedEvent event) {
        // Handle event
    }
}
```
