# SingleValuePalette

**Package:** `net.minecraft.world.level.chunk`
**Type:** class<T> implements Palette<T>

## Methods

### SingleValuePalette

```java
public SingleValuePalette(IdMap<T> p_188207_, PaletteResize<T> p_188208_, List<T> p_188209_)
```

**Parameters:**

- `p_188207_` (`IdMap<T>`)
- `p_188208_` (`PaletteResize<T>`)
- `p_188209_` (`List<T>`)

**Returns:** `public`

### create

```java
<= 1, "Can't initialize SingleValuePalette with %d values.", (long)p_188209_.size());
            this.value = p_188209_.get(0);
        }
    }

    public static <A> Palette<A> create(int p_188214_, IdMap<A> p_188215_, PaletteResize<A> p_188216_, List<A> p_188217_)
```

**Parameters:**

- `p_188214_` (`int`)
- `p_188215_` (`IdMap<A>`)
- `p_188216_` (`PaletteResize<A>`)
- `p_188217_` (`List<A>`)

**Returns:** `Palette<A>`

### idFor

```java
public int idFor(T p_188219_)
```

**Parameters:**

- `p_188219_` (`T`)

**Returns:** `int`

### maybeHas

```java
public boolean maybeHas(Predicate<T> p_188221_)
```

**Parameters:**

- `p_188221_` (`Predicate<T>`)

**Returns:** `boolean`

### IllegalStateException

```java
throw new IllegalStateException("Use of an uninitialized palette")
```

**Parameters:**

- `palette"` (`"Use of an uninitialized`)

**Returns:** `throw new`

### valueFor

```java
public T valueFor(int p_188212_)
```

**Parameters:**

- `p_188212_` (`int`)

**Returns:** `T`

### IllegalStateException

```java
throw new IllegalStateException("Missing Palette entry for id " + p_188212_ + ".")
```

**Parameters:**

- `"."` (`"Missing Palette entry for id " + p_188212_ +`)

**Returns:** `throw new`

### read

```java
public void read(FriendlyByteBuf p_188223_)
```

**Parameters:**

- `p_188223_` (`FriendlyByteBuf`)

### write

```java
public void write(FriendlyByteBuf p_188226_)
```

**Parameters:**

- `p_188226_` (`FriendlyByteBuf`)

### IllegalStateException

```java
throw new IllegalStateException("Use of an uninitialized palette")
```

**Parameters:**

- `palette"` (`"Use of an uninitialized`)

**Returns:** `throw new`

### getSerializedSize

```java
public int getSerializedSize()
```

**Returns:** `int`

### IllegalStateException

```java
throw new IllegalStateException("Use of an uninitialized palette")
```

**Parameters:**

- `palette"` (`"Use of an uninitialized`)

**Returns:** `throw new`

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

### IllegalStateException

```java
throw new IllegalStateException("Use of an uninitialized palette")
```

**Parameters:**

- `palette"` (`"Use of an uninitialized`)

**Returns:** `throw new`
