# IntRange

**Package:** `net.minecraft.world.level.storage.loot`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<IntRange>` |  |

## Methods

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `public Set<LootContextParam<?>>`

### IntRange

```java
private IntRange(Optional<NumberProvider> p_299273_, Optional<NumberProvider> p_298799_)
```

**Parameters:**

- `p_299273_` (`Optional<NumberProvider>`)
- `p_298799_` (`Optional<NumberProvider>`)

**Returns:** `private`

### IntRange

```java
private IntRange(NumberProvider p_165006_, NumberProvider p_165007_)
```

**Parameters:**

- `p_165006_` (`NumberProvider`)
- `p_165007_` (`NumberProvider`)

**Returns:** `private`

### exact

```java
public static IntRange exact(int p_165010_)
```

**Parameters:**

- `p_165010_` (`int`)

**Returns:** `public static IntRange`

### range

```java
public static IntRange range(int p_165012_, int p_165013_)
```

**Parameters:**

- `p_165012_` (`int`)
- `p_165013_` (`int`)

**Returns:** `public static IntRange`

### lowerBound

```java
public static IntRange lowerBound(int p_165027_)
```

**Parameters:**

- `p_165027_` (`int`)

**Returns:** `public static IntRange`

### upperBound

```java
public static IntRange upperBound(int p_165041_)
```

**Parameters:**

- `p_165041_` (`int`)

**Returns:** `public static IntRange`

### clamp

```java
public int clamp(LootContext p_165015_, int p_165016_)
```

**Parameters:**

- `p_165015_` (`LootContext`)
- `p_165016_` (`int`)

**Returns:** `public int`

### test

```java
public boolean test(LootContext p_165029_, int p_165030_)
```

**Parameters:**

- `p_165029_` (`LootContext`)
- `p_165030_` (`int`)

**Returns:** `public boolean`

### unpackExact

```java
private OptionalInt unpackExact()
```

**Returns:** `private OptionalInt`

### test

```java
boolean test(LootContext p_165057_, int p_165058_)
```

**Parameters:**

- `p_165057_` (`LootContext`)
- `p_165058_` (`int`)

**Returns:** `boolean`

### apply

```java
int apply(LootContext p_165060_, int p_165061_)
```

**Parameters:**

- `p_165060_` (`LootContext`)
- `p_165061_` (`int`)

**Returns:** `int`
