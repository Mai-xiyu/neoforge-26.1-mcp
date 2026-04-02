# TagBuilder

**Package:** `net.minecraft.tags`
**Type:** class
**Implements:** `net.neoforged.neoforge.common.extensions.ITagBuilderExtension`

## Methods

### getRemoveEntries

```java
public java.util.stream.Stream<TagEntry> getRemoveEntries()
```

**Returns:** `public java.util.stream.Stream<TagEntry>`

### remove

```java
Add an entry to be removed from this tag in datagen.
    public TagBuilder remove(TagEntry entry)
```

**Parameters:**

- `entry` (`TagEntry`)

**Returns:** `Add an entry to be removed from this tag in datagen.
    public TagBuilder`

### create

```java
public static TagBuilder create()
```

**Returns:** `public static TagBuilder`

### TagBuilder

```java
return new TagBuilder()
```

**Returns:** `return new`

### build

```java
public List<TagEntry> build()
```

**Returns:** `public List<TagEntry>`

### add

```java
public TagBuilder add(TagEntry p_215903_)
```

**Parameters:**

- `p_215903_` (`TagEntry`)

**Returns:** `public TagBuilder`

### addElement

```java
public TagBuilder addElement(ResourceLocation p_215901_)
```

**Parameters:**

- `p_215901_` (`ResourceLocation`)

**Returns:** `public TagBuilder`

### addOptionalElement

```java
public TagBuilder addOptionalElement(ResourceLocation p_215906_)
```

**Parameters:**

- `p_215906_` (`ResourceLocation`)

**Returns:** `public TagBuilder`

### addTag

```java
public TagBuilder addTag(ResourceLocation p_215908_)
```

**Parameters:**

- `p_215908_` (`ResourceLocation`)

**Returns:** `public TagBuilder`

### addOptionalTag

```java
public TagBuilder addOptionalTag(ResourceLocation p_215910_)
```

**Parameters:**

- `p_215910_` (`ResourceLocation`)

**Returns:** `public TagBuilder`

### replace

```java
Set the replace property of this tag.
    public TagBuilder replace(boolean value)
```

**Parameters:**

- `value` (`boolean`)

**Returns:** `Set the replace property of this tag.
    public TagBuilder`

### replace

```java
public TagBuilder replace()
```

**Returns:** `public TagBuilder`

### replace

```java
return replace()
```

**Returns:** `return`

### isReplace

```java
Is this tag set to replace or not?
    public boolean isReplace()
```

**Returns:** `Is this tag set to replace or not?
    public boolean`
