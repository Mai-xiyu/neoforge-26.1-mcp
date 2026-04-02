# IntegerArgumentInfo

**Package:** `net.minecraft.commands.synchronization.brigadier`
**Type:** class
**Implements:** `ArgumentTypeInfo<IntegerArgumentType`, `IntegerArgumentInfo.Template>`

## Methods

### serializeToNetwork

```java
public void serializeToNetwork(IntegerArgumentInfo.Template p_235551_, FriendlyByteBuf p_235552_)
```

**Parameters:**

- `p_235551_` (`IntegerArgumentInfo.Template`)
- `p_235552_` (`FriendlyByteBuf`)

**Returns:** `public void`

### deserializeFromNetwork

```java
public IntegerArgumentInfo.Template deserializeFromNetwork(FriendlyByteBuf p_235554_)
```

**Parameters:**

- `p_235554_` (`FriendlyByteBuf`)

**Returns:** `public IntegerArgumentInfo.Template`

### serializeToJson

```java
public void serializeToJson(IntegerArgumentInfo.Template p_235548_, JsonObject p_235549_)
```

**Parameters:**

- `p_235548_` (`IntegerArgumentInfo.Template`)
- `p_235549_` (`JsonObject`)

**Returns:** `public void`

### unpack

```java
public IntegerArgumentInfo.Template unpack(IntegerArgumentType p_235540_)
```

**Parameters:**

- `p_235540_` (`IntegerArgumentType`)

**Returns:** `public IntegerArgumentInfo.Template`

### Template

```java
 Template(int p_235562_, int p_235563_)
```

**Parameters:**

- `p_235562_` (`int`)
- `p_235563_` (`int`)

**Returns:** ``

### instantiate

```java
public IntegerArgumentType instantiate(CommandBuildContext p_235566_)
```

**Parameters:**

- `p_235566_` (`CommandBuildContext`)

**Returns:** `public IntegerArgumentType`

### type

```java
public ArgumentTypeInfo<IntegerArgumentType, ?> type()
```

**Returns:** `ArgumentTypeInfo<IntegerArgumentType, ?>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Template` | class |  |
