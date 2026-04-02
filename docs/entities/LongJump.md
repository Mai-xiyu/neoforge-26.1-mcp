# LongJump

**Package:** `net.minecraft.world.entity.monster.breeze`
**Type:** class
**Extends:** `Behavior<Breeze>`

## Methods

### LongJump

```java
public public LongJump()
```

**Returns:** `public`

### canRun

```java
public static boolean canRun(ServerLevel p_338176_, Breeze p_338459_)
```

**Parameters:**

- `p_338176_` (`ServerLevel`)
- `p_338459_` (`Breeze`)

**Returns:** `public static boolean`

### checkExtraStartConditions

```java
protected boolean checkExtraStartConditions(ServerLevel p_312131_, Breeze p_312686_)
```

**Parameters:**

- `p_312131_` (`ServerLevel`)
- `p_312686_` (`Breeze`)

**Returns:** `protected boolean`

### canRun

```java
return canRun()
```

**Returns:** `return`

### canStillUse

```java
protected boolean canStillUse(ServerLevel p_312482_, Breeze p_312019_, long p_312448_)
```

**Parameters:**

- `p_312482_` (`ServerLevel`)
- `p_312019_` (`Breeze`)
- `p_312448_` (`long`)

**Returns:** `protected boolean`

### start

```java
protected void start(ServerLevel p_312817_, Breeze p_311902_, long p_312420_)
```

**Parameters:**

- `p_312817_` (`ServerLevel`)
- `p_311902_` (`Breeze`)
- `p_312420_` (`long`)

**Returns:** `protected void`

### tick

```java
protected void tick(ServerLevel p_312091_, Breeze p_312923_, long p_312404_)
```

**Parameters:**

- `p_312091_` (`ServerLevel`)
- `p_312923_` (`Breeze`)
- `p_312404_` (`long`)

**Returns:** `protected void`

### stop

```java
protected void stop(ServerLevel p_312766_, Breeze p_312924_, long p_312793_)
```

**Parameters:**

- `p_312766_` (`ServerLevel`)
- `p_312924_` (`Breeze`)
- `p_312793_` (`long`)

**Returns:** `protected void`

### isFinishedInhaling

```java
private static boolean isFinishedInhaling(Breeze p_312012_)
```

**Parameters:**

- `p_312012_` (`Breeze`)

**Returns:** `private static boolean`

### isFinishedJumping

```java
private static boolean isFinishedJumping(Breeze p_316638_)
```

**Parameters:**

- `p_316638_` (`Breeze`)

**Returns:** `private static boolean`

### outOfAggroRange

```java
private static boolean outOfAggroRange(Breeze p_312045_, LivingEntity p_312043_)
```

**Parameters:**

- `p_312045_` (`Breeze`)
- `p_312043_` (`LivingEntity`)

**Returns:** `private static boolean`

### tooCloseForJump

```java
private static boolean tooCloseForJump(Breeze p_312356_, LivingEntity p_312654_)
```

**Parameters:**

- `p_312356_` (`Breeze`)
- `p_312654_` (`LivingEntity`)

**Returns:** `private static boolean`

### canJumpFromCurrentPosition

```java
private static boolean canJumpFromCurrentPosition(ServerLevel p_312261_, Breeze p_312824_)
```

**Parameters:**

- `p_312261_` (`ServerLevel`)
- `p_312824_` (`Breeze`)

**Returns:** `private static boolean`

### calculateOptimalJumpVector

```java
private static Optional<Vec3> calculateOptimalJumpVector(Breeze p_312651_, RandomSource p_312364_, Vec3 p_312758_)
```

**Parameters:**

- `p_312651_` (`Breeze`)
- `p_312364_` (`RandomSource`)
- `p_312758_` (`Vec3`)

**Returns:** `private static Optional<Vec3>`
