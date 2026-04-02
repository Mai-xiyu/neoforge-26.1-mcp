# ITagBuilderExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### getRawBuilder

```java
and mark as private
    default TagBuilder getRawBuilder()
```

**Returns:** `and mark as private
    default TagBuilder`

### remove

```java
default TagBuilder remove(TagEntry tagEntry, String source)
```

**Parameters:**

- `tagEntry` (`TagEntry`)
- `source` (`String`)

**Returns:** `TagBuilder`

### removeElement

```java
default TagBuilder removeElement(ResourceLocation elementID, String source)
```

**Parameters:**

- `elementID` (`ResourceLocation`)
- `source` (`String`)

**Returns:** `TagBuilder`

### removeElement

```java
default TagBuilder removeElement(ResourceLocation elementID)
```

**Parameters:**

- `elementID` (`ResourceLocation`)

**Returns:** `TagBuilder`

### removeTag

```java
default TagBuilder removeTag(ResourceLocation tagID, String source)
```

**Parameters:**

- `tagID` (`ResourceLocation`)
- `source` (`String`)

**Returns:** `TagBuilder`

### removeTag

```java
default TagBuilder removeTag(ResourceLocation tagID)
```

**Parameters:**

- `tagID` (`ResourceLocation`)

**Returns:** `TagBuilder`
