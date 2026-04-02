# NeoForgeEntityLegacyAttributesFix

**Package:** `net.neoforged.neoforge.common.data.fixes`
**Type:** class
**Extends:** `DataFix`

## Methods

### NeoForgeEntityLegacyAttributesFix

```java
public NeoForgeEntityLegacyAttributesFix(String name, Schema outputSchema, List<String> attributesToRemove)
```

**Parameters:**

- `name` (`String`)
- `outputSchema` (`Schema`)
- `attributesToRemove` (`List<String>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### makeRule

```java
protected TypeRewriteRule makeRule()
```

**Returns:** `TypeRewriteRule`

### fixItemStackTag

```java
private Typed<?> fixItemStackTag(Typed<?> typed)
```

**Parameters:**

- `typed` (`Typed<?>`)

**Returns:** `private Typed<?>`

### removeLegacyAttributes

```java
private Typed<?> removeLegacyAttributes(Typed<?> typed)
```

**Parameters:**

- `typed` (`Typed<?>`)

**Returns:** `private Typed<?>`
