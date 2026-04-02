# ModConfigSpec

**Package:** `net.neoforged.neoforge.common`
**Type:** class
**Implements:** `IConfigSpec`

## Methods

### isCorrect

```java
public boolean isCorrect(UnmodifiableCommentedConfig config)
```

**Parameters:**

- `config` (`UnmodifiableCommentedConfig`)

**Returns:** `boolean`

### correct

```java
public void correct(CommentedConfig config)
```

**Parameters:**

- `config` (`CommentedConfig`)

**Returns:** `public void`

### correct

```java
public int correct(CommentedConfig config, CorrectionListener listener)
```

**Parameters:**

- `config` (`CommentedConfig`)
- `listener` (`CorrectionListener`)

**Returns:** `public int`

### correct

```java
return correct()
```

**Returns:** `return`

### correct

```java
public int correct(CommentedConfig config, CorrectionListener listener, CorrectionListener commentListener)
```

**Parameters:**

- `config` (`CommentedConfig`)
- `listener` (`CorrectionListener`)
- `commentListener` (`CorrectionListener`)

**Returns:** `public int`

### stringsMatchNormalizingNewLines

```java
private boolean stringsMatchNormalizingNewLines(String string1, String string2)
```

**Parameters:**

- `string1` (`String`)
- `string2` (`String`)

**Returns:** `private boolean`

### define

```java
<T> Object
        public <T> ConfigValue<T> define(String path, T defaultValue)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`T`)

**Returns:** `Object
        public <T> ConfigValue<T>`

### define

```java
<T> public <T> ConfigValue<T> define(List<String> path, T defaultValue)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`T`)

**Returns:** `public <T> ConfigValue<T>`

### define

```java
<T> public <T> ConfigValue<T> define(String path, T defaultValue, Predicate<Object> validator)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`T`)
- `validator` (`Predicate<Object>`)

**Returns:** `public <T> ConfigValue<T>`

### define

```java
<T> public <T> ConfigValue<T> define(List<String> path, T defaultValue, Predicate<Object> validator)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`T`)
- `validator` (`Predicate<Object>`)

**Returns:** `public <T> ConfigValue<T>`

### define

```java
<T> public <T> ConfigValue<T> define(String path, Supplier<T> defaultSupplier, Predicate<Object> validator)
```

**Parameters:**

- `path` (`String`)
- `defaultSupplier` (`Supplier<T>`)
- `validator` (`Predicate<Object>`)

**Returns:** `public <T> ConfigValue<T>`

### define

```java
<T> public <T> ConfigValue<T> define(List<String> path, Supplier<T> defaultSupplier, Predicate<Object> validator)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<T>`)
- `validator` (`Predicate<Object>`)

**Returns:** `public <T> ConfigValue<T>`

### define

```java
return define()
```

**Returns:** `return`

### define

```java
<T> public <T> ConfigValue<T> define(List<String> path, Supplier<T> defaultSupplier, Predicate<Object> validator, Class<?> clazz)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<T>`)
- `validator` (`Predicate<Object>`)
- `clazz` (`Class<?>`)

**Returns:** `public <T> ConfigValue<T>`

### define

```java
<T> public <T> ConfigValue<T> define(List<String> path, ValueSpec value, Supplier<T> defaultSupplier)
```

**Parameters:**

- `path` (`List<String>`)
- `value` (`ValueSpec`)
- `defaultSupplier` (`Supplier<T>`)

**Returns:** `public <T> ConfigValue<T>`

### defineInRange

```java
public <V extends Comparable<? super V>> ConfigValue<V> defineInRange(String path, V defaultValue, V min, V max, Class<V> clazz)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`V`)
- `min` (`V`)
- `max` (`V`)
- `clazz` (`Class<V>`)

**Returns:** `public <V extends Comparable<? super V>> ConfigValue<V>`

### defineInRange

```java
public <V extends Comparable<? super V>> ConfigValue<V> defineInRange(List<String> path, V defaultValue, V min, V max, Class<V> clazz)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`V`)
- `min` (`V`)
- `max` (`V`)
- `clazz` (`Class<V>`)

**Returns:** `public <V extends Comparable<? super V>> ConfigValue<V>`

### defineInRange

```java
public <V extends Comparable<? super V>> ConfigValue<V> defineInRange(String path, Supplier<V> defaultSupplier, V min, V max, Class<V> clazz)
```

**Parameters:**

- `path` (`String`)
- `defaultSupplier` (`Supplier<V>`)
- `min` (`V`)
- `max` (`V`)
- `clazz` (`Class<V>`)

**Returns:** `public <V extends Comparable<? super V>> ConfigValue<V>`

### defineInRange

```java
public <V extends Comparable<? super V>> ConfigValue<V> defineInRange(List<String> path, Supplier<V> defaultSupplier, V min, V max, Class<V> clazz)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<V>`)
- `min` (`V`)
- `max` (`V`)
- `clazz` (`Class<V>`)

**Returns:** `public <V extends Comparable<? super V>> ConfigValue<V>`

### comment

```java
 comment(" Range: " + range)
```

**Parameters:**

- `range` (`" Range: " +`)

**Returns:** ``

### define

```java
return define()
```

**Returns:** `return`

### defineInList

```java
<T> public <T> ConfigValue<T> defineInList(String path, T defaultValue, Collection<? extends T> acceptableValues)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`T`)
- `acceptableValues` (`Collection<? extends T>`)

**Returns:** `public <T> ConfigValue<T>`

### defineInList

```java
<T> public <T> ConfigValue<T> defineInList(String path, Supplier<T> defaultSupplier, Collection<? extends T> acceptableValues)
```

**Parameters:**

- `path` (`String`)
- `defaultSupplier` (`Supplier<T>`)
- `acceptableValues` (`Collection<? extends T>`)

**Returns:** `public <T> ConfigValue<T>`

### defineInList

```java
<T> public <T> ConfigValue<T> defineInList(List<String> path, T defaultValue, Collection<? extends T> acceptableValues)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`T`)
- `acceptableValues` (`Collection<? extends T>`)

**Returns:** `public <T> ConfigValue<T>`

### defineInList

```java
<T> public <T> ConfigValue<T> defineInList(List<String> path, Supplier<T> defaultSupplier, Collection<? extends T> acceptableValues)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<T>`)
- `acceptableValues` (`Collection<? extends T>`)

**Returns:** `public <T> ConfigValue<T>`

### define

```java
return define()
```

**Returns:** `return`

### defineList

```java
public <T> ConfigValue<List<? extends T>> defineList(String path, List<? extends T> defaultValue, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`List<? extends T>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineList

```java
public <T> ConfigValue<List<? extends T>> defineList(String path, List<? extends T> defaultValue, Supplier<T> newElementSupplier, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`List<? extends T>`)
- `newElementSupplier` (`Supplier<T>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineList

```java
public <T> ConfigValue<List<? extends T>> defineList(String path, Supplier<List<? extends T>> defaultSupplier, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`String`)
- `defaultSupplier` (`Supplier<List<? extends T>>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineList

```java
public <T> ConfigValue<List<? extends T>> defineList(String path, Supplier<List<? extends T>> defaultSupplier, Supplier<T> newElementSupplier, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`String`)
- `defaultSupplier` (`Supplier<List<? extends T>>`)
- `newElementSupplier` (`Supplier<T>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineList

```java
public <T> ConfigValue<List<? extends T>> defineList(List<String> path, List<? extends T> defaultValue, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`List<? extends T>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineList

```java
public <T> ConfigValue<List<? extends T>> defineList(List<String> path, List<? extends T> defaultValue, Supplier<T> newElementSupplier, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`List<? extends T>`)
- `newElementSupplier` (`Supplier<T>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineList

```java
public <T> ConfigValue<List<? extends T>> defineList(List<String> path, Supplier<List<? extends T>> defaultSupplier, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<List<? extends T>>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineList

```java
return defineList()
```

**Returns:** `return`

### defineList

```java
public <T> ConfigValue<List<? extends T>> defineList(List<String> path, Supplier<List<? extends T>> defaultSupplier, Supplier<T> newElementSupplier, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<List<? extends T>>`)
- `newElementSupplier` (`Supplier<T>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineList

```java
return defineList()
```

**Returns:** `return`

### defineListAllowEmpty

```java
public <T> ConfigValue<List<? extends T>> defineListAllowEmpty(String path, List<? extends T> defaultValue, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`List<? extends T>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineListAllowEmpty

```java
public <T> ConfigValue<List<? extends T>> defineListAllowEmpty(String path, List<? extends T> defaultValue, Supplier<T> newElementSupplier, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`List<? extends T>`)
- `newElementSupplier` (`Supplier<T>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineListAllowEmpty

```java
public <T> ConfigValue<List<? extends T>> defineListAllowEmpty(String path, Supplier<List<? extends T>> defaultSupplier, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`String`)
- `defaultSupplier` (`Supplier<List<? extends T>>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineListAllowEmpty

```java
public <T> ConfigValue<List<? extends T>> defineListAllowEmpty(String path, Supplier<List<? extends T>> defaultSupplier, Supplier<T> newElementSupplier, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`String`)
- `defaultSupplier` (`Supplier<List<? extends T>>`)
- `newElementSupplier` (`Supplier<T>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineListAllowEmpty

```java
public <T> ConfigValue<List<? extends T>> defineListAllowEmpty(List<String> path, List<? extends T> defaultValue, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`List<? extends T>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineListAllowEmpty

```java
public <T> ConfigValue<List<? extends T>> defineListAllowEmpty(List<String> path, List<? extends T> defaultValue, Supplier<T> newElementSupplier, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`List<? extends T>`)
- `newElementSupplier` (`Supplier<T>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineListAllowEmpty

```java
public <T> ConfigValue<List<? extends T>> defineListAllowEmpty(List<String> path, Supplier<List<? extends T>> defaultSupplier, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<List<? extends T>>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineListAllowEmpty

```java
return defineListAllowEmpty()
```

**Returns:** `return`

### defineListAllowEmpty

```java
public <T> ConfigValue<List<? extends T>> defineListAllowEmpty(List<String> path, Supplier<List<? extends T>> defaultSupplier, Supplier<T> newElementSupplier, Predicate<Object> elementValidator)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<List<? extends T>>`)
- `newElementSupplier` (`Supplier<T>`)
- `elementValidator` (`Predicate<Object>`)

**Returns:** `ConfigValue<List<? extends T>>`

### defineList

```java
return defineList()
```

**Returns:** `return`

### defineList

```java
public <T> ConfigValue<List<? extends T>> defineList(List<String> path, Supplier<List<? extends T>> defaultSupplier, Supplier<T> newElementSupplier, Predicate<Object> elementValidator, Range<Integer> sizeRange)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<List<? extends T>>`)
- `newElementSupplier` (`Supplier<T>`)
- `elementValidator` (`Predicate<Object>`)
- `sizeRange` (`Range<Integer>`)

**Returns:** `ConfigValue<List<? extends T>>`

### correct

```java
public Object correct(Object value)
```

**Parameters:**

- `value` (`Object`)

**Returns:** `Object`

### getDefault

```java
return getDefault()
```

**Returns:** `return`

### getDefault

```java
return getDefault()
```

**Returns:** `return`

### defineEnum

```java
Enum
        public <V extends Enum<V>> EnumValue<V> defineEnum(String path, V defaultValue)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`V`)

**Returns:** `Enum
        public <V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(String path, V defaultValue, EnumGetMethod converter)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`V`)
- `converter` (`EnumGetMethod`)

**Returns:** `public <V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(List<String> path, V defaultValue)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`V`)

**Returns:** `public <V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(List<String> path, V defaultValue, EnumGetMethod converter)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`V`)
- `converter` (`EnumGetMethod`)

**Returns:** `public <V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(String path, V defaultValue, V[]... acceptableValues)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`V`)
- `acceptableValues` (`V[]...`)

**Returns:** `<V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(String path, V defaultValue, EnumGetMethod converter, V[]... acceptableValues)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`V`)
- `converter` (`EnumGetMethod`)
- `acceptableValues` (`V[]...`)

**Returns:** `<V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(List<String> path, V defaultValue, V[]... acceptableValues)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`V`)
- `acceptableValues` (`V[]...`)

**Returns:** `<V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(List<String> path, V defaultValue, EnumGetMethod converter, V[]... acceptableValues)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`V`)
- `converter` (`EnumGetMethod`)
- `acceptableValues` (`V[]...`)

**Returns:** `<V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(String path, V defaultValue, Collection<V> acceptableValues)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`V`)
- `acceptableValues` (`Collection<V>`)

**Returns:** `public <V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(String path, V defaultValue, EnumGetMethod converter, Collection<V> acceptableValues)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`V`)
- `converter` (`EnumGetMethod`)
- `acceptableValues` (`Collection<V>`)

**Returns:** `public <V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(List<String> path, V defaultValue, Collection<V> acceptableValues)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`V`)
- `acceptableValues` (`Collection<V>`)

**Returns:** `public <V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
return defineEnum()
```

**Returns:** `return`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(List<String> path, V defaultValue, EnumGetMethod converter, Collection<V> acceptableValues)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`V`)
- `converter` (`EnumGetMethod`)
- `acceptableValues` (`Collection<V>`)

**Returns:** `public <V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
return defineEnum(obj -> { if (obj instanceof Enum)
```

**Parameters:**

- `Enum` (`obj -> { if (obj instanceof`)

**Returns:** `return`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(String path, V defaultValue, Predicate<Object> validator)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`V`)
- `validator` (`Predicate<Object>`)

**Returns:** `public <V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(String path, V defaultValue, EnumGetMethod converter, Predicate<Object> validator)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`V`)
- `converter` (`EnumGetMethod`)
- `validator` (`Predicate<Object>`)

**Returns:** `public <V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(List<String> path, V defaultValue, Predicate<Object> validator)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`V`)
- `validator` (`Predicate<Object>`)

**Returns:** `public <V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(List<String> path, V defaultValue, EnumGetMethod converter, Predicate<Object> validator)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`V`)
- `converter` (`EnumGetMethod`)
- `validator` (`Predicate<Object>`)

**Returns:** `public <V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(String path, Supplier<V> defaultSupplier, Predicate<Object> validator, Class<V> clazz)
```

**Parameters:**

- `path` (`String`)
- `defaultSupplier` (`Supplier<V>`)
- `validator` (`Predicate<Object>`)
- `clazz` (`Class<V>`)

**Returns:** `public <V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(String path, Supplier<V> defaultSupplier, EnumGetMethod converter, Predicate<Object> validator, Class<V> clazz)
```

**Parameters:**

- `path` (`String`)
- `defaultSupplier` (`Supplier<V>`)
- `converter` (`EnumGetMethod`)
- `validator` (`Predicate<Object>`)
- `clazz` (`Class<V>`)

**Returns:** `public <V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(List<String> path, Supplier<V> defaultSupplier, Predicate<Object> validator, Class<V> clazz)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<V>`)
- `validator` (`Predicate<Object>`)
- `clazz` (`Class<V>`)

**Returns:** `public <V extends Enum<V>> EnumValue<V>`

### defineEnum

```java
return defineEnum()
```

**Returns:** `return`

### defineEnum

```java
public <V extends Enum<V>> EnumValue<V> defineEnum(List<String> path, Supplier<V> defaultSupplier, EnumGetMethod converter, Predicate<Object> validator, Class<V> clazz)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<V>`)
- `converter` (`EnumGetMethod`)
- `validator` (`Predicate<Object>`)
- `clazz` (`Class<V>`)

**Returns:** `public <V extends Enum<V>> EnumValue<V>`

### define

```java
boolean
        public BooleanValue define(String path, boolean defaultValue)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`boolean`)

**Returns:** `boolean
        public BooleanValue`

### define

```java
public BooleanValue define(List<String> path, boolean defaultValue)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`boolean`)

**Returns:** `public BooleanValue`

### define

```java
public BooleanValue define(String path, Supplier<Boolean> defaultSupplier)
```

**Parameters:**

- `path` (`String`)
- `defaultSupplier` (`Supplier<Boolean>`)

**Returns:** `public BooleanValue`

### define

```java
public BooleanValue define(List<String> path, Supplier<Boolean> defaultSupplier)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<Boolean>`)

**Returns:** `public BooleanValue`

### defineInRange

```java
Double
        public DoubleValue defineInRange(String path, double defaultValue, double min, double max)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`double`)
- `min` (`double`)
- `max` (`double`)

**Returns:** `Double
        public DoubleValue`

### defineInRange

```java
public DoubleValue defineInRange(List<String> path, double defaultValue, double min, double max)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`double`)
- `min` (`double`)
- `max` (`double`)

**Returns:** `public DoubleValue`

### defineInRange

```java
public DoubleValue defineInRange(String path, Supplier<Double> defaultSupplier, double min, double max)
```

**Parameters:**

- `path` (`String`)
- `defaultSupplier` (`Supplier<Double>`)
- `min` (`double`)
- `max` (`double`)

**Returns:** `public DoubleValue`

### defineInRange

```java
public DoubleValue defineInRange(List<String> path, Supplier<Double> defaultSupplier, double min, double max)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<Double>`)
- `min` (`double`)
- `max` (`double`)

**Returns:** `public DoubleValue`

### defineInRange

```java
Ints
        public IntValue defineInRange(String path, int defaultValue, int min, int max)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`int`)
- `min` (`int`)
- `max` (`int`)

**Returns:** `Ints
        public IntValue`

### defineInRange

```java
public IntValue defineInRange(List<String> path, int defaultValue, int min, int max)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`int`)
- `min` (`int`)
- `max` (`int`)

**Returns:** `public IntValue`

### defineInRange

```java
public IntValue defineInRange(String path, Supplier<Integer> defaultSupplier, int min, int max)
```

**Parameters:**

- `path` (`String`)
- `defaultSupplier` (`Supplier<Integer>`)
- `min` (`int`)
- `max` (`int`)

**Returns:** `public IntValue`

### defineInRange

```java
public IntValue defineInRange(List<String> path, Supplier<Integer> defaultSupplier, int min, int max)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<Integer>`)
- `min` (`int`)
- `max` (`int`)

**Returns:** `public IntValue`

### defineInRange

```java
Longs
        public LongValue defineInRange(String path, long defaultValue, long min, long max)
```

**Parameters:**

- `path` (`String`)
- `defaultValue` (`long`)
- `min` (`long`)
- `max` (`long`)

**Returns:** `Longs
        public LongValue`

### defineInRange

```java
public LongValue defineInRange(List<String> path, long defaultValue, long min, long max)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultValue` (`long`)
- `min` (`long`)
- `max` (`long`)

**Returns:** `public LongValue`

### defineInRange

```java
public LongValue defineInRange(String path, Supplier<Long> defaultSupplier, long min, long max)
```

**Parameters:**

- `path` (`String`)
- `defaultSupplier` (`Supplier<Long>`)
- `min` (`long`)
- `max` (`long`)

**Returns:** `public LongValue`

### defineInRange

```java
public LongValue defineInRange(List<String> path, Supplier<Long> defaultSupplier, long min, long max)
```

**Parameters:**

- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<Long>`)
- `min` (`long`)
- `max` (`long`)

**Returns:** `public LongValue`

### comment

```java
public Builder comment(String comment)
```

**Parameters:**

- `comment` (`String`)

**Returns:** `public Builder`

### comment

```java
public Builder comment(String[]... comment)
```

**Parameters:**

- `comment` (`String[]...`)

**Returns:** `public Builder`

### translation

```java
public Builder translation(String translationKey)
```

**Parameters:**

- `translationKey` (`String`)

**Returns:** `public Builder`

### worldRestart

```java
public Builder worldRestart()
```

**Returns:** `Builder`

### gameRestart

```java
public Builder gameRestart()
```

**Returns:** `Builder`

### push

```java
public Builder push(String path)
```

**Parameters:**

- `path` (`String`)

**Returns:** `public Builder`

### push

```java
public Builder push(List<String> path)
```

**Parameters:**

- `path` (`List<String>`)

**Returns:** `public Builder`

### pop

```java
public Builder pop()
```

**Returns:** `public Builder`

### pop

```java
return pop()
```

**Returns:** `return`

### pop

```java
public Builder pop(int count)
```

**Parameters:**

- `count` (`int`)

**Returns:** `public Builder`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Attempted to pop " + count + " elements when we only had: " + currentPath)
```

**Parameters:**

- `currentPath` (`"Attempted to pop " + count + " elements when we only had: " +`)

**Returns:** `throw new`

### configure

```java
< count; x++)
                currentPath.remove(currentPath.size() - 1);
            return this;
        }

        public <T> Pair<T, ModConfigSpec> configure(Function<Builder, T> consumer)
```

**Parameters:**

- `consumer` (`Function<Builder, T>`)

**Returns:** `Pair<T, ModConfigSpec>`

### build

```java
public ModConfigSpec build()
```

**Returns:** `public ModConfigSpec`

### addComment

```java
public void addComment(String value)
```

**Parameters:**

- `value` (`String`)

**Returns:** `public void`

### clearComment

```java
public void clearComment()
```

**Returns:** `public void`

### hasComment

```java
public boolean hasComment()
```

**Returns:** `public boolean`

### buildComment

```java
public String buildComment()
```

**Returns:** `public String`

### buildComment

```java
public String buildComment(List<String> path)
```

**Parameters:**

- `path` (`List<String>`)

**Returns:** `public String`

### setTranslationKey

```java
public void setTranslationKey(String value)
```

**Parameters:**

- `value` (`String`)

**Returns:** `public void`

### getTranslationKey

```java
public String getTranslationKey()
```

**Returns:** `String`

### setRange

```java
public <V extends Comparable<? super V>> void setRange(Range<V> value)
```

**Parameters:**

- `value` (`Range<V>`)

**Returns:** `public <V extends Comparable<? super V>> void`

### getRange

```java
public <V extends Comparable<? super V>> Range<V> getRange()
```

**Returns:** `<V extends Comparable<? super V>> Range<V>`

### worldRestart

```java
public void worldRestart()
```

**Returns:** `public void`

### gameRestart

```java
public void gameRestart()
```

**Returns:** `public void`

### restartType

```java
public RestartType restartType()
```

**Returns:** `public RestartType`

### setClazz

```java
public void setClazz(Class<?> clazz)
```

**Parameters:**

- `clazz` (`Class<?>`)

**Returns:** `public void`

### getClazz

```java
public Class<?> getClazz()
```

**Returns:** `Class<?>`

### ensureEmpty

```java
public void ensureEmpty()
```

**Returns:** `public void`

### validate

```java
 validate("Non-null translation key when null expected")
```

**Parameters:**

- `expected"` (`"Non-null translation key when null`)

**Returns:** ``

### validate

```java
 validate("Non-null range when null expected")
```

**Parameters:**

- `expected"` (`"Non-null range when null`)

**Returns:** ``

### validate

```java
 validate(restartType != RestartType.NONE, "Dangling restart value set to " + restartType)
```

**Parameters:**

- `RestartType.NONE` (`restartType !=`)
- `restartType` (`"Dangling restart value set to " +`)

**Returns:** ``

### validate

```java
private void validate(Object value, String message)
```

**Parameters:**

- `value` (`Object`)
- `message` (`String`)

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException()
```

**Returns:** `throw new`

### validate

```java
private void validate(boolean value, String message)
```

**Parameters:**

- `value` (`boolean`)
- `message` (`String`)

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException()
```

**Returns:** `throw new`

### Range

```java
private Range(Class<V> clazz, V min, V max)
```

**Parameters:**

- `clazz` (`Class<V>`)
- `min` (`V`)
- `max` (`V`)

**Returns:** `private`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Range min must be less then max.")
```

**Parameters:**

- `max."` (`"Range min must be less then`)

**Returns:** `throw new`

### of

```java
public static Range<Integer> of(int min, int max)
```

**Parameters:**

- `min` (`int`)
- `max` (`int`)

**Returns:** `public static Range<Integer>`

### getClazz

```java
public Class<? extends V> getClazz()
```

**Returns:** `public Class<? extends V>`

### getMin

```java
public V getMin()
```

**Returns:** `public V`

### getMax

```java
public V getMax()
```

**Returns:** `public V`

### isNumber

```java
private boolean isNumber(Object other)
```

**Parameters:**

- `other` (`Object`)

**Returns:** `private boolean`

### test

```java
public boolean test(Object t)
```

**Parameters:**

- `t` (`Object`)

**Returns:** `boolean`

### correct

```java
public Object correct(Object value, Object def)
```

**Parameters:**

- `value` (`Object`)
- `def` (`Object`)

**Returns:** `public Object`

### toString

```java
public String toString()
```

**Returns:** `String`

### ValueSpec

```java
private ValueSpec(Supplier<?> supplier, Predicate<Object> validator, BuilderContext context, List<String> path)
```

**Parameters:**

- `supplier` (`Supplier<?>`)
- `validator` (`Predicate<Object>`)
- `context` (`BuilderContext`)
- `path` (`List<String>`)

**Returns:** `private`

### getComment

```java
public String getComment()
```

**Returns:** `String`

### getTranslationKey

```java
public String getTranslationKey()
```

**Returns:** `String`

### getRange

```java
public <V extends Comparable<? super V>> Range<V> getRange()
```

**Returns:** `<V extends Comparable<? super V>> Range<V>`

### restartType

```java
public RestartType restartType()
```

**Returns:** `public RestartType`

### getClazz

```java
public Class<?> getClazz()
```

**Returns:** `Class<?>`

### test

```java
public boolean test(Object value)
```

**Parameters:**

- `value` (`Object`)

**Returns:** `public boolean`

### correct

```java
public Object correct(Object value)
```

**Parameters:**

- `value` (`Object`)

**Returns:** `public Object`

### getDefault

```java
public Object getDefault()
```

**Returns:** `public Object`

### ListValueSpec

```java
private ListValueSpec(Supplier<?> supplier, Supplier<?> newElementSupplier, Predicate<Object> listValidator, Predicate<Object> elementValidator, BuilderContext context, List<String> path, Range<Integer> sizeRange)
```

**Parameters:**

- `supplier` (`Supplier<?>`)
- `newElementSupplier` (`Supplier<?>`)
- `listValidator` (`Predicate<Object>`)
- `elementValidator` (`Predicate<Object>`)
- `context` (`BuilderContext`)
- `path` (`List<String>`)
- `sizeRange` (`Range<Integer>`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getNewElementSupplier

```java
public Supplier<?> getNewElementSupplier()
```

**Returns:** `Supplier<?>`

### testElement

```java
public boolean testElement(Object value)
```

**Parameters:**

- `value` (`Object`)

**Returns:** `boolean`

### getSizeRange

```java
public Range<Integer> getSizeRange()
```

**Returns:** `Range<Integer>`

### ConfigValue

```java
 ConfigValue(Builder parent, List<String> path, Supplier<T> defaultSupplier)
```

**Parameters:**

- `parent` (`Builder`)
- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<T>`)

**Returns:** ``

### getPath

```java
public List<String> getPath()
```

**Returns:** `public List<String>`

### get

```java
public T get()
```

**Returns:** `T`

### getRaw

```java
public T getRaw()
```

**Returns:** `T`

### getRaw

```java
public T getRaw(Config config, List<String> path, Supplier<T> defaultSupplier)
```

**Parameters:**

- `config` (`Config`)
- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<T>`)

**Returns:** `public T`

### getDefault

```java
public T getDefault()
```

**Returns:** `T`

### next

```java
public Builder next()
```

**Returns:** `public Builder`

### save

```java
public void save()
```

**Returns:** `public void`

### set

```java
public void set(T value)
```

**Parameters:**

- `value` (`T`)

### getSpec

```java
public ValueSpec getSpec()
```

**Returns:** `public ValueSpec`

### clearCache

```java
public void clearCache()
```

**Returns:** `public void`

### BooleanValue

```java
 BooleanValue(Builder parent, List<String> path, Supplier<Boolean> defaultSupplier)
```

**Parameters:**

- `parent` (`Builder`)
- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<Boolean>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getAsBoolean

```java
public boolean getAsBoolean()
```

**Returns:** `boolean`

### get

```java
return get()
```

**Returns:** `return`

### isTrue

```java
public boolean isTrue()
```

**Returns:** `public boolean`

### getAsBoolean

```java
return getAsBoolean()
```

**Returns:** `return`

### isFalse

```java
public boolean isFalse()
```

**Returns:** `public boolean`

### IntValue

```java
 IntValue(Builder parent, List<String> path, Supplier<Integer> defaultSupplier)
```

**Parameters:**

- `parent` (`Builder`)
- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<Integer>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getRaw

```java
public Integer getRaw(Config config, List<String> path, Supplier<Integer> defaultSupplier)
```

**Parameters:**

- `config` (`Config`)
- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<Integer>`)

**Returns:** `Integer`

### getAsInt

```java
public int getAsInt()
```

**Returns:** `int`

### get

```java
return get()
```

**Returns:** `return`

### LongValue

```java
 LongValue(Builder parent, List<String> path, Supplier<Long> defaultSupplier)
```

**Parameters:**

- `parent` (`Builder`)
- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<Long>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getRaw

```java
public Long getRaw(Config config, List<String> path, Supplier<Long> defaultSupplier)
```

**Parameters:**

- `config` (`Config`)
- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<Long>`)

**Returns:** `Long`

### getAsLong

```java
public long getAsLong()
```

**Returns:** `long`

### get

```java
return get()
```

**Returns:** `return`

### DoubleValue

```java
 DoubleValue(Builder parent, List<String> path, Supplier<Double> defaultSupplier)
```

**Parameters:**

- `parent` (`Builder`)
- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<Double>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getRaw

```java
public Double getRaw(Config config, List<String> path, Supplier<Double> defaultSupplier)
```

**Parameters:**

- `config` (`Config`)
- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<Double>`)

**Returns:** `Double`

### getAsDouble

```java
public double getAsDouble()
```

**Returns:** `double`

### get

```java
return get()
```

**Returns:** `return`

### EnumValue

```java
 EnumValue(Builder parent, List<String> path, Supplier<T> defaultSupplier, EnumGetMethod converter, Class<T> clazz)
```

**Parameters:**

- `parent` (`Builder`)
- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<T>`)
- `converter` (`EnumGetMethod`)
- `clazz` (`Class<T>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getRaw

```java
public T getRaw(Config config, List<String> path, Supplier<T> defaultSupplier)
```

**Parameters:**

- `config` (`Config`)
- `path` (`List<String>`)
- `defaultSupplier` (`Supplier<T>`)

**Returns:** `T`

### split

```java
private static List<String> split(String path)
```

**Parameters:**

- `path` (`String`)

**Returns:** `private static List<String>`

### GAME

```java
public  GAME()
```

**Returns:** ``

### RestartType

```java
 RestartType(ModConfig.Type[]... invalidTypes)
```

**Parameters:**

- `invalidTypes` (`ModConfig.Type[]...`)

**Returns:** ``

### isValid

```java
private boolean isValid(ModConfig.Type type)
```

**Parameters:**

- `type` (`ModConfig.Type`)

**Returns:** `private boolean`

### with

```java
public RestartType with(RestartType other)
```

**Parameters:**

- `other` (`RestartType`)

**Returns:** `public RestartType`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `RestartType` | enum |  |
