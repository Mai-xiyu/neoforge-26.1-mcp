# RecipeMatcher

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class

## Methods

### findMatches

```java
[] findMatches(List<T> inputs, List<? extends Predicate<T>> tests)
```

**Parameters:**

- `inputs` (`List<T>`)
- `tests` (`List<? extends Predicate<T>>`)

**Returns:** `[]`

### claim

```java
This is bad... need to think of a better cascade, recursion instead of stack?
    private static boolean claim(int[] ret, BitSet data, int claimed, int elements)
```

**Parameters:**

- `ret` (`int[]`)
- `data` (`BitSet`)
- `claimed` (`int`)
- `elements` (`int`)

**Returns:** `This is bad... need to think of a better cascade, recursion instead of stack?
    private static boolean`

### IllegalStateException

```java
throw new IllegalStateException("What? We matched something, but it wasn't set in the range of this test! Test: " + test + " Used: " + used)
```

**Parameters:**

- `something` (`"What? We matched`)
- `used` (`but it wasn't set in the range of this test! Test: " + test + " Used: " +`)

**Returns:** `throw new`

### backtrack

```java
We use recursion here, why? Because I feel like it. Also because we should only ever be working in data sets < 9
    private static boolean backtrack(BitSet data, int[] ret, int start, int elements)
```

**Parameters:**

- `data` (`BitSet`)
- `ret` (`int[]`)
- `start` (`int`)
- `elements` (`int`)

**Returns:** `We use recursion here, why? Because I feel like it. Also because we should only ever be working in data sets < 9
    private static boolean`

### IllegalStateException

```java
throw new IllegalStateException("This should never happen, negative test in backtrack!")
```

**Parameters:**

- `happen` (`"This should never`)
- `backtrack!"` (`negative test in`)

**Returns:** `throw new`
