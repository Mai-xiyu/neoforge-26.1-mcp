# HoverEvent

**Package:** `net.minecraft.network.chat`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<HoverEvent>` |  |
| `SHOW_TEXT` | `HoverEvent.Action<Component>` |  |
| `SHOW_ITEM` | `HoverEvent.Action<HoverEvent.ItemStackInfo>` |  |
| `SHOW_ENTITY` | `HoverEvent.Action<HoverEvent.EntityTooltipInfo>` |  |
| `UNSAFE_CODEC` | `Codec<HoverEvent.Action<?>>` |  |
| `CODEC` | `Codec<HoverEvent.Action<?>>` |  |

## Methods

### HoverEvent

```java
public <T> HoverEvent(HoverEvent.Action<T> p_130818_, T p_130819_)
```

**Parameters:**

- `p_130818_` (`HoverEvent.Action<T>`)
- `p_130819_` (`T`)

**Returns:** `public <T>`

### HoverEvent

```java
private HoverEvent(HoverEvent.TypedHoverEvent<?> p_304734_)
```

**Parameters:**

- `p_304734_` (`HoverEvent.TypedHoverEvent<?>`)

**Returns:** `private`

### getAction

```java
public HoverEvent.Action<?> getAction()
```

**Returns:** `public HoverEvent.Action<?>`

### getValue

```java
public <T> T getValue(HoverEvent.Action<T> p_130824_)
```

**Parameters:**

- `p_130824_` (`HoverEvent.Action<T>`)

**Returns:** `T`

### equals

```java
public boolean equals(Object p_130828_)
```

**Parameters:**

- `p_130828_` (`Object`)

**Returns:** `boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### Action

```java
public Action(String p_130842_, boolean p_130843_, Codec<T> p_304723_, HoverEvent.LegacyConverter<T> p_331991_)
```

**Parameters:**

- `p_130842_` (`String`)
- `p_130843_` (`boolean`)
- `p_304723_` (`Codec<T>`)
- `p_331991_` (`HoverEvent.LegacyConverter<T>`)

**Returns:** `public`

### decode

```java
public <D> DataResult<Pair<HoverEvent.TypedHoverEvent<T>, D>> decode(DynamicOps<D> p_331755_, D p_331509_)
```

**Parameters:**

- `p_331755_` (`DynamicOps<D>`)
- `p_331509_` (`D`)

**Returns:** `DataResult<Pair<HoverEvent.TypedHoverEvent<T>, D>>`

### encode

```java
<D> public <D> DataResult<D> encode(HoverEvent.TypedHoverEvent<T> p_330570_, DynamicOps<D> p_331345_, D p_331702_)
```

**Parameters:**

- `p_330570_` (`HoverEvent.TypedHoverEvent<T>`)
- `p_331345_` (`DynamicOps<D>`)
- `p_331702_` (`D`)

**Returns:** `public <D> DataResult<D>`

### isAllowedFromServer

```java
public boolean isAllowedFromServer()
```

**Returns:** `public boolean`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### cast

```java
T cast(Object p_130865_)
```

**Parameters:**

- `p_130865_` (`Object`)

**Returns:** `T`

### toString

```java
public String toString()
```

**Returns:** `String`

### filterForSerialization

```java
private static DataResult<HoverEvent.Action<?>> filterForSerialization(HoverEvent.Action<?> p_304784_)
```

**Parameters:**

- `p_304784_` (`HoverEvent.Action<?>`)

**Returns:** `private static DataResult<HoverEvent.Action<?>>`

### EntityTooltipInfo

```java
public EntityTooltipInfo(EntityType<?> p_130876_, UUID p_130877_, Component p_130878_)
```

**Parameters:**

- `p_130876_` (`EntityType<?>`)
- `p_130877_` (`UUID`)
- `p_130878_` (`Component`)

**Returns:** `public`

### EntityTooltipInfo

```java
public EntityTooltipInfo(EntityType<?> p_304581_, UUID p_304712_, Optional<Component> p_304973_)
```

**Parameters:**

- `p_304581_` (`EntityType<?>`)
- `p_304712_` (`UUID`)
- `p_304973_` (`Optional<Component>`)

**Returns:** `public`

### legacyCreate

```java
public static DataResult<HoverEvent.EntityTooltipInfo> legacyCreate(Component p_304689_, RegistryOps<?> p_330431_)
```

**Parameters:**

- `p_304689_` (`Component`)
- `p_330431_` (`RegistryOps<?>`)

**Returns:** `public static DataResult<HoverEvent.EntityTooltipInfo>`

### getTooltipLines

```java
public List<Component> getTooltipLines()
```

**Returns:** `public List<Component>`

### equals

```java
public boolean equals(Object p_130886_)
```

**Parameters:**

- `p_130886_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### ItemStackInfo

```java
 ItemStackInfo(Holder<Item> p_330519_, int p_130894_, DataComponentPatch p_331646_)
```

**Parameters:**

- `p_330519_` (`Holder<Item>`)
- `p_130894_` (`int`)
- `p_331646_` (`DataComponentPatch`)

**Returns:** ``

### ItemStackInfo

```java
public ItemStackInfo(ItemStack p_130897_)
```

**Parameters:**

- `p_130897_` (`ItemStack`)

**Returns:** `public`

### equals

```java
public boolean equals(Object p_130911_)
```

**Parameters:**

- `p_130911_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### getItemStack

```java
public ItemStack getItemStack()
```

**Returns:** `public ItemStack`

### legacyCreate

```java
private static DataResult<HoverEvent.ItemStackInfo> legacyCreate(Component p_304732_, RegistryOps<?> p_331763_)
```

**Parameters:**

- `p_304732_` (`Component`)
- `p_331763_` (`RegistryOps<?>`)

**Returns:** `private static DataResult<HoverEvent.ItemStackInfo>`

### parse

```java
DataResult<T> parse(Component p_332047_, RegistryOps<?> p_331431_)
```

**Parameters:**

- `p_332047_` (`Component`)
- `p_331431_` (`RegistryOps<?>`)

**Returns:** `DataResult<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Action` | class |  |
| `EntityTooltipInfo` | class |  |
| `ItemStackInfo` | class |  |
| `LegacyConverter` | interface |  |
