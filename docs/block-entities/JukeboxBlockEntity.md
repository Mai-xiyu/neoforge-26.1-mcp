# JukeboxBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`
**Implements:** `Clearable`, `ContainerSingleItem.BlockContainerSingleItem`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SONG_ITEM_TAG_ID` | `String` |  |
| `TICKS_SINCE_SONG_STARTED_TAG_ID` | `String` |  |

## Methods

### JukeboxBlockEntity

```java
public JukeboxBlockEntity(BlockPos p_155613_, BlockState p_155614_)
```

**Parameters:**

- `p_155613_` (`BlockPos`)
- `p_155614_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getSongPlayer

```java
public JukeboxSongPlayer getSongPlayer()
```

**Returns:** `public JukeboxSongPlayer`

### onSongChanged

```java
public void onSongChanged()
```

**Returns:** `public void`

### notifyItemChangedInJukebox

```java
private void notifyItemChangedInJukebox(boolean p_350455_)
```

**Parameters:**

- `p_350455_` (`boolean`)

**Returns:** `private void`

### popOutTheItem

```java
public void popOutTheItem()
```

**Returns:** `public void`

### tick

```java
public static void tick(Level p_273615_, BlockPos p_273143_, BlockState p_273372_, JukeboxBlockEntity p_350984_)
```

**Parameters:**

- `p_273615_` (`Level`)
- `p_273143_` (`BlockPos`)
- `p_273372_` (`BlockState`)
- `p_350984_` (`JukeboxBlockEntity`)

**Returns:** `public static void`

### getComparatorOutput

```java
public int getComparatorOutput()
```

**Returns:** `public int`

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_155616_, HolderLookup.Provider p_324026_)
```

**Parameters:**

- `p_155616_` (`CompoundTag`)
- `p_324026_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187507_, HolderLookup.Provider p_323723_)
```

**Parameters:**

- `p_187507_` (`CompoundTag`)
- `p_323723_` (`HolderLookup.Provider`)

### getTheItem

```java
public ItemStack getTheItem()
```

**Returns:** `ItemStack`

### splitTheItem

```java
public ItemStack splitTheItem(int p_304604_)
```

**Parameters:**

- `p_304604_` (`int`)

**Returns:** `ItemStack`

### setTheItem

```java
public void setTheItem(ItemStack p_304781_)
```

**Parameters:**

- `p_304781_` (`ItemStack`)

### getMaxStackSize

```java
public int getMaxStackSize()
```

**Returns:** `int`

### getContainerBlockEntity

```java
public BlockEntity getContainerBlockEntity()
```

**Returns:** `BlockEntity`

### canPlaceItem

```java
public boolean canPlaceItem(int p_273369_, ItemStack p_273689_)
```

**Parameters:**

- `p_273369_` (`int`)
- `p_273689_` (`ItemStack`)

**Returns:** `boolean`

### canTakeItem

```java
public boolean canTakeItem(Container p_273497_, int p_273168_, ItemStack p_273785_)
```

**Parameters:**

- `p_273497_` (`Container`)
- `p_273168_` (`int`)
- `p_273785_` (`ItemStack`)

**Returns:** `boolean`

### setSongItemWithoutPlaying

```java
public void setSongItemWithoutPlaying(ItemStack p_350615_)
```

**Parameters:**

- `p_350615_` (`ItemStack`)

### tryForcePlaySong

```java
public void tryForcePlaySong()
```
