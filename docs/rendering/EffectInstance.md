# EffectInstance

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Implements:** `Effect`, `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### EffectInstance

```java
public EffectInstance(ResourceProvider p_331011_, String p_108942_)
```

**Parameters:**

- `p_331011_` (`ResourceProvider`)
- `p_108942_` (`String`)

**Returns:** `public`

### getOrCreate

```java
public static EffectProgram getOrCreate(ResourceProvider p_330579_, Program.Type p_172568_, String p_172569_)
```

**Parameters:**

- `p_330579_` (`ResourceProvider`)
- `p_172568_` (`Program.Type`)
- `p_172569_` (`String`)

**Returns:** `public static EffectProgram`

### InvalidClassException

```java
throw new InvalidClassException("Program is not of type EffectProgram")
```

**Parameters:**

- `EffectProgram"` (`"Program is not of type`)

**Returns:** `throw new`

### parseBlendNode

```java
public static BlendMode parseBlendNode(JsonObject p_108951_)
```

**Parameters:**

- `p_108951_` (`JsonObject`)

**Returns:** `public static BlendMode`

### BlendMode

```java
return new BlendMode()
```

**Returns:** `return new`

### BlendMode

```java
return new BlendMode()
```

**Returns:** `return new`

### close

```java
public void close()
```

### clear

```java
public void clear()
```

**Returns:** `public void`

### apply

```java
public void apply()
```

**Returns:** `public void`

### markDirty

```java
public void markDirty()
```

### getUniform

```java
public Uniform getUniform(String p_108953_)
```

**Parameters:**

- `p_108953_` (`String`)

**Returns:** `Uniform`

### safeGetUniform

```java
public AbstractUniform safeGetUniform(String p_108961_)
```

**Parameters:**

- `p_108961_` (`String`)

**Returns:** `public AbstractUniform`

### updateLocations

```java
private void updateLocations()
```

**Returns:** `private void`

### parseSamplerNode

```java
private void parseSamplerNode(JsonElement p_108949_)
```

**Parameters:**

- `p_108949_` (`JsonElement`)

**Returns:** `private void`

### setSampler

```java
public void setSampler(String p_108955_, IntSupplier p_108956_)
```

**Parameters:**

- `p_108955_` (`String`)
- `p_108956_` (`IntSupplier`)

**Returns:** `public void`

### parseUniformNode

```java
private void parseUniformNode(JsonElement p_108959_)
```

**Parameters:**

- `p_108959_` (`JsonElement`)

**Returns:** `private void`

### getVertexProgram

```java
public Program getVertexProgram()
```

**Returns:** `Program`

### getFragmentProgram

```java
public Program getFragmentProgram()
```

**Returns:** `Program`

### attachToProgram

```java
public void attachToProgram()
```

### getName

```java
public String getName()
```

**Returns:** `public String`

### getId

```java
public int getId()
```

**Returns:** `int`
