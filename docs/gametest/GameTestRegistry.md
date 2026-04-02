# GameTestRegistry

**Package:** `net.minecraft.gametest.framework`
**Type:** class

## Methods

### register

```java
public static void register(Class<?> p_177502_)
```

**Parameters:**

- `p_177502_` (`Class<?>`)

### register

```java
public static void register(Method p_177504_)
```

**Parameters:**

- `p_177504_` (`Method`)

### register

```java
public static void register(Method p_177504_, java.util.Set<String> allowedNamespaces)
```

**Parameters:**

- `p_177504_` (`Method`)
- `allowedNamespaces` (`java.util.Set<String>`)

### registerBatchFunction

```java
 registerBatchFunction()
```

**Returns:** ``

### registerBatchFunction

```java
 registerBatchFunction()
```

**Returns:** ``

### registerBatchFunction

```java
<T extends Annotation> private static <T extends Annotation> void registerBatchFunction(Method p_177506_, Class<T> p_177507_, Function<T, String> p_177508_, Map<String, Consumer<ServerLevel>> p_177509_)
```

**Parameters:**

- `p_177506_` (`Method`)
- `p_177507_` (`Class<T>`)
- `p_177508_` (`Function<T, String>`)
- `p_177509_` (`Map<String, Consumer<ServerLevel>>`)

**Returns:** `private static <T extends Annotation> void`

### RuntimeException

```java
throw new RuntimeException(there should only be one " + p_177507_ + " method per batch. Batch '" + s + "' has more than one!")
```

**Parameters:**

- `one!"` (`there should only be one " + p_177507_ + " method per batch. Batch '" + s + "' has more than`)

**Returns:** `throw new`

### getTestFunctionsForClassName

```java
public static Stream<TestFunction> getTestFunctionsForClassName(String p_127660_)
```

**Parameters:**

- `p_127660_` (`String`)

**Returns:** `public static Stream<TestFunction>`

### getAllTestFunctions

```java
public static Collection<TestFunction> getAllTestFunctions()
```

**Returns:** `public static Collection<TestFunction>`

### getAllTestClassNames

```java
public static Collection<String> getAllTestClassNames()
```

**Returns:** `public static Collection<String>`

### isTestClass

```java
public static boolean isTestClass(String p_127671_)
```

**Parameters:**

- `p_127671_` (`String`)

**Returns:** `public static boolean`

### getBeforeBatchFunction

```java
public static Consumer<ServerLevel> getBeforeBatchFunction(String p_127677_)
```

**Parameters:**

- `p_127677_` (`String`)

**Returns:** `public static Consumer<ServerLevel>`

### getAfterBatchFunction

```java
public static Consumer<ServerLevel> getAfterBatchFunction(String p_177518_)
```

**Parameters:**

- `p_177518_` (`String`)

**Returns:** `public static Consumer<ServerLevel>`

### findTestFunction

```java
public static Optional<TestFunction> findTestFunction(String p_127680_)
```

**Parameters:**

- `p_127680_` (`String`)

**Returns:** `public static Optional<TestFunction>`

### getTestFunction

```java
public static TestFunction getTestFunction(String p_127682_)
```

**Parameters:**

- `p_127682_` (`String`)

**Returns:** `public static TestFunction`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Can't find the test function for " + p_127682_)
```

**Parameters:**

- `p_127682_` (`"Can't find the test function for " +`)

**Returns:** `throw new`

### useTestGeneratorMethod

```java
private static Collection<TestFunction> useTestGeneratorMethod(Method p_177514_)
```

**Parameters:**

- `p_177514_` (`Method`)

**Returns:** `private static Collection<TestFunction>`

### RuntimeException

```java
throw new RuntimeException()
```

**Returns:** `throw new`

### turnMethodIntoTestFunction

```java
private static TestFunction turnMethodIntoTestFunction(Method p_177516_)
```

**Parameters:**

- `p_177516_` (`Method`)

**Returns:** `private static TestFunction`

### turnMethodIntoConsumer

```java
private static Consumer<?> turnMethodIntoConsumer(Method p_177520_)
```

**Parameters:**

- `p_177520_` (`Method`)

**Returns:** `private static Consumer<?>`

### RuntimeException

```java
throw new RuntimeException()
```

**Returns:** `throw new`

### isTestFunctionPartOfClass

```java
private static boolean isTestFunctionPartOfClass(TestFunction p_127667_, String p_127668_)
```

**Parameters:**

- `p_127667_` (`TestFunction`)
- `p_127668_` (`String`)

**Returns:** `private static boolean`

### getLastFailedTests

```java
public static Stream<TestFunction> getLastFailedTests()
```

**Returns:** `public static Stream<TestFunction>`

### rememberFailedTest

```java
public static void rememberFailedTest(TestFunction p_127665_)
```

**Parameters:**

- `p_127665_` (`TestFunction`)

**Returns:** `public static void`

### forgetFailedTests

```java
public static void forgetFailedTests()
```

**Returns:** `public static void`
