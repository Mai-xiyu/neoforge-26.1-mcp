# IKeyMappingExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Side:** 🖥️ Client

## Description

Extension interface for `KeyMapping`.

## Methods

### self

```java
private KeyMapping self()
```

**Returns:** `private KeyMapping`

### getKey

```java
InputConstants.Key getKey()
```

**Returns:** `InputConstants.Key`

### isActiveAndMatches

```java
default boolean isActiveAndMatches(InputConstants.Key keyCode)
```

**Parameters:**

- `keyCode` (`InputConstants.Key`)

**Returns:** `boolean`

### setToDefault

```java
public default void setToDefault()
```

**Returns:** `public default void`

### setKeyConflictContext

```java
void setKeyConflictContext(IKeyConflictContext keyConflictContext)
```

**Parameters:**

- `keyConflictContext` (`IKeyConflictContext`)

### getKeyConflictContext

```java
IKeyConflictContext getKeyConflictContext()
```

**Returns:** `IKeyConflictContext`

### getDefaultKeyModifier

```java
KeyModifier getDefaultKeyModifier()
```

**Returns:** `KeyModifier`

### getKeyModifier

```java
KeyModifier getKeyModifier()
```

**Returns:** `KeyModifier`

### setKeyModifierAndCode

```java
void setKeyModifierAndCode(KeyModifier keyModifier, InputConstants.Key keyCode)
```

**Parameters:**

- `keyModifier` (`KeyModifier`)
- `keyCode` (`InputConstants.Key`)

### isConflictContextAndModifierActive

```java
default boolean isConflictContextAndModifierActive()
```

**Returns:** `default boolean`

### hasKeyModifierConflict

```java
default boolean hasKeyModifierConflict(KeyMapping other)
```

**Parameters:**

- `other` (`KeyMapping`)

**Returns:** `boolean`

### getDisplayName

```java
default Component getDisplayName()
```

**Returns:** `Component`
