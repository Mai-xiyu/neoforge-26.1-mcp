# ServerStatsCounter

**Package:** `net.minecraft.stats`
**Type:** class
**Extends:** `StatsCounter`

## Methods

### ServerStatsCounter

```java
public ServerStatsCounter(MinecraftServer p_12816_, File p_12817_)
```

**Parameters:**

- `p_12816_` (`MinecraftServer`)
- `p_12817_` (`File`)

**Returns:** `public`

### save

```java
public void save()
```

**Returns:** `public void`

### setValue

```java
public void setValue(Player p_12827_, Stat<?> p_12828_, int p_12829_)
```

**Parameters:**

- `p_12827_` (`Player`)
- `p_12828_` (`Stat<?>`)
- `p_12829_` (`int`)

### getDirty

```java
private Set<Stat<?>> getDirty()
```

**Returns:** `private Set<Stat<?>>`

### parseLocal

```java
public void parseLocal(DataFixer p_12833_, String p_12834_)
```

**Parameters:**

- `p_12833_` (`DataFixer`)
- `p_12834_` (`String`)

**Returns:** `public void`

### getStat

```java
<T> private <T> Optional<Stat<T>> getStat(StatType<T> p_12824_, String p_12825_)
```

**Parameters:**

- `p_12824_` (`StatType<T>`)
- `p_12825_` (`String`)

**Returns:** `private <T> Optional<Stat<T>>`

### fromJson

```java
private static CompoundTag fromJson(JsonObject p_12831_)
```

**Parameters:**

- `p_12831_` (`JsonObject`)

**Returns:** `private static CompoundTag`

### toJson

```java
protected String toJson()
```

**Returns:** `protected String`

### getKey

```java
<T> private static <T> ResourceLocation getKey(Stat<T> p_12847_)
```

**Parameters:**

- `p_12847_` (`Stat<T>`)

**Returns:** `private static <T> ResourceLocation`

### markAllDirty

```java
public void markAllDirty()
```

**Returns:** `public void`

### sendStats

```java
public void sendStats(ServerPlayer p_12820_)
```

**Parameters:**

- `p_12820_` (`ServerPlayer`)

**Returns:** `public void`
