# SingletonArgumentInfo

**Package:** `net.minecraft.commands.synchronization`
**Type:** class<A extends ArgumentType<?>> implements ArgumentTypeInfo<A, SingletonArgumentInfo<A>.Template>

## Methods

### SingletonArgumentInfo

```java
private SingletonArgumentInfo(Function<CommandBuildContext, A> p_235434_)
```

**Parameters:**

- `p_235434_` (`Function<CommandBuildContext, A>`)

**Returns:** `private`

### contextFree

```java
public static <T extends ArgumentType<?>> SingletonArgumentInfo<T> contextFree(Supplier<T> p_235452_)
```

**Parameters:**

- `p_235452_` (`Supplier<T>`)

**Returns:** `public static <T extends ArgumentType<?>> SingletonArgumentInfo<T>`

### contextAware

```java
public static <T extends ArgumentType<?>> SingletonArgumentInfo<T> contextAware(Function<CommandBuildContext, T> p_235450_)
```

**Parameters:**

- `p_235450_` (`Function<CommandBuildContext, T>`)

**Returns:** `public static <T extends ArgumentType<?>> SingletonArgumentInfo<T>`

### serializeToNetwork

```java
public void serializeToNetwork(SingletonArgumentInfo<A>.Template p_235447_, FriendlyByteBuf p_235448_)
```

**Parameters:**

- `p_235447_` (`SingletonArgumentInfo<A>.Template`)
- `p_235448_` (`FriendlyByteBuf`)

**Returns:** `public void`

### serializeToJson

```java
public void serializeToJson(SingletonArgumentInfo<A>.Template p_235444_, JsonObject p_235445_)
```

**Parameters:**

- `p_235444_` (`SingletonArgumentInfo<A>.Template`)
- `p_235445_` (`JsonObject`)

**Returns:** `public void`

### deserializeFromNetwork

```java
public SingletonArgumentInfo<A>.Template deserializeFromNetwork(FriendlyByteBuf p_235457_)
```

**Parameters:**

- `p_235457_` (`FriendlyByteBuf`)

**Returns:** `public SingletonArgumentInfo<A>.Template`

### unpack

```java
public SingletonArgumentInfo<A>.Template unpack(A p_235459_)
```

**Parameters:**

- `p_235459_` (`A`)

**Returns:** `public SingletonArgumentInfo<A>.Template`

### Template

```java
public Template(Function<CommandBuildContext, A> p_235466_)
```

**Parameters:**

- `p_235466_` (`Function<CommandBuildContext, A>`)

**Returns:** `public`

### instantiate

```java
public A instantiate(CommandBuildContext p_235469_)
```

**Parameters:**

- `p_235469_` (`CommandBuildContext`)

**Returns:** `A`

### type

```java
public ArgumentTypeInfo<A, ?> type()
```

**Returns:** `ArgumentTypeInfo<A, ?>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Template` | class |  |
