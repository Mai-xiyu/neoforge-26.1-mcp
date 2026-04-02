# ObjTokenizer

**Package:** `net.neoforged.neoforge.client.model.obj`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client

## Description

A tokenizer for OBJ and MTL files.



Joins split lines and ignores comments.

## Methods

### ObjTokenizer

```java
public ObjTokenizer(InputStream inputStream)
```

**Parameters:**

- `inputStream` (`InputStream`)

**Returns:** `public`

### readAndSplitLine

```java
public String[] readAndSplitLine(boolean ignoreEmptyLines)
```

**Parameters:**

- `ignoreEmptyLines` (`boolean`)

**Returns:** `String[]`

### close

```java
public void close()
```
