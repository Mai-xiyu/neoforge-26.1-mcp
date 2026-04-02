# CsvOutput

**Package:** `net.minecraft.util`
**Type:** class

## Methods

### CsvOutput

```java
 CsvOutput(Writer p_13613_, List<String> p_13614_)
```

**Parameters:**

- `p_13613_` (`Writer`)
- `p_13614_` (`List<String>`)

**Returns:** ``

### builder

```java
public static CsvOutput.Builder builder()
```

**Returns:** `public static CsvOutput.Builder`

### writeRow

```java
public void writeRow(Object[]... p_13625_)
```

**Parameters:**

- `p_13625_` (`Object[]...`)

**Returns:** `public void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Invalid number of columns, expected " + this.columnCount + ", but got " + p_13625_.length)
```

**Parameters:**

- `columns` (`"Invalid number of`)
- `"` (`expected " + this.columnCount +`)
- `p_13625_.length` (`but got " +`)

**Returns:** `throw new`

### writeLine

```java
private void writeLine(Stream<?> p_13623_)
```

**Parameters:**

- `p_13623_` (`Stream<?>`)

**Returns:** `private void`

### getStringValue

```java
private static String getStringValue(Object p_13621_)
```

**Parameters:**

- `p_13621_` (`Object`)

**Returns:** `private static String`

### addColumn

```java
public CsvOutput.Builder addColumn(String p_13631_)
```

**Parameters:**

- `p_13631_` (`String`)

**Returns:** `public CsvOutput.Builder`

### build

```java
public CsvOutput build(Writer p_13629_)
```

**Parameters:**

- `p_13629_` (`Writer`)

**Returns:** `public CsvOutput`

### CsvOutput

```java
return new CsvOutput()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
