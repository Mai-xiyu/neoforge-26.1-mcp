# GlyphProviderDefinition

**Package:** `net.minecraft.client.gui.font.providers`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<GlyphProviderDefinition.Conditional>` |  |

## Methods

### type

```java
GlyphProviderType type()
```

**Returns:** `GlyphProviderType`

### unpack

```java
Either<GlyphProviderDefinition.Loader, GlyphProviderDefinition.Reference> unpack()
```

**Returns:** `Either<GlyphProviderDefinition.Loader, GlyphProviderDefinition.Reference>`

### Conditional

```java
public static record Conditional(GlyphProviderDefinition definition, FontOption.Filter filter)
```

**Parameters:**

- `definition` (`GlyphProviderDefinition`)
- `filter` (`FontOption.Filter`)

**Returns:** `record`

### load

```java
GlyphProvider load(ResourceManager p_286639_)
```

**Parameters:**

- `p_286639_` (`ResourceManager`)

**Returns:** `GlyphProvider`

### Reference

```java
public static record Reference(ResourceLocation id)
```

**Parameters:**

- `id` (`ResourceLocation`)

**Returns:** `record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Conditional` | record |  |
| `Loader` | interface |  |
| `Reference` | record |  |
