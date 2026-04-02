# EntityTeleportEvent

**Package:** `net.neoforged.neoforge.event.entity`
**Bus:** 🎮 GAME Event Bus (NeoForge.EVENT_BUS)
**Cancelable:** ✅ Yes
**Extends:** `EntityEvent`

## Description

EntityTeleportEvent is fired when an event involving any teleportation of an Entity occurs.
If a method utilizes this `Event` as its parameter, the method will
receive every child event of this class.

`#getTarget()` contains the target destination.
`#getPrev()` contains the entity's current position.

All children of this event are fired on the `NeoForge#EVENT_BUS`.

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `targetX` | `double` |  |
| `targetY` | `double` |  |
| `targetZ` | `double` |  |
| `target` | `public Vec3` |  |
| `prevX` | `public double` |  |
| `prevY` | `public double` |  |
| `prevZ` | `public double` |  |
| `prev` | `public Vec3` |  |
| `entityLiving` | `public LivingEntity` |  |
| `pearlEntity` | `public ThrownEnderpearl` |  |
| `player` | `public ServerPlayer` |  |
| `hitResult` | `HitResult` |  |
| `attackDamage` | `public float` |  |

## Accessors

- `public double getTargetX()` 
- `public void setTargetX(double targetX)` 
- `public double getTargetY()` 
- `public void setTargetY(double targetY)` 
- `public double getTargetZ()` 
- `public void setTargetZ(double targetZ)` 
- `public Vec3 getTarget()` 
- `public double getPrevX()` 
- `public double getPrevY()` 
- `public double getPrevZ()` 
- `public Vec3 getPrev()` 
- `public LivingEntity getEntityLiving()` 
- `public ThrownEnderpearl getPearlEntity()` 
- `public ServerPlayer getPlayer()` 
- `public HitResult getHitResult()` 
- `public float getAttackDamage()` 
- `public void setAttackDamage(float attackDamage)` 
- `public LivingEntity getEntityLiving()` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class EntityTeleportHandler {
    @SubscribeEvent
    public static void onEntityTeleport(EntityTeleportEvent event) {
        // Handle event
    }
}
```

## Sub-Events

### TeleportCommand

### SpreadPlayersCommand

### EnderEntity

### EnderPearl

### ChorusFruit
