# IConditionBuilder

**Package:** `net.neoforged.neoforge.common.conditions`
**Type:** interface

## Methods

### and

```java
default ICondition and(ICondition[]... values)
```

**Parameters:**

- `values` (`ICondition[]...`)

**Returns:** `default ICondition`

### FALSE

```java
default ICondition FALSE()
```

**Returns:** `default ICondition`

### TRUE

```java
default ICondition TRUE()
```

**Returns:** `default ICondition`

### not

```java
default ICondition not(ICondition value)
```

**Parameters:**

- `value` (`ICondition`)

**Returns:** `default ICondition`

### NotCondition

```java
return new NotCondition()
```

**Returns:** `return new`

### or

```java
default ICondition or(ICondition[]... values)
```

**Parameters:**

- `values` (`ICondition[]...`)

**Returns:** `default ICondition`

### itemExists

```java
default ICondition itemExists(String namespace, String path)
```

**Parameters:**

- `namespace` (`String`)
- `path` (`String`)

**Returns:** `default ICondition`

### ItemExistsCondition

```java
return new ItemExistsCondition()
```

**Returns:** `return new`

### modLoaded

```java
default ICondition modLoaded(String modid)
```

**Parameters:**

- `modid` (`String`)

**Returns:** `default ICondition`

### ModLoadedCondition

```java
return new ModLoadedCondition()
```

**Returns:** `return new`

### tagEmpty

```java
default ICondition tagEmpty(TagKey<Item> tag)
```

**Parameters:**

- `tag` (`TagKey<Item>`)

**Returns:** `default ICondition`
