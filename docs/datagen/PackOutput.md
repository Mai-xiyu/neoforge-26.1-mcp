# PackOutput

**Package:** `net.minecraft.data`
**Type:** class

## Methods

### PackOutput

```java
public PackOutput(Path p_252039_)
```

**Parameters:**

- `p_252039_` (`Path`)

**Returns:** `public`

### getOutputFolder

```java
public Path getOutputFolder()
```

**Returns:** `public Path`

### getOutputFolder

```java
public Path getOutputFolder(PackOutput.Target p_251669_)
```

**Parameters:**

- `p_251669_` (`PackOutput.Target`)

**Returns:** `public Path`

### createPathProvider

```java
public PackOutput.PathProvider createPathProvider(PackOutput.Target p_249479_, String p_251050_)
```

**Parameters:**

- `p_249479_` (`PackOutput.Target`)
- `p_251050_` (`String`)

**Returns:** `public PackOutput.PathProvider`

### createRegistryElementsPathProvider

```java
public PackOutput.PathProvider createRegistryElementsPathProvider(ResourceKey<? extends Registry<?>> p_350282_)
```

**Parameters:**

- `p_350282_` (`ResourceKey<? extends Registry<?>>`)

**Returns:** `public PackOutput.PathProvider`

### createRegistryTagsPathProvider

```java
public PackOutput.PathProvider createRegistryTagsPathProvider(ResourceKey<? extends Registry<?>> p_350766_)
```

**Parameters:**

- `p_350766_` (`ResourceKey<? extends Registry<?>>`)

**Returns:** `public PackOutput.PathProvider`

### PathProvider

```java
 PathProvider(PackOutput p_249025_, PackOutput.Target p_251200_, String p_251982_)
```

**Parameters:**

- `p_249025_` (`PackOutput`)
- `p_251200_` (`PackOutput.Target`)
- `p_251982_` (`String`)

**Returns:** ``

### file

```java
public Path file(ResourceLocation p_250940_, String p_251208_)
```

**Parameters:**

- `p_250940_` (`ResourceLocation`)
- `p_251208_` (`String`)

**Returns:** `public Path`

### json

```java
public Path json(ResourceLocation p_251634_)
```

**Parameters:**

- `p_251634_` (`ResourceLocation`)

**Returns:** `public Path`

### REPORTS

```java
, REPORTS()
```

**Returns:** `,`

### Target

```java
private Target(String p_251326_)
```

**Parameters:**

- `p_251326_` (`String`)

**Returns:** `private`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `PathProvider` | class |  |
| `Target` | enum |  |
