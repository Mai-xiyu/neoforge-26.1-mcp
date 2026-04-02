# GoatAi

**Package:** `net.minecraft.world.entity.animal.goat`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `RAM_PREPARE_TIME` | `int` |  |
| `RAM_MAX_DISTANCE` | `int` |  |
| `MAX_LONG_JUMP_HEIGHT` | `int` |  |
| `MAX_LONG_JUMP_WIDTH` | `int` |  |
| `MAX_JUMP_VELOCITY_MULTIPLIER` | `float` |  |
| `RAM_MIN_DISTANCE` | `int` |  |
| `ADULT_RAM_KNOCKBACK_FORCE` | `float` |  |
| `BABY_RAM_KNOCKBACK_FORCE` | `float` |  |

## Methods

### initMemories

```java
protected static void initMemories(Goat p_218765_, RandomSource p_218766_)
```

**Parameters:**

- `p_218765_` (`Goat`)
- `p_218766_` (`RandomSource`)

**Returns:** `protected static void`

### makeBrain

```java
protected static Brain<?> makeBrain(Brain<Goat> p_149448_)
```

**Parameters:**

- `p_149448_` (`Brain<Goat>`)

**Returns:** `protected static Brain<?>`

### initCoreActivity

```java
 initCoreActivity()
```

**Returns:** ``

### initIdleActivity

```java
 initIdleActivity()
```

**Returns:** ``

### initLongJumpActivity

```java
 initLongJumpActivity()
```

**Returns:** ``

### initRamActivity

```java
 initRamActivity()
```

**Returns:** ``

### initCoreActivity

```java
private static void initCoreActivity(Brain<Goat> p_149454_)
```

**Parameters:**

- `p_149454_` (`Brain<Goat>`)

**Returns:** `private static void`

### initIdleActivity

```java
private static void initIdleActivity(Brain<Goat> p_149458_)
```

**Parameters:**

- `p_149458_` (`Brain<Goat>`)

**Returns:** `private static void`

### initLongJumpActivity

```java
private static void initLongJumpActivity(Brain<Goat> p_149462_)
```

**Parameters:**

- `p_149462_` (`Brain<Goat>`)

**Returns:** `private static void`

### initRamActivity

```java
private static void initRamActivity(Brain<Goat> p_149466_)
```

**Parameters:**

- `p_149466_` (`Brain<Goat>`)

**Returns:** `private static void`

### updateActivity

```java
public static void updateActivity(Goat p_149456_)
```

**Parameters:**

- `p_149456_` (`Goat`)

**Returns:** `public static void`

### getTemptations

```java
public static Predicate<ItemStack> getTemptations()
```

**Returns:** `public static Predicate<ItemStack>`
