# StatsCounterFix

**Package:** `net.minecraft.util.datafix.fixes`
**Type:** class
**Extends:** `DataFix`

## Methods

### StatsCounterFix

```java
public StatsCounterFix(Schema p_16939_, boolean p_16940_)
```

**Parameters:**

- `p_16939_` (`Schema`)
- `p_16940_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### makeRule

```java
public TypeRewriteRule makeRule()
```

**Returns:** `TypeRewriteRule`

### makeStatFixer

```java
private TypeRewriteRule makeStatFixer()
```

**Returns:** `private TypeRewriteRule`

### makeObjectiveFixer

```java
private TypeRewriteRule makeObjectiveFixer()
```

**Returns:** `private TypeRewriteRule`

### upgradeBlock

```java
private static String upgradeBlock(String p_16951_)
```

**Parameters:**

- `p_16951_` (`String`)

**Returns:** `private static String`

### StatType

```java
static record StatType(String type, String typeKey)
```

**Parameters:**

- `type` (`String`)
- `typeKey` (`String`)

**Returns:** `static record`
