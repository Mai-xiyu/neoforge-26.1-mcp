# ArgumentTypeInfo

**Package:** `net.minecraft.commands.synchronization`
**Type:** interface<A extends ArgumentType<?>, T extends ArgumentTypeInfo.Template<A>>

## Methods

### serializeToNetwork

```java
void serializeToNetwork(T p_235375_, FriendlyByteBuf p_235376_)
```

**Parameters:**

- `p_235375_` (`T`)
- `p_235376_` (`FriendlyByteBuf`)

### deserializeFromNetwork

```java
T deserializeFromNetwork(FriendlyByteBuf p_235377_)
```

**Parameters:**

- `p_235377_` (`FriendlyByteBuf`)

**Returns:** `T`

### serializeToJson

```java
void serializeToJson(T p_235373_, JsonObject p_235374_)
```

**Parameters:**

- `p_235373_` (`T`)
- `p_235374_` (`JsonObject`)

### unpack

```java
T unpack(A p_235372_)
```

**Parameters:**

- `p_235372_` (`A`)

**Returns:** `T`

### instantiate

```java
A instantiate(CommandBuildContext p_235378_)
```

**Parameters:**

- `p_235378_` (`CommandBuildContext`)

**Returns:** `A`

### type

```java
ArgumentTypeInfo<A, ?> type()
```

**Returns:** `ArgumentTypeInfo<A, ?>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Template` | interface |  |
