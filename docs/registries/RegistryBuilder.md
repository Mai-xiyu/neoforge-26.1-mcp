# RegistryBuilder

**Package:** `net.neoforged.neoforge.registries`
**Type:** class<T>

## Methods

### RegistryBuilder

```java
public RegistryBuilder(ResourceKey<? extends Registry<T>> registryKey)
```

**Parameters:**

- `registryKey` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `public`

### defaultKey

```java
public RegistryBuilder<T> defaultKey(ResourceLocation key)
```

**Parameters:**

- `key` (`ResourceLocation`)

**Returns:** `public RegistryBuilder<T>`

### defaultKey

```java
public RegistryBuilder<T> defaultKey(ResourceKey<T> key)
```

**Parameters:**

- `key` (`ResourceKey<T>`)

**Returns:** `public RegistryBuilder<T>`

### withIntrusiveHolders

```java
public RegistryBuilder<T> withIntrusiveHolders()
```

**Returns:** `RegistryBuilder<T>`

### callback

```java
public RegistryBuilder<T> callback(RegistryCallback<T> callback)
```

**Parameters:**

- `callback` (`RegistryCallback<T>`)

**Returns:** `public RegistryBuilder<T>`

### onAdd

```java
public RegistryBuilder<T> onAdd(AddCallback<T> callback)
```

**Parameters:**

- `callback` (`AddCallback<T>`)

**Returns:** `public RegistryBuilder<T>`

### onBake

```java
public RegistryBuilder<T> onBake(BakeCallback<T> callback)
```

**Parameters:**

- `callback` (`BakeCallback<T>`)

**Returns:** `public RegistryBuilder<T>`

### onClear

```java
public RegistryBuilder<T> onClear(ClearCallback<T> callback)
```

**Parameters:**

- `callback` (`ClearCallback<T>`)

**Returns:** `public RegistryBuilder<T>`

### maxId

```java
public RegistryBuilder<T> maxId(int maxId)
```

**Parameters:**

- `maxId` (`int`)

**Returns:** `RegistryBuilder<T>`

### IllegalArgumentException

```java
throw new IllegalArgumentException("maxId must be greater than or equal to zero")
```

**Parameters:**

- `zero"` (`"maxId must be greater than or equal to`)

**Returns:** `throw new`

### sync

```java
public RegistryBuilder<T> sync(boolean sync)
```

**Parameters:**

- `sync` (`boolean`)

**Returns:** `RegistryBuilder<T>`

### disableRegistrationCheck

```java
public RegistryBuilder<T> disableRegistrationCheck()
```

**Returns:** `RegistryBuilder<T>`

### create

```java
public Registry<T> create()
```

**Returns:** `Registry<T>`
