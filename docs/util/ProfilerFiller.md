# ProfilerFiller

**Package:** `net.minecraft.util.profiling`
**Type:** interface

## Methods

### startTick

```java
void startTick()
```

### endTick

```java
void endTick()
```

### push

```java
void push(String p_18581_)
```

**Parameters:**

- `p_18581_` (`String`)

### push

```java
void push(Supplier<String> p_18582_)
```

**Parameters:**

- `p_18582_` (`Supplier<String>`)

### pop

```java
void pop()
```

### popPush

```java
void popPush(String p_18583_)
```

**Parameters:**

- `p_18583_` (`String`)

### popPush

```java
void popPush(Supplier<String> p_18584_)
```

**Parameters:**

- `p_18584_` (`Supplier<String>`)

### markForCharting

```java
void markForCharting(MetricCategory p_145959_)
```

**Parameters:**

- `p_145959_` (`MetricCategory`)

### incrementCounter

```java
default void incrementCounter(String p_18585_)
```

**Parameters:**

- `p_18585_` (`String`)

**Returns:** `default void`

### incrementCounter

```java
void incrementCounter(String p_185258_, int p_185259_)
```

**Parameters:**

- `p_185258_` (`String`)
- `p_185259_` (`int`)

### incrementCounter

```java
default void incrementCounter(Supplier<String> p_18586_)
```

**Parameters:**

- `p_18586_` (`Supplier<String>`)

**Returns:** `default void`

### incrementCounter

```java
void incrementCounter(Supplier<String> p_185260_, int p_185261_)
```

**Parameters:**

- `p_185260_` (`Supplier<String>`)
- `p_185261_` (`int`)

### tee

```java
static ProfilerFiller tee(ProfilerFiller p_18579_, ProfilerFiller p_18580_)
```

**Parameters:**

- `p_18579_` (`ProfilerFiller`)
- `p_18580_` (`ProfilerFiller`)

**Returns:** `static ProfilerFiller`

### startTick

```java
public void startTick()
```

### endTick

```java
public void endTick()
```

### push

```java
public void push(String p_18594_)
```

**Parameters:**

- `p_18594_` (`String`)

### push

```java
public void push(Supplier<String> p_18596_)
```

**Parameters:**

- `p_18596_` (`Supplier<String>`)

### markForCharting

```java
public void markForCharting(MetricCategory p_145961_)
```

**Parameters:**

- `p_145961_` (`MetricCategory`)

### pop

```java
public void pop()
```

### popPush

```java
public void popPush(String p_18599_)
```

**Parameters:**

- `p_18599_` (`String`)

### popPush

```java
public void popPush(Supplier<String> p_18601_)
```

**Parameters:**

- `p_18601_` (`Supplier<String>`)

### incrementCounter

```java
public void incrementCounter(String p_185263_, int p_185264_)
```

**Parameters:**

- `p_185263_` (`String`)
- `p_185264_` (`int`)

### incrementCounter

```java
public void incrementCounter(Supplier<String> p_185266_, int p_185267_)
```

**Parameters:**

- `p_185266_` (`Supplier<String>`)
- `p_185267_` (`int`)
