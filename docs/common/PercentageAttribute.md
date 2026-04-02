# PercentageAttribute

**Package:** `net.neoforged.neoforge.common`
**Type:** class
**Extends:** `RangedAttribute`

## Description

A Percentage Attribute is one which always displays modifiers as percentages, including for `Operation#ADD_VALUE`.



This is used for attributes that would not make sense being displayed as flat additions (ex: +0.05 Swim Speed).

## Fields

| Name | Type | Description |
|------|------|-------------|
| `scaleFactor` | `double` |  |

## Methods

### PercentageAttribute

```java
public public PercentageAttribute(String pDescriptionId, double pDefaultValue, double pMin, double pMax, double scaleFactor)
```

**Parameters:**

- `pDescriptionId` (`String`)
- `pDefaultValue` (`double`)
- `pMin` (`double`)
- `pMax` (`double`)
- `scaleFactor` (`double`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### PercentageAttribute

```java
public public PercentageAttribute(String pDescriptionId, double pDefaultValue, double pMin, double pMax)
```

**Parameters:**

- `pDescriptionId` (`String`)
- `pDefaultValue` (`double`)
- `pMin` (`double`)
- `pMax` (`double`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### toValueComponent

```java
public MutableComponent toValueComponent(Operation op, double value, TooltipFlag flag)
```

**Parameters:**

- `op` (`Operation`)
- `value` (`double`)
- `flag` (`TooltipFlag`)

**Returns:** `MutableComponent`
