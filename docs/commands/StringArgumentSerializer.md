# StringArgumentSerializer

**Package:** `net.minecraft.commands.synchronization.brigadier`
**Type:** class
**Implements:** `ArgumentTypeInfo<StringArgumentType`, `StringArgumentSerializer.Template>`

## Methods

### serializeToNetwork

```java
public void serializeToNetwork(StringArgumentSerializer.Template p_235616_, FriendlyByteBuf p_235617_)
```

**Parameters:**

- `p_235616_` (`StringArgumentSerializer.Template`)
- `p_235617_` (`FriendlyByteBuf`)

**Returns:** `public void`

### deserializeFromNetwork

```java
public StringArgumentSerializer.Template deserializeFromNetwork(FriendlyByteBuf p_235619_)
```

**Parameters:**

- `p_235619_` (`FriendlyByteBuf`)

**Returns:** `public StringArgumentSerializer.Template`

### serializeToJson

```java
public void serializeToJson(StringArgumentSerializer.Template p_235613_, JsonObject p_235614_)
```

**Parameters:**

- `p_235613_` (`StringArgumentSerializer.Template`)
- `p_235614_` (`JsonObject`)

**Returns:** `public void`

### unpack

```java
public StringArgumentSerializer.Template unpack(StringArgumentType p_235605_)
```

**Parameters:**

- `p_235605_` (`StringArgumentType`)

**Returns:** `public StringArgumentSerializer.Template`

### Template

```java
public Template(StringType p_235626_)
```

**Parameters:**

- `p_235626_` (`StringType`)

**Returns:** `public`

### instantiate

```java
public StringArgumentType instantiate(CommandBuildContext p_235629_)
```

**Parameters:**

- `p_235629_` (`CommandBuildContext`)

**Returns:** `public StringArgumentType`

### type

```java
public ArgumentTypeInfo<StringArgumentType, ?> type()
```

**Returns:** `ArgumentTypeInfo<StringArgumentType, ?>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Template` | class |  |
