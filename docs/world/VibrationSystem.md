# VibrationSystem

**Package:** `net.minecraft.world.level.gameevent.vibrations`
**Type:** interface

## Methods

### getVibrationData

```java
VibrationSystem.Data getVibrationData()
```

**Returns:** `VibrationSystem.Data`

### getVibrationUser

```java
VibrationSystem.User getVibrationUser()
```

**Returns:** `VibrationSystem.User`

### getGameEventFrequency

```java
static int getGameEventFrequency(Holder<GameEvent> p_316300_)
```

**Parameters:**

- `p_316300_` (`Holder<GameEvent>`)

**Returns:** `static int`

### getGameEventFrequency

```java
static int getGameEventFrequency(ResourceKey<GameEvent> p_316800_)
```

**Parameters:**

- `p_316800_` (`ResourceKey<GameEvent>`)

**Returns:** `static int`

### getResonanceEventByFrequency

```java
static ResourceKey<GameEvent> getResonanceEventByFrequency(int p_282105_)
```

**Parameters:**

- `p_282105_` (`int`)

**Returns:** `static ResourceKey<GameEvent>`

### getRedstoneStrengthForDistance

```java
static int getRedstoneStrengthForDistance(float p_282483_, int p_282722_)
```

**Parameters:**

- `p_282483_` (`float`)
- `p_282722_` (`int`)

**Returns:** `static int`

### Data

```java
private Data(VibrationInfo p_281967_, VibrationSelector p_283036_, int p_283607_, boolean p_282438_)
```

**Parameters:**

- `p_281967_` (`VibrationInfo`)
- `p_283036_` (`VibrationSelector`)
- `p_283607_` (`int`)
- `p_282438_` (`boolean`)

**Returns:** `private`

### Data

```java
public Data()
```

**Returns:** `public`

### getSelectionStrategy

```java
public VibrationSelector getSelectionStrategy()
```

**Returns:** `public VibrationSelector`

### getCurrentVibration

```java
public VibrationInfo getCurrentVibration()
```

**Returns:** `VibrationInfo`

### setCurrentVibration

```java
public void setCurrentVibration(VibrationInfo p_282049_)
```

**Parameters:**

- `p_282049_` (`VibrationInfo`)

**Returns:** `public void`

### getTravelTimeInTicks

```java
public int getTravelTimeInTicks()
```

**Returns:** `public int`

### setTravelTimeInTicks

```java
public void setTravelTimeInTicks(int p_282973_)
```

**Parameters:**

- `p_282973_` (`int`)

**Returns:** `public void`

### decrementTravelTime

```java
public void decrementTravelTime()
```

**Returns:** `public void`

### shouldReloadVibrationParticle

```java
public boolean shouldReloadVibrationParticle()
```

**Returns:** `public boolean`

### setReloadVibrationParticle

```java
public void setReloadVibrationParticle(boolean p_281702_)
```

**Parameters:**

- `p_281702_` (`boolean`)

**Returns:** `public void`

### Listener

```java
public Listener(VibrationSystem p_281843_)
```

**Parameters:**

- `p_281843_` (`VibrationSystem`)

**Returns:** `public`

### getListenerSource

```java
public PositionSource getListenerSource()
```

**Returns:** `PositionSource`

### getListenerRadius

```java
public int getListenerRadius()
```

**Returns:** `int`

### handleGameEvent

```java
public boolean handleGameEvent(ServerLevel p_282254_, Holder<GameEvent> p_316513_, GameEvent.Context p_283664_, Vec3 p_282426_)
```

**Parameters:**

- `p_282254_` (`ServerLevel`)
- `p_316513_` (`Holder<GameEvent>`)
- `p_283664_` (`GameEvent.Context`)
- `p_282426_` (`Vec3`)

**Returns:** `boolean`

### forceScheduleVibration

```java
public void forceScheduleVibration(ServerLevel p_282808_, Holder<GameEvent> p_316321_, GameEvent.Context p_281652_, Vec3 p_281530_)
```

**Parameters:**

- `p_282808_` (`ServerLevel`)
- `p_316321_` (`Holder<GameEvent>`)
- `p_281652_` (`GameEvent.Context`)
- `p_281530_` (`Vec3`)

**Returns:** `public void`

### scheduleVibration

```java
private void scheduleVibration(ServerLevel p_282037_, VibrationSystem.Data p_283229_, Holder<GameEvent> p_316858_, GameEvent.Context p_283344_, Vec3 p_281758_, Vec3 p_282990_)
```

**Parameters:**

- `p_282037_` (`ServerLevel`)
- `p_283229_` (`VibrationSystem.Data`)
- `p_316858_` (`Holder<GameEvent>`)
- `p_283344_` (`GameEvent.Context`)
- `p_281758_` (`Vec3`)
- `p_282990_` (`Vec3`)

**Returns:** `private void`

### distanceBetweenInBlocks

```java
public static float distanceBetweenInBlocks(BlockPos p_282413_, BlockPos p_281960_)
```

**Parameters:**

- `p_282413_` (`BlockPos`)
- `p_281960_` (`BlockPos`)

**Returns:** `public static float`

### isOccluded

```java
private static boolean isOccluded(Level p_283225_, Vec3 p_283328_, Vec3 p_283163_)
```

**Parameters:**

- `p_283225_` (`Level`)
- `p_283328_` (`Vec3`)
- `p_283163_` (`Vec3`)

**Returns:** `private static boolean`

### tick

```java
static void tick(Level p_281704_, VibrationSystem.Data p_282633_, VibrationSystem.User p_281564_)
```

**Parameters:**

- `p_281704_` (`Level`)
- `p_282633_` (`VibrationSystem.Data`)
- `p_281564_` (`VibrationSystem.User`)

**Returns:** `static void`

### trySelectAndScheduleVibration

```java
 trySelectAndScheduleVibration()
```

**Returns:** ``

### tryReloadVibrationParticle

```java
 tryReloadVibrationParticle()
```

**Returns:** ``

### trySelectAndScheduleVibration

```java
private static void trySelectAndScheduleVibration(ServerLevel p_282775_, VibrationSystem.Data p_282792_, VibrationSystem.User p_281845_)
```

**Parameters:**

- `p_282775_` (`ServerLevel`)
- `p_282792_` (`VibrationSystem.Data`)
- `p_281845_` (`VibrationSystem.User`)

**Returns:** `private static void`

### tryReloadVibrationParticle

```java
private static void tryReloadVibrationParticle(ServerLevel p_282010_, VibrationSystem.Data p_282354_, VibrationSystem.User p_282958_)
```

**Parameters:**

- `p_282010_` (`ServerLevel`)
- `p_282354_` (`VibrationSystem.Data`)
- `p_282958_` (`VibrationSystem.User`)

**Returns:** `private static void`

### receiveVibration

```java
private static boolean receiveVibration(ServerLevel p_282967_, VibrationSystem.Data p_283447_, VibrationSystem.User p_282301_, VibrationInfo p_281498_)
```

**Parameters:**

- `p_282967_` (`ServerLevel`)
- `p_283447_` (`VibrationSystem.Data`)
- `p_282301_` (`VibrationSystem.User`)
- `p_281498_` (`VibrationInfo`)

**Returns:** `private static boolean`

### areAdjacentChunksTicking

```java
private static boolean areAdjacentChunksTicking(Level p_282735_, BlockPos p_281722_)
```

**Parameters:**

- `p_282735_` (`Level`)
- `p_281722_` (`BlockPos`)

**Returns:** `private static boolean`

### getListenerRadius

```java
int getListenerRadius()
```

**Returns:** `int`

### getPositionSource

```java
PositionSource getPositionSource()
```

**Returns:** `PositionSource`

### canReceiveVibration

```java
boolean canReceiveVibration(ServerLevel p_282960_, BlockPos p_282488_, Holder<GameEvent> p_316319_, GameEvent.Context p_283577_)
```

**Parameters:**

- `p_282960_` (`ServerLevel`)
- `p_282488_` (`BlockPos`)
- `p_316319_` (`Holder<GameEvent>`)
- `p_283577_` (`GameEvent.Context`)

**Returns:** `boolean`

### onReceiveVibration

```java
void onReceiveVibration(ServerLevel p_282148_, BlockPos p_282090_, Holder<GameEvent> p_316773_, Entity p_281578_, Entity p_281308_, float p_281707_)
```

**Parameters:**

- `p_282148_` (`ServerLevel`)
- `p_282090_` (`BlockPos`)
- `p_316773_` (`Holder<GameEvent>`)
- `p_281578_` (`Entity`)
- `p_281308_` (`Entity`)
- `p_281707_` (`float`)

### getListenableEvents

```java
default TagKey<GameEvent> getListenableEvents()
```

**Returns:** `default TagKey<GameEvent>`

### canTriggerAvoidVibration

```java
default boolean canTriggerAvoidVibration()
```

**Returns:** `default boolean`

### requiresAdjacentChunksToBeTicking

```java
default boolean requiresAdjacentChunksToBeTicking()
```

**Returns:** `default boolean`

### calculateTravelTimeInTicks

```java
default int calculateTravelTimeInTicks(float p_281658_)
```

**Parameters:**

- `p_281658_` (`float`)

**Returns:** `default int`

### isValidVibration

```java
default boolean isValidVibration(Holder<GameEvent> p_316804_, GameEvent.Context p_283373_)
```

**Parameters:**

- `p_316804_` (`Holder<GameEvent>`)
- `p_283373_` (`GameEvent.Context`)

**Returns:** `default boolean`

### onDataChanged

```java
default void onDataChanged()
```

**Returns:** `default void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Data` | class |  |
| `Listener` | class |  |
| `Ticker` | interface |  |
| `User` | interface |  |
