# PositionalRandomFactory

**Package:** `net.minecraft.world.level.levelgen`
**Type:** interface

## Methods

### at

```java
default RandomSource at(BlockPos p_224543_)
```

**Parameters:**

- `p_224543_` (`BlockPos`)

**Returns:** `default RandomSource`

### fromHashOf

```java
default RandomSource fromHashOf(ResourceLocation p_224541_)
```

**Parameters:**

- `p_224541_` (`ResourceLocation`)

**Returns:** `default RandomSource`

### fromHashOf

```java
RandomSource fromHashOf(String p_224544_)
```

**Parameters:**

- `p_224544_` (`String`)

**Returns:** `RandomSource`

### fromSeed

```java
RandomSource fromSeed(long p_348480_)
```

**Parameters:**

- `p_348480_` (`long`)

**Returns:** `RandomSource`

### at

```java
RandomSource at(int p_224537_, int p_224538_, int p_224539_)
```

**Parameters:**

- `p_224537_` (`int`)
- `p_224538_` (`int`)
- `p_224539_` (`int`)

**Returns:** `RandomSource`

### parityConfigString

```java
void parityConfigString(StringBuilder p_189317_)
```

**Parameters:**

- `p_189317_` (`StringBuilder`)
