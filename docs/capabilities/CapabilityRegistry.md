# CapabilityRegistry

**Package:** `net.neoforged.neoforge.capabilities`
**Type:** class<C>

## Description

Helper class to manage registering capabilities.
You only need this if you are creating your own type (block, entity, item...) of capabilities!


Look at the source code of `BlockCapability`, `EntityCapability`, ... for an example.

## Methods

### CapabilityRegistry

```java
public CapabilityRegistry(CapabilityConstructor<C> constructor)
```

**Parameters:**

- `constructor` (`CapabilityConstructor<C>`)

**Returns:** `public`

### create

```java
public C create(ResourceLocation name, Class<?> typeClass, Class<?> contextClass)
```

**Parameters:**

- `name` (`ResourceLocation`)
- `typeClass` (`Class<?>`)
- `contextClass` (`Class<?>`)

**Returns:** `C`

### IllegalStateException

```java
throw new IllegalStateException("Attempted to register capability " + name + " with existing type class " + ret.typeClass + " != " + typeClass)
```

**Parameters:**

- `typeClass` (`"Attempted to register capability " + name + " with existing type class " + ret.typeClass + " != " +`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Attempted to register capability " + name + " with existing context class " + ret.contextClass + " != " + contextClass)
```

**Parameters:**

- `contextClass` (`"Attempted to register capability " + name + " with existing context class " + ret.contextClass + " != " +`)

**Returns:** `throw new`

### getAll

```java
public List<C> getAll()
```

**Returns:** `List<C>`

### create

```java
C create(ResourceLocation name, Class<?> typeClass, Class<?> contextClass)
```

**Parameters:**

- `name` (`ResourceLocation`)
- `typeClass` (`Class<?>`)
- `contextClass` (`Class<?>`)

**Returns:** `C`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CapabilityConstructor` | interface |  |
