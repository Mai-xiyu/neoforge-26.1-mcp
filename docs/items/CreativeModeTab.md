# CreativeModeTab

**Package:** `net.minecraft.world.item`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `tabsBefore` | `java.util.List<net.minecraft.resources.ResourceLocation>` |  |
| `tabsAfter` | `java.util.List<net.minecraft.resources.ResourceLocation>` |  |

## Methods

### CreativeModeTab

```java
 CreativeModeTab(CreativeModeTab.Row p_260217_, int p_259557_, CreativeModeTab.Type p_260176_, Component p_260100_, Supplier<ItemStack> p_259543_, CreativeModeTab.DisplayItemsGenerator p_259085_, net.minecraft.resources.ResourceLocation scrollerSpriteLocation, boolean hasSearchBar, int searchBarWidth, net.minecraft.resources.ResourceLocation tabsImage, int labelColor, int slotColor, java.util.List<net.minecraft.resources.ResourceLocation> tabsBefore, java.util.List<net.minecraft.resources.ResourceLocation> tabsAfter)
```

**Parameters:**

- `p_260217_` (`CreativeModeTab.Row`)
- `p_259557_` (`int`)
- `p_260176_` (`CreativeModeTab.Type`)
- `p_260100_` (`Component`)
- `p_259543_` (`Supplier<ItemStack>`)
- `p_259085_` (`CreativeModeTab.DisplayItemsGenerator`)
- `scrollerSpriteLocation` (`net.minecraft.resources.ResourceLocation`)
- `hasSearchBar` (`boolean`)
- `searchBarWidth` (`int`)
- `tabsImage` (`net.minecraft.resources.ResourceLocation`)
- `labelColor` (`int`)
- `slotColor` (`int`)
- `tabsBefore` (`java.util.List<net.minecraft.resources.ResourceLocation>`)
- `tabsAfter` (`java.util.List<net.minecraft.resources.ResourceLocation>`)

**Returns:** ``

### CreativeModeTab

```java
protected CreativeModeTab(CreativeModeTab.Builder builder)
```

**Parameters:**

- `builder` (`CreativeModeTab.Builder`)

**Returns:** `protected`

### this

```java
 this()
```

**Returns:** ``

### builder

```java
public static CreativeModeTab.Builder builder()
```

**Returns:** `public static CreativeModeTab.Builder`

### createTextureLocation

```java
public static ResourceLocation createTextureLocation(String p_350882_)
```

**Parameters:**

- `p_350882_` (`String`)

**Returns:** `public static ResourceLocation`

### builder

```java
public static CreativeModeTab.Builder builder(CreativeModeTab.Row p_259342_, int p_260312_)
```

**Parameters:**

- `p_259342_` (`CreativeModeTab.Row`)
- `p_260312_` (`int`)

**Returns:** `CreativeModeTab.Builder`

### getDisplayName

```java
public Component getDisplayName()
```

**Returns:** `public Component`

### getIconItem

```java
public ItemStack getIconItem()
```

**Returns:** `public ItemStack`

### getBackgroundTexture

```java
public ResourceLocation getBackgroundTexture()
```

**Returns:** `public ResourceLocation`

### showTitle

```java
public boolean showTitle()
```

**Returns:** `public boolean`

### canScroll

```java
public boolean canScroll()
```

**Returns:** `public boolean`

### column

```java
public int column()
```

**Returns:** `public int`

### row

```java
public CreativeModeTab.Row row()
```

**Returns:** `public CreativeModeTab.Row`

### hasAnyItems

```java
public boolean hasAnyItems()
```

**Returns:** `public boolean`

### shouldDisplay

```java
public boolean shouldDisplay()
```

**Returns:** `public boolean`

### isAlignedRight

```java
public boolean isAlignedRight()
```

**Returns:** `public boolean`

### getType

```java
public CreativeModeTab.Type getType()
```

**Returns:** `public CreativeModeTab.Type`

### buildContents

```java
public void buildContents(CreativeModeTab.ItemDisplayParameters p_270156_)
```

**Parameters:**

- `p_270156_` (`CreativeModeTab.ItemDisplayParameters`)

**Returns:** `public void`

### getDisplayItems

```java
public Collection<ItemStack> getDisplayItems()
```

**Returns:** `public Collection<ItemStack>`

### getSearchTabDisplayItems

```java
public Collection<ItemStack> getSearchTabDisplayItems()
```

**Returns:** `public Collection<ItemStack>`

### contains

```java
public boolean contains(ItemStack p_259317_)
```

**Parameters:**

- `p_259317_` (`ItemStack`)

**Returns:** `public boolean`

### hasSearchBar

```java
public boolean hasSearchBar()
```

**Returns:** `public boolean`

### getSearchBarWidth

```java
public int getSearchBarWidth()
```

**Returns:** `public int`

### getTabsImage

```java
public net.minecraft.resources.ResourceLocation getTabsImage()
```

**Returns:** `public net.minecraft.resources.ResourceLocation`

### getLabelColor

```java
public int getLabelColor()
```

**Returns:** `public int`

### getSlotColor

```java
public int getSlotColor()
```

**Returns:** `public int`

### getScrollerSprite

```java
public net.minecraft.resources.ResourceLocation getScrollerSprite()
```

**Returns:** `public net.minecraft.resources.ResourceLocation`

### Builder

```java
public Builder(CreativeModeTab.Row p_259171_, int p_259661_)
```

**Parameters:**

- `p_259171_` (`CreativeModeTab.Row`)
- `p_259661_` (`int`)

**Returns:** `public`

### title

```java
public CreativeModeTab.Builder title(Component p_259616_)
```

**Parameters:**

- `p_259616_` (`Component`)

**Returns:** `public CreativeModeTab.Builder`

### icon

```java
public CreativeModeTab.Builder icon(Supplier<ItemStack> p_259333_)
```

**Parameters:**

- `p_259333_` (`Supplier<ItemStack>`)

**Returns:** `public CreativeModeTab.Builder`

### displayItems

```java
public CreativeModeTab.Builder displayItems(CreativeModeTab.DisplayItemsGenerator p_259814_)
```

**Parameters:**

- `p_259814_` (`CreativeModeTab.DisplayItemsGenerator`)

**Returns:** `public CreativeModeTab.Builder`

### alignedRight

```java
public CreativeModeTab.Builder alignedRight()
```

**Returns:** `public CreativeModeTab.Builder`

### hideTitle

```java
public CreativeModeTab.Builder hideTitle()
```

**Returns:** `public CreativeModeTab.Builder`

### noScrollBar

```java
public CreativeModeTab.Builder noScrollBar()
```

**Returns:** `public CreativeModeTab.Builder`

### type

```java
protected CreativeModeTab.Builder type(CreativeModeTab.Type p_259283_)
```

**Parameters:**

- `p_259283_` (`CreativeModeTab.Type`)

**Returns:** `protected CreativeModeTab.Builder`

### backgroundTexture

```java
public CreativeModeTab.Builder backgroundTexture(ResourceLocation p_350939_)
```

**Parameters:**

- `p_350939_` (`ResourceLocation`)

**Returns:** `public CreativeModeTab.Builder`

### withSearchBar

```java
public CreativeModeTab.Builder withSearchBar()
```

**Returns:** `CreativeModeTab.Builder`

### withSearchBar

```java
public CreativeModeTab.Builder withSearchBar(int searchBarWidth)
```

**Parameters:**

- `searchBarWidth` (`int`)

**Returns:** `CreativeModeTab.Builder`

### withSearchBar

```java
return withSearchBar()
```

**Returns:** `return`

### withScrollBarSpriteLocation

```java
public CreativeModeTab.Builder withScrollBarSpriteLocation(net.minecraft.resources.ResourceLocation scrollBarSpriteLocation)
```

**Parameters:**

- `scrollBarSpriteLocation` (`net.minecraft.resources.ResourceLocation`)

**Returns:** `CreativeModeTab.Builder`

### withTabsImage

```java
public CreativeModeTab.Builder withTabsImage(net.minecraft.resources.ResourceLocation tabsImage)
```

**Parameters:**

- `tabsImage` (`net.minecraft.resources.ResourceLocation`)

**Returns:** `CreativeModeTab.Builder`

### withLabelColor

```java
public CreativeModeTab.Builder withLabelColor(int labelColor)
```

**Parameters:**

- `labelColor` (`int`)

**Returns:** `CreativeModeTab.Builder`

### withSlotColor

```java
public CreativeModeTab.Builder withSlotColor(int slotColor)
```

**Parameters:**

- `slotColor` (`int`)

**Returns:** `CreativeModeTab.Builder`

### withTabFactory

```java
public CreativeModeTab.Builder withTabFactory(java.util.function.Function<CreativeModeTab.Builder, CreativeModeTab> tabFactory)
```

**Parameters:**

- `tabFactory` (`java.util.function.Function<CreativeModeTab.Builder, CreativeModeTab>`)

**Returns:** `public CreativeModeTab.Builder`

### withTabsBefore

```java
public CreativeModeTab.Builder withTabsBefore(net.minecraft.resources.ResourceLocation[]... tabs)
```

**Parameters:**

- `tabs` (`net.minecraft.resources.ResourceLocation[]...`)

**Returns:** `CreativeModeTab.Builder`

### withTabsAfter

```java
public CreativeModeTab.Builder withTabsAfter(net.minecraft.resources.ResourceLocation[]... tabs)
```

**Parameters:**

- `tabs` (`net.minecraft.resources.ResourceLocation[]...`)

**Returns:** `CreativeModeTab.Builder`

### withTabsBefore

```java
public final CreativeModeTab.Builder withTabsBefore(net.minecraft.resources.ResourceKey<CreativeModeTab>[]... tabs)
```

**Parameters:**

- `tabs` (`net.minecraft.resources.ResourceKey<CreativeModeTab>[]...`)

**Returns:** `CreativeModeTab.Builder`

### withTabsAfter

```java
public final CreativeModeTab.Builder withTabsAfter(net.minecraft.resources.ResourceKey<CreativeModeTab>[]... tabs)
```

**Parameters:**

- `tabs` (`net.minecraft.resources.ResourceKey<CreativeModeTab>[]...`)

**Returns:** `CreativeModeTab.Builder`

### build

```java
public CreativeModeTab build()
```

**Returns:** `public CreativeModeTab`

### IllegalStateException

```java
throw new IllegalStateException("Special tabs can't have display items")
```

**Parameters:**

- `items"` (`"Special tabs can't have display`)

**Returns:** `throw new`

### accept

```java
void accept(CreativeModeTab.ItemDisplayParameters p_270258_, CreativeModeTab.Output p_259752_)
```

**Parameters:**

- `p_270258_` (`CreativeModeTab.ItemDisplayParameters`)
- `p_259752_` (`CreativeModeTab.Output`)

### ItemDisplayBuilder

```java
public ItemDisplayBuilder(CreativeModeTab p_251040_, FeatureFlagSet p_249331_)
```

**Parameters:**

- `p_251040_` (`CreativeModeTab`)
- `p_249331_` (`FeatureFlagSet`)

**Returns:** `public`

### accept

```java
public void accept(ItemStack p_250391_, CreativeModeTab.TabVisibility p_251472_)
```

**Parameters:**

- `p_250391_` (`ItemStack`)
- `p_251472_` (`CreativeModeTab.TabVisibility`)

### IllegalArgumentException

```java
throw new IllegalArgumentException("Stack size must be exactly 1")
```

**Parameters:**

- `1"` (`"Stack size must be exactly`)

**Returns:** `throw new`

### ItemDisplayParameters

```java
public static record ItemDisplayParameters(FeatureFlagSet enabledFeatures, boolean hasPermissions, HolderLookup.Provider holders)
```

**Parameters:**

- `enabledFeatures` (`FeatureFlagSet`)
- `hasPermissions` (`boolean`)
- `holders` (`HolderLookup.Provider`)

**Returns:** `public static record`

### needsUpdate

```java
public boolean needsUpdate(FeatureFlagSet p_270338_, boolean p_270835_, HolderLookup.Provider p_270575_)
```

**Parameters:**

- `p_270338_` (`FeatureFlagSet`)
- `p_270835_` (`boolean`)
- `p_270575_` (`HolderLookup.Provider`)

**Returns:** `public boolean`

### accept

```java
void accept(ItemStack p_251806_, CreativeModeTab.TabVisibility p_249603_)
```

**Parameters:**

- `p_251806_` (`ItemStack`)
- `p_249603_` (`CreativeModeTab.TabVisibility`)

### accept

```java
default void accept(ItemStack p_249977_)
```

**Parameters:**

- `p_249977_` (`ItemStack`)

**Returns:** `default void`

### accept

```java
default void accept(ItemLike p_251528_, CreativeModeTab.TabVisibility p_249821_)
```

**Parameters:**

- `p_251528_` (`ItemLike`)
- `p_249821_` (`CreativeModeTab.TabVisibility`)

**Returns:** `default void`

### accept

```java
default void accept(ItemLike p_248610_)
```

**Parameters:**

- `p_248610_` (`ItemLike`)

**Returns:** `default void`

### acceptAll

```java
default void acceptAll(Collection<ItemStack> p_251548_, CreativeModeTab.TabVisibility p_252285_)
```

**Parameters:**

- `p_251548_` (`Collection<ItemStack>`)
- `p_252285_` (`CreativeModeTab.TabVisibility`)

**Returns:** `default void`

### acceptAll

```java
default void acceptAll(Collection<ItemStack> p_250244_)
```

**Parameters:**

- `p_250244_` (`Collection<ItemStack>`)

**Returns:** `default void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `DisplayItemsGenerator` | interface |  |
| `ItemDisplayParameters` | record |  |
| `Output` | interface |  |
| `Row` | enum |  |
| `TabVisibility` | enum |  |
| `Type` | enum |  |
