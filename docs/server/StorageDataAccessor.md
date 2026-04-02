# StorageDataAccessor

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
public DataAccessor access(CommandContext<CommandSourceStack> p_139570_)
```

**Parameters:**

- `p_139570_` (`CommandContext<CommandSourceStack>`)

**Returns:** `DataAccessor`

### wrap

```java
public ArgumentBuilder<CommandSourceStack, ?> wrap(ArgumentBuilder<CommandSourceStack, ?> p_139567_, Function<ArgumentBuilder<CommandSourceStack, ?>, ArgumentBuilder<CommandSourceStack, ?>> p_139568_)
```

**Parameters:**

- `p_139567_` (`ArgumentBuilder<CommandSourceStack, ?>`)
- `p_139568_` (`Function<ArgumentBuilder<CommandSourceStack, ?>, ArgumentBuilder<CommandSourceStack, ?>>`)

**Returns:** `ArgumentBuilder<CommandSourceStack, ?>`

### getGlobalTags

```java
static CommandStorage getGlobalTags(CommandContext<CommandSourceStack> p_139561_)
```

**Parameters:**

- `p_139561_` (`CommandContext<CommandSourceStack>`)

**Returns:** `static CommandStorage`

### StorageDataAccessor

```java
 StorageDataAccessor(CommandStorage p_139537_, ResourceLocation p_139538_)
```

**Parameters:**

- `p_139537_` (`CommandStorage`)
- `p_139538_` (`ResourceLocation`)

**Returns:** ``

### setData

```java
public void setData(CompoundTag p_139556_)
```

**Parameters:**

- `p_139556_` (`CompoundTag`)

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
public Component getPrintSuccess(Tag p_139558_)
```

**Parameters:**

- `p_139558_` (`Tag`)

**Returns:** `Component`

### getPrintSuccess

```java
public Component getPrintSuccess(NbtPathArgument.NbtPath p_139550_, double p_139551_, int p_139552_)
```

**Parameters:**

- `p_139550_` (`NbtPathArgument.NbtPath`)
- `p_139551_` (`double`)
- `p_139552_` (`int`)

**Returns:** `Component`
