# ArgumentUtils

**Package:** `net.minecraft.commands.synchronization`
**Type:** class

## Methods

### createNumberFlags

```java
public static int createNumberFlags(boolean p_235428_, boolean p_235429_)
```

**Parameters:**

- `p_235428_` (`boolean`)
- `p_235429_` (`boolean`)

**Returns:** `public static int`

### numberHasMin

```java
public static boolean numberHasMin(byte p_235403_)
```

**Parameters:**

- `p_235403_` (`byte`)

**Returns:** `public static boolean`

### numberHasMax

```java
public static boolean numberHasMax(byte p_235431_)
```

**Parameters:**

- `p_235431_` (`byte`)

**Returns:** `public static boolean`

### serializeCap

```java
private static <A extends ArgumentType<?>> void serializeCap(JsonObject p_235408_, ArgumentTypeInfo.Template<A> p_235409_)
```

**Parameters:**

- `p_235408_` (`JsonObject`)
- `p_235409_` (`ArgumentTypeInfo.Template<A>`)

**Returns:** `private static <A extends ArgumentType<?>> void`

### serializeCap

```java
private static <A extends ArgumentType<?>, T extends ArgumentTypeInfo.Template<A>> void serializeCap(JsonObject p_235411_, ArgumentTypeInfo<A, T> p_235412_, ArgumentTypeInfo.Template<A> p_235413_)
```

**Parameters:**

- `p_235411_` (`JsonObject`)
- `p_235412_` (`ArgumentTypeInfo<A, T>`)
- `p_235413_` (`ArgumentTypeInfo.Template<A>`)

**Returns:** `private static <A extends ArgumentType<?>, T extends ArgumentTypeInfo.Template<A>> void`

### serializeArgumentToJson

```java
private static <T extends ArgumentType<?>> void serializeArgumentToJson(JsonObject p_235405_, T p_235406_)
```

**Parameters:**

- `p_235405_` (`JsonObject`)
- `p_235406_` (`T`)

**Returns:** `private static <T extends ArgumentType<?>> void`

### serializeCap

```java
 serializeCap()
```

**Returns:** ``

### serializeNodeToJson

```java
<S> public static <S> JsonObject serializeNodeToJson(CommandDispatcher<S> p_235415_, CommandNode<S> p_235416_)
```

**Parameters:**

- `p_235415_` (`CommandDispatcher<S>`)
- `p_235416_` (`CommandNode<S>`)

**Returns:** `public static <S> JsonObject`

### findUsedArgumentTypes

```java
<T> public static <T> Set<ArgumentType<?>> findUsedArgumentTypes(CommandNode<T> p_235418_)
```

**Parameters:**

- `p_235418_` (`CommandNode<T>`)

**Returns:** `public static <T> Set<ArgumentType<?>>`

### findUsedArgumentTypes

```java
 findUsedArgumentTypes()
```

**Returns:** ``

### findUsedArgumentTypes

```java
<T> private static <T> void findUsedArgumentTypes(CommandNode<T> p_235420_, Set<ArgumentType<?>> p_235421_, Set<CommandNode<T>> p_235422_)
```

**Parameters:**

- `p_235420_` (`CommandNode<T>`)
- `p_235421_` (`Set<ArgumentType<?>>`)
- `p_235422_` (`Set<CommandNode<T>>`)

**Returns:** `private static <T> void`

### findUsedArgumentTypes

```java
 findUsedArgumentTypes()
```

**Returns:** ``
