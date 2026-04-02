# ListPoolElement

**Package:** `net.minecraft.world.level.levelgen.structure.pools`
**Type:** class
**Extends:** `StructurePoolElement`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ListPoolElement>` |  |

## Methods

### ListPoolElement

```java
public ListPoolElement(List<StructurePoolElement> p_210363_, StructureTemplatePool.Projection p_210364_)
```

**Parameters:**

- `p_210363_` (`List<StructurePoolElement>`)
- `p_210364_` (`StructureTemplatePool.Projection`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### IllegalArgumentException

```java
throw new IllegalArgumentException("Elements are empty")
```

**Parameters:**

- `empty"` (`"Elements are`)

**Returns:** `throw new`

### getSize

```java
public Vec3i getSize(StructureTemplateManager p_227283_, Rotation p_227284_)
```

**Parameters:**

- `p_227283_` (`StructureTemplateManager`)
- `p_227284_` (`Rotation`)

**Returns:** `Vec3i`

### Vec3i

```java
return new Vec3i()
```

**Returns:** `return new`

### getShuffledJigsawBlocks

```java
public List<StructureTemplate.StructureBlockInfo> getShuffledJigsawBlocks(StructureTemplateManager p_227290_, BlockPos p_227291_, Rotation p_227292_, RandomSource p_227293_)
```

**Parameters:**

- `p_227290_` (`StructureTemplateManager`)
- `p_227291_` (`BlockPos`)
- `p_227292_` (`Rotation`)
- `p_227293_` (`RandomSource`)

**Returns:** `List<StructureTemplate.StructureBlockInfo>`

### getBoundingBox

```java
public BoundingBox getBoundingBox(StructureTemplateManager p_227286_, BlockPos p_227287_, Rotation p_227288_)
```

**Parameters:**

- `p_227286_` (`StructureTemplateManager`)
- `p_227287_` (`BlockPos`)
- `p_227288_` (`Rotation`)

**Returns:** `BoundingBox`

### place

```java
public boolean place(StructureTemplateManager p_227272_, WorldGenLevel p_227273_, StructureManager p_227274_, ChunkGenerator p_227275_, BlockPos p_227276_, BlockPos p_227277_, Rotation p_227278_, BoundingBox p_227279_, RandomSource p_227280_, LiquidSettings p_352445_, boolean p_227281_)
```

**Parameters:**

- `p_227272_` (`StructureTemplateManager`)
- `p_227273_` (`WorldGenLevel`)
- `p_227274_` (`StructureManager`)
- `p_227275_` (`ChunkGenerator`)
- `p_227276_` (`BlockPos`)
- `p_227277_` (`BlockPos`)
- `p_227278_` (`Rotation`)
- `p_227279_` (`BoundingBox`)
- `p_227280_` (`RandomSource`)
- `p_352445_` (`LiquidSettings`)
- `p_227281_` (`boolean`)

**Returns:** `boolean`

### getType

```java
public StructurePoolElementType<?> getType()
```

**Returns:** `StructurePoolElementType<?>`

### setProjection

```java
public StructurePoolElement setProjection(StructureTemplatePool.Projection p_210373_)
```

**Parameters:**

- `p_210373_` (`StructureTemplatePool.Projection`)

**Returns:** `StructurePoolElement`

### toString

```java
public String toString()
```

**Returns:** `String`

### setProjectionOnEachElement

```java
private void setProjectionOnEachElement(StructureTemplatePool.Projection p_210407_)
```

**Parameters:**

- `p_210407_` (`StructureTemplatePool.Projection`)

**Returns:** `private void`
