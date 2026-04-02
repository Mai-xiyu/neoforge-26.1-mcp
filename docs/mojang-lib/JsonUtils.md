# JsonUtils

**Package:** `com.mojang.realmsclient.util`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### getRequired

```java
<T> public static <T> T getRequired(String p_275573_, JsonObject p_275650_, Function<JsonObject, T> p_275655_)
```

**Parameters:**

- `p_275573_` (`String`)
- `p_275650_` (`JsonObject`)
- `p_275655_` (`Function<JsonObject, T>`)

**Returns:** `public static <T> T`

### IllegalStateException

```java
throw new IllegalStateException("Missing required property: " + p_275573_)
```

**Parameters:**

- `p_275573_` (`"Missing required property: " +`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Required property " + p_275573_ + " was not a JsonObject as espected")
```

**Parameters:**

- `espected"` (`"Required property " + p_275573_ + " was not a JsonObject as`)

**Returns:** `throw new`

### getOptional

```java
public static <T> T getOptional(String p_304642_, JsonObject p_304910_, Function<JsonObject, T> p_304507_)
```

**Parameters:**

- `p_304642_` (`String`)
- `p_304910_` (`JsonObject`)
- `p_304507_` (`Function<JsonObject, T>`)

**Returns:** `T`

### IllegalStateException

```java
throw new IllegalStateException("Required property " + p_304642_ + " was not a JsonObject as espected")
```

**Parameters:**

- `espected"` (`"Required property " + p_304642_ + " was not a JsonObject as`)

**Returns:** `throw new`

### getRequiredString

```java
public static String getRequiredString(String p_275692_, JsonObject p_275706_)
```

**Parameters:**

- `p_275692_` (`String`)
- `p_275706_` (`JsonObject`)

**Returns:** `public static String`

### IllegalStateException

```java
throw new IllegalStateException("Missing required property: " + p_275692_)
```

**Parameters:**

- `p_275692_` (`"Missing required property: " +`)

**Returns:** `throw new`

### getRequiredStringOr

```java
public static String getRequiredStringOr(String p_307555_, JsonObject p_307369_, String p_307525_)
```

**Parameters:**

- `p_307555_` (`String`)
- `p_307369_` (`JsonObject`)
- `p_307525_` (`String`)

**Returns:** `public static String`

### getStringOr

```java
public static String getStringOr(String p_90162_, JsonObject p_90163_, String p_90164_)
```

**Parameters:**

- `p_90162_` (`String`)
- `p_90163_` (`JsonObject`)
- `p_90164_` (`String`)

**Returns:** `String`

### getUuidOr

```java
public static UUID getUuidOr(String p_275342_, JsonObject p_275515_, UUID p_275232_)
```

**Parameters:**

- `p_275342_` (`String`)
- `p_275515_` (`JsonObject`)
- `p_275232_` (`UUID`)

**Returns:** `UUID`

### getIntOr

```java
public static int getIntOr(String p_90154_, JsonObject p_90155_, int p_90156_)
```

**Parameters:**

- `p_90154_` (`String`)
- `p_90155_` (`JsonObject`)
- `p_90156_` (`int`)

**Returns:** `public static int`

### getLongOr

```java
public static long getLongOr(String p_90158_, JsonObject p_90159_, long p_90160_)
```

**Parameters:**

- `p_90158_` (`String`)
- `p_90159_` (`JsonObject`)
- `p_90160_` (`long`)

**Returns:** `public static long`

### getBooleanOr

```java
public static boolean getBooleanOr(String p_90166_, JsonObject p_90167_, boolean p_90168_)
```

**Parameters:**

- `p_90166_` (`String`)
- `p_90167_` (`JsonObject`)
- `p_90168_` (`boolean`)

**Returns:** `public static boolean`

### getDateOr

```java
public static Date getDateOr(String p_90151_, JsonObject p_90152_)
```

**Parameters:**

- `p_90151_` (`String`)
- `p_90152_` (`JsonObject`)

**Returns:** `public static Date`
