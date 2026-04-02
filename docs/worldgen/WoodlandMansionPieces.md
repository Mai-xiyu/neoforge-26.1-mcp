# WoodlandMansionPieces

**Package:** `net.minecraft.world.level.levelgen.structure.structures`
**Type:** class

## Methods

### generateMansion

```java
public static void generateMansion(StructureTemplateManager p_229986_, BlockPos p_229987_, Rotation p_229988_, List<WoodlandMansionPieces.WoodlandMansionPiece> p_229989_, RandomSource p_229990_)
```

**Parameters:**

- `p_229986_` (`StructureTemplateManager`)
- `p_229987_` (`BlockPos`)
- `p_229988_` (`Rotation`)
- `p_229989_` (`List<WoodlandMansionPieces.WoodlandMansionPiece>`)
- `p_229990_` (`RandomSource`)

**Returns:** `public static void`

### get1x1

```java
public String get1x1(RandomSource p_229995_)
```

**Parameters:**

- `p_229995_` (`RandomSource`)

**Returns:** `String`

### get1x1Secret

```java
public String get1x1Secret(RandomSource p_230000_)
```

**Parameters:**

- `p_230000_` (`RandomSource`)

**Returns:** `String`

### get1x2SideEntrance

```java
public String get1x2SideEntrance(RandomSource p_229997_, boolean p_229998_)
```

**Parameters:**

- `p_229997_` (`RandomSource`)
- `p_229998_` (`boolean`)

**Returns:** `String`

### get1x2FrontEntrance

```java
public String get1x2FrontEntrance(RandomSource p_230002_, boolean p_230003_)
```

**Parameters:**

- `p_230002_` (`RandomSource`)
- `p_230003_` (`boolean`)

**Returns:** `String`

### get1x2Secret

```java
public String get1x2Secret(RandomSource p_230005_)
```

**Parameters:**

- `p_230005_` (`RandomSource`)

**Returns:** `String`

### get2x2

```java
public String get2x2(RandomSource p_230007_)
```

**Parameters:**

- `p_230007_` (`RandomSource`)

**Returns:** `String`

### get2x2Secret

```java
public String get2x2Secret(RandomSource p_230009_)
```

**Parameters:**

- `p_230009_` (`RandomSource`)

**Returns:** `String`

### get1x1

```java
public abstract String get1x1(RandomSource p_230011_)
```

**Parameters:**

- `p_230011_` (`RandomSource`)

**Returns:** `public abstract String`

### get1x1Secret

```java
public abstract String get1x1Secret(RandomSource p_230014_)
```

**Parameters:**

- `p_230014_` (`RandomSource`)

**Returns:** `public abstract String`

### get1x2SideEntrance

```java
public abstract String get1x2SideEntrance(RandomSource p_230012_, boolean p_230013_)
```

**Parameters:**

- `p_230012_` (`RandomSource`)
- `p_230013_` (`boolean`)

**Returns:** `public abstract String`

### get1x2FrontEntrance

```java
public abstract String get1x2FrontEntrance(RandomSource p_230015_, boolean p_230016_)
```

**Parameters:**

- `p_230015_` (`RandomSource`)
- `p_230016_` (`boolean`)

**Returns:** `public abstract String`

### get1x2Secret

```java
public abstract String get1x2Secret(RandomSource p_230017_)
```

**Parameters:**

- `p_230017_` (`RandomSource`)

**Returns:** `public abstract String`

### get2x2

```java
public abstract String get2x2(RandomSource p_230018_)
```

**Parameters:**

- `p_230018_` (`RandomSource`)

**Returns:** `public abstract String`

### get2x2Secret

```java
public abstract String get2x2Secret(RandomSource p_230019_)
```

**Parameters:**

- `p_230019_` (`RandomSource`)

**Returns:** `public abstract String`

### MansionGrid

```java
public MansionGrid(RandomSource p_230043_)
```

**Parameters:**

- `p_230043_` (`RandomSource`)

**Returns:** `public`

### isHouse

```java
public static boolean isHouse(WoodlandMansionPieces.SimpleGrid p_230048_, int p_230049_, int p_230050_)
```

**Parameters:**

- `p_230048_` (`WoodlandMansionPieces.SimpleGrid`)
- `p_230049_` (`int`)
- `p_230050_` (`int`)

**Returns:** `public static boolean`

### isRoomId

```java
public boolean isRoomId(WoodlandMansionPieces.SimpleGrid p_230052_, int p_230053_, int p_230054_, int p_230055_, int p_230056_)
```

**Parameters:**

- `p_230052_` (`WoodlandMansionPieces.SimpleGrid`)
- `p_230053_` (`int`)
- `p_230054_` (`int`)
- `p_230055_` (`int`)
- `p_230056_` (`int`)

**Returns:** `public boolean`

### get1x2RoomDirection

```java
public Direction get1x2RoomDirection(WoodlandMansionPieces.SimpleGrid p_230068_, int p_230069_, int p_230070_, int p_230071_, int p_230072_)
```

**Parameters:**

- `p_230068_` (`WoodlandMansionPieces.SimpleGrid`)
- `p_230069_` (`int`)
- `p_230070_` (`int`)
- `p_230071_` (`int`)
- `p_230072_` (`int`)

**Returns:** `Direction`

### recursiveCorridor

```java
private void recursiveCorridor(WoodlandMansionPieces.SimpleGrid p_230058_, int p_230059_, int p_230060_, Direction p_230061_, int p_230062_)
```

**Parameters:**

- `p_230058_` (`WoodlandMansionPieces.SimpleGrid`)
- `p_230059_` (`int`)
- `p_230060_` (`int`)
- `p_230061_` (`Direction`)
- `p_230062_` (`int`)

**Returns:** `private void`

### cleanEdges

```java
private boolean cleanEdges(WoodlandMansionPieces.SimpleGrid p_230046_)
```

**Parameters:**

- `p_230046_` (`WoodlandMansionPieces.SimpleGrid`)

**Returns:** `private boolean`

### setupThirdFloor

```java
private void setupThirdFloor()
```

**Returns:** `private void`

### identifyRooms

```java
private void identifyRooms(WoodlandMansionPieces.SimpleGrid p_230064_, WoodlandMansionPieces.SimpleGrid p_230065_)
```

**Parameters:**

- `p_230064_` (`WoodlandMansionPieces.SimpleGrid`)
- `p_230065_` (`WoodlandMansionPieces.SimpleGrid`)

**Returns:** `private void`

### MansionPiecePlacer

```java
public MansionPiecePlacer(StructureTemplateManager p_230078_, RandomSource p_230079_)
```

**Parameters:**

- `p_230078_` (`StructureTemplateManager`)
- `p_230079_` (`RandomSource`)

**Returns:** `public`

### createMansion

```java
public void createMansion(BlockPos p_230081_, Rotation p_230082_, List<WoodlandMansionPieces.WoodlandMansionPiece> p_230083_, WoodlandMansionPieces.MansionGrid p_230084_)
```

**Parameters:**

- `p_230081_` (`BlockPos`)
- `p_230082_` (`Rotation`)
- `p_230083_` (`List<WoodlandMansionPieces.WoodlandMansionPiece>`)
- `p_230084_` (`WoodlandMansionPieces.MansionGrid`)

**Returns:** `public void`

### traverseOuterWalls

```java
private void traverseOuterWalls(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230089_, WoodlandMansionPieces.PlacementData p_230090_, WoodlandMansionPieces.SimpleGrid p_230091_, Direction p_230092_, int p_230093_, int p_230094_, int p_230095_, int p_230096_)
```

**Parameters:**

- `p_230089_` (`List<WoodlandMansionPieces.WoodlandMansionPiece>`)
- `p_230090_` (`WoodlandMansionPieces.PlacementData`)
- `p_230091_` (`WoodlandMansionPieces.SimpleGrid`)
- `p_230092_` (`Direction`)
- `p_230093_` (`int`)
- `p_230094_` (`int`)
- `p_230095_` (`int`)
- `p_230096_` (`int`)

**Returns:** `private void`

### createRoof

```java
private void createRoof(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230103_, BlockPos p_230104_, Rotation p_230105_, WoodlandMansionPieces.SimpleGrid p_230106_, WoodlandMansionPieces.SimpleGrid p_230107_)
```

**Parameters:**

- `p_230103_` (`List<WoodlandMansionPieces.WoodlandMansionPiece>`)
- `p_230104_` (`BlockPos`)
- `p_230105_` (`Rotation`)
- `p_230106_` (`WoodlandMansionPieces.SimpleGrid`)
- `p_230107_` (`WoodlandMansionPieces.SimpleGrid`)

**Returns:** `private void`

### entrance

```java
private void entrance(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230086_, WoodlandMansionPieces.PlacementData p_230087_)
```

**Parameters:**

- `p_230086_` (`List<WoodlandMansionPieces.WoodlandMansionPiece>`)
- `p_230087_` (`WoodlandMansionPieces.PlacementData`)

**Returns:** `private void`

### traverseWallPiece

```java
private void traverseWallPiece(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230130_, WoodlandMansionPieces.PlacementData p_230131_)
```

**Parameters:**

- `p_230130_` (`List<WoodlandMansionPieces.WoodlandMansionPiece>`)
- `p_230131_` (`WoodlandMansionPieces.PlacementData`)

**Returns:** `private void`

### traverseTurn

```java
private void traverseTurn(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230133_, WoodlandMansionPieces.PlacementData p_230134_)
```

**Parameters:**

- `p_230133_` (`List<WoodlandMansionPieces.WoodlandMansionPiece>`)
- `p_230134_` (`WoodlandMansionPieces.PlacementData`)

**Returns:** `private void`

### traverseInnerTurn

```java
private void traverseInnerTurn(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230136_, WoodlandMansionPieces.PlacementData p_230137_)
```

**Parameters:**

- `p_230136_` (`List<WoodlandMansionPieces.WoodlandMansionPiece>`)
- `p_230137_` (`WoodlandMansionPieces.PlacementData`)

**Returns:** `private void`

### addRoom1x1

```java
private void addRoom1x1(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230109_, BlockPos p_230110_, Rotation p_230111_, Direction p_230112_, WoodlandMansionPieces.FloorRoomCollection p_230113_)
```

**Parameters:**

- `p_230109_` (`List<WoodlandMansionPieces.WoodlandMansionPiece>`)
- `p_230110_` (`BlockPos`)
- `p_230111_` (`Rotation`)
- `p_230112_` (`Direction`)
- `p_230113_` (`WoodlandMansionPieces.FloorRoomCollection`)

**Returns:** `private void`

### addRoom1x2

```java
private void addRoom1x2(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230122_, BlockPos p_230123_, Rotation p_230124_, Direction p_230125_, Direction p_230126_, WoodlandMansionPieces.FloorRoomCollection p_230127_, boolean p_230128_)
```

**Parameters:**

- `p_230122_` (`List<WoodlandMansionPieces.WoodlandMansionPiece>`)
- `p_230123_` (`BlockPos`)
- `p_230124_` (`Rotation`)
- `p_230125_` (`Direction`)
- `p_230126_` (`Direction`)
- `p_230127_` (`WoodlandMansionPieces.FloorRoomCollection`)
- `p_230128_` (`boolean`)

**Returns:** `private void`

### addRoom2x2

```java
private void addRoom2x2(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230115_, BlockPos p_230116_, Rotation p_230117_, Direction p_230118_, Direction p_230119_, WoodlandMansionPieces.FloorRoomCollection p_230120_)
```

**Parameters:**

- `p_230115_` (`List<WoodlandMansionPieces.WoodlandMansionPiece>`)
- `p_230116_` (`BlockPos`)
- `p_230117_` (`Rotation`)
- `p_230118_` (`Direction`)
- `p_230119_` (`Direction`)
- `p_230120_` (`WoodlandMansionPieces.FloorRoomCollection`)

**Returns:** `private void`

### addRoom2x2Secret

```java
private void addRoom2x2Secret(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230098_, BlockPos p_230099_, Rotation p_230100_, WoodlandMansionPieces.FloorRoomCollection p_230101_)
```

**Parameters:**

- `p_230098_` (`List<WoodlandMansionPieces.WoodlandMansionPiece>`)
- `p_230099_` (`BlockPos`)
- `p_230100_` (`Rotation`)
- `p_230101_` (`WoodlandMansionPieces.FloorRoomCollection`)

**Returns:** `private void`

### get1x1

```java
public String get1x1(RandomSource p_230144_)
```

**Parameters:**

- `p_230144_` (`RandomSource`)

**Returns:** `String`

### get1x1Secret

```java
public String get1x1Secret(RandomSource p_230149_)
```

**Parameters:**

- `p_230149_` (`RandomSource`)

**Returns:** `String`

### get1x2SideEntrance

```java
public String get1x2SideEntrance(RandomSource p_230146_, boolean p_230147_)
```

**Parameters:**

- `p_230146_` (`RandomSource`)
- `p_230147_` (`boolean`)

**Returns:** `String`

### get1x2FrontEntrance

```java
public String get1x2FrontEntrance(RandomSource p_230151_, boolean p_230152_)
```

**Parameters:**

- `p_230151_` (`RandomSource`)
- `p_230152_` (`boolean`)

**Returns:** `String`

### get1x2Secret

```java
public String get1x2Secret(RandomSource p_230154_)
```

**Parameters:**

- `p_230154_` (`RandomSource`)

**Returns:** `String`

### get2x2

```java
public String get2x2(RandomSource p_230156_)
```

**Parameters:**

- `p_230156_` (`RandomSource`)

**Returns:** `String`

### get2x2Secret

```java
public String get2x2Secret(RandomSource p_230158_)
```

**Parameters:**

- `p_230158_` (`RandomSource`)

**Returns:** `String`

### SimpleGrid

```java
public SimpleGrid(int p_230164_, int p_230165_, int p_230166_)
```

**Parameters:**

- `p_230164_` (`int`)
- `p_230165_` (`int`)
- `p_230166_` (`int`)

**Returns:** `public`

### set

```java
public void set(int p_230171_, int p_230172_, int p_230173_)
```

**Parameters:**

- `p_230171_` (`int`)
- `p_230172_` (`int`)
- `p_230173_` (`int`)

**Returns:** `public void`

### set

```java
public void set(int p_230180_, int p_230181_, int p_230182_, int p_230183_, int p_230184_)
```

**Parameters:**

- `p_230180_` (`int`)
- `p_230181_` (`int`)
- `p_230182_` (`int`)
- `p_230183_` (`int`)
- `p_230184_` (`int`)

**Returns:** `public void`

### get

```java
public int get(int p_230168_, int p_230169_)
```

**Parameters:**

- `p_230168_` (`int`)
- `p_230169_` (`int`)

**Returns:** `public int`

### setif

```java
public void setif(int p_230175_, int p_230176_, int p_230177_, int p_230178_)
```

**Parameters:**

- `p_230175_` (`int`)
- `p_230176_` (`int`)
- `p_230177_` (`int`)
- `p_230178_` (`int`)

**Returns:** `public void`

### edgesTo

```java
public boolean edgesTo(int p_230186_, int p_230187_, int p_230188_)
```

**Parameters:**

- `p_230186_` (`int`)
- `p_230187_` (`int`)
- `p_230188_` (`int`)

**Returns:** `public boolean`

### WoodlandMansionPiece

```java
public WoodlandMansionPiece(StructureTemplateManager p_230191_, String p_230192_, BlockPos p_230193_, Rotation p_230194_)
```

**Parameters:**

- `p_230191_` (`StructureTemplateManager`)
- `p_230192_` (`String`)
- `p_230193_` (`BlockPos`)
- `p_230194_` (`Rotation`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### WoodlandMansionPiece

```java
public WoodlandMansionPiece(StructureTemplateManager p_230196_, String p_230197_, BlockPos p_230198_, Rotation p_230199_, Mirror p_230200_)
```

**Parameters:**

- `p_230196_` (`StructureTemplateManager`)
- `p_230197_` (`String`)
- `p_230198_` (`BlockPos`)
- `p_230199_` (`Rotation`)
- `p_230200_` (`Mirror`)

**Returns:** `public`

### WoodlandMansionPiece

```java
public WoodlandMansionPiece(StructureTemplateManager p_230202_, CompoundTag p_230203_)
```

**Parameters:**

- `p_230202_` (`StructureTemplateManager`)
- `p_230203_` (`CompoundTag`)

**Returns:** `public`

### makeTemplateLocation

```java
protected ResourceLocation makeTemplateLocation()
```

**Returns:** `ResourceLocation`

### makeLocation

```java
return makeLocation()
```

**Returns:** `return`

### makeLocation

```java
private static ResourceLocation makeLocation(String p_230211_)
```

**Parameters:**

- `p_230211_` (`String`)

**Returns:** `private static ResourceLocation`

### makeSettings

```java
private static StructurePlaceSettings makeSettings(Mirror p_230205_, Rotation p_230206_)
```

**Parameters:**

- `p_230205_` (`Mirror`)
- `p_230206_` (`Rotation`)

**Returns:** `private static StructurePlaceSettings`

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_230208_, CompoundTag p_230209_)
```

**Parameters:**

- `p_230208_` (`StructurePieceSerializationContext`)
- `p_230209_` (`CompoundTag`)

### handleDataMarker

```java
protected void handleDataMarker(String p_230213_, BlockPos p_230214_, ServerLevelAccessor p_230215_, RandomSource p_230216_, BoundingBox p_230217_)
```

**Parameters:**

- `p_230213_` (`String`)
- `p_230214_` (`BlockPos`)
- `p_230215_` (`ServerLevelAccessor`)
- `p_230216_` (`RandomSource`)
- `p_230217_` (`BoundingBox`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `WoodlandMansionPiece` | class |  |
