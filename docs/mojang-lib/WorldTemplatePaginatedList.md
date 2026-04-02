# WorldTemplatePaginatedList

**Package:** `com.mojang.realmsclient.dto`
**Type:** class
**Extends:** `ValueObject`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `templates` | `List<WorldTemplate>` |  |
| `page` | `int` |  |
| `size` | `int` |  |
| `total` | `int` |  |

## Methods

### WorldTemplatePaginatedList

```java
public WorldTemplatePaginatedList()
```

**Returns:** `public`

### WorldTemplatePaginatedList

```java
public WorldTemplatePaginatedList(int p_87761_)
```

**Parameters:**

- `p_87761_` (`int`)

**Returns:** `public`

### isLastPage

```java
public boolean isLastPage()
```

**Returns:** `public boolean`

### parse

```java
public static WorldTemplatePaginatedList parse(String p_87763_)
```

**Parameters:**

- `p_87763_` (`String`)

**Returns:** `public static WorldTemplatePaginatedList`
