# StyledFormat

**Package:** `net.minecraft.network.chat.numbers`
**Type:** class
**Implements:** `NumberFormat`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TYPE` | `NumberFormatType<StyledFormat>` |  |
| `NO_STYLE` | `StyledFormat` |  |
| `SIDEBAR_DEFAULT` | `StyledFormat` |  |
| `PLAYER_LIST_DEFAULT` | `StyledFormat` |  |

## Methods

### mapCodec

```java
public MapCodec<StyledFormat> mapCodec()
```

**Returns:** `MapCodec<StyledFormat>`

### streamCodec

```java
public StreamCodec<RegistryFriendlyByteBuf, StyledFormat> streamCodec()
```

**Returns:** `StreamCodec<RegistryFriendlyByteBuf, StyledFormat>`

### StyledFormat

```java
public StyledFormat(Style p_313874_)
```

**Parameters:**

- `p_313874_` (`Style`)

**Returns:** `public`

### format

```java
public MutableComponent format(int p_313770_)
```

**Parameters:**

- `p_313770_` (`int`)

**Returns:** `MutableComponent`

### type

```java
public NumberFormatType<StyledFormat> type()
```

**Returns:** `NumberFormatType<StyledFormat>`
