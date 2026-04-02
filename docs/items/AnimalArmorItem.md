# AnimalArmorItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `ArmorItem`

## Methods

### AnimalArmorItem

```java
public AnimalArmorItem(Holder<ArmorMaterial> p_323836_, AnimalArmorItem.BodyType p_324315_, boolean p_331679_, Item.Properties p_316341_)
```

**Parameters:**

- `p_323836_` (`Holder<ArmorMaterial>`)
- `p_324315_` (`AnimalArmorItem.BodyType`)
- `p_331679_` (`boolean`)
- `p_316341_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getTexture

```java
public ResourceLocation getTexture()
```

**Returns:** `public ResourceLocation`

### getOverlayTexture

```java
public ResourceLocation getOverlayTexture()
```

**Returns:** `ResourceLocation`

### getBodyType

```java
public AnimalArmorItem.BodyType getBodyType()
```

**Returns:** `public AnimalArmorItem.BodyType`

### getBreakingSound

```java
public SoundEvent getBreakingSound()
```

**Returns:** `SoundEvent`

### isEnchantable

```java
public boolean isEnchantable(ItemStack p_341697_)
```

**Parameters:**

- `p_341697_` (`ItemStack`)

**Returns:** `boolean`

### BodyType

```java
private BodyType(Function<ResourceLocation, ResourceLocation> p_324258_, SoundEvent p_331429_)
```

**Parameters:**

- `p_324258_` (`Function<ResourceLocation, ResourceLocation>`)
- `p_331429_` (`SoundEvent`)

**Returns:** `private`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BodyType` | enum |  |
