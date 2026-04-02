# FontManager

**Package:** `net.minecraft.client.gui.font`
**Type:** class
**Implements:** `PreparableReloadListener`, `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MISSING_FONT` | `ResourceLocation` |  |

## Methods

### FontManager

```java
public FontManager(TextureManager p_95005_)
```

**Parameters:**

- `p_95005_` (`TextureManager`)

**Returns:** `public`

### createFallbackProvider

```java
private static GlyphProvider.Conditional createFallbackProvider()
```

**Returns:** `private static GlyphProvider.Conditional`

### reload

```java
public CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_285160_, ResourceManager p_285231_, ProfilerFiller p_285232_, ProfilerFiller p_285262_, Executor p_284975_, Executor p_285218_)
```

**Parameters:**

- `p_285160_` (`PreparableReloadListener.PreparationBarrier`)
- `p_285231_` (`ResourceManager`)
- `p_285232_` (`ProfilerFiller`)
- `p_285262_` (`ProfilerFiller`)
- `p_284975_` (`Executor`)
- `p_285218_` (`Executor`)

**Returns:** `CompletableFuture<Void>`

### prepare

```java
private CompletableFuture<FontManager.Preparation> prepare(ResourceManager p_285252_, Executor p_284969_)
```

**Parameters:**

- `p_285252_` (`ResourceManager`)
- `p_284969_` (`Executor`)

**Returns:** `private CompletableFuture<FontManager.Preparation>`

### safeLoad

```java
private CompletableFuture<Optional<GlyphProvider>> safeLoad(FontManager.BuilderId p_285113_, GlyphProviderDefinition.Loader p_286561_, ResourceManager p_285424_, Executor p_285371_)
```

**Parameters:**

- `p_285113_` (`FontManager.BuilderId`)
- `p_286561_` (`GlyphProviderDefinition.Loader`)
- `p_285424_` (`ResourceManager`)
- `p_285371_` (`Executor`)

**Returns:** `private CompletableFuture<Optional<GlyphProvider>>`

### resolveProviders

```java
private Map<ResourceLocation, List<GlyphProvider.Conditional>> resolveProviders(List<FontManager.UnresolvedBuilderBundle> p_285282_)
```

**Parameters:**

- `p_285282_` (`List<FontManager.UnresolvedBuilderBundle>`)

**Returns:** `private Map<ResourceLocation, List<GlyphProvider.Conditional>>`

### finalizeProviderLoading

```java
private void finalizeProviderLoading(List<GlyphProvider.Conditional> p_285520_, GlyphProvider.Conditional p_326102_)
```

**Parameters:**

- `p_285520_` (`List<GlyphProvider.Conditional>`)
- `p_326102_` (`GlyphProvider.Conditional`)

**Returns:** `private void`

### getFontOptions

```java
private static Set<FontOption> getFontOptions(Options p_326037_)
```

**Parameters:**

- `p_326037_` (`Options`)

**Returns:** `private static Set<FontOption>`

### apply

```java
private void apply(FontManager.Preparation p_284939_, ProfilerFiller p_285407_)
```

**Parameters:**

- `p_284939_` (`FontManager.Preparation`)
- `p_285407_` (`ProfilerFiller`)

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException("Default font failed to load")
```

**Parameters:**

- `load"` (`"Default font failed to`)

**Returns:** `throw new`

### updateOptions

```java
public void updateOptions(Options p_326271_)
```

**Parameters:**

- `p_326271_` (`Options`)

**Returns:** `public void`

### loadResourceStack

```java
private static List<Pair<FontManager.BuilderId, GlyphProviderDefinition.Conditional>> loadResourceStack(List<Resource> p_284976_, ResourceLocation p_285272_)
```

**Parameters:**

- `p_284976_` (`List<Resource>`)
- `p_285272_` (`ResourceLocation`)

**Returns:** `private static List<Pair<FontManager.BuilderId, GlyphProviderDefinition.Conditional>>`

### createFont

```java
public Font createFont()
```

**Returns:** `public Font`

### Font

```java
return new Font()
```

**Returns:** `return new`

### createFontFilterFishy

```java
public Font createFontFilterFishy()
```

**Returns:** `public Font`

### Font

```java
return new Font()
```

**Returns:** `return new`

### getFontSetRaw

```java
private FontSet getFontSetRaw(ResourceLocation p_325954_)
```

**Parameters:**

- `p_325954_` (`ResourceLocation`)

**Returns:** `private FontSet`

### getFontSetCached

```java
private FontSet getFontSetCached(ResourceLocation p_326503_)
```

**Parameters:**

- `p_326503_` (`ResourceLocation`)

**Returns:** `private FontSet`

### close

```java
public void close()
```

### BuilderId

```java
static record BuilderId(ResourceLocation fontId, String pack, int index)
```

**Parameters:**

- `fontId` (`ResourceLocation`)
- `pack` (`String`)
- `index` (`int`)

**Returns:** `record`

### toString

```java
public String toString()
```

**Returns:** `String`

### BuilderResult

```java
static record BuilderResult(FontManager.BuilderId id, FontOption.Filter filter, Either<CompletableFuture<Optional<GlyphProvider>>, ResourceLocation> result)
```

**Parameters:**

- `id` (`FontManager.BuilderId`)
- `filter` (`FontOption.Filter`)
- `result` (`Either<CompletableFuture<Optional<GlyphProvider>>, ResourceLocation>`)

**Returns:** `record`

### resolve

```java
public Optional<List<GlyphProvider.Conditional>> resolve(Function<ResourceLocation, List<GlyphProvider.Conditional>> p_284942_)
```

**Parameters:**

- `p_284942_` (`Function<ResourceLocation, List<GlyphProvider.Conditional>>`)

**Returns:** `public Optional<List<GlyphProvider.Conditional>>`

### mergeFilters

```java
private GlyphProvider.Conditional mergeFilters(GlyphProvider.Conditional p_326502_)
```

**Parameters:**

- `p_326502_` (`GlyphProvider.Conditional`)

**Returns:** `private GlyphProvider.Conditional`

### FontDefinitionFile

```java
static record FontDefinitionFile(List<GlyphProviderDefinition.Conditional> providers)
```

**Parameters:**

- `providers` (`List<GlyphProviderDefinition.Conditional>`)

**Returns:** `record`

### Preparation

```java
static record Preparation(Map<ResourceLocation, List<GlyphProvider.Conditional>> fontSets, List<GlyphProvider> allProviders)
```

**Parameters:**

- `fontSets` (`Map<ResourceLocation, List<GlyphProvider.Conditional>>`)
- `allProviders` (`List<GlyphProvider>`)

**Returns:** `record`

### UnresolvedBuilderBundle

```java
public UnresolvedBuilderBundle(ResourceLocation p_284984_)
```

**Parameters:**

- `p_284984_` (`ResourceLocation`)

**Returns:** `public`

### add

```java
public void add(FontManager.BuilderId p_286837_, FontOption.Filter p_326179_, GlyphProviderDefinition.Reference p_286500_)
```

**Parameters:**

- `p_286837_` (`FontManager.BuilderId`)
- `p_326179_` (`FontOption.Filter`)
- `p_286500_` (`GlyphProviderDefinition.Reference`)

**Returns:** `public void`

### add

```java
public void add(FontManager.BuilderId p_284935_, FontOption.Filter p_326423_, CompletableFuture<Optional<GlyphProvider>> p_284966_)
```

**Parameters:**

- `p_284935_` (`FontManager.BuilderId`)
- `p_326423_` (`FontOption.Filter`)
- `p_284966_` (`CompletableFuture<Optional<GlyphProvider>>`)

**Returns:** `public void`

### listBuilders

```java
private Stream<CompletableFuture<Optional<GlyphProvider>>> listBuilders()
```

**Returns:** `private Stream<CompletableFuture<Optional<GlyphProvider>>>`

### resolve

```java
public Optional<List<GlyphProvider.Conditional>> resolve(Function<ResourceLocation, List<GlyphProvider.Conditional>> p_285118_)
```

**Parameters:**

- `p_285118_` (`Function<ResourceLocation, List<GlyphProvider.Conditional>>`)

**Returns:** `public Optional<List<GlyphProvider.Conditional>>`

### visitRequiredDependencies

```java
public void visitRequiredDependencies(Consumer<ResourceLocation> p_285391_)
```

**Parameters:**

- `p_285391_` (`Consumer<ResourceLocation>`)

### visitOptionalDependencies

```java
public void visitOptionalDependencies(Consumer<ResourceLocation> p_285405_)
```

**Parameters:**

- `p_285405_` (`Consumer<ResourceLocation>`)
