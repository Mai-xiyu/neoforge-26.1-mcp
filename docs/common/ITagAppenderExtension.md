# ITagAppenderExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface<T>

## Methods

### self

```java
private TagsProvider.TagAppender<T> self()
```

**Returns:** `private TagsProvider.TagAppender<T>`

### addTags

```java
default TagsProvider.TagAppender<T> addTags(TagKey<T>[]... values)
```

**Parameters:**

- `values` (`TagKey<T>[]...`)

**Returns:** `TagsProvider.TagAppender<T>`

### addOptionalTag

```java
default TagsProvider.TagAppender<T> addOptionalTag(TagKey<T> value)
```

**Parameters:**

- `value` (`TagKey<T>`)

**Returns:** `default TagsProvider.TagAppender<T>`

### addOptionalTags

```java
default TagsProvider.TagAppender<T> addOptionalTags(TagKey<T>[]... values)
```

**Parameters:**

- `values` (`TagKey<T>[]...`)

**Returns:** `TagsProvider.TagAppender<T>`

### replace

```java
default TagsProvider.TagAppender<T> replace()
```

**Returns:** `default TagsProvider.TagAppender<T>`

### replace

```java
return replace()
```

**Returns:** `return`

### replace

```java
default TagsProvider.TagAppender<T> replace(boolean value)
```

**Parameters:**

- `value` (`boolean`)

**Returns:** `default TagsProvider.TagAppender<T>`

### self

```java
return self()
```

**Returns:** `return`

### remove

```java
default TagsProvider.TagAppender<T> remove(ResourceLocation location)
```

**Parameters:**

- `location` (`ResourceLocation`)

**Returns:** `TagsProvider.TagAppender<T>`

### remove

```java
default TagsProvider.TagAppender<T> remove(ResourceLocation first, ResourceLocation[]... locations)
```

**Parameters:**

- `first` (`ResourceLocation`)
- `locations` (`ResourceLocation[]...`)

**Returns:** `TagsProvider.TagAppender<T>`

### self

```java
return self()
```

**Returns:** `return`

### remove

```java
default TagsProvider.TagAppender<T> remove(ResourceKey<T> resourceKey)
```

**Parameters:**

- `resourceKey` (`ResourceKey<T>`)

**Returns:** `TagsProvider.TagAppender<T>`

### self

```java
return self()
```

**Returns:** `return`

### remove

```java
default TagsProvider.TagAppender<T> remove(ResourceKey<T> firstResourceKey, ResourceKey<T>[]... resourceKeys)
```

**Parameters:**

- `firstResourceKey` (`ResourceKey<T>`)
- `resourceKeys` (`ResourceKey<T>[]...`)

**Returns:** `TagsProvider.TagAppender<T>`

### self

```java
return self()
```

**Returns:** `return`

### remove

```java
default TagsProvider.TagAppender<T> remove(TagKey<T> tag)
```

**Parameters:**

- `tag` (`TagKey<T>`)

**Returns:** `TagsProvider.TagAppender<T>`

### remove

```java
default TagsProvider.TagAppender<T> remove(TagKey<T> first, TagKey<T>[]... tags)
```

**Parameters:**

- `first` (`TagKey<T>`)
- `tags` (`TagKey<T>[]...`)

**Returns:** `TagsProvider.TagAppender<T>`

### self

```java
return self()
```

**Returns:** `return`
