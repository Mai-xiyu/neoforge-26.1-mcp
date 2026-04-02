# SculkCatalystBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`
**Implements:** `GameEventListener.Provider<SculkCatalystBlockEntity.CatalystListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PULSE_TICKS` | `int` |  |

## Methods

### SculkCatalystBlockEntity

```java
public SculkCatalystBlockEntity(BlockPos p_222774_, BlockState p_222775_)
```

**Parameters:**

- `p_222774_` (`BlockPos`)
- `p_222775_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### serverTick

```java
public static void serverTick(Level p_222780_, BlockPos p_222781_, BlockState p_222782_, SculkCatalystBlockEntity p_222783_)
```

**Parameters:**

- `p_222780_` (`Level`)
- `p_222781_` (`BlockPos`)
- `p_222782_` (`BlockState`)
- `p_222783_` (`SculkCatalystBlockEntity`)

**Returns:** `public static void`

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_338264_, HolderLookup.Provider p_338447_)
```

**Parameters:**

- `p_338264_` (`CompoundTag`)
- `p_338447_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_222789_, HolderLookup.Provider p_324018_)
```

**Parameters:**

- `p_222789_` (`CompoundTag`)
- `p_324018_` (`HolderLookup.Provider`)

### getListener

```java
public SculkCatalystBlockEntity.CatalystListener getListener()
```

**Returns:** `public SculkCatalystBlockEntity.CatalystListener`

### CatalystListener

```java
public CatalystListener(BlockState p_283224_, PositionSource p_283095_)
```

**Parameters:**

- `p_283224_` (`BlockState`)
- `p_283095_` (`PositionSource`)

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

### getDeliveryMode

```java
public GameEventListener.DeliveryMode getDeliveryMode()
```

**Returns:** `GameEventListener.DeliveryMode`

### handleGameEvent

```java
public boolean handleGameEvent(ServerLevel p_283470_, Holder<GameEvent> p_316661_, GameEvent.Context p_283014_, Vec3 p_282350_)
```

**Parameters:**

- `p_283470_` (`ServerLevel`)
- `p_316661_` (`Holder<GameEvent>`)
- `p_283014_` (`GameEvent.Context`)
- `p_282350_` (`Vec3`)

**Returns:** `boolean`

### getSculkSpreader

```java
public SculkSpreader getSculkSpreader()
```

**Returns:** `SculkSpreader`

### bloom

```java
private void bloom(ServerLevel p_281501_, BlockPos p_281448_, BlockState p_281966_, RandomSource p_283606_)
```

**Parameters:**

- `p_281501_` (`ServerLevel`)
- `p_281448_` (`BlockPos`)
- `p_281966_` (`BlockState`)
- `p_283606_` (`RandomSource`)

**Returns:** `private void`

### tryAwardItSpreadsAdvancement

```java
private void tryAwardItSpreadsAdvancement(Level p_281279_, LivingEntity p_281378_)
```

**Parameters:**

- `p_281279_` (`Level`)
- `p_281378_` (`LivingEntity`)

**Returns:** `private void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CatalystListener` | class |  |
