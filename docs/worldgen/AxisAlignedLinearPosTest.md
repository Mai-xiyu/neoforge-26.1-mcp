# AxisAlignedLinearPosTest

**Package:** `net.minecraft.world.level.levelgen.structure.templatesystem`
**Type:** class
**Extends:** `PosRuleTest`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<AxisAlignedLinearPosTest>` |  |

## Methods

### AxisAlignedLinearPosTest

```java
public AxisAlignedLinearPosTest(float p_73970_, float p_73971_, int p_73972_, int p_73973_, Direction.Axis p_73974_)
```

**Parameters:**

- `p_73970_` (`float`)
- `p_73971_` (`float`)
- `p_73972_` (`int`)
- `p_73973_` (`int`)
- `p_73974_` (`Direction.Axis`)

**Returns:** `public`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Invalid range: [" + p_73972_ + ", " + p_73973_ + "]")
```

**Parameters:**

- `"` (`"Invalid range: [" + p_73972_ +`)
- `"]"` (`" + p_73973_ +`)

**Returns:** `throw new`

### test

```java
public boolean test(BlockPos p_230251_, BlockPos p_230252_, BlockPos p_230253_, RandomSource p_230254_)
```

**Parameters:**

- `p_230251_` (`BlockPos`)
- `p_230252_` (`BlockPos`)
- `p_230253_` (`BlockPos`)
- `p_230254_` (`RandomSource`)

**Returns:** `boolean`

### getType

```java
protected PosRuleTestType<?> getType()
```

**Returns:** `PosRuleTestType<?>`
