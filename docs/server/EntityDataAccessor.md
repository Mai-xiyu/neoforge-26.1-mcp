# EntityDataAccessor

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
public DataAccessor access(CommandContext<CommandSourceStack> p_139530_)
```

**Parameters:**

- `p_139530_` (`CommandContext<CommandSourceStack>`)

**Returns:** `DataAccessor`

### wrap

```java
public ArgumentBuilder<CommandSourceStack, ?> wrap(ArgumentBuilder<CommandSourceStack, ?> p_139527_, Function<ArgumentBuilder<CommandSourceStack, ?>, ArgumentBuilder<CommandSourceStack, ?>> p_139528_)
```

**Parameters:**

- `p_139527_` (`ArgumentBuilder<CommandSourceStack, ?>`)
- `p_139528_` (`Function<ArgumentBuilder<CommandSourceStack, ?>, ArgumentBuilder<CommandSourceStack, ?>>`)

**Returns:** `ArgumentBuilder<CommandSourceStack, ?>`

### EntityDataAccessor

```java
public EntityDataAccessor(Entity p_139510_)
```

**Parameters:**

- `p_139510_` (`Entity`)

**Returns:** `public`

### setData

```java
public void setData(CompoundTag p_139519_)
```

**Parameters:**

- `p_139519_` (`CompoundTag`)

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
public Component getPrintSuccess(Tag p_139521_)
```

**Parameters:**

- `p_139521_` (`Tag`)

**Returns:** `Component`

### getPrintSuccess

```java
public Component getPrintSuccess(NbtPathArgument.NbtPath p_139513_, double p_139514_, int p_139515_)
```

**Parameters:**

- `p_139513_` (`NbtPathArgument.NbtPath`)
- `p_139514_` (`double`)
- `p_139515_` (`int`)

**Returns:** `Component`
