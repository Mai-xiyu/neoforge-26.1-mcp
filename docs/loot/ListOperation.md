# ListOperation

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** interface

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `ListOperation.Append` |  |
| `MAP_CODEC` | `MapCodec<ListOperation.Append>` |  |
| `MAP_CODEC` | `MapCodec<ListOperation.Insert>` |  |
| `INSTANCE` | `ListOperation.ReplaceAll` |  |
| `MAP_CODEC` | `MapCodec<ListOperation.ReplaceAll>` |  |
| `MAP_CODEC` | `MapCodec<ListOperation.ReplaceSection>` |  |

## Methods

### codec

```java
static MapCodec<ListOperation> codec(int p_336009_)
```

**Parameters:**

- `p_336009_` (`int`)

**Returns:** `static MapCodec<ListOperation>`

### mode

```java
ListOperation.Type mode()
```

**Returns:** `ListOperation.Type`

### apply

```java
<T> default <T> List<T> apply(List<T> p_341145_, List<T> p_341340_)
```

**Parameters:**

- `p_341145_` (`List<T>`)
- `p_341340_` (`List<T>`)

**Returns:** `default <T> List<T>`

### apply

```java
<T> <T> List<T> apply(List<T> p_333909_, List<T> p_333988_, int p_333885_)
```

**Parameters:**

- `p_333909_` (`List<T>`)
- `p_333988_` (`List<T>`)
- `p_333885_` (`int`)

**Returns:** `<T> List<T>`

### Append

```java
private Append()
```

**Returns:** `private`

### mode

```java
public ListOperation.Type mode()
```

**Returns:** `ListOperation.Type`

### apply

```java
public <T> List<T> apply(List<T> p_333898_, List<T> p_333849_, int p_333915_)
```

**Parameters:**

- `p_333898_` (`List<T>`)
- `p_333849_` (`List<T>`)
- `p_333915_` (`int`)

**Returns:** `List<T>`

### mode

```java
public ListOperation.Type mode()
```

**Returns:** `ListOperation.Type`

### apply

```java
public <T> List<T> apply(List<T> p_333952_, List<T> p_333782_, int p_333792_)
```

**Parameters:**

- `p_333952_` (`List<T>`)
- `p_333782_` (`List<T>`)
- `p_333792_` (`int`)

**Returns:** `List<T>`

### ReplaceAll

```java
private ReplaceAll()
```

**Returns:** `private`

### mode

```java
public ListOperation.Type mode()
```

**Returns:** `ListOperation.Type`

### apply

```java
public <T> List<T> apply(List<T> p_333855_, List<T> p_333756_, int p_333945_)
```

**Parameters:**

- `p_333855_` (`List<T>`)
- `p_333756_` (`List<T>`)
- `p_333945_` (`int`)

**Returns:** `List<T>`

### ReplaceSection

```java
public ReplaceSection(int p_333961_)
```

**Parameters:**

- `p_333961_` (`int`)

**Returns:** `public`

### mode

```java
public ListOperation.Type mode()
```

**Returns:** `ListOperation.Type`

### apply

```java
public <T> List<T> apply(List<T> p_333868_, List<T> p_334045_, int p_334033_)
```

**Parameters:**

- `p_333868_` (`List<T>`)
- `p_334045_` (`List<T>`)
- `p_334033_` (`int`)

**Returns:** `List<T>`

### codec

```java
<T> public static <T> Codec<ListOperation.StandAlone<T>> codec(Codec<T> p_341683_, int p_341655_)
```

**Parameters:**

- `p_341683_` (`Codec<T>`)
- `p_341655_` (`int`)

**Returns:** `public static <T> Codec<ListOperation.StandAlone<T>>`

### apply

```java
public List<T> apply(List<T> p_341623_)
```

**Parameters:**

- `p_341623_` (`List<T>`)

**Returns:** `public List<T>`

### APPEND

```java
, APPEND()
```

**Returns:** `,`

### Type

```java
private Type(String p_333913_, MapCodec<? extends ListOperation> p_333972_)
```

**Parameters:**

- `p_333913_` (`String`)
- `p_333972_` (`MapCodec<? extends ListOperation>`)

**Returns:** `private`

### mapCodec

```java
public MapCodec<? extends ListOperation> mapCodec()
```

**Returns:** `public MapCodec<? extends ListOperation>`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Append` | class |  |
| `Insert` | record |  |
| `ReplaceAll` | class |  |
| `ReplaceSection` | record |  |
| `StandAlone` | record |  |
| `Type` | enum |  |
