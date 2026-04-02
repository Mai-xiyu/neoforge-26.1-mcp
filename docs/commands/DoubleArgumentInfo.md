# DoubleArgumentInfo

**Package:** `net.minecraft.commands.synchronization.brigadier`
**Type:** class
**Implements:** `ArgumentTypeInfo<DoubleArgumentType`, `DoubleArgumentInfo.Template>`

## Methods

### serializeToNetwork

```java
public void serializeToNetwork(DoubleArgumentInfo.Template p_235485_, FriendlyByteBuf p_235486_)
```

**Parameters:**

- `p_235485_` (`DoubleArgumentInfo.Template`)
- `p_235486_` (`FriendlyByteBuf`)

**Returns:** `public void`

### deserializeFromNetwork

```java
public DoubleArgumentInfo.Template deserializeFromNetwork(FriendlyByteBuf p_235488_)
```

**Parameters:**

- `p_235488_` (`FriendlyByteBuf`)

**Returns:** `public DoubleArgumentInfo.Template`

### serializeToJson

```java
public void serializeToJson(DoubleArgumentInfo.Template p_235482_, JsonObject p_235483_)
```

**Parameters:**

- `p_235482_` (`DoubleArgumentInfo.Template`)
- `p_235483_` (`JsonObject`)

**Returns:** `public void`

### unpack

```java
public DoubleArgumentInfo.Template unpack(DoubleArgumentType p_235474_)
```

**Parameters:**

- `p_235474_` (`DoubleArgumentType`)

**Returns:** `public DoubleArgumentInfo.Template`

### Template

```java
 Template(double p_235496_, double p_235497_)
```

**Parameters:**

- `p_235496_` (`double`)
- `p_235497_` (`double`)

**Returns:** ``

### instantiate

```java
public DoubleArgumentType instantiate(CommandBuildContext p_235500_)
```

**Parameters:**

- `p_235500_` (`CommandBuildContext`)

**Returns:** `public DoubleArgumentType`

### type

```java
public ArgumentTypeInfo<DoubleArgumentType, ?> type()
```

**Returns:** `ArgumentTypeInfo<DoubleArgumentType, ?>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Template` | class |  |
