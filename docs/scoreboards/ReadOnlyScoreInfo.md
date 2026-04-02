# ReadOnlyScoreInfo

**Package:** `net.minecraft.world.scores`
**Type:** interface

## Methods

### value

```java
int value()
```

**Returns:** `int`

### isLocked

```java
boolean isLocked()
```

**Returns:** `boolean`

### numberFormat

```java
NumberFormat numberFormat()
```

**Returns:** `NumberFormat`

### formatValue

```java
default MutableComponent formatValue(NumberFormat p_313924_)
```

**Parameters:**

- `p_313924_` (`NumberFormat`)

**Returns:** `default MutableComponent`

### safeFormatValue

```java
static MutableComponent safeFormatValue(ReadOnlyScoreInfo p_313916_, NumberFormat p_313801_)
```

**Parameters:**

- `p_313916_` (`ReadOnlyScoreInfo`)
- `p_313801_` (`NumberFormat`)

**Returns:** `static MutableComponent`
