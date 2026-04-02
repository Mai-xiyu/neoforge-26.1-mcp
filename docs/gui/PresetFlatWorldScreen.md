# PresetFlatWorldScreen

**Package:** `net.minecraft.client.gui.screens`
**Type:** class
**Extends:** `Screen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `UNKNOWN_PRESET` | `Component` |  |

## Methods

### PresetFlatWorldScreen

```java
public PresetFlatWorldScreen(CreateFlatWorldScreen p_96379_)
```

**Parameters:**

- `p_96379_` (`CreateFlatWorldScreen`)

**Returns:** `public`

### getLayersInfoFromString

```java
private static List<FlatLayerInfo> getLayersInfoFromString(HolderGetter<Block> p_259080_, String p_260301_)
```

**Parameters:**

- `p_259080_` (`HolderGetter<Block>`)
- `p_260301_` (`String`)

**Returns:** `private static List<FlatLayerInfo>`

### fromString

```java
public static FlatLevelGeneratorSettings fromString(HolderGetter<Block> p_259084_, HolderGetter<Biome> p_259583_, HolderGetter<StructureSet> p_259610_, HolderGetter<PlacedFeature> p_259243_, String p_259508_, FlatLevelGeneratorSettings p_259417_)
```

**Parameters:**

- `p_259084_` (`HolderGetter<Block>`)
- `p_259583_` (`HolderGetter<Biome>`)
- `p_259610_` (`HolderGetter<StructureSet>`)
- `p_259243_` (`HolderGetter<PlacedFeature>`)
- `p_259508_` (`String`)
- `p_259417_` (`FlatLevelGeneratorSettings`)

**Returns:** `public static FlatLevelGeneratorSettings`

### save

```java
static String save(FlatLevelGeneratorSettings p_205394_)
```

**Parameters:**

- `p_205394_` (`FlatLevelGeneratorSettings`)

**Returns:** `static String`

### init

```java
protected void init()
```

### mouseScrolled

```java
public boolean mouseScrolled(double p_96381_, double p_96382_, double p_96383_, double p_294944_)
```

**Parameters:**

- `p_96381_` (`double`)
- `p_96382_` (`double`)
- `p_96383_` (`double`)
- `p_294944_` (`double`)

**Returns:** `boolean`

### resize

```java
public void resize(Minecraft p_96390_, int p_96391_, int p_96392_)
```

**Parameters:**

- `p_96390_` (`Minecraft`)
- `p_96391_` (`int`)
- `p_96392_` (`int`)

### onClose

```java
public void onClose()
```

### render

```java
public void render(GuiGraphics p_282713_, int p_281914_, int p_283700_, float p_283598_)
```

**Parameters:**

- `p_282713_` (`GuiGraphics`)
- `p_281914_` (`int`)
- `p_283700_` (`int`)
- `p_283598_` (`float`)

### updateButtonValidity

```java
public void updateButtonValidity(boolean p_96450_)
```

**Parameters:**

- `p_96450_` (`boolean`)

**Returns:** `public void`

### PresetsList

```java
public PresetsList(RegistryAccess p_259278_, FeatureFlagSet p_259076_)
```

**Parameters:**

- `p_259278_` (`RegistryAccess`)
- `p_259076_` (`FeatureFlagSet`)

**Returns:** `public`

### super

```java
 super(PresetFlatWorldScreen.this.height - 117)
```

**Parameters:**

- `117` (`PresetFlatWorldScreen.this.height -`)

**Returns:** ``

### setSelected

```java
public void setSelected(PresetFlatWorldScreen.PresetsList.Entry p_96472_)
```

**Parameters:**

- `p_96472_` (`PresetFlatWorldScreen.PresetsList.Entry`)

**Returns:** `public void`

### keyPressed

```java
public boolean keyPressed(int p_96466_, int p_96467_, int p_96468_)
```

**Parameters:**

- `p_96466_` (`int`)
- `p_96467_` (`int`)
- `p_96468_` (`int`)

**Returns:** `boolean`

### Entry

```java
public Entry(Holder<FlatLevelGeneratorPreset> p_232758_)
```

**Parameters:**

- `p_232758_` (`Holder<FlatLevelGeneratorPreset>`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_283649_, int p_281641_, int p_281959_, int p_281428_, int p_282594_, int p_283493_, int p_283234_, int p_283185_, boolean p_282302_, float p_282855_)
```

**Parameters:**

- `p_283649_` (`GuiGraphics`)
- `p_281641_` (`int`)
- `p_281959_` (`int`)
- `p_281428_` (`int`)
- `p_282594_` (`int`)
- `p_283493_` (`int`)
- `p_283234_` (`int`)
- `p_283185_` (`int`)
- `p_282302_` (`boolean`)
- `p_282855_` (`float`)

### mouseClicked

```java
public boolean mouseClicked(double p_96481_, double p_96482_, int p_96483_)
```

**Parameters:**

- `p_96481_` (`double`)
- `p_96482_` (`double`)
- `p_96483_` (`int`)

**Returns:** `boolean`

### select

```java
void select()
```

### blitSlot

```java
private void blitSlot(GuiGraphics p_283196_, int p_282036_, int p_281683_, Item p_282242_)
```

**Parameters:**

- `p_283196_` (`GuiGraphics`)
- `p_282036_` (`int`)
- `p_281683_` (`int`)
- `p_282242_` (`Item`)

**Returns:** `private void`

### blitSlotBg

```java
private void blitSlotBg(GuiGraphics p_281359_, int p_282978_, int p_283152_)
```

**Parameters:**

- `p_281359_` (`GuiGraphics`)
- `p_282978_` (`int`)
- `p_283152_` (`int`)

**Returns:** `private void`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Entry` | class |  |
