# Palette

**Package:** `net.minecraft.world.level.chunk`
**Type:** interface<T>

## Methods

### idFor

```java
int idFor(T p_63061_)
```

**Parameters:**

- `p_63061_` (`T`)

**Returns:** `int`

### maybeHas

```java
boolean maybeHas(Predicate<T> p_63062_)
```

**Parameters:**

- `p_63062_` (`Predicate<T>`)

**Returns:** `boolean`

### valueFor

```java
T valueFor(int p_63060_)
```

**Parameters:**

- `p_63060_` (`int`)

**Returns:** `T`

### read

```java
void read(FriendlyByteBuf p_63064_)
```

**Parameters:**

- `p_63064_` (`FriendlyByteBuf`)

### write

```java
void write(FriendlyByteBuf p_63065_)
```

**Parameters:**

- `p_63065_` (`FriendlyByteBuf`)

### getSerializedSize

```java
int getSerializedSize()
```

**Returns:** `int`

### getSize

```java
int getSize()
```

**Returns:** `int`

### copy

```java
Palette<T> copy()
```

**Returns:** `Palette<T>`

### create

```java
<A> <A> Palette<A> create(int p_188027_, IdMap<A> p_188028_, PaletteResize<A> p_188029_, List<A> p_188030_)
```

**Parameters:**

- `p_188027_` (`int`)
- `p_188028_` (`IdMap<A>`)
- `p_188029_` (`PaletteResize<A>`)
- `p_188030_` (`List<A>`)

**Returns:** `<A> Palette<A>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Factory` | interface |  |
