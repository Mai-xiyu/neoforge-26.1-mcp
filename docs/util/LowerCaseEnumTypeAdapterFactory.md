# LowerCaseEnumTypeAdapterFactory

**Package:** `net.minecraft.util`
**Type:** class
**Implements:** `TypeAdapterFactory`

## Methods

### create

```java
public <T> TypeAdapter<T> create(Gson p_13982_, TypeToken<T> p_13983_)
```

**Parameters:**

- `p_13982_` (`Gson`)
- `p_13983_` (`TypeToken<T>`)

**Returns:** `TypeAdapter<T>`

### write

```java
public void write(JsonWriter p_13992_, T p_13993_)
```

**Parameters:**

- `p_13992_` (`JsonWriter`)
- `p_13993_` (`T`)

### read

```java
public T read(JsonReader p_13990_)
```

**Parameters:**

- `p_13990_` (`JsonReader`)

**Returns:** `T`

### toLowercase

```java
String toLowercase(Object p_13980_)
```

**Parameters:**

- `p_13980_` (`Object`)

**Returns:** `String`
