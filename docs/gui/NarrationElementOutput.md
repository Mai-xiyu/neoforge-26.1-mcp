# NarrationElementOutput

**Package:** `net.minecraft.client.gui.narration`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### add

```java
default void add(NarratedElementType p_169147_, Component p_169148_)
```

**Parameters:**

- `p_169147_` (`NarratedElementType`)
- `p_169148_` (`Component`)

**Returns:** `default void`

### add

```java
default void add(NarratedElementType p_169144_, String p_169145_)
```

**Parameters:**

- `p_169144_` (`NarratedElementType`)
- `p_169145_` (`String`)

**Returns:** `default void`

### add

```java
default void add(NarratedElementType p_169150_, Component[]... p_169151_)
```

**Parameters:**

- `p_169150_` (`NarratedElementType`)
- `p_169151_` (`Component[]...`)

**Returns:** `default void`

### add

```java
void add(NarratedElementType p_169141_, NarrationThunk<?> p_169142_)
```

**Parameters:**

- `p_169141_` (`NarratedElementType`)
- `p_169142_` (`NarrationThunk<?>`)

### nest

```java
NarrationElementOutput nest()
```

**Returns:** `NarrationElementOutput`
