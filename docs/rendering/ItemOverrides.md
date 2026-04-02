# ItemOverrides

**Package:** `net.minecraft.client.renderer.block.model`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EMPTY` | `ItemOverrides` |  |
| `NO_OVERRIDE` | `float` |  |
| `index` | `int` |  |

## Methods

### ItemOverrides

```java
protected ItemOverrides()
```

**Returns:** `protected`

### ItemOverrides

```java
public public ItemOverrides(ModelBaker p_251211_, BlockModel p_111741_, List<ItemOverride> p_111743_)
```

**Parameters:**

- `p_251211_` (`ModelBaker`)
- `p_111741_` (`BlockModel`)
- `p_111743_` (`List<ItemOverride>`)

**Returns:** `public`

### ItemOverrides

```java
public ItemOverrides(ModelBaker p_251211_, UnbakedModel p_111741_, List<ItemOverride> p_111743_, java.util.function.Function<net.minecraft.client.resources.model.Material, net.minecraft.client.renderer.texture.TextureAtlasSprite> spriteGetter)
```

**Parameters:**

- `p_251211_` (`ModelBaker`)
- `p_111741_` (`UnbakedModel`)
- `p_111743_` (`List<ItemOverride>`)
- `spriteGetter` (`java.util.function.Function<net.minecraft.client.resources.model.Material, net.minecraft.client.renderer.texture.TextureAtlasSprite>`)

**Returns:** `public`

### resolve

```java
public BakedModel resolve(BakedModel p_173465_, ItemStack p_173466_, ClientLevel p_173467_, LivingEntity p_173468_, int p_173469_)
```

**Parameters:**

- `p_173465_` (`BakedModel`)
- `p_173466_` (`ItemStack`)
- `p_173467_` (`ClientLevel`)
- `p_173468_` (`LivingEntity`)
- `p_173469_` (`int`)

**Returns:** `BakedModel`

### getOverrides

```java
public com.google.common.collect.ImmutableList<BakedOverride> getOverrides()
```

**Returns:** `public com.google.common.collect.ImmutableList<BakedOverride>`

### BakedOverride

```java
 BakedOverride(ItemOverrides.PropertyMatcher[] p_173483_, BakedModel p_173484_)
```

**Parameters:**

- `p_173483_` (`ItemOverrides.PropertyMatcher[]`)
- `p_173484_` (`BakedModel`)

**Returns:** ``

### test

```java
boolean test(float[] p_173486_)
```

**Parameters:**

- `p_173486_` (`float[]`)

**Returns:** `boolean`

### PropertyMatcher

```java
 PropertyMatcher(int p_173490_, float p_173491_)
```

**Parameters:**

- `p_173490_` (`int`)
- `p_173491_` (`float`)

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BakedOverride` | class |  |
