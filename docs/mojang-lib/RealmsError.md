# RealmsError

**Package:** `com.mojang.realmsclient.client`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_CODE` | `int` |  |
| `SERVICE_BUSY` | `RealmsError.CustomError` |  |
| `RETRY_MESSAGE` | `Component` |  |

## Methods

### errorCode

```java
int errorCode()
```

**Returns:** `int`

### errorMessage

```java
Component errorMessage()
```

**Returns:** `Component`

### logMessage

```java
String logMessage()
```

**Returns:** `String`

### parse

```java
static RealmsError parse(int p_294532_, String p_87304_)
```

**Parameters:**

- `p_294532_` (`int`)
- `p_87304_` (`String`)

**Returns:** `static RealmsError`

### errorCode

```java
public int errorCode()
```

**Returns:** `int`

### errorMessage

```java
public Component errorMessage()
```

**Returns:** `Component`

### logMessage

```java
public String logMessage()
```

**Returns:** `String`

### unknownCompatibilityResponse

```java
public static RealmsError.CustomError unknownCompatibilityResponse(String p_294662_)
```

**Parameters:**

- `p_294662_` (`String`)

**Returns:** `public static RealmsError.CustomError`

### connectivityError

```java
public static RealmsError.CustomError connectivityError(RealmsHttpException p_294863_)
```

**Parameters:**

- `p_294863_` (`RealmsHttpException`)

**Returns:** `public static RealmsError.CustomError`

### retry

```java
public static RealmsError.CustomError retry(int p_295020_)
```

**Parameters:**

- `p_295020_` (`int`)

**Returns:** `public static RealmsError.CustomError`

### noPayload

```java
public static RealmsError.CustomError noPayload(int p_295243_)
```

**Parameters:**

- `p_295243_` (`int`)

**Returns:** `public static RealmsError.CustomError`

### errorCode

```java
public int errorCode()
```

**Returns:** `int`

### errorMessage

```java
public Component errorMessage()
```

**Returns:** `Component`

### logMessage

```java
public String logMessage()
```

**Returns:** `String`

### errorCode

```java
public int errorCode()
```

**Returns:** `int`

### errorMessage

```java
public Component errorMessage()
```

**Returns:** `Component`

### logMessage

```java
public String logMessage()
```

**Returns:** `String`

### errorCode

```java
public int errorCode()
```

**Returns:** `int`

### errorMessage

```java
public Component errorMessage()
```

**Returns:** `Component`

### logMessage

```java
public String logMessage()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `AuthenticationError` | record |  |
| `CustomError` | record |  |
| `ErrorWithJsonPayload` | record |  |
| `ErrorWithRawPayload` | record |  |
