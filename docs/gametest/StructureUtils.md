# StructureUtils

**Package:** `net.minecraft.gametest.framework`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_Y_SEARCH_RADIUS` | `int` |  |
| `DEFAULT_TEST_STRUCTURES_DIR` | `String` |  |
| `testStructuresDir` | `String` |  |

## Methods

### getRotationForRotationSteps

```java
public static Rotation getRotationForRotationSteps(int p_127836_)
```

**Parameters:**

- `p_127836_` (`int`)

**Returns:** `public static Rotation`

### IllegalArgumentException

```java
throw new IllegalArgumentException("rotationSteps must be a value from 0-3. Got value " + p_127836_)
```

**Parameters:**

- `p_127836_` (`"rotationSteps must be a value from 0-3. Got value " +`)

**Returns:** `throw new`

### getRotationStepsForRotation

```java
public static int getRotationStepsForRotation(Rotation p_177752_)
```

**Parameters:**

- `p_177752_` (`Rotation`)

**Returns:** `public static int`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Unknown rotation value, don't know how many steps it represents: " + p_177752_)
```

**Parameters:**

- `value` (`"Unknown rotation`)
- `p_177752_` (`don't know how many steps it represents: " +`)

**Returns:** `throw new`

### getStructureBounds

```java
public static AABB getStructureBounds(StructureBlockEntity p_127848_)
```

**Parameters:**

- `p_127848_` (`StructureBlockEntity`)

**Returns:** `public static AABB`

### getStructureBoundingBox

```java
public static BoundingBox getStructureBoundingBox(StructureBlockEntity p_127905_)
```

**Parameters:**

- `p_127905_` (`StructureBlockEntity`)

**Returns:** `public static BoundingBox`

### getStructureOrigin

```java
public static BlockPos getStructureOrigin(StructureBlockEntity p_308940_)
```

**Parameters:**

- `p_308940_` (`StructureBlockEntity`)

**Returns:** `public static BlockPos`

### addCommandBlockAndButtonToStartTest

```java
public static void addCommandBlockAndButtonToStartTest(BlockPos p_127876_, BlockPos p_127877_, Rotation p_127878_, ServerLevel p_127879_)
```

**Parameters:**

- `p_127876_` (`BlockPos`)
- `p_127877_` (`BlockPos`)
- `p_127878_` (`Rotation`)
- `p_127879_` (`ServerLevel`)

**Returns:** `public static void`

### createNewEmptyStructureBlock

```java
public static void createNewEmptyStructureBlock(String p_177765_, BlockPos p_177766_, Vec3i p_177767_, Rotation p_177768_, ServerLevel p_177769_)
```

**Parameters:**

- `p_177765_` (`String`)
- `p_177766_` (`BlockPos`)
- `p_177767_` (`Vec3i`)
- `p_177768_` (`Rotation`)
- `p_177769_` (`ServerLevel`)

**Returns:** `public static void`

### clearSpaceForStructure

```java
 clearSpaceForStructure()
```

**Returns:** ``

### prepareTestStructure

```java
public static StructureBlockEntity prepareTestStructure(GameTestInfo p_312267_, BlockPos p_309600_, Rotation p_309541_, ServerLevel p_309609_)
```

**Parameters:**

- `p_312267_` (`GameTestInfo`)
- `p_309600_` (`BlockPos`)
- `p_309541_` (`Rotation`)
- `p_309609_` (`ServerLevel`)

**Returns:** `public static StructureBlockEntity`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Invalid rotation: " + p_309541_)
```

**Parameters:**

- `p_309541_` (`"Invalid rotation: " +`)

**Returns:** `throw new`

### forceLoadChunks

```java
 forceLoadChunks()
```

**Returns:** ``

### clearSpaceForStructure

```java
 clearSpaceForStructure()
```

**Returns:** ``

### encaseStructure

```java
public static void encaseStructure(AABB p_326863_, ServerLevel p_326882_, boolean p_326950_)
```

**Parameters:**

- `p_326863_` (`AABB`)
- `p_326882_` (`ServerLevel`)
- `p_326950_` (`boolean`)

**Returns:** `public static void`

### removeBarriers

```java
public static void removeBarriers(AABB p_326925_, ServerLevel p_326815_)
```

**Parameters:**

- `p_326925_` (`AABB`)
- `p_326815_` (`ServerLevel`)

**Returns:** `public static void`

### forceLoadChunks

```java
private static void forceLoadChunks(BoundingBox p_308909_, ServerLevel p_127859_)
```

**Parameters:**

- `p_308909_` (`BoundingBox`)
- `p_127859_` (`ServerLevel`)

**Returns:** `private static void`

### clearSpaceForStructure

```java
public static void clearSpaceForStructure(BoundingBox p_127850_, ServerLevel p_127852_)
```

**Parameters:**

- `p_127850_` (`BoundingBox`)
- `p_127852_` (`ServerLevel`)

**Returns:** `public static void`

### getTransformedFarCorner

```java
public static BlockPos getTransformedFarCorner(BlockPos p_308915_, Vec3i p_309132_, Rotation p_308895_)
```

**Parameters:**

- `p_308915_` (`BlockPos`)
- `p_309132_` (`Vec3i`)
- `p_308895_` (`Rotation`)

**Returns:** `public static BlockPos`

### getStructureBoundingBox

```java
public static BoundingBox getStructureBoundingBox(BlockPos p_177761_, Vec3i p_177762_, Rotation p_177763_)
```

**Parameters:**

- `p_177761_` (`BlockPos`)
- `p_177762_` (`Vec3i`)
- `p_177763_` (`Rotation`)

**Returns:** `public static BoundingBox`

### findStructureBlockContainingPos

```java
public static Optional<BlockPos> findStructureBlockContainingPos(BlockPos p_127854_, int p_127855_, ServerLevel p_127856_)
```

**Parameters:**

- `p_127854_` (`BlockPos`)
- `p_127855_` (`int`)
- `p_127856_` (`ServerLevel`)

**Returns:** `public static Optional<BlockPos>`

### findNearestStructureBlock

```java
public static Optional<BlockPos> findNearestStructureBlock(BlockPos p_127907_, int p_127908_, ServerLevel p_127909_)
```

**Parameters:**

- `p_127907_` (`BlockPos`)
- `p_127908_` (`int`)
- `p_127909_` (`ServerLevel`)

**Returns:** `public static Optional<BlockPos>`

### findStructureByTestFunction

```java
public static Stream<BlockPos> findStructureByTestFunction(BlockPos p_340830_, int p_340828_, ServerLevel p_340893_, String p_341292_)
```

**Parameters:**

- `p_340830_` (`BlockPos`)
- `p_340828_` (`int`)
- `p_340893_` (`ServerLevel`)
- `p_341292_` (`String`)

**Returns:** `public static Stream<BlockPos>`

### findStructureBlocks

```java
public static Stream<BlockPos> findStructureBlocks(BlockPos p_127911_, int p_127912_, ServerLevel p_127913_)
```

**Parameters:**

- `p_127911_` (`BlockPos`)
- `p_127912_` (`int`)
- `p_127913_` (`ServerLevel`)

**Returns:** `public static Stream<BlockPos>`

### createStructureBlock

```java
private static StructureBlockEntity createStructureBlock(GameTestInfo p_312256_, BlockPos p_127892_, Rotation p_127893_, ServerLevel p_127894_)
```

**Parameters:**

- `p_312256_` (`GameTestInfo`)
- `p_127892_` (`BlockPos`)
- `p_127893_` (`Rotation`)
- `p_127894_` (`ServerLevel`)

**Returns:** `private static StructureBlockEntity`

### getBoundingBoxAtGround

```java
private static BoundingBox getBoundingBoxAtGround(BlockPos p_341291_, int p_341122_, ServerLevel p_341148_)
```

**Parameters:**

- `p_341291_` (`BlockPos`)
- `p_341122_` (`int`)
- `p_341148_` (`ServerLevel`)

**Returns:** `private static BoundingBox`

### lookedAtStructureBlockPos

```java
public static Stream<BlockPos> lookedAtStructureBlockPos(BlockPos p_320206_, Entity p_320494_, ServerLevel p_320139_)
```

**Parameters:**

- `p_320206_` (`BlockPos`)
- `p_320494_` (`Entity`)
- `p_320139_` (`ServerLevel`)

**Returns:** `public static Stream<BlockPos>`

### clearBlock

```java
private static void clearBlock(int p_127842_, BlockPos p_127843_, ServerLevel p_127844_)
```

**Parameters:**

- `p_127842_` (`int`)
- `p_127843_` (`BlockPos`)
- `p_127844_` (`ServerLevel`)

**Returns:** `private static void`

### doesStructureContain

```java
private static boolean doesStructureContain(BlockPos p_127868_, BlockPos p_127869_, ServerLevel p_127870_)
```

**Parameters:**

- `p_127868_` (`BlockPos`)
- `p_127869_` (`BlockPos`)
- `p_127870_` (`ServerLevel`)

**Returns:** `private static boolean`
