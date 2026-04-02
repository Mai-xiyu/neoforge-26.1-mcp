# ComponentUtils

**Package:** `net.minecraft.network.chat`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_SEPARATOR_TEXT` | `String` |  |
| `DEFAULT_SEPARATOR` | `Component` |  |
| `DEFAULT_NO_STYLE_SEPARATOR` | `Component` |  |

## Methods

### mergeStyles

```java
public static MutableComponent mergeStyles(MutableComponent p_130751_, Style p_130752_)
```

**Parameters:**

- `p_130751_` (`MutableComponent`)
- `p_130752_` (`Style`)

**Returns:** `public static MutableComponent`

### updateForEntity

```java
public static Optional<MutableComponent> updateForEntity(CommandSourceStack p_178425_, Optional<Component> p_178426_, Entity p_178427_, int p_178428_)
```

**Parameters:**

- `p_178425_` (`CommandSourceStack`)
- `p_178426_` (`Optional<Component>`)
- `p_178427_` (`Entity`)
- `p_178428_` (`int`)

**Returns:** `public static Optional<MutableComponent>`

### updateForEntity

```java
public static MutableComponent updateForEntity(CommandSourceStack p_130732_, Component p_130733_, Entity p_130734_, int p_130735_)
```

**Parameters:**

- `p_130732_` (`CommandSourceStack`)
- `p_130733_` (`Component`)
- `p_130734_` (`Entity`)
- `p_130735_` (`int`)

**Returns:** `public static MutableComponent`

### resolveStyle

```java
private static Style resolveStyle(CommandSourceStack p_130737_, Style p_130738_, Entity p_130739_, int p_130740_)
```

**Parameters:**

- `p_130737_` (`CommandSourceStack`)
- `p_130738_` (`Style`)
- `p_130739_` (`Entity`)
- `p_130740_` (`int`)

**Returns:** `private static Style`

### formatList

```java
public static Component formatList(Collection<String> p_130744_)
```

**Parameters:**

- `p_130744_` (`Collection<String>`)

**Returns:** `public static Component`

### formatAndSortList

```java
public static <T extends Comparable<T>> Component formatAndSortList(Collection<T> p_130746_, Function<T, Component> p_130747_)
```

**Parameters:**

- `p_130746_` (`Collection<T>`)
- `p_130747_` (`Function<T, Component>`)

**Returns:** `public static <T extends Comparable<T>> Component`

### formatList

```java
return formatList()
```

**Returns:** `return`

### formatList

```java
<T> public static <T> Component formatList(Collection<? extends T> p_178441_, Function<T, Component> p_178442_)
```

**Parameters:**

- `p_178441_` (`Collection<? extends T>`)
- `p_178442_` (`Function<T, Component>`)

**Returns:** `public static <T> Component`

### formatList

```java
return formatList()
```

**Returns:** `return`

### formatList

```java
<T> public static <T> MutableComponent formatList(Collection<? extends T> p_178430_, Optional<? extends Component> p_178431_, Function<T, Component> p_178432_)
```

**Parameters:**

- `p_178430_` (`Collection<? extends T>`)
- `p_178431_` (`Optional<? extends Component>`)
- `p_178432_` (`Function<T, Component>`)

**Returns:** `public static <T> MutableComponent`

### formatList

```java
public static Component formatList(Collection<? extends Component> p_178434_, Component p_178435_)
```

**Parameters:**

- `p_178434_` (`Collection<? extends Component>`)
- `p_178435_` (`Component`)

**Returns:** `public static Component`

### formatList

```java
<T> public static <T> MutableComponent formatList(Collection<? extends T> p_178437_, Component p_178438_, Function<T, Component> p_178439_)
```

**Parameters:**

- `p_178437_` (`Collection<? extends T>`)
- `p_178438_` (`Component`)
- `p_178439_` (`Function<T, Component>`)

**Returns:** `public static <T> MutableComponent`

### wrapInSquareBrackets

```java
public static MutableComponent wrapInSquareBrackets(Component p_130749_)
```

**Parameters:**

- `p_130749_` (`Component`)

**Returns:** `public static MutableComponent`

### fromMessage

```java
public static Component fromMessage(Message p_130730_)
```

**Parameters:**

- `p_130730_` (`Message`)

**Returns:** `public static Component`

### isTranslationResolvable

```java
public static boolean isTranslationResolvable(Component p_237135_)
```

**Parameters:**

- `p_237135_` (`Component`)

**Returns:** `public static boolean`

### copyOnClickText

```java
public static MutableComponent copyOnClickText(String p_260039_)
```

**Parameters:**

- `p_260039_` (`String`)

**Returns:** `public static MutableComponent`
