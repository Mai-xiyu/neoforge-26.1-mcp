# IAttributeExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FORMAT` | `DecimalFormat` |  |

## Methods

### toValueComponent

```java
default MutableComponent toValueComponent(Operation op, double value, TooltipFlag flag)
```

**Parameters:**

- `op` (`Operation`)
- `value` (`double`)
- `flag` (`TooltipFlag`)

**Returns:** `MutableComponent`

### toComponent

```java
default MutableComponent toComponent(AttributeModifier modif, TooltipFlag flag)
```

**Parameters:**

- `modif` (`AttributeModifier`)
- `flag` (`TooltipFlag`)

**Returns:** `MutableComponent`

### getDebugInfo

```java
default Component getDebugInfo(AttributeModifier modif, TooltipFlag flag)
```

**Parameters:**

- `modif` (`AttributeModifier`)
- `flag` (`TooltipFlag`)

**Returns:** `Component`

### getBaseId

```java
default ResourceLocation getBaseId()
```

**Returns:** `ResourceLocation`

### toBaseComponent

```java
default MutableComponent toBaseComponent(double value, double entityBase, boolean merged, TooltipFlag flag)
```

**Parameters:**

- `value` (`double`)
- `entityBase` (`double`)
- `merged` (`boolean`)
- `flag` (`TooltipFlag`)

**Returns:** `MutableComponent`

### getMergedStyle

```java
TextColor getMergedStyle(boolean isPositive)
```

**Parameters:**

- `isPositive` (`boolean`)

**Returns:** `TextColor`

### isNullOrAddition

```java
public static boolean isNullOrAddition(Operation op)
```

**Parameters:**

- `op` (`Operation`)

**Returns:** `public static boolean`

### self

```java
private Attribute self()
```

**Returns:** `private Attribute`
