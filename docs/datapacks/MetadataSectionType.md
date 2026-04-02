# MetadataSectionType

**Package:** `net.minecraft.server.packs.metadata`
**Type:** interface<T> extends MetadataSectionSerializer<T>
**Side:** 🖧 Server

## Methods

### toJson

```java
JsonObject toJson(T p_249140_)
```

**Parameters:**

- `p_249140_` (`T`)

**Returns:** `JsonObject`

### fromCodec

```java
<T> static <T> MetadataSectionType<T> fromCodec(String p_249716_, Codec<T> p_249525_)
```

**Parameters:**

- `p_249716_` (`String`)
- `p_249525_` (`Codec<T>`)

**Returns:** `static <T> MetadataSectionType<T>`

### getMetadataSectionName

```java
public String getMetadataSectionName()
```

**Returns:** `String`

### fromJson

```java
public T fromJson(JsonObject p_249450_)
```

**Parameters:**

- `p_249450_` (`JsonObject`)

**Returns:** `T`

### toJson

```java
public JsonObject toJson(T p_250691_)
```

**Parameters:**

- `p_250691_` (`T`)

**Returns:** `JsonObject`
