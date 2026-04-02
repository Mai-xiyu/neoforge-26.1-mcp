# TraceCallbacks

**Package:** `net.minecraft.commands.execution`
**Type:** interface
**Extends:** `AutoCloseable`

## Methods

### onCommand

```java
void onCommand(int p_306090_, String p_306150_)
```

**Parameters:**

- `p_306090_` (`int`)
- `p_306150_` (`String`)

### onReturn

```java
void onReturn(int p_305827_, String p_306254_, int p_306051_)
```

**Parameters:**

- `p_305827_` (`int`)
- `p_306254_` (`String`)
- `p_306051_` (`int`)

### onError

```java
void onError(String p_306008_)
```

**Parameters:**

- `p_306008_` (`String`)

### onCall

```java
void onCall(int p_306072_, ResourceLocation p_306313_, int p_306250_)
```

**Parameters:**

- `p_306072_` (`int`)
- `p_306313_` (`ResourceLocation`)
- `p_306250_` (`int`)

### close

```java
void close()
```
