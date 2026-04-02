# ItemExistsCondition

**Package:** `net.neoforged.neoforge.common.conditions`
**Type:** class
**Implements:** `ICondition`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ItemExistsCondition>` |  |

## Methods

### ItemExistsCondition

```java
public ItemExistsCondition(String location)
```

**Parameters:**

- `location` (`String`)

**Returns:** `public`

### ItemExistsCondition

```java
public ItemExistsCondition(String namespace, String path)
```

**Parameters:**

- `namespace` (`String`)
- `path` (`String`)

**Returns:** `public`

### ItemExistsCondition

```java
public ItemExistsCondition(ResourceLocation item)
```

**Parameters:**

- `item` (`ResourceLocation`)

**Returns:** `public`

### test

```java
public boolean test(IContext context)
```

**Parameters:**

- `context` (`IContext`)

**Returns:** `boolean`

### codec

```java
public MapCodec<? extends ICondition> codec()
```

**Returns:** `MapCodec<? extends ICondition>`

### getItem

```java
public ResourceLocation getItem()
```

**Returns:** `public ResourceLocation`

### toString

```java
public String toString()
```

**Returns:** `String`
