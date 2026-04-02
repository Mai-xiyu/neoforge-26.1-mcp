# BlockPredicate

**Package:** `net.minecraft.world.level.levelgen.blockpredicates`
**Type:** interface
**Extends:** `BiPredicate<WorldGenLevel, BlockPos>`

## Methods

### type

```java
BlockPredicateType<?> type()
```

**Returns:** `BlockPredicateType<?>`

### allOf

```java
static BlockPredicate allOf(List<BlockPredicate> p_190413_)
```

**Parameters:**

- `p_190413_` (`List<BlockPredicate>`)

**Returns:** `static BlockPredicate`

### AllOfPredicate

```java
return new AllOfPredicate()
```

**Returns:** `return new`

### allOf

```java
static BlockPredicate allOf(BlockPredicate[]... p_190418_)
```

**Parameters:**

- `p_190418_` (`BlockPredicate[]...`)

**Returns:** `static BlockPredicate`

### allOf

```java
static BlockPredicate allOf(BlockPredicate p_190405_, BlockPredicate p_190406_)
```

**Parameters:**

- `p_190405_` (`BlockPredicate`)
- `p_190406_` (`BlockPredicate`)

**Returns:** `static BlockPredicate`

### anyOf

```java
static BlockPredicate anyOf(List<BlockPredicate> p_190426_)
```

**Parameters:**

- `p_190426_` (`List<BlockPredicate>`)

**Returns:** `static BlockPredicate`

### AnyOfPredicate

```java
return new AnyOfPredicate()
```

**Returns:** `return new`

### anyOf

```java
static BlockPredicate anyOf(BlockPredicate[]... p_190431_)
```

**Parameters:**

- `p_190431_` (`BlockPredicate[]...`)

**Returns:** `static BlockPredicate`

### anyOf

```java
static BlockPredicate anyOf(BlockPredicate p_190421_, BlockPredicate p_190422_)
```

**Parameters:**

- `p_190421_` (`BlockPredicate`)
- `p_190422_` (`BlockPredicate`)

**Returns:** `static BlockPredicate`

### matchesBlocks

```java
static BlockPredicate matchesBlocks(Vec3i p_224772_, List<Block> p_224773_)
```

**Parameters:**

- `p_224772_` (`Vec3i`)
- `p_224773_` (`List<Block>`)

**Returns:** `static BlockPredicate`

### matchesBlocks

```java
static BlockPredicate matchesBlocks(List<Block> p_198312_)
```

**Parameters:**

- `p_198312_` (`List<Block>`)

**Returns:** `static BlockPredicate`

### matchesBlocks

```java
return matchesBlocks()
```

**Returns:** `return`

### matchesBlocks

```java
static BlockPredicate matchesBlocks(Vec3i p_224775_, Block[]... p_224776_)
```

**Parameters:**

- `p_224775_` (`Vec3i`)
- `p_224776_` (`Block[]...`)

**Returns:** `static BlockPredicate`

### matchesBlocks

```java
static BlockPredicate matchesBlocks(Block[]... p_224781_)
```

**Parameters:**

- `p_224781_` (`Block[]...`)

**Returns:** `static BlockPredicate`

### matchesBlocks

```java
return matchesBlocks()
```

**Returns:** `return`

### matchesTag

```java
static BlockPredicate matchesTag(Vec3i p_224769_, TagKey<Block> p_224770_)
```

**Parameters:**

- `p_224769_` (`Vec3i`)
- `p_224770_` (`TagKey<Block>`)

**Returns:** `static BlockPredicate`

### MatchingBlockTagPredicate

```java
return new MatchingBlockTagPredicate()
```

**Returns:** `return new`

### matchesTag

```java
static BlockPredicate matchesTag(TagKey<Block> p_204678_)
```

**Parameters:**

- `p_204678_` (`TagKey<Block>`)

**Returns:** `static BlockPredicate`

### matchesTag

```java
return matchesTag()
```

**Returns:** `return`

### matchesFluids

```java
static BlockPredicate matchesFluids(Vec3i p_224785_, List<Fluid> p_224786_)
```

**Parameters:**

- `p_224785_` (`Vec3i`)
- `p_224786_` (`List<Fluid>`)

**Returns:** `static BlockPredicate`

### matchesFluids

```java
static BlockPredicate matchesFluids(Vec3i p_224778_, Fluid[]... p_224779_)
```

**Parameters:**

- `p_224778_` (`Vec3i`)
- `p_224779_` (`Fluid[]...`)

**Returns:** `static BlockPredicate`

### matchesFluids

```java
static BlockPredicate matchesFluids(Fluid[]... p_224783_)
```

**Parameters:**

- `p_224783_` (`Fluid[]...`)

**Returns:** `static BlockPredicate`

### matchesFluids

```java
return matchesFluids()
```

**Returns:** `return`

### not

```java
static BlockPredicate not(BlockPredicate p_190403_)
```

**Parameters:**

- `p_190403_` (`BlockPredicate`)

**Returns:** `static BlockPredicate`

### NotPredicate

```java
return new NotPredicate()
```

**Returns:** `return new`

### replaceable

```java
static BlockPredicate replaceable(Vec3i p_190411_)
```

**Parameters:**

- `p_190411_` (`Vec3i`)

**Returns:** `static BlockPredicate`

### ReplaceablePredicate

```java
return new ReplaceablePredicate()
```

**Returns:** `return new`

### replaceable

```java
static BlockPredicate replaceable()
```

**Returns:** `static BlockPredicate`

### replaceable

```java
return replaceable()
```

**Returns:** `return`

### wouldSurvive

```java
static BlockPredicate wouldSurvive(BlockState p_190400_, Vec3i p_190401_)
```

**Parameters:**

- `p_190400_` (`BlockState`)
- `p_190401_` (`Vec3i`)

**Returns:** `static BlockPredicate`

### WouldSurvivePredicate

```java
return new WouldSurvivePredicate()
```

**Returns:** `return new`

### hasSturdyFace

```java
static BlockPredicate hasSturdyFace(Vec3i p_198309_, Direction p_198310_)
```

**Parameters:**

- `p_198309_` (`Vec3i`)
- `p_198310_` (`Direction`)

**Returns:** `static BlockPredicate`

### HasSturdyFacePredicate

```java
return new HasSturdyFacePredicate()
```

**Returns:** `return new`

### hasSturdyFace

```java
static BlockPredicate hasSturdyFace(Direction p_198914_)
```

**Parameters:**

- `p_198914_` (`Direction`)

**Returns:** `static BlockPredicate`

### hasSturdyFace

```java
return hasSturdyFace()
```

**Returns:** `return`

### solid

```java
static BlockPredicate solid(Vec3i p_190424_)
```

**Parameters:**

- `p_190424_` (`Vec3i`)

**Returns:** `static BlockPredicate`

### SolidPredicate

```java
return new SolidPredicate()
```

**Returns:** `return new`

### solid

```java
static BlockPredicate solid()
```

**Returns:** `static BlockPredicate`

### solid

```java
return solid()
```

**Returns:** `return`

### noFluid

```java
static BlockPredicate noFluid()
```

**Returns:** `static BlockPredicate`

### noFluid

```java
return noFluid()
```

**Returns:** `return`

### noFluid

```java
static BlockPredicate noFluid(Vec3i p_249383_)
```

**Parameters:**

- `p_249383_` (`Vec3i`)

**Returns:** `static BlockPredicate`

### matchesFluids

```java
return matchesFluids()
```

**Returns:** `return`

### insideWorld

```java
static BlockPredicate insideWorld(Vec3i p_190434_)
```

**Parameters:**

- `p_190434_` (`Vec3i`)

**Returns:** `static BlockPredicate`

### InsideWorldBoundsPredicate

```java
return new InsideWorldBoundsPredicate()
```

**Returns:** `return new`

### alwaysTrue

```java
static BlockPredicate alwaysTrue()
```

**Returns:** `static BlockPredicate`

### unobstructed

```java
static BlockPredicate unobstructed(Vec3i p_345358_)
```

**Parameters:**

- `p_345358_` (`Vec3i`)

**Returns:** `static BlockPredicate`

### UnobstructedPredicate

```java
return new UnobstructedPredicate()
```

**Returns:** `return new`

### unobstructed

```java
static BlockPredicate unobstructed()
```

**Returns:** `static BlockPredicate`

### unobstructed

```java
return unobstructed()
```

**Returns:** `return`
