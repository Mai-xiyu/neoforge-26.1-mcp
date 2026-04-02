# SingleTickProfiler

**Package:** `net.minecraft.util.profiling`
**Type:** class

## Methods

### SingleTickProfiler

```java
public SingleTickProfiler(LongSupplier p_145963_, String p_145964_, long p_145965_)
```

**Parameters:**

- `p_145963_` (`LongSupplier`)
- `p_145964_` (`String`)
- `p_145965_` (`long`)

**Returns:** `public`

### startTick

```java
public ProfilerFiller startTick()
```

**Returns:** `public ProfilerFiller`

### endTick

```java
public void endTick()
```

**Returns:** `public void`

### createTickProfiler

```java
public static SingleTickProfiler createTickProfiler(String p_18633_)
```

**Parameters:**

- `p_18633_` (`String`)

**Returns:** `SingleTickProfiler`

### decorateFiller

```java
public static ProfilerFiller decorateFiller(ProfilerFiller p_18630_, SingleTickProfiler p_18631_)
```

**Parameters:**

- `p_18630_` (`ProfilerFiller`)
- `p_18631_` (`SingleTickProfiler`)

**Returns:** `public static ProfilerFiller`
