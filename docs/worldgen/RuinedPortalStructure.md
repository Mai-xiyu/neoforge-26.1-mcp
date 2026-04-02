# RuinedPortalStructure

**Package:** `net.minecraft.world.level.levelgen.structure.structures`
**Type:** class
**Extends:** `Structure`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RuinedPortalStructure>` |  |

## Methods

### RuinedPortalStructure

```java
public RuinedPortalStructure(Structure.StructureSettings p_229260_, List<RuinedPortalStructure.Setup> p_229261_)
```

**Parameters:**

- `p_229260_` (`Structure.StructureSettings`)
- `p_229261_` (`List<RuinedPortalStructure.Setup>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### RuinedPortalStructure

```java
public RuinedPortalStructure(Structure.StructureSettings p_229257_, RuinedPortalStructure.Setup p_229258_)
```

**Parameters:**

- `p_229257_` (`Structure.StructureSettings`)
- `p_229258_` (`RuinedPortalStructure.Setup`)

**Returns:** `public`

### findGenerationPoint

```java
public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_229285_)
```

**Parameters:**

- `p_229285_` (`Structure.GenerationContext`)

**Returns:** `Optional<Structure.GenerationStub>`

### IllegalStateException

```java
throw new IllegalStateException()
```

**Returns:** `throw new`

### sample

```java
private static boolean sample(WorldgenRandom p_229282_, float p_229283_)
```

**Parameters:**

- `p_229282_` (`WorldgenRandom`)
- `p_229283_` (`float`)

**Returns:** `private static boolean`

### isCold

```java
private static boolean isCold(BlockPos p_229301_, Holder<Biome> p_229302_)
```

**Parameters:**

- `p_229301_` (`BlockPos`)
- `p_229302_` (`Holder<Biome>`)

**Returns:** `private static boolean`

### findSuitableY

```java
private static int findSuitableY(RandomSource p_229267_, ChunkGenerator p_229268_, RuinedPortalPiece.VerticalPlacement p_229269_, boolean p_229270_, int p_229271_, int p_229272_, BoundingBox p_229273_, LevelHeightAccessor p_229274_, RandomState p_229275_)
```

**Parameters:**

- `p_229267_` (`RandomSource`)
- `p_229268_` (`ChunkGenerator`)
- `p_229269_` (`RuinedPortalPiece.VerticalPlacement`)
- `p_229270_` (`boolean`)
- `p_229271_` (`int`)
- `p_229272_` (`int`)
- `p_229273_` (`BoundingBox`)
- `p_229274_` (`LevelHeightAccessor`)
- `p_229275_` (`RandomState`)

**Returns:** `private static int`

### getRandomWithinInterval

```java
private static int getRandomWithinInterval(RandomSource p_229263_, int p_229264_, int p_229265_)
```

**Parameters:**

- `p_229263_` (`RandomSource`)
- `p_229264_` (`int`)
- `p_229265_` (`int`)

**Returns:** `private static int`

### type

```java
public StructureType<?> type()
```

**Returns:** `StructureType<?>`

### Setup

```java
public static record Setup(RuinedPortalPiece.VerticalPlacement placement, float airPocketProbability, float mossiness, boolean overgrown, boolean vines, boolean canBeCold, boolean replaceWithBlackstone, float weight)
```

**Parameters:**

- `placement` (`RuinedPortalPiece.VerticalPlacement`)
- `airPocketProbability` (`float`)
- `mossiness` (`float`)
- `overgrown` (`boolean`)
- `vines` (`boolean`)
- `canBeCold` (`boolean`)
- `replaceWithBlackstone` (`boolean`)
- `weight` (`float`)

**Returns:** `public static record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Setup` | record |  |
