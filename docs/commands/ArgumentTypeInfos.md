# ArgumentTypeInfos

**Package:** `net.minecraft.commands.synchronization`
**Type:** class

## Methods

### registerByClass

```java
public static synchronized <A extends ArgumentType<?>, T extends ArgumentTypeInfo.Template<A>, I extends ArgumentTypeInfo<A, T>> I registerByClass(Class<A> infoClass, I argumentTypeInfo)
```

**Parameters:**

- `infoClass` (`Class<A>`)
- `argumentTypeInfo` (`I`)

**Returns:** `<A extends ArgumentType<?>, T extends ArgumentTypeInfo.Template<A>, I extends ArgumentTypeInfo<A, T>> I`

### register

```java
private static <A extends ArgumentType<?>, T extends ArgumentTypeInfo.Template<A>> ArgumentTypeInfo<A, T> register(Registry<ArgumentTypeInfo<?, ?>> p_235387_, String p_235388_, Class<? extends A> p_235389_, ArgumentTypeInfo<A, T> p_235390_)
```

**Parameters:**

- `p_235387_` (`Registry<ArgumentTypeInfo<?, ?>>`)
- `p_235388_` (`String`)
- `p_235389_` (`Class<? extends A>`)
- `p_235390_` (`ArgumentTypeInfo<A, T>`)

**Returns:** `private static <A extends ArgumentType<?>, T extends ArgumentTypeInfo.Template<A>> ArgumentTypeInfo<A, T>`

### bootstrap

```java
public static ArgumentTypeInfo<?, ?> bootstrap(Registry<ArgumentTypeInfo<?, ?>> p_235385_)
```

**Parameters:**

- `p_235385_` (`Registry<ArgumentTypeInfo<?, ?>>`)

**Returns:** `public static ArgumentTypeInfo<?, ?>`

### fixClassType

```java
private static <T extends ArgumentType<?>> Class<T> fixClassType(Class<? super T> p_235396_)
```

**Parameters:**

- `p_235396_` (`Class<? super T>`)

**Returns:** `private static <T extends ArgumentType<?>> Class<T>`

### isClassRecognized

```java
public static boolean isClassRecognized(Class<?> p_235392_)
```

**Parameters:**

- `p_235392_` (`Class<?>`)

**Returns:** `public static boolean`

### byClass

```java
public static <A extends ArgumentType<?>> ArgumentTypeInfo<A, ?> byClass(A p_235383_)
```

**Parameters:**

- `p_235383_` (`A`)

**Returns:** `public static <A extends ArgumentType<?>> ArgumentTypeInfo<A, ?>`

### unpack

```java
public static <A extends ArgumentType<?>> ArgumentTypeInfo.Template<A> unpack(A p_235394_)
```

**Parameters:**

- `p_235394_` (`A`)

**Returns:** `public static <A extends ArgumentType<?>> ArgumentTypeInfo.Template<A>`
