# MacroFunction

**Package:** `net.minecraft.commands.functions`
**Type:** class<T extends ExecutionCommandSource<T>> implements CommandFunction<T>

## Methods

### MacroFunction

```java
public MacroFunction(ResourceLocation p_305933_, List<MacroFunction.Entry<T>> p_305814_, List<String> p_306148_)
```

**Parameters:**

- `p_305933_` (`ResourceLocation`)
- `p_305814_` (`List<MacroFunction.Entry<T>>`)
- `p_306148_` (`List<String>`)

**Returns:** `public`

### id

```java
public ResourceLocation id()
```

**Returns:** `ResourceLocation`

### instantiate

```java
public InstantiatedFunction<T> instantiate(CompoundTag p_305810_, CommandDispatcher<T> p_306149_)
```

**Parameters:**

- `p_305810_` (`CompoundTag`)
- `p_306149_` (`CommandDispatcher<T>`)

**Returns:** `InstantiatedFunction<T>`

### stringify

```java
private static String stringify(Tag p_305920_)
```

**Parameters:**

- `p_305920_` (`Tag`)

**Returns:** `private static String`

### lookupValues

```java
private static void lookupValues(List<String> p_305843_, IntList p_305967_, List<String> p_305797_)
```

**Parameters:**

- `p_305843_` (`List<String>`)
- `p_305967_` (`IntList`)
- `p_305797_` (`List<String>`)

**Returns:** `private static void`

### substituteAndParse

```java
private InstantiatedFunction<T> substituteAndParse(List<String> p_306226_, List<String> p_306024_, CommandDispatcher<T> p_306281_)
```

**Parameters:**

- `p_306226_` (`List<String>`)
- `p_306024_` (`List<String>`)
- `p_306281_` (`CommandDispatcher<T>`)

**Returns:** `private InstantiatedFunction<T>`

### parameters

```java
IntList parameters()
```

**Returns:** `IntList`

### instantiate

```java
UnboundEntryAction<T> instantiate(List<String> p_305908_, CommandDispatcher<T> p_305826_, ResourceLocation p_305778_)
```

**Parameters:**

- `p_305908_` (`List<String>`)
- `p_305826_` (`CommandDispatcher<T>`)
- `p_305778_` (`ResourceLocation`)

**Returns:** `UnboundEntryAction<T>`

### MacroEntry

```java
public MacroEntry(StringTemplate p_306131_, IntList p_306124_, T p_316385_)
```

**Parameters:**

- `p_306131_` (`StringTemplate`)
- `p_306124_` (`IntList`)
- `p_316385_` (`T`)

**Returns:** `public`

### parameters

```java
public IntList parameters()
```

**Returns:** `IntList`

### instantiate

```java
public UnboundEntryAction<T> instantiate(List<String> p_306061_, CommandDispatcher<T> p_306059_, ResourceLocation p_306158_)
```

**Parameters:**

- `p_306061_` (`List<String>`)
- `p_306059_` (`CommandDispatcher<T>`)
- `p_306158_` (`ResourceLocation`)

**Returns:** `UnboundEntryAction<T>`

### PlainTextEntry

```java
public PlainTextEntry(UnboundEntryAction<T> p_306163_)
```

**Parameters:**

- `p_306163_` (`UnboundEntryAction<T>`)

**Returns:** `public`

### parameters

```java
public IntList parameters()
```

**Returns:** `IntList`

### instantiate

```java
public UnboundEntryAction<T> instantiate(List<String> p_306111_, CommandDispatcher<T> p_305941_, ResourceLocation p_305903_)
```

**Parameters:**

- `p_306111_` (`List<String>`)
- `p_305941_` (`CommandDispatcher<T>`)
- `p_305903_` (`ResourceLocation`)

**Returns:** `UnboundEntryAction<T>`
