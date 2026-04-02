# LongArgumentInfo

**Package:** `net.minecraft.commands.synchronization.brigadier`
**Type:** class
**Implements:** `ArgumentTypeInfo<LongArgumentType`, `LongArgumentInfo.Template>`

## Methods

### serializeToNetwork

```java
public void serializeToNetwork(LongArgumentInfo.Template p_235584_, FriendlyByteBuf p_235585_)
```

**Parameters:**

- `p_235584_` (`LongArgumentInfo.Template`)
- `p_235585_` (`FriendlyByteBuf`)

**Returns:** `public void`

### deserializeFromNetwork

```java
public LongArgumentInfo.Template deserializeFromNetwork(FriendlyByteBuf p_235587_)
```

**Parameters:**

- `p_235587_` (`FriendlyByteBuf`)

**Returns:** `public LongArgumentInfo.Template`

### serializeToJson

```java
public void serializeToJson(LongArgumentInfo.Template p_235581_, JsonObject p_235582_)
```

**Parameters:**

- `p_235581_` (`LongArgumentInfo.Template`)
- `p_235582_` (`JsonObject`)

**Returns:** `public void`

### unpack

```java
public LongArgumentInfo.Template unpack(LongArgumentType p_235573_)
```

**Parameters:**

- `p_235573_` (`LongArgumentType`)

**Returns:** `public LongArgumentInfo.Template`

### Template

```java
 Template(long p_235595_, long p_235596_)
```

**Parameters:**

- `p_235595_` (`long`)
- `p_235596_` (`long`)

**Returns:** ``

### instantiate

```java
public LongArgumentType instantiate(CommandBuildContext p_235599_)
```

**Parameters:**

- `p_235599_` (`CommandBuildContext`)

**Returns:** `public LongArgumentType`

### type

```java
public ArgumentTypeInfo<LongArgumentType, ?> type()
```

**Returns:** `ArgumentTypeInfo<LongArgumentType, ?>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Template` | class |  |
