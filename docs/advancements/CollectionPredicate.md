# CollectionPredicate

**Package:** `net.minecraft.advancements.critereon`
**Type:** record<T, P extends Predicate<T>>(
    Optional<CollectionContentsPredicate<T, P>> contains, Optional<CollectionCountsPredicate<T, P>> counts, Optional<MinMaxBounds.Ints> size
) implements Predicate<Iterable<T>>

## Methods

### codec

```java
public static <T, P extends Predicate<T>> Codec<CollectionPredicate<T, P>> codec(Codec<P> p_340851_)
```

**Parameters:**

- `p_340851_` (`Codec<P>`)

**Returns:** `public static <T, P extends Predicate<T>> Codec<CollectionPredicate<T, P>>`

### test

```java
public boolean test(Iterable<T> p_341361_)
```

**Parameters:**

- `p_341361_` (`Iterable<T>`)

**Returns:** `public boolean`
