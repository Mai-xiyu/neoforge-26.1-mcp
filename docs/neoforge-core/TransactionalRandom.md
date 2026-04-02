# TransactionalRandom

**Package:** `net.neoforged.neoforge.transfer.item`
**Type:** class
**Extends:** `SnapshotJournal<Long>`
**Annotations:** `@ApiStatus`

## Description

A deterministic random source whose internal state is transactional,
ensuring determinism across transactions until one is committed.

## Methods

### createSnapshot

```java
protected Long createSnapshot()
```

**Returns:** `Long`

### revertToSnapshot

```java
protected void revertToSnapshot(Long snapshot)
```

**Parameters:**

- `snapshot` (`Long`)

### nextDouble

```java
public double nextDouble(TransactionContext transaction)
```

**Parameters:**

- `transaction` (`TransactionContext`)

**Returns:** `public double`

### updateSnapshots

```java
 updateSnapshots()
```

**Returns:** ``
