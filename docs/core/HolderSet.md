# HolderSet

**Package:** `net.minecraft.core`
**Type:** interface<T> extends Iterable<Holder<T>>, net.neoforged.neoforge.common.extensions.IHolderSetExtension<T>

## Methods

### stream

```java
Stream<Holder<T>> stream()
```

**Returns:** `Stream<Holder<T>>`

### size

```java
int size()
```

**Returns:** `int`

### unwrap

```java
Either<TagKey<T>, List<Holder<T>>> unwrap()
```

**Returns:** `Either<TagKey<T>, List<Holder<T>>>`

### getRandomElement

```java
Optional<Holder<T>> getRandomElement(RandomSource p_235712_)
```

**Parameters:**

- `p_235712_` (`RandomSource`)

**Returns:** `Optional<Holder<T>>`

### get

```java
Holder<T> get(int p_205798_)
```

**Parameters:**

- `p_205798_` (`int`)

**Returns:** `Holder<T>`

### contains

```java
boolean contains(Holder<T> p_205799_)
```

**Parameters:**

- `p_205799_` (`Holder<T>`)

**Returns:** `boolean`

### canSerializeIn

```java
boolean canSerializeIn(HolderOwner<T> p_255749_)
```

**Parameters:**

- `p_255749_` (`HolderOwner<T>`)

**Returns:** `boolean`

### unwrapKey

```java
Optional<TagKey<T>> unwrapKey()
```

**Returns:** `Optional<TagKey<T>>`

### emptyNamed

```java
static <T> HolderSet.Named<T> emptyNamed(HolderOwner<T> p_255858_, TagKey<T> p_256459_)
```

**Parameters:**

- `p_255858_` (`HolderOwner<T>`)
- `p_256459_` (`TagKey<T>`)

**Returns:** `HolderSet.Named<T>`

### contents

```java
protected List<Holder<T>> contents()
```

**Returns:** `List<Holder<T>>`

### empty

```java
<T> static <T> HolderSet<T> empty()
```

**Returns:** `static <T> HolderSet<T>`

### direct

```java
static <T> HolderSet.Direct<T> direct(Holder<T>[]... p_205810_)
```

**Parameters:**

- `p_205810_` (`Holder<T>[]...`)

**Returns:** `HolderSet.Direct<T>`

### direct

```java
<T> static <T> HolderSet.Direct<T> direct(List<? extends Holder<T>> p_205801_)
```

**Parameters:**

- `p_205801_` (`List<? extends Holder<T>>`)

**Returns:** `static <T> HolderSet.Direct<T>`

### direct

```java
static <E, T> HolderSet.Direct<T> direct(Function<E, Holder<T>> p_205807_, E[]... p_205808_)
```

**Parameters:**

- `p_205807_` (`Function<E, Holder<T>>`)
- `p_205808_` (`E[]...`)

**Returns:** `HolderSet.Direct<T>`

### direct

```java
<E, T> static <E, T> HolderSet.Direct<T> direct(Function<E, Holder<T>> p_205804_, Collection<E> p_298495_)
```

**Parameters:**

- `p_205804_` (`Function<E, Holder<T>>`)
- `p_298495_` (`Collection<E>`)

**Returns:** `static <E, T> HolderSet.Direct<T>`

### Direct

```java
 Direct(List<Holder<T>> p_205814_)
```

**Parameters:**

- `p_205814_` (`List<Holder<T>>`)

**Returns:** ``

### contents

```java
protected List<Holder<T>> contents()
```

**Returns:** `List<Holder<T>>`

### unwrap

```java
public Either<TagKey<T>, List<Holder<T>>> unwrap()
```

**Returns:** `Either<TagKey<T>, List<Holder<T>>>`

### unwrapKey

```java
public Optional<TagKey<T>> unwrapKey()
```

**Returns:** `Optional<TagKey<T>>`

### contains

```java
public boolean contains(Holder<T> p_205816_)
```

**Parameters:**

- `p_205816_` (`Holder<T>`)

**Returns:** `boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### equals

```java
public boolean equals(Object p_332659_)
```

**Parameters:**

- `p_332659_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### contents

```java
protected abstract List<Holder<T>> contents()
```

**Returns:** `protected abstract List<Holder<T>>`

### size

```java
public int size()
```

**Returns:** `int`

### spliterator

```java
public Spliterator<Holder<T>> spliterator()
```

**Returns:** `Spliterator<Holder<T>>`

### iterator

```java
public Iterator<Holder<T>> iterator()
```

**Returns:** `Iterator<Holder<T>>`

### stream

```java
public Stream<Holder<T>> stream()
```

**Returns:** `Stream<Holder<T>>`

### getRandomElement

```java
public Optional<Holder<T>> getRandomElement(RandomSource p_235714_)
```

**Parameters:**

- `p_235714_` (`RandomSource`)

**Returns:** `Optional<Holder<T>>`

### get

```java
public Holder<T> get(int p_205823_)
```

**Parameters:**

- `p_205823_` (`int`)

**Returns:** `Holder<T>`

### canSerializeIn

```java
public boolean canSerializeIn(HolderOwner<T> p_255876_)
```

**Parameters:**

- `p_255876_` (`HolderOwner<T>`)

**Returns:** `boolean`

### Named

```java
 Named(HolderOwner<T> p_256118_, TagKey<T> p_256597_)
```

**Parameters:**

- `p_256118_` (`HolderOwner<T>`)
- `p_256597_` (`TagKey<T>`)

**Returns:** ``

### bind

```java
void bind(List<Holder<T>> p_205836_)
```

**Parameters:**

- `p_205836_` (`List<Holder<T>>`)

### key

```java
public TagKey<T> key()
```

**Returns:** `public TagKey<T>`

### contents

```java
protected List<Holder<T>> contents()
```

**Returns:** `List<Holder<T>>`

### unwrap

```java
public Either<TagKey<T>, List<Holder<T>>> unwrap()
```

**Returns:** `Either<TagKey<T>, List<Holder<T>>>`

### unwrapKey

```java
public Optional<TagKey<T>> unwrapKey()
```

**Returns:** `Optional<TagKey<T>>`

### contains

```java
public boolean contains(Holder<T> p_205834_)
```

**Parameters:**

- `p_205834_` (`Holder<T>`)

**Returns:** `boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### canSerializeIn

```java
public boolean canSerializeIn(HolderOwner<T> p_256542_)
```

**Parameters:**

- `p_256542_` (`HolderOwner<T>`)

**Returns:** `boolean`

### addInvalidationListener

```java
public void addInvalidationListener(Runnable runnable)
```

**Parameters:**

- `runnable` (`Runnable`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Direct` | class |  |
| `Named` | class |  |
