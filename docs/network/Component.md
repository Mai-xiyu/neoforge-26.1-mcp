# Component

**Package:** `net.minecraft.network.chat`
**Type:** interface
**Extends:** `Message, FormattedText`

## Methods

### getStyle

```java
Style getStyle()
```

**Returns:** `Style`

### getContents

```java
ComponentContents getContents()
```

**Returns:** `ComponentContents`

### getString

```java
default String getString()
```

**Returns:** `String`

### getString

```java
default String getString(int p_130669_)
```

**Parameters:**

- `p_130669_` (`int`)

**Returns:** `default String`

### getSiblings

```java
List<Component> getSiblings()
```

**Returns:** `List<Component>`

### tryCollapseToString

```java
default String tryCollapseToString()
```

**Returns:** `String`

### plainCopy

```java
default MutableComponent plainCopy()
```

**Returns:** `default MutableComponent`

### copy

```java
default MutableComponent copy()
```

**Returns:** `default MutableComponent`

### getVisualOrderText

```java
FormattedCharSequence getVisualOrderText()
```

**Returns:** `FormattedCharSequence`

### visit

```java
default <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_130679_, Style p_130680_)
```

**Parameters:**

- `p_130679_` (`FormattedText.StyledContentConsumer<T>`)
- `p_130680_` (`Style`)

**Returns:** `Optional<T>`

### visit

```java
default <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_130677_)
```

**Parameters:**

- `p_130677_` (`FormattedText.ContentConsumer<T>`)

**Returns:** `Optional<T>`

### toFlatList

```java
default List<Component> toFlatList()
```

**Returns:** `default List<Component>`

### toFlatList

```java
default List<Component> toFlatList(Style p_178406_)
```

**Parameters:**

- `p_178406_` (`Style`)

**Returns:** `default List<Component>`

### contains

```java
default boolean contains(Component p_240571_)
```

**Parameters:**

- `p_240571_` (`Component`)

**Returns:** `default boolean`

### nullToEmpty

```java
static Component nullToEmpty(String p_130675_)
```

**Parameters:**

- `p_130675_` (`String`)

**Returns:** `static Component`

### literal

```java
static MutableComponent literal(String p_237114_)
```

**Parameters:**

- `p_237114_` (`String`)

**Returns:** `static MutableComponent`

### translatable

```java
static MutableComponent translatable(String p_237116_)
```

**Parameters:**

- `p_237116_` (`String`)

**Returns:** `static MutableComponent`

### translatable

```java
static MutableComponent translatable(String p_237111_, Object[]... p_237112_)
```

**Parameters:**

- `p_237111_` (`String`)
- `p_237112_` (`Object[]...`)

**Returns:** `static MutableComponent`

### translatableEscape

```java
static MutableComponent translatableEscape(String p_304683_, Object[]... p_304399_)
```

**Parameters:**

- `p_304683_` (`String`)
- `p_304399_` (`Object[]...`)

**Returns:** `static MutableComponent`

### translatable

```java
return translatable()
```

**Returns:** `return`

### translatableWithFallback

```java
static MutableComponent translatableWithFallback(String p_265747_, String p_265287_)
```

**Parameters:**

- `p_265747_` (`String`)
- `p_265287_` (`String`)

**Returns:** `static MutableComponent`

### translatableWithFallback

```java
static MutableComponent translatableWithFallback(String p_265449_, String p_265281_, Object[]... p_265785_)
```

**Parameters:**

- `p_265449_` (`String`)
- `p_265281_` (`String`)
- `p_265785_` (`Object[]...`)

**Returns:** `static MutableComponent`

### empty

```java
static MutableComponent empty()
```

**Returns:** `static MutableComponent`

### keybind

```java
static MutableComponent keybind(String p_237118_)
```

**Parameters:**

- `p_237118_` (`String`)

**Returns:** `static MutableComponent`

### nbt

```java
static MutableComponent nbt(String p_237106_, boolean p_237107_, Optional<Component> p_237108_, DataSource p_237109_)
```

**Parameters:**

- `p_237106_` (`String`)
- `p_237107_` (`boolean`)
- `p_237108_` (`Optional<Component>`)
- `p_237109_` (`DataSource`)

**Returns:** `static MutableComponent`

### score

```java
static MutableComponent score(String p_237100_, String p_237101_)
```

**Parameters:**

- `p_237100_` (`String`)
- `p_237101_` (`String`)

**Returns:** `static MutableComponent`

### selector

```java
static MutableComponent selector(String p_237103_, Optional<Component> p_237104_)
```

**Parameters:**

- `p_237103_` (`String`)
- `p_237104_` (`Optional<Component>`)

**Returns:** `static MutableComponent`

### translationArg

```java
static Component translationArg(Date p_304461_)
```

**Parameters:**

- `p_304461_` (`Date`)

**Returns:** `static Component`

### translationArg

```java
static Component translationArg(Message p_304620_)
```

**Parameters:**

- `p_304620_` (`Message`)

**Returns:** `static Component`

### translationArg

```java
static Component translationArg(UUID p_304730_)
```

**Parameters:**

- `p_304730_` (`UUID`)

**Returns:** `static Component`

### translationArg

```java
static Component translationArg(ResourceLocation p_304849_)
```

**Parameters:**

- `p_304849_` (`ResourceLocation`)

**Returns:** `static Component`

### translationArg

```java
static Component translationArg(ChunkPos p_304675_)
```

**Parameters:**

- `p_304675_` (`ChunkPos`)

**Returns:** `static Component`

### translationArg

```java
static Component translationArg(URI p_352152_)
```

**Parameters:**

- `p_352152_` (`URI`)

**Returns:** `static Component`

### Serializer

```java
private Serializer()
```

**Returns:** `private`

### deserialize

```java
static MutableComponent deserialize(JsonElement p_130720_, HolderLookup.Provider p_330752_)
```

**Parameters:**

- `p_130720_` (`JsonElement`)
- `p_330752_` (`HolderLookup.Provider`)

**Returns:** `static MutableComponent`

### serialize

```java
static JsonElement serialize(Component p_304983_, HolderLookup.Provider p_331501_)
```

**Parameters:**

- `p_304983_` (`Component`)
- `p_331501_` (`HolderLookup.Provider`)

**Returns:** `static JsonElement`

### toJson

```java
public static String toJson(Component p_130704_, HolderLookup.Provider p_330782_)
```

**Parameters:**

- `p_130704_` (`Component`)
- `p_330782_` (`HolderLookup.Provider`)

**Returns:** `public static String`

### fromJson

```java
public static MutableComponent fromJson(String p_130702_, HolderLookup.Provider p_331632_)
```

**Parameters:**

- `p_130702_` (`String`)
- `p_331632_` (`HolderLookup.Provider`)

**Returns:** `MutableComponent`

### fromJson

```java
public static MutableComponent fromJson(JsonElement p_130692_, HolderLookup.Provider p_330725_)
```

**Parameters:**

- `p_130692_` (`JsonElement`)
- `p_330725_` (`HolderLookup.Provider`)

**Returns:** `MutableComponent`

### fromJsonLenient

```java
public static MutableComponent fromJsonLenient(String p_130715_, HolderLookup.Provider p_331029_)
```

**Parameters:**

- `p_130715_` (`String`)
- `p_331029_` (`HolderLookup.Provider`)

**Returns:** `MutableComponent`

### SerializerAdapter

```java
public SerializerAdapter(HolderLookup.Provider p_330454_)
```

**Parameters:**

- `p_330454_` (`HolderLookup.Provider`)

**Returns:** `public`

### deserialize

```java
public MutableComponent deserialize(JsonElement p_304644_, Type p_304861_, JsonDeserializationContext p_304563_)
```

**Parameters:**

- `p_304644_` (`JsonElement`)
- `p_304861_` (`Type`)
- `p_304563_` (`JsonDeserializationContext`)

**Returns:** `public MutableComponent`

### serialize

```java
public JsonElement serialize(Component p_304915_, Type p_304423_, JsonSerializationContext p_304514_)
```

**Parameters:**

- `p_304915_` (`Component`)
- `p_304423_` (`Type`)
- `p_304514_` (`JsonSerializationContext`)

**Returns:** `public JsonElement`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Serializer` | class |  |
| `SerializerAdapter` | class |  |
