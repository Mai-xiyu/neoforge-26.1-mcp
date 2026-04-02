# ScreenNarrationCollector

**Package:** `net.minecraft.client.gui.narration`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### update

```java
public void update(Consumer<NarrationElementOutput> p_169187_)
```

**Parameters:**

- `p_169187_` (`Consumer<NarrationElementOutput>`)

**Returns:** `public void`

### collectNarrationText

```java
public String collectNarrationText(boolean p_169189_)
```

**Parameters:**

- `p_169189_` (`boolean`)

**Returns:** `public String`

### accept

```java
public void accept(String p_169204_)
```

**Parameters:**

- `p_169204_` (`String`)

**Returns:** `public void`

### EntryKey

```java
 EntryKey(NarratedElementType p_169210_, int p_169211_)
```

**Parameters:**

- `p_169210_` (`NarratedElementType`)
- `p_169211_` (`int`)

**Returns:** ``

### update

```java
public ScreenNarrationCollector.NarrationEntry update(int p_169217_, NarrationThunk<?> p_169218_)
```

**Parameters:**

- `p_169217_` (`int`)
- `p_169218_` (`NarrationThunk<?>`)

**Returns:** `public ScreenNarrationCollector.NarrationEntry`

### Output

```java
 Output(int p_169223_)
```

**Parameters:**

- `p_169223_` (`int`)

**Returns:** ``

### add

```java
public void add(NarratedElementType p_169226_, NarrationThunk<?> p_169227_)
```

**Parameters:**

- `p_169226_` (`NarratedElementType`)
- `p_169227_` (`NarrationThunk<?>`)

### nest

```java
public NarrationElementOutput nest()
```

**Returns:** `NarrationElementOutput`

### Output

```java
return ScreenNarrationCollector.this.new Output(this.depth + 1)
```

**Parameters:**

- `1` (`this.depth +`)

**Returns:** `return ScreenNarrationCollector.this.new`
