# BlockStateModelHooks

**Package:** `net.neoforged.neoforge.client.model.block`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@ApiStatus`

## Methods

### init

```java
public static void init()
```

**Returns:** `public static void`

### makeSingleModelCodec

```java
public static MapCodec<Either<CustomUnbakedBlockStateModel, SingleVariant.Unbaked>> makeSingleModelCodec()
```

**Returns:** `public static MapCodec<Either<CustomUnbakedBlockStateModel, SingleVariant.Unbaked>>`

### makeElementCodec

```java
public static Codec<Weighted<Either<CustomUnbakedBlockStateModel, SingleVariant.Unbaked>>> makeElementCodec()
```

**Returns:** `public static Codec<Weighted<Either<CustomUnbakedBlockStateModel, SingleVariant.Unbaked>>>`

### makeDefinitionCodec

```java
public static Codec<BlockStateModelDispatcher> makeDefinitionCodec()
```

**Returns:** `public static Codec<BlockStateModelDispatcher>`

### packDefinition

```java
private static BlockStateModelDispatcher packDefinition(Either<CustomBlockModelDefinition, BlockStateModelDispatcher> definition)
```

**Parameters:**

- `definition` (`Either<CustomBlockModelDefinition, BlockStateModelDispatcher>`)

**Returns:** `private static BlockStateModelDispatcher`

### unpackDefinition

```java
private static Either<CustomBlockModelDefinition, BlockStateModelDispatcher> unpackDefinition(BlockStateModelDispatcher definition)
```

**Parameters:**

- `definition` (`BlockStateModelDispatcher`)

**Returns:** `private static Either<CustomBlockModelDefinition, BlockStateModelDispatcher>`

### BlockStateModelHooks

```java
private BlockStateModelHooks()
```

**Returns:** `private`
