# MineshaftPieces

**Package:** `net.minecraft.world.level.levelgen.structure.structures`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAGIC_START_Y` | `int` |  |

## Methods

### createRandomShaftPiece

```java
private static MineshaftPieces.MineShaftPiece createRandomShaftPiece(StructurePieceAccessor p_227716_, RandomSource p_227717_, int p_227718_, int p_227719_, int p_227720_, Direction p_227721_, int p_227722_, MineshaftStructure.Type p_227723_)
```

**Parameters:**

- `p_227716_` (`StructurePieceAccessor`)
- `p_227717_` (`RandomSource`)
- `p_227718_` (`int`)
- `p_227719_` (`int`)
- `p_227720_` (`int`)
- `p_227721_` (`Direction`)
- `p_227722_` (`int`)
- `p_227723_` (`MineshaftStructure.Type`)

**Returns:** `private static MineshaftPieces.MineShaftPiece`

### generateAndAddPiece

```java
static MineshaftPieces.MineShaftPiece generateAndAddPiece(StructurePiece p_227707_, StructurePieceAccessor p_227708_, RandomSource p_227709_, int p_227710_, int p_227711_, int p_227712_, Direction p_227713_, int p_227714_)
```

**Parameters:**

- `p_227707_` (`StructurePiece`)
- `p_227708_` (`StructurePieceAccessor`)
- `p_227709_` (`RandomSource`)
- `p_227710_` (`int`)
- `p_227711_` (`int`)
- `p_227712_` (`int`)
- `p_227713_` (`Direction`)
- `p_227714_` (`int`)

**Returns:** `static MineshaftPieces.MineShaftPiece`

### MineShaftCorridor

```java
public MineShaftCorridor(CompoundTag p_227737_)
```

**Parameters:**

- `p_227737_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_227806_, CompoundTag p_227807_)
```

**Parameters:**

- `p_227806_` (`StructurePieceSerializationContext`)
- `p_227807_` (`CompoundTag`)

### MineShaftCorridor

```java
public MineShaftCorridor(int p_227731_, RandomSource p_227732_, BoundingBox p_227733_, Direction p_227734_, MineshaftStructure.Type p_227735_)
```

**Parameters:**

- `p_227731_` (`int`)
- `p_227732_` (`RandomSource`)
- `p_227733_` (`BoundingBox`)
- `p_227734_` (`Direction`)
- `p_227735_` (`MineshaftStructure.Type`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### findCorridorSize

```java
public static BoundingBox findCorridorSize(StructurePieceAccessor p_227799_, RandomSource p_227800_, int p_227801_, int p_227802_, int p_227803_, Direction p_227804_)
```

**Parameters:**

- `p_227799_` (`StructurePieceAccessor`)
- `p_227800_` (`RandomSource`)
- `p_227801_` (`int`)
- `p_227802_` (`int`)
- `p_227803_` (`int`)
- `p_227804_` (`Direction`)

**Returns:** `BoundingBox`

### BoundingBox

```java
> new BoundingBox(j - 1)
```

**Parameters:**

- `1` (`j -`)

**Returns:** `> new`

### BoundingBox

```java
> new BoundingBox(j - 1)
```

**Parameters:**

- `1` (`j -`)

**Returns:** `> new`

### addChildren

```java
public void addChildren(StructurePiece p_227795_, StructurePieceAccessor p_227796_, RandomSource p_227797_)
```

**Parameters:**

- `p_227795_` (`StructurePiece`)
- `p_227796_` (`StructurePieceAccessor`)
- `p_227797_` (`RandomSource`)

### createChest

```java
protected boolean createChest(WorldGenLevel p_227787_, BoundingBox p_227788_, RandomSource p_227789_, int p_227790_, int p_227791_, int p_227792_, ResourceKey<LootTable> p_335869_)
```

**Parameters:**

- `p_227787_` (`WorldGenLevel`)
- `p_227788_` (`BoundingBox`)
- `p_227789_` (`RandomSource`)
- `p_227790_` (`int`)
- `p_227791_` (`int`)
- `p_227792_` (`int`)
- `p_335869_` (`ResourceKey<LootTable>`)

**Returns:** `boolean`

### postProcess

```java
public void postProcess(WorldGenLevel p_227743_, StructureManager p_227744_, ChunkGenerator p_227745_, RandomSource p_227746_, BoundingBox p_227747_, ChunkPos p_227748_, BlockPos p_227749_)
```

**Parameters:**

- `p_227743_` (`WorldGenLevel`)
- `p_227744_` (`StructureManager`)
- `p_227745_` (`ChunkGenerator`)
- `p_227746_` (`RandomSource`)
- `p_227747_` (`BoundingBox`)
- `p_227748_` (`ChunkPos`)
- `p_227749_` (`BlockPos`)

### placeDoubleLowerOrUpperSupport

```java
private void placeDoubleLowerOrUpperSupport(WorldGenLevel p_227757_, BoundingBox p_227758_, int p_227759_, int p_227760_, int p_227761_)
```

**Parameters:**

- `p_227757_` (`WorldGenLevel`)
- `p_227758_` (`BoundingBox`)
- `p_227759_` (`int`)
- `p_227760_` (`int`)
- `p_227761_` (`int`)

**Returns:** `private void`

### fillColumnDown

```java
protected void fillColumnDown(WorldGenLevel p_227813_, BlockState p_227814_, int p_227815_, int p_227816_, int p_227817_, BoundingBox p_227818_)
```

**Parameters:**

- `p_227813_` (`WorldGenLevel`)
- `p_227814_` (`BlockState`)
- `p_227815_` (`int`)
- `p_227816_` (`int`)
- `p_227817_` (`int`)
- `p_227818_` (`BoundingBox`)

### fillPillarDownOrChainUp

```java
protected void fillPillarDownOrChainUp(WorldGenLevel p_227820_, BlockState p_227821_, int p_227822_, int p_227823_, int p_227824_, BoundingBox p_227825_)
```

**Parameters:**

- `p_227820_` (`WorldGenLevel`)
- `p_227821_` (`BlockState`)
- `p_227822_` (`int`)
- `p_227823_` (`int`)
- `p_227824_` (`int`)
- `p_227825_` (`BoundingBox`)

**Returns:** `protected void`

### fillColumnBetween

```java
 fillColumnBetween(i - j + 1)
```

**Parameters:**

- `1` (`i - j +`)

**Returns:** ``

### fillColumnBetween

```java
private static void fillColumnBetween(WorldGenLevel p_227751_, BlockState p_227752_, BlockPos.MutableBlockPos p_227753_, int p_227754_, int p_227755_)
```

**Parameters:**

- `p_227751_` (`WorldGenLevel`)
- `p_227752_` (`BlockState`)
- `p_227753_` (`BlockPos.MutableBlockPos`)
- `p_227754_` (`int`)
- `p_227755_` (`int`)

**Returns:** `private static void`

### canPlaceColumnOnTopOf

```java
private boolean canPlaceColumnOnTopOf(LevelReader p_227739_, BlockPos p_227740_, BlockState p_227741_)
```

**Parameters:**

- `p_227739_` (`LevelReader`)
- `p_227740_` (`BlockPos`)
- `p_227741_` (`BlockState`)

**Returns:** `private boolean`

### canHangChainBelow

```java
private boolean canHangChainBelow(LevelReader p_227809_, BlockPos p_227810_, BlockState p_227811_)
```

**Parameters:**

- `p_227809_` (`LevelReader`)
- `p_227810_` (`BlockPos`)
- `p_227811_` (`BlockState`)

**Returns:** `private boolean`

### placeSupport

```java
private void placeSupport(WorldGenLevel p_227770_, BoundingBox p_227771_, int p_227772_, int p_227773_, int p_227774_, int p_227775_, int p_227776_, RandomSource p_227777_)
```

**Parameters:**

- `p_227770_` (`WorldGenLevel`)
- `p_227771_` (`BoundingBox`)
- `p_227772_` (`int`)
- `p_227773_` (`int`)
- `p_227774_` (`int`)
- `p_227775_` (`int`)
- `p_227776_` (`int`)
- `p_227777_` (`RandomSource`)

**Returns:** `private void`

### maybePlaceCobWeb

```java
private void maybePlaceCobWeb(WorldGenLevel p_227779_, BoundingBox p_227780_, RandomSource p_227781_, float p_227782_, int p_227783_, int p_227784_, int p_227785_)
```

**Parameters:**

- `p_227779_` (`WorldGenLevel`)
- `p_227780_` (`BoundingBox`)
- `p_227781_` (`RandomSource`)
- `p_227782_` (`float`)
- `p_227783_` (`int`)
- `p_227784_` (`int`)
- `p_227785_` (`int`)

**Returns:** `private void`

### hasSturdyNeighbours

```java
private boolean hasSturdyNeighbours(WorldGenLevel p_227763_, BoundingBox p_227764_, int p_227765_, int p_227766_, int p_227767_, int p_227768_)
```

**Parameters:**

- `p_227763_` (`WorldGenLevel`)
- `p_227764_` (`BoundingBox`)
- `p_227765_` (`int`)
- `p_227766_` (`int`)
- `p_227767_` (`int`)
- `p_227768_` (`int`)

**Returns:** `private boolean`

### MineShaftCrossing

```java
public MineShaftCrossing(CompoundTag p_227834_)
```

**Parameters:**

- `p_227834_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_227862_, CompoundTag p_227863_)
```

**Parameters:**

- `p_227862_` (`StructurePieceSerializationContext`)
- `p_227863_` (`CompoundTag`)

### MineShaftCrossing

```java
public MineShaftCrossing(int p_227829_, BoundingBox p_227830_, Direction p_227831_, MineshaftStructure.Type p_227832_)
```

**Parameters:**

- `p_227829_` (`int`)
- `p_227830_` (`BoundingBox`)
- `p_227831_` (`Direction`)
- `p_227832_` (`MineshaftStructure.Type`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### findCrossing

```java
public static BoundingBox findCrossing(StructurePieceAccessor p_227855_, RandomSource p_227856_, int p_227857_, int p_227858_, int p_227859_, Direction p_227860_)
```

**Parameters:**

- `p_227855_` (`StructurePieceAccessor`)
- `p_227856_` (`RandomSource`)
- `p_227857_` (`int`)
- `p_227858_` (`int`)
- `p_227859_` (`int`)
- `p_227860_` (`Direction`)

**Returns:** `BoundingBox`

### BoundingBox

```java
> new BoundingBox()
```

**Returns:** `> new`

### BoundingBox

```java
> new BoundingBox()
```

**Returns:** `> new`

### BoundingBox

```java
> new BoundingBox()
```

**Returns:** `> new`

### BoundingBox

```java
> new BoundingBox()
```

**Returns:** `> new`

### addChildren

```java
public void addChildren(StructurePiece p_227851_, StructurePieceAccessor p_227852_, RandomSource p_227853_)
```

**Parameters:**

- `p_227851_` (`StructurePiece`)
- `p_227852_` (`StructurePieceAccessor`)
- `p_227853_` (`RandomSource`)

### postProcess

```java
public void postProcess(WorldGenLevel p_227836_, StructureManager p_227837_, ChunkGenerator p_227838_, RandomSource p_227839_, BoundingBox p_227840_, ChunkPos p_227841_, BlockPos p_227842_)
```

**Parameters:**

- `p_227836_` (`WorldGenLevel`)
- `p_227837_` (`StructureManager`)
- `p_227838_` (`ChunkGenerator`)
- `p_227839_` (`RandomSource`)
- `p_227840_` (`BoundingBox`)
- `p_227841_` (`ChunkPos`)
- `p_227842_` (`BlockPos`)

### placeSupportPillar

```java
private void placeSupportPillar(WorldGenLevel p_227844_, BoundingBox p_227845_, int p_227846_, int p_227847_, int p_227848_, int p_227849_)
```

**Parameters:**

- `p_227844_` (`WorldGenLevel`)
- `p_227845_` (`BoundingBox`)
- `p_227846_` (`int`)
- `p_227847_` (`int`)
- `p_227848_` (`int`)
- `p_227849_` (`int`)

**Returns:** `private void`

### MineShaftPiece

```java
public MineShaftPiece(StructurePieceType p_227867_, int p_227868_, MineshaftStructure.Type p_227869_, BoundingBox p_227870_)
```

**Parameters:**

- `p_227867_` (`StructurePieceType`)
- `p_227868_` (`int`)
- `p_227869_` (`MineshaftStructure.Type`)
- `p_227870_` (`BoundingBox`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### MineShaftPiece

```java
public MineShaftPiece(StructurePieceType p_227872_, CompoundTag p_227873_)
```

**Parameters:**

- `p_227872_` (`StructurePieceType`)
- `p_227873_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canBeReplaced

```java
protected boolean canBeReplaced(LevelReader p_227885_, int p_227886_, int p_227887_, int p_227888_, BoundingBox p_227889_)
```

**Parameters:**

- `p_227885_` (`LevelReader`)
- `p_227886_` (`int`)
- `p_227887_` (`int`)
- `p_227888_` (`int`)
- `p_227889_` (`BoundingBox`)

**Returns:** `boolean`

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_227898_, CompoundTag p_227899_)
```

**Parameters:**

- `p_227898_` (`StructurePieceSerializationContext`)
- `p_227899_` (`CompoundTag`)

### isSupportingBox

```java
protected boolean isSupportingBox(BlockGetter p_227875_, BoundingBox p_227876_, int p_227877_, int p_227878_, int p_227879_, int p_227880_)
```

**Parameters:**

- `p_227875_` (`BlockGetter`)
- `p_227876_` (`BoundingBox`)
- `p_227877_` (`int`)
- `p_227878_` (`int`)
- `p_227879_` (`int`)
- `p_227880_` (`int`)

**Returns:** `protected boolean`

### isInInvalidLocation

```java
protected boolean isInInvalidLocation(LevelAccessor p_227882_, BoundingBox p_227883_)
```

**Parameters:**

- `p_227882_` (`LevelAccessor`)
- `p_227883_` (`BoundingBox`)

**Returns:** `protected boolean`

### setPlanksBlock

```java
protected void setPlanksBlock(WorldGenLevel p_227891_, BoundingBox p_227892_, BlockState p_227893_, int p_227894_, int p_227895_, int p_227896_)
```

**Parameters:**

- `p_227891_` (`WorldGenLevel`)
- `p_227892_` (`BoundingBox`)
- `p_227893_` (`BlockState`)
- `p_227894_` (`int`)
- `p_227895_` (`int`)
- `p_227896_` (`int`)

**Returns:** `protected void`

### MineShaftRoom

```java
public MineShaftRoom(int p_227902_, RandomSource p_227903_, int p_227904_, int p_227905_, MineshaftStructure.Type p_227906_)
```

**Parameters:**

- `p_227902_` (`int`)
- `p_227903_` (`RandomSource`)
- `p_227904_` (`int`)
- `p_227905_` (`int`)
- `p_227906_` (`MineshaftStructure.Type`)

**Returns:** `public`

### MineShaftRoom

```java
public MineShaftRoom(CompoundTag p_227908_)
```

**Parameters:**

- `p_227908_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addChildren

```java
public void addChildren(StructurePiece p_227922_, StructurePieceAccessor p_227923_, RandomSource p_227924_)
```

**Parameters:**

- `p_227922_` (`StructurePiece`)
- `p_227923_` (`StructurePieceAccessor`)
- `p_227924_` (`RandomSource`)

### postProcess

```java
public void postProcess(WorldGenLevel p_227914_, StructureManager p_227915_, ChunkGenerator p_227916_, RandomSource p_227917_, BoundingBox p_227918_, ChunkPos p_227919_, BlockPos p_227920_)
```

**Parameters:**

- `p_227914_` (`WorldGenLevel`)
- `p_227915_` (`StructureManager`)
- `p_227916_` (`ChunkGenerator`)
- `p_227917_` (`RandomSource`)
- `p_227918_` (`BoundingBox`)
- `p_227919_` (`ChunkPos`)
- `p_227920_` (`BlockPos`)

### move

```java
public void move(int p_227910_, int p_227911_, int p_227912_)
```

**Parameters:**

- `p_227910_` (`int`)
- `p_227911_` (`int`)
- `p_227912_` (`int`)

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(StructurePieceSerializationContext p_227926_, CompoundTag p_227927_)
```

**Parameters:**

- `p_227926_` (`StructurePieceSerializationContext`)
- `p_227927_` (`CompoundTag`)

### MineShaftStairs

```java
public MineShaftStairs(int p_227932_, BoundingBox p_227933_, Direction p_227934_, MineshaftStructure.Type p_227935_)
```

**Parameters:**

- `p_227932_` (`int`)
- `p_227933_` (`BoundingBox`)
- `p_227934_` (`Direction`)
- `p_227935_` (`MineshaftStructure.Type`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### MineShaftStairs

```java
public MineShaftStairs(CompoundTag p_227937_)
```

**Parameters:**

- `p_227937_` (`CompoundTag`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### findStairs

```java
public static BoundingBox findStairs(StructurePieceAccessor p_227951_, RandomSource p_227952_, int p_227953_, int p_227954_, int p_227955_, Direction p_227956_)
```

**Parameters:**

- `p_227951_` (`StructurePieceAccessor`)
- `p_227952_` (`RandomSource`)
- `p_227953_` (`int`)
- `p_227954_` (`int`)
- `p_227955_` (`int`)
- `p_227956_` (`Direction`)

**Returns:** `BoundingBox`

### BoundingBox

```java
> new BoundingBox()
```

**Returns:** `> new`

### BoundingBox

```java
> new BoundingBox()
```

**Returns:** `> new`

### BoundingBox

```java
> new BoundingBox()
```

**Returns:** `> new`

### BoundingBox

```java
> new BoundingBox()
```

**Returns:** `> new`

### addChildren

```java
public void addChildren(StructurePiece p_227947_, StructurePieceAccessor p_227948_, RandomSource p_227949_)
```

**Parameters:**

- `p_227947_` (`StructurePiece`)
- `p_227948_` (`StructurePieceAccessor`)
- `p_227949_` (`RandomSource`)

### postProcess

```java
public void postProcess(WorldGenLevel p_227939_, StructureManager p_227940_, ChunkGenerator p_227941_, RandomSource p_227942_, BoundingBox p_227943_, ChunkPos p_227944_, BlockPos p_227945_)
```

**Parameters:**

- `p_227939_` (`WorldGenLevel`)
- `p_227940_` (`StructureManager`)
- `p_227941_` (`ChunkGenerator`)
- `p_227942_` (`RandomSource`)
- `p_227943_` (`BoundingBox`)
- `p_227944_` (`ChunkPos`)
- `p_227945_` (`BlockPos`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `MineShaftCorridor` | class |  |
| `MineShaftCrossing` | class |  |
| `MineShaftRoom` | class |  |
| `MineShaftStairs` | class |  |
