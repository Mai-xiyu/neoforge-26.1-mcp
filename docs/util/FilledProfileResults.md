# FilledProfileResults

**Package:** `net.minecraft.util.profiling`
**Type:** class
**Implements:** `ProfileResults`

## Methods

### getDuration

```java
public long getDuration()
```

**Returns:** `long`

### getMaxDuration

```java
public long getMaxDuration()
```

**Returns:** `long`

### getCount

```java
public long getCount()
```

**Returns:** `long`

### getCounters

```java
public Object2LongMap<String> getCounters()
```

**Returns:** `Object2LongMap<String>`

### FilledProfileResults

```java
public FilledProfileResults(Map<String, ? extends ProfilerPathEntry> p_18464_, long p_18465_, int p_18466_, long p_18467_, int p_18468_)
```

**Parameters:**

- `p_18464_` (`Map<String, ? extends ProfilerPathEntry>`)
- `p_18465_` (`long`)
- `p_18466_` (`int`)
- `p_18467_` (`long`)
- `p_18468_` (`int`)

**Returns:** `public`

### getEntry

```java
private ProfilerPathEntry getEntry(String p_18526_)
```

**Parameters:**

- `p_18526_` (`String`)

**Returns:** `private ProfilerPathEntry`

### getTimes

```java
public List<ResultField> getTimes(String p_18493_)
```

**Parameters:**

- `p_18493_` (`String`)

**Returns:** `List<ResultField>`

### isDirectChild

```java
private static boolean isDirectChild(String p_18495_, String p_18496_)
```

**Parameters:**

- `p_18495_` (`String`)
- `p_18496_` (`String`)

**Returns:** `private static boolean`

### getCounterValues

```java
private Map<String, FilledProfileResults.CounterCollector> getCounterValues()
```

**Returns:** `private Map<String, FilledProfileResults.CounterCollector>`

### getStartTimeNano

```java
public long getStartTimeNano()
```

**Returns:** `long`

### getStartTimeTicks

```java
public int getStartTimeTicks()
```

**Returns:** `int`

### getEndTimeNano

```java
public long getEndTimeNano()
```

**Returns:** `long`

### getEndTimeTicks

```java
public int getEndTimeTicks()
```

**Returns:** `int`

### saveResults

```java
public boolean saveResults(Path p_145940_)
```

**Parameters:**

- `p_145940_` (`Path`)

**Returns:** `boolean`

### getProfilerResults

```java
protected String getProfilerResults(long p_18486_, int p_18487_)
```

**Parameters:**

- `p_18486_` (`long`)
- `p_18487_` (`int`)

**Returns:** `protected String`

### getProfilerResults

```java
public String getProfilerResults()
```

**Returns:** `String`

### indentLine

```java
private static StringBuilder indentLine(StringBuilder p_18498_, int p_18499_)
```

**Parameters:**

- `p_18498_` (`StringBuilder`)
- `p_18499_` (`int`)

**Returns:** `private static StringBuilder`

### appendProfilerResults

```java
private void appendProfilerResults(int p_18482_, String p_18483_, StringBuilder p_18484_)
```

**Parameters:**

- `p_18482_` (`int`)
- `p_18483_` (`String`)
- `p_18484_` (`StringBuilder`)

**Returns:** `private void`

### appendCounterResults

```java
private void appendCounterResults(int p_18476_, String p_18477_, FilledProfileResults.CounterCollector p_18478_, int p_18479_, StringBuilder p_18480_)
```

**Parameters:**

- `p_18476_` (`int`)
- `p_18477_` (`String`)
- `p_18478_` (`FilledProfileResults.CounterCollector`)
- `p_18479_` (`int`)
- `p_18480_` (`StringBuilder`)

**Returns:** `private void`

### appendCounters

```java
private void appendCounters(Map<String, FilledProfileResults.CounterCollector> p_18515_, StringBuilder p_18516_, int p_18517_)
```

**Parameters:**

- `p_18515_` (`Map<String, FilledProfileResults.CounterCollector>`)
- `p_18516_` (`StringBuilder`)
- `p_18517_` (`int`)

**Returns:** `private void`

### getTickDuration

```java
public int getTickDuration()
```

**Returns:** `int`

### addValue

```java
public void addValue(Iterator<String> p_18548_, long p_18549_)
```

**Parameters:**

- `p_18548_` (`Iterator<String>`)
- `p_18549_` (`long`)

**Returns:** `public void`
