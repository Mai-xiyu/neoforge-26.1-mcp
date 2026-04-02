# LayerLightEventListener

**Package:** `net.minecraft.world.level.lighting`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `LightEventListener`

## Accessors

- `DataLayer getDataLayerData(SectionPos p_75709_)` 
- `int getLightValue(BlockPos p_75710_)` 
- `public DataLayer getDataLayerData(SectionPos p_75718_)` 
- `public int getLightValue(BlockPos p_75723_)` 
- `public void setLightEnabled(ChunkPos p_164431_, boolean p_164432_)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LayerLightListenerHandler {
    @SubscribeEvent
    public static void onLayerLightListener(LayerLightEventListener event) {
        // Handle event
    }
}
```

## Sub-Events

### DummyLightLayerEventListener
