# ChunkRenamesFix

**Package:** `net.minecraft.util.datafix.fixes`
**Type:** class
**Extends:** `DataFix`

## Methods

### ChunkRenamesFix

```java
public ChunkRenamesFix(Schema p_185100_)
```

**Parameters:**

- `p_185100_` (`Schema`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### makeRule

```java
protected TypeRewriteRule makeRule()
```

**Returns:** `TypeRewriteRule`

### renameField

```java
private static Typed<?> renameField(Typed<?> p_185112_, String p_185113_, String p_185114_)
```

**Parameters:**

- `p_185112_` (`Typed<?>`)
- `p_185113_` (`String`)
- `p_185114_` (`String`)

**Returns:** `private static Typed<?>`

### renameFieldHelper

```java
<A> private static <A> Typed<?> renameFieldHelper(Typed<?> p_185116_, String p_185117_, String p_185118_, Type<A> p_185119_)
```

**Parameters:**

- `p_185116_` (`Typed<?>`)
- `p_185117_` (`String`)
- `p_185118_` (`String`)
- `p_185119_` (`Type<A>`)

**Returns:** `private static <A> Typed<?>`

### appendChunkName

```java
<A> private static <A> Typed<Pair<String, A>> appendChunkName(Typed<A> p_185107_)
```

**Parameters:**

- `p_185107_` (`Typed<A>`)

**Returns:** `private static <A> Typed<Pair<String, A>>`

### mergeRemainders

```java
<T> private static <T> Dynamic<T> mergeRemainders(Typed<?> p_185109_, Dynamic<T> p_185110_)
```

**Parameters:**

- `p_185109_` (`Typed<?>`)
- `p_185110_` (`Dynamic<T>`)

**Returns:** `private static <T> Dynamic<T>`
