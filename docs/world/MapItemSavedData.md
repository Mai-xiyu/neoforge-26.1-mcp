# MapItemSavedData

**Package:** `net.minecraft.world.level.saveddata.maps`
**Type:** class
**Extends:** `SavedData`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_SCALE` | `int` |  |
| `TRACKED_DECORATION_LIMIT` | `int` |  |
| `centerX` | `int` |  |
| `centerZ` | `int` |  |
| `dimension` | `ResourceKey<Level>` |  |
| `scale` | `byte` |  |
| `colors` | `byte[]` |  |
| `locked` | `boolean` |  |

## Methods

### factory

```java
public static SavedData.Factory<MapItemSavedData> factory()
```

**Returns:** `public static SavedData.Factory<MapItemSavedData>`

### IllegalStateException

```java
throw new IllegalStateException("Should never create an empty map saved data")
```

**Parameters:**

- `data"` (`"Should never create an empty map saved`)

**Returns:** `throw new`

### MapItemSavedData

```java
private MapItemSavedData(int p_164768_, int p_164769_, byte p_164770_, boolean p_164771_, boolean p_164772_, boolean p_164773_, ResourceKey<Level> p_164774_)
```

**Parameters:**

- `p_164768_` (`int`)
- `p_164769_` (`int`)
- `p_164770_` (`byte`)
- `p_164771_` (`boolean`)
- `p_164772_` (`boolean`)
- `p_164773_` (`boolean`)
- `p_164774_` (`ResourceKey<Level>`)

**Returns:** `private`

### createFresh

```java
public static MapItemSavedData createFresh(double p_164781_, double p_164782_, byte p_164783_, boolean p_164784_, boolean p_164785_, ResourceKey<Level> p_164786_)
```

**Parameters:**

- `p_164781_` (`double`)
- `p_164782_` (`double`)
- `p_164783_` (`byte`)
- `p_164784_` (`boolean`)
- `p_164785_` (`boolean`)
- `p_164786_` (`ResourceKey<Level>`)

**Returns:** `public static MapItemSavedData`

### MapItemSavedData

```java
return new MapItemSavedData()
```

**Returns:** `return new`

### createForClient

```java
public static MapItemSavedData createForClient(byte p_164777_, boolean p_164778_, ResourceKey<Level> p_164779_)
```

**Parameters:**

- `p_164777_` (`byte`)
- `p_164778_` (`boolean`)
- `p_164779_` (`ResourceKey<Level>`)

**Returns:** `public static MapItemSavedData`

### MapItemSavedData

```java
return new MapItemSavedData()
```

**Returns:** `return new`

### load

```java
public static MapItemSavedData load(CompoundTag p_164808_, HolderLookup.Provider p_324560_)
```

**Parameters:**

- `p_164808_` (`CompoundTag`)
- `p_324560_` (`HolderLookup.Provider`)

**Returns:** `public static MapItemSavedData`

### save

```java
public CompoundTag save(CompoundTag p_77956_, HolderLookup.Provider p_323858_)
```

**Parameters:**

- `p_77956_` (`CompoundTag`)
- `p_323858_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### locked

```java
public MapItemSavedData locked()
```

**Returns:** `public MapItemSavedData`

### scaled

```java
public MapItemSavedData scaled()
```

**Returns:** `public MapItemSavedData`

### mapMatcher

```java
private static Predicate<ItemStack> mapMatcher(ItemStack p_316807_)
```

**Parameters:**

- `p_316807_` (`ItemStack`)

**Returns:** `private static Predicate<ItemStack>`

### tickCarriedBy

```java
public void tickCarriedBy(Player p_77919_, ItemStack p_77920_)
```

**Parameters:**

- `p_77919_` (`Player`)
- `p_77920_` (`ItemStack`)

**Returns:** `public void`

### removeDecoration

```java
public void removeDecoration(String p_164800_)
```

**Parameters:**

- `p_164800_` (`String`)

**Returns:** `public void`

### addTargetDecoration

```java
public static void addTargetDecoration(ItemStack p_77926_, BlockPos p_77927_, String p_77928_, Holder<MapDecorationType> p_335759_)
```

**Parameters:**

- `p_77926_` (`ItemStack`)
- `p_77927_` (`BlockPos`)
- `p_77928_` (`String`)
- `p_335759_` (`Holder<MapDecorationType>`)

**Returns:** `public static void`

### addDecoration

```java
public void addDecoration(Holder<MapDecorationType> p_335830_, LevelAccessor p_77939_, String p_77940_, double p_77941_, double p_77942_, double p_77943_, Component p_77944_)
```

**Parameters:**

- `p_335830_` (`Holder<MapDecorationType>`)
- `p_77939_` (`LevelAccessor`)
- `p_77940_` (`String`)
- `p_77941_` (`double`)
- `p_77942_` (`double`)
- `p_77943_` (`double`)
- `p_77944_` (`Component`)

**Returns:** `public void`

### getUpdatePacket

```java
public Packet<?> getUpdatePacket(MapId p_323760_, Player p_164798_)
```

**Parameters:**

- `p_323760_` (`MapId`)
- `p_164798_` (`Player`)

**Returns:** `Packet<?>`

### setColorsDirty

```java
private void setColorsDirty(int p_164790_, int p_164791_)
```

**Parameters:**

- `p_164790_` (`int`)
- `p_164791_` (`int`)

**Returns:** `private void`

### setDecorationsDirty

```java
private void setDecorationsDirty()
```

**Returns:** `private void`

### getHoldingPlayer

```java
public MapItemSavedData.HoldingPlayer getHoldingPlayer(Player p_77917_)
```

**Parameters:**

- `p_77917_` (`Player`)

**Returns:** `public MapItemSavedData.HoldingPlayer`

### toggleBanner

```java
public boolean toggleBanner(LevelAccessor p_77935_, BlockPos p_77936_)
```

**Parameters:**

- `p_77935_` (`LevelAccessor`)
- `p_77936_` (`BlockPos`)

**Returns:** `public boolean`

### checkBanners

```java
public void checkBanners(BlockGetter p_77931_, int p_77932_, int p_77933_)
```

**Parameters:**

- `p_77931_` (`BlockGetter`)
- `p_77932_` (`int`)
- `p_77933_` (`int`)

**Returns:** `public void`

### getBanners

```java
public Collection<MapBanner> getBanners()
```

**Returns:** `public Collection<MapBanner>`

### removedFromFrame

```java
public void removedFromFrame(BlockPos p_77948_, int p_77949_)
```

**Parameters:**

- `p_77948_` (`BlockPos`)
- `p_77949_` (`int`)

**Returns:** `public void`

### updateColor

```java
public boolean updateColor(int p_164793_, int p_164794_, byte p_164795_)
```

**Parameters:**

- `p_164793_` (`int`)
- `p_164794_` (`int`)
- `p_164795_` (`byte`)

**Returns:** `public boolean`

### setColor

```java
public void setColor(int p_164804_, int p_164805_, byte p_164806_)
```

**Parameters:**

- `p_164804_` (`int`)
- `p_164805_` (`int`)
- `p_164806_` (`byte`)

**Returns:** `public void`

### isExplorationMap

```java
public boolean isExplorationMap()
```

**Returns:** `public boolean`

### addClientSideDecorations

```java
public void addClientSideDecorations(List<MapDecoration> p_164802_)
```

**Parameters:**

- `p_164802_` (`List<MapDecoration>`)

**Returns:** `public void`

### getDecorations

```java
public Iterable<MapDecoration> getDecorations()
```

**Returns:** `public Iterable<MapDecoration>`

### isTrackedCountOverLimit

```java
public boolean isTrackedCountOverLimit(int p_181313_)
```

**Parameters:**

- `p_181313_` (`int`)

**Returns:** `public boolean`

### getFrameKey

```java
private static String getFrameKey(int p_353065_)
```

**Parameters:**

- `p_353065_` (`int`)

**Returns:** `private static String`

### HoldingPlayer

```java
 HoldingPlayer(Player p_77970_)
```

**Parameters:**

- `p_77970_` (`Player`)

**Returns:** ``

### createPatch

```java
private MapItemSavedData.MapPatch createPatch()
```

**Returns:** `private MapItemSavedData.MapPatch`

### nextUpdatePacket

```java
Packet<?> nextUpdatePacket(MapId p_324558_)
```

**Parameters:**

- `p_324558_` (`MapId`)

**Returns:** `Packet<?>`

### markColorsDirty

```java
void markColorsDirty(int p_164818_, int p_164819_)
```

**Parameters:**

- `p_164818_` (`int`)
- `p_164819_` (`int`)

### markDecorationsDirty

```java
private void markDecorationsDirty()
```

**Returns:** `private void`

### MapPatch

```java
public static record MapPatch(int startX, int startY, int width, int height, byte[] mapColors)
```

**Parameters:**

- `startX` (`int`)
- `startY` (`int`)
- `width` (`int`)
- `height` (`int`)
- `mapColors` (`byte[]`)

**Returns:** `public static record`

### write

```java
private static void write(ByteBuf p_323934_, Optional<MapItemSavedData.MapPatch> p_323549_)
```

**Parameters:**

- `p_323934_` (`ByteBuf`)
- `p_323549_` (`Optional<MapItemSavedData.MapPatch>`)

**Returns:** `private static void`

### read

```java
private static Optional<MapItemSavedData.MapPatch> read(ByteBuf p_323587_)
```

**Parameters:**

- `p_323587_` (`ByteBuf`)

**Returns:** `private static Optional<MapItemSavedData.MapPatch>`

### applyToMap

```java
public void applyToMap(MapItemSavedData p_164833_)
```

**Parameters:**

- `p_164833_` (`MapItemSavedData`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `HoldingPlayer` | class |  |
| `MapPatch` | record |  |
