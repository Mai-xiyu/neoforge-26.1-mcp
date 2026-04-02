# KeyMappingLookup

**Package:** `net.neoforged.neoforge.client.settings`
**Type:** class
**Side:** 🖥️ Client

## Methods

### getAll

```java
public List<KeyMapping> getAll(InputConstants.Key keyCode)
```

**Parameters:**

- `keyCode` (`InputConstants.Key`)

**Returns:** `List<KeyMapping>`

### getAll

```java
public List<KeyMapping> getAll(InputConstants.Key keyCode, boolean releasing)
```

**Parameters:**

- `keyCode` (`InputConstants.Key`)
- `releasing` (`boolean`)

**Returns:** `List<KeyMapping>`

### findKeybinds

```java
private List<KeyMapping> findKeybinds(InputConstants.Key keyCode, KeyModifier modifier)
```

**Parameters:**

- `keyCode` (`InputConstants.Key`)
- `modifier` (`KeyModifier`)

**Returns:** `private List<KeyMapping>`

### put

```java
public void put(InputConstants.Key keyCode, KeyMapping keyBinding)
```

**Parameters:**

- `keyCode` (`InputConstants.Key`)
- `keyBinding` (`KeyMapping`)

**Returns:** `public void`

### remove

```java
public void remove(KeyMapping keyBinding)
```

**Parameters:**

- `keyBinding` (`KeyMapping`)

**Returns:** `public void`

### clear

```java
public void clear()
```

**Returns:** `public void`
