# ChainedJsonException

**Package:** `net.minecraft.server`
**Type:** class
**Extends:** `IOException`
**Side:** 🖧 Server

## Methods

### ChainedJsonException

```java
public ChainedJsonException(String p_135902_)
```

**Parameters:**

- `p_135902_` (`String`)

**Returns:** `public`

### ChainedJsonException

```java
public ChainedJsonException(String p_135904_, Throwable p_135905_)
```

**Parameters:**

- `p_135904_` (`String`)
- `p_135905_` (`Throwable`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### prependJsonKey

```java
public void prependJsonKey(String p_135909_)
```

**Parameters:**

- `p_135909_` (`String`)

**Returns:** `public void`

### setFilenameAndFlush

```java
public void setFilenameAndFlush(String p_135911_)
```

**Parameters:**

- `p_135911_` (`String`)

**Returns:** `public void`

### getMessage

```java
public String getMessage()
```

**Returns:** `String`

### forException

```java
public static ChainedJsonException forException(Exception p_135907_)
```

**Parameters:**

- `p_135907_` (`Exception`)

**Returns:** `public static ChainedJsonException`

### ChainedJsonException

```java
return new ChainedJsonException()
```

**Returns:** `return new`

### Entry

```java
 Entry()
```

**Returns:** ``

### addJsonKey

```java
void addJsonKey(String p_135919_)
```

**Parameters:**

- `p_135919_` (`String`)

### getFilename

```java
public String getFilename()
```

**Returns:** `String`

### getJsonKeys

```java
public String getJsonKeys()
```

**Returns:** `public String`

### toString

```java
public String toString()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Entry` | class |  |
