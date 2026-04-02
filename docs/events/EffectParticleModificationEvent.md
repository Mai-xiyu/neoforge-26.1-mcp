# EffectParticleModificationEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ❌ No
**Extends:** `LivingEvent`

## Description

Fires for each effect to allow modification or replacement of the particle options (you can set it to null to reset it to default).

This event is not `ICancellableEvent`.

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `effect` | `public MobEffectInstance` |  |
| `originalParticleOptions` | `public ParticleOptions` |  |
| `particleOptions` | `public ParticleOptions` |  |
| `visible` | `public boolean` |  |

## Accessors

- `public MobEffectInstance getEffect()` 
- `public ParticleOptions getOriginalParticleOptions()` 
- `public ParticleOptions getParticleOptions()` 
- `public void setParticleOptions(ParticleOptions options)` 
- `public boolean isVisible()` 
- `public void setVisible(boolean visible)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class EffectParticleModificationHandler {
    @SubscribeEvent
    public static void onEffectParticleModification(EffectParticleModificationEvent event) {
        // Handle event
    }
}
```
