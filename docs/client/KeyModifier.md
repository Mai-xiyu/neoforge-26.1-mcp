# KeyModifier

**Package:** `net.neoforged.neoforge.client.settings`
**Type:** enum
**Side:** 🖥️ Client

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MODIFIER_VALUES` | `KeyModifier[]` |  |

## Methods

### matches

```java
public boolean matches(InputConstants.Key key)
```

**Parameters:**

- `key` (`InputConstants.Key`)

**Returns:** `boolean`

### isActive

```java
public boolean isActive(IKeyConflictContext conflictContext)
```

**Parameters:**

- `conflictContext` (`IKeyConflictContext`)

**Returns:** `boolean`

### getCombinedName

```java
public Component getCombinedName(InputConstants.Key key, Supplier<Component> defaultLogic)
```

**Parameters:**

- `key` (`InputConstants.Key`)
- `defaultLogic` (`Supplier<Component>`)

**Returns:** `Component`

### codes

```java
public InputConstants.Key[] codes()
```

**Returns:** `InputConstants.Key[]`

### matches

```java
public boolean matches(InputConstants.Key key)
```

**Parameters:**

- `key` (`InputConstants.Key`)

**Returns:** `boolean`

### isActive

```java
public boolean isActive(IKeyConflictContext conflictContext)
```

**Parameters:**

- `conflictContext` (`IKeyConflictContext`)

**Returns:** `boolean`

### getCombinedName

```java
public Component getCombinedName(InputConstants.Key key, Supplier<Component> defaultLogic)
```

**Parameters:**

- `key` (`InputConstants.Key`)
- `defaultLogic` (`Supplier<Component>`)

**Returns:** `Component`

### codes

```java
public InputConstants.Key[] codes()
```

**Returns:** `InputConstants.Key[]`

### matches

```java
public boolean matches(InputConstants.Key key)
```

**Parameters:**

- `key` (`InputConstants.Key`)

**Returns:** `boolean`

### isActive

```java
public boolean isActive(IKeyConflictContext conflictContext)
```

**Parameters:**

- `conflictContext` (`IKeyConflictContext`)

**Returns:** `boolean`

### getCombinedName

```java
public Component getCombinedName(InputConstants.Key keyCode, Supplier<Component> defaultLogic)
```

**Parameters:**

- `keyCode` (`InputConstants.Key`)
- `defaultLogic` (`Supplier<Component>`)

**Returns:** `Component`

### codes

```java
public InputConstants.Key[] codes()
```

**Returns:** `InputConstants.Key[]`

### matches

```java
public boolean matches(InputConstants.Key key)
```

**Parameters:**

- `key` (`InputConstants.Key`)

**Returns:** `boolean`

### isActive

```java
public boolean isActive(IKeyConflictContext conflictContext)
```

**Parameters:**

- `conflictContext` (`IKeyConflictContext`)

**Returns:** `boolean`

### getCombinedName

```java
public Component getCombinedName(InputConstants.Key key, Supplier<Component> defaultLogic)
```

**Parameters:**

- `key` (`InputConstants.Key`)
- `defaultLogic` (`Supplier<Component>`)

**Returns:** `Component`

### codes

```java
public InputConstants.Key[] codes()
```

**Returns:** `InputConstants.Key[]`

### getActiveModifier

```java
public static KeyModifier getActiveModifier()
```

**Returns:** `KeyModifier`

### getActiveModifiers

```java
public static List<KeyModifier> getActiveModifiers()
```

**Returns:** `public static List<KeyModifier>`

### getKeyModifier

```java
public static KeyModifier getKeyModifier(InputConstants.Key key)
```

**Parameters:**

- `key` (`InputConstants.Key`)

**Returns:** `public static KeyModifier`

### isKeyCodeModifier

```java
public static boolean isKeyCodeModifier(InputConstants.Key key)
```

**Parameters:**

- `key` (`InputConstants.Key`)

**Returns:** `public static boolean`

### valueFromString

```java
public static KeyModifier valueFromString(String stringValue)
```

**Parameters:**

- `stringValue` (`String`)

**Returns:** `public static KeyModifier`

### valueOf

```java
return valueOf()
```

**Returns:** `return`

### matches

```java
public abstract boolean matches(InputConstants.Key key)
```

**Parameters:**

- `key` (`InputConstants.Key`)

**Returns:** `public abstract boolean`

### isActive

```java
public abstract boolean isActive(IKeyConflictContext conflictContext)
```

**Parameters:**

- `conflictContext` (`IKeyConflictContext`)

**Returns:** `public abstract boolean`

### getCombinedName

```java
public abstract Component getCombinedName(InputConstants.Key key, Supplier<Component> defaultLogic)
```

**Parameters:**

- `key` (`InputConstants.Key`)
- `defaultLogic` (`Supplier<Component>`)

**Returns:** `public abstract Component`

### codes

```java
Make abstract in 1.21.5
    public InputConstants.Key[] codes()
```

**Returns:** `Make abstract in 1.21.5
    public InputConstants.Key[]`
