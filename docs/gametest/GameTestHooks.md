# GameTestHooks

**Package:** `net.neoforged.neoforge.gametest`
**Type:** class

## Methods

### isGametestEnabled

```java
public static boolean isGametestEnabled()
```

**Returns:** `public static boolean`

### isGametestServer

```java
public static boolean isGametestServer()
```

**Returns:** `public static boolean`

### registerGametests

```java
public static void registerGametests()
```

### getEnabledNamespaces

```java
private static Set<String> getEnabledNamespaces()
```

**Returns:** `private static Set<String>`

### addGameTestMethods

```java
private static void addGameTestMethods(AnnotationData annotationData, Set<Method> gameTestMethods)
```

**Parameters:**

- `annotationData` (`AnnotationData`)
- `gameTestMethods` (`Set<Method>`)

**Returns:** `private static void`

### RuntimeException

```java
Should not be possible
            throw new RuntimeException()
```

**Returns:** `Should not be possible
            throw new`

### getTemplateNamespace

```java
public static String getTemplateNamespace(Method method)
```

**Parameters:**

- `method` (`Method`)

**Returns:** `public static String`

### prefixGameTestTemplate

```java
public static boolean prefixGameTestTemplate(Method method)
```

**Parameters:**

- `method` (`Method`)

**Returns:** `public static boolean`
