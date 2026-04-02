# ModelTemplate

**Package:** `net.minecraft.data.models.model`
**Type:** class

## Methods

### ModelTemplate

```java
public ModelTemplate(Optional<ResourceLocation> p_125589_, Optional<String> p_125590_, TextureSlot[]... p_125591_)
```

**Parameters:**

- `p_125589_` (`Optional<ResourceLocation>`)
- `p_125590_` (`Optional<String>`)
- `p_125591_` (`TextureSlot[]...`)

**Returns:** `public`

### getDefaultModelLocation

```java
public ResourceLocation getDefaultModelLocation(Block p_309103_)
```

**Parameters:**

- `p_309103_` (`Block`)

**Returns:** `public ResourceLocation`

### create

```java
public ResourceLocation create(Block p_125593_, TextureMapping p_125594_, BiConsumer<ResourceLocation, Supplier<JsonElement>> p_125595_)
```

**Parameters:**

- `p_125593_` (`Block`)
- `p_125594_` (`TextureMapping`)
- `p_125595_` (`BiConsumer<ResourceLocation, Supplier<JsonElement>>`)

**Returns:** `public ResourceLocation`

### createWithSuffix

```java
public ResourceLocation createWithSuffix(Block p_125597_, String p_125598_, TextureMapping p_125599_, BiConsumer<ResourceLocation, Supplier<JsonElement>> p_125600_)
```

**Parameters:**

- `p_125597_` (`Block`)
- `p_125598_` (`String`)
- `p_125599_` (`TextureMapping`)
- `p_125600_` (`BiConsumer<ResourceLocation, Supplier<JsonElement>>`)

**Returns:** `public ResourceLocation`

### createWithOverride

```java
public ResourceLocation createWithOverride(Block p_125617_, String p_125618_, TextureMapping p_125619_, BiConsumer<ResourceLocation, Supplier<JsonElement>> p_125620_)
```

**Parameters:**

- `p_125617_` (`Block`)
- `p_125618_` (`String`)
- `p_125619_` (`TextureMapping`)
- `p_125620_` (`BiConsumer<ResourceLocation, Supplier<JsonElement>>`)

**Returns:** `public ResourceLocation`

### create

```java
public ResourceLocation create(ResourceLocation p_125613_, TextureMapping p_125614_, BiConsumer<ResourceLocation, Supplier<JsonElement>> p_125615_)
```

**Parameters:**

- `p_125613_` (`ResourceLocation`)
- `p_125614_` (`TextureMapping`)
- `p_125615_` (`BiConsumer<ResourceLocation, Supplier<JsonElement>>`)

**Returns:** `public ResourceLocation`

### create

```java
public ResourceLocation create(ResourceLocation p_266990_, TextureMapping p_267329_, BiConsumer<ResourceLocation, Supplier<JsonElement>> p_266768_, ModelTemplate.JsonFactory p_266906_)
```

**Parameters:**

- `p_266990_` (`ResourceLocation`)
- `p_267329_` (`TextureMapping`)
- `p_266768_` (`BiConsumer<ResourceLocation, Supplier<JsonElement>>`)
- `p_266906_` (`ModelTemplate.JsonFactory`)

**Returns:** `public ResourceLocation`

### createBaseTemplate

```java
public JsonObject createBaseTemplate(ResourceLocation p_266830_, Map<TextureSlot, ResourceLocation> p_266912_)
```

**Parameters:**

- `p_266830_` (`ResourceLocation`)
- `p_266912_` (`Map<TextureSlot, ResourceLocation>`)

**Returns:** `public JsonObject`

### createMap

```java
private Map<TextureSlot, ResourceLocation> createMap(TextureMapping p_125609_)
```

**Parameters:**

- `p_125609_` (`TextureMapping`)

**Returns:** `private Map<TextureSlot, ResourceLocation>`

### create

```java
JsonObject create(ResourceLocation p_266987_, Map<TextureSlot, ResourceLocation> p_266933_)
```

**Parameters:**

- `p_266987_` (`ResourceLocation`)
- `p_266933_` (`Map<TextureSlot, ResourceLocation>`)

**Returns:** `JsonObject`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `JsonFactory` | interface |  |
