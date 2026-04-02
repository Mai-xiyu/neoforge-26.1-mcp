# IAbstractMinecartExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_MAX_SPEED_AIR_LATERAL` | `float` |  |
| `DEFAULT_MAX_SPEED_AIR_VERTICAL` | `float` |  |
| `DEFAULT_AIR_DRAG` | `double` |  |

## Methods

### self

```java
private AbstractMinecart self()
```

**Returns:** `private AbstractMinecart`

### getCurrentRailPosition

```java
default BlockPos getCurrentRailPosition()
```

**Returns:** `BlockPos`

### getMaxSpeedWithRail

```java
double getMaxSpeedWithRail()
```

**Returns:** `double`

### moveMinecartOnRail

```java
void moveMinecartOnRail(BlockPos pos)
```

**Parameters:**

- `pos` (`BlockPos`)

### canUseRail

```java
boolean canUseRail()
```

**Returns:** `boolean`

### setCanUseRail

```java
void setCanUseRail(boolean use)
```

**Parameters:**

- `use` (`boolean`)

### shouldDoRailFunctions

```java
default boolean shouldDoRailFunctions()
```

**Returns:** `boolean`

### isPoweredCart

```java
default boolean isPoweredCart()
```

**Returns:** `boolean`

### canBeRidden

```java
default boolean canBeRidden()
```

**Returns:** `boolean`

### getMaxCartSpeedOnRail

```java
default float getMaxCartSpeedOnRail()
```

**Returns:** `float`

### getCurrentCartSpeedCapOnRail

```java
float getCurrentCartSpeedCapOnRail()
```

**Returns:** `float`

### setCurrentCartSpeedCapOnRail

```java
void setCurrentCartSpeedCapOnRail(float value)
```

**Parameters:**

- `value` (`float`)

### getMaxSpeedAirLateral

```java
float getMaxSpeedAirLateral()
```

**Returns:** `float`

### setMaxSpeedAirLateral

```java
void setMaxSpeedAirLateral(float value)
```

**Parameters:**

- `value` (`float`)

### getMaxSpeedAirVertical

```java
float getMaxSpeedAirVertical()
```

**Returns:** `float`

### setMaxSpeedAirVertical

```java
void setMaxSpeedAirVertical(float value)
```

**Parameters:**

- `value` (`float`)

### getDragAir

```java
double getDragAir()
```

**Returns:** `double`

### setDragAir

```java
void setDragAir(double value)
```

**Parameters:**

- `value` (`double`)

### getSlopeAdjustment

```java
default double getSlopeAdjustment()
```

**Returns:** `default double`

### getComparatorLevel

```java
default int getComparatorLevel()
```

**Returns:** `int`
