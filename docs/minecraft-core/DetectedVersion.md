# DetectedVersion

**Package:** `net.minecraft`
**Type:** class
**Implements:** `WorldVersion`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BUILT_IN` | `WorldVersion` |  |

## Methods

### DetectedVersion

```java
private DetectedVersion()
```

**Returns:** `private`

### DetectedVersion

```java
private DetectedVersion(JsonObject p_132489_)
```

**Parameters:**

- `p_132489_` (`JsonObject`)

**Returns:** `private`

### tryDetectVersion

```java
public static WorldVersion tryDetectVersion()
```

**Returns:** `public static WorldVersion`

### IllegalStateException

```java
throw new IllegalStateException("Game version information is corrupt")
```

**Parameters:**

- `corrupt"` (`"Game version information is`)

**Returns:** `throw new`

### getId

```java
public String getId()
```

**Returns:** `String`

### getName

```java
public String getName()
```

**Returns:** `String`

### getDataVersion

```java
public DataVersion getDataVersion()
```

**Returns:** `DataVersion`

### getProtocolVersion

```java
public int getProtocolVersion()
```

**Returns:** `int`

### getPackVersion

```java
public int getPackVersion(PackType p_265454_)
```

**Parameters:**

- `p_265454_` (`PackType`)

**Returns:** `int`

### getBuildTime

```java
public Date getBuildTime()
```

**Returns:** `Date`

### isStable

```java
public boolean isStable()
```

**Returns:** `boolean`
