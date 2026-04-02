# TextRenderingUtils

**Package:** `com.mojang.realmsclient.util`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `segments` | `List<TextRenderingUtils.LineSegment>` |  |

## Methods

### TextRenderingUtils

```java
private TextRenderingUtils()
```

**Returns:** `private`

### lineBreak

```java
protected static List<String> lineBreak(String p_90249_)
```

**Parameters:**

- `p_90249_` (`String`)

**Returns:** `List<String>`

### decompose

```java
public static List<TextRenderingUtils.Line> decompose(String p_90257_, TextRenderingUtils.LineSegment[]... p_90258_)
```

**Parameters:**

- `p_90257_` (`String`)
- `p_90258_` (`TextRenderingUtils.LineSegment[]...`)

**Returns:** `public static List<TextRenderingUtils.Line>`

### decompose

```java
private static List<TextRenderingUtils.Line> decompose(String p_90254_, List<TextRenderingUtils.LineSegment> p_90255_)
```

**Parameters:**

- `p_90254_` (`String`)
- `p_90255_` (`List<TextRenderingUtils.LineSegment>`)

**Returns:** `private static List<TextRenderingUtils.Line>`

### insertLinks

```java
return insertLinks()
```

**Returns:** `return`

### insertLinks

```java
private static List<TextRenderingUtils.Line> insertLinks(List<String> p_90260_, List<TextRenderingUtils.LineSegment> p_90261_)
```

**Parameters:**

- `p_90260_` (`List<String>`)
- `p_90261_` (`List<TextRenderingUtils.LineSegment>`)

**Returns:** `private static List<TextRenderingUtils.Line>`

### split

```java
public static List<String> split(String p_90251_, String p_90252_)
```

**Parameters:**

- `p_90251_` (`String`)
- `p_90252_` (`String`)

**Returns:** `public static List<String>`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Delimiter cannot be the empty string")
```

**Parameters:**

- `string"` (`"Delimiter cannot be the empty`)

**Returns:** `throw new`

### Line

```java
 Line(TextRenderingUtils.LineSegment[]... p_167625_)
```

**Parameters:**

- `p_167625_` (`TextRenderingUtils.LineSegment[]...`)

**Returns:** ``

### Line

```java
 Line(List<TextRenderingUtils.LineSegment> p_90264_)
```

**Parameters:**

- `p_90264_` (`List<TextRenderingUtils.LineSegment>`)

**Returns:** ``

### toString

```java
public String toString()
```

**Returns:** `String`

### equals

```java
public boolean equals(Object p_90266_)
```

**Parameters:**

- `p_90266_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### LineSegment

```java
private LineSegment(String p_90273_)
```

**Parameters:**

- `p_90273_` (`String`)

**Returns:** `private`

### LineSegment

```java
private LineSegment(String p_90275_, String p_90276_, String p_90277_)
```

**Parameters:**

- `p_90275_` (`String`)
- `p_90276_` (`String`)
- `p_90277_` (`String`)

**Returns:** `private`

### equals

```java
public boolean equals(Object p_90287_)
```

**Parameters:**

- `p_90287_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`

### renderedText

```java
public String renderedText()
```

**Returns:** `public String`

### isLink

```java
public boolean isLink()
```

**Returns:** `public boolean`

### getLinkUrl

```java
public String getLinkUrl()
```

**Returns:** `public String`

### IllegalStateException

```java
throw new IllegalStateException("Not a link: " + this)
```

**Parameters:**

- `this` (`"Not a link: " +`)

**Returns:** `throw new`

### link

```java
public static TextRenderingUtils.LineSegment link(String p_90282_, String p_90283_)
```

**Parameters:**

- `p_90282_` (`String`)
- `p_90283_` (`String`)

**Returns:** `public static TextRenderingUtils.LineSegment`

### text

```java
protected static TextRenderingUtils.LineSegment text(String p_90280_)
```

**Parameters:**

- `p_90280_` (`String`)

**Returns:** `TextRenderingUtils.LineSegment`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Line` | class |  |
| `LineSegment` | class |  |
