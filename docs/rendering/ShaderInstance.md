# ShaderInstance

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Implements:** `Shader`, `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SHADER_PATH` | `String` |  |

## Methods

### ShaderInstance ⚠️ *Deprecated*

```java
Use the ResourceLocation variant below
    public ShaderInstance(ResourceProvider p_173336_, String p_173337_, VertexFormat p_173338_)
```

**Parameters:**

- `p_173336_` (`ResourceProvider`)
- `p_173337_` (`String`)
- `p_173338_` (`VertexFormat`)

**Returns:** `Use the ResourceLocation variant below
    public`

### ShaderInstance

```java
public ShaderInstance(ResourceProvider p_173336_, ResourceLocation shaderLocation, VertexFormat p_173338_)
```

**Parameters:**

- `p_173336_` (`ResourceProvider`)
- `shaderLocation` (`ResourceLocation`)
- `p_173338_` (`VertexFormat`)

**Returns:** `public`

### getOrCreate

```java
private static Program getOrCreate(ResourceProvider p_173341_, Program.Type p_173342_, String p_173343_)
```

**Parameters:**

- `p_173341_` (`ResourceProvider`)
- `p_173342_` (`Program.Type`)
- `p_173343_` (`String`)

**Returns:** `private static Program`

### GlslPreprocessor

```java
, new GlslPreprocessor()
```

**Returns:** `, new`

### applyImport

```java
public String applyImport(boolean p_173374_, String p_173375_)
```

**Parameters:**

- `p_173374_` (`boolean`)
- `p_173375_` (`String`)

**Returns:** `String`

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
public Uniform getUniform(String p_173349_)
```

**Parameters:**

- `p_173349_` (`String`)

**Returns:** `Uniform`

### safeGetUniform

```java
public AbstractUniform safeGetUniform(String p_173357_)
```

**Parameters:**

- `p_173357_` (`String`)

**Returns:** `public AbstractUniform`

### updateLocations

```java
private void updateLocations()
```

**Returns:** `private void`

### parseSamplerNode

```java
private void parseSamplerNode(JsonElement p_173345_)
```

**Parameters:**

- `p_173345_` (`JsonElement`)

**Returns:** `private void`

### setSampler

```java
public void setSampler(String p_173351_, Object p_173352_)
```

**Parameters:**

- `p_173351_` (`String`)
- `p_173352_` (`Object`)

**Returns:** `public void`

### parseUniformNode

```java
private void parseUniformNode(JsonElement p_173355_)
```

**Parameters:**

- `p_173355_` (`JsonElement`)

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

### getVertexFormat

```java
public VertexFormat getVertexFormat()
```

**Returns:** `public VertexFormat`

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

### setDefaultUniforms

```java
public void setDefaultUniforms(VertexFormat.Mode p_350497_, Matrix4f p_351053_, Matrix4f p_350556_, Window p_350876_)
```

**Parameters:**

- `p_350497_` (`VertexFormat.Mode`)
- `p_351053_` (`Matrix4f`)
- `p_350556_` (`Matrix4f`)
- `p_350876_` (`Window`)

**Returns:** `public void`
