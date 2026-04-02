# LivingGetProjectileEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `LivingEvent`

## Description

This event is fired when a living entity attempts to get a projectile with the
`LivingEntity#getProjectile(ItemStack)` method. The item stack given is usually the item stack of a
`net.minecraft.world.item.ProjectileWeaponItem` and the item stack returned is usually the item stack of a
`net.minecraft.world.entity.projectile.Projectile`.



This event is not `net.neoforged.bus.api.ICancellableEvent`.



This event does not have a result. `net.neoforged.bus.api.Event.HasResult`



This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `projectileWeaponItemStack` | `ItemStack` |  |
| `projectileItemStack` | `ItemStack` |  |

## Accessors

- `public ItemStack getProjectileWeaponItemStack()` 
- `public ItemStack getProjectileItemStack()` 
- `public void setProjectileItemStack(ItemStack projectileItemStack)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingGetProjectileHandler {
    @SubscribeEvent
    public static void onLivingGetProjectile(LivingGetProjectileEvent event) {
        // Handle event
    }
}
```
