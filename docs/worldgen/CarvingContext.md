# CarvingContext

**Package:** `net.minecraft.world.level.levelgen.carver`
**Type:** class
**Extends:** `WorldGenerationContext`

## Methods

### CarvingContext

```java
public CarvingContext(NoiseBasedChunkGenerator p_224845_, RegistryAccess p_224846_, LevelHeightAccessor p_224847_, NoiseChunk p_224848_, RandomState p_224849_, SurfaceRules.RuleSource p_224850_)
```

**Parameters:**

- `p_224845_` (`NoiseBasedChunkGenerator`)
- `p_224846_` (`RegistryAccess`)
- `p_224847_` (`LevelHeightAccessor`)
- `p_224848_` (`NoiseChunk`)
- `p_224849_` (`RandomState`)
- `p_224850_` (`SurfaceRules.RuleSource`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### topMaterial

```java
public Optional<BlockState> topMaterial(Function<BlockPos, Holder<Biome>> p_190647_, ChunkAccess p_190648_, BlockPos p_190649_, boolean p_190650_)
```

**Parameters:**

- `p_190647_` (`Function<BlockPos, Holder<Biome>>`)
- `p_190648_` (`ChunkAccess`)
- `p_190649_` (`BlockPos`)
- `p_190650_` (`boolean`)

**Returns:** `Optional<BlockState>`

### registryAccess

```java
public RegistryAccess registryAccess()
```

**Returns:** `RegistryAccess`

### randomState

```java
public RandomState randomState()
```

**Returns:** `public RandomState`
