# ClimateSettingsBuilder

**Package:** `net.neoforged.neoforge.common.world`
**Type:** class

## Description

Builder for `ClimateSettings`.

## Methods

### copyOf

```java
public static ClimateSettingsBuilder copyOf(ClimateSettings settings)
```

**Parameters:**

- `settings` (`ClimateSettings`)

**Returns:** `ClimateSettingsBuilder`

### create

```java
public static ClimateSettingsBuilder create(boolean hasPrecipitation, float temperature, TemperatureModifier temperatureModifier, float downfall)
```

**Parameters:**

- `hasPrecipitation` (`boolean`)
- `temperature` (`float`)
- `temperatureModifier` (`TemperatureModifier`)
- `downfall` (`float`)

**Returns:** `ClimateSettingsBuilder`

### ClimateSettingsBuilder

```java
return new ClimateSettingsBuilder()
```

**Returns:** `return new`

### ClimateSettingsBuilder

```java
private ClimateSettingsBuilder(boolean hasPrecipitation, float temperature, TemperatureModifier temperatureModifier, float downfall)
```

**Parameters:**

- `hasPrecipitation` (`boolean`)
- `temperature` (`float`)
- `temperatureModifier` (`TemperatureModifier`)
- `downfall` (`float`)

**Returns:** `private`

### build

```java
public ClimateSettings build()
```

**Returns:** `ClimateSettings`

### ClimateSettings

```java
return new ClimateSettings()
```

**Returns:** `return new`

### hasPrecipitation

```java
public boolean hasPrecipitation()
```

**Returns:** `boolean`

### setHasPrecipitation

```java
public void setHasPrecipitation(boolean hasPrecipitation)
```

**Parameters:**

- `hasPrecipitation` (`boolean`)

### getTemperature

```java
public float getTemperature()
```

**Returns:** `float`

### setTemperature

```java
public void setTemperature(float temperature)
```

**Parameters:**

- `temperature` (`float`)

### getTemperatureModifier

```java
public TemperatureModifier getTemperatureModifier()
```

**Returns:** `TemperatureModifier`

### setTemperatureModifier

```java
public void setTemperatureModifier(TemperatureModifier temperatureModifier)
```

**Parameters:**

- `temperatureModifier` (`TemperatureModifier`)

### getDownfall

```java
public float getDownfall()
```

**Returns:** `float`

### setDownfall

```java
public void setDownfall(float downfall)
```

**Parameters:**

- `downfall` (`float`)
