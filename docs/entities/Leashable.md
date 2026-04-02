# Leashable

**Package:** `net.minecraft.world.entity`
**Type:** interface

## Methods

### getLeashData

```java
Leashable.LeashData getLeashData()
```

**Returns:** `Leashable.LeashData`

### setLeashData

```java
void setLeashData(Leashable.LeashData p_352114_)
```

**Parameters:**

- `p_352114_` (`Leashable.LeashData`)

### isLeashed

```java
default boolean isLeashed()
```

**Returns:** `default boolean`

### mayBeLeashed

```java
default boolean mayBeLeashed()
```

**Returns:** `default boolean`

### canHaveALeashAttachedToIt

```java
default boolean canHaveALeashAttachedToIt()
```

**Returns:** `default boolean`

### canBeLeashed

```java
default boolean canBeLeashed()
```

**Returns:** `default boolean`

### setDelayedLeashHolderId

```java
default void setDelayedLeashHolderId(int p_352387_)
```

**Parameters:**

- `p_352387_` (`int`)

**Returns:** `default void`

### readLeashData

```java
default Leashable.LeashData readLeashData(CompoundTag p_352410_)
```

**Parameters:**

- `p_352410_` (`CompoundTag`)

**Returns:** `Leashable.LeashData`

### writeLeashData

```java
default void writeLeashData(CompoundTag p_352349_, Leashable.LeashData p_352363_)
```

**Parameters:**

- `p_352349_` (`CompoundTag`)
- `p_352363_` (`Leashable.LeashData`)

**Returns:** `default void`

### restoreLeashFromSave

```java
static <E extends Entity & Leashable> void restoreLeashFromSave(E p_352354_, Leashable.LeashData p_352106_)
```

**Parameters:**

- `p_352354_` (`E`)
- `p_352106_` (`Leashable.LeashData`)

### setLeashedTo

```java
 setLeashedTo()
```

**Returns:** ``

### dropLeash

```java
default void dropLeash(boolean p_352294_, boolean p_352456_)
```

**Parameters:**

- `p_352294_` (`boolean`)
- `p_352456_` (`boolean`)

**Returns:** `default void`

### dropLeash

```java
static <E extends Entity & Leashable> void dropLeash(E p_352163_, boolean p_352286_, boolean p_352272_)
```

**Parameters:**

- `p_352163_` (`E`)
- `p_352286_` (`boolean`)
- `p_352272_` (`boolean`)

### tickLeash

```java
static <E extends Entity & Leashable> void tickLeash(E p_352082_)
```

**Parameters:**

- `p_352082_` (`E`)

### restoreLeashFromSave

```java
 restoreLeashFromSave()
```

**Returns:** ``

### dropLeash

```java
 dropLeash()
```

**Returns:** ``

### handleLeashAtDistance

```java
default boolean handleLeashAtDistance(Entity p_352458_, float p_352101_)
```

**Parameters:**

- `p_352458_` (`Entity`)
- `p_352101_` (`float`)

**Returns:** `default boolean`

### leashTooFarBehaviour

```java
default void leashTooFarBehaviour()
```

**Returns:** `default void`

### closeRangeLeashBehaviour

```java
default void closeRangeLeashBehaviour(Entity p_352073_)
```

**Parameters:**

- `p_352073_` (`Entity`)

**Returns:** `default void`

### elasticRangeLeashBehaviour

```java
default void elasticRangeLeashBehaviour(Entity p_353036_, float p_353047_)
```

**Parameters:**

- `p_353036_` (`Entity`)
- `p_353047_` (`float`)

**Returns:** `default void`

### legacyElasticRangeLeashBehaviour

```java
static <E extends Entity & Leashable> void legacyElasticRangeLeashBehaviour(E p_353048_, Entity p_353039_, float p_353053_)
```

**Parameters:**

- `p_353048_` (`E`)
- `p_353039_` (`Entity`)
- `p_353053_` (`float`)

### setLeashedTo

```java
default void setLeashedTo(Entity p_352411_, boolean p_352183_)
```

**Parameters:**

- `p_352411_` (`Entity`)
- `p_352183_` (`boolean`)

**Returns:** `default void`

### setLeashedTo

```java
static <E extends Entity & Leashable> void setLeashedTo(E p_352280_, Entity p_352109_, boolean p_352239_)
```

**Parameters:**

- `p_352280_` (`E`)
- `p_352109_` (`Entity`)
- `p_352239_` (`boolean`)

### getLeashHolder

```java
default Entity getLeashHolder()
```

**Returns:** `Entity`

### getLeashHolder

```java
static <E extends Entity & Leashable> Entity getLeashHolder(E p_352466_)
```

**Parameters:**

- `p_352466_` (`E`)

**Returns:** `Entity`

### LeashData

```java
 LeashData(Either<UUID, BlockPos> p_352282_)
```

**Parameters:**

- `p_352282_` (`Either<UUID, BlockPos>`)

**Returns:** ``

### LeashData

```java
 LeashData(Entity p_352066_)
```

**Parameters:**

- `p_352066_` (`Entity`)

**Returns:** ``

### LeashData

```java
 LeashData(int p_352297_)
```

**Parameters:**

- `p_352297_` (`int`)

**Returns:** ``

### setLeashHolder

```java
public void setLeashHolder(Entity p_352464_)
```

**Parameters:**

- `p_352464_` (`Entity`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LeashData` | class |  |
