# ShipwreckPieces

**Package:** `net.minecraft.world.level.levelgen.structure.structures`
**Type:** class

## Methods

### addRandomPiece

```java
public static ShipwreckPieces.ShipwreckPiece addRandomPiece(StructureTemplateManager p_341897_, BlockPos p_341911_, Rotation p_341901_, StructurePieceAccessor p_341889_, RandomSource p_341928_, boolean p_341941_)
```

**Parameters:**

- `p_341897_` (`StructureTemplateManager`)
- `p_341911_` (`BlockPos`)
- `p_341901_` (`Rotation`)
- `p_341889_` (`StructurePieceAccessor`)
- `p_341928_` (`RandomSource`)
- `p_341941_` (`boolean`)

**Returns:** `public static ShipwreckPieces.ShipwreckPiece`

### ShipwreckPiece

```java
public ShipwreckPiece(StructureTemplateManager p_229354_, ResourceLocation p_229355_, BlockPos p_229356_, Rotation p_229357_, boolean p_229358_)
```

**Parameters:**

- `p_229354_` (`StructureTemplateManager`)
- `p_229355_` (`ResourceLocation`)
- `p_229356_` (`BlockPos`)
- `p_229357_` (`Rotation`)
- `p_229358_` (`boolean`)

**Returns:** `public`

### ShipwreckPiece

```java
public ShipwreckPiece(StructureTemplateManager p_229360_, CompoundTag p_229361_)
```

**Parameters:**

- `p_229360_` (`StructureTemplateManager`)
- `p_229361_` (`CompoundTag`)

**Returns:** `public`

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_229373_, CompoundTag p_229374_)
```

**Parameters:**

- `p_229373_` (`StructurePieceSerializationContext`)
- `p_229374_` (`CompoundTag`)

### makeSettings

```java
private static StructurePlaceSettings makeSettings(Rotation p_229371_)
```

**Parameters:**

- `p_229371_` (`Rotation`)

**Returns:** `private static StructurePlaceSettings`

### handleDataMarker

```java
protected void handleDataMarker(String p_229376_, BlockPos p_229377_, ServerLevelAccessor p_229378_, RandomSource p_229379_, BoundingBox p_229380_)
```

**Parameters:**

- `p_229376_` (`String`)
- `p_229377_` (`BlockPos`)
- `p_229378_` (`ServerLevelAccessor`)
- `p_229379_` (`RandomSource`)
- `p_229380_` (`BoundingBox`)

### postProcess

```java
public void postProcess(WorldGenLevel p_229363_, StructureManager p_229364_, ChunkGenerator p_229365_, RandomSource p_229366_, BoundingBox p_229367_, ChunkPos p_229368_, BlockPos p_229369_)
```

**Parameters:**

- `p_229363_` (`WorldGenLevel`)
- `p_229364_` (`StructureManager`)
- `p_229365_` (`ChunkGenerator`)
- `p_229366_` (`RandomSource`)
- `p_229367_` (`BoundingBox`)
- `p_229368_` (`ChunkPos`)
- `p_229369_` (`BlockPos`)

### isTooBigToFitInWorldGenRegion

```java
public boolean isTooBigToFitInWorldGenRegion()
```

**Returns:** `public boolean`

### calculateBeachedPosition

```java
public int calculateBeachedPosition(int p_341902_, RandomSource p_341891_)
```

**Parameters:**

- `p_341902_` (`int`)
- `p_341891_` (`RandomSource`)

**Returns:** `public int`

### adjustPositionHeight

```java
public void adjustPositionHeight(int p_341929_)
```

**Parameters:**

- `p_341929_` (`int`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ShipwreckPiece` | class |  |
