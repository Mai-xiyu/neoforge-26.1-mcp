# StructureBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_OFFSET_PER_AXIS` | `int` |  |
| `MAX_SIZE_PER_AXIS` | `int` |  |
| `AUTHOR_TAG` | `String` |  |

## Methods

### StructureBlockEntity

```java
public StructureBlockEntity(BlockPos p_155779_, BlockState p_155780_)
```

**Parameters:**

- `p_155779_` (`BlockPos`)
- `p_155780_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187524_, HolderLookup.Provider p_323617_)
```

**Parameters:**

- `p_187524_` (`CompoundTag`)
- `p_323617_` (`HolderLookup.Provider`)

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_155800_, HolderLookup.Provider p_324076_)
```

**Parameters:**

- `p_155800_` (`CompoundTag`)
- `p_324076_` (`HolderLookup.Provider`)

### updateBlockState

```java
private void updateBlockState()
```

**Returns:** `private void`

### getUpdatePacket

```java
public ClientboundBlockEntityDataPacket getUpdatePacket()
```

**Returns:** `public ClientboundBlockEntityDataPacket`

### getUpdateTag

```java
public CompoundTag getUpdateTag(HolderLookup.Provider p_324257_)
```

**Parameters:**

- `p_324257_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### usedBy

```java
public boolean usedBy(Player p_59854_)
```

**Parameters:**

- `p_59854_` (`Player`)

**Returns:** `public boolean`

### getStructureName

```java
public String getStructureName()
```

**Returns:** `public String`

### hasStructureName

```java
public boolean hasStructureName()
```

**Returns:** `public boolean`

### setStructureName

```java
public void setStructureName(String p_59869_)
```

**Parameters:**

- `p_59869_` (`String`)

**Returns:** `public void`

### setStructureName

```java
public void setStructureName(ResourceLocation p_59875_)
```

**Parameters:**

- `p_59875_` (`ResourceLocation`)

**Returns:** `public void`

### createdBy

```java
public void createdBy(LivingEntity p_59852_)
```

**Parameters:**

- `p_59852_` (`LivingEntity`)

**Returns:** `public void`

### getStructurePos

```java
public BlockPos getStructurePos()
```

**Returns:** `public BlockPos`

### setStructurePos

```java
public void setStructurePos(BlockPos p_59886_)
```

**Parameters:**

- `p_59886_` (`BlockPos`)

**Returns:** `public void`

### getStructureSize

```java
public Vec3i getStructureSize()
```

**Returns:** `public Vec3i`

### setStructureSize

```java
public void setStructureSize(Vec3i p_155798_)
```

**Parameters:**

- `p_155798_` (`Vec3i`)

**Returns:** `public void`

### getMirror

```java
public Mirror getMirror()
```

**Returns:** `public Mirror`

### setMirror

```java
public void setMirror(Mirror p_59882_)
```

**Parameters:**

- `p_59882_` (`Mirror`)

**Returns:** `public void`

### getRotation

```java
public Rotation getRotation()
```

**Returns:** `public Rotation`

### setRotation

```java
public void setRotation(Rotation p_59884_)
```

**Parameters:**

- `p_59884_` (`Rotation`)

**Returns:** `public void`

### getMetaData

```java
public String getMetaData()
```

**Returns:** `public String`

### setMetaData

```java
public void setMetaData(String p_59888_)
```

**Parameters:**

- `p_59888_` (`String`)

**Returns:** `public void`

### getMode

```java
public StructureMode getMode()
```

**Returns:** `public StructureMode`

### setMode

```java
public void setMode(StructureMode p_59861_)
```

**Parameters:**

- `p_59861_` (`StructureMode`)

**Returns:** `public void`

### isIgnoreEntities

```java
public boolean isIgnoreEntities()
```

**Returns:** `public boolean`

### setIgnoreEntities

```java
public void setIgnoreEntities(boolean p_59877_)
```

**Parameters:**

- `p_59877_` (`boolean`)

**Returns:** `public void`

### getIntegrity

```java
public float getIntegrity()
```

**Returns:** `public float`

### setIntegrity

```java
public void setIntegrity(float p_59839_)
```

**Parameters:**

- `p_59839_` (`float`)

**Returns:** `public void`

### getSeed

```java
public long getSeed()
```

**Returns:** `public long`

### setSeed

```java
public void setSeed(long p_59841_)
```

**Parameters:**

- `p_59841_` (`long`)

**Returns:** `public void`

### detectSize

```java
public boolean detectSize()
```

**Returns:** `public boolean`

### getRelatedCorners

```java
private Stream<BlockPos> getRelatedCorners(BlockPos p_155792_, BlockPos p_155793_)
```

**Parameters:**

- `p_155792_` (`BlockPos`)
- `p_155793_` (`BlockPos`)

**Returns:** `private Stream<BlockPos>`

### calculateEnclosingBoundingBox

```java
private static Optional<BoundingBox> calculateEnclosingBoundingBox(BlockPos p_155795_, Stream<BlockPos> p_155796_)
```

**Parameters:**

- `p_155795_` (`BlockPos`)
- `p_155796_` (`Stream<BlockPos>`)

**Returns:** `private static Optional<BoundingBox>`

### saveStructure

```java
public boolean saveStructure()
```

**Returns:** `public boolean`

### saveStructure

```java
public boolean saveStructure(boolean p_59890_)
```

**Parameters:**

- `p_59890_` (`boolean`)

**Returns:** `public boolean`

### createRandom

```java
public static RandomSource createRandom(long p_222889_)
```

**Parameters:**

- `p_222889_` (`long`)

**Returns:** `public static RandomSource`

### placeStructureIfSameSize

```java
public boolean placeStructureIfSameSize(ServerLevel p_309647_)
```

**Parameters:**

- `p_309647_` (`ServerLevel`)

**Returns:** `public boolean`

### loadStructureInfo

```java
public boolean loadStructureInfo(ServerLevel p_309683_)
```

**Parameters:**

- `p_309683_` (`ServerLevel`)

**Returns:** `public boolean`

### loadStructureInfo

```java
private void loadStructureInfo(StructureTemplate p_309715_)
```

**Parameters:**

- `p_309715_` (`StructureTemplate`)

**Returns:** `private void`

### placeStructure

```java
public void placeStructure(ServerLevel p_309543_)
```

**Parameters:**

- `p_309543_` (`ServerLevel`)

**Returns:** `public void`

### placeStructure

```java
private void placeStructure(ServerLevel p_309691_, StructureTemplate p_309550_)
```

**Parameters:**

- `p_309691_` (`ServerLevel`)
- `p_309550_` (`StructureTemplate`)

**Returns:** `private void`

### unloadStructure

```java
public void unloadStructure()
```

**Returns:** `public void`

### isStructureLoadable

```java
public boolean isStructureLoadable()
```

**Returns:** `public boolean`

### isPowered

```java
public boolean isPowered()
```

**Returns:** `public boolean`

### setPowered

```java
public void setPowered(boolean p_59894_)
```

**Parameters:**

- `p_59894_` (`boolean`)

**Returns:** `public void`

### getShowAir

```java
public boolean getShowAir()
```

**Returns:** `public boolean`

### setShowAir

```java
public void setShowAir(boolean p_59897_)
```

**Parameters:**

- `p_59897_` (`boolean`)

**Returns:** `public void`

### getShowBoundingBox

```java
public boolean getShowBoundingBox()
```

**Returns:** `public boolean`

### setShowBoundingBox

```java
public void setShowBoundingBox(boolean p_59899_)
```

**Parameters:**

- `p_59899_` (`boolean`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `UpdateType` | enum |  |
