# ArmorTrim

**Package:** `net.minecraft.world.item.armortrim`
**Type:** class
**Implements:** `TooltipProvider`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<ArmorTrim>` |  |
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ArmorTrim>` |  |

## Methods

### ArmorTrim

```java
private ArmorTrim(Holder<TrimMaterial> p_336069_, Holder<TrimPattern> p_335896_, boolean p_335621_, Function<Holder<ArmorMaterial>, ResourceLocation> p_335613_, Function<Holder<ArmorMaterial>, ResourceLocation> p_335818_)
```

**Parameters:**

- `p_336069_` (`Holder<TrimMaterial>`)
- `p_335896_` (`Holder<TrimPattern>`)
- `p_335621_` (`boolean`)
- `p_335613_` (`Function<Holder<ArmorMaterial>, ResourceLocation>`)
- `p_335818_` (`Function<Holder<ArmorMaterial>, ResourceLocation>`)

**Returns:** `private`

### ArmorTrim

```java
public ArmorTrim(Holder<TrimMaterial> p_331108_, Holder<TrimPattern> p_331731_, boolean p_331871_)
```

**Parameters:**

- `p_331108_` (`Holder<TrimMaterial>`)
- `p_331731_` (`Holder<TrimPattern>`)
- `p_331871_` (`boolean`)

**Returns:** `public`

### ArmorTrim

```java
public ArmorTrim(Holder<TrimMaterial> p_267249_, Holder<TrimPattern> p_267212_)
```

**Parameters:**

- `p_267249_` (`Holder<TrimMaterial>`)
- `p_267212_` (`Holder<TrimPattern>`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### getColorPaletteSuffix

```java
private static String getColorPaletteSuffix(Holder<TrimMaterial> p_323989_, Holder<ArmorMaterial> p_335566_)
```

**Parameters:**

- `p_323989_` (`Holder<TrimMaterial>`)
- `p_335566_` (`Holder<ArmorMaterial>`)

**Returns:** `private static String`

### hasPatternAndMaterial

```java
public boolean hasPatternAndMaterial(Holder<TrimPattern> p_266942_, Holder<TrimMaterial> p_267247_)
```

**Parameters:**

- `p_266942_` (`Holder<TrimPattern>`)
- `p_267247_` (`Holder<TrimMaterial>`)

**Returns:** `public boolean`

### pattern

```java
public Holder<TrimPattern> pattern()
```

**Returns:** `public Holder<TrimPattern>`

### material

```java
public Holder<TrimMaterial> material()
```

**Returns:** `public Holder<TrimMaterial>`

### innerTexture

```java
public ResourceLocation innerTexture(Holder<ArmorMaterial> p_324361_)
```

**Parameters:**

- `p_324361_` (`Holder<ArmorMaterial>`)

**Returns:** `public ResourceLocation`

### outerTexture

```java
public ResourceLocation outerTexture(Holder<ArmorMaterial> p_323530_)
```

**Parameters:**

- `p_323530_` (`Holder<ArmorMaterial>`)

**Returns:** `public ResourceLocation`

### equals

```java
public boolean equals(Object p_267123_)
```

**Parameters:**

- `p_267123_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### addToTooltip

```java
public void addToTooltip(Item.TooltipContext p_341366_, Consumer<Component> p_331480_, TooltipFlag p_330344_)
```

**Parameters:**

- `p_341366_` (`Item.TooltipContext`)
- `p_331480_` (`Consumer<Component>`)
- `p_330344_` (`TooltipFlag`)

### withTooltip

```java
public ArmorTrim withTooltip(boolean p_335391_)
```

**Parameters:**

- `p_335391_` (`boolean`)

**Returns:** `public ArmorTrim`

### ArmorTrim

```java
return new ArmorTrim()
```

**Returns:** `return new`
