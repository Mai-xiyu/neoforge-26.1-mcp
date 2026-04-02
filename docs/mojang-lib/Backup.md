# Backup

**Package:** `com.mojang.realmsclient.dto`
**Type:** class
**Extends:** `ValueObject`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `backupId` | `String` |  |
| `lastModifiedDate` | `Date` |  |
| `size` | `long` |  |
| `metadata` | `Map<String, String>` |  |
| `changeList` | `Map<String, String>` |  |

## Methods

### parse

```java
public static Backup parse(JsonElement p_87400_)
```

**Parameters:**

- `p_87400_` (`JsonElement`)

**Returns:** `public static Backup`

### isUploadedVersion

```java
public boolean isUploadedVersion()
```

**Returns:** `public boolean`

### setUploadedVersion

```java
public void setUploadedVersion(boolean p_87404_)
```

**Parameters:**

- `p_87404_` (`boolean`)

**Returns:** `public void`
