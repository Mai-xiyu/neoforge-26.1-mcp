# RandomSequence

**Package:** `net.minecraft.world`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<RandomSequence>` |  |

## Methods

### RandomSequence

```java
public RandomSequence(XoroshiroRandomSource p_287597_)
```

**Parameters:**

- `p_287597_` (`XoroshiroRandomSource`)

**Returns:** `public`

### RandomSequence

```java
public RandomSequence(long p_287592_, ResourceLocation p_287762_)
```

**Parameters:**

- `p_287592_` (`long`)
- `p_287762_` (`ResourceLocation`)

**Returns:** `public`

### RandomSequence

```java
public RandomSequence(long p_295115_, Optional<ResourceLocation> p_295306_)
```

**Parameters:**

- `p_295115_` (`long`)
- `p_295306_` (`Optional<ResourceLocation>`)

**Returns:** `public`

### createSequence

```java
private static XoroshiroRandomSource createSequence(long p_289567_, Optional<ResourceLocation> p_294573_)
```

**Parameters:**

- `p_289567_` (`long`)
- `p_294573_` (`Optional<ResourceLocation>`)

**Returns:** `private static XoroshiroRandomSource`

### seedForKey

```java
public static RandomSupport.Seed128bit seedForKey(ResourceLocation p_288989_)
```

**Parameters:**

- `p_288989_` (`ResourceLocation`)

**Returns:** `public static RandomSupport.Seed128bit`

### random

```java
public RandomSource random()
```

**Returns:** `public RandomSource`
