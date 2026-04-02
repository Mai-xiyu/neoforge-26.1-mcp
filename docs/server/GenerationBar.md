# GenerationBar

**Package:** `net.neoforged.neoforge.server.command.generation`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖧 Server

## Description

Special thanks to Jasmine and Gegy for allowing us to use their pregenerator mod as a model to use in NeoForge!
Original code: https://github.com/jaskarth/fabric-chunkpregenerator

## Methods

### GenerationBar

```java
public GenerationBar()
```

**Returns:** `public`

### update

```java
public void update(int ok, int error, int skipped, int total)
```

**Parameters:**

- `ok` (`int`)
- `error` (`int`)
- `skipped` (`int`)
- `total` (`int`)

**Returns:** `public void`

### addPlayer

```java
public void addPlayer(ServerPlayer player)
```

**Parameters:**

- `player` (`ServerPlayer`)

**Returns:** `public void`

### close

```java
public void close()
```
