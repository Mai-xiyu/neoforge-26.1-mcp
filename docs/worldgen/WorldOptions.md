# WorldOptions

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<WorldOptions>` |  |
| `DEMO_OPTIONS` | `WorldOptions` |  |

## Methods

### WorldOptions

```java
public WorldOptions(long p_251567_, boolean p_250743_, boolean p_250454_)
```

**Parameters:**

- `p_251567_` (`long`)
- `p_250743_` (`boolean`)
- `p_250454_` (`boolean`)

**Returns:** `public`

### defaultWithRandomSeed

```java
public static WorldOptions defaultWithRandomSeed()
```

**Returns:** `public static WorldOptions`

### WorldOptions

```java
private WorldOptions(long p_249191_, boolean p_250927_, boolean p_249013_, Optional<String> p_250735_)
```

**Parameters:**

- `p_249191_` (`long`)
- `p_250927_` (`boolean`)
- `p_249013_` (`boolean`)
- `p_250735_` (`Optional<String>`)

**Returns:** `private`

### seed

```java
public long seed()
```

**Returns:** `public long`

### generateStructures

```java
public boolean generateStructures()
```

**Returns:** `public boolean`

### generateBonusChest

```java
public boolean generateBonusChest()
```

**Returns:** `public boolean`

### isOldCustomizedWorld

```java
public boolean isOldCustomizedWorld()
```

**Returns:** `public boolean`

### withBonusChest

```java
public WorldOptions withBonusChest(boolean p_251744_)
```

**Parameters:**

- `p_251744_` (`boolean`)

**Returns:** `public WorldOptions`

### WorldOptions

```java
return new WorldOptions()
```

**Returns:** `return new`

### withStructures

```java
public WorldOptions withStructures(boolean p_251426_)
```

**Parameters:**

- `p_251426_` (`boolean`)

**Returns:** `public WorldOptions`

### WorldOptions

```java
return new WorldOptions()
```

**Returns:** `return new`

### withSeed

```java
public WorldOptions withSeed(OptionalLong p_261572_)
```

**Parameters:**

- `p_261572_` (`OptionalLong`)

**Returns:** `public WorldOptions`

### parseSeed

```java
public static OptionalLong parseSeed(String p_262144_)
```

**Parameters:**

- `p_262144_` (`String`)

**Returns:** `public static OptionalLong`

### randomSeed

```java
public static long randomSeed()
```

**Returns:** `public static long`
