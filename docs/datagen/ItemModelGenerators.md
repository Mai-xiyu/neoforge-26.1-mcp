# ItemModelGenerators

**Package:** `net.minecraft.data.models`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TRIM_TYPE_PREDICATE_ID` | `ResourceLocation` |  |
| `GENERATED_TRIM_MODELS` | `List<ItemModelGenerators.TrimModelData>` |  |

## Methods

### ItemModelGenerators

```java
public ItemModelGenerators(BiConsumer<ResourceLocation, Supplier<JsonElement>> p_125082_)
```

**Parameters:**

- `p_125082_` (`BiConsumer<ResourceLocation, Supplier<JsonElement>>`)

**Returns:** `public`

### generateFlatItem

```java
private void generateFlatItem(Item p_125089_, ModelTemplate p_125090_)
```

**Parameters:**

- `p_125089_` (`Item`)
- `p_125090_` (`ModelTemplate`)

**Returns:** `private void`

### generateFlatItem

```java
private void generateFlatItem(Item p_125092_, String p_125093_, ModelTemplate p_125094_)
```

**Parameters:**

- `p_125092_` (`Item`)
- `p_125093_` (`String`)
- `p_125094_` (`ModelTemplate`)

**Returns:** `private void`

### generateFlatItem

```java
private void generateFlatItem(Item p_125085_, Item p_125086_, ModelTemplate p_125087_)
```

**Parameters:**

- `p_125085_` (`Item`)
- `p_125086_` (`Item`)
- `p_125087_` (`ModelTemplate`)

**Returns:** `private void`

### generateItemWithOverlay

```java
private void generateItemWithOverlay(Item p_330987_)
```

**Parameters:**

- `p_330987_` (`Item`)

**Returns:** `private void`

### generateCompassItem

```java
private void generateCompassItem(Item p_236322_)
```

**Parameters:**

- `p_236322_` (`Item`)

**Returns:** `private void`

### generateClockItem

```java
private void generateClockItem(Item p_236324_)
```

**Parameters:**

- `p_236324_` (`Item`)

**Returns:** `private void`

### generateLayeredItem

```java
private void generateLayeredItem(ResourceLocation p_267272_, ResourceLocation p_266738_, ResourceLocation p_267328_)
```

**Parameters:**

- `p_267272_` (`ResourceLocation`)
- `p_266738_` (`ResourceLocation`)
- `p_267328_` (`ResourceLocation`)

**Returns:** `private void`

### generateLayeredItem

```java
private void generateLayeredItem(ResourceLocation p_268353_, ResourceLocation p_268162_, ResourceLocation p_268173_, ResourceLocation p_268312_)
```

**Parameters:**

- `p_268353_` (`ResourceLocation`)
- `p_268162_` (`ResourceLocation`)
- `p_268173_` (`ResourceLocation`)
- `p_268312_` (`ResourceLocation`)

**Returns:** `private void`

### getItemModelForTrimMaterial

```java
private ResourceLocation getItemModelForTrimMaterial(ResourceLocation p_266817_, String p_267030_)
```

**Parameters:**

- `p_266817_` (`ResourceLocation`)
- `p_267030_` (`String`)

**Returns:** `private ResourceLocation`

### generateBaseArmorTrimTemplate

```java
private JsonObject generateBaseArmorTrimTemplate(ResourceLocation p_266939_, Map<TextureSlot, ResourceLocation> p_267324_, Holder<ArmorMaterial> p_323559_)
```

**Parameters:**

- `p_266939_` (`ResourceLocation`)
- `p_267324_` (`Map<TextureSlot, ResourceLocation>`)
- `p_323559_` (`Holder<ArmorMaterial>`)

**Returns:** `private JsonObject`

### generateArmorTrims

```java
private void generateArmorTrims(ArmorItem p_267151_)
```

**Parameters:**

- `p_267151_` (`ArmorItem`)

**Returns:** `private void`

### run

```java
public void run()
```

**Returns:** `public void`

### TrimModelData

```java
public static record TrimModelData(String name, float itemModelIndex, Map<Holder<ArmorMaterial>, String> overrideArmorMaterials)
```

**Parameters:**

- `name` (`String`)
- `itemModelIndex` (`float`)
- `overrideArmorMaterials` (`Map<Holder<ArmorMaterial>, String>`)

**Returns:** `public static record`

### name

```java
public String name(Holder<ArmorMaterial> p_323590_)
```

**Parameters:**

- `p_323590_` (`Holder<ArmorMaterial>`)

**Returns:** `public String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TrimModelData` | record |  |
