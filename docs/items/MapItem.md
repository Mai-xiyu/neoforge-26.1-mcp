# MapItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `ComplexItem`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `IMAGE_WIDTH` | `int` |  |
| `IMAGE_HEIGHT` | `int` |  |

## Methods

### MapItem

```java
public MapItem(Item.Properties p_42847_)
```

**Parameters:**

- `p_42847_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### create

```java
public static ItemStack create(Level p_42887_, int p_42888_, int p_42889_, byte p_42890_, boolean p_42891_, boolean p_42892_)
```

**Parameters:**

- `p_42887_` (`Level`)
- `p_42888_` (`int`)
- `p_42889_` (`int`)
- `p_42890_` (`byte`)
- `p_42891_` (`boolean`)
- `p_42892_` (`boolean`)

**Returns:** `public static ItemStack`

### getSavedData

```java
public static MapItemSavedData getSavedData(MapId p_324036_, Level p_151130_)
```

**Parameters:**

- `p_324036_` (`MapId`)
- `p_151130_` (`Level`)

**Returns:** `MapItemSavedData`

### getSavedData

```java
public static MapItemSavedData getSavedData(ItemStack p_42854_, Level p_42855_)
```

**Parameters:**

- `p_42854_` (`ItemStack`)
- `p_42855_` (`Level`)

**Returns:** `MapItemSavedData`

### getCustomMapData

```java
protected MapItemSavedData getCustomMapData(ItemStack p_42854_, Level p_42855_)
```

**Parameters:**

- `p_42854_` (`ItemStack`)
- `p_42855_` (`Level`)

**Returns:** `MapItemSavedData`

### getSavedData

```java
return getSavedData()
```

**Returns:** `return`

### createNewSavedData

```java
private static MapId createNewSavedData(Level p_151121_, int p_151122_, int p_151123_, int p_151124_, boolean p_151125_, boolean p_151126_, ResourceKey<Level> p_151127_)
```

**Parameters:**

- `p_151121_` (`Level`)
- `p_151122_` (`int`)
- `p_151123_` (`int`)
- `p_151124_` (`int`)
- `p_151125_` (`boolean`)
- `p_151126_` (`boolean`)
- `p_151127_` (`ResourceKey<Level>`)

**Returns:** `private static MapId`

### update

```java
public void update(Level p_42894_, Entity p_42895_, MapItemSavedData p_42896_)
```

**Parameters:**

- `p_42894_` (`Level`)
- `p_42895_` (`Entity`)
- `p_42896_` (`MapItemSavedData`)

**Returns:** `public void`

### getCorrectStateForFluidBlock

```java
private BlockState getCorrectStateForFluidBlock(Level p_42901_, BlockState p_42902_, BlockPos p_42903_)
```

**Parameters:**

- `p_42901_` (`Level`)
- `p_42902_` (`BlockState`)
- `p_42903_` (`BlockPos`)

**Returns:** `private BlockState`

### isBiomeWatery

```java
private static boolean isBiomeWatery(boolean[] p_212252_, int p_212253_, int p_212254_)
```

**Parameters:**

- `p_212252_` (`boolean[]`)
- `p_212253_` (`int`)
- `p_212254_` (`int`)

**Returns:** `private static boolean`

### renderBiomePreviewMap

```java
public static void renderBiomePreviewMap(ServerLevel p_42851_, ItemStack p_42852_)
```

**Parameters:**

- `p_42851_` (`ServerLevel`)
- `p_42852_` (`ItemStack`)

**Returns:** `public static void`

### inventoryTick

```java
public void inventoryTick(ItemStack p_42870_, Level p_42871_, Entity p_42872_, int p_42873_, boolean p_42874_)
```

**Parameters:**

- `p_42870_` (`ItemStack`)
- `p_42871_` (`Level`)
- `p_42872_` (`Entity`)
- `p_42873_` (`int`)
- `p_42874_` (`boolean`)

### getUpdatePacket

```java
public Packet<?> getUpdatePacket(ItemStack p_42876_, Level p_42877_, Player p_42878_)
```

**Parameters:**

- `p_42876_` (`ItemStack`)
- `p_42877_` (`Level`)
- `p_42878_` (`Player`)

**Returns:** `Packet<?>`

### onCraftedPostProcess

```java
public void onCraftedPostProcess(ItemStack p_42913_, Level p_42914_)
```

**Parameters:**

- `p_42913_` (`ItemStack`)
- `p_42914_` (`Level`)

### lockMap

```java
 lockMap()
```

**Returns:** ``

### scaleMap

```java
 scaleMap()
```

**Returns:** ``

### scaleMap

```java
private static void scaleMap(ItemStack p_42857_, Level p_42858_)
```

**Parameters:**

- `p_42857_` (`ItemStack`)
- `p_42858_` (`Level`)

**Returns:** `private static void`

### lockMap

```java
public static void lockMap(Level p_42898_, ItemStack p_42899_)
```

**Parameters:**

- `p_42898_` (`Level`)
- `p_42899_` (`ItemStack`)

**Returns:** `public static void`

### appendHoverText

```java
public void appendHoverText(ItemStack p_42880_, Item.TooltipContext p_339653_, List<Component> p_42882_, TooltipFlag p_42883_)
```

**Parameters:**

- `p_42880_` (`ItemStack`)
- `p_339653_` (`Item.TooltipContext`)
- `p_42882_` (`List<Component>`)
- `p_42883_` (`TooltipFlag`)

### getTooltipForId

```java
public static Component getTooltipForId(MapId p_323616_)
```

**Parameters:**

- `p_323616_` (`MapId`)

**Returns:** `public static Component`

### useOn

```java
public InteractionResult useOn(UseOnContext p_42885_)
```

**Parameters:**

- `p_42885_` (`UseOnContext`)

**Returns:** `InteractionResult`
