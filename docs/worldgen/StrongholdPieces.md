# StrongholdPieces

**Package:** `net.minecraft.world.level.levelgen.structure.structures`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAGIC_START_Y` | `int` |  |

## Methods

### doPlace

```java
public boolean doPlace(int p_229450_)
```

**Parameters:**

- `p_229450_` (`int`)

**Returns:** `boolean`

### doPlace

```java
public boolean doPlace(int p_229456_)
```

**Parameters:**

- `p_229456_` (`int`)

**Returns:** `boolean`

### resetPieces

```java
public static void resetPieces()
```

**Returns:** `public static void`

### updatePieceWeight

```java
private static boolean updatePieceWeight()
```

**Returns:** `private static boolean`

### findAndCreatePieceFactory

```java
private static StrongholdPieces.StrongholdPiece findAndCreatePieceFactory(Class<? extends StrongholdPieces.StrongholdPiece> p_229427_, StructurePieceAccessor p_229428_, RandomSource p_229429_, int p_229430_, int p_229431_, int p_229432_, Direction p_229433_, int p_229434_)
```

**Parameters:**

- `p_229427_` (`Class<? extends StrongholdPieces.StrongholdPiece>`)
- `p_229428_` (`StructurePieceAccessor`)
- `p_229429_` (`RandomSource`)
- `p_229430_` (`int`)
- `p_229431_` (`int`)
- `p_229432_` (`int`)
- `p_229433_` (`Direction`)
- `p_229434_` (`int`)

**Returns:** `private static StrongholdPieces.StrongholdPiece`

### generatePieceFromSmallDoor

```java
private static StrongholdPieces.StrongholdPiece generatePieceFromSmallDoor(StrongholdPieces.StartPiece p_229418_, StructurePieceAccessor p_229419_, RandomSource p_229420_, int p_229421_, int p_229422_, int p_229423_, Direction p_229424_, int p_229425_)
```

**Parameters:**

- `p_229418_` (`StrongholdPieces.StartPiece`)
- `p_229419_` (`StructurePieceAccessor`)
- `p_229420_` (`RandomSource`)
- `p_229421_` (`int`)
- `p_229422_` (`int`)
- `p_229423_` (`int`)
- `p_229424_` (`Direction`)
- `p_229425_` (`int`)

**Returns:** `private static StrongholdPieces.StrongholdPiece`

### generateAndAddPiece

```java
static StructurePiece generateAndAddPiece(StrongholdPieces.StartPiece p_229437_, StructurePieceAccessor p_229438_, RandomSource p_229439_, int p_229440_, int p_229441_, int p_229442_, Direction p_229443_, int p_229444_)
```

**Parameters:**

- `p_229437_` (`StrongholdPieces.StartPiece`)
- `p_229438_` (`StructurePieceAccessor`)
- `p_229439_` (`RandomSource`)
- `p_229440_` (`int`)
- `p_229441_` (`int`)
- `p_229442_` (`int`)
- `p_229443_` (`Direction`)
- `p_229444_` (`int`)

**Returns:** `static StructurePiece`

### ChestCorridor

```java
public ChestCorridor(int p_229465_, RandomSource p_229466_, BoundingBox p_229467_, Direction p_229468_)
```

**Parameters:**

- `p_229465_` (`int`)
- `p_229466_` (`RandomSource`)
- `p_229467_` (`BoundingBox`)
- `p_229468_` (`Direction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ChestCorridor

```java
public ChestCorridor(CompoundTag p_229470_)
```

**Parameters:**

- `p_229470_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_229492_, CompoundTag p_229493_)
```

**Parameters:**

- `p_229492_` (`StructurePieceSerializationContext`)
- `p_229493_` (`CompoundTag`)

### addChildren

```java
public void addChildren(StructurePiece p_229480_, StructurePieceAccessor p_229481_, RandomSource p_229482_)
```

**Parameters:**

- `p_229480_` (`StructurePiece`)
- `p_229481_` (`StructurePieceAccessor`)
- `p_229482_` (`RandomSource`)

### createPiece

```java
public static StrongholdPieces.ChestCorridor createPiece(StructurePieceAccessor p_229484_, RandomSource p_229485_, int p_229486_, int p_229487_, int p_229488_, Direction p_229489_, int p_229490_)
```

**Parameters:**

- `p_229484_` (`StructurePieceAccessor`)
- `p_229485_` (`RandomSource`)
- `p_229486_` (`int`)
- `p_229487_` (`int`)
- `p_229488_` (`int`)
- `p_229489_` (`Direction`)
- `p_229490_` (`int`)

**Returns:** `public static StrongholdPieces.ChestCorridor`

### postProcess

```java
public void postProcess(WorldGenLevel p_229472_, StructureManager p_229473_, ChunkGenerator p_229474_, RandomSource p_229475_, BoundingBox p_229476_, ChunkPos p_229477_, BlockPos p_229478_)
```

**Parameters:**

- `p_229472_` (`WorldGenLevel`)
- `p_229473_` (`StructureManager`)
- `p_229474_` (`ChunkGenerator`)
- `p_229475_` (`RandomSource`)
- `p_229476_` (`BoundingBox`)
- `p_229477_` (`ChunkPos`)
- `p_229478_` (`BlockPos`)

### FillerCorridor

```java
public FillerCorridor(int p_229496_, BoundingBox p_229497_, Direction p_229498_)
```

**Parameters:**

- `p_229496_` (`int`)
- `p_229497_` (`BoundingBox`)
- `p_229498_` (`Direction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### FillerCorridor

```java
public FillerCorridor(CompoundTag p_229500_)
```

**Parameters:**

- `p_229500_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_229517_, CompoundTag p_229518_)
```

**Parameters:**

- `p_229517_` (`StructurePieceSerializationContext`)
- `p_229518_` (`CompoundTag`)

### findPieceBox

```java
public static BoundingBox findPieceBox(StructurePieceAccessor p_229510_, RandomSource p_229511_, int p_229512_, int p_229513_, int p_229514_, Direction p_229515_)
```

**Parameters:**

- `p_229510_` (`StructurePieceAccessor`)
- `p_229511_` (`RandomSource`)
- `p_229512_` (`int`)
- `p_229513_` (`int`)
- `p_229514_` (`int`)
- `p_229515_` (`Direction`)

**Returns:** `public static BoundingBox`

### postProcess

```java
public void postProcess(WorldGenLevel p_229502_, StructureManager p_229503_, ChunkGenerator p_229504_, RandomSource p_229505_, BoundingBox p_229506_, ChunkPos p_229507_, BlockPos p_229508_)
```

**Parameters:**

- `p_229502_` (`WorldGenLevel`)
- `p_229503_` (`StructureManager`)
- `p_229504_` (`ChunkGenerator`)
- `p_229505_` (`RandomSource`)
- `p_229506_` (`BoundingBox`)
- `p_229507_` (`ChunkPos`)
- `p_229508_` (`BlockPos`)

### FiveCrossing

```java
public FiveCrossing(int p_229527_, RandomSource p_229528_, BoundingBox p_229529_, Direction p_229530_)
```

**Parameters:**

- `p_229527_` (`int`)
- `p_229528_` (`RandomSource`)
- `p_229529_` (`BoundingBox`)
- `p_229530_` (`Direction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### FiveCrossing

```java
public FiveCrossing(CompoundTag p_229532_)
```

**Parameters:**

- `p_229532_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_229554_, CompoundTag p_229555_)
```

**Parameters:**

- `p_229554_` (`StructurePieceSerializationContext`)
- `p_229555_` (`CompoundTag`)

### addChildren

```java
public void addChildren(StructurePiece p_229542_, StructurePieceAccessor p_229543_, RandomSource p_229544_)
```

**Parameters:**

- `p_229542_` (`StructurePiece`)
- `p_229543_` (`StructurePieceAccessor`)
- `p_229544_` (`RandomSource`)

### createPiece

```java
public static StrongholdPieces.FiveCrossing createPiece(StructurePieceAccessor p_229546_, RandomSource p_229547_, int p_229548_, int p_229549_, int p_229550_, Direction p_229551_, int p_229552_)
```

**Parameters:**

- `p_229546_` (`StructurePieceAccessor`)
- `p_229547_` (`RandomSource`)
- `p_229548_` (`int`)
- `p_229549_` (`int`)
- `p_229550_` (`int`)
- `p_229551_` (`Direction`)
- `p_229552_` (`int`)

**Returns:** `public static StrongholdPieces.FiveCrossing`

### postProcess

```java
public void postProcess(WorldGenLevel p_229534_, StructureManager p_229535_, ChunkGenerator p_229536_, RandomSource p_229537_, BoundingBox p_229538_, ChunkPos p_229539_, BlockPos p_229540_)
```

**Parameters:**

- `p_229534_` (`WorldGenLevel`)
- `p_229535_` (`StructureManager`)
- `p_229536_` (`ChunkGenerator`)
- `p_229537_` (`RandomSource`)
- `p_229538_` (`BoundingBox`)
- `p_229539_` (`ChunkPos`)
- `p_229540_` (`BlockPos`)

### LeftTurn

```java
public LeftTurn(int p_229557_, RandomSource p_229558_, BoundingBox p_229559_, Direction p_229560_)
```

**Parameters:**

- `p_229557_` (`int`)
- `p_229558_` (`RandomSource`)
- `p_229559_` (`BoundingBox`)
- `p_229560_` (`Direction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### LeftTurn

```java
public LeftTurn(CompoundTag p_229562_)
```

**Parameters:**

- `p_229562_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addChildren

```java
public void addChildren(StructurePiece p_229572_, StructurePieceAccessor p_229573_, RandomSource p_229574_)
```

**Parameters:**

- `p_229572_` (`StructurePiece`)
- `p_229573_` (`StructurePieceAccessor`)
- `p_229574_` (`RandomSource`)

### createPiece

```java
public static StrongholdPieces.LeftTurn createPiece(StructurePieceAccessor p_229576_, RandomSource p_229577_, int p_229578_, int p_229579_, int p_229580_, Direction p_229581_, int p_229582_)
```

**Parameters:**

- `p_229576_` (`StructurePieceAccessor`)
- `p_229577_` (`RandomSource`)
- `p_229578_` (`int`)
- `p_229579_` (`int`)
- `p_229580_` (`int`)
- `p_229581_` (`Direction`)
- `p_229582_` (`int`)

**Returns:** `public static StrongholdPieces.LeftTurn`

### postProcess

```java
public void postProcess(WorldGenLevel p_229564_, StructureManager p_229565_, ChunkGenerator p_229566_, RandomSource p_229567_, BoundingBox p_229568_, ChunkPos p_229569_, BlockPos p_229570_)
```

**Parameters:**

- `p_229564_` (`WorldGenLevel`)
- `p_229565_` (`StructureManager`)
- `p_229566_` (`ChunkGenerator`)
- `p_229567_` (`RandomSource`)
- `p_229568_` (`BoundingBox`)
- `p_229569_` (`ChunkPos`)
- `p_229570_` (`BlockPos`)

### Library

```java
public Library(int p_229589_, RandomSource p_229590_, BoundingBox p_229591_, Direction p_229592_)
```

**Parameters:**

- `p_229589_` (`int`)
- `p_229590_` (`RandomSource`)
- `p_229591_` (`BoundingBox`)
- `p_229592_` (`Direction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### Library

```java
public Library(CompoundTag p_229594_)
```

**Parameters:**

- `p_229594_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_229612_, CompoundTag p_229613_)
```

**Parameters:**

- `p_229612_` (`StructurePieceSerializationContext`)
- `p_229613_` (`CompoundTag`)

### createPiece

```java
public static StrongholdPieces.Library createPiece(StructurePieceAccessor p_229604_, RandomSource p_229605_, int p_229606_, int p_229607_, int p_229608_, Direction p_229609_, int p_229610_)
```

**Parameters:**

- `p_229604_` (`StructurePieceAccessor`)
- `p_229605_` (`RandomSource`)
- `p_229606_` (`int`)
- `p_229607_` (`int`)
- `p_229608_` (`int`)
- `p_229609_` (`Direction`)
- `p_229610_` (`int`)

**Returns:** `public static StrongholdPieces.Library`

### postProcess

```java
public void postProcess(WorldGenLevel p_229596_, StructureManager p_229597_, ChunkGenerator p_229598_, RandomSource p_229599_, BoundingBox p_229600_, ChunkPos p_229601_, BlockPos p_229602_)
```

**Parameters:**

- `p_229596_` (`WorldGenLevel`)
- `p_229597_` (`StructureManager`)
- `p_229598_` (`ChunkGenerator`)
- `p_229599_` (`RandomSource`)
- `p_229600_` (`BoundingBox`)
- `p_229601_` (`ChunkPos`)
- `p_229602_` (`BlockPos`)

### PieceWeight

```java
public PieceWeight(Class<? extends StrongholdPieces.StrongholdPiece> p_229619_, int p_229620_, int p_229621_)
```

**Parameters:**

- `p_229619_` (`Class<? extends StrongholdPieces.StrongholdPiece>`)
- `p_229620_` (`int`)
- `p_229621_` (`int`)

**Returns:** `public`

### doPlace

```java
public boolean doPlace(int p_229623_)
```

**Parameters:**

- `p_229623_` (`int`)

**Returns:** `public boolean`

### isValid

```java
public boolean isValid()
```

**Returns:** `public boolean`

### PortalRoom

```java
public PortalRoom(int p_229629_, BoundingBox p_229630_, Direction p_229631_)
```

**Parameters:**

- `p_229629_` (`int`)
- `p_229630_` (`BoundingBox`)
- `p_229631_` (`Direction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### PortalRoom

```java
public PortalRoom(CompoundTag p_229633_)
```

**Parameters:**

- `p_229633_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_229654_, CompoundTag p_229655_)
```

**Parameters:**

- `p_229654_` (`StructurePieceSerializationContext`)
- `p_229655_` (`CompoundTag`)

### addChildren

```java
public void addChildren(StructurePiece p_229643_, StructurePieceAccessor p_229644_, RandomSource p_229645_)
```

**Parameters:**

- `p_229643_` (`StructurePiece`)
- `p_229644_` (`StructurePieceAccessor`)
- `p_229645_` (`RandomSource`)

### createPiece

```java
public static StrongholdPieces.PortalRoom createPiece(StructurePieceAccessor p_229647_, int p_229648_, int p_229649_, int p_229650_, Direction p_229651_, int p_229652_)
```

**Parameters:**

- `p_229647_` (`StructurePieceAccessor`)
- `p_229648_` (`int`)
- `p_229649_` (`int`)
- `p_229650_` (`int`)
- `p_229651_` (`Direction`)
- `p_229652_` (`int`)

**Returns:** `public static StrongholdPieces.PortalRoom`

### postProcess

```java
public void postProcess(WorldGenLevel p_229635_, StructureManager p_229636_, ChunkGenerator p_229637_, RandomSource p_229638_, BoundingBox p_229639_, ChunkPos p_229640_, BlockPos p_229641_)
```

**Parameters:**

- `p_229635_` (`WorldGenLevel`)
- `p_229636_` (`StructureManager`)
- `p_229637_` (`ChunkGenerator`)
- `p_229638_` (`RandomSource`)
- `p_229639_` (`BoundingBox`)
- `p_229640_` (`ChunkPos`)
- `p_229641_` (`BlockPos`)

### PrisonHall

```java
public PrisonHall(int p_229660_, RandomSource p_229661_, BoundingBox p_229662_, Direction p_229663_)
```

**Parameters:**

- `p_229660_` (`int`)
- `p_229661_` (`RandomSource`)
- `p_229662_` (`BoundingBox`)
- `p_229663_` (`Direction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### PrisonHall

```java
public PrisonHall(CompoundTag p_229665_)
```

**Parameters:**

- `p_229665_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addChildren

```java
public void addChildren(StructurePiece p_229675_, StructurePieceAccessor p_229676_, RandomSource p_229677_)
```

**Parameters:**

- `p_229675_` (`StructurePiece`)
- `p_229676_` (`StructurePieceAccessor`)
- `p_229677_` (`RandomSource`)

### createPiece

```java
public static StrongholdPieces.PrisonHall createPiece(StructurePieceAccessor p_229679_, RandomSource p_229680_, int p_229681_, int p_229682_, int p_229683_, Direction p_229684_, int p_229685_)
```

**Parameters:**

- `p_229679_` (`StructurePieceAccessor`)
- `p_229680_` (`RandomSource`)
- `p_229681_` (`int`)
- `p_229682_` (`int`)
- `p_229683_` (`int`)
- `p_229684_` (`Direction`)
- `p_229685_` (`int`)

**Returns:** `public static StrongholdPieces.PrisonHall`

### postProcess

```java
public void postProcess(WorldGenLevel p_229667_, StructureManager p_229668_, ChunkGenerator p_229669_, RandomSource p_229670_, BoundingBox p_229671_, ChunkPos p_229672_, BlockPos p_229673_)
```

**Parameters:**

- `p_229667_` (`WorldGenLevel`)
- `p_229668_` (`StructureManager`)
- `p_229669_` (`ChunkGenerator`)
- `p_229670_` (`RandomSource`)
- `p_229671_` (`BoundingBox`)
- `p_229672_` (`ChunkPos`)
- `p_229673_` (`BlockPos`)

### RightTurn

```java
public RightTurn(int p_229687_, RandomSource p_229688_, BoundingBox p_229689_, Direction p_229690_)
```

**Parameters:**

- `p_229687_` (`int`)
- `p_229688_` (`RandomSource`)
- `p_229689_` (`BoundingBox`)
- `p_229690_` (`Direction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### RightTurn

```java
public RightTurn(CompoundTag p_229692_)
```

**Parameters:**

- `p_229692_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addChildren

```java
public void addChildren(StructurePiece p_229702_, StructurePieceAccessor p_229703_, RandomSource p_229704_)
```

**Parameters:**

- `p_229702_` (`StructurePiece`)
- `p_229703_` (`StructurePieceAccessor`)
- `p_229704_` (`RandomSource`)

### createPiece

```java
public static StrongholdPieces.RightTurn createPiece(StructurePieceAccessor p_229706_, RandomSource p_229707_, int p_229708_, int p_229709_, int p_229710_, Direction p_229711_, int p_229712_)
```

**Parameters:**

- `p_229706_` (`StructurePieceAccessor`)
- `p_229707_` (`RandomSource`)
- `p_229708_` (`int`)
- `p_229709_` (`int`)
- `p_229710_` (`int`)
- `p_229711_` (`Direction`)
- `p_229712_` (`int`)

**Returns:** `public static StrongholdPieces.RightTurn`

### postProcess

```java
public void postProcess(WorldGenLevel p_229694_, StructureManager p_229695_, ChunkGenerator p_229696_, RandomSource p_229697_, BoundingBox p_229698_, ChunkPos p_229699_, BlockPos p_229700_)
```

**Parameters:**

- `p_229694_` (`WorldGenLevel`)
- `p_229695_` (`StructureManager`)
- `p_229696_` (`ChunkGenerator`)
- `p_229697_` (`RandomSource`)
- `p_229698_` (`BoundingBox`)
- `p_229699_` (`ChunkPos`)
- `p_229700_` (`BlockPos`)

### RoomCrossing

```java
public RoomCrossing(int p_229718_, RandomSource p_229719_, BoundingBox p_229720_, Direction p_229721_)
```

**Parameters:**

- `p_229718_` (`int`)
- `p_229719_` (`RandomSource`)
- `p_229720_` (`BoundingBox`)
- `p_229721_` (`Direction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### RoomCrossing

```java
public RoomCrossing(CompoundTag p_229723_)
```

**Parameters:**

- `p_229723_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_229745_, CompoundTag p_229746_)
```

**Parameters:**

- `p_229745_` (`StructurePieceSerializationContext`)
- `p_229746_` (`CompoundTag`)

### addChildren

```java
public void addChildren(StructurePiece p_229733_, StructurePieceAccessor p_229734_, RandomSource p_229735_)
```

**Parameters:**

- `p_229733_` (`StructurePiece`)
- `p_229734_` (`StructurePieceAccessor`)
- `p_229735_` (`RandomSource`)

### createPiece

```java
public static StrongholdPieces.RoomCrossing createPiece(StructurePieceAccessor p_229737_, RandomSource p_229738_, int p_229739_, int p_229740_, int p_229741_, Direction p_229742_, int p_229743_)
```

**Parameters:**

- `p_229737_` (`StructurePieceAccessor`)
- `p_229738_` (`RandomSource`)
- `p_229739_` (`int`)
- `p_229740_` (`int`)
- `p_229741_` (`int`)
- `p_229742_` (`Direction`)
- `p_229743_` (`int`)

**Returns:** `public static StrongholdPieces.RoomCrossing`

### postProcess

```java
public void postProcess(WorldGenLevel p_229725_, StructureManager p_229726_, ChunkGenerator p_229727_, RandomSource p_229728_, BoundingBox p_229729_, ChunkPos p_229730_, BlockPos p_229731_)
```

**Parameters:**

- `p_229725_` (`WorldGenLevel`)
- `p_229726_` (`StructureManager`)
- `p_229727_` (`ChunkGenerator`)
- `p_229728_` (`RandomSource`)
- `p_229729_` (`BoundingBox`)
- `p_229730_` (`ChunkPos`)
- `p_229731_` (`BlockPos`)

### next

```java
public void next(RandomSource p_229749_, int p_229750_, int p_229751_, int p_229752_, boolean p_229753_)
```

**Parameters:**

- `p_229749_` (`RandomSource`)
- `p_229750_` (`int`)
- `p_229751_` (`int`)
- `p_229752_` (`int`)
- `p_229753_` (`boolean`)

### StairsDown

```java
public StairsDown(StructurePieceType p_229764_, int p_229765_, int p_229766_, int p_229767_, Direction p_229768_)
```

**Parameters:**

- `p_229764_` (`StructurePieceType`)
- `p_229765_` (`int`)
- `p_229766_` (`int`)
- `p_229767_` (`int`)
- `p_229768_` (`Direction`)

**Returns:** `public`

### StairsDown

```java
public StairsDown(int p_229759_, RandomSource p_229760_, BoundingBox p_229761_, Direction p_229762_)
```

**Parameters:**

- `p_229759_` (`int`)
- `p_229760_` (`RandomSource`)
- `p_229761_` (`BoundingBox`)
- `p_229762_` (`Direction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### StairsDown

```java
public StairsDown(StructurePieceType p_229770_, CompoundTag p_229771_)
```

**Parameters:**

- `p_229770_` (`StructurePieceType`)
- `p_229771_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### StairsDown

```java
public StairsDown(CompoundTag p_229773_)
```

**Parameters:**

- `p_229773_` (`CompoundTag`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_229795_, CompoundTag p_229796_)
```

**Parameters:**

- `p_229795_` (`StructurePieceSerializationContext`)
- `p_229796_` (`CompoundTag`)

### addChildren

```java
public void addChildren(StructurePiece p_229783_, StructurePieceAccessor p_229784_, RandomSource p_229785_)
```

**Parameters:**

- `p_229783_` (`StructurePiece`)
- `p_229784_` (`StructurePieceAccessor`)
- `p_229785_` (`RandomSource`)

### createPiece

```java
public static StrongholdPieces.StairsDown createPiece(StructurePieceAccessor p_229787_, RandomSource p_229788_, int p_229789_, int p_229790_, int p_229791_, Direction p_229792_, int p_229793_)
```

**Parameters:**

- `p_229787_` (`StructurePieceAccessor`)
- `p_229788_` (`RandomSource`)
- `p_229789_` (`int`)
- `p_229790_` (`int`)
- `p_229791_` (`int`)
- `p_229792_` (`Direction`)
- `p_229793_` (`int`)

**Returns:** `public static StrongholdPieces.StairsDown`

### postProcess

```java
public void postProcess(WorldGenLevel p_229775_, StructureManager p_229776_, ChunkGenerator p_229777_, RandomSource p_229778_, BoundingBox p_229779_, ChunkPos p_229780_, BlockPos p_229781_)
```

**Parameters:**

- `p_229775_` (`WorldGenLevel`)
- `p_229776_` (`StructureManager`)
- `p_229777_` (`ChunkGenerator`)
- `p_229778_` (`RandomSource`)
- `p_229779_` (`BoundingBox`)
- `p_229780_` (`ChunkPos`)
- `p_229781_` (`BlockPos`)

### StartPiece

```java
public StartPiece(RandomSource p_229801_, int p_229802_, int p_229803_)
```

**Parameters:**

- `p_229801_` (`RandomSource`)
- `p_229802_` (`int`)
- `p_229803_` (`int`)

**Returns:** `public`

### StartPiece

```java
public StartPiece(CompoundTag p_229805_)
```

**Parameters:**

- `p_229805_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getLocatorPosition

```java
public BlockPos getLocatorPosition()
```

**Returns:** `BlockPos`

### Straight

```java
public Straight(int p_229813_, RandomSource p_229814_, BoundingBox p_229815_, Direction p_229816_)
```

**Parameters:**

- `p_229813_` (`int`)
- `p_229814_` (`RandomSource`)
- `p_229815_` (`BoundingBox`)
- `p_229816_` (`Direction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### Straight

```java
public Straight(CompoundTag p_229818_)
```

**Parameters:**

- `p_229818_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_229840_, CompoundTag p_229841_)
```

**Parameters:**

- `p_229840_` (`StructurePieceSerializationContext`)
- `p_229841_` (`CompoundTag`)

### addChildren

```java
public void addChildren(StructurePiece p_229828_, StructurePieceAccessor p_229829_, RandomSource p_229830_)
```

**Parameters:**

- `p_229828_` (`StructurePiece`)
- `p_229829_` (`StructurePieceAccessor`)
- `p_229830_` (`RandomSource`)

### createPiece

```java
public static StrongholdPieces.Straight createPiece(StructurePieceAccessor p_229832_, RandomSource p_229833_, int p_229834_, int p_229835_, int p_229836_, Direction p_229837_, int p_229838_)
```

**Parameters:**

- `p_229832_` (`StructurePieceAccessor`)
- `p_229833_` (`RandomSource`)
- `p_229834_` (`int`)
- `p_229835_` (`int`)
- `p_229836_` (`int`)
- `p_229837_` (`Direction`)
- `p_229838_` (`int`)

**Returns:** `public static StrongholdPieces.Straight`

### postProcess

```java
public void postProcess(WorldGenLevel p_229820_, StructureManager p_229821_, ChunkGenerator p_229822_, RandomSource p_229823_, BoundingBox p_229824_, ChunkPos p_229825_, BlockPos p_229826_)
```

**Parameters:**

- `p_229820_` (`WorldGenLevel`)
- `p_229821_` (`StructureManager`)
- `p_229822_` (`ChunkGenerator`)
- `p_229823_` (`RandomSource`)
- `p_229824_` (`BoundingBox`)
- `p_229825_` (`ChunkPos`)
- `p_229826_` (`BlockPos`)

### StraightStairsDown

```java
public StraightStairsDown(int p_229846_, RandomSource p_229847_, BoundingBox p_229848_, Direction p_229849_)
```

**Parameters:**

- `p_229846_` (`int`)
- `p_229847_` (`RandomSource`)
- `p_229848_` (`BoundingBox`)
- `p_229849_` (`Direction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### StraightStairsDown

```java
public StraightStairsDown(CompoundTag p_229851_)
```

**Parameters:**

- `p_229851_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addChildren

```java
public void addChildren(StructurePiece p_229861_, StructurePieceAccessor p_229862_, RandomSource p_229863_)
```

**Parameters:**

- `p_229861_` (`StructurePiece`)
- `p_229862_` (`StructurePieceAccessor`)
- `p_229863_` (`RandomSource`)

### createPiece

```java
public static StrongholdPieces.StraightStairsDown createPiece(StructurePieceAccessor p_229865_, RandomSource p_229866_, int p_229867_, int p_229868_, int p_229869_, Direction p_229870_, int p_229871_)
```

**Parameters:**

- `p_229865_` (`StructurePieceAccessor`)
- `p_229866_` (`RandomSource`)
- `p_229867_` (`int`)
- `p_229868_` (`int`)
- `p_229869_` (`int`)
- `p_229870_` (`Direction`)
- `p_229871_` (`int`)

**Returns:** `public static StrongholdPieces.StraightStairsDown`

### postProcess

```java
public void postProcess(WorldGenLevel p_229853_, StructureManager p_229854_, ChunkGenerator p_229855_, RandomSource p_229856_, BoundingBox p_229857_, ChunkPos p_229858_, BlockPos p_229859_)
```

**Parameters:**

- `p_229853_` (`WorldGenLevel`)
- `p_229854_` (`StructureManager`)
- `p_229855_` (`ChunkGenerator`)
- `p_229856_` (`RandomSource`)
- `p_229857_` (`BoundingBox`)
- `p_229858_` (`ChunkPos`)
- `p_229859_` (`BlockPos`)

### StrongholdPiece

```java
protected StrongholdPiece(StructurePieceType p_229874_, int p_229875_, BoundingBox p_229876_)
```

**Parameters:**

- `p_229874_` (`StructurePieceType`)
- `p_229875_` (`int`)
- `p_229876_` (`BoundingBox`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### StrongholdPiece

```java
public StrongholdPiece(StructurePieceType p_229878_, CompoundTag p_229879_)
```

**Parameters:**

- `p_229878_` (`StructurePieceType`)
- `p_229879_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_229891_, CompoundTag p_229892_)
```

**Parameters:**

- `p_229891_` (`StructurePieceSerializationContext`)
- `p_229892_` (`CompoundTag`)

### generateSmallDoor

```java
protected void generateSmallDoor(WorldGenLevel p_229881_, RandomSource p_229882_, BoundingBox p_229883_, StrongholdPieces.StrongholdPiece.SmallDoorType p_229884_, int p_229885_, int p_229886_, int p_229887_)
```

**Parameters:**

- `p_229881_` (`WorldGenLevel`)
- `p_229882_` (`RandomSource`)
- `p_229883_` (`BoundingBox`)
- `p_229884_` (`StrongholdPieces.StrongholdPiece.SmallDoorType`)
- `p_229885_` (`int`)
- `p_229886_` (`int`)
- `p_229887_` (`int`)

**Returns:** `protected void`

### randomSmallDoor

```java
protected StrongholdPieces.StrongholdPiece.SmallDoorType randomSmallDoor(RandomSource p_229900_)
```

**Parameters:**

- `p_229900_` (`RandomSource`)

**Returns:** `protected StrongholdPieces.StrongholdPiece.SmallDoorType`

### generateSmallDoorChildForward

```java
protected StructurePiece generateSmallDoorChildForward(StrongholdPieces.StartPiece p_229894_, StructurePieceAccessor p_229895_, RandomSource p_229896_, int p_229897_, int p_229898_)
```

**Parameters:**

- `p_229894_` (`StrongholdPieces.StartPiece`)
- `p_229895_` (`StructurePieceAccessor`)
- `p_229896_` (`RandomSource`)
- `p_229897_` (`int`)
- `p_229898_` (`int`)

**Returns:** `StructurePiece`

### generateSmallDoorChildLeft

```java
protected StructurePiece generateSmallDoorChildLeft(StrongholdPieces.StartPiece p_229902_, StructurePieceAccessor p_229903_, RandomSource p_229904_, int p_229905_, int p_229906_)
```

**Parameters:**

- `p_229902_` (`StrongholdPieces.StartPiece`)
- `p_229903_` (`StructurePieceAccessor`)
- `p_229904_` (`RandomSource`)
- `p_229905_` (`int`)
- `p_229906_` (`int`)

**Returns:** `StructurePiece`

### generateSmallDoorChildRight

```java
protected StructurePiece generateSmallDoorChildRight(StrongholdPieces.StartPiece p_229908_, StructurePieceAccessor p_229909_, RandomSource p_229910_, int p_229911_, int p_229912_)
```

**Parameters:**

- `p_229908_` (`StrongholdPieces.StartPiece`)
- `p_229909_` (`StructurePieceAccessor`)
- `p_229910_` (`RandomSource`)
- `p_229911_` (`int`)
- `p_229912_` (`int`)

**Returns:** `StructurePiece`

### isOkBox

```java
protected static boolean isOkBox(BoundingBox p_229889_)
```

**Parameters:**

- `p_229889_` (`BoundingBox`)

**Returns:** `protected static boolean`

### Turn

```java
protected Turn(StructurePieceType p_229930_, int p_229931_, BoundingBox p_229932_)
```

**Parameters:**

- `p_229930_` (`StructurePieceType`)
- `p_229931_` (`int`)
- `p_229932_` (`BoundingBox`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### Turn

```java
public Turn(StructurePieceType p_229934_, CompoundTag p_229935_)
```

**Parameters:**

- `p_229934_` (`StructurePieceType`)
- `p_229935_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ChestCorridor` | class |  |
| `FillerCorridor` | class |  |
| `FiveCrossing` | class |  |
| `LeftTurn` | class |  |
| `Library` | class |  |
| `PortalRoom` | class |  |
| `PrisonHall` | class |  |
| `RightTurn` | class |  |
| `RoomCrossing` | class |  |
| `StairsDown` | class |  |
| `StartPiece` | class |  |
| `Straight` | class |  |
| `StraightStairsDown` | class |  |
| `SmallDoorType` | enum |  |
