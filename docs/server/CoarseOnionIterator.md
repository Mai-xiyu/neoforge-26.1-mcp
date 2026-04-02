# CoarseOnionIterator

**Package:** `net.neoforged.neoforge.server.command.generation`
**Type:** class
**Extends:** `AbstractIterator<ChunkPos>`
**Side:** 🖧 Server

## Description

Special thanks to Jasmine and Gegy for allowing us to use their pregenerator mod as a model to use in NeoForge!
Original code: https://github.com/jaskarth/fabric-chunkpregenerator

## Methods

### CoarseOnionIterator

```java
public CoarseOnionIterator(int radius, int cellSize)
```

**Parameters:**

- `radius` (`int`)
- `cellSize` (`int`)

**Returns:** `public`

### computeNext

```java
protected ChunkPos computeNext()
```

**Returns:** `ChunkPos`

### createCellIterator

```java
private CellIterator createCellIterator(ChunkPos pos)
```

**Parameters:**

- `pos` (`ChunkPos`)

**Returns:** `private CellIterator`

### CellIterator

```java
private CellIterator(int x0, int z0, int x1, int z1)
```

**Parameters:**

- `x0` (`int`)
- `z0` (`int`)
- `x1` (`int`)
- `z1` (`int`)

**Returns:** `private`

### hasNext

```java
public boolean hasNext()
```

**Returns:** `boolean`

### next

```java
public ChunkPos next()
```

**Returns:** `ChunkPos`

### NoSuchElementException

```java
throw new NoSuchElementException()
```

**Returns:** `throw new`
