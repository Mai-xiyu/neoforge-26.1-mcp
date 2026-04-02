# Util

**Package:** `net.minecraft`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LINEAR_LOOKUP_THRESHOLD` | `int` |  |
| `NANOS_PER_MILLI` | `long` |  |
| `timeSource` | `TimeSource.NanoTimeSource` |  |
| `TICKER` | `Ticker` |  |
| `NIL_UUID` | `UUID` |  |
| `ZIP_FILE_SYSTEM_PROVIDER` | `FileSystemProvider` |  |

## Methods

### read

```java
public long read()
```

**Returns:** `long`

### toMap

```java
<K, V> public static <K, V> Collector<Entry<? extends K, ? extends V>, ?, Map<K, V>> toMap()
```

**Returns:** `public static <K, V> Collector<Entry<? extends K, ? extends V>, ?, Map<K, V>>`

### toMutableList

```java
<T> public static <T> Collector<T, ?, List<T>> toMutableList()
```

**Returns:** `public static <T> Collector<T, ?, List<T>>`

### getPropertyName

```java
public static <T extends Comparable<T>> String getPropertyName(Property<T> p_137454_, Object p_137455_)
```

**Parameters:**

- `p_137454_` (`Property<T>`)
- `p_137455_` (`Object`)

**Returns:** `public static <T extends Comparable<T>> String`

### makeDescriptionId

```java
public static String makeDescriptionId(String p_137493_, ResourceLocation p_137494_)
```

**Parameters:**

- `p_137493_` (`String`)
- `p_137494_` (`ResourceLocation`)

**Returns:** `public static String`

### getMillis

```java
public static long getMillis()
```

**Returns:** `public static long`

### getNanos

```java
public static long getNanos()
```

**Returns:** `public static long`

### getEpochMillis

```java
public static long getEpochMillis()
```

**Returns:** `public static long`

### getFilenameFormattedDateTime

```java
public static String getFilenameFormattedDateTime()
```

**Returns:** `public static String`

### makeExecutor

```java
private static ExecutorService makeExecutor(String p_137478_)
```

**Parameters:**

- `p_137478_` (`String`)

**Returns:** `private static ExecutorService`

### onTermination

```java
protected void onTermination(Throwable p_211561_)
```

**Parameters:**

- `p_211561_` (`Throwable`)

### getMaxThreads

```java
private static int getMaxThreads()
```

**Returns:** `private static int`

### backgroundExecutor

```java
public static ExecutorService backgroundExecutor()
```

**Returns:** `public static ExecutorService`

### ioPool

```java
public static ExecutorService ioPool()
```

**Returns:** `public static ExecutorService`

### nonCriticalIoPool

```java
public static ExecutorService nonCriticalIoPool()
```

**Returns:** `public static ExecutorService`

### shutdownExecutors

```java
public static void shutdownExecutors()
```

**Returns:** `public static void`

### shutdownExecutor

```java
 shutdownExecutor()
```

**Returns:** ``

### shutdownExecutor

```java
 shutdownExecutor()
```

**Returns:** ``

### shutdownExecutor

```java
private static void shutdownExecutor(ExecutorService p_137532_)
```

**Parameters:**

- `p_137532_` (`ExecutorService`)

**Returns:** `private static void`

### makeIoExecutor

```java
private static ExecutorService makeIoExecutor(String p_314465_, boolean p_314461_)
```

**Parameters:**

- `p_314465_` (`String`)
- `p_314461_` (`boolean`)

**Returns:** `private static ExecutorService`

### throwAsRuntime

```java
public static void throwAsRuntime(Throwable p_137560_)
```

**Parameters:**

- `p_137560_` (`Throwable`)

**Returns:** `public static void`

### onThreadException

```java
private static void onThreadException(Thread p_137496_, Throwable p_137497_)
```

**Parameters:**

- `p_137496_` (`Thread`)
- `p_137497_` (`Throwable`)

**Returns:** `private static void`

### pauseInIde

```java
 pauseInIde()
```

**Returns:** ``

### fetchChoiceType

```java
public static Type<?> fetchChoiceType(TypeReference p_137457_, String p_137458_)
```

**Parameters:**

- `p_137457_` (`TypeReference`)
- `p_137458_` (`String`)

**Returns:** `Type<?>`

### wrapThreadWithTaskName

```java
public static Runnable wrapThreadWithTaskName(String p_143788_, Runnable p_143789_)
```

**Parameters:**

- `p_143788_` (`String`)
- `p_143789_` (`Runnable`)

**Returns:** `public static Runnable`

### wrapThreadWithTaskName

```java
<V> public static <V> Supplier<V> wrapThreadWithTaskName(String p_183947_, Supplier<V> p_183948_)
```

**Parameters:**

- `p_183947_` (`String`)
- `p_183948_` (`Supplier<V>`)

**Returns:** `public static <V> Supplier<V>`

### getRegisteredName

```java
<T> public static <T> String getRegisteredName(Registry<T> p_331026_, T p_331334_)
```

**Parameters:**

- `p_331026_` (`Registry<T>`)
- `p_331334_` (`T`)

**Returns:** `public static <T> String`

### allOf

```java
<T> public static <T> Predicate<T> allOf(List<? extends Predicate<T>> p_323679_)
```

**Parameters:**

- `p_323679_` (`List<? extends Predicate<T>>`)

**Returns:** `public static <T> Predicate<T>`

### anyOf

```java
<T> public static <T> Predicate<T> anyOf(List<? extends Predicate<T>> p_323722_)
```

**Parameters:**

- `p_323722_` (`List<? extends Predicate<T>>`)

**Returns:** `public static <T> Predicate<T>`

### isSymmetrical

```java
<T> public static <T> boolean isSymmetrical(int p_345051_, int p_345034_, List<T> p_346318_)
```

**Parameters:**

- `p_345051_` (`int`)
- `p_345034_` (`int`)
- `p_346318_` (`List<T>`)

**Returns:** `public static <T> boolean`

### getPlatform

```java
public static Util.OS getPlatform()
```

**Returns:** `public static Util.OS`

### parseAndValidateUntrustedUri

```java
public static URI parseAndValidateUntrustedUri(String p_352394_)
```

**Parameters:**

- `p_352394_` (`String`)

**Returns:** `public static URI`

### URISyntaxException

```java
throw new URISyntaxException("Missing protocol in URI: " + p_352394_)
```

**Parameters:**

- `p_352394_` (`"Missing protocol in URI: " +`)

**Returns:** `throw new`

### URISyntaxException

```java
throw new URISyntaxException("Unsupported protocol in URI: " + p_352394_)
```

**Parameters:**

- `p_352394_` (`"Unsupported protocol in URI: " +`)

**Returns:** `throw new`

### getVmArguments

```java
public static Stream<String> getVmArguments()
```

**Returns:** `public static Stream<String>`

### lastOf

```java
<T> public static <T> T lastOf(List<T> p_137510_)
```

**Parameters:**

- `p_137510_` (`List<T>`)

**Returns:** `public static <T> T`

### findNextInIterable

```java
<T> public static <T> T findNextInIterable(Iterable<T> p_137467_, T p_137468_)
```

**Parameters:**

- `p_137467_` (`Iterable<T>`)
- `p_137468_` (`T`)

**Returns:** `public static <T> T`

### findPreviousInIterable

```java
<T> public static <T> T findPreviousInIterable(Iterable<T> p_137555_, T p_137556_)
```

**Parameters:**

- `p_137555_` (`Iterable<T>`)
- `p_137556_` (`T`)

**Returns:** `public static <T> T`

### make

```java
<T> public static <T> T make(Supplier<T> p_137538_)
```

**Parameters:**

- `p_137538_` (`Supplier<T>`)

**Returns:** `public static <T> T`

### make

```java
<T> public static <T> T make(T p_137470_, Consumer<? super T> p_137471_)
```

**Parameters:**

- `p_137470_` (`T`)
- `p_137471_` (`Consumer<? super T>`)

**Returns:** `public static <T> T`

### sequence

```java
<V> public static <V> CompletableFuture<List<V>> sequence(List<? extends CompletableFuture<V>> p_137568_)
```

**Parameters:**

- `p_137568_` (`List<? extends CompletableFuture<V>>`)

**Returns:** `public static <V> CompletableFuture<List<V>>`

### sequenceFailFast

```java
<V> public static <V> CompletableFuture<List<V>> sequenceFailFast(List<? extends CompletableFuture<? extends V>> p_143841_)
```

**Parameters:**

- `p_143841_` (`List<? extends CompletableFuture<? extends V>>`)

**Returns:** `public static <V> CompletableFuture<List<V>>`

### sequenceFailFastAndCancel

```java
<V> public static <V> CompletableFuture<List<V>> sequenceFailFastAndCancel(List<? extends CompletableFuture<? extends V>> p_214685_)
```

**Parameters:**

- `p_214685_` (`List<? extends CompletableFuture<? extends V>>`)

**Returns:** `public static <V> CompletableFuture<List<V>>`

### fallibleSequence

```java
<V> private static <V> CompletableFuture<List<V>> fallibleSequence(List<? extends CompletableFuture<? extends V>> p_214632_, Consumer<Throwable> p_214633_)
```

**Parameters:**

- `p_214632_` (`List<? extends CompletableFuture<? extends V>>`)
- `p_214633_` (`Consumer<Throwable>`)

**Returns:** `private static <V> CompletableFuture<List<V>>`

### ifElse

```java
<T> public static <T> Optional<T> ifElse(Optional<T> p_137522_, Consumer<T> p_137523_, Runnable p_137524_)
```

**Parameters:**

- `p_137522_` (`Optional<T>`)
- `p_137523_` (`Consumer<T>`)
- `p_137524_` (`Runnable`)

**Returns:** `public static <T> Optional<T>`

### name

```java
<T> public static <T> Supplier<T> name(Supplier<T> p_214656_, Supplier<String> p_214657_)
```

**Parameters:**

- `p_214656_` (`Supplier<T>`)
- `p_214657_` (`Supplier<String>`)

**Returns:** `public static <T> Supplier<T>`

### name

```java
public static Runnable name(Runnable p_137475_, Supplier<String> p_137476_)
```

**Parameters:**

- `p_137475_` (`Runnable`)
- `p_137476_` (`Supplier<String>`)

**Returns:** `public static Runnable`

### logAndPauseIfInIde

```java
public static void logAndPauseIfInIde(String p_143786_)
```

**Parameters:**

- `p_143786_` (`String`)

**Returns:** `public static void`

### doPause

```java
 doPause()
```

**Returns:** ``

### logAndPauseIfInIde

```java
public static void logAndPauseIfInIde(String p_200891_, Throwable p_200892_)
```

**Parameters:**

- `p_200891_` (`String`)
- `p_200892_` (`Throwable`)

**Returns:** `public static void`

### doPause

```java
 doPause()
```

**Returns:** ``

### pauseInIde

```java
<T extends Throwable> public static <T extends Throwable> T pauseInIde(T p_137571_)
```

**Parameters:**

- `p_137571_` (`T`)

**Returns:** `public static <T extends Throwable> T`

### setPause

```java
public static void setPause(Consumer<String> p_183970_)
```

**Parameters:**

- `p_183970_` (`Consumer<String>`)

**Returns:** `public static void`

### doPause

```java
private static void doPause(String p_183985_)
```

**Parameters:**

- `p_183985_` (`String`)

**Returns:** `private static void`

### describeError

```java
public static String describeError(Throwable p_137576_)
```

**Parameters:**

- `p_137576_` (`Throwable`)

**Returns:** `public static String`

### getRandom

```java
<T> public static <T> T getRandom(T[] p_214671_, RandomSource p_214672_)
```

**Parameters:**

- `p_214671_` (`T[]`)
- `p_214672_` (`RandomSource`)

**Returns:** `public static <T> T`

### getRandom

```java
public static int getRandom(int[] p_214668_, RandomSource p_214669_)
```

**Parameters:**

- `p_214668_` (`int[]`)
- `p_214669_` (`RandomSource`)

**Returns:** `public static int`

### getRandom

```java
<T> public static <T> T getRandom(List<T> p_214622_, RandomSource p_214623_)
```

**Parameters:**

- `p_214622_` (`List<T>`)
- `p_214623_` (`RandomSource`)

**Returns:** `public static <T> T`

### getRandomSafe

```java
<T> public static <T> Optional<T> getRandomSafe(List<T> p_214677_, RandomSource p_214678_)
```

**Parameters:**

- `p_214677_` (`List<T>`)
- `p_214678_` (`RandomSource`)

**Returns:** `public static <T> Optional<T>`

### createRenamer

```java
private static BooleanSupplier createRenamer(Path p_137503_, Path p_137504_)
```

**Parameters:**

- `p_137503_` (`Path`)
- `p_137504_` (`Path`)

**Returns:** `private static BooleanSupplier`

### BooleanSupplier

```java
return new BooleanSupplier()
```

**Returns:** `return new`

### getAsBoolean

```java
public boolean getAsBoolean()
```

**Returns:** `boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### createDeleter

```java
private static BooleanSupplier createDeleter(Path p_137501_)
```

**Parameters:**

- `p_137501_` (`Path`)

**Returns:** `private static BooleanSupplier`

### BooleanSupplier

```java
return new BooleanSupplier()
```

**Returns:** `return new`

### getAsBoolean

```java
public boolean getAsBoolean()
```

**Returns:** `boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### createFileDeletedCheck

```java
private static BooleanSupplier createFileDeletedCheck(Path p_137562_)
```

**Parameters:**

- `p_137562_` (`Path`)

**Returns:** `private static BooleanSupplier`

### BooleanSupplier

```java
return new BooleanSupplier()
```

**Returns:** `return new`

### getAsBoolean

```java
public boolean getAsBoolean()
```

**Returns:** `boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### createFileCreatedCheck

```java
private static BooleanSupplier createFileCreatedCheck(Path p_137573_)
```

**Parameters:**

- `p_137573_` (`Path`)

**Returns:** `private static BooleanSupplier`

### BooleanSupplier

```java
return new BooleanSupplier()
```

**Returns:** `return new`

### getAsBoolean

```java
public boolean getAsBoolean()
```

**Returns:** `boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### executeInSequence

```java
private static boolean executeInSequence(BooleanSupplier[]... p_137549_)
```

**Parameters:**

- `p_137549_` (`BooleanSupplier[]...`)

**Returns:** `private static boolean`

### runWithRetries

```java
private static boolean runWithRetries(int p_137450_, String p_137451_, BooleanSupplier[]... p_137452_)
```

**Parameters:**

- `p_137450_` (`int`)
- `p_137451_` (`String`)
- `p_137452_` (`BooleanSupplier[]...`)

**Returns:** `private static boolean`

### safeReplaceFile

```java
public static void safeReplaceFile(Path p_137506_, Path p_137507_, Path p_137508_)
```

**Parameters:**

- `p_137506_` (`Path`)
- `p_137507_` (`Path`)
- `p_137508_` (`Path`)

**Returns:** `public static void`

### safeReplaceOrMoveFile

```java
 safeReplaceOrMoveFile()
```

**Returns:** ``

### safeReplaceOrMoveFile

```java
public static boolean safeReplaceOrMoveFile(Path p_307599_, Path p_307197_, Path p_307407_, boolean p_212228_)
```

**Parameters:**

- `p_307599_` (`Path`)
- `p_307197_` (`Path`)
- `p_307407_` (`Path`)
- `p_212228_` (`boolean`)

**Returns:** `public static boolean`

### offsetByCodepoints

```java
public static int offsetByCodepoints(String p_137480_, int p_137481_, int p_137482_)
```

**Parameters:**

- `p_137480_` (`String`)
- `p_137481_` (`int`)
- `p_137482_` (`int`)

**Returns:** `public static int`

### prefix

```java
public static Consumer<String> prefix(String p_137490_, Consumer<String> p_137491_)
```

**Parameters:**

- `p_137490_` (`String`)
- `p_137491_` (`Consumer<String>`)

**Returns:** `public static Consumer<String>`

### fixedSize

```java
public static DataResult<int[]> fixedSize(IntStream p_137540_, int p_137541_)
```

**Parameters:**

- `p_137540_` (`IntStream`)
- `p_137541_` (`int`)

**Returns:** `public static DataResult<int[]>`

### fixedSize

```java
public static DataResult<long[]> fixedSize(LongStream p_287579_, int p_287631_)
```

**Parameters:**

- `p_287579_` (`LongStream`)
- `p_287631_` (`int`)

**Returns:** `public static DataResult<long[]>`

### fixedSize

```java
<T> public static <T> DataResult<List<T>> fixedSize(List<T> p_143796_, int p_143797_)
```

**Parameters:**

- `p_143796_` (`List<T>`)
- `p_143797_` (`int`)

**Returns:** `public static <T> DataResult<List<T>>`

### startTimerHackThread

```java
public static void startTimerHackThread()
```

**Returns:** `public static void`

### run

```java
public void run()
```

### copyBetweenDirs

```java
public static void copyBetweenDirs(Path p_137564_, Path p_137565_, Path p_137566_)
```

**Parameters:**

- `p_137564_` (`Path`)
- `p_137565_` (`Path`)
- `p_137566_` (`Path`)

**Returns:** `public static void`

### sanitizeName

```java
public static String sanitizeName(String p_137484_, CharPredicate p_137485_)
```

**Parameters:**

- `p_137484_` (`String`)
- `p_137485_` (`CharPredicate`)

**Returns:** `public static String`

### singleKeyCache

```java
<K, V> public static <K, V> SingleKeyCache<K, V> singleKeyCache(Function<K, V> p_270326_)
```

**Parameters:**

- `p_270326_` (`Function<K, V>`)

**Returns:** `public static <K, V> SingleKeyCache<K, V>`

### memoize

```java
<T, R> public static <T, R> Function<T, R> memoize(Function<T, R> p_143828_)
```

**Parameters:**

- `p_143828_` (`Function<T, R>`)

**Returns:** `public static <T, R> Function<T, R>`

### apply

```java
public R apply(T p_214691_)
```

**Parameters:**

- `p_214691_` (`T`)

**Returns:** `R`

### toString

```java
public String toString()
```

**Returns:** `String`

### memoize

```java
<T, U, R> public static <T, U, R> BiFunction<T, U, R> memoize(BiFunction<T, U, R> p_143822_)
```

**Parameters:**

- `p_143822_` (`BiFunction<T, U, R>`)

**Returns:** `public static <T, U, R> BiFunction<T, U, R>`

### apply

```java
public R apply(T p_214700_, U p_214701_)
```

**Parameters:**

- `p_214700_` (`T`)
- `p_214701_` (`U`)

**Returns:** `R`

### toString

```java
public String toString()
```

**Returns:** `String`

### toShuffledList

```java
<T> public static <T> List<T> toShuffledList(Stream<T> p_214662_, RandomSource p_214663_)
```

**Parameters:**

- `p_214662_` (`Stream<T>`)
- `p_214663_` (`RandomSource`)

**Returns:** `public static <T> List<T>`

### shuffle

```java
 shuffle()
```

**Returns:** ``

### toShuffledList

```java
public static IntArrayList toShuffledList(IntStream p_214659_, RandomSource p_214660_)
```

**Parameters:**

- `p_214659_` (`IntStream`)
- `p_214660_` (`RandomSource`)

**Returns:** `public static IntArrayList`

### shuffledCopy

```java
<T> public static <T> List<T> shuffledCopy(T[] p_214682_, RandomSource p_214683_)
```

**Parameters:**

- `p_214682_` (`T[]`)
- `p_214683_` (`RandomSource`)

**Returns:** `public static <T> List<T>`

### shuffle

```java
 shuffle()
```

**Returns:** ``

### shuffledCopy

```java
<T> public static <T> List<T> shuffledCopy(ObjectArrayList<T> p_214612_, RandomSource p_214613_)
```

**Parameters:**

- `p_214612_` (`ObjectArrayList<T>`)
- `p_214613_` (`RandomSource`)

**Returns:** `public static <T> List<T>`

### shuffle

```java
 shuffle()
```

**Returns:** ``

### shuffle

```java
<T> public static <T> void shuffle(List<T> p_309187_, RandomSource p_214675_)
```

**Parameters:**

- `p_309187_` (`List<T>`)
- `p_214675_` (`RandomSource`)

**Returns:** `public static <T> void`

### blockUntilDone

```java
<T> public static <T> CompletableFuture<T> blockUntilDone(Function<Executor, CompletableFuture<T>> p_214680_)
```

**Parameters:**

- `p_214680_` (`Function<Executor, CompletableFuture<T>>`)

**Returns:** `public static <T> CompletableFuture<T>`

### blockUntilDone

```java
return blockUntilDone()
```

**Returns:** `return`

### blockUntilDone

```java
<T> public static <T> T blockUntilDone(Function<Executor, T> p_214653_, Predicate<T> p_214654_)
```

**Parameters:**

- `p_214653_` (`Function<Executor, T>`)
- `p_214654_` (`Predicate<T>`)

**Returns:** `public static <T> T`

### createIndexLookup

```java
<T> public static <T> ToIntFunction<T> createIndexLookup(List<T> p_214687_)
```

**Parameters:**

- `p_214687_` (`List<T>`)

**Returns:** `public static <T> ToIntFunction<T>`

### createIndexIdentityLookup

```java
<T> public static <T> ToIntFunction<T> createIndexIdentityLookup(List<T> p_304758_)
```

**Parameters:**

- `p_304758_` (`List<T>`)

**Returns:** `public static <T> ToIntFunction<T>`

### writeAndReadTypedOrThrow

```java
<A, B> public static <A, B> Typed<B> writeAndReadTypedOrThrow(Typed<A> p_311873_, Type<B> p_312554_, UnaryOperator<Dynamic<?>> p_311990_)
```

**Parameters:**

- `p_311873_` (`Typed<A>`)
- `p_312554_` (`Type<B>`)
- `p_311990_` (`UnaryOperator<Dynamic<?>>`)

**Returns:** `public static <A, B> Typed<B>`

### readTypedOrThrow

```java
<T> public static <T> Typed<T> readTypedOrThrow(Type<T> p_312508_, Dynamic<?> p_312911_)
```

**Parameters:**

- `p_312508_` (`Type<T>`)
- `p_312911_` (`Dynamic<?>`)

**Returns:** `public static <T> Typed<T>`

### readTypedOrThrow

```java
return readTypedOrThrow()
```

**Returns:** `return`

### readTypedOrThrow

```java
<T> public static <T> Typed<T> readTypedOrThrow(Type<T> p_313853_, Dynamic<?> p_313851_, boolean p_313933_)
```

**Parameters:**

- `p_313853_` (`Type<T>`)
- `p_313851_` (`Dynamic<?>`)
- `p_313933_` (`boolean`)

**Returns:** `public static <T> Typed<T>`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### copyAndAdd

```java
<T> public static <T> List<T> copyAndAdd(List<T> p_331978_, T p_331554_)
```

**Parameters:**

- `p_331978_` (`List<T>`)
- `p_331554_` (`T`)

**Returns:** `public static <T> List<T>`

### copyAndAdd

```java
<T> public static <T> List<T> copyAndAdd(T p_335459_, List<T> p_335538_)
```

**Parameters:**

- `p_335459_` (`T`)
- `p_335538_` (`List<T>`)

**Returns:** `public static <T> List<T>`

### copyAndPut

```java
<K, V> public static <K, V> Map<K, V> copyAndPut(Map<K, V> p_330429_, K p_330814_, V p_330949_)
```

**Parameters:**

- `p_330429_` (`Map<K, V>`)
- `p_330814_` (`K`)
- `p_330949_` (`V`)

**Returns:** `public static <K, V> Map<K, V>`

### WINDOWS

```java
, WINDOWS()
```

**Returns:** `,`

### getOpenUriArguments

```java
protected String[] getOpenUriArguments(URI p_352177_)
```

**Parameters:**

- `p_352177_` (`URI`)

**Returns:** `String[]`

### OSX

```java
, OSX()
```

**Returns:** `,`

### getOpenUriArguments

```java
protected String[] getOpenUriArguments(URI p_352407_)
```

**Parameters:**

- `p_352407_` (`URI`)

**Returns:** `String[]`

### UNKNOWN

```java
, UNKNOWN()
```

**Returns:** `,`

### OS

```java
 OS(String p_183998_)
```

**Parameters:**

- `p_183998_` (`String`)

**Returns:** ``

### openUri

```java
public void openUri(URI p_137649_)
```

**Parameters:**

- `p_137649_` (`URI`)

**Returns:** `public void`

### openFile

```java
public void openFile(File p_137645_)
```

**Parameters:**

- `p_137645_` (`File`)

**Returns:** `public void`

### openPath

```java
public void openPath(Path p_352210_)
```

**Parameters:**

- `p_352210_` (`Path`)

**Returns:** `public void`

### getOpenUriArguments

```java
protected String[] getOpenUriArguments(URI p_352257_)
```

**Parameters:**

- `p_352257_` (`URI`)

**Returns:** `protected String[]`

### openUri

```java
public void openUri(String p_137647_)
```

**Parameters:**

- `p_137647_` (`String`)

**Returns:** `public void`

### telemetryName

```java
public String telemetryName()
```

**Returns:** `public String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `OS` | enum |  |
