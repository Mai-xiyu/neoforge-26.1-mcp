# SortedProperties

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class
**Extends:** `Properties`

## Description

An Implementation of Properties that is sorted when iterating.
Made because i got tired of seeing config files written in random orders.
This is implemented very basically, and thus is not a speedy system.
This is not recommended for used in high traffic areas, and is mainly intended for writing to disc.

## Methods

### entrySet

```java
public Set<Map.Entry<Object, Object>> entrySet()
```

**Returns:** `Set<Map.Entry<Object, Object>>`

### keySet

```java
public Set<Object> keySet()
```

**Returns:** `Set<Object>`

### keys

```java
public synchronized Enumeration<Object> keys()
```

**Returns:** `Enumeration<Object>`

### store

```java
public static void store(Properties props, Writer stream, String comment)
```

**Parameters:**

- `props` (`Properties`)
- `stream` (`Writer`)
- `comment` (`String`)

**Returns:** `public static void`
