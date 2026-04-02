# GetEnchantmentLevelEvent

**Package:** `net.neoforged.neoforge.event.enchanting`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `Event`

## Description

This event is fired whenever the enchantment level of a particular item is requested for gameplay purposes.
It is called from `IItemStackExtension#getEnchantmentLevel(Enchantment)` and `IItemStackExtension#getAllEnchantments()`.



It is not fired for interactions with NBT, which means these changes will not reflect in the item tooltip.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `stack` | `ItemStack` |  |
| `enchantments` | `ItemEnchantments.Mutable` |  |
| `targetEnchant` | `Holder<Enchantment>` |  |
| `lookup` | `RegistryLookup<Enchantment>` |  |

## Accessors

- `public ItemStack getStack()` 
- `public ItemEnchantments.Mutable getEnchantments()` 
- `public Holder<Enchantment> getTargetEnchant()` 
- `public boolean isTargetting(Holder<Enchantment> ench)` 
- `public boolean isTargetting(ResourceKey<Enchantment> ench)` 
- `public Optional<Holder.Reference<Enchantment>> getHolder(ResourceKey<Enchantment> key)` 
- `public RegistryLookup<Enchantment> getLookup()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class GetEnchantmentLevelHandler {
    @SubscribeEvent
    public static void onGetEnchantmentLevel(GetEnchantmentLevelEvent event) {
        // Handle event
    }
}
```
