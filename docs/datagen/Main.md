# Main

**Package:** `net.minecraft.data`
**Type:** class

## Methods

### main

```java
public static void main(String[] p_129669_)
```

**Parameters:**

- `p_129669_` (`String[]`)

### bindRegistries

```java
<T extends DataProvider> private static <T extends DataProvider> DataProvider.Factory<T> bindRegistries(BiFunction<PackOutput, CompletableFuture<HolderLookup.Provider>, T> p_256618_, CompletableFuture<HolderLookup.Provider> p_256515_)
```

**Parameters:**

- `p_256618_` (`BiFunction<PackOutput, CompletableFuture<HolderLookup.Provider>, T>`)
- `p_256515_` (`CompletableFuture<HolderLookup.Provider>`)

**Returns:** `private static <T extends DataProvider> DataProvider.Factory<T>`

### createStandardGenerator

```java
public static DataGenerator createStandardGenerator(Path p_236680_, Collection<Path> p_236681_, boolean p_236682_, boolean p_236683_, boolean p_236684_, boolean p_236685_, boolean p_236686_, WorldVersion p_236687_, boolean p_236688_)
```

**Parameters:**

- `p_236680_` (`Path`)
- `p_236681_` (`Collection<Path>`)
- `p_236682_` (`boolean`)
- `p_236683_` (`boolean`)
- `p_236684_` (`boolean`)
- `p_236685_` (`boolean`)
- `p_236686_` (`boolean`)
- `p_236687_` (`WorldVersion`)
- `p_236688_` (`boolean`)

**Returns:** `public static DataGenerator`
