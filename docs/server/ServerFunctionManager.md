# ServerFunctionManager

**Package:** `net.minecraft.server`
**Type:** class
**Side:** 🖧 Server

## Methods

### ServerFunctionManager

```java
public ServerFunctionManager(MinecraftServer p_136110_, ServerFunctionLibrary p_136111_)
```

**Parameters:**

- `p_136110_` (`MinecraftServer`)
- `p_136111_` (`ServerFunctionLibrary`)

**Returns:** `public`

### getDispatcher

```java
public CommandDispatcher<CommandSourceStack> getDispatcher()
```

**Returns:** `public CommandDispatcher<CommandSourceStack>`

### tick

```java
public void tick()
```

**Returns:** `public void`

### executeTagFunctions

```java
private void executeTagFunctions(Collection<CommandFunction<CommandSourceStack>> p_136116_, ResourceLocation p_136117_)
```

**Parameters:**

- `p_136116_` (`Collection<CommandFunction<CommandSourceStack>>`)
- `p_136117_` (`ResourceLocation`)

**Returns:** `private void`

### execute

```java
public void execute(CommandFunction<CommandSourceStack> p_305881_, CommandSourceStack p_136114_)
```

**Parameters:**

- `p_305881_` (`CommandFunction<CommandSourceStack>`)
- `p_136114_` (`CommandSourceStack`)

**Returns:** `public void`

### replaceLibrary

```java
public void replaceLibrary(ServerFunctionLibrary p_136121_)
```

**Parameters:**

- `p_136121_` (`ServerFunctionLibrary`)

**Returns:** `public void`

### postReload

```java
private void postReload(ServerFunctionLibrary p_136126_)
```

**Parameters:**

- `p_136126_` (`ServerFunctionLibrary`)

**Returns:** `private void`

### getGameLoopSender

```java
public CommandSourceStack getGameLoopSender()
```

**Returns:** `public CommandSourceStack`

### get

```java
public Optional<CommandFunction<CommandSourceStack>> get(ResourceLocation p_136119_)
```

**Parameters:**

- `p_136119_` (`ResourceLocation`)

**Returns:** `public Optional<CommandFunction<CommandSourceStack>>`

### getTag

```java
public Collection<CommandFunction<CommandSourceStack>> getTag(ResourceLocation p_214332_)
```

**Parameters:**

- `p_214332_` (`ResourceLocation`)

**Returns:** `public Collection<CommandFunction<CommandSourceStack>>`

### getFunctionNames

```java
public Iterable<ResourceLocation> getFunctionNames()
```

**Returns:** `public Iterable<ResourceLocation>`

### getTagNames

```java
public Iterable<ResourceLocation> getTagNames()
```

**Returns:** `public Iterable<ResourceLocation>`
