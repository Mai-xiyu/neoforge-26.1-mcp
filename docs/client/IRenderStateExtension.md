# IRenderStateExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Side:** 🖥️ Client

## Description

Extension class for render state objects. Implemented by `BaseRenderState` for
simple class extension.

## Methods

### getRenderData

```java
<T> T getRenderData(ContextKey<T> key)
```

**Parameters:**

- `key` (`ContextKey<T>`)

**Returns:** `T`

### setRenderData

```java
<T> void setRenderData(ContextKey<T> key, T data)
```

**Parameters:**

- `key` (`ContextKey<T>`)
- `data` (`T`)

### getRenderDataOrThrow

```java
default <T> T getRenderDataOrThrow(ContextKey<T> key)
```

**Parameters:**

- `key` (`ContextKey<T>`)

**Returns:** `T`

### IllegalStateException

```java
throw new IllegalStateException("No value associated for key " + key)
```

**Parameters:**

- `key` (`"No value associated for key " +`)

**Returns:** `throw new`

### getRenderDataOrDefault

```java
default <T> T getRenderDataOrDefault(ContextKey<T> key, T defaultVal)
```

**Parameters:**

- `key` (`ContextKey<T>`)
- `defaultVal` (`T`)

**Returns:** `T`
