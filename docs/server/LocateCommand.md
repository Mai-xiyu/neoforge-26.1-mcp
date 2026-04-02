# LocateCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_249870_, CommandBuildContext p_248936_)
```

**Parameters:**

- `p_249870_` (`CommandDispatcher<CommandSourceStack>`)
- `p_248936_` (`CommandBuildContext`)

**Returns:** `public static void`

### getHolders

```java
private static Optional<? extends HolderSet.ListBacked<Structure>> getHolders(ResourceOrTagKeyArgument.Result<Structure> p_251212_, Registry<Structure> p_249691_)
```

**Parameters:**

- `p_251212_` (`ResourceOrTagKeyArgument.Result<Structure>`)
- `p_249691_` (`Registry<Structure>`)

**Returns:** `private static Optional<? extends HolderSet.ListBacked<Structure>>`

### locateStructure

```java
private static int locateStructure(CommandSourceStack p_214472_, ResourceOrTagKeyArgument.Result<Structure> p_249893_)
```

**Parameters:**

- `p_214472_` (`CommandSourceStack`)
- `p_249893_` (`ResourceOrTagKeyArgument.Result<Structure>`)

**Returns:** `private static int`

### locateBiome

```java
private static int locateBiome(CommandSourceStack p_252062_, ResourceOrTagArgument.Result<Biome> p_249756_)
```

**Parameters:**

- `p_252062_` (`CommandSourceStack`)
- `p_249756_` (`ResourceOrTagArgument.Result<Biome>`)

**Returns:** `private static int`

### locatePoi

```java
private static int locatePoi(CommandSourceStack p_252013_, ResourceOrTagArgument.Result<PoiType> p_249480_)
```

**Parameters:**

- `p_252013_` (`CommandSourceStack`)
- `p_249480_` (`ResourceOrTagArgument.Result<PoiType>`)

**Returns:** `private static int`

### showLocateResult

```java
public static int showLocateResult(CommandSourceStack p_263098_, ResourceOrTagArgument.Result<?> p_262956_, BlockPos p_262917_, Pair<BlockPos, ? extends Holder<?>> p_263074_, String p_262937_, boolean p_263051_, Duration p_263028_)
```

**Parameters:**

- `p_263098_` (`CommandSourceStack`)
- `p_262956_` (`ResourceOrTagArgument.Result<?>`)
- `p_262917_` (`BlockPos`)
- `p_263074_` (`Pair<BlockPos, ? extends Holder<?>>`)
- `p_262937_` (`String`)
- `p_263051_` (`boolean`)
- `p_263028_` (`Duration`)

**Returns:** `public static int`

### showLocateResult

```java
return showLocateResult()
```

**Returns:** `return`

### showLocateResult

```java
public static int showLocateResult(CommandSourceStack p_263019_, ResourceOrTagKeyArgument.Result<?> p_263031_, BlockPos p_262989_, Pair<BlockPos, ? extends Holder<?>> p_262959_, String p_263045_, boolean p_262934_, Duration p_262960_)
```

**Parameters:**

- `p_263019_` (`CommandSourceStack`)
- `p_263031_` (`ResourceOrTagKeyArgument.Result<?>`)
- `p_262989_` (`BlockPos`)
- `p_262959_` (`Pair<BlockPos, ? extends Holder<?>>`)
- `p_263045_` (`String`)
- `p_262934_` (`boolean`)
- `p_262960_` (`Duration`)

**Returns:** `public static int`

### showLocateResult

```java
return showLocateResult()
```

**Returns:** `return`

### showLocateResult

```java
private static int showLocateResult(CommandSourceStack p_262983_, BlockPos p_263016_, Pair<BlockPos, ? extends Holder<?>> p_262941_, String p_263083_, boolean p_263010_, String p_263048_, Duration p_263040_)
```

**Parameters:**

- `p_262983_` (`CommandSourceStack`)
- `p_263016_` (`BlockPos`)
- `p_262941_` (`Pair<BlockPos, ? extends Holder<?>>`)
- `p_263083_` (`String`)
- `p_263010_` (`boolean`)
- `p_263048_` (`String`)
- `p_263040_` (`Duration`)

**Returns:** `private static int`

### dist

```java
private static float dist(int p_137854_, int p_137855_, int p_137856_, int p_137857_)
```

**Parameters:**

- `p_137854_` (`int`)
- `p_137855_` (`int`)
- `p_137856_` (`int`)
- `p_137857_` (`int`)

**Returns:** `private static float`
