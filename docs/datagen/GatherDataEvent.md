# GatherDataEvent

**Package:** `net.neoforged.neoforge.data.event`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `Event`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `modContainer` | `public ModContainer` |  |
| `inputs` | `public Collection<Path>` |  |
| `mods` | `Set<String>` |  |
| `generator` | `public DataGenerator` |  |
| `existingFileHelper` | `public ExistingFileHelper` |  |
| `lookupProvider` | `public CompletableFuture<HolderLookup.Provider>` |  |
| `flat` | `public boolean` |  |

## Accessors

- `public ModContainer getModContainer()` 
- `public ResourceManager getResourceManager(PackType packType)` 
- `public Collection<Path> getInputs()` 
- `public Set<String> getMods()` 
- `public DataGenerator getGenerator()` 
- `public ExistingFileHelper getExistingFileHelper()` 
- `public CompletableFuture<HolderLookup.Provider> getLookupProvider()` 
- `public Collection<Path> getInputs()` 
- `public Set<String> getMods()` 
- `public boolean isFlat()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class GatherDataHandler {
    @SubscribeEvent
    public static void onGatherData(GatherDataEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### DataGeneratorConfig

### DataProviderFromOutput

### DataProviderFromOutputLookup

### GatherDataEventGenerator

### ItemTagsProvider
