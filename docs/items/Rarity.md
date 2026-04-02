# Rarity

**Package:** `net.minecraft.world.item`
**Type:** enum
**Implements:** `StringRepresentable`, `net.neoforged.fml.common.asm.enumextension.IExtensibleEnum`
**Annotations:** `@net`, `@net`, `@net`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<Rarity>` |  |
| `BY_ID` | `IntFunction<Rarity>` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, Rarity>` |  |

## Methods

### EPIC

```java
, EPIC()
```

**Returns:** `,`

### Rarity

```java
private Rarity(int p_336096_, String p_335642_, ChatFormatting p_43028_)
```

**Parameters:**

- `p_336096_` (`int`)
- `p_335642_` (`String`)
- `p_43028_` (`ChatFormatting`)

**Returns:** `private`

### Rarity

```java
 Rarity(int id, String name, java.util.function.UnaryOperator<net.minecraft.network.chat.Style> styleModifier)
```

**Parameters:**

- `id` (`int`)
- `name` (`String`)
- `styleModifier` (`java.util.function.UnaryOperator<net.minecraft.network.chat.Style>`)

**Returns:** ``

### color

```java
public ChatFormatting color()
```

**Returns:** `ChatFormatting`

### getStyleModifier

```java
public java.util.function.UnaryOperator<net.minecraft.network.chat.Style> getStyleModifier()
```

**Returns:** `public java.util.function.UnaryOperator<net.minecraft.network.chat.Style>`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### getExtensionInfo

```java
public static net.neoforged.fml.common.asm.enumextension.ExtensionInfo getExtensionInfo()
```

**Returns:** `public static net.neoforged.fml.common.asm.enumextension.ExtensionInfo`
