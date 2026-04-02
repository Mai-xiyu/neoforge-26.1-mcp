# HashMapPalette

**Package:** `net.minecraft.world.level.chunk`
**Type:** class<T> implements Palette<T>

## Methods

### HashMapPalette

```java
public HashMapPalette(IdMap<T> p_187908_, int p_187909_, PaletteResize<T> p_187910_, List<T> p_187911_)
```

**Parameters:**

- `p_187908_` (`IdMap<T>`)
- `p_187909_` (`int`)
- `p_187910_` (`PaletteResize<T>`)
- `p_187911_` (`List<T>`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### HashMapPalette

```java
public HashMapPalette(IdMap<T> p_187904_, int p_187905_, PaletteResize<T> p_187906_)
```

**Parameters:**

- `p_187904_` (`IdMap<T>`)
- `p_187905_` (`int`)
- `p_187906_` (`PaletteResize<T>`)

**Returns:** `public`

### HashMapPalette

```java
private HashMapPalette(IdMap<T> p_199915_, int p_199916_, PaletteResize<T> p_199917_, CrudeIncrementalIntIdentityHashBiMap<T> p_199918_)
```

**Parameters:**

- `p_199915_` (`IdMap<T>`)
- `p_199916_` (`int`)
- `p_199917_` (`PaletteResize<T>`)
- `p_199918_` (`CrudeIncrementalIntIdentityHashBiMap<T>`)

**Returns:** `private`

### create

```java
<A> public static <A> Palette<A> create(int p_187913_, IdMap<A> p_187914_, PaletteResize<A> p_187915_, List<A> p_187916_)
```

**Parameters:**

- `p_187913_` (`int`)
- `p_187914_` (`IdMap<A>`)
- `p_187915_` (`PaletteResize<A>`)
- `p_187916_` (`List<A>`)

**Returns:** `public static <A> Palette<A>`

### idFor

```java
public int idFor(T p_62673_)
```

**Parameters:**

- `p_62673_` (`T`)

**Returns:** `int`

### maybeHas

```java
public boolean maybeHas(Predicate<T> p_62675_)
```

**Parameters:**

- `p_62675_` (`Predicate<T>`)

**Returns:** `boolean`

### valueFor

```java
public T valueFor(int p_62671_)
```

**Parameters:**

- `p_62671_` (`int`)

**Returns:** `T`

### MissingPaletteEntryException

```java
throw new MissingPaletteEntryException()
```

**Returns:** `throw new`

### read

```java
public void read(FriendlyByteBuf p_62679_)
```

**Parameters:**

- `p_62679_` (`FriendlyByteBuf`)

### write

```java
public void write(FriendlyByteBuf p_62684_)
```

**Parameters:**

- `p_62684_` (`FriendlyByteBuf`)

### getSerializedSize

```java
public int getSerializedSize()
```

**Returns:** `int`

### getEntries

```java
public List<T> getEntries()
```

**Returns:** `public List<T>`

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
