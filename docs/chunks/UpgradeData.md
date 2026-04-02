# UpgradeData

**Package:** `net.minecraft.world.level.chunk`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EMPTY` | `UpgradeData` |  |

## Methods

### UpgradeData

```java
private UpgradeData(LevelHeightAccessor p_156506_)
```

**Parameters:**

- `p_156506_` (`LevelHeightAccessor`)

**Returns:** `private`

### UpgradeData

```java
public UpgradeData(CompoundTag p_156508_, LevelHeightAccessor p_156509_)
```

**Parameters:**

- `p_156508_` (`CompoundTag`)
- `p_156509_` (`LevelHeightAccessor`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### loadTicks

```java
<T> private static <T> void loadTicks(CompoundTag p_208133_, String p_208134_, Function<String, Optional<T>> p_208135_, List<SavedTick<T>> p_208136_)
```

**Parameters:**

- `p_208133_` (`CompoundTag`)
- `p_208134_` (`String`)
- `p_208135_` (`Function<String, Optional<T>>`)
- `p_208136_` (`List<SavedTick<T>>`)

**Returns:** `private static <T> void`

### upgrade

```java
public void upgrade(LevelChunk p_63342_)
```

**Parameters:**

- `p_63342_` (`LevelChunk`)

**Returns:** `public void`

### upgradeSides

```java
 upgradeSides()
```

**Returns:** ``

### upgradeSides

```java
private static void upgradeSides(LevelChunk p_63344_, Direction8 p_63345_)
```

**Parameters:**

- `p_63344_` (`LevelChunk`)
- `p_63345_` (`Direction8`)

**Returns:** `private static void`

### updateState

```java
private static BlockState updateState(BlockState p_63336_, Direction p_63337_, LevelAccessor p_63338_, BlockPos p_63339_, BlockPos p_63340_)
```

**Parameters:**

- `p_63336_` (`BlockState`)
- `p_63337_` (`Direction`)
- `p_63338_` (`LevelAccessor`)
- `p_63339_` (`BlockPos`)
- `p_63340_` (`BlockPos`)

**Returns:** `private static BlockState`

### upgradeInside

```java
private void upgradeInside(LevelChunk p_63348_)
```

**Parameters:**

- `p_63348_` (`LevelChunk`)

**Returns:** `private void`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### write

```java
public CompoundTag write()
```

**Returns:** `public CompoundTag`

### updateShape

```java
BlockState updateShape(BlockState p_63352_, Direction p_63353_, BlockState p_63354_, LevelAccessor p_63355_, BlockPos p_63356_, BlockPos p_63357_)
```

**Parameters:**

- `p_63352_` (`BlockState`)
- `p_63353_` (`Direction`)
- `p_63354_` (`BlockState`)
- `p_63355_` (`LevelAccessor`)
- `p_63356_` (`BlockPos`)
- `p_63357_` (`BlockPos`)

**Returns:** `BlockState`

### processChunk

```java
default void processChunk(LevelAccessor p_63351_)
```

**Parameters:**

- `p_63351_` (`LevelAccessor`)

**Returns:** `default void`

### BLACKLIST

```java
 BLACKLIST()
```

**Returns:** ``

### updateShape

```java
public BlockState updateShape(BlockState p_63394_, Direction p_63395_, BlockState p_63396_, LevelAccessor p_63397_, BlockPos p_63398_, BlockPos p_63399_)
```

**Parameters:**

- `p_63394_` (`BlockState`)
- `p_63395_` (`Direction`)
- `p_63396_` (`BlockState`)
- `p_63397_` (`LevelAccessor`)
- `p_63398_` (`BlockPos`)
- `p_63399_` (`BlockPos`)

**Returns:** `BlockState`

### updateShape

```java
public BlockState updateShape(BlockState p_63405_, Direction p_63406_, BlockState p_63407_, LevelAccessor p_63408_, BlockPos p_63409_, BlockPos p_63410_)
```

**Parameters:**

- `p_63405_` (`BlockState`)
- `p_63406_` (`Direction`)
- `p_63407_` (`BlockState`)
- `p_63408_` (`LevelAccessor`)
- `p_63409_` (`BlockPos`)
- `p_63410_` (`BlockPos`)

**Returns:** `BlockState`

### CHEST

```java
, CHEST()
```

**Returns:** `,`

### updateShape

```java
public BlockState updateShape(BlockState p_63416_, Direction p_63417_, BlockState p_63418_, LevelAccessor p_63419_, BlockPos p_63420_, BlockPos p_63421_)
```

**Parameters:**

- `p_63416_` (`BlockState`)
- `p_63417_` (`Direction`)
- `p_63418_` (`BlockState`)
- `p_63419_` (`LevelAccessor`)
- `p_63420_` (`BlockPos`)
- `p_63421_` (`BlockPos`)

**Returns:** `BlockState`

### LEAVES

```java
, LEAVES()
```

**Returns:** `,`

### updateShape

```java
public BlockState updateShape(BlockState p_63432_, Direction p_63433_, BlockState p_63434_, LevelAccessor p_63435_, BlockPos p_63436_, BlockPos p_63437_)
```

**Parameters:**

- `p_63432_` (`BlockState`)
- `p_63433_` (`Direction`)
- `p_63434_` (`BlockState`)
- `p_63435_` (`LevelAccessor`)
- `p_63436_` (`BlockPos`)
- `p_63437_` (`BlockPos`)

**Returns:** `BlockState`

### processChunk

```java
public void processChunk(LevelAccessor p_63430_)
```

**Parameters:**

- `p_63430_` (`LevelAccessor`)

### STEM_BLOCK

```java
, STEM_BLOCK()
```

**Returns:** `,`

### updateShape

```java
public BlockState updateShape(BlockState p_63443_, Direction p_63444_, BlockState p_63445_, LevelAccessor p_63446_, BlockPos p_63447_, BlockPos p_63448_)
```

**Parameters:**

- `p_63443_` (`BlockState`)
- `p_63444_` (`Direction`)
- `p_63445_` (`BlockState`)
- `p_63446_` (`LevelAccessor`)
- `p_63447_` (`BlockPos`)
- `p_63448_` (`BlockPos`)

**Returns:** `BlockState`

### BlockFixers

```java
 BlockFixers(Block[]... p_63380_)
```

**Parameters:**

- `p_63380_` (`Block[]...`)

**Returns:** ``

### this

```java
 this()
```

**Returns:** ``

### BlockFixers

```java
 BlockFixers(boolean p_63369_, Block[]... p_63370_)
```

**Parameters:**

- `p_63369_` (`boolean`)
- `p_63370_` (`Block[]...`)

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BlockFixer` | interface |  |
