# FeaturePoolElement

**Package:** `net.minecraft.world.level.levelgen.structure.pools`
**Type:** class
**Extends:** `StructurePoolElement`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FeaturePoolElement>` |  |

## Methods

### FeaturePoolElement

```java
protected FeaturePoolElement(Holder<PlacedFeature> p_210209_, StructureTemplatePool.Projection p_210210_)
```

**Parameters:**

- `p_210209_` (`Holder<PlacedFeature>`)
- `p_210210_` (`StructureTemplatePool.Projection`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### fillDefaultJigsawNBT

```java
private CompoundTag fillDefaultJigsawNBT()
```

**Returns:** `private CompoundTag`

### getSize

```java
public Vec3i getSize(StructureTemplateManager p_227192_, Rotation p_227193_)
```

**Parameters:**

- `p_227192_` (`StructureTemplateManager`)
- `p_227193_` (`Rotation`)

**Returns:** `Vec3i`

### getShuffledJigsawBlocks

```java
public List<StructureTemplate.StructureBlockInfo> getShuffledJigsawBlocks(StructureTemplateManager p_227199_, BlockPos p_227200_, Rotation p_227201_, RandomSource p_227202_)
```

**Parameters:**

- `p_227199_` (`StructureTemplateManager`)
- `p_227200_` (`BlockPos`)
- `p_227201_` (`Rotation`)
- `p_227202_` (`RandomSource`)

**Returns:** `List<StructureTemplate.StructureBlockInfo>`

### getBoundingBox

```java
public BoundingBox getBoundingBox(StructureTemplateManager p_227195_, BlockPos p_227196_, Rotation p_227197_)
```

**Parameters:**

- `p_227195_` (`StructureTemplateManager`)
- `p_227196_` (`BlockPos`)
- `p_227197_` (`Rotation`)

**Returns:** `BoundingBox`

### place

```java
public boolean place(StructureTemplateManager p_227181_, WorldGenLevel p_227182_, StructureManager p_227183_, ChunkGenerator p_227184_, BlockPos p_227185_, BlockPos p_227186_, Rotation p_227187_, BoundingBox p_227188_, RandomSource p_227189_, LiquidSettings p_352143_, boolean p_227190_)
```

**Parameters:**

- `p_227181_` (`StructureTemplateManager`)
- `p_227182_` (`WorldGenLevel`)
- `p_227183_` (`StructureManager`)
- `p_227184_` (`ChunkGenerator`)
- `p_227185_` (`BlockPos`)
- `p_227186_` (`BlockPos`)
- `p_227187_` (`Rotation`)
- `p_227188_` (`BoundingBox`)
- `p_227189_` (`RandomSource`)
- `p_352143_` (`LiquidSettings`)
- `p_227190_` (`boolean`)

**Returns:** `boolean`

### getType

```java
public StructurePoolElementType<?> getType()
```

**Returns:** `StructurePoolElementType<?>`

### toString

```java
public String toString()
```

**Returns:** `String`
