# StructurePlaceSettings

**Package:** `net.minecraft.world.level.levelgen.structure.templatesystem`
**Type:** class

## Methods

### copy

```java
public StructurePlaceSettings copy()
```

**Returns:** `public StructurePlaceSettings`

### setMirror

```java
public StructurePlaceSettings setMirror(Mirror p_74378_)
```

**Parameters:**

- `p_74378_` (`Mirror`)

**Returns:** `public StructurePlaceSettings`

### setRotation

```java
public StructurePlaceSettings setRotation(Rotation p_74380_)
```

**Parameters:**

- `p_74380_` (`Rotation`)

**Returns:** `public StructurePlaceSettings`

### setRotationPivot

```java
public StructurePlaceSettings setRotationPivot(BlockPos p_74386_)
```

**Parameters:**

- `p_74386_` (`BlockPos`)

**Returns:** `public StructurePlaceSettings`

### setIgnoreEntities

```java
public StructurePlaceSettings setIgnoreEntities(boolean p_74393_)
```

**Parameters:**

- `p_74393_` (`boolean`)

**Returns:** `public StructurePlaceSettings`

### setBoundingBox

```java
public StructurePlaceSettings setBoundingBox(BoundingBox p_74382_)
```

**Parameters:**

- `p_74382_` (`BoundingBox`)

**Returns:** `public StructurePlaceSettings`

### setRandom

```java
public StructurePlaceSettings setRandom(RandomSource p_230325_)
```

**Parameters:**

- `p_230325_` (`RandomSource`)

**Returns:** `public StructurePlaceSettings`

### setLiquidSettings

```java
public StructurePlaceSettings setLiquidSettings(LiquidSettings p_352241_)
```

**Parameters:**

- `p_352241_` (`LiquidSettings`)

**Returns:** `public StructurePlaceSettings`

### setKnownShape

```java
public StructurePlaceSettings setKnownShape(boolean p_74403_)
```

**Parameters:**

- `p_74403_` (`boolean`)

**Returns:** `public StructurePlaceSettings`

### clearProcessors

```java
public StructurePlaceSettings clearProcessors()
```

**Returns:** `public StructurePlaceSettings`

### addProcessor

```java
public StructurePlaceSettings addProcessor(StructureProcessor p_74384_)
```

**Parameters:**

- `p_74384_` (`StructureProcessor`)

**Returns:** `public StructurePlaceSettings`

### popProcessor

```java
public StructurePlaceSettings popProcessor(StructureProcessor p_74398_)
```

**Parameters:**

- `p_74398_` (`StructureProcessor`)

**Returns:** `public StructurePlaceSettings`

### getMirror

```java
public Mirror getMirror()
```

**Returns:** `public Mirror`

### getRotation

```java
public Rotation getRotation()
```

**Returns:** `public Rotation`

### getRotationPivot

```java
public BlockPos getRotationPivot()
```

**Returns:** `public BlockPos`

### getRandom

```java
public RandomSource getRandom(BlockPos p_230327_)
```

**Parameters:**

- `p_230327_` (`BlockPos`)

**Returns:** `public RandomSource`

### isIgnoreEntities

```java
public boolean isIgnoreEntities()
```

**Returns:** `public boolean`

### getBoundingBox

```java
public BoundingBox getBoundingBox()
```

**Returns:** `BoundingBox`

### getKnownShape

```java
public boolean getKnownShape()
```

**Returns:** `public boolean`

### getProcessors

```java
public List<StructureProcessor> getProcessors()
```

**Returns:** `public List<StructureProcessor>`

### shouldApplyWaterlogging

```java
public boolean shouldApplyWaterlogging()
```

**Returns:** `public boolean`

### getRandomPalette

```java
public StructureTemplate.Palette getRandomPalette(List<StructureTemplate.Palette> p_74388_, BlockPos p_74389_)
```

**Parameters:**

- `p_74388_` (`List<StructureTemplate.Palette>`)
- `p_74389_` (`BlockPos`)

**Returns:** `public StructureTemplate.Palette`

### IllegalStateException

```java
throw new IllegalStateException("No palettes")
```

**Parameters:**

- `palettes"` (`"No`)

**Returns:** `throw new`

### setFinalizeEntities

```java
public StructurePlaceSettings setFinalizeEntities(boolean p_74406_)
```

**Parameters:**

- `p_74406_` (`boolean`)

**Returns:** `public StructurePlaceSettings`

### shouldFinalizeEntities

```java
public boolean shouldFinalizeEntities()
```

**Returns:** `public boolean`
