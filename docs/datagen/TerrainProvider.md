# TerrainProvider

**Package:** `net.minecraft.data.worldgen`
**Type:** class

## Methods

### overworldOffset

```java
public static <C, I extends ToFloatFunction<C>> CubicSpline<C, I> overworldOffset(I p_236636_, I p_236637_, I p_236638_, boolean p_236639_)
```

**Parameters:**

- `p_236636_` (`I`)
- `p_236637_` (`I`)
- `p_236638_` (`I`)
- `p_236639_` (`boolean`)

**Returns:** `public static <C, I extends ToFloatFunction<C>> CubicSpline<C, I>`

### overworldFactor

```java
public static <C, I extends ToFloatFunction<C>> CubicSpline<C, I> overworldFactor(I p_236630_, I p_236631_, I p_236632_, I p_236633_, boolean p_236634_)
```

**Parameters:**

- `p_236630_` (`I`)
- `p_236631_` (`I`)
- `p_236632_` (`I`)
- `p_236633_` (`I`)
- `p_236634_` (`boolean`)

**Returns:** `public static <C, I extends ToFloatFunction<C>> CubicSpline<C, I>`

### overworldJaggedness

```java
public static <C, I extends ToFloatFunction<C>> CubicSpline<C, I> overworldJaggedness(I p_236643_, I p_236644_, I p_236645_, I p_236646_, boolean p_236647_)
```

**Parameters:**

- `p_236643_` (`I`)
- `p_236644_` (`I`)
- `p_236645_` (`I`)
- `p_236646_` (`I`)
- `p_236647_` (`boolean`)

**Returns:** `public static <C, I extends ToFloatFunction<C>> CubicSpline<C, I>`

### buildErosionJaggednessSpline

```java
private static <C, I extends ToFloatFunction<C>> CubicSpline<C, I> buildErosionJaggednessSpline(I p_236614_, I p_236615_, I p_236616_, float p_236617_, float p_236618_, float p_236619_, float p_236620_, ToFloatFunction<Float> p_236621_)
```

**Parameters:**

- `p_236614_` (`I`)
- `p_236615_` (`I`)
- `p_236616_` (`I`)
- `p_236617_` (`float`)
- `p_236618_` (`float`)
- `p_236619_` (`float`)
- `p_236620_` (`float`)
- `p_236621_` (`ToFloatFunction<Float>`)

**Returns:** `private static <C, I extends ToFloatFunction<C>> CubicSpline<C, I>`

### buildRidgeJaggednessSpline

```java
private static <C, I extends ToFloatFunction<C>> CubicSpline<C, I> buildRidgeJaggednessSpline(I p_236608_, I p_236609_, float p_236610_, float p_236611_, ToFloatFunction<Float> p_236612_)
```

**Parameters:**

- `p_236608_` (`I`)
- `p_236609_` (`I`)
- `p_236610_` (`float`)
- `p_236611_` (`float`)
- `p_236612_` (`ToFloatFunction<Float>`)

**Returns:** `private static <C, I extends ToFloatFunction<C>> CubicSpline<C, I>`

### buildWeirdnessJaggednessSpline

```java
private static <C, I extends ToFloatFunction<C>> CubicSpline<C, I> buildWeirdnessJaggednessSpline(I p_236587_, float p_236588_, ToFloatFunction<Float> p_236589_)
```

**Parameters:**

- `p_236587_` (`I`)
- `p_236588_` (`float`)
- `p_236589_` (`ToFloatFunction<Float>`)

**Returns:** `private static <C, I extends ToFloatFunction<C>> CubicSpline<C, I>`

### getErosionFactor

```java
private static <C, I extends ToFloatFunction<C>> CubicSpline<C, I> getErosionFactor(I p_236623_, I p_236624_, I p_236625_, float p_236626_, boolean p_236627_, ToFloatFunction<Float> p_236628_)
```

**Parameters:**

- `p_236623_` (`I`)
- `p_236624_` (`I`)
- `p_236625_` (`I`)
- `p_236626_` (`float`)
- `p_236627_` (`boolean`)
- `p_236628_` (`ToFloatFunction<Float>`)

**Returns:** `private static <C, I extends ToFloatFunction<C>> CubicSpline<C, I>`

### calculateSlope

```java
private static float calculateSlope(float p_236573_, float p_236574_, float p_236575_, float p_236576_)
```

**Parameters:**

- `p_236573_` (`float`)
- `p_236574_` (`float`)
- `p_236575_` (`float`)
- `p_236576_` (`float`)

**Returns:** `private static float`

### buildMountainRidgeSplineWithPoints

```java
private static <C, I extends ToFloatFunction<C>> CubicSpline<C, I> buildMountainRidgeSplineWithPoints(I p_236591_, float p_236592_, boolean p_236593_, ToFloatFunction<Float> p_236594_)
```

**Parameters:**

- `p_236591_` (`I`)
- `p_236592_` (`float`)
- `p_236593_` (`boolean`)
- `p_236594_` (`ToFloatFunction<Float>`)

**Returns:** `private static <C, I extends ToFloatFunction<C>> CubicSpline<C, I>`

### mountainContinentalness

```java
private static float mountainContinentalness(float p_236569_, float p_236570_, float p_236571_)
```

**Parameters:**

- `p_236569_` (`float`)
- `p_236570_` (`float`)
- `p_236571_` (`float`)

**Returns:** `private static float`

### calculateMountainRidgeZeroContinentalnessPoint

```java
private static float calculateMountainRidgeZeroContinentalnessPoint(float p_236567_)
```

**Parameters:**

- `p_236567_` (`float`)

**Returns:** `private static float`

### buildErosionOffsetSpline

```java
public static <C, I extends ToFloatFunction<C>> CubicSpline<C, I> buildErosionOffsetSpline(I p_236596_, I p_236597_, float p_236598_, float p_236599_, float p_236600_, float p_236601_, float p_236602_, float p_236603_, boolean p_236604_, boolean p_236605_, ToFloatFunction<Float> p_236606_)
```

**Parameters:**

- `p_236596_` (`I`)
- `p_236597_` (`I`)
- `p_236598_` (`float`)
- `p_236599_` (`float`)
- `p_236600_` (`float`)
- `p_236601_` (`float`)
- `p_236602_` (`float`)
- `p_236603_` (`float`)
- `p_236604_` (`boolean`)
- `p_236605_` (`boolean`)
- `p_236606_` (`ToFloatFunction<Float>`)

**Returns:** `public static <C, I extends ToFloatFunction<C>> CubicSpline<C, I>`

### ridgeSpline

```java
private static <C, I extends ToFloatFunction<C>> CubicSpline<C, I> ridgeSpline(I p_236578_, float p_236579_, float p_236580_, float p_236581_, float p_236582_, float p_236583_, float p_236584_, ToFloatFunction<Float> p_236585_)
```

**Parameters:**

- `p_236578_` (`I`)
- `p_236579_` (`float`)
- `p_236580_` (`float`)
- `p_236581_` (`float`)
- `p_236582_` (`float`)
- `p_236583_` (`float`)
- `p_236584_` (`float`)
- `p_236585_` (`ToFloatFunction<Float>`)

**Returns:** `private static <C, I extends ToFloatFunction<C>> CubicSpline<C, I>`
