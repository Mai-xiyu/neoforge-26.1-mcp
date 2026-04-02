# GossipContainer

**Package:** `net.minecraft.world.entity.ai.gossip`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DISCARD_THRESHOLD` | `int` |  |

## Methods

### getGossipEntries

```java
public Map<UUID, Object2IntMap<GossipType>> getGossipEntries()
```

**Returns:** `Map<UUID, Object2IntMap<GossipType>>`

### decay

```java
public void decay()
```

**Returns:** `public void`

### unpack

```java
private Stream<GossipContainer.GossipEntry> unpack()
```

**Returns:** `private Stream<GossipContainer.GossipEntry>`

### selectGossipsForTransfer

```java
private Collection<GossipContainer.GossipEntry> selectGossipsForTransfer(RandomSource p_217760_, int p_217761_)
```

**Parameters:**

- `p_217760_` (`RandomSource`)
- `p_217761_` (`int`)

**Returns:** `private Collection<GossipContainer.GossipEntry>`

### getOrCreate

```java
private GossipContainer.EntityGossips getOrCreate(UUID p_26190_)
```

**Parameters:**

- `p_26190_` (`UUID`)

**Returns:** `private GossipContainer.EntityGossips`

### transferFrom

```java
public void transferFrom(GossipContainer p_217763_, RandomSource p_217764_, int p_217765_)
```

**Parameters:**

- `p_217763_` (`GossipContainer`)
- `p_217764_` (`RandomSource`)
- `p_217765_` (`int`)

**Returns:** `public void`

### getReputation

```java
public int getReputation(UUID p_26196_, Predicate<GossipType> p_26197_)
```

**Parameters:**

- `p_26196_` (`UUID`)
- `p_26197_` (`Predicate<GossipType>`)

**Returns:** `public int`

### getCountForType

```java
public long getCountForType(GossipType p_148163_, DoublePredicate p_148164_)
```

**Parameters:**

- `p_148163_` (`GossipType`)
- `p_148164_` (`DoublePredicate`)

**Returns:** `public long`

### add

```java
public void add(UUID p_26192_, GossipType p_26193_, int p_26194_)
```

**Parameters:**

- `p_26192_` (`UUID`)
- `p_26193_` (`GossipType`)
- `p_26194_` (`int`)

**Returns:** `public void`

### remove

```java
public void remove(UUID p_148176_, GossipType p_148177_, int p_148178_)
```

**Parameters:**

- `p_148176_` (`UUID`)
- `p_148177_` (`GossipType`)
- `p_148178_` (`int`)

**Returns:** `public void`

### remove

```java
public void remove(UUID p_148169_, GossipType p_148170_)
```

**Parameters:**

- `p_148169_` (`UUID`)
- `p_148170_` (`GossipType`)

**Returns:** `public void`

### remove

```java
public void remove(GossipType p_148161_)
```

**Parameters:**

- `p_148161_` (`GossipType`)

**Returns:** `public void`

### store

```java
<T> public <T> T store(DynamicOps<T> p_262915_)
```

**Parameters:**

- `p_262915_` (`DynamicOps<T>`)

**Returns:** `public <T> T`

### update

```java
public void update(Dynamic<?> p_26178_)
```

**Parameters:**

- `p_26178_` (`Dynamic<?>`)

**Returns:** `public void`

### mergeValuesForTransfer

```java
private static int mergeValuesForTransfer(int p_26159_, int p_26160_)
```

**Parameters:**

- `p_26159_` (`int`)
- `p_26160_` (`int`)

**Returns:** `private static int`

### mergeValuesForAddition

```java
private int mergeValuesForAddition(GossipType p_26168_, int p_26169_, int p_26170_)
```

**Parameters:**

- `p_26168_` (`GossipType`)
- `p_26169_` (`int`)
- `p_26170_` (`int`)

**Returns:** `private int`

### weightedValue

```java
public int weightedValue(Predicate<GossipType> p_26221_)
```

**Parameters:**

- `p_26221_` (`Predicate<GossipType>`)

**Returns:** `public int`

### unpack

```java
public Stream<GossipContainer.GossipEntry> unpack(UUID p_26216_)
```

**Parameters:**

- `p_26216_` (`UUID`)

**Returns:** `public Stream<GossipContainer.GossipEntry>`

### decay

```java
public void decay()
```

**Returns:** `public void`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### makeSureValueIsntTooLowOrTooHigh

```java
public void makeSureValueIsntTooLowOrTooHigh(GossipType p_26212_)
```

**Parameters:**

- `p_26212_` (`GossipType`)

**Returns:** `public void`

### remove

```java
public void remove(GossipType p_26227_)
```

**Parameters:**

- `p_26227_` (`GossipType`)

**Returns:** `public void`

### GossipEntry

```java
static record GossipEntry(UUID target, GossipType type, int value)
```

**Parameters:**

- `target` (`UUID`)
- `type` (`GossipType`)
- `value` (`int`)

**Returns:** `static record`

### weightedValue

```java
public int weightedValue()
```

**Returns:** `public int`
