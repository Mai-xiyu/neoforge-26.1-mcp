# StructuresBecomeConfiguredFix

**Package:** `net.minecraft.util.datafix.fixes`
**Type:** class
**Extends:** `DataFix`

## Methods

### StructuresBecomeConfiguredFix

```java
public StructuresBecomeConfiguredFix(Schema p_207679_)
```

**Parameters:**

- `p_207679_` (`Schema`)

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

### fix

```java
private Dynamic<?> fix(Dynamic<?> p_207692_)
```

**Parameters:**

- `p_207692_` (`Dynamic<?>`)

**Returns:** `private Dynamic<?>`

### updateStarts

```java
private Dynamic<?> updateStarts(Dynamic<?> p_207700_, Dynamic<?> p_207701_)
```

**Parameters:**

- `p_207700_` (`Dynamic<?>`)
- `p_207701_` (`Dynamic<?>`)

**Returns:** `private Dynamic<?>`

### updateReferences

```java
private Dynamic<?> updateReferences(Dynamic<?> p_207717_, Dynamic<?> p_207718_)
```

**Parameters:**

- `p_207717_` (`Dynamic<?>`)
- `p_207718_` (`Dynamic<?>`)

**Returns:** `private Dynamic<?>`

### guessConfiguration

```java
private Optional<String> guessConfiguration(Dynamic<?> p_207694_, StructuresBecomeConfiguredFix.Conversion p_207695_)
```

**Parameters:**

- `p_207694_` (`Dynamic<?>`)
- `p_207695_` (`StructuresBecomeConfiguredFix.Conversion`)

**Returns:** `private Optional<String>`

### Conversion

```java
public static record Conversion(Map<String, String> biomeMapping, String fallback)
```

**Parameters:**

- `biomeMapping` (`Map<String, String>`)
- `fallback` (`String`)

**Returns:** `public static record`

### trivial

```java
public static StructuresBecomeConfiguredFix.Conversion trivial(String p_207747_)
```

**Parameters:**

- `p_207747_` (`String`)

**Returns:** `public static StructuresBecomeConfiguredFix.Conversion`

### biomeMapped

```java
public static StructuresBecomeConfiguredFix.Conversion biomeMapped(Map<List<String>, String> p_207751_, String p_207752_)
```

**Parameters:**

- `p_207751_` (`Map<List<String>, String>`)
- `p_207752_` (`String`)

**Returns:** `public static StructuresBecomeConfiguredFix.Conversion`

### unpack

```java
private static Map<String, String> unpack(Map<List<String>, String> p_207749_)
```

**Parameters:**

- `p_207749_` (`Map<List<String>, String>`)

**Returns:** `private static Map<String, String>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Conversion` | record |  |
