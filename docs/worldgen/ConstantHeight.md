# ConstantHeight

**Package:** `net.minecraft.world.level.levelgen.heightproviders`
**Type:** class
**Extends:** `HeightProvider`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ZERO` | `ConstantHeight` |  |
| `CODEC` | `MapCodec<ConstantHeight>` |  |

## Methods

### of

```java
public static ConstantHeight of(VerticalAnchor p_161957_)
```

**Parameters:**

- `p_161957_` (`VerticalAnchor`)

**Returns:** `public static ConstantHeight`

### ConstantHeight

```java
return new ConstantHeight()
```

**Returns:** `return new`

### ConstantHeight

```java
private ConstantHeight(VerticalAnchor p_161950_)
```

**Parameters:**

- `p_161950_` (`VerticalAnchor`)

**Returns:** `private`

### getValue

```java
public VerticalAnchor getValue()
```

**Returns:** `public VerticalAnchor`

### sample

```java
public int sample(RandomSource p_226300_, WorldGenerationContext p_226301_)
```

**Parameters:**

- `p_226300_` (`RandomSource`)
- `p_226301_` (`WorldGenerationContext`)

**Returns:** `int`

### getType

```java
public HeightProviderType<?> getType()
```

**Returns:** `HeightProviderType<?>`

### toString

```java
public String toString()
```

**Returns:** `String`
