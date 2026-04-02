# FloatArgumentInfo

**Package:** `net.minecraft.commands.synchronization.brigadier`
**Type:** class
**Implements:** `ArgumentTypeInfo<FloatArgumentType`, `FloatArgumentInfo.Template>`

## Methods

### serializeToNetwork

```java
public void serializeToNetwork(FloatArgumentInfo.Template p_235518_, FriendlyByteBuf p_235519_)
```

**Parameters:**

- `p_235518_` (`FloatArgumentInfo.Template`)
- `p_235519_` (`FriendlyByteBuf`)

**Returns:** `public void`

### deserializeFromNetwork

```java
public FloatArgumentInfo.Template deserializeFromNetwork(FriendlyByteBuf p_235521_)
```

**Parameters:**

- `p_235521_` (`FriendlyByteBuf`)

**Returns:** `public FloatArgumentInfo.Template`

### serializeToJson

```java
public void serializeToJson(FloatArgumentInfo.Template p_235515_, JsonObject p_235516_)
```

**Parameters:**

- `p_235515_` (`FloatArgumentInfo.Template`)
- `p_235516_` (`JsonObject`)

**Returns:** `public void`

### unpack

```java
public FloatArgumentInfo.Template unpack(FloatArgumentType p_235507_)
```

**Parameters:**

- `p_235507_` (`FloatArgumentType`)

**Returns:** `public FloatArgumentInfo.Template`

### Template

```java
 Template(float p_235529_, float p_235530_)
```

**Parameters:**

- `p_235529_` (`float`)
- `p_235530_` (`float`)

**Returns:** ``

### instantiate

```java
public FloatArgumentType instantiate(CommandBuildContext p_235533_)
```

**Parameters:**

- `p_235533_` (`CommandBuildContext`)

**Returns:** `public FloatArgumentType`

### type

```java
public ArgumentTypeInfo<FloatArgumentType, ?> type()
```

**Returns:** `ArgumentTypeInfo<FloatArgumentType, ?>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Template` | class |  |
