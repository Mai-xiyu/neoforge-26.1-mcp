# RegisterRecipeBookSearchCategoriesEvent

**Package:** `net.neoforged.neoforge.client.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

Event to register `ExtendedRecipeBookCategory` instances for search.
Modded equivalent of vanilla's `SearchRecipeBookCategory`.


This event is fired on the mod-specific event bus, only on the LogicalSide#CLIENT logical client.

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class RegisterRecipeBookSearchCategoriesHandler {
    @SubscribeEvent
    public static void onRegisterRecipeBookSearchCategories(RegisterRecipeBookSearchCategoriesEvent event) {
        // Handle event
    }
}
```
