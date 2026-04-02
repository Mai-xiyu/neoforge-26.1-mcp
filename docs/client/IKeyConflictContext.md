# IKeyConflictContext

**Package:** `net.neoforged.neoforge.client.settings`
**Type:** interface
**Side:** 🖥️ Client

## Description

Defines the context that a `KeyMapping` is used.
Key conflicts occur when a `KeyMapping` has the same `IKeyConflictContext` and has conflicting modifiers and keyCodes.

## Methods

### isActive

```java
boolean isActive()
```

**Returns:** `boolean`

### conflicts

```java
boolean conflicts(IKeyConflictContext other)
```

**Parameters:**

- `other` (`IKeyConflictContext`)

**Returns:** `boolean`
