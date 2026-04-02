# TagEntry

**Package:** `net.minecraft.tags`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<TagEntry>` |  |

## Methods

### TagEntry

```java
private TagEntry(ResourceLocation p_215918_, boolean p_215919_, boolean p_215920_)
```

**Parameters:**

- `p_215918_` (`ResourceLocation`)
- `p_215919_` (`boolean`)
- `p_215920_` (`boolean`)

**Returns:** `private`

### TagEntry

```java
private TagEntry(ExtraCodecs.TagOrElementLocation p_215922_, boolean p_215923_)
```

**Parameters:**

- `p_215922_` (`ExtraCodecs.TagOrElementLocation`)
- `p_215923_` (`boolean`)

**Returns:** `private`

### elementOrTag

```java
private ExtraCodecs.TagOrElementLocation elementOrTag()
```

**Returns:** `private ExtraCodecs.TagOrElementLocation`

### element

```java
public static TagEntry element(ResourceLocation p_215926_)
```

**Parameters:**

- `p_215926_` (`ResourceLocation`)

**Returns:** `public static TagEntry`

### TagEntry

```java
return new TagEntry()
```

**Returns:** `return new`

### optionalElement

```java
public static TagEntry optionalElement(ResourceLocation p_215944_)
```

**Parameters:**

- `p_215944_` (`ResourceLocation`)

**Returns:** `public static TagEntry`

### TagEntry

```java
return new TagEntry()
```

**Returns:** `return new`

### tag

```java
public static TagEntry tag(ResourceLocation p_215950_)
```

**Parameters:**

- `p_215950_` (`ResourceLocation`)

**Returns:** `public static TagEntry`

### TagEntry

```java
return new TagEntry()
```

**Returns:** `return new`

### optionalTag

```java
public static TagEntry optionalTag(ResourceLocation p_215954_)
```

**Parameters:**

- `p_215954_` (`ResourceLocation`)

**Returns:** `public static TagEntry`

### TagEntry

```java
return new TagEntry()
```

**Returns:** `return new`

### build

```java
<T> public <T> boolean build(TagEntry.Lookup<T> p_215928_, Consumer<T> p_215929_)
```

**Parameters:**

- `p_215928_` (`TagEntry.Lookup<T>`)
- `p_215929_` (`Consumer<T>`)

**Returns:** `public <T> boolean`

### visitRequiredDependencies

```java
public void visitRequiredDependencies(Consumer<ResourceLocation> p_215939_)
```

**Parameters:**

- `p_215939_` (`Consumer<ResourceLocation>`)

**Returns:** `public void`

### visitOptionalDependencies

```java
public void visitOptionalDependencies(Consumer<ResourceLocation> p_215948_)
```

**Parameters:**

- `p_215948_` (`Consumer<ResourceLocation>`)

**Returns:** `public void`

### verifyIfPresent

```java
public boolean verifyIfPresent(Predicate<ResourceLocation> p_215941_, Predicate<ResourceLocation> p_215942_)
```

**Parameters:**

- `p_215941_` (`Predicate<ResourceLocation>`)
- `p_215942_` (`Predicate<ResourceLocation>`)

**Returns:** `public boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### getId

```java
public ResourceLocation getId()
```

**Returns:** `public ResourceLocation`

### isRequired

```java
public boolean isRequired()
```

**Returns:** `public boolean`

### isTag

```java
public boolean isTag()
```

**Returns:** `public boolean`

### element

```java
T element(ResourceLocation p_215956_)
```

**Parameters:**

- `p_215956_` (`ResourceLocation`)

**Returns:** `T`

### tag

```java
Collection<T> tag(ResourceLocation p_215957_)
```

**Parameters:**

- `p_215957_` (`ResourceLocation`)

**Returns:** `Collection<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Lookup` | interface |  |
