# VanillaServerListeners

**Package:** `net.neoforged.neoforge.resource`
**Type:** class

## Description

Keys for vanilla `PreparableReloadListener reload listeners`, used to specify dependency ordering in the `AddServerReloadListenersEvent`.



Due to the volume of vanilla listeners, these keys are automatically generated based on the class name.
@see `VanillaClientListeners` for vanilla client listener names.
@see `NeoForgeReloadListeners` for Neo-added listener names.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `RECIPES` | `Identifier` |  |
| `FUNCTIONS` | `Identifier` |  |
| `ADVANCEMENTS` | `Identifier` |  |

## Methods

### key

```java
private static Identifier key(Class<? extends PreparableReloadListener> cls)
```

**Parameters:**

- `cls` (`Class<? extends PreparableReloadListener>`)

**Returns:** `private static Identifier`

### UnsupportedOperationException

```java
Prevent duplicate registration, in case we accidentally use the same class in two different fields.
            throw new UnsupportedOperationException("Attempted to create two keys for the same class")
```

**Parameters:**

- `class"` (`"Attempted to create two keys for the same`)

**Returns:** `Prevent duplicate registration, in case we accidentally use the same class in two different fields.
            throw new`

### getNameForClass

```java
.Internal
    public static Identifier getNameForClass(Class<? extends PreparableReloadListener> cls)
```

**Parameters:**

- `cls` (`Class<? extends PreparableReloadListener>`)

**Returns:** `.Internal
    public static Identifier`
