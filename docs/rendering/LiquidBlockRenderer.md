# LiquidBlockRenderer

**Package:** `net.minecraft.client.renderer.block`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### setupSprites

```java
protected void setupSprites()
```

**Returns:** `protected void`

### isNeighborSameFluid

```java
private static boolean isNeighborSameFluid(FluidState p_203186_, FluidState p_203187_)
```

**Parameters:**

- `p_203186_` (`FluidState`)
- `p_203187_` (`FluidState`)

**Returns:** `private static boolean`

### isNeighborStateHidingOverlay

```java
private static boolean isNeighborStateHidingOverlay(FluidState selfState, BlockState otherState, Direction neighborFace)
```

**Parameters:**

- `selfState` (`FluidState`)
- `otherState` (`BlockState`)
- `neighborFace` (`Direction`)

**Returns:** `private static boolean`

### isFaceOccludedByState

```java
private static boolean isFaceOccludedByState(BlockGetter p_110979_, Direction p_110980_, float p_110981_, BlockPos p_110982_, BlockState p_110983_)
```

**Parameters:**

- `p_110979_` (`BlockGetter`)
- `p_110980_` (`Direction`)
- `p_110981_` (`float`)
- `p_110982_` (`BlockPos`)
- `p_110983_` (`BlockState`)

**Returns:** `private static boolean`

### isFaceOccludedByNeighbor

```java
private static boolean isFaceOccludedByNeighbor(BlockGetter p_203180_, BlockPos p_203181_, Direction p_203182_, float p_203183_, BlockState p_203184_)
```

**Parameters:**

- `p_203180_` (`BlockGetter`)
- `p_203181_` (`BlockPos`)
- `p_203182_` (`Direction`)
- `p_203183_` (`float`)
- `p_203184_` (`BlockState`)

**Returns:** `private static boolean`

### isFaceOccludedBySelf

```java
private static boolean isFaceOccludedBySelf(BlockGetter p_110960_, BlockPos p_110961_, BlockState p_110962_, Direction p_110963_)
```

**Parameters:**

- `p_110960_` (`BlockGetter`)
- `p_110961_` (`BlockPos`)
- `p_110962_` (`BlockState`)
- `p_110963_` (`Direction`)

**Returns:** `private static boolean`

### shouldRenderFace

```java
public static boolean shouldRenderFace(BlockAndTintGetter p_203167_, BlockPos p_203168_, FluidState p_203169_, BlockState p_203170_, Direction p_203171_, FluidState p_203172_)
```

**Parameters:**

- `p_203167_` (`BlockAndTintGetter`)
- `p_203168_` (`BlockPos`)
- `p_203169_` (`FluidState`)
- `p_203170_` (`BlockState`)
- `p_203171_` (`Direction`)
- `p_203172_` (`FluidState`)

**Returns:** `boolean`

### shouldRenderFace

```java
public static boolean shouldRenderFace(BlockAndTintGetter level, BlockPos pos, FluidState fluidState, BlockState selfState, Direction direction, BlockState otherState)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `fluidState` (`FluidState`)
- `selfState` (`BlockState`)
- `direction` (`Direction`)
- `otherState` (`BlockState`)

**Returns:** `public static boolean`

### tesselate

```java
public void tesselate(BlockAndTintGetter p_234370_, BlockPos p_234371_, VertexConsumer p_234372_, BlockState p_234373_, FluidState p_234374_)
```

**Parameters:**

- `p_234370_` (`BlockAndTintGetter`)
- `p_234371_` (`BlockPos`)
- `p_234372_` (`VertexConsumer`)
- `p_234373_` (`BlockState`)
- `p_234374_` (`FluidState`)

**Returns:** `public void`

### calculateAverageHeight

```java
private float calculateAverageHeight(BlockAndTintGetter p_203150_, Fluid p_203151_, float p_203152_, float p_203153_, float p_203154_, BlockPos p_203155_)
```

**Parameters:**

- `p_203150_` (`BlockAndTintGetter`)
- `p_203151_` (`Fluid`)
- `p_203152_` (`float`)
- `p_203153_` (`float`)
- `p_203154_` (`float`)
- `p_203155_` (`BlockPos`)

**Returns:** `private float`

### addWeightedHeight

```java
private void addWeightedHeight(float[] p_203189_, float p_203190_)
```

**Parameters:**

- `p_203189_` (`float[]`)
- `p_203190_` (`float`)

**Returns:** `private void`

### getHeight

```java
private float getHeight(BlockAndTintGetter p_203157_, Fluid p_203158_, BlockPos p_203159_)
```

**Parameters:**

- `p_203157_` (`BlockAndTintGetter`)
- `p_203158_` (`Fluid`)
- `p_203159_` (`BlockPos`)

**Returns:** `private float`

### vertex

```java
private void vertex(VertexConsumer p_110985_, float p_110989_, float p_110990_, float p_110991_, float p_110992_, float p_110993_, float p_350595_, float alpha, float p_350459_, float p_350437_, int p_110994_)
```

**Parameters:**

- `p_110985_` (`VertexConsumer`)
- `p_110989_` (`float`)
- `p_110990_` (`float`)
- `p_110991_` (`float`)
- `p_110992_` (`float`)
- `p_110993_` (`float`)
- `p_350595_` (`float`)
- `alpha` (`float`)
- `p_350459_` (`float`)
- `p_350437_` (`float`)
- `p_110994_` (`int`)

**Returns:** `private void`

### getHeight

```java
private float getHeight(BlockAndTintGetter p_203161_, Fluid p_203162_, BlockPos p_203163_, BlockState p_203164_, FluidState p_203165_)
```

**Parameters:**

- `p_203161_` (`BlockAndTintGetter`)
- `p_203162_` (`Fluid`)
- `p_203163_` (`BlockPos`)
- `p_203164_` (`BlockState`)
- `p_203165_` (`FluidState`)

**Returns:** `private float`

### vertex

```java
private void vertex(VertexConsumer p_110985_, float p_110989_, float p_110990_, float p_110991_, float p_110992_, float p_110993_, float p_350595_, float p_350459_, float p_350437_, int p_110994_)
```

**Parameters:**

- `p_110985_` (`VertexConsumer`)
- `p_110989_` (`float`)
- `p_110990_` (`float`)
- `p_110991_` (`float`)
- `p_110992_` (`float`)
- `p_110993_` (`float`)
- `p_350595_` (`float`)
- `p_350459_` (`float`)
- `p_350437_` (`float`)
- `p_110994_` (`int`)

**Returns:** `private void`

### getLightColor

```java
private int getLightColor(BlockAndTintGetter p_110946_, BlockPos p_110947_)
```

**Parameters:**

- `p_110946_` (`BlockAndTintGetter`)
- `p_110947_` (`BlockPos`)

**Returns:** `private int`
