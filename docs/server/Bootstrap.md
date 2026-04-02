# Bootstrap

**Package:** `net.minecraft.server`
**Type:** class
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STDOUT` | `PrintStream` |  |
| `bootstrapDuration` | `AtomicLong` |  |

## Methods

### bootStrap

```java
public static void bootStrap()
```

**Returns:** `public static void`

### IllegalStateException

```java
throw new IllegalStateException("Unable to load registries")
```

**Parameters:**

- `registries"` (`"Unable to load`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Failed loading EntityTypes")
```

**Parameters:**

- `EntityTypes"` (`"Failed loading`)

**Returns:** `throw new`

### wrapStreams

```java
skip redirectOutputToLog, Forge already redirects stdout and stderr output to log so that they print with more context wrapStreams()
```

**Returns:** `skip redirectOutputToLog, Forge already redirects stdout and stderr output to log so that they print with more context`

### checkTranslations

```java
<T> private static <T> void checkTranslations(Iterable<T> p_135872_, Function<T, String> p_135873_, Set<String> p_135874_)
```

**Parameters:**

- `p_135872_` (`Iterable<T>`)
- `p_135873_` (`Function<T, String>`)
- `p_135874_` (`Set<String>`)

**Returns:** `private static <T> void`

### checkGameruleTranslations

```java
private static void checkGameruleTranslations(Set<String> p_135878_)
```

**Parameters:**

- `p_135878_` (`Set<String>`)

**Returns:** `private static void`

### visit

```java
public <T extends GameRules.Value<T>> void visit(GameRules.Key<T> p_135897_, GameRules.Type<T> p_135898_)
```

**Parameters:**

- `p_135897_` (`GameRules.Key<T>`)
- `p_135898_` (`GameRules.Type<T>`)

**Returns:** `<T extends GameRules.Value<T>> void`

### getMissingTranslations

```java
public static Set<String> getMissingTranslations()
```

**Returns:** `public static Set<String>`

### checkTranslations

```java
 checkTranslations()
```

**Returns:** ``

### checkTranslations

```java
 checkTranslations()
```

**Returns:** ``

### checkTranslations

```java
 checkTranslations()
```

**Returns:** ``

### checkTranslations

```java
 checkTranslations()
```

**Returns:** ``

### checkTranslations

```java
 checkTranslations()
```

**Returns:** ``

### checkGameruleTranslations

```java
 checkGameruleTranslations()
```

**Returns:** ``

### checkBootstrapCalled

```java
public static void checkBootstrapCalled(Supplier<String> p_179913_)
```

**Parameters:**

- `p_179913_` (`Supplier<String>`)

**Returns:** `public static void`

### createBootstrapException

```java
throw createBootstrapException()
```

**Returns:** `throw`

### createBootstrapException

```java
private static RuntimeException createBootstrapException(Supplier<String> p_179917_)
```

**Parameters:**

- `p_179917_` (`Supplier<String>`)

**Returns:** `private static RuntimeException`

### validate

```java
public static void validate()
```

**Returns:** `public static void`

### wrapStreams

```java
private static void wrapStreams()
```

**Returns:** `private static void`

### realStdoutPrintln

```java
public static void realStdoutPrintln(String p_135876_)
```

**Parameters:**

- `p_135876_` (`String`)

**Returns:** `public static void`
