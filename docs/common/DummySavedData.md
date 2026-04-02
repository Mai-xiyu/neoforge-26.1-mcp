# DummySavedData

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class
**Extends:** `SavedData`
**Annotations:** `@Deprecated(since = "1.21.1", forRemoval = true)`

## Description

A no-op `SavedData` implementation which does not store data.
@deprecated This type often causes more data corruption than is worth.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DUMMY` | `DummySavedData` |  |

## Methods

### DummySavedData

```java
private DummySavedData()
```

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### save

```java
public CompoundTag save(CompoundTag compound, HolderLookup.Provider provider)
```

**Parameters:**

- `compound` (`CompoundTag`)
- `provider` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### save

```java
public void save(File file, HolderLookup.Provider provider)
```

**Parameters:**

- `file` (`File`)
- `provider` (`HolderLookup.Provider`)
