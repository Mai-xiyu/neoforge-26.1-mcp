# ExpirableValue

**Package:** `net.minecraft.world.entity.ai.memory`
**Type:** class<T>

## Methods

### ExpirableValue

```java
public ExpirableValue(T p_26299_, long p_26300_)
```

**Parameters:**

- `p_26299_` (`T`)
- `p_26300_` (`long`)

**Returns:** `public`

### tick

```java
public void tick()
```

**Returns:** `public void`

### of

```java
<T> public static <T> ExpirableValue<T> of(T p_26310_)
```

**Parameters:**

- `p_26310_` (`T`)

**Returns:** `public static <T> ExpirableValue<T>`

### of

```java
<T> public static <T> ExpirableValue<T> of(T p_26312_, long p_26313_)
```

**Parameters:**

- `p_26312_` (`T`)
- `p_26313_` (`long`)

**Returns:** `public static <T> ExpirableValue<T>`

### getTimeToLive

```java
public long getTimeToLive()
```

**Returns:** `public long`

### getValue

```java
public T getValue()
```

**Returns:** `public T`

### hasExpired

```java
public boolean hasExpired()
```

**Returns:** `public boolean`

### codec

```java
<= 0L;
    }

    @Override
    public String toString() {
        return this.value + (this.canExpire() ? " (ttl: " + this.timeToLive + ")" : "");
    }

    @VisibleForDebug
    public boolean canExpire() {
        return this.timeToLive != Long.MAX_VALUE;
    }

    public static <T> Codec<ExpirableValue<T>> codec(Codec<T> p_26305_)
```

**Parameters:**

- `p_26305_` (`Codec<T>`)

**Returns:** `Codec<ExpirableValue<T>>`
