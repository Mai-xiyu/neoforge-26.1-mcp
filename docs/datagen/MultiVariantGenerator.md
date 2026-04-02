# MultiVariantGenerator

**Package:** `net.minecraft.data.models.blockstates`
**Type:** class
**Implements:** `BlockStateGenerator`

## Methods

### MultiVariantGenerator

```java
private MultiVariantGenerator(Block p_125251_, List<Variant> p_125252_)
```

**Parameters:**

- `p_125251_` (`Block`)
- `p_125252_` (`List<Variant>`)

**Returns:** `private`

### with

```java
public MultiVariantGenerator with(PropertyDispatch p_125272_)
```

**Parameters:**

- `p_125272_` (`PropertyDispatch`)

**Returns:** `public MultiVariantGenerator`

### IllegalStateException

```java
throw new IllegalStateException("Property " + p_339378_ + " is not defined for block " + this.block)
```

**Parameters:**

- `this.block` (`"Property " + p_339378_ + " is not defined for block " +`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Values of property " + p_339378_ + " already defined for block " + this.block)
```

**Parameters:**

- `this.block` (`"Values of property " + p_339378_ + " already defined for block " +`)

**Returns:** `throw new`

### get

```java
public JsonElement get()
```

**Returns:** `public JsonElement`

### mergeVariants

```java
private static List<Variant> mergeVariants(List<Variant> p_125278_, List<Variant> p_125279_)
```

**Parameters:**

- `p_125278_` (`List<Variant>`)
- `p_125279_` (`List<Variant>`)

**Returns:** `private static List<Variant>`

### getBlock

```java
public Block getBlock()
```

**Returns:** `Block`

### multiVariant

```java
public static MultiVariantGenerator multiVariant(Block p_125255_)
```

**Parameters:**

- `p_125255_` (`Block`)

**Returns:** `public static MultiVariantGenerator`

### multiVariant

```java
public static MultiVariantGenerator multiVariant(Block p_125257_, Variant p_125258_)
```

**Parameters:**

- `p_125257_` (`Block`)
- `p_125258_` (`Variant`)

**Returns:** `public static MultiVariantGenerator`

### multiVariant

```java
public static MultiVariantGenerator multiVariant(Block p_125260_, Variant[]... p_125261_)
```

**Parameters:**

- `p_125260_` (`Block`)
- `p_125261_` (`Variant[]...`)

**Returns:** `public static MultiVariantGenerator`
