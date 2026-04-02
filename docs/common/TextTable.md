# TextTable

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class

## Description

Utility to format data into a textual (markdown-compliant) table.

## Methods

### column

```java
public static Column column(String header)
```

**Parameters:**

- `header` (`String`)

**Returns:** `public static Column`

### Column

```java
return new Column()
```

**Returns:** `return new`

### column

```java
public static Column column(String header, Alignment alignment)
```

**Parameters:**

- `header` (`String`)
- `alignment` (`Alignment`)

**Returns:** `public static Column`

### Column

```java
return new Column()
```

**Returns:** `return new`

### TextTable

```java
public TextTable(List<Column> columns)
```

**Parameters:**

- `columns` (`List<Column>`)

**Returns:** `public`

### build

```java
public String build(String lineEnding)
```

**Parameters:**

- `lineEnding` (`String`)

**Returns:** `public String`

### append

```java
 append()
```

**Returns:** ``

### append

```java
public void append(StringBuilder destination, String lineEnding)
```

**Parameters:**

- `destination` (`StringBuilder`)
- `lineEnding` (`String`)

### printRow

```java
 printRow()
```

**Returns:** ``

### printSeparators

```java
 printSeparators()
```

**Returns:** ``

### printSeparators

```java
private void printSeparators(StringBuilder destination)
```

**Parameters:**

- `destination` (`StringBuilder`)

**Returns:** `private void`

### printRow

```java
private void printRow(StringBuilder destination, List<String> values)
```

**Parameters:**

- `destination` (`StringBuilder`)
- `values` (`List<String>`)

**Returns:** `private void`

### add

```java
public void add(Object[]... values)
```

**Parameters:**

- `values` (`Object[]...`)

**Returns:** `public void`

### clear

```java
public void clear()
```

**Returns:** `public void`

### getColumns

```java
public List<Column> getColumns()
```

**Returns:** `public List<Column>`

### Column

```java
public Column(String header)
```

**Parameters:**

- `header` (`String`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### Column

```java
public Column(String header, Alignment alignment)
```

**Parameters:**

- `header` (`String`)
- `alignment` (`Alignment`)

**Returns:** `public`

### formatHeader

```java
public String formatHeader(String padding)
```

**Parameters:**

- `padding` (`String`)

**Returns:** `public String`

### format

```java
return format()
```

**Returns:** `return`

### format

```java
public String format(String value, String padding)
```

**Parameters:**

- `value` (`String`)
- `padding` (`String`)

**Returns:** `public String`

### getSeparator

```java
public String getSeparator(char character)
```

**Parameters:**

- `character` (`char`)

**Returns:** `public String`

### fit

```java
public void fit(String value)
```

**Parameters:**

- `value` (`String`)

**Returns:** `public void`

### resetWidth

```java
public void resetWidth()
```

**Returns:** `public void`

### getWidth

```java
public int getWidth()
```

**Returns:** `public int`

### format

```java
public List<String> format(List<Column> columns, String padding)
```

**Parameters:**

- `columns` (`List<Column>`)
- `padding` (`String`)

**Returns:** `public List<String>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Column` | class |  |
| `Row` | class |  |
| `Alignment` | enum |  |
