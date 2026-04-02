# FontOption

**Package:** `net.minecraft.client.gui.font`
**Type:** enum
**Implements:** `StringRepresentable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<FontOption>` |  |
| `CODEC` | `Codec<FontOption.Filter>` |  |
| `ALWAYS_PASS` | `FontOption.Filter` |  |

## Methods

### JAPANESE_VARIANTS

```java
, JAPANESE_VARIANTS()
```

**Returns:** `,`

### FontOption

```java
private FontOption(String p_326260_)
```

**Parameters:**

- `p_326260_` (`String`)

**Returns:** `private`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### Filter

```java
public Filter(Map<FontOption, Boolean> p_325963_)
```

**Parameters:**

- `p_325963_` (`Map<FontOption, Boolean>`)

**Returns:** `public`

### apply

```java
public boolean apply(Set<FontOption> p_326085_)
```

**Parameters:**

- `p_326085_` (`Set<FontOption>`)

**Returns:** `public boolean`

### merge

```java
public FontOption.Filter merge(FontOption.Filter p_326092_)
```

**Parameters:**

- `p_326092_` (`FontOption.Filter`)

**Returns:** `public FontOption.Filter`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Filter` | class |  |
