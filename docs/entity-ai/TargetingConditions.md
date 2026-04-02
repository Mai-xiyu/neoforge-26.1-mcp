# TargetingConditions

**Package:** `net.minecraft.world.entity.ai.targeting`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT` | `TargetingConditions` |  |

## Methods

### TargetingConditions

```java
private TargetingConditions(boolean p_148351_)
```

**Parameters:**

- `p_148351_` (`boolean`)

**Returns:** `private`

### forCombat

```java
public static TargetingConditions forCombat()
```

**Returns:** `public static TargetingConditions`

### TargetingConditions

```java
return new TargetingConditions()
```

**Returns:** `return new`

### forNonCombat

```java
public static TargetingConditions forNonCombat()
```

**Returns:** `public static TargetingConditions`

### TargetingConditions

```java
return new TargetingConditions()
```

**Returns:** `return new`

### copy

```java
public TargetingConditions copy()
```

**Returns:** `public TargetingConditions`

### range

```java
public TargetingConditions range(double p_26884_)
```

**Parameters:**

- `p_26884_` (`double`)

**Returns:** `public TargetingConditions`

### ignoreLineOfSight

```java
public TargetingConditions ignoreLineOfSight()
```

**Returns:** `public TargetingConditions`

### ignoreInvisibilityTesting

```java
public TargetingConditions ignoreInvisibilityTesting()
```

**Returns:** `public TargetingConditions`

### selector

```java
public TargetingConditions selector(Predicate<LivingEntity> p_26889_)
```

**Parameters:**

- `p_26889_` (`Predicate<LivingEntity>`)

**Returns:** `public TargetingConditions`

### test

```java
public boolean test(LivingEntity p_26886_, LivingEntity p_26887_)
```

**Parameters:**

- `p_26886_` (`LivingEntity`)
- `p_26887_` (`LivingEntity`)

**Returns:** `public boolean`
