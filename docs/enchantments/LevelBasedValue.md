# LevelBasedValue

**Package:** `net.minecraft.world.item.enchantment`
**Type:** interface

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LevelBasedValue.Clamped>` |  |
| `CODEC` | `Codec<LevelBasedValue.Constant>` |  |
| `TYPED_CODEC` | `MapCodec<LevelBasedValue.Constant>` |  |
| `CODEC` | `MapCodec<LevelBasedValue.Fraction>` |  |

## Methods

### bootstrap

```java
static MapCodec<? extends LevelBasedValue> bootstrap(Registry<MapCodec<? extends LevelBasedValue>> p_345955_)
```

**Parameters:**

- `p_345955_` (`Registry<MapCodec<? extends LevelBasedValue>>`)

**Returns:** `static MapCodec<? extends LevelBasedValue>`

### constant

```java
static LevelBasedValue.Constant constant(float p_344768_)
```

**Parameters:**

- `p_344768_` (`float`)

**Returns:** `static LevelBasedValue.Constant`

### perLevel

```java
static LevelBasedValue.Linear perLevel(float p_346188_, float p_346397_)
```

**Parameters:**

- `p_346188_` (`float`)
- `p_346397_` (`float`)

**Returns:** `static LevelBasedValue.Linear`

### perLevel

```java
static LevelBasedValue.Linear perLevel(float p_345221_)
```

**Parameters:**

- `p_345221_` (`float`)

**Returns:** `static LevelBasedValue.Linear`

### perLevel

```java
return perLevel()
```

**Returns:** `return`

### lookup

```java
static LevelBasedValue.Lookup lookup(List<Float> p_352164_, LevelBasedValue p_352467_)
```

**Parameters:**

- `p_352164_` (`List<Float>`)
- `p_352467_` (`LevelBasedValue`)

**Returns:** `static LevelBasedValue.Lookup`

### calculate

```java
float calculate(int p_345587_)
```

**Parameters:**

- `p_345587_` (`int`)

**Returns:** `float`

### codec

```java
MapCodec<? extends LevelBasedValue> codec()
```

**Returns:** `MapCodec<? extends LevelBasedValue>`

### calculate

```java
public float calculate(int p_345820_)
```

**Parameters:**

- `p_345820_` (`int`)

**Returns:** `float`

### codec

```java
public MapCodec<LevelBasedValue.Clamped> codec()
```

**Returns:** `MapCodec<LevelBasedValue.Clamped>`

### calculate

```java
public float calculate(int p_346274_)
```

**Parameters:**

- `p_346274_` (`int`)

**Returns:** `float`

### codec

```java
public MapCodec<LevelBasedValue.Constant> codec()
```

**Returns:** `MapCodec<LevelBasedValue.Constant>`

### calculate

```java
public float calculate(int p_345976_)
```

**Parameters:**

- `p_345976_` (`int`)

**Returns:** `float`

### codec

```java
public MapCodec<LevelBasedValue.Fraction> codec()
```

**Returns:** `MapCodec<LevelBasedValue.Fraction>`

### calculate

```java
public float calculate(int p_344759_)
```

**Parameters:**

- `p_344759_` (`int`)

**Returns:** `float`

### codec

```java
public MapCodec<LevelBasedValue.LevelsSquared> codec()
```

**Returns:** `MapCodec<LevelBasedValue.LevelsSquared>`

### calculate

```java
public float calculate(int p_345943_)
```

**Parameters:**

- `p_345943_` (`int`)

**Returns:** `float`

### codec

```java
public MapCodec<LevelBasedValue.Linear> codec()
```

**Returns:** `MapCodec<LevelBasedValue.Linear>`

### calculate

```java
public float calculate(int p_352377_)
```

**Parameters:**

- `p_352377_` (`int`)

**Returns:** `float`

### codec

```java
public MapCodec<LevelBasedValue.Lookup> codec()
```

**Returns:** `MapCodec<LevelBasedValue.Lookup>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Clamped` | record |  |
| `Constant` | record |  |
| `Fraction` | record |  |
| `LevelsSquared` | record |  |
| `Linear` | record |  |
| `Lookup` | record |  |
