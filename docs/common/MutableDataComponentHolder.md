# MutableDataComponentHolder

**Package:** `net.neoforged.neoforge.common`
**Type:** interface
**Extends:** `DataComponentHolder`

## Methods

### set

```java
<T> T set(DataComponentType<? super T> componentType, T value)
```

**Parameters:**

- `componentType` (`DataComponentType<? super T>`)
- `value` (`T`)

**Returns:** `T`

### set

```java
default <T> T set(Supplier<? extends DataComponentType<? super T>> componentType, T value)
```

**Parameters:**

- `componentType` (`Supplier<? extends DataComponentType<? super T>>`)
- `value` (`T`)

**Returns:** `T`

### update

```java
default <T, U> T update(DataComponentType<T> componentType, T value, U updateContext, BiFunction<T, U, T> updater)
```

**Parameters:**

- `componentType` (`DataComponentType<T>`)
- `value` (`T`)
- `updateContext` (`U`)
- `updater` (`BiFunction<T, U, T>`)

**Returns:** `T`

### update

```java
default <T, U> T update(Supplier<? extends DataComponentType<T>> componentType, T value, U updateContext, BiFunction<T, U, T> updater)
```

**Parameters:**

- `componentType` (`Supplier<? extends DataComponentType<T>>`)
- `value` (`T`)
- `updateContext` (`U`)
- `updater` (`BiFunction<T, U, T>`)

**Returns:** `T`

### update

```java
default <T> T update(DataComponentType<T> componentType, T value, UnaryOperator<T> updater)
```

**Parameters:**

- `componentType` (`DataComponentType<T>`)
- `value` (`T`)
- `updater` (`UnaryOperator<T>`)

**Returns:** `T`

### update

```java
default <T> T update(Supplier<? extends DataComponentType<T>> componentType, T value, UnaryOperator<T> updater)
```

**Parameters:**

- `componentType` (`Supplier<? extends DataComponentType<T>>`)
- `value` (`T`)
- `updater` (`UnaryOperator<T>`)

**Returns:** `T`

### remove

```java
<T> T remove(DataComponentType<? extends T> componentType)
```

**Parameters:**

- `componentType` (`DataComponentType<? extends T>`)

**Returns:** `T`

### remove

```java
default <T> T remove(Supplier<? extends DataComponentType<? extends T>> componentType)
```

**Parameters:**

- `componentType` (`Supplier<? extends DataComponentType<? extends T>>`)

**Returns:** `T`

### copyFrom

```java
default void copyFrom(DataComponentHolder src, DataComponentType<?>[]... componentTypes)
```

**Parameters:**

- `src` (`DataComponentHolder`)
- `componentTypes` (`DataComponentType<?>[]...`)

### copyFrom

```java
 copyFrom()
```

**Returns:** ``

### copyFrom

```java
default void copyFrom(DataComponentHolder src, Supplier<? extends DataComponentType<?>>[]... componentTypes)
```

**Parameters:**

- `src` (`DataComponentHolder`)
- `componentTypes` (`Supplier<? extends DataComponentType<?>>[]...`)

### applyComponents

```java
void applyComponents(DataComponentPatch patch)
```

**Parameters:**

- `patch` (`DataComponentPatch`)

### applyComponents

```java
void applyComponents(DataComponentMap components)
```

**Parameters:**

- `components` (`DataComponentMap`)

### copyFrom

```java
<T> private <T> void copyFrom(DataComponentType<T> componentType, DataComponentHolder src)
```

**Parameters:**

- `componentType` (`DataComponentType<T>`)
- `src` (`DataComponentHolder`)

**Returns:** `private <T> void`
