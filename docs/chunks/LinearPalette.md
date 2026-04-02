# LinearPalette

**Package:** `net.minecraft.world.level.chunk`
**Type:** class<T> implements Palette<T>

## Methods

### LinearPalette

```java
private LinearPalette(IdMap<T> p_188015_, int p_188016_, PaletteResize<T> p_188017_, List<T> p_188018_)
```

**Parameters:**

- `p_188015_` (`IdMap<T>`)
- `p_188016_` (`int`)
- `p_188017_` (`PaletteResize<T>`)
- `p_188018_` (`List<T>`)

**Returns:** `private`

### LinearPalette

```java
private LinearPalette(IdMap<T> p_199921_, T[] p_199922_, PaletteResize<T> p_199923_, int p_199924_, int p_199925_)
```

**Parameters:**

- `p_199921_` (`IdMap<T>`)
- `p_199922_` (`T[]`)
- `p_199923_` (`PaletteResize<T>`)
- `p_199924_` (`int`)
- `p_199925_` (`int`)

**Returns:** `private`

### create

```java
<A> public static <A> Palette<A> create(int p_188020_, IdMap<A> p_188021_, PaletteResize<A> p_188022_, List<A> p_188023_)
```

**Parameters:**

- `p_188020_` (`int`)
- `p_188021_` (`IdMap<A>`)
- `p_188022_` (`PaletteResize<A>`)
- `p_188023_` (`List<A>`)

**Returns:** `public static <A> Palette<A>`

### idFor

```java
public int idFor(T p_63040_)
```

**Parameters:**

- `p_63040_` (`T`)

**Returns:** `int`

### maybeHas

```java
public boolean maybeHas(Predicate<T> p_63042_)
```

**Parameters:**

- `p_63042_` (`Predicate<T>`)

**Returns:** `boolean`

### valueFor

```java
public T valueFor(int p_63038_)
```

**Parameters:**

- `p_63038_` (`int`)

**Returns:** `T`

### MissingPaletteEntryException

```java
throw new MissingPaletteEntryException()
```

**Returns:** `throw new`

### read

```java
public void read(FriendlyByteBuf p_63046_)
```

**Parameters:**

- `p_63046_` (`FriendlyByteBuf`)

### write

```java
public void write(FriendlyByteBuf p_63049_)
```

**Parameters:**

- `p_63049_` (`FriendlyByteBuf`)

### getSerializedSize

```java
public int getSerializedSize()
```

**Returns:** `int`

### getSize

```java
public int getSize()
```

**Returns:** `int`

### copy

```java
public Palette<T> copy()
```

**Returns:** `Palette<T>`
