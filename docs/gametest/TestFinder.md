# TestFinder

**Package:** `net.minecraft.gametest.framework`
**Type:** class<T>
**Implements:** `StructureBlockPosFinder`, `TestFunctionFinder`

## Methods

### findStructureBlockPos

```java
public Stream<BlockPos> findStructureBlockPos()
```

**Returns:** `Stream<BlockPos>`

### TestFinder

```java
 TestFinder(CommandSourceStack p_320004_, Function<TestFinder<T>, T> p_320489_, TestFunctionFinder p_320808_, StructureBlockPosFinder p_320448_)
```

**Parameters:**

- `p_320004_` (`CommandSourceStack`)
- `p_320489_` (`Function<TestFinder<T>, T>`)
- `p_320808_` (`TestFunctionFinder`)
- `p_320448_` (`StructureBlockPosFinder`)

**Returns:** ``

### get

```java
T get()
```

**Returns:** `T`

### source

```java
public CommandSourceStack source()
```

**Returns:** `public CommandSourceStack`

### findTestFunctions

```java
public Stream<TestFunction> findTestFunctions()
```

**Returns:** `Stream<TestFunction>`

### Builder

```java
public Builder(Function<TestFinder<T>, T> p_320939_)
```

**Parameters:**

- `p_320939_` (`Function<TestFinder<T>, T>`)

**Returns:** `public`

### Builder

```java
private Builder(Function<TestFinder<T>, T> p_331181_, UnaryOperator<Supplier<Stream<TestFunction>>> p_331301_, UnaryOperator<Supplier<Stream<BlockPos>>> p_331612_)
```

**Parameters:**

- `p_331181_` (`Function<TestFinder<T>, T>`)
- `p_331301_` (`UnaryOperator<Supplier<Stream<TestFunction>>>`)
- `p_331612_` (`UnaryOperator<Supplier<Stream<BlockPos>>>`)

**Returns:** `private`

### createMultipleCopies

```java
public TestFinder.Builder<T> createMultipleCopies(int p_330482_)
```

**Parameters:**

- `p_330482_` (`int`)

**Returns:** `public TestFinder.Builder<T>`

### createCopies

```java
<Q> private static <Q> UnaryOperator<Supplier<Stream<Q>>> createCopies(int p_330804_)
```

**Parameters:**

- `p_330804_` (`int`)

**Returns:** `private static <Q> UnaryOperator<Supplier<Stream<Q>>>`

### build

```java
private T build(CommandSourceStack p_330622_, TestFunctionFinder p_330437_, StructureBlockPosFinder p_331860_)
```

**Parameters:**

- `p_330622_` (`CommandSourceStack`)
- `p_330437_` (`TestFunctionFinder`)
- `p_331860_` (`StructureBlockPosFinder`)

**Returns:** `private T`

### radius

```java
public T radius(CommandContext<CommandSourceStack> p_320307_, int p_320811_)
```

**Parameters:**

- `p_320307_` (`CommandContext<CommandSourceStack>`)
- `p_320811_` (`int`)

**Returns:** `public T`

### nearest

```java
public T nearest(CommandContext<CommandSourceStack> p_320944_)
```

**Parameters:**

- `p_320944_` (`CommandContext<CommandSourceStack>`)

**Returns:** `public T`

### allNearby

```java
public T allNearby(CommandContext<CommandSourceStack> p_320216_)
```

**Parameters:**

- `p_320216_` (`CommandContext<CommandSourceStack>`)

**Returns:** `public T`

### lookedAt

```java
public T lookedAt(CommandContext<CommandSourceStack> p_320178_)
```

**Parameters:**

- `p_320178_` (`CommandContext<CommandSourceStack>`)

**Returns:** `public T`

### allTests

```java
public T allTests(CommandContext<CommandSourceStack> p_320902_)
```

**Parameters:**

- `p_320902_` (`CommandContext<CommandSourceStack>`)

**Returns:** `public T`

### allTestsInClass

```java
public T allTestsInClass(CommandContext<CommandSourceStack> p_320256_, String p_320231_)
```

**Parameters:**

- `p_320256_` (`CommandContext<CommandSourceStack>`)
- `p_320231_` (`String`)

**Returns:** `public T`

### failedTests

```java
public T failedTests(CommandContext<CommandSourceStack> p_320960_, boolean p_320352_)
```

**Parameters:**

- `p_320960_` (`CommandContext<CommandSourceStack>`)
- `p_320352_` (`boolean`)

**Returns:** `public T`

### byArgument

```java
public T byArgument(CommandContext<CommandSourceStack> p_320475_, String p_320707_)
```

**Parameters:**

- `p_320475_` (`CommandContext<CommandSourceStack>`)
- `p_320707_` (`String`)

**Returns:** `public T`

### locateByName

```java
public T locateByName(CommandContext<CommandSourceStack> p_341208_, String p_341401_)
```

**Parameters:**

- `p_341208_` (`CommandContext<CommandSourceStack>`)
- `p_341401_` (`String`)

**Returns:** `public T`

### failedTests

```java
public T failedTests(CommandContext<CommandSourceStack> p_320220_)
```

**Parameters:**

- `p_320220_` (`CommandContext<CommandSourceStack>`)

**Returns:** `public T`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
