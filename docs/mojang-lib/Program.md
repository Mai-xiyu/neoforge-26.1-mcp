# Program

**Package:** `com.mojang.blaze3d.shaders`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### Program

```java
protected Program(Program.Type p_85540_, int p_85541_, String p_85542_)
```

**Parameters:**

- `p_85540_` (`Program.Type`)
- `p_85541_` (`int`)
- `p_85542_` (`String`)

**Returns:** `protected`

### attachToShader

```java
public void attachToShader(Shader p_166611_)
```

**Parameters:**

- `p_166611_` (`Shader`)

**Returns:** `public void`

### close

```java
public void close()
```

**Returns:** `public void`

### getName

```java
public String getName()
```

**Returns:** `public String`

### compileShader

```java
public static Program compileShader(Program.Type p_166605_, String p_166606_, InputStream p_166607_, String p_166608_, GlslPreprocessor p_166609_)
```

**Parameters:**

- `p_166605_` (`Program.Type`)
- `p_166606_` (`String`)
- `p_166607_` (`InputStream`)
- `p_166608_` (`String`)
- `p_166609_` (`GlslPreprocessor`)

**Returns:** `public static Program`

### compileShaderInternal

```java
protected static int compileShaderInternal(Program.Type p_166613_, String p_166614_, InputStream p_166615_, String p_166616_, GlslPreprocessor p_166617_)
```

**Parameters:**

- `p_166613_` (`Program.Type`)
- `p_166614_` (`String`)
- `p_166615_` (`InputStream`)
- `p_166616_` (`String`)
- `p_166617_` (`GlslPreprocessor`)

**Returns:** `protected static int`

### getId

```java
protected int getId()
```

**Returns:** `protected int`

### FRAGMENT

```java
, FRAGMENT()
```

**Returns:** `,`

### Type

```java
private Type(String p_85563_, String p_85564_, int p_85565_)
```

**Parameters:**

- `p_85563_` (`String`)
- `p_85564_` (`String`)
- `p_85565_` (`int`)

**Returns:** `private`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getExtension

```java
public String getExtension()
```

**Returns:** `public String`

### getGlType

```java
int getGlType()
```

**Returns:** `int`

### getPrograms

```java
public Map<String, Program> getPrograms()
```

**Returns:** `public Map<String, Program>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | enum |  |
