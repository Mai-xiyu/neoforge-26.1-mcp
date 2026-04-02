# UploadInfo

**Package:** `com.mojang.realmsclient.dto`
**Type:** class
**Extends:** `ValueObject`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### UploadInfo

```java
private UploadInfo(boolean p_87693_, String p_87694_, URI p_87695_)
```

**Parameters:**

- `p_87693_` (`boolean`)
- `p_87694_` (`String`)
- `p_87695_` (`URI`)

**Returns:** `private`

### parse

```java
public static UploadInfo parse(String p_87701_)
```

**Parameters:**

- `p_87701_` (`String`)

**Returns:** `UploadInfo`

### UploadInfo

```java
return new UploadInfo()
```

**Returns:** `return new`

### assembleUri

```java
public static URI assembleUri(String p_87703_, int p_87704_)
```

**Parameters:**

- `p_87703_` (`String`)
- `p_87704_` (`int`)

**Returns:** `URI`

### selectPortOrDefault

```java
private static int selectPortOrDefault(int p_87698_, int p_87699_)
```

**Parameters:**

- `p_87698_` (`int`)
- `p_87699_` (`int`)

**Returns:** `private static int`

### ensureEndpointSchema

```java
private static String ensureEndpointSchema(String p_87706_, Matcher p_87707_)
```

**Parameters:**

- `p_87706_` (`String`)
- `p_87707_` (`Matcher`)

**Returns:** `private static String`

### createRequest

```java
public static String createRequest(String p_87710_)
```

**Parameters:**

- `p_87710_` (`String`)

**Returns:** `public static String`

### getToken

```java
public String getToken()
```

**Returns:** `String`

### getUploadEndpoint

```java
public URI getUploadEndpoint()
```

**Returns:** `public URI`

### isWorldClosed

```java
public boolean isWorldClosed()
```

**Returns:** `public boolean`
