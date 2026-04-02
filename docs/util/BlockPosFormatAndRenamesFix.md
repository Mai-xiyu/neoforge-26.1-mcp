# BlockPosFormatAndRenamesFix

**Package:** `net.minecraft.util.datafix.fixes`
**Type:** class
**Extends:** `DataFix`

## Methods

### BlockPosFormatAndRenamesFix

```java
public BlockPosFormatAndRenamesFix(Schema p_326146_)
```

**Parameters:**

- `p_326146_` (`Schema`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### fixFields

```java
private Typed<?> fixFields(Typed<?> p_326273_, Map<String, String> p_326439_)
```

**Parameters:**

- `p_326273_` (`Typed<?>`)
- `p_326439_` (`Map<String, String>`)

**Returns:** `private Typed<?>`

### fixMapSavedData

```java
<T> private <T> Dynamic<T> fixMapSavedData(Dynamic<T> p_326466_)
```

**Parameters:**

- `p_326466_` (`Dynamic<T>`)

**Returns:** `private <T> Dynamic<T>`

### makeRule

```java
public TypeRewriteRule makeRule()
```

**Returns:** `TypeRewriteRule`

### addEntityRules

```java
private void addEntityRules(List<TypeRewriteRule> p_326170_)
```

**Parameters:**

- `p_326170_` (`List<TypeRewriteRule>`)

**Returns:** `private void`

### addBlockEntityRules

```java
private void addBlockEntityRules(List<TypeRewriteRule> p_326031_)
```

**Parameters:**

- `p_326031_` (`List<TypeRewriteRule>`)

**Returns:** `private void`

### createEntityFixer

```java
private TypeRewriteRule createEntityFixer(TypeReference p_326126_, String p_326263_, Map<String, String> p_326382_)
```

**Parameters:**

- `p_326126_` (`TypeReference`)
- `p_326263_` (`String`)
- `p_326382_` (`Map<String, String>`)

**Returns:** `private TypeRewriteRule`
