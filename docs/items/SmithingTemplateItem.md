# SmithingTemplateItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`

## Methods

### SmithingTemplateItem

```java
public SmithingTemplateItem(Component p_266834_, Component p_267043_, Component p_267048_, Component p_267278_, Component p_267090_, List<ResourceLocation> p_266755_, List<ResourceLocation> p_267060_, FeatureFlag[]... p_333776_)
```

**Parameters:**

- `p_266834_` (`Component`)
- `p_267043_` (`Component`)
- `p_267048_` (`Component`)
- `p_267278_` (`Component`)
- `p_267090_` (`Component`)
- `p_266755_` (`List<ResourceLocation>`)
- `p_267060_` (`List<ResourceLocation>`)
- `p_333776_` (`FeatureFlag[]...`)

**Returns:** `public`

### createArmorTrimTemplate

```java
public static SmithingTemplateItem createArmorTrimTemplate(ResourceKey<TrimPattern> p_266875_, FeatureFlag[]... p_334067_)
```

**Parameters:**

- `p_266875_` (`ResourceKey<TrimPattern>`)
- `p_334067_` (`FeatureFlag[]...`)

**Returns:** `public static SmithingTemplateItem`

### createArmorTrimTemplate

```java
public static SmithingTemplateItem createArmorTrimTemplate(ResourceLocation p_266880_, FeatureFlag[]... p_334025_)
```

**Parameters:**

- `p_266880_` (`ResourceLocation`)
- `p_334025_` (`FeatureFlag[]...`)

**Returns:** `public static SmithingTemplateItem`

### createNetheriteUpgradeTemplate

```java
public static SmithingTemplateItem createNetheriteUpgradeTemplate()
```

**Returns:** `public static SmithingTemplateItem`

### createTrimmableArmorIconList

```java
private static List<ResourceLocation> createTrimmableArmorIconList()
```

**Returns:** `private static List<ResourceLocation>`

### createTrimmableMaterialIconList

```java
private static List<ResourceLocation> createTrimmableMaterialIconList()
```

**Returns:** `private static List<ResourceLocation>`

### createNetheriteUpgradeIconList

```java
private static List<ResourceLocation> createNetheriteUpgradeIconList()
```

**Returns:** `private static List<ResourceLocation>`

### createNetheriteUpgradeMaterialList

```java
private static List<ResourceLocation> createNetheriteUpgradeMaterialList()
```

**Returns:** `private static List<ResourceLocation>`

### appendHoverText

```java
public void appendHoverText(ItemStack p_267313_, Item.TooltipContext p_339591_, List<Component> p_266820_, TooltipFlag p_266857_)
```

**Parameters:**

- `p_267313_` (`ItemStack`)
- `p_339591_` (`Item.TooltipContext`)
- `p_266820_` (`List<Component>`)
- `p_266857_` (`TooltipFlag`)

### getBaseSlotDescription

```java
public Component getBaseSlotDescription()
```

**Returns:** `public Component`

### getAdditionSlotDescription

```java
public Component getAdditionSlotDescription()
```

**Returns:** `public Component`

### getBaseSlotEmptyIcons

```java
public List<ResourceLocation> getBaseSlotEmptyIcons()
```

**Returns:** `public List<ResourceLocation>`

### getAdditionalSlotEmptyIcons

```java
public List<ResourceLocation> getAdditionalSlotEmptyIcons()
```

**Returns:** `public List<ResourceLocation>`
