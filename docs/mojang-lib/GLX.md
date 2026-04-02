# GLX

**Package:** `com.mojang.blaze3d.platform`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@DontObfuscate`, `@OnlyIn(Dist.CLIENT)`

## Methods

### getOpenGLVersionString

```java
public static String getOpenGLVersionString()
```

**Returns:** `public static String`

### _getRefreshRate

```java
public static int _getRefreshRate(Window p_69342_)
```

**Parameters:**

- `p_69342_` (`Window`)

**Returns:** `public static int`

### _getLWJGLVersion

```java
public static String _getLWJGLVersion()
```

**Returns:** `public static String`

### _initGlfw

```java
public static LongSupplier _initGlfw()
```

**Returns:** `public static LongSupplier`

### _setGlfwErrorCallback

```java
public static void _setGlfwErrorCallback(GLFWErrorCallbackI p_69353_)
```

**Parameters:**

- `p_69353_` (`GLFWErrorCallbackI`)

**Returns:** `public static void`

### _shouldClose

```java
public static boolean _shouldClose(Window p_69356_)
```

**Parameters:**

- `p_69356_` (`Window`)

**Returns:** `public static boolean`

### _init

```java
public static void _init(int p_69344_, boolean p_69345_)
```

**Parameters:**

- `p_69344_` (`int`)
- `p_69345_` (`boolean`)

**Returns:** `public static void`

### _getCpuInfo

```java
public static String _getCpuInfo()
```

**Returns:** `public static String`

### _renderCrosshair

```java
public static void _renderCrosshair(int p_69348_, boolean p_69349_, boolean p_69350_, boolean p_69351_)
```

**Parameters:**

- `p_69348_` (`int`)
- `p_69349_` (`boolean`)
- `p_69350_` (`boolean`)
- `p_69351_` (`boolean`)

**Returns:** `public static void`

### make

```java
<T> public static <T> T make(Supplier<T> p_69374_)
```

**Parameters:**

- `p_69374_` (`Supplier<T>`)

**Returns:** `public static <T> T`

### make

```java
<T> public static <T> T make(T p_69371_, Consumer<T> p_69372_)
```

**Parameters:**

- `p_69371_` (`T`)
- `p_69372_` (`Consumer<T>`)

**Returns:** `public static <T> T`
