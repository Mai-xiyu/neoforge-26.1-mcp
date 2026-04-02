# BlockDataAccessor

**Package:** `net.minecraft.server.commands.data`
**Type:** class
**Implements:** `DataAccessor`
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PROVIDER` | `Function<String, DataCommands.DataProvider>` |  |

## Methods

### access

```java
public DataAccessor access(CommandContext<CommandSourceStack> p_139319_)
```

**Parameters:**

- `p_139319_` (`CommandContext<CommandSourceStack>`)

**Returns:** `DataAccessor`

### BlockDataAccessor

```java
return new BlockDataAccessor()
```

**Returns:** `return new`

### wrap

```java
public ArgumentBuilder<CommandSourceStack, ?> wrap(ArgumentBuilder<CommandSourceStack, ?> p_139316_, Function<ArgumentBuilder<CommandSourceStack, ?>, ArgumentBuilder<CommandSourceStack, ?>> p_139317_)
```

**Parameters:**

- `p_139316_` (`ArgumentBuilder<CommandSourceStack, ?>`)
- `p_139317_` (`Function<ArgumentBuilder<CommandSourceStack, ?>, ArgumentBuilder<CommandSourceStack, ?>>`)

**Returns:** `ArgumentBuilder<CommandSourceStack, ?>`

### BlockDataAccessor

```java
public BlockDataAccessor(BlockEntity p_139297_, BlockPos p_139298_)
```

**Parameters:**

- `p_139297_` (`BlockEntity`)
- `p_139298_` (`BlockPos`)

**Returns:** `public`

### setData

```java
public void setData(CompoundTag p_139307_)
```

**Parameters:**

- `p_139307_` (`CompoundTag`)

### getData

```java
public CompoundTag getData()
```

**Returns:** `CompoundTag`

### getModifiedSuccess

```java
public Component getModifiedSuccess()
```

**Returns:** `Component`

### getPrintSuccess

```java
public Component getPrintSuccess(Tag p_139309_)
```

**Parameters:**

- `p_139309_` (`Tag`)

**Returns:** `Component`

### getPrintSuccess

```java
public Component getPrintSuccess(NbtPathArgument.NbtPath p_139301_, double p_139302_, int p_139303_)
```

**Parameters:**

- `p_139301_` (`NbtPathArgument.NbtPath`)
- `p_139302_` (`double`)
- `p_139303_` (`int`)

**Returns:** `Component`
