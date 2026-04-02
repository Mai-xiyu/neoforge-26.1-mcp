# LinearPosTest

**Package:** `net.minecraft.world.level.levelgen.structure.templatesystem`
**Type:** class
**Extends:** `PosRuleTest`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LinearPosTest>` |  |

## Methods

### LinearPosTest

```java
public LinearPosTest(float p_74154_, float p_74155_, int p_74156_, int p_74157_)
```

**Parameters:**

- `p_74154_` (`float`)
- `p_74155_` (`float`)
- `p_74156_` (`int`)
- `p_74157_` (`int`)

**Returns:** `public`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Invalid range: [" + p_74156_ + ", " + p_74157_ + "]")
```

**Parameters:**

- `"` (`"Invalid range: [" + p_74156_ +`)
- `"]"` (`" + p_74157_ +`)

**Returns:** `throw new`

### test

```java
public boolean test(BlockPos p_230296_, BlockPos p_230297_, BlockPos p_230298_, RandomSource p_230299_)
```

**Parameters:**

- `p_230296_` (`BlockPos`)
- `p_230297_` (`BlockPos`)
- `p_230298_` (`BlockPos`)
- `p_230299_` (`RandomSource`)

**Returns:** `boolean`

### getType

```java
protected PosRuleTestType<?> getType()
```

**Returns:** `PosRuleTestType<?>`
