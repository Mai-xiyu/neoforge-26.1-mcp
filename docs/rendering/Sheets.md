# Sheets

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SHULKER_SHEET` | `ResourceLocation` |  |
| `BED_SHEET` | `ResourceLocation` |  |
| `BANNER_SHEET` | `ResourceLocation` |  |
| `SHIELD_SHEET` | `ResourceLocation` |  |
| `SIGN_SHEET` | `ResourceLocation` |  |
| `CHEST_SHEET` | `ResourceLocation` |  |
| `ARMOR_TRIMS_SHEET` | `ResourceLocation` |  |
| `DECORATED_POT_SHEET` | `ResourceLocation` |  |
| `DEFAULT_SHULKER_TEXTURE_LOCATION` | `Material` |  |
| `SHULKER_TEXTURE_LOCATION` | `List<Material>` |  |
| `SIGN_MATERIALS` | `Map<WoodType, Material>` |  |
| `HANGING_SIGN_MATERIALS` | `Map<WoodType, Material>` |  |
| `BANNER_BASE` | `Material` |  |
| `SHIELD_BASE` | `Material` |  |
| `DECORATED_POT_MATERIALS` | `Map<ResourceKey<DecoratedPotPattern>, Material>` |  |
| `DECORATED_POT_BASE` | `Material` |  |
| `DECORATED_POT_SIDE` | `Material` |  |
| `BED_TEXTURES` | `Material[]` |  |
| `CHEST_TRAP_LOCATION` | `Material` |  |

## Methods

### bannerSheet

```java
public static RenderType bannerSheet()
```

**Returns:** `public static RenderType`

### shieldSheet

```java
public static RenderType shieldSheet()
```

**Returns:** `public static RenderType`

### bedSheet

```java
public static RenderType bedSheet()
```

**Returns:** `public static RenderType`

### shulkerBoxSheet

```java
public static RenderType shulkerBoxSheet()
```

**Returns:** `public static RenderType`

### signSheet

```java
public static RenderType signSheet()
```

**Returns:** `public static RenderType`

### hangingSignSheet

```java
public static RenderType hangingSignSheet()
```

**Returns:** `public static RenderType`

### chestSheet

```java
public static RenderType chestSheet()
```

**Returns:** `public static RenderType`

### armorTrimsSheet

```java
public static RenderType armorTrimsSheet(boolean p_299909_)
```

**Parameters:**

- `p_299909_` (`boolean`)

**Returns:** `public static RenderType`

### solidBlockSheet

```java
public static RenderType solidBlockSheet()
```

**Returns:** `public static RenderType`

### cutoutBlockSheet

```java
public static RenderType cutoutBlockSheet()
```

**Returns:** `public static RenderType`

### translucentItemSheet

```java
public static RenderType translucentItemSheet()
```

**Returns:** `public static RenderType`

### translucentCullBlockSheet

```java
public static RenderType translucentCullBlockSheet()
```

**Returns:** `public static RenderType`

### createSignMaterial

```java
private static Material createSignMaterial(WoodType p_173386_)
```

**Parameters:**

- `p_173386_` (`WoodType`)

**Returns:** `private static Material`

### createHangingSignMaterial

```java
private static Material createHangingSignMaterial(WoodType p_251735_)
```

**Parameters:**

- `p_251735_` (`WoodType`)

**Returns:** `private static Material`

### getSignMaterial

```java
public static Material getSignMaterial(WoodType p_173382_)
```

**Parameters:**

- `p_173382_` (`WoodType`)

**Returns:** `public static Material`

### getHangingSignMaterial

```java
public static Material getHangingSignMaterial(WoodType p_250958_)
```

**Parameters:**

- `p_250958_` (`WoodType`)

**Returns:** `public static Material`

### getBannerMaterial

```java
public static Material getBannerMaterial(Holder<BannerPattern> p_332774_)
```

**Parameters:**

- `p_332774_` (`Holder<BannerPattern>`)

**Returns:** `public static Material`

### Material

```java
return new Material()
```

**Returns:** `return new`

### getShieldMaterial

```java
public static Material getShieldMaterial(Holder<BannerPattern> p_332760_)
```

**Parameters:**

- `p_332760_` (`Holder<BannerPattern>`)

**Returns:** `public static Material`

### Material

```java
return new Material()
```

**Returns:** `return new`

### chestMaterial

```java
private static Material chestMaterial(String p_110779_)
```

**Parameters:**

- `p_110779_` (`String`)

**Returns:** `private static Material`

### createDecoratedPotMaterial

```java
private static Material createDecoratedPotMaterial(ResourceLocation p_347474_)
```

**Parameters:**

- `p_347474_` (`ResourceLocation`)

**Returns:** `private static Material`

### getDecoratedPotMaterial

```java
public static Material getDecoratedPotMaterial(ResourceKey<DecoratedPotPattern> p_273567_)
```

**Parameters:**

- `p_273567_` (`ResourceKey<DecoratedPotPattern>`)

**Returns:** `Material`

### chooseMaterial

```java
public static Material chooseMaterial(BlockEntity p_110768_, ChestType p_110769_, boolean p_110770_)
```

**Parameters:**

- `p_110768_` (`BlockEntity`)
- `p_110769_` (`ChestType`)
- `p_110770_` (`boolean`)

**Returns:** `public static Material`

### chooseMaterial

```java
return chooseMaterial()
```

**Returns:** `return`

### chooseMaterial

```java
private static Material chooseMaterial(ChestType p_110772_, Material p_110773_, Material p_110774_, Material p_110775_)
```

**Parameters:**

- `p_110772_` (`ChestType`)
- `p_110773_` (`Material`)
- `p_110774_` (`Material`)
- `p_110775_` (`Material`)

**Returns:** `private static Material`

### addWoodType

```java
public static void addWoodType(WoodType woodType)
```

**Parameters:**

- `woodType` (`WoodType`)
