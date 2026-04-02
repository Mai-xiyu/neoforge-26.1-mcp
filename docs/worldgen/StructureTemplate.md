# StructureTemplate

**Package:** `net.minecraft.world.level.levelgen.structure.templatesystem`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PALETTE_TAG` | `String` |  |
| `PALETTE_LIST_TAG` | `String` |  |
| `ENTITIES_TAG` | `String` |  |
| `BLOCKS_TAG` | `String` |  |
| `BLOCK_TAG_POS` | `String` |  |
| `BLOCK_TAG_STATE` | `String` |  |
| `BLOCK_TAG_NBT` | `String` |  |
| `ENTITY_TAG_POS` | `String` |  |
| `ENTITY_TAG_BLOCKPOS` | `String` |  |
| `ENTITY_TAG_NBT` | `String` |  |
| `SIZE_TAG` | `String` |  |

## Methods

### getSize

```java
public Vec3i getSize()
```

**Returns:** `public Vec3i`

### setAuthor

```java
public void setAuthor(String p_74613_)
```

**Parameters:**

- `p_74613_` (`String`)

**Returns:** `public void`

### getAuthor

```java
public String getAuthor()
```

**Returns:** `public String`

### fillFromWorld

```java
public void fillFromWorld(Level p_163803_, BlockPos p_163804_, Vec3i p_163805_, boolean p_163806_, Block p_163807_)
```

**Parameters:**

- `p_163803_` (`Level`)
- `p_163804_` (`BlockPos`)
- `p_163805_` (`Vec3i`)
- `p_163806_` (`boolean`)
- `p_163807_` (`Block`)

**Returns:** `public void`

### addToLists

```java
 addToLists()
```

**Returns:** ``

### addToLists

```java
private static void addToLists(StructureTemplate.StructureBlockInfo p_74574_, List<StructureTemplate.StructureBlockInfo> p_74575_, List<StructureTemplate.StructureBlockInfo> p_74576_, List<StructureTemplate.StructureBlockInfo> p_74577_)
```

**Parameters:**

- `p_74574_` (`StructureTemplate.StructureBlockInfo`)
- `p_74575_` (`List<StructureTemplate.StructureBlockInfo>`)
- `p_74576_` (`List<StructureTemplate.StructureBlockInfo>`)
- `p_74577_` (`List<StructureTemplate.StructureBlockInfo>`)

**Returns:** `private static void`

### buildInfoList

```java
private static List<StructureTemplate.StructureBlockInfo> buildInfoList(List<StructureTemplate.StructureBlockInfo> p_74615_, List<StructureTemplate.StructureBlockInfo> p_74616_, List<StructureTemplate.StructureBlockInfo> p_74617_)
```

**Parameters:**

- `p_74615_` (`List<StructureTemplate.StructureBlockInfo>`)
- `p_74616_` (`List<StructureTemplate.StructureBlockInfo>`)
- `p_74617_` (`List<StructureTemplate.StructureBlockInfo>`)

**Returns:** `private static List<StructureTemplate.StructureBlockInfo>`

### fillEntityList

```java
private void fillEntityList(Level p_74501_, BlockPos p_74502_, BlockPos p_74503_)
```

**Parameters:**

- `p_74501_` (`Level`)
- `p_74502_` (`BlockPos`)
- `p_74503_` (`BlockPos`)

**Returns:** `private void`

### filterBlocks

```java
public List<StructureTemplate.StructureBlockInfo> filterBlocks(BlockPos p_74604_, StructurePlaceSettings p_74605_, Block p_74606_)
```

**Parameters:**

- `p_74604_` (`BlockPos`)
- `p_74605_` (`StructurePlaceSettings`)
- `p_74606_` (`Block`)

**Returns:** `public List<StructureTemplate.StructureBlockInfo>`

### filterBlocks

```java
public ObjectArrayList<StructureTemplate.StructureBlockInfo> filterBlocks(BlockPos p_230336_, StructurePlaceSettings p_230337_, Block p_230338_, boolean p_230339_)
```

**Parameters:**

- `p_230336_` (`BlockPos`)
- `p_230337_` (`StructurePlaceSettings`)
- `p_230338_` (`Block`)
- `p_230339_` (`boolean`)

**Returns:** `public ObjectArrayList<StructureTemplate.StructureBlockInfo>`

### calculateConnectedPosition

```java
public BlockPos calculateConnectedPosition(StructurePlaceSettings p_74567_, BlockPos p_74568_, StructurePlaceSettings p_74569_, BlockPos p_74570_)
```

**Parameters:**

- `p_74567_` (`StructurePlaceSettings`)
- `p_74568_` (`BlockPos`)
- `p_74569_` (`StructurePlaceSettings`)
- `p_74570_` (`BlockPos`)

**Returns:** `public BlockPos`

### calculateRelativePosition

```java
public static BlockPos calculateRelativePosition(StructurePlaceSettings p_74564_, BlockPos p_74565_)
```

**Parameters:**

- `p_74564_` (`StructurePlaceSettings`)
- `p_74565_` (`BlockPos`)

**Returns:** `public static BlockPos`

### transformedVec3d

```java
public static Vec3 transformedVec3d(StructurePlaceSettings placementIn, Vec3 pos)
```

**Parameters:**

- `placementIn` (`StructurePlaceSettings`)
- `pos` (`Vec3`)

**Returns:** `public static Vec3`

### placeInWorld

```java
public boolean placeInWorld(ServerLevelAccessor p_230329_, BlockPos p_230330_, BlockPos p_230331_, StructurePlaceSettings p_230332_, RandomSource p_230333_, int p_230334_)
```

**Parameters:**

- `p_230329_` (`ServerLevelAccessor`)
- `p_230330_` (`BlockPos`)
- `p_230331_` (`BlockPos`)
- `p_230332_` (`StructurePlaceSettings`)
- `p_230333_` (`RandomSource`)
- `p_230334_` (`int`)

**Returns:** `public boolean`

### updateShapeAtEdge

```java
 updateShapeAtEdge()
```

**Returns:** ``

### updateShapeAtEdge

```java
public static void updateShapeAtEdge(LevelAccessor p_333926_, int p_333789_, DiscreteVoxelShape p_333845_, BlockPos p_333731_)
```

**Parameters:**

- `p_333926_` (`LevelAccessor`)
- `p_333789_` (`int`)
- `p_333845_` (`DiscreteVoxelShape`)
- `p_333731_` (`BlockPos`)

**Returns:** `public static void`

### updateShapeAtEdge

```java
public static void updateShapeAtEdge(LevelAccessor p_74511_, int p_74512_, DiscreteVoxelShape p_74513_, int p_74514_, int p_74515_, int p_74516_)
```

**Parameters:**

- `p_74511_` (`LevelAccessor`)
- `p_74512_` (`int`)
- `p_74513_` (`DiscreteVoxelShape`)
- `p_74514_` (`int`)
- `p_74515_` (`int`)
- `p_74516_` (`int`)

**Returns:** `public static void`

### processBlockInfos

```java
return processBlockInfos()
```

**Returns:** `return`

### processBlockInfos

```java
public static List<StructureTemplate.StructureBlockInfo> processBlockInfos(ServerLevelAccessor p_278297_, BlockPos p_74519_, BlockPos p_74520_, StructurePlaceSettings p_74521_, List<StructureTemplate.StructureBlockInfo> p_74522_, StructureTemplate template)
```

**Parameters:**

- `p_278297_` (`ServerLevelAccessor`)
- `p_74519_` (`BlockPos`)
- `p_74520_` (`BlockPos`)
- `p_74521_` (`StructurePlaceSettings`)
- `p_74522_` (`List<StructureTemplate.StructureBlockInfo>`)
- `template` (`StructureTemplate`)

**Returns:** `public static List<StructureTemplate.StructureBlockInfo>`

### processEntityInfos

```java
public static List<StructureTemplate.StructureEntityInfo> processEntityInfos(StructureTemplate template, LevelAccessor p_215387_0_, BlockPos p_215387_1_, StructurePlaceSettings p_215387_2_, List<StructureTemplate.StructureEntityInfo> p_215387_3_)
```

**Parameters:**

- `template` (`StructureTemplate`)
- `p_215387_0_` (`LevelAccessor`)
- `p_215387_1_` (`BlockPos`)
- `p_215387_2_` (`StructurePlaceSettings`)
- `p_215387_3_` (`List<StructureTemplate.StructureEntityInfo>`)

**Returns:** `public static List<StructureTemplate.StructureEntityInfo>`

### addEntitiesToWorld

```java
private void addEntitiesToWorld(ServerLevelAccessor p_74524_, BlockPos p_74525_, StructurePlaceSettings placementIn)
```

**Parameters:**

- `p_74524_` (`ServerLevelAccessor`)
- `p_74525_` (`BlockPos`)
- `placementIn` (`StructurePlaceSettings`)

**Returns:** `private void`

### createEntityIgnoreException

```java
private static Optional<Entity> createEntityIgnoreException(ServerLevelAccessor p_74544_, CompoundTag p_74545_)
```

**Parameters:**

- `p_74544_` (`ServerLevelAccessor`)
- `p_74545_` (`CompoundTag`)

**Returns:** `private static Optional<Entity>`

### getSize

```java
public Vec3i getSize(Rotation p_163809_)
```

**Parameters:**

- `p_163809_` (`Rotation`)

**Returns:** `public Vec3i`

### transform

```java
public static BlockPos transform(BlockPos p_74594_, Mirror p_74595_, Rotation p_74596_, BlockPos p_74597_)
```

**Parameters:**

- `p_74594_` (`BlockPos`)
- `p_74595_` (`Mirror`)
- `p_74596_` (`Rotation`)
- `p_74597_` (`BlockPos`)

**Returns:** `public static BlockPos`

### BlockPos

```java
return new BlockPos(l - i1 + k, l + i1 - i)
```

**Parameters:**

- `k` (`l - i1 +`)
- `i` (`l + i1 -`)

**Returns:** `return new`

### BlockPos

```java
return new BlockPos(l + i1 - k, i1 - l + i)
```

**Parameters:**

- `k` (`l + i1 -`)
- `i` (`i1 - l +`)

**Returns:** `return new`

### BlockPos

```java
return new BlockPos(l + l - i, i1 + i1 - k)
```

**Parameters:**

- `i` (`l + l -`)
- `k` (`i1 + i1 -`)

**Returns:** `return new`

### transform

```java
public static Vec3 transform(Vec3 p_74579_, Mirror p_74580_, Rotation p_74581_, BlockPos p_74582_)
```

**Parameters:**

- `p_74579_` (`Vec3`)
- `p_74580_` (`Mirror`)
- `p_74581_` (`Rotation`)
- `p_74582_` (`BlockPos`)

**Returns:** `public static Vec3`

### getZeroPositionWithTransform

```java
public BlockPos getZeroPositionWithTransform(BlockPos p_74584_, Mirror p_74585_, Rotation p_74586_)
```

**Parameters:**

- `p_74584_` (`BlockPos`)
- `p_74585_` (`Mirror`)
- `p_74586_` (`Rotation`)

**Returns:** `public BlockPos`

### getZeroPositionWithTransform

```java
public static BlockPos getZeroPositionWithTransform(BlockPos p_74588_, Mirror p_74589_, Rotation p_74590_, int p_74591_, int p_74592_)
```

**Parameters:**

- `p_74588_` (`BlockPos`)
- `p_74589_` (`Mirror`)
- `p_74590_` (`Rotation`)
- `p_74591_` (`int`)
- `p_74592_` (`int`)

**Returns:** `public static BlockPos`

### getBoundingBox

```java
public BoundingBox getBoundingBox(StructurePlaceSettings p_74634_, BlockPos p_74635_)
```

**Parameters:**

- `p_74634_` (`StructurePlaceSettings`)
- `p_74635_` (`BlockPos`)

**Returns:** `public BoundingBox`

### getBoundingBox

```java
public BoundingBox getBoundingBox(BlockPos p_74599_, Rotation p_74600_, BlockPos p_74601_, Mirror p_74602_)
```

**Parameters:**

- `p_74599_` (`BlockPos`)
- `p_74600_` (`Rotation`)
- `p_74601_` (`BlockPos`)
- `p_74602_` (`Mirror`)

**Returns:** `public BoundingBox`

### getBoundingBox

```java
return getBoundingBox()
```

**Returns:** `return`

### getBoundingBox

```java
protected static BoundingBox getBoundingBox(BlockPos p_163811_, Rotation p_163812_, BlockPos p_163813_, Mirror p_163814_, Vec3i p_163815_)
```

**Parameters:**

- `p_163811_` (`BlockPos`)
- `p_163812_` (`Rotation`)
- `p_163813_` (`BlockPos`)
- `p_163814_` (`Mirror`)
- `p_163815_` (`Vec3i`)

**Returns:** `BoundingBox`

### save

```java
public CompoundTag save(CompoundTag p_74619_)
```

**Parameters:**

- `p_74619_` (`CompoundTag`)

**Returns:** `public CompoundTag`

### load

```java
public void load(HolderGetter<Block> p_255773_, CompoundTag p_248574_)
```

**Parameters:**

- `p_255773_` (`HolderGetter<Block>`)
- `p_248574_` (`CompoundTag`)

**Returns:** `public void`

### loadPalette

```java
private void loadPalette(HolderGetter<Block> p_256546_, ListTag p_251056_, ListTag p_251493_)
```

**Parameters:**

- `p_256546_` (`HolderGetter<Block>`)
- `p_251056_` (`ListTag`)
- `p_251493_` (`ListTag`)

**Returns:** `private void`

### addToLists

```java
 addToLists()
```

**Returns:** ``

### newIntegerList

```java
private ListTag newIntegerList(int[]... p_74626_)
```

**Parameters:**

- `p_74626_` (`int[]...`)

**Returns:** `private ListTag`

### newDoubleList

```java
private ListTag newDoubleList(double[]... p_74624_)
```

**Parameters:**

- `p_74624_` (`double[]...`)

**Returns:** `private ListTag`

### Palette

```java
s palette caches now thread safe for worldgen Palette(List<StructureTemplate.StructureBlockInfo> p_74648_)
```

**Parameters:**

- `p_74648_` (`List<StructureTemplate.StructureBlockInfo>`)

**Returns:** `s palette caches now thread safe for worldgen`

### blocks

```java
public List<StructureTemplate.StructureBlockInfo> blocks()
```

**Returns:** `public List<StructureTemplate.StructureBlockInfo>`

### blocks

```java
public List<StructureTemplate.StructureBlockInfo> blocks(Block p_74654_)
```

**Parameters:**

- `p_74654_` (`Block`)

**Returns:** `public List<StructureTemplate.StructureBlockInfo>`

### idFor

```java
public int idFor(BlockState p_74670_)
```

**Parameters:**

- `p_74670_` (`BlockState`)

**Returns:** `public int`

### stateFor

```java
public BlockState stateFor(int p_74668_)
```

**Parameters:**

- `p_74668_` (`int`)

**Returns:** `BlockState`

### iterator

```java
public Iterator<BlockState> iterator()
```

**Returns:** `Iterator<BlockState>`

### addMapping

```java
public void addMapping(BlockState p_74672_, int p_74673_)
```

**Parameters:**

- `p_74672_` (`BlockState`)
- `p_74673_` (`int`)

**Returns:** `public void`

### StructureBlockInfo

```java
public static record StructureBlockInfo(BlockPos pos, BlockState state, CompoundTag nbt)
```

**Parameters:**

- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `nbt` (`CompoundTag`)

**Returns:** `public static record`

### toString

```java
public String toString()
```

**Returns:** `String`

### StructureEntityInfo

```java
public StructureEntityInfo(Vec3 p_74687_, BlockPos p_74688_, CompoundTag p_74689_)
```

**Parameters:**

- `p_74687_` (`Vec3`)
- `p_74688_` (`BlockPos`)
- `p_74689_` (`CompoundTag`)

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Palette` | class |  |
| `StructureBlockInfo` | record |  |
| `StructureEntityInfo` | class |  |
