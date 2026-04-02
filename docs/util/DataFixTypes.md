# DataFixTypes

**Package:** `net.minecraft.util.datafix`
**Type:** enum

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TYPES_FOR_LEVEL_LIST` | `Set<TypeReference>` |  |

## Methods

### ENTITY_CHUNK

```java
, ENTITY_CHUNK()
```

**Returns:** `,`

### DataFixTypes

```java
private DataFixTypes(TypeReference p_14503_)
```

**Parameters:**

- `p_14503_` (`TypeReference`)

**Returns:** `private`

### currentVersion

```java
static int currentVersion()
```

**Returns:** `static int`

### wrapCodec

```java
<A> public <A> Codec<A> wrapCodec(Codec<A> p_301309_, DataFixer p_301075_, int p_300912_)
```

**Parameters:**

- `p_301309_` (`Codec<A>`)
- `p_301075_` (`DataFixer`)
- `p_300912_` (`int`)

**Returns:** `public <A> Codec<A>`

### encode

```java
public <T> DataResult<T> encode(A p_301090_, DynamicOps<T> p_300954_, T p_301331_)
```

**Parameters:**

- `p_301090_` (`A`)
- `p_300954_` (`DynamicOps<T>`)
- `p_301331_` (`T`)

**Returns:** `DataResult<T>`

### decode

```java
public <T> DataResult<Pair<A, T>> decode(DynamicOps<T> p_300987_, T p_301210_)
```

**Parameters:**

- `p_300987_` (`DynamicOps<T>`)
- `p_301210_` (`T`)

**Returns:** `DataResult<Pair<A, T>>`

### update

```java
<T> public <T> Dynamic<T> update(DataFixer p_265388_, Dynamic<T> p_265179_, int p_265372_, int p_265168_)
```

**Parameters:**

- `p_265388_` (`DataFixer`)
- `p_265179_` (`Dynamic<T>`)
- `p_265372_` (`int`)
- `p_265168_` (`int`)

**Returns:** `public <T> Dynamic<T>`

### updateToCurrentVersion

```java
<T> public <T> Dynamic<T> updateToCurrentVersion(DataFixer p_265085_, Dynamic<T> p_265237_, int p_265099_)
```

**Parameters:**

- `p_265085_` (`DataFixer`)
- `p_265237_` (`Dynamic<T>`)
- `p_265099_` (`int`)

**Returns:** `public <T> Dynamic<T>`

### update

```java
public CompoundTag update(DataFixer p_265128_, CompoundTag p_265422_, int p_265549_, int p_265304_)
```

**Parameters:**

- `p_265128_` (`DataFixer`)
- `p_265422_` (`CompoundTag`)
- `p_265549_` (`int`)
- `p_265304_` (`int`)

**Returns:** `public CompoundTag`

### updateToCurrentVersion

```java
public CompoundTag updateToCurrentVersion(DataFixer p_265583_, CompoundTag p_265401_, int p_265111_)
```

**Parameters:**

- `p_265583_` (`DataFixer`)
- `p_265401_` (`CompoundTag`)
- `p_265111_` (`int`)

**Returns:** `public CompoundTag`
