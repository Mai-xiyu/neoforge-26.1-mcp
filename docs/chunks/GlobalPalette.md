# GlobalPalette

**Package:** `net.minecraft.world.level.chunk`
**Type:** class<T> implements Palette<T>

## Methods

### GlobalPalette

```java
public GlobalPalette(IdMap<T> p_187897_)
```

**Parameters:**

- `p_187897_` (`IdMap<T>`)

**Returns:** `public`

### create

```java
<A> public static <A> Palette<A> create(int p_187899_, IdMap<A> p_187900_, PaletteResize<A> p_187901_, List<A> p_187902_)
```

**Parameters:**

- `p_187899_` (`int`)
- `p_187900_` (`IdMap<A>`)
- `p_187901_` (`PaletteResize<A>`)
- `p_187902_` (`List<A>`)

**Returns:** `public static <A> Palette<A>`

### idFor

```java
public int idFor(T p_62648_)
```

**Parameters:**

- `p_62648_` (`T`)

**Returns:** `int`

### maybeHas

```java
public boolean maybeHas(Predicate<T> p_62650_)
```

**Parameters:**

- `p_62650_` (`Predicate<T>`)

**Returns:** `boolean`

### valueFor

```java
public T valueFor(int p_62646_)
```

**Parameters:**

- `p_62646_` (`int`)

**Returns:** `T`

### MissingPaletteEntryException

```java
throw new MissingPaletteEntryException()
```

**Returns:** `throw new`

### read

```java
public void read(FriendlyByteBuf p_62654_)
```

**Parameters:**

- `p_62654_` (`FriendlyByteBuf`)

### write

```java
public void write(FriendlyByteBuf p_62656_)
```

**Parameters:**

- `p_62656_` (`FriendlyByteBuf`)

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
