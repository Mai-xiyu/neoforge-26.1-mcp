# NonOverlappingMerger

**Package:** `net.minecraft.world.phys.shapes`
**Type:** class
**Extends:** `AbstractDoubleList`
**Implements:** `IndexMerger`

## Methods

### NonOverlappingMerger

```java
protected NonOverlappingMerger(DoubleList p_83012_, DoubleList p_83013_, boolean p_83014_)
```

**Parameters:**

- `p_83012_` (`DoubleList`)
- `p_83013_` (`DoubleList`)
- `p_83014_` (`boolean`)

**Returns:** `protected`

### size

```java
public int size()
```

**Returns:** `int`

### forMergedIndexes

```java
public boolean forMergedIndexes(IndexMerger.IndexConsumer p_83017_)
```

**Parameters:**

- `p_83017_` (`IndexMerger.IndexConsumer`)

**Returns:** `boolean`

### forNonSwappedIndexes

```java
private boolean forNonSwappedIndexes(IndexMerger.IndexConsumer p_83024_)
```

**Parameters:**

- `p_83024_` (`IndexMerger.IndexConsumer`)

**Returns:** `private boolean`

### getDouble

```java
public double getDouble(int p_83026_)
```

**Parameters:**

- `p_83026_` (`int`)

**Returns:** `double`

### getList

```java
public DoubleList getList()
```

**Returns:** `DoubleList`
