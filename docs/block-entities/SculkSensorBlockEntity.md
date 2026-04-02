# SculkSensorBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`
**Implements:** `GameEventListener.Provider<VibrationSystem.Listener>`, `VibrationSystem`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LISTENER_RANGE` | `int` |  |
| `blockPos` | `BlockPos` |  |

## Methods

### SculkSensorBlockEntity

```java
protected SculkSensorBlockEntity(BlockEntityType<?> p_277405_, BlockPos p_277502_, BlockState p_277699_)
```

**Parameters:**

- `p_277405_` (`BlockEntityType<?>`)
- `p_277502_` (`BlockPos`)
- `p_277699_` (`BlockState`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### SculkSensorBlockEntity

```java
public SculkSensorBlockEntity(BlockPos p_155635_, BlockState p_155636_)
```

**Parameters:**

- `p_155635_` (`BlockPos`)
- `p_155636_` (`BlockState`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### createVibrationUser

```java
public VibrationSystem.User createVibrationUser()
```

**Returns:** `public VibrationSystem.User`

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_338719_, HolderLookup.Provider p_338792_)
```

**Parameters:**

- `p_338719_` (`CompoundTag`)
- `p_338792_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187511_, HolderLookup.Provider p_323787_)
```

**Parameters:**

- `p_187511_` (`CompoundTag`)
- `p_323787_` (`HolderLookup.Provider`)

### getVibrationData

```java
public VibrationSystem.Data getVibrationData()
```

**Returns:** `VibrationSystem.Data`

### getVibrationUser

```java
public VibrationSystem.User getVibrationUser()
```

**Returns:** `VibrationSystem.User`

### getLastVibrationFrequency

```java
public int getLastVibrationFrequency()
```

**Returns:** `public int`

### setLastVibrationFrequency

```java
public void setLastVibrationFrequency(int p_222801_)
```

**Parameters:**

- `p_222801_` (`int`)

**Returns:** `public void`

### getListener

```java
public VibrationSystem.Listener getListener()
```

**Returns:** `public VibrationSystem.Listener`

### VibrationUser

```java
public VibrationUser(BlockPos p_283482_)
```

**Parameters:**

- `p_283482_` (`BlockPos`)

**Returns:** `public`

### getListenerRadius

```java
public int getListenerRadius()
```

**Returns:** `int`

### getPositionSource

```java
public PositionSource getPositionSource()
```

**Returns:** `PositionSource`

### canTriggerAvoidVibration

```java
public boolean canTriggerAvoidVibration()
```

**Returns:** `boolean`

### canReceiveVibration

```java
public boolean canReceiveVibration(ServerLevel p_282127_, BlockPos p_283268_, Holder<GameEvent> p_316115_, GameEvent.Context p_282856_)
```

**Parameters:**

- `p_282127_` (`ServerLevel`)
- `p_283268_` (`BlockPos`)
- `p_316115_` (`Holder<GameEvent>`)
- `p_282856_` (`GameEvent.Context`)

**Returns:** `boolean`

### onReceiveVibration

```java
public void onReceiveVibration(ServerLevel p_282851_, BlockPos p_281608_, Holder<GameEvent> p_316423_, Entity p_282123_, Entity p_283090_, float p_283130_)
```

**Parameters:**

- `p_282851_` (`ServerLevel`)
- `p_281608_` (`BlockPos`)
- `p_316423_` (`Holder<GameEvent>`)
- `p_282123_` (`Entity`)
- `p_283090_` (`Entity`)
- `p_283130_` (`float`)

### onDataChanged

```java
public void onDataChanged()
```

### requiresAdjacentChunksToBeTicking

```java
public boolean requiresAdjacentChunksToBeTicking()
```

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `VibrationUser` | class |  |
