# ProcessorHandle

**Package:** `net.minecraft.util.thread`
**Type:** interface<Msg>
**Extends:** `AutoCloseable`

## Methods

### name

```java
String name()
```

**Returns:** `String`

### tell

```java
void tell(Msg p_18713_)
```

**Parameters:**

- `p_18713_` (`Msg`)

### close

```java
default void close()
```

### ask

```java
<Source> default <Source> CompletableFuture<Source> ask(Function<? super ProcessorHandle<Source>, ? extends Msg> p_18721_)
```

**Parameters:**

- `p_18721_` (`Function<? super ProcessorHandle<Source>, ? extends Msg>`)

**Returns:** `default <Source> CompletableFuture<Source>`

### askEither

```java
<Source> default <Source> CompletableFuture<Source> askEither(Function<? super ProcessorHandle<Either<Source, Exception>>, ? extends Msg> p_18723_)
```

**Parameters:**

- `p_18723_` (`Function<? super ProcessorHandle<Either<Source, Exception>>, ? extends Msg>`)

**Returns:** `default <Source> CompletableFuture<Source>`

### of

```java
<Msg> static <Msg> ProcessorHandle<Msg> of(String p_18715_, Consumer<Msg> p_18716_)
```

**Parameters:**

- `p_18715_` (`String`)
- `p_18716_` (`Consumer<Msg>`)

**Returns:** `static <Msg> ProcessorHandle<Msg>`

### name

```java
public String name()
```

**Returns:** `String`

### tell

```java
public void tell(Msg p_18731_)
```

**Parameters:**

- `p_18731_` (`Msg`)

### toString

```java
public String toString()
```

**Returns:** `String`
