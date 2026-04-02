# SculkBehaviour

**Package:** `net.minecraft.world.level.block`
**Type:** interface

## Methods

### attemptSpreadVein

```java
public boolean attemptSpreadVein(LevelAccessor p_222048_, BlockPos p_222049_, BlockState p_222050_, Collection<Direction> p_222051_, boolean p_222052_)
```

**Parameters:**

- `p_222048_` (`LevelAccessor`)
- `p_222049_` (`BlockPos`)
- `p_222050_` (`BlockState`)
- `p_222051_` (`Collection<Direction>`)
- `p_222052_` (`boolean`)

**Returns:** `boolean`

### attemptUseCharge

```java
public int attemptUseCharge(SculkSpreader.ChargeCursor p_222054_, LevelAccessor p_222055_, BlockPos p_222056_, RandomSource p_222057_, SculkSpreader p_222058_, boolean p_222059_)
```

**Parameters:**

- `p_222054_` (`SculkSpreader.ChargeCursor`)
- `p_222055_` (`LevelAccessor`)
- `p_222056_` (`BlockPos`)
- `p_222057_` (`RandomSource`)
- `p_222058_` (`SculkSpreader`)
- `p_222059_` (`boolean`)

**Returns:** `int`

### updateDecayDelay

```java
public int updateDecayDelay(int p_222061_)
```

**Parameters:**

- `p_222061_` (`int`)

**Returns:** `int`

### getSculkSpreadDelay

```java
default byte getSculkSpreadDelay()
```

**Returns:** `default byte`

### onDischarged

```java
default void onDischarged(LevelAccessor p_222026_, BlockState p_222027_, BlockPos p_222028_, RandomSource p_222029_)
```

**Parameters:**

- `p_222026_` (`LevelAccessor`)
- `p_222027_` (`BlockState`)
- `p_222028_` (`BlockPos`)
- `p_222029_` (`RandomSource`)

**Returns:** `default void`

### depositCharge

```java
default boolean depositCharge(LevelAccessor p_222031_, BlockPos p_222032_, RandomSource p_222033_)
```

**Parameters:**

- `p_222031_` (`LevelAccessor`)
- `p_222032_` (`BlockPos`)
- `p_222033_` (`RandomSource`)

**Returns:** `default boolean`

### attemptSpreadVein

```java
default boolean attemptSpreadVein(LevelAccessor p_222034_, BlockPos p_222035_, BlockState p_222036_, Collection<Direction> p_222037_, boolean p_222038_)
```

**Parameters:**

- `p_222034_` (`LevelAccessor`)
- `p_222035_` (`BlockPos`)
- `p_222036_` (`BlockState`)
- `p_222037_` (`Collection<Direction>`)
- `p_222038_` (`boolean`)

**Returns:** `default boolean`

### canChangeBlockStateOnSpread

```java
default boolean canChangeBlockStateOnSpread()
```

**Returns:** `default boolean`

### updateDecayDelay

```java
default int updateDecayDelay(int p_222045_)
```

**Parameters:**

- `p_222045_` (`int`)

**Returns:** `default int`

### attemptUseCharge

```java
int attemptUseCharge(SculkSpreader.ChargeCursor p_222039_, LevelAccessor p_222040_, BlockPos p_222041_, RandomSource p_222042_, SculkSpreader p_222043_, boolean p_222044_)
```

**Parameters:**

- `p_222039_` (`SculkSpreader.ChargeCursor`)
- `p_222040_` (`LevelAccessor`)
- `p_222041_` (`BlockPos`)
- `p_222042_` (`RandomSource`)
- `p_222043_` (`SculkSpreader`)
- `p_222044_` (`boolean`)

**Returns:** `int`
