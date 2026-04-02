# Attribute

**Package:** `net.minecraft.world.entity.ai.attributes`
**Type:** class
**Implements:** `net.neoforged.neoforge.common.extensions.IAttributeExtension`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<Holder<Attribute>>` |  |
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, Holder<Attribute>>` |  |
| `MERGED_RED` | `net.minecraft.network.chat.TextColor` |  |
| `MERGED_BLUE` | `net.minecraft.network.chat.TextColor` |  |
| `MERGED_GRAY` | `net.minecraft.network.chat.TextColor` |  |

## Methods

### Attribute

```java
protected Attribute(String p_22080_, double p_22081_)
```

**Parameters:**

- `p_22080_` (`String`)
- `p_22081_` (`double`)

**Returns:** `protected`

### getDefaultValue

```java
public double getDefaultValue()
```

**Returns:** `public double`

### isClientSyncable

```java
public boolean isClientSyncable()
```

**Returns:** `public boolean`

### setSyncable

```java
public Attribute setSyncable(boolean p_22085_)
```

**Parameters:**

- `p_22085_` (`boolean`)

**Returns:** `public Attribute`

### setSentiment

```java
public Attribute setSentiment(Attribute.Sentiment p_347714_)
```

**Parameters:**

- `p_347714_` (`Attribute.Sentiment`)

**Returns:** `public Attribute`

### sanitizeValue

```java
public double sanitizeValue(double p_22083_)
```

**Parameters:**

- `p_22083_` (`double`)

**Returns:** `public double`

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `public String`

### getStyle

```java
public ChatFormatting getStyle(boolean p_347715_)
```

**Parameters:**

- `p_347715_` (`boolean`)

**Returns:** `public ChatFormatting`

### getMergedStyle

```java
public net.minecraft.network.chat.TextColor getMergedStyle(boolean isPositive)
```

**Parameters:**

- `isPositive` (`boolean`)

**Returns:** `net.minecraft.network.chat.TextColor`

### getStyle

```java
public ChatFormatting getStyle(boolean p_347500_)
```

**Parameters:**

- `p_347500_` (`boolean`)

**Returns:** `public ChatFormatting`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Sentiment` | enum |  |
