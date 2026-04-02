# TestCommand

**Package:** `net.minecraft.gametest.framework`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STRUCTURE_BLOCK_NEARBY_SEARCH_RADIUS` | `int` |  |
| `STRUCTURE_BLOCK_FULL_SEARCH_RADIUS` | `int` |  |

## Methods

### runWithRetryOptions

```java
private static ArgumentBuilder<CommandSourceStack, ?> runWithRetryOptions(ArgumentBuilder<CommandSourceStack, ?> p_320965_, Function<CommandContext<CommandSourceStack>, TestCommand.Runner> p_320702_, Function<ArgumentBuilder<CommandSourceStack, ?>, ArgumentBuilder<CommandSourceStack, ?>> p_320600_)
```

**Parameters:**

- `p_320965_` (`ArgumentBuilder<CommandSourceStack, ?>`)
- `p_320702_` (`Function<CommandContext<CommandSourceStack>, TestCommand.Runner>`)
- `p_320600_` (`Function<ArgumentBuilder<CommandSourceStack, ?>, ArgumentBuilder<CommandSourceStack, ?>>`)

**Returns:** `private static ArgumentBuilder<CommandSourceStack, ?>`

### runWithRetryOptions

```java
private static ArgumentBuilder<CommandSourceStack, ?> runWithRetryOptions(ArgumentBuilder<CommandSourceStack, ?> p_320397_, Function<CommandContext<CommandSourceStack>, TestCommand.Runner> p_320472_)
```

**Parameters:**

- `p_320397_` (`ArgumentBuilder<CommandSourceStack, ?>`)
- `p_320472_` (`Function<CommandContext<CommandSourceStack>, TestCommand.Runner>`)

**Returns:** `private static ArgumentBuilder<CommandSourceStack, ?>`

### runWithRetryOptions

```java
return runWithRetryOptions(p_319485_ -> p_319485_)
```

**Parameters:**

- `p_319485_` (`p_319485_ ->`)

**Returns:** `return`

### runWithRetryOptionsAndBuildInfo

```java
private static ArgumentBuilder<CommandSourceStack, ?> runWithRetryOptionsAndBuildInfo(ArgumentBuilder<CommandSourceStack, ?> p_320872_, Function<CommandContext<CommandSourceStack>, TestCommand.Runner> p_320896_)
```

**Parameters:**

- `p_320872_` (`ArgumentBuilder<CommandSourceStack, ?>`)
- `p_320896_` (`Function<CommandContext<CommandSourceStack>, TestCommand.Runner>`)

**Returns:** `private static ArgumentBuilder<CommandSourceStack, ?>`

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_127947_)
```

**Parameters:**

- `p_127947_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### resetGameTestInfo

```java
private static int resetGameTestInfo(GameTestInfo p_320507_)
```

**Parameters:**

- `p_320507_` (`GameTestInfo`)

**Returns:** `private static int`

### toGameTestInfos

```java
static Stream<GameTestInfo> toGameTestInfos(CommandSourceStack p_320827_, RetryOptions p_320932_, StructureBlockPosFinder p_320543_)
```

**Parameters:**

- `p_320827_` (`CommandSourceStack`)
- `p_320932_` (`RetryOptions`)
- `p_320543_` (`StructureBlockPosFinder`)

**Returns:** `static Stream<GameTestInfo>`

### toGameTestInfo

```java
static Stream<GameTestInfo> toGameTestInfo(CommandSourceStack p_320465_, RetryOptions p_320183_, TestFunctionFinder p_320598_, int p_320854_)
```

**Parameters:**

- `p_320465_` (`CommandSourceStack`)
- `p_320183_` (`RetryOptions`)
- `p_320598_` (`TestFunctionFinder`)
- `p_320854_` (`int`)

**Returns:** `static Stream<GameTestInfo>`

### createGameTestInfo

```java
private static Optional<GameTestInfo> createGameTestInfo(BlockPos p_320172_, ServerLevel p_320346_, RetryOptions p_320822_)
```

**Parameters:**

- `p_320172_` (`BlockPos`)
- `p_320346_` (`ServerLevel`)
- `p_320822_` (`RetryOptions`)

**Returns:** `private static Optional<GameTestInfo>`

### say

```java
 say("Structure block entity could not be found")
```

**Parameters:**

- `found"` (`"Structure block entity could not be`)

**Returns:** ``

### say

```java
 say("Test function for test " + s + " could not be found")
```

**Parameters:**

- `found"` (`"Test function for test " + s + " could not be`)

**Returns:** ``

### createNewStructure

```java
private static int createNewStructure(CommandSourceStack p_127968_, String p_127969_, int p_127970_, int p_127971_, int p_127972_)
```

**Parameters:**

- `p_127968_` (`CommandSourceStack`)
- `p_127969_` (`String`)
- `p_127970_` (`int`)
- `p_127971_` (`int`)
- `p_127972_` (`int`)

**Returns:** `private static int`

### IllegalArgumentException

```java
throw new IllegalArgumentException("The structure must be less than 48 blocks big in each axis")
```

**Parameters:**

- `axis"` (`"The structure must be less than 48 blocks big in each`)

**Returns:** `throw new`

### showPos

```java
private static int showPos(CommandSourceStack p_127960_, String p_127961_)
```

**Parameters:**

- `p_127960_` (`CommandSourceStack`)
- `p_127961_` (`String`)

**Returns:** `private static int`

### say

```java
 say("Structure block entity could not be found")
```

**Parameters:**

- `found"` (`"Structure block entity could not be`)

**Returns:** ``

### stopTests

```java
static int stopTests()
```

**Returns:** `static int`

### trackAndStartRunner

```java
static int trackAndStartRunner(CommandSourceStack p_320627_, ServerLevel p_320564_, GameTestRunner p_320295_)
```

**Parameters:**

- `p_320627_` (`CommandSourceStack`)
- `p_320564_` (`ServerLevel`)
- `p_320295_` (`GameTestRunner`)

**Returns:** `static int`

### saveAndExportTestStructure

```java
static int saveAndExportTestStructure(CommandSourceStack p_309558_, StructureBlockEntity p_309587_)
```

**Parameters:**

- `p_309558_` (`CommandSourceStack`)
- `p_309587_` (`StructureBlockEntity`)

**Returns:** `static int`

### say

```java
 say("Failed to save structure " + s)
```

**Parameters:**

- `s` (`"Failed to save structure " +`)

**Returns:** ``

### exportTestStructure

```java
return exportTestStructure()
```

**Returns:** `return`

### exportTestStructure

```java
private static int exportTestStructure(CommandSourceStack p_128011_, String p_128012_)
```

**Parameters:**

- `p_128011_` (`CommandSourceStack`)
- `p_128012_` (`String`)

**Returns:** `private static int`

### say

```java
 say("Failed to export " + path1)
```

**Parameters:**

- `path1` (`"Failed to export " +`)

**Returns:** ``

### verifyStructureExists

```java
private static boolean verifyStructureExists(ServerLevel p_309700_, String p_320698_)
```

**Parameters:**

- `p_309700_` (`ServerLevel`)
- `p_320698_` (`String`)

**Returns:** `private static boolean`

### say

```java
 say("Test structure " + p_320698_ + " could not be found")
```

**Parameters:**

- `found"` (`"Test structure " + p_320698_ + " could not be`)

**Returns:** ``

### createTestPositionAround

```java
static BlockPos createTestPositionAround(CommandSourceStack p_308921_)
```

**Parameters:**

- `p_308921_` (`CommandSourceStack`)

**Returns:** `static BlockPos`

### say

```java
static void say(CommandSourceStack p_128004_, String p_128005_)
```

**Parameters:**

- `p_128004_` (`CommandSourceStack`)
- `p_128005_` (`String`)

**Returns:** `static void`

### importTestStructure

```java
private static int importTestStructure(CommandSourceStack p_128016_, String p_128017_)
```

**Parameters:**

- `p_128016_` (`CommandSourceStack`)
- `p_128017_` (`String`)

**Returns:** `private static int`

### say

```java
static void say(ServerLevel p_127934_, String p_127935_, ChatFormatting p_127936_)
```

**Parameters:**

- `p_127934_` (`ServerLevel`)
- `p_127935_` (`String`)
- `p_127936_` (`ChatFormatting`)

**Returns:** `static void`

### Runner

```java
public Runner(TestFinder<TestCommand.Runner> p_320723_)
```

**Parameters:**

- `p_320723_` (`TestFinder<TestCommand.Runner>`)

**Returns:** `public`

### reset

```java
public int reset()
```

**Returns:** `public int`

### logAndRun

```java
<T> private <T> void logAndRun(Stream<T> p_320016_, ToIntFunction<T> p_319791_, Runnable p_320766_, Consumer<Integer> p_320345_)
```

**Parameters:**

- `p_320016_` (`Stream<T>`)
- `p_319791_` (`ToIntFunction<T>`)
- `p_320766_` (`Runnable`)
- `p_320345_` (`Consumer<Integer>`)

**Returns:** `private <T> void`

### clear

```java
public int clear()
```

**Returns:** `public int`

### export

```java
public int export()
```

**Returns:** `public int`

### verify

```java
int verify()
```

**Returns:** `int`

### run

```java
public int run(RetryOptions p_320091_, int p_320456_, int p_320467_)
```

**Parameters:**

- `p_320091_` (`RetryOptions`)
- `p_320456_` (`int`)
- `p_320467_` (`int`)

**Returns:** `public int`

### run

```java
public int run(int p_320306_, int p_320333_)
```

**Parameters:**

- `p_320306_` (`int`)
- `p_320333_` (`int`)

**Returns:** `public int`

### run

```java
public int run(int p_319859_)
```

**Parameters:**

- `p_319859_` (`int`)

**Returns:** `public int`

### run

```java
public int run(RetryOptions p_320906_, int p_320419_)
```

**Parameters:**

- `p_320906_` (`RetryOptions`)
- `p_320419_` (`int`)

**Returns:** `public int`

### run

```java
public int run(RetryOptions p_320034_)
```

**Parameters:**

- `p_320034_` (`RetryOptions`)

**Returns:** `public int`

### run

```java
public int run()
```

**Returns:** `public int`

### locate

```java
public int locate()
```

**Returns:** `public int`

### testBatchStarting

```java
public void testBatchStarting(GameTestBatch p_319827_)
```

**Parameters:**

- `p_319827_` (`GameTestBatch`)

### testBatchFinished

```java
public void testBatchFinished(GameTestBatch p_320779_)
```

**Parameters:**

- `p_320779_` (`GameTestBatch`)

### testStructureLoaded

```java
public void testStructureLoaded(GameTestInfo p_128064_)
```

**Parameters:**

- `p_128064_` (`GameTestInfo`)

### testPassed

```java
public void testPassed(GameTestInfo p_177797_, GameTestRunner p_320726_)
```

**Parameters:**

- `p_177797_` (`GameTestInfo`)
- `p_320726_` (`GameTestRunner`)

### showTestSummaryIfAllDone

```java
 showTestSummaryIfAllDone()
```

**Returns:** ``

### testFailed

```java
public void testFailed(GameTestInfo p_128066_, GameTestRunner p_320567_)
```

**Parameters:**

- `p_128066_` (`GameTestInfo`)
- `p_320567_` (`GameTestRunner`)

### showTestSummaryIfAllDone

```java
 showTestSummaryIfAllDone()
```

**Returns:** ``

### testAddedForRerun

```java
public void testAddedForRerun(GameTestInfo p_319856_, GameTestInfo p_320528_, GameTestRunner p_319832_)
```

**Parameters:**

- `p_319856_` (`GameTestInfo`)
- `p_320528_` (`GameTestInfo`)
- `p_319832_` (`GameTestRunner`)

### showTestSummaryIfAllDone

```java
private static void showTestSummaryIfAllDone(ServerLevel p_319899_, MultipleTestTracker p_320682_)
```

**Parameters:**

- `p_319899_` (`ServerLevel`)
- `p_320682_` (`MultipleTestTracker`)

**Returns:** `private static void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Runner` | class |  |
| `TestSummaryDisplayer` | record |  |
