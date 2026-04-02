# StringRepresentable

**Package:** `net.minecraft.util`
**Type:** interface

## Methods

### getSerializedName

```java
String getSerializedName()
```

**Returns:** `String`

### fromEnum

```java
StringRepresentable> StringRepresentable.EnumCodec<E> fromEnum(Supplier<E[]> p_216440_)
```

**Parameters:**

- `p_216440_` (`Supplier<E[]>`)

**Returns:** `StringRepresentable> StringRepresentable.EnumCodec<E>`

### fromEnumWithMapping

```java
return fromEnumWithMapping(p_304817_ -> p_304817_)
```

**Parameters:**

- `p_304817_` (`p_304817_ ->`)

**Returns:** `return`

### fromEnumWithMapping

```java
StringRepresentable> StringRepresentable.EnumCodec<E> fromEnumWithMapping(Supplier<E[]> p_275615_, Function<String, String> p_275259_)
```

**Parameters:**

- `p_275615_` (`Supplier<E[]>`)
- `p_275259_` (`Function<String, String>`)

**Returns:** `StringRepresentable> StringRepresentable.EnumCodec<E>`

### fromValues

```java
<T extends StringRepresentable> static <T extends StringRepresentable> Codec<T> fromValues(Supplier<T[]> p_304543_)
```

**Parameters:**

- `p_304543_` (`Supplier<T[]>`)

**Returns:** `static <T extends StringRepresentable> Codec<T>`

### createNameLookup

```java
<T extends StringRepresentable> static <T extends StringRepresentable> Function<String, T> createNameLookup(T[] p_304419_, Function<String, String> p_304658_)
```

**Parameters:**

- `p_304419_` (`T[]`)
- `p_304658_` (`Function<String, String>`)

**Returns:** `static <T extends StringRepresentable> Function<String, T>`

### keys

```java
static Keyable keys(StringRepresentable[] p_14358_)
```

**Parameters:**

- `p_14358_` (`StringRepresentable[]`)

**Returns:** `static Keyable`

### Keyable

```java
return new Keyable()
```

**Returns:** `return new`

### keys

```java
public <T> Stream<T> keys(DynamicOps<T> p_184758_)
```

**Parameters:**

- `p_184758_` (`DynamicOps<T>`)

**Returns:** `Stream<T>`

### EnumCodec

```java
public EnumCodec(E[] p_216447_, Function<String, E> p_216448_)
```

**Parameters:**

- `p_216447_` (`E[]`)
- `p_216448_` (`Function<String, E>`)

**Returns:** `public`

### byName

```java
public E byName(String p_216456_)
```

**Parameters:**

- `p_216456_` (`String`)

**Returns:** `E`

### byName

```java
public E byName(String p_263077_, E p_263115_)
```

**Parameters:**

- `p_263077_` (`String`)
- `p_263115_` (`E`)

**Returns:** `public E`

### StringRepresentableCodec

```java
public StringRepresentableCodec(S[] p_304774_, Function<String, S> p_304834_, ToIntFunction<S> p_304925_)
```

**Parameters:**

- `p_304774_` (`S[]`)
- `p_304834_` (`Function<String, S>`)
- `p_304925_` (`ToIntFunction<S>`)

**Returns:** `public`

### decode

```java
< p_304774_.length ? p_304774_[p_304986_] : null, -1)
            );
        }

        @Override
        public <T> DataResult<Pair<S, T>> decode(DynamicOps<T> p_304586_, T p_304692_)
```

**Parameters:**

- `p_304586_` (`DynamicOps<T>`)
- `p_304692_` (`T`)

**Returns:** `DataResult<Pair<S, T>>`

### encode

```java
<T> public <T> DataResult<T> encode(S p_304936_, DynamicOps<T> p_304952_, T p_304437_)
```

**Parameters:**

- `p_304936_` (`S`)
- `p_304952_` (`DynamicOps<T>`)
- `p_304437_` (`T`)

**Returns:** `public <T> DataResult<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `EnumCodec` | class |  |
| `StringRepresentableCodec` | class |  |
