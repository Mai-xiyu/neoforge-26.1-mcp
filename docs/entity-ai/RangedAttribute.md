# RangedAttribute

**Package:** `net.minecraft.world.entity.ai.attributes`
**Type:** class
**Extends:** `Attribute`

## Methods

### RangedAttribute

```java
public RangedAttribute(String p_22310_, double p_22311_, double p_22312_, double p_22313_)
```

**Parameters:**

- `p_22310_` (`String`)
- `p_22311_` (`double`)
- `p_22312_` (`double`)
- `p_22313_` (`double`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### IllegalArgumentException

```java
throw new IllegalArgumentException("Minimum value cannot be bigger than maximum value!")
```

**Parameters:**

- `value!"` (`"Minimum value cannot be bigger than maximum`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Default value cannot be lower than minimum value!")
```

**Parameters:**

- `value!"` (`"Default value cannot be lower than minimum`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Default value cannot be bigger than maximum value!")
```

**Parameters:**

- `value!"` (`"Default value cannot be bigger than maximum`)

**Returns:** `throw new`

### getMinValue

```java
public double getMinValue()
```

**Returns:** `public double`

### getMaxValue

```java
public double getMaxValue()
```

**Returns:** `public double`

### sanitizeValue

```java
public double sanitizeValue(double p_22315_)
```

**Parameters:**

- `p_22315_` (`double`)

**Returns:** `double`
