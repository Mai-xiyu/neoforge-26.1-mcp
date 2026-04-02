# ArmorHurtEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LivingEvent`

## Description

Fired on both sides when a `LivingEntity`'s armor is dealt damage in
`LivingEntity#doHurtEquipment(DamageSource, float, EquipmentSlot...) doHurtEquipment`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `armorItemStack` | `ItemStack` |  |
| `originalDamage` | `float` |  |
| `newDamage` | `float` |  |
| `armorMap` | `Map<EquipmentSlot, ArmorEntry>` |  |

## Accessors

- `public ItemStack getArmorItemStack(EquipmentSlot slot)` 
- `public Float getOriginalDamage(EquipmentSlot slot)` 
- `public Float getNewDamage(EquipmentSlot slot)` 
- `public void setNewDamage(EquipmentSlot slot, float damage)` 
- `public Map<EquipmentSlot, ArmorEntry> getArmorMap()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class ArmorHurtHandler {
    @SubscribeEvent
    public static void onArmorHurt(ArmorHurtEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### ArmorEntry
