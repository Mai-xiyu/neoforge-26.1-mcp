# DataComponentUtil

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class

## Methods

### wrapEncodingExceptions

```java
public static <T extends DataComponentHolder> Tag wrapEncodingExceptions(T componentHolder, Codec<T> codec, HolderLookup.Provider provider, Tag tag)
```

**Parameters:**

- `componentHolder` (`T`)
- `codec` (`Codec<T>`)
- `provider` (`HolderLookup.Provider`)
- `tag` (`Tag`)

**Returns:** `Tag`

### logDataComponentSaveError

```java
 logDataComponentSaveError()
```

**Returns:** ``

### wrapEncodingExceptions

```java
public static <T extends DataComponentHolder> Tag wrapEncodingExceptions(T componentHolder, Codec<T> codec, HolderLookup.Provider provider)
```

**Parameters:**

- `componentHolder` (`T`)
- `codec` (`Codec<T>`)
- `provider` (`HolderLookup.Provider`)

**Returns:** `Tag`

### logDataComponentSaveError

```java
 logDataComponentSaveError()
```

**Returns:** ``

### logDataComponentSaveError

```java
public static void logDataComponentSaveError(DataComponentHolder componentHolder, Exception original, Tag tag)
```

**Parameters:**

- `componentHolder` (`DataComponentHolder`)
- `original` (`Exception`)
- `tag` (`Tag`)
