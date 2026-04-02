# EmptyPoolElement

**Package:** `net.minecraft.world.level.levelgen.structure.pools`
**Type:** class
**Extends:** `StructurePoolElement`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<EmptyPoolElement>` |  |
| `INSTANCE` | `EmptyPoolElement` |  |

## Methods

### EmptyPoolElement

```java
private EmptyPoolElement()
```

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getSize

```java
public Vec3i getSize(StructureTemplateManager p_227169_, Rotation p_227170_)
```

**Parameters:**

- `p_227169_` (`StructureTemplateManager`)
- `p_227170_` (`Rotation`)

**Returns:** `Vec3i`

### getShuffledJigsawBlocks

```java
public List<StructureTemplate.StructureBlockInfo> getShuffledJigsawBlocks(StructureTemplateManager p_227176_, BlockPos p_227177_, Rotation p_227178_, RandomSource p_227179_)
```

**Parameters:**

- `p_227176_` (`StructureTemplateManager`)
- `p_227177_` (`BlockPos`)
- `p_227178_` (`Rotation`)
- `p_227179_` (`RandomSource`)

**Returns:** `List<StructureTemplate.StructureBlockInfo>`

### getBoundingBox

```java
public BoundingBox getBoundingBox(StructureTemplateManager p_227172_, BlockPos p_227173_, Rotation p_227174_)
```

**Parameters:**

- `p_227172_` (`StructureTemplateManager`)
- `p_227173_` (`BlockPos`)
- `p_227174_` (`Rotation`)

**Returns:** `BoundingBox`

### IllegalStateException

```java
throw new IllegalStateException("Invalid call to EmtyPoolElement.getBoundingBox, filter me!")
```

**Parameters:**

- `EmtyPoolElement.getBoundingBox` (`"Invalid call to`)
- `me!"` (`filter`)

**Returns:** `throw new`

### place

```java
public boolean place(StructureTemplateManager p_227158_, WorldGenLevel p_227159_, StructureManager p_227160_, ChunkGenerator p_227161_, BlockPos p_227162_, BlockPos p_227163_, Rotation p_227164_, BoundingBox p_227165_, RandomSource p_227166_, LiquidSettings p_352245_, boolean p_227167_)
```

**Parameters:**

- `p_227158_` (`StructureTemplateManager`)
- `p_227159_` (`WorldGenLevel`)
- `p_227160_` (`StructureManager`)
- `p_227161_` (`ChunkGenerator`)
- `p_227162_` (`BlockPos`)
- `p_227163_` (`BlockPos`)
- `p_227164_` (`Rotation`)
- `p_227165_` (`BoundingBox`)
- `p_227166_` (`RandomSource`)
- `p_352245_` (`LiquidSettings`)
- `p_227167_` (`boolean`)

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
