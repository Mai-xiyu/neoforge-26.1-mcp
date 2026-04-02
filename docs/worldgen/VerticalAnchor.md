# VerticalAnchor

**Package:** `net.minecraft.world.level.levelgen`
**Type:** interface

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<VerticalAnchor.AboveBottom>` |  |
| `CODEC` | `Codec<VerticalAnchor.Absolute>` |  |
| `CODEC` | `Codec<VerticalAnchor.BelowTop>` |  |

## Methods

### absolute

```java
static VerticalAnchor absolute(int p_158923_)
```

**Parameters:**

- `p_158923_` (`int`)

**Returns:** `static VerticalAnchor`

### aboveBottom

```java
static VerticalAnchor aboveBottom(int p_158931_)
```

**Parameters:**

- `p_158931_` (`int`)

**Returns:** `static VerticalAnchor`

### belowTop

```java
static VerticalAnchor belowTop(int p_158936_)
```

**Parameters:**

- `p_158936_` (`int`)

**Returns:** `static VerticalAnchor`

### bottom

```java
static VerticalAnchor bottom()
```

**Returns:** `static VerticalAnchor`

### top

```java
static VerticalAnchor top()
```

**Returns:** `static VerticalAnchor`

### merge

```java
private static VerticalAnchor merge(Either<VerticalAnchor.Absolute, Either<VerticalAnchor.AboveBottom, VerticalAnchor.BelowTop>> p_158925_)
```

**Parameters:**

- `p_158925_` (`Either<VerticalAnchor.Absolute, Either<VerticalAnchor.AboveBottom, VerticalAnchor.BelowTop>>`)

**Returns:** `private static VerticalAnchor`

### split

```java
private static Either<VerticalAnchor.Absolute, Either<VerticalAnchor.AboveBottom, VerticalAnchor.BelowTop>> split(VerticalAnchor p_158927_)
```

**Parameters:**

- `p_158927_` (`VerticalAnchor`)

**Returns:** `private static Either<VerticalAnchor.Absolute, Either<VerticalAnchor.AboveBottom, VerticalAnchor.BelowTop>>`

### resolveY

```java
int resolveY(WorldGenerationContext p_158928_)
```

**Parameters:**

- `p_158928_` (`WorldGenerationContext`)

**Returns:** `int`

### resolveY

```java
public int resolveY(WorldGenerationContext p_158942_)
```

**Parameters:**

- `p_158942_` (`WorldGenerationContext`)

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`

### resolveY

```java
public int resolveY(WorldGenerationContext p_158949_)
```

**Parameters:**

- `p_158949_` (`WorldGenerationContext`)

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`

### resolveY

```java
public int resolveY(WorldGenerationContext p_158956_)
```

**Parameters:**

- `p_158956_` (`WorldGenerationContext`)

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `AboveBottom` | record |  |
| `Absolute` | record |  |
| `BelowTop` | record |  |
