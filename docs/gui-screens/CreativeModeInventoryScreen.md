# CreativeModeInventoryScreen

**Package:** `net.minecraft.client.gui.screens.inventory`
**Type:** class
**Extends:** `EffectRenderingInventoryScreen<CreativeModeInventoryScreen.ItemPickerMenu>`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### CreativeModeInventoryScreen

```java
public CreativeModeInventoryScreen(LocalPlayer p_346290_, FeatureFlagSet p_260074_, boolean p_259569_)
```

**Parameters:**

- `p_346290_` (`LocalPlayer`)
- `p_260074_` (`FeatureFlagSet`)
- `p_259569_` (`boolean`)

**Returns:** `public`

### hasPermissions

```java
private boolean hasPermissions(Player p_259959_)
```

**Parameters:**

- `p_259959_` (`Player`)

**Returns:** `private boolean`

### tryRefreshInvalidatedTabs

```java
private void tryRefreshInvalidatedTabs(FeatureFlagSet p_259501_, boolean p_259713_, HolderLookup.Provider p_270898_)
```

**Parameters:**

- `p_259501_` (`FeatureFlagSet`)
- `p_259713_` (`boolean`)
- `p_270898_` (`HolderLookup.Provider`)

**Returns:** `private void`

### tryRebuildTabContents

```java
private boolean tryRebuildTabContents(SessionSearchTrees p_345591_, FeatureFlagSet p_345904_, boolean p_345731_, HolderLookup.Provider p_344784_)
```

**Parameters:**

- `p_345591_` (`SessionSearchTrees`)
- `p_345904_` (`FeatureFlagSet`)
- `p_345731_` (`boolean`)
- `p_344784_` (`HolderLookup.Provider`)

**Returns:** `private boolean`

### refreshCurrentTabContents

```java
private void refreshCurrentTabContents(Collection<ItemStack> p_261591_)
```

**Parameters:**

- `p_261591_` (`Collection<ItemStack>`)

**Returns:** `private void`

### containerTick

```java
public void containerTick()
```

### slotClicked

```java
protected void slotClicked(Slot p_98556_, int p_98557_, int p_98558_, ClickType p_98559_)
```

**Parameters:**

- `p_98556_` (`Slot`)
- `p_98557_` (`int`)
- `p_98558_` (`int`)
- `p_98559_` (`ClickType`)

### isCreativeSlot

```java
private boolean isCreativeSlot(Slot p_98554_)
```

**Parameters:**

- `p_98554_` (`Slot`)

**Returns:** `private boolean`

### init

```java
protected void init()
```

### resize

```java
public void resize(Minecraft p_98595_, int p_98596_, int p_98597_)
```

**Parameters:**

- `p_98595_` (`Minecraft`)
- `p_98596_` (`int`)
- `p_98597_` (`int`)

### removed

```java
public void removed()
```

### charTyped

```java
public boolean charTyped(char p_98521_, int p_98522_)
```

**Parameters:**

- `p_98521_` (`char`)
- `p_98522_` (`int`)

**Returns:** `boolean`

### keyPressed

```java
public boolean keyPressed(int p_98547_, int p_98548_, int p_98549_)
```

**Parameters:**

- `p_98547_` (`int`)
- `p_98548_` (`int`)
- `p_98549_` (`int`)

**Returns:** `boolean`

### keyReleased

```java
public boolean keyReleased(int p_98612_, int p_98613_, int p_98614_)
```

**Parameters:**

- `p_98612_` (`int`)
- `p_98613_` (`int`)
- `p_98614_` (`int`)

**Returns:** `boolean`

### refreshSearchResults

```java
private void refreshSearchResults()
```

**Returns:** `private void`

### updateVisibleTags

```java
private void updateVisibleTags(String p_98620_)
```

**Parameters:**

- `p_98620_` (`String`)

**Returns:** `private void`

### renderLabels

```java
protected void renderLabels(GuiGraphics p_283168_, int p_281774_, int p_281466_)
```

**Parameters:**

- `p_283168_` (`GuiGraphics`)
- `p_281774_` (`int`)
- `p_281466_` (`int`)

### mouseClicked

```java
public boolean mouseClicked(double p_98531_, double p_98532_, int p_98533_)
```

**Parameters:**

- `p_98531_` (`double`)
- `p_98532_` (`double`)
- `p_98533_` (`int`)

**Returns:** `boolean`

### mouseReleased

```java
public boolean mouseReleased(double p_98622_, double p_98623_, int p_98624_)
```

**Parameters:**

- `p_98622_` (`double`)
- `p_98623_` (`double`)
- `p_98624_` (`int`)

**Returns:** `boolean`

### canScroll

```java
private boolean canScroll()
```

**Returns:** `private boolean`

### selectTab

```java
private void selectTab(CreativeModeTab p_98561_)
```

**Parameters:**

- `p_98561_` (`CreativeModeTab`)

**Returns:** `private void`

### mouseScrolled

```java
public boolean mouseScrolled(double p_98527_, double p_98528_, double p_98529_, double p_296489_)
```

**Parameters:**

- `p_98527_` (`double`)
- `p_98528_` (`double`)
- `p_98529_` (`double`)
- `p_296489_` (`double`)

**Returns:** `boolean`

### hasClickedOutside

```java
protected boolean hasClickedOutside(double p_98541_, double p_98542_, int p_98543_, int p_98544_, int p_98545_)
```

**Parameters:**

- `p_98541_` (`double`)
- `p_98542_` (`double`)
- `p_98543_` (`int`)
- `p_98544_` (`int`)
- `p_98545_` (`int`)

**Returns:** `boolean`

### insideScrollbar

```java
protected boolean insideScrollbar(double p_98524_, double p_98525_)
```

**Parameters:**

- `p_98524_` (`double`)
- `p_98525_` (`double`)

**Returns:** `protected boolean`

### mouseDragged

```java
public boolean mouseDragged(double p_98535_, double p_98536_, int p_98537_, double p_98538_, double p_98539_)
```

**Parameters:**

- `p_98535_` (`double`)
- `p_98536_` (`double`)
- `p_98537_` (`int`)
- `p_98538_` (`double`)
- `p_98539_` (`double`)

**Returns:** `boolean`

### render

```java
public void render(GuiGraphics p_283000_, int p_281317_, int p_282770_, float p_281295_)
```

**Parameters:**

- `p_283000_` (`GuiGraphics`)
- `p_281317_` (`int`)
- `p_282770_` (`int`)
- `p_281295_` (`float`)

### getTooltipFromContainerItem

```java
public List<Component> getTooltipFromContainerItem(ItemStack p_281769_)
```

**Parameters:**

- `p_281769_` (`ItemStack`)

**Returns:** `List<Component>`

### renderBg

```java
protected void renderBg(GuiGraphics p_282663_, float p_282504_, int p_282089_, int p_282249_)
```

**Parameters:**

- `p_282663_` (`GuiGraphics`)
- `p_282504_` (`float`)
- `p_282089_` (`int`)
- `p_282249_` (`int`)

### getTabX

```java
private int getTabX(CreativeModeTab p_260136_)
```

**Parameters:**

- `p_260136_` (`CreativeModeTab`)

**Returns:** `private int`

### getTabY

```java
private int getTabY(CreativeModeTab p_260181_)
```

**Parameters:**

- `p_260181_` (`CreativeModeTab`)

**Returns:** `private int`

### checkTabClicked

```java
protected boolean checkTabClicked(CreativeModeTab p_98563_, double p_98564_, double p_98565_)
```

**Parameters:**

- `p_98563_` (`CreativeModeTab`)
- `p_98564_` (`double`)
- `p_98565_` (`double`)

**Returns:** `protected boolean`

### checkTabHovering

```java
protected boolean checkTabHovering(GuiGraphics p_282317_, CreativeModeTab p_282244_, int p_283469_, int p_283411_)
```

**Parameters:**

- `p_282317_` (`GuiGraphics`)
- `p_282244_` (`CreativeModeTab`)
- `p_283469_` (`int`)
- `p_283411_` (`int`)

**Returns:** `protected boolean`

### renderTabButton

```java
protected void renderTabButton(GuiGraphics p_283590_, CreativeModeTab p_283489_)
```

**Parameters:**

- `p_283590_` (`GuiGraphics`)
- `p_283489_` (`CreativeModeTab`)

**Returns:** `protected void`

### isInventoryOpen

```java
public boolean isInventoryOpen()
```

**Returns:** `public boolean`

### handleHotbarLoadOrSave

```java
public static void handleHotbarLoadOrSave(Minecraft p_98599_, int p_98600_, boolean p_98601_, boolean p_98602_)
```

**Parameters:**

- `p_98599_` (`Minecraft`)
- `p_98600_` (`int`)
- `p_98601_` (`boolean`)
- `p_98602_` (`boolean`)

**Returns:** `public static void`

### getCurrentPage

```java
public net.neoforged.neoforge.client.gui.CreativeTabsScreenPage getCurrentPage()
```

**Returns:** `public net.neoforged.neoforge.client.gui.CreativeTabsScreenPage`

### setCurrentPage

```java
public void setCurrentPage(net.neoforged.neoforge.client.gui.CreativeTabsScreenPage currentPage)
```

**Parameters:**

- `currentPage` (`net.neoforged.neoforge.client.gui.CreativeTabsScreenPage`)

**Returns:** `public void`

### CustomCreativeSlot

```java
public CustomCreativeSlot(Container p_98633_, int p_98634_, int p_98635_, int p_98636_)
```

**Parameters:**

- `p_98633_` (`Container`)
- `p_98634_` (`int`)
- `p_98635_` (`int`)
- `p_98636_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### mayPickup

```java
public boolean mayPickup(Player p_98638_)
```

**Parameters:**

- `p_98638_` (`Player`)

**Returns:** `boolean`

### ItemPickerMenu

```java
public ItemPickerMenu(Player p_98641_)
```

**Parameters:**

- `p_98641_` (`Player`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### stillValid

```java
public boolean stillValid(Player p_98645_)
```

**Parameters:**

- `p_98645_` (`Player`)

**Returns:** `boolean`

### calculateRowCount

```java
protected int calculateRowCount()
```

**Returns:** `protected int`

### getRowIndexForScroll

```java
protected int getRowIndexForScroll(float p_259664_)
```

**Parameters:**

- `p_259664_` (`float`)

**Returns:** `protected int`

### getScrollForRowIndex

```java
protected float getScrollForRowIndex(int p_259315_)
```

**Parameters:**

- `p_259315_` (`int`)

**Returns:** `protected float`

### subtractInputFromScroll

```java
protected float subtractInputFromScroll(float p_259841_, double p_260358_)
```

**Parameters:**

- `p_259841_` (`float`)
- `p_260358_` (`double`)

**Returns:** `protected float`

### scrollTo

```java
public void scrollTo(float p_98643_)
```

**Parameters:**

- `p_98643_` (`float`)

**Returns:** `public void`

### canScroll

```java
public boolean canScroll()
```

**Returns:** `public boolean`

### quickMoveStack

```java
public ItemStack quickMoveStack(Player p_98650_, int p_98651_)
```

**Parameters:**

- `p_98650_` (`Player`)
- `p_98651_` (`int`)

**Returns:** `ItemStack`

### canTakeItemForPickAll

```java
public boolean canTakeItemForPickAll(ItemStack p_98647_, Slot p_98648_)
```

**Parameters:**

- `p_98647_` (`ItemStack`)
- `p_98648_` (`Slot`)

**Returns:** `boolean`

### canDragTo

```java
public boolean canDragTo(Slot p_98653_)
```

**Parameters:**

- `p_98653_` (`Slot`)

**Returns:** `boolean`

### getCarried

```java
public ItemStack getCarried()
```

**Returns:** `ItemStack`

### setCarried

```java
public void setCarried(ItemStack p_169751_)
```

**Parameters:**

- `p_169751_` (`ItemStack`)

### SlotWrapper

```java
public SlotWrapper(Slot p_98657_, int p_98658_, int p_98659_, int p_98660_)
```

**Parameters:**

- `p_98657_` (`Slot`)
- `p_98658_` (`int`)
- `p_98659_` (`int`)
- `p_98660_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### onTake

```java
public void onTake(Player p_169754_, ItemStack p_169755_)
```

**Parameters:**

- `p_169754_` (`Player`)
- `p_169755_` (`ItemStack`)

### mayPlace

```java
public boolean mayPlace(ItemStack p_98670_)
```

**Parameters:**

- `p_98670_` (`ItemStack`)

**Returns:** `boolean`

### getItem

```java
public ItemStack getItem()
```

**Returns:** `ItemStack`

### hasItem

```java
public boolean hasItem()
```

**Returns:** `boolean`

### setByPlayer

```java
public void setByPlayer(ItemStack p_271008_, ItemStack p_299868_)
```

**Parameters:**

- `p_271008_` (`ItemStack`)
- `p_299868_` (`ItemStack`)

### set

```java
public void set(ItemStack p_98679_)
```

**Parameters:**

- `p_98679_` (`ItemStack`)

### setChanged

```java
public void setChanged()
```

### getMaxStackSize

```java
public int getMaxStackSize()
```

**Returns:** `int`

### getMaxStackSize

```java
public int getMaxStackSize(ItemStack p_98675_)
```

**Parameters:**

- `p_98675_` (`ItemStack`)

**Returns:** `int`

### getNoItemIcon

```java
public Pair<ResourceLocation, ResourceLocation> getNoItemIcon()
```

**Returns:** `Pair<ResourceLocation, ResourceLocation>`

### remove

```java
public ItemStack remove(int p_98663_)
```

**Parameters:**

- `p_98663_` (`int`)

**Returns:** `ItemStack`

### isActive

```java
public boolean isActive()
```

**Returns:** `boolean`

### mayPickup

```java
public boolean mayPickup(Player p_98665_)
```

**Parameters:**

- `p_98665_` (`Player`)

**Returns:** `boolean`

### getSlotIndex

```java
public int getSlotIndex()
```

**Returns:** `int`

### isSameInventory

```java
public boolean isSameInventory(Slot other)
```

**Parameters:**

- `other` (`Slot`)

**Returns:** `boolean`

### setBackground

```java
public Slot setBackground(ResourceLocation atlas, ResourceLocation sprite)
```

**Parameters:**

- `atlas` (`ResourceLocation`)
- `sprite` (`ResourceLocation`)

**Returns:** `Slot`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ItemPickerMenu` | class |  |
