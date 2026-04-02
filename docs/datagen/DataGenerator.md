# DataGenerator

**Package:** `net.minecraft.data`
**Type:** class

## Methods

### DataGenerator

```java
public DataGenerator(Path p_251724_, WorldVersion p_250554_, boolean p_251323_)
```

**Parameters:**

- `p_251724_` (`Path`)
- `p_250554_` (`WorldVersion`)
- `p_251323_` (`boolean`)

**Returns:** `public`

### run

```java
public void run()
```

**Returns:** `public void`

### getVanillaPack

```java
public DataGenerator.PackGenerator getVanillaPack(boolean p_254422_)
```

**Parameters:**

- `p_254422_` (`boolean`)

**Returns:** `public DataGenerator.PackGenerator`

### getBuiltinDatapack

```java
public DataGenerator.PackGenerator getBuiltinDatapack(boolean p_253826_, String p_254134_)
```

**Parameters:**

- `p_253826_` (`boolean`)
- `p_254134_` (`String`)

**Returns:** `public DataGenerator.PackGenerator`

### getBuiltinDatapack

```java
public PackGenerator getBuiltinDatapack(boolean run, String namespace, String path)
```

**Parameters:**

- `run` (`boolean`)
- `namespace` (`String`)
- `path` (`String`)

**Returns:** `public PackGenerator`

### getProvidersView

```java
public Map<String, DataProvider> getProvidersView()
```

**Returns:** `public Map<String, DataProvider>`

### getPackOutput

```java
public PackOutput getPackOutput()
```

**Returns:** `public PackOutput`

### getPackOutput

```java
public PackOutput getPackOutput(String path)
```

**Parameters:**

- `path` (`String`)

**Returns:** `public PackOutput`

### getPackGenerator

```java
public PackGenerator getPackGenerator(boolean run, String providerPrefix, String path)
```

**Parameters:**

- `run` (`boolean`)
- `providerPrefix` (`String`)
- `path` (`String`)

**Returns:** `public PackGenerator`

### addProvider

```java
<T extends DataProvider> public <T extends DataProvider> T addProvider(boolean run, DataProvider.Factory<T> factory)
```

**Parameters:**

- `run` (`boolean`)
- `factory` (`DataProvider.Factory<T>`)

**Returns:** `public <T extends DataProvider> T`

### addProvider

```java
<T extends DataProvider> public <T extends DataProvider> T addProvider(boolean run, T provider)
```

**Parameters:**

- `run` (`boolean`)
- `provider` (`T`)

**Returns:** `public <T extends DataProvider> T`

### IllegalStateException

```java
throw new IllegalStateException("Duplicate provider: " + id)
```

**Parameters:**

- `id` (`"Duplicate provider: " +`)

**Returns:** `throw new`

### merge

```java
public void merge(DataGenerator other)
```

**Parameters:**

- `other` (`DataGenerator`)

**Returns:** `public void`

### IllegalStateException

```java
throw new IllegalStateException("Duplicate provider: " + id)
```

**Parameters:**

- `id` (`"Duplicate provider: " +`)

**Returns:** `throw new`

### PackGenerator

```java
 PackGenerator(boolean p_253884_, String p_254544_, PackOutput p_254363_)
```

**Parameters:**

- `p_253884_` (`boolean`)
- `p_254544_` (`String`)
- `p_254363_` (`PackOutput`)

**Returns:** ``

### addProvider

```java
<T extends DataProvider> public <T extends DataProvider> T addProvider(DataProvider.Factory<T> p_254382_)
```

**Parameters:**

- `p_254382_` (`DataProvider.Factory<T>`)

**Returns:** `public <T extends DataProvider> T`

### IllegalStateException

```java
throw new IllegalStateException("Duplicate provider: " + s)
```

**Parameters:**

- `s` (`"Duplicate provider: " +`)

**Returns:** `throw new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `PackGenerator` | class |  |
