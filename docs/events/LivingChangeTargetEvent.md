# LivingChangeTargetEvent

**Package:** `net.neoforged.neoforge.event.entity.living`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `LivingEvent`

## Description

This event allows you to change the target an entity has. 
This event is fired before `LivingSetAttackTargetEvent`. 

This event is fired via the `CommonHooks#onLivingChangeTarget(LivingEntity, LivingEntity, ILivingTargetType)`

`#getOriginalAboutToBeSetTarget()` returns the target that should originally be set.
The return value cannot be affected by calling `#setNewAboutToBeSetTarget(LivingEntity)`.
`#getNewAboutToBeSetTarget()` returns the new target that this entity will have.
The return value can be affected by calling `#setNewAboutToBeSetTarget(LivingEntity)`.
`#getTargetType()` returns the target type that caused the change of targets.

This event is `net.neoforged.bus.api.ICancellableEvent`.

If you cancel this event, the target will not be changed and it will stay the same.
Cancelling this event will prevent `LivingSetAttackTargetEvent` from being posted.

This event does not have a result. `Event.HasResult`

This event is fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `newAboutToBeSetTarget` | `LivingEntity` |  |
| `targetType` | `ILivingTargetType` |  |
| `originalAboutToBeSetTarget` | `LivingEntity` |  |

## Accessors

- `public LivingEntity getNewAboutToBeSetTarget()` 
- `public void setNewAboutToBeSetTarget(LivingEntity newAboutToBeSetTarget)` 
- `public ILivingTargetType getTargetType()` 
- `public LivingEntity getOriginalAboutToBeSetTarget()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class LivingChangeTargetHandler {
    @SubscribeEvent
    public static void onLivingChangeTarget(LivingChangeTargetEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### ILivingTargetType

### LivingTargetType
