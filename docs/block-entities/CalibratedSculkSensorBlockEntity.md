# CalibratedSculkSensorBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `SculkSensorBlockEntity`

## Methods

### CalibratedSculkSensorBlockEntity

```java
public CalibratedSculkSensorBlockEntity(BlockPos p_277459_, BlockState p_278100_)
```

**Parameters:**

- `p_277459_` (`BlockPos`)
- `p_278100_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createVibrationUser

```java
public VibrationSystem.User createVibrationUser()
```

**Returns:** `VibrationSystem.User`

### VibrationUser

```java
public VibrationUser(BlockPos p_281602_)
```

**Parameters:**

- `p_281602_` (`BlockPos`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getListenerRadius

```java
public int getListenerRadius()
```

**Returns:** `int`

### canReceiveVibration

```java
public boolean canReceiveVibration(ServerLevel p_282061_, BlockPos p_282550_, Holder<GameEvent> p_316545_, GameEvent.Context p_281456_)
```

**Parameters:**

- `p_282061_` (`ServerLevel`)
- `p_282550_` (`BlockPos`)
- `p_316545_` (`Holder<GameEvent>`)
- `p_281456_` (`GameEvent.Context`)

**Returns:** `boolean`

### getBackSignal

```java
private int getBackSignal(Level p_282204_, BlockPos p_282397_, BlockState p_282240_)
```

**Parameters:**

- `p_282204_` (`Level`)
- `p_282397_` (`BlockPos`)
- `p_282240_` (`BlockState`)

**Returns:** `private int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `VibrationUser` | class |  |
