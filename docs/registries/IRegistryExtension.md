# IRegistryExtension

**Package:** `net.neoforged.neoforge.registries`
**Type:** interface<T>

## Description

An extension for `Registry`, adding some additional functionality to vanilla registries, such as
callbacks and ID limits.
@param <T> the type of registry entries

## Methods

### self

```java
private Registry<T> self()
```

**Returns:** `private Registry<T>`

### doesSync

```java
boolean doesSync()
```

**Returns:** `boolean`

### getMaxId

```java
int getMaxId()
```

**Returns:** `int`

### addCallback

```java
void addCallback(RegistryCallback<T> callback)
```

**Parameters:**

- `callback` (`RegistryCallback<T>`)

### addCallback

```java
default <C extends RegistryCallback<T>> void addCallback(Class<C> type, C callback)
```

**Parameters:**

- `type` (`Class<C>`)
- `callback` (`C`)

**Returns:** `<C extends RegistryCallback<T>> void`

### addCallback

```java
 addCallback()
```

**Returns:** ``

### addAlias

```java
void addAlias(ResourceLocation from, ResourceLocation to)
```

**Parameters:**

- `from` (`ResourceLocation`)
- `to` (`ResourceLocation`)

### resolve

```java
ResourceLocation resolve(ResourceLocation name)
```

**Parameters:**

- `name` (`ResourceLocation`)

**Returns:** `ResourceLocation`

### resolve

```java
ResourceKey<T> resolve(ResourceKey<T> key)
```

**Parameters:**

- `key` (`ResourceKey<T>`)

**Returns:** `ResourceKey<T>`

### getId

```java
int getId(ResourceKey<T> key)
```

**Parameters:**

- `key` (`ResourceKey<T>`)

**Returns:** `int`

### getId

```java
int getId(ResourceLocation name)
```

**Parameters:**

- `name` (`ResourceLocation`)

**Returns:** `int`

### containsValue

```java
boolean containsValue(T value)
```

**Parameters:**

- `value` (`T`)

**Returns:** `boolean`

### getData

```java
<A> A getData(DataMapType<T, A> type, ResourceKey<T> key)
```

**Parameters:**

- `type` (`DataMapType<T, A>`)
- `key` (`ResourceKey<T>`)

**Returns:** `A`

### getDataMap

```java
<A> Map<ResourceKey<T>, A> getDataMap(DataMapType<T, A> type)
```

**Parameters:**

- `type` (`DataMapType<T, A>`)

**Returns:** `Map<ResourceKey<T>, A>`

### getKeyOrNull

```java
default ResourceLocation getKeyOrNull(T element)
```

**Parameters:**

- `element` (`T`)

**Returns:** `ResourceLocation`
