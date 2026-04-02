# FillBiomeCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_NOT_LOADED` | `SimpleCommandExceptionType` |  |

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_261867_, CommandBuildContext p_262155_)
```

**Parameters:**

- `p_261867_` (`CommandDispatcher<CommandSourceStack>`)
- `p_262155_` (`CommandBuildContext`)

**Returns:** `public static void`

### quantize

```java
private static int quantize(int p_261998_)
```

**Parameters:**

- `p_261998_` (`int`)

**Returns:** `private static int`

### quantize

```java
private static BlockPos quantize(BlockPos p_262148_)
```

**Parameters:**

- `p_262148_` (`BlockPos`)

**Returns:** `private static BlockPos`

### makeResolver

```java
private static BiomeResolver makeResolver(MutableInt p_262615_, ChunkAccess p_262698_, BoundingBox p_262622_, Holder<Biome> p_262705_, Predicate<Holder<Biome>> p_262695_)
```

**Parameters:**

- `p_262615_` (`MutableInt`)
- `p_262698_` (`ChunkAccess`)
- `p_262622_` (`BoundingBox`)
- `p_262705_` (`Holder<Biome>`)
- `p_262695_` (`Predicate<Holder<Biome>>`)

**Returns:** `private static BiomeResolver`

### fill

```java
public static Either<Integer, CommandSyntaxException> fill(ServerLevel p_313898_, BlockPos p_313859_, BlockPos p_313868_, Holder<Biome> p_313728_)
```

**Parameters:**

- `p_313898_` (`ServerLevel`)
- `p_313859_` (`BlockPos`)
- `p_313868_` (`BlockPos`)
- `p_313728_` (`Holder<Biome>`)

**Returns:** `public static Either<Integer, CommandSyntaxException>`

### fill

```java
return fill(p_262543_ -> true, p_313489_ -> { })
```

**Parameters:**

- `}` (`p_262543_ -> true, p_313489_ -> {`)

**Returns:** `return`

### fill

```java
public static Either<Integer, CommandSyntaxException> fill(ServerLevel p_313779_, BlockPos p_313726_, BlockPos p_313895_, Holder<Biome> p_313905_, Predicate<Holder<Biome>> p_313945_, Consumer<Supplier<Component>> p_313787_)
```

**Parameters:**

- `p_313779_` (`ServerLevel`)
- `p_313726_` (`BlockPos`)
- `p_313895_` (`BlockPos`)
- `p_313905_` (`Holder<Biome>`)
- `p_313945_` (`Predicate<Holder<Biome>>`)
- `p_313787_` (`Consumer<Supplier<Component>>`)

**Returns:** `public static Either<Integer, CommandSyntaxException>`

### fill

```java
private static int fill(CommandSourceStack p_262664_, BlockPos p_262651_, BlockPos p_262678_, Holder.Reference<Biome> p_262612_, Predicate<Holder<Biome>> p_262697_)
```

**Parameters:**

- `p_262664_` (`CommandSourceStack`)
- `p_262651_` (`BlockPos`)
- `p_262678_` (`BlockPos`)
- `p_262612_` (`Holder.Reference<Biome>`)
- `p_262697_` (`Predicate<Holder<Biome>>`)

**Returns:** `private static int`
