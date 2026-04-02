# TextFilter

**Package:** `net.minecraft.server.network`
**Type:** interface
**Side:** 🖧 Server

## Methods

### join

```java
public void join()
```

### leave

```java
public void leave()
```

### processStreamMessage

```java
public CompletableFuture<FilteredText> processStreamMessage(String p_143708_)
```

**Parameters:**

- `p_143708_` (`String`)

**Returns:** `CompletableFuture<FilteredText>`

### processMessageBundle

```java
public CompletableFuture<List<FilteredText>> processMessageBundle(List<String> p_143710_)
```

**Parameters:**

- `p_143710_` (`List<String>`)

**Returns:** `CompletableFuture<List<FilteredText>>`

### join

```java
void join()
```

### leave

```java
void leave()
```

### processStreamMessage

```java
CompletableFuture<FilteredText> processStreamMessage(String p_10096_)
```

**Parameters:**

- `p_10096_` (`String`)

**Returns:** `CompletableFuture<FilteredText>`

### processMessageBundle

```java
CompletableFuture<List<FilteredText>> processMessageBundle(List<String> p_10097_)
```

**Parameters:**

- `p_10097_` (`List<String>`)

**Returns:** `CompletableFuture<List<FilteredText>>`
