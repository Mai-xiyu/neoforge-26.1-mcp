# BooleanAttribute

**Package:** `net.neoforged.neoforge.common`
**Type:** class
**Extends:** `Attribute`

## Description

A boolean attribute only has two states, on or off, represented by a value of 0 (false) or 1 (true).



For boolean attributes, only use the following modifier values:

A value of 1 with `AttributeModifier.Operation#ADD_VALUE` to enable the effect.
A value of -1 with `AttributeModifier.Operation#ADD_MULTIPLIED_TOTAL` to forcibly disable the effect.

This behavior allows for multiple enabling modifiers to coexist, not removing the effect unless all enabling modifiers are removed.



Additionally, it permits forcibly disabling the effect through multiply total.
@apiNote Use of other operations and/or values will trigger undefined behavior, where no guarantees can be made if the attribute will be enabled or not.

## Methods

### BooleanAttribute

```java
public BooleanAttribute(String descriptionId, boolean defaultValue)
```

**Parameters:**

- `descriptionId` (`String`)
- `defaultValue` (`boolean`)

**Returns:** `public`

### super

```java
 super(defaultValue ? 1 : 0)
```

**Parameters:**

- `0` (`defaultValue ? 1 :`)

**Returns:** ``

### sanitizeValue

```java
public double sanitizeValue(double value)
```

**Parameters:**

- `value` (`double`)

**Returns:** `double`

### toValueComponent

```java
public MutableComponent toValueComponent(Operation op, double value, TooltipFlag flag)
```

**Parameters:**

- `op` (`Operation`)
- `value` (`double`)
- `flag` (`TooltipFlag`)

**Returns:** `MutableComponent`

### toComponent

```java
public MutableComponent toComponent(AttributeModifier modif, TooltipFlag flag)
```

**Parameters:**

- `modif` (`AttributeModifier`)
- `flag` (`TooltipFlag`)

**Returns:** `MutableComponent`
