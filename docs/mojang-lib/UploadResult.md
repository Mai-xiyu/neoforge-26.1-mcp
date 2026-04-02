# UploadResult

**Package:** `com.mojang.realmsclient.gui.screens`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `statusCode` | `int` |  |

## Methods

### UploadResult

```java
 UploadResult(int p_90136_, String p_90137_)
```

**Parameters:**

- `p_90136_` (`int`)
- `p_90137_` (`String`)

**Returns:** ``

### withStatusCode

```java
public UploadResult.Builder withStatusCode(int p_90147_)
```

**Parameters:**

- `p_90147_` (`int`)

**Returns:** `public UploadResult.Builder`

### withErrorMessage

```java
public UploadResult.Builder withErrorMessage(String p_90149_)
```

**Parameters:**

- `p_90149_` (`String`)

**Returns:** `public UploadResult.Builder`

### build

```java
public UploadResult build()
```

**Returns:** `public UploadResult`

### UploadResult

```java
return new UploadResult()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
