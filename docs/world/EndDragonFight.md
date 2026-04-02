# EndDragonFight

**Package:** `net.minecraft.world.level.dimension.end`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TIME_BETWEEN_PLAYER_SCANS` | `int` |  |
| `ARENA_TICKET_LEVEL` | `int` |  |
| `DRAGON_SPAWN_Y` | `int` |  |

## Methods

### EndDragonFight

```java
public EndDragonFight(ServerLevel p_289759_, long p_289805_, EndDragonFight.Data p_289800_)
```

**Parameters:**

- `p_289759_` (`ServerLevel`)
- `p_289805_` (`long`)
- `p_289800_` (`EndDragonFight.Data`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### EndDragonFight

```java
public EndDragonFight(ServerLevel p_289771_, long p_289793_, EndDragonFight.Data p_289768_, BlockPos p_289794_)
```

**Parameters:**

- `p_289771_` (`ServerLevel`)
- `p_289793_` (`long`)
- `p_289768_` (`EndDragonFight.Data`)
- `p_289794_` (`BlockPos`)

**Returns:** `public`

### skipArenaLoadedCheck

```java
public void skipArenaLoadedCheck()
```

### saveData

```java
public EndDragonFight.Data saveData()
```

**Returns:** `public EndDragonFight.Data`

### tick

```java
public void tick()
```

**Returns:** `public void`

### scanState

```java
private void scanState()
```

**Returns:** `private void`

### findOrCreateDragon

```java
private void findOrCreateDragon()
```

**Returns:** `private void`

### setRespawnStage

```java
protected void setRespawnStage(DragonRespawnAnimation p_64088_)
```

**Parameters:**

- `p_64088_` (`DragonRespawnAnimation`)

**Returns:** `protected void`

### IllegalStateException

```java
throw new IllegalStateException("Dragon respawn isn't in progress, can't skip ahead in the animation.")
```

**Parameters:**

- `progress` (`"Dragon respawn isn't in`)
- `animation."` (`can't skip ahead in the`)

**Returns:** `throw new`

### hasActiveExitPortal

```java
private boolean hasActiveExitPortal()
```

**Returns:** `private boolean`

### isArenaLoaded

```java
private boolean isArenaLoaded()
```

**Returns:** `private boolean`

### updatePlayers

```java
private void updatePlayers()
```

**Returns:** `private void`

### updateCrystalCount

```java
private void updateCrystalCount()
```

**Returns:** `private void`

### setDragonKilled

```java
public void setDragonKilled(EnderDragon p_64086_)
```

**Parameters:**

- `p_64086_` (`EnderDragon`)

**Returns:** `public void`

### removeAllGateways

```java
public void removeAllGateways()
```

### spawnNewGateway

```java
private void spawnNewGateway()
```

**Returns:** `private void`

### spawnNewGateway

```java
private void spawnNewGateway(BlockPos p_64090_)
```

**Parameters:**

- `p_64090_` (`BlockPos`)

**Returns:** `private void`

### spawnExitPortal

```java
private void spawnExitPortal(boolean p_64094_)
```

**Parameters:**

- `p_64094_` (`boolean`)

**Returns:** `private void`

### updateDragon

```java
public void updateDragon(EnderDragon p_64097_)
```

**Parameters:**

- `p_64097_` (`EnderDragon`)

**Returns:** `public void`

### getCrystalsAlive

```java
public int getCrystalsAlive()
```

**Returns:** `public int`

### onCrystalDestroyed

```java
public void onCrystalDestroyed(EndCrystal p_64083_, DamageSource p_64084_)
```

**Parameters:**

- `p_64083_` (`EndCrystal`)
- `p_64084_` (`DamageSource`)

**Returns:** `public void`

### hasPreviouslyKilledDragon

```java
public boolean hasPreviouslyKilledDragon()
```

**Returns:** `public boolean`

### tryRespawn

```java
public void tryRespawn()
```

**Returns:** `public void`

### respawnDragon

```java
private void respawnDragon(List<EndCrystal> p_64092_)
```

**Parameters:**

- `p_64092_` (`List<EndCrystal>`)

**Returns:** `private void`

### resetSpikeCrystals

```java
public void resetSpikeCrystals()
```

**Returns:** `public void`

### addPlayer

```java
public void addPlayer(ServerPlayer player)
```

**Parameters:**

- `player` (`ServerPlayer`)

**Returns:** `public void`

### removePlayer

```java
public void removePlayer(ServerPlayer player)
```

**Parameters:**

- `player` (`ServerPlayer`)

**Returns:** `public void`

### getDragonUUID

```java
public UUID getDragonUUID()
```

**Returns:** `UUID`

### Data

```java
public static record Data(boolean needsStateScanning, boolean dragonKilled, boolean previouslyKilled, boolean isRespawning, Optional<UUID> dragonUUID, Optional<BlockPos> exitPortalLocation, Optional<List<Integer>> gateways)
```

**Parameters:**

- `needsStateScanning` (`boolean`)
- `dragonKilled` (`boolean`)
- `previouslyKilled` (`boolean`)
- `isRespawning` (`boolean`)
- `dragonUUID` (`Optional<UUID>`)
- `exitPortalLocation` (`Optional<BlockPos>`)
- `gateways` (`Optional<List<Integer>>`)

**Returns:** `public static record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Data` | record |  |
