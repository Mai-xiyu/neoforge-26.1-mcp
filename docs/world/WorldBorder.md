# WorldBorder

**Package:** `net.minecraft.world.level.border`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_SIZE` | `double` |  |
| `MAX_CENTER_COORDINATE` | `double` |  |
| `DEFAULT_SETTINGS` | `WorldBorder.Settings` |  |

## Methods

### isWithinBounds

```java
public boolean isWithinBounds(BlockPos p_61938_)
```

**Parameters:**

- `p_61938_` (`BlockPos`)

**Returns:** `public boolean`

### isWithinBounds

```java
public boolean isWithinBounds(Vec3 p_352959_)
```

**Parameters:**

- `p_352959_` (`Vec3`)

**Returns:** `public boolean`

### isWithinBounds

```java
public boolean isWithinBounds(ChunkPos p_61928_)
```

**Parameters:**

- `p_61928_` (`ChunkPos`)

**Returns:** `public boolean`

### isWithinBounds

```java
public boolean isWithinBounds(AABB p_61936_)
```

**Parameters:**

- `p_61936_` (`AABB`)

**Returns:** `public boolean`

### isWithinBounds

```java
private boolean isWithinBounds(double p_352952_, double p_352910_, double p_352939_, double p_352943_)
```

**Parameters:**

- `p_352952_` (`double`)
- `p_352910_` (`double`)
- `p_352939_` (`double`)
- `p_352943_` (`double`)

**Returns:** `private boolean`

### isWithinBounds

```java
public boolean isWithinBounds(double p_156094_, double p_156095_)
```

**Parameters:**

- `p_156094_` (`double`)
- `p_156095_` (`double`)

**Returns:** `public boolean`

### isWithinBounds

```java
public boolean isWithinBounds(double p_187563_, double p_187564_, double p_187565_)
```

**Parameters:**

- `p_187563_` (`double`)
- `p_187564_` (`double`)
- `p_187565_` (`double`)

**Returns:** `public boolean`

### clampToBounds

```java
public BlockPos clampToBounds(BlockPos p_352967_)
```

**Parameters:**

- `p_352967_` (`BlockPos`)

**Returns:** `public BlockPos`

### clampToBounds

```java
public BlockPos clampToBounds(Vec3 p_352921_)
```

**Parameters:**

- `p_352921_` (`Vec3`)

**Returns:** `public BlockPos`

### clampToBounds

```java
public BlockPos clampToBounds(double p_187570_, double p_187571_, double p_187572_)
```

**Parameters:**

- `p_187570_` (`double`)
- `p_187571_` (`double`)
- `p_187572_` (`double`)

**Returns:** `public BlockPos`

### getDistanceToBorder

```java
public double getDistanceToBorder(Entity p_61926_)
```

**Parameters:**

- `p_61926_` (`Entity`)

**Returns:** `public double`

### getCollisionShape

```java
public VoxelShape getCollisionShape()
```

**Returns:** `public VoxelShape`

### getDistanceToBorder

```java
public double getDistanceToBorder(double p_61942_, double p_61943_)
```

**Parameters:**

- `p_61942_` (`double`)
- `p_61943_` (`double`)

**Returns:** `public double`

### isInsideCloseToBorder

```java
public boolean isInsideCloseToBorder(Entity p_187567_, AABB p_187568_)
```

**Parameters:**

- `p_187567_` (`Entity`)
- `p_187568_` (`AABB`)

**Returns:** `public boolean`

### getStatus

```java
public BorderStatus getStatus()
```

**Returns:** `public BorderStatus`

### getMinX

```java
public double getMinX()
```

**Returns:** `public double`

### getMinZ

```java
public double getMinZ()
```

**Returns:** `public double`

### getMaxX

```java
public double getMaxX()
```

**Returns:** `public double`

### getMaxZ

```java
public double getMaxZ()
```

**Returns:** `public double`

### getCenterX

```java
public double getCenterX()
```

**Returns:** `public double`

### getCenterZ

```java
public double getCenterZ()
```

**Returns:** `public double`

### setCenter

```java
public void setCenter(double p_61950_, double p_61951_)
```

**Parameters:**

- `p_61950_` (`double`)
- `p_61951_` (`double`)

**Returns:** `public void`

### getSize

```java
public double getSize()
```

**Returns:** `public double`

### getLerpRemainingTime

```java
public long getLerpRemainingTime()
```

**Returns:** `public long`

### getLerpTarget

```java
public double getLerpTarget()
```

**Returns:** `public double`

### setSize

```java
public void setSize(double p_61918_)
```

**Parameters:**

- `p_61918_` (`double`)

**Returns:** `public void`

### lerpSizeBetween

```java
public void lerpSizeBetween(double p_61920_, double p_61921_, long p_61922_)
```

**Parameters:**

- `p_61920_` (`double`)
- `p_61921_` (`double`)
- `p_61922_` (`long`)

**Returns:** `public void`

### getListeners

```java
protected List<BorderChangeListener> getListeners()
```

**Returns:** `protected List<BorderChangeListener>`

### addListener

```java
public void addListener(BorderChangeListener p_61930_)
```

**Parameters:**

- `p_61930_` (`BorderChangeListener`)

**Returns:** `public void`

### removeListener

```java
public void removeListener(BorderChangeListener p_156097_)
```

**Parameters:**

- `p_156097_` (`BorderChangeListener`)

**Returns:** `public void`

### setAbsoluteMaxSize

```java
public void setAbsoluteMaxSize(int p_61924_)
```

**Parameters:**

- `p_61924_` (`int`)

**Returns:** `public void`

### getAbsoluteMaxSize

```java
public int getAbsoluteMaxSize()
```

**Returns:** `public int`

### getDamageSafeZone

```java
public double getDamageSafeZone()
```

**Returns:** `public double`

### setDamageSafeZone

```java
public void setDamageSafeZone(double p_61940_)
```

**Parameters:**

- `p_61940_` (`double`)

**Returns:** `public void`

### getDamagePerBlock

```java
public double getDamagePerBlock()
```

**Returns:** `public double`

### setDamagePerBlock

```java
public void setDamagePerBlock(double p_61948_)
```

**Parameters:**

- `p_61948_` (`double`)

**Returns:** `public void`

### getLerpSpeed

```java
public double getLerpSpeed()
```

**Returns:** `public double`

### getWarningTime

```java
public int getWarningTime()
```

**Returns:** `public int`

### setWarningTime

```java
public void setWarningTime(int p_61945_)
```

**Parameters:**

- `p_61945_` (`int`)

**Returns:** `public void`

### getWarningBlocks

```java
public int getWarningBlocks()
```

**Returns:** `public int`

### setWarningBlocks

```java
public void setWarningBlocks(int p_61953_)
```

**Parameters:**

- `p_61953_` (`int`)

**Returns:** `public void`

### tick

```java
public void tick()
```

**Returns:** `public void`

### createSettings

```java
public WorldBorder.Settings createSettings()
```

**Returns:** `public WorldBorder.Settings`

### applySettings

```java
public void applySettings(WorldBorder.Settings p_61932_)
```

**Parameters:**

- `p_61932_` (`WorldBorder.Settings`)

**Returns:** `public void`

### getMinX

```java
double getMinX()
```

**Returns:** `double`

### getMaxX

```java
double getMaxX()
```

**Returns:** `double`

### getMinZ

```java
double getMinZ()
```

**Returns:** `double`

### getMaxZ

```java
double getMaxZ()
```

**Returns:** `double`

### getSize

```java
double getSize()
```

**Returns:** `double`

### getLerpSpeed

```java
double getLerpSpeed()
```

**Returns:** `double`

### getLerpRemainingTime

```java
long getLerpRemainingTime()
```

**Returns:** `long`

### getLerpTarget

```java
double getLerpTarget()
```

**Returns:** `double`

### getStatus

```java
BorderStatus getStatus()
```

**Returns:** `BorderStatus`

### onAbsoluteMaxSizeChange

```java
void onAbsoluteMaxSizeChange()
```

### onCenterChange

```java
void onCenterChange()
```

### update

```java
WorldBorder.BorderExtent update()
```

**Returns:** `WorldBorder.BorderExtent`

### getCollisionShape

```java
VoxelShape getCollisionShape()
```

**Returns:** `VoxelShape`

### MovingBorderExtent

```java
 MovingBorderExtent(double p_61979_, double p_61980_, long p_61981_)
```

**Parameters:**

- `p_61979_` (`double`)
- `p_61980_` (`double`)
- `p_61981_` (`long`)

**Returns:** ``

### getMinX

```java
public double getMinX()
```

**Returns:** `double`

### getMinZ

```java
public double getMinZ()
```

**Returns:** `double`

### getMaxX

```java
public double getMaxX()
```

**Returns:** `double`

### getMaxZ

```java
public double getMaxZ()
```

**Returns:** `double`

### getSize

```java
public double getSize()
```

**Returns:** `double`

### getLerpSpeed

```java
public double getLerpSpeed()
```

**Returns:** `double`

### getLerpRemainingTime

```java
public long getLerpRemainingTime()
```

**Returns:** `long`

### getLerpTarget

```java
public double getLerpTarget()
```

**Returns:** `double`

### getStatus

```java
public BorderStatus getStatus()
```

**Returns:** `BorderStatus`

### onCenterChange

```java
public void onCenterChange()
```

### onAbsoluteMaxSizeChange

```java
public void onAbsoluteMaxSizeChange()
```

### update

```java
public WorldBorder.BorderExtent update()
```

**Returns:** `WorldBorder.BorderExtent`

### getCollisionShape

```java
public VoxelShape getCollisionShape()
```

**Returns:** `VoxelShape`

### Settings

```java
 Settings(double p_62011_, double p_62012_, double p_62013_, double p_62014_, int p_62015_, int p_62016_, double p_62017_, long p_62018_, double p_62019_)
```

**Parameters:**

- `p_62011_` (`double`)
- `p_62012_` (`double`)
- `p_62013_` (`double`)
- `p_62014_` (`double`)
- `p_62015_` (`int`)
- `p_62016_` (`int`)
- `p_62017_` (`double`)
- `p_62018_` (`long`)
- `p_62019_` (`double`)

**Returns:** ``

### Settings

```java
 Settings(WorldBorder p_62032_)
```

**Parameters:**

- `p_62032_` (`WorldBorder`)

**Returns:** ``

### getCenterX

```java
public double getCenterX()
```

**Returns:** `public double`

### getCenterZ

```java
public double getCenterZ()
```

**Returns:** `public double`

### getDamagePerBlock

```java
public double getDamagePerBlock()
```

**Returns:** `public double`

### getSafeZone

```java
public double getSafeZone()
```

**Returns:** `public double`

### getWarningBlocks

```java
public int getWarningBlocks()
```

**Returns:** `public int`

### getWarningTime

```java
public int getWarningTime()
```

**Returns:** `public int`

### getSize

```java
public double getSize()
```

**Returns:** `public double`

### getSizeLerpTime

```java
public long getSizeLerpTime()
```

**Returns:** `public long`

### getSizeLerpTarget

```java
public double getSizeLerpTarget()
```

**Returns:** `public double`

### read

```java
public static WorldBorder.Settings read(DynamicLike<?> p_62038_, WorldBorder.Settings p_62039_)
```

**Parameters:**

- `p_62038_` (`DynamicLike<?>`)
- `p_62039_` (`WorldBorder.Settings`)

**Returns:** `public static WorldBorder.Settings`

### write

```java
public void write(CompoundTag p_62041_)
```

**Parameters:**

- `p_62041_` (`CompoundTag`)

**Returns:** `public void`

### StaticBorderExtent

```java
public StaticBorderExtent(double p_62059_)
```

**Parameters:**

- `p_62059_` (`double`)

**Returns:** `public`

### getMinX

```java
public double getMinX()
```

**Returns:** `double`

### getMaxX

```java
public double getMaxX()
```

**Returns:** `double`

### getMinZ

```java
public double getMinZ()
```

**Returns:** `double`

### getMaxZ

```java
public double getMaxZ()
```

**Returns:** `double`

### getSize

```java
public double getSize()
```

**Returns:** `double`

### getStatus

```java
public BorderStatus getStatus()
```

**Returns:** `BorderStatus`

### getLerpSpeed

```java
public double getLerpSpeed()
```

**Returns:** `double`

### getLerpRemainingTime

```java
public long getLerpRemainingTime()
```

**Returns:** `long`

### getLerpTarget

```java
public double getLerpTarget()
```

**Returns:** `double`

### updateBox

```java
private void updateBox()
```

**Returns:** `private void`

### onAbsoluteMaxSizeChange

```java
public void onAbsoluteMaxSizeChange()
```

### onCenterChange

```java
public void onCenterChange()
```

### update

```java
public WorldBorder.BorderExtent update()
```

**Returns:** `WorldBorder.BorderExtent`

### getCollisionShape

```java
public VoxelShape getCollisionShape()
```

**Returns:** `VoxelShape`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Settings` | class |  |
