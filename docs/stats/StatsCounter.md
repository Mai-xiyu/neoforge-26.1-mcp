# StatsCounter

**Package:** `net.minecraft.stats`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `stats` | `Object2IntMap<Stat<?>>` |  |

## Methods

### StatsCounter

```java
public StatsCounter()
```

**Returns:** `public`

### increment

```java
public void increment(Player p_13024_, Stat<?> p_13025_, int p_13026_)
```

**Parameters:**

- `p_13024_` (`Player`)
- `p_13025_` (`Stat<?>`)
- `p_13026_` (`int`)

**Returns:** `public void`

### setValue

```java
public void setValue(Player p_13020_, Stat<?> p_13021_, int p_13022_)
```

**Parameters:**

- `p_13020_` (`Player`)
- `p_13021_` (`Stat<?>`)
- `p_13022_` (`int`)

**Returns:** `public void`

### getValue

```java
<T> public <T> int getValue(StatType<T> p_13018_, T p_13019_)
```

**Parameters:**

- `p_13018_` (`StatType<T>`)
- `p_13019_` (`T`)

**Returns:** `public <T> int`

### getValue

```java
public int getValue(Stat<?> p_13016_)
```

**Parameters:**

- `p_13016_` (`Stat<?>`)

**Returns:** `public int`
