# NbtPathArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<NbtPathArgument.NbtPath>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_INVALID_NODE` | `SimpleCommandExceptionType` |  |
| `ERROR_DATA_TOO_DEEP` | `SimpleCommandExceptionType` |  |
| `ERROR_NOTHING_FOUND` | `DynamicCommandExceptionType` |  |

## Methods

### nbtPath

```java
public static NbtPathArgument nbtPath()
```

**Returns:** `public static NbtPathArgument`

### NbtPathArgument

```java
return new NbtPathArgument()
```

**Returns:** `return new`

### getPath

```java
public static NbtPathArgument.NbtPath getPath(CommandContext<CommandSourceStack> p_99499_, String p_99500_)
```

**Parameters:**

- `p_99499_` (`CommandContext<CommandSourceStack>`)
- `p_99500_` (`String`)

**Returns:** `public static NbtPathArgument.NbtPath`

### parse

```java
public NbtPathArgument.NbtPath parse(StringReader p_99491_)
```

**Parameters:**

- `p_99491_` (`StringReader`)

**Returns:** `public NbtPathArgument.NbtPath`

### parseNode

```java
private static NbtPathArgument.Node parseNode(StringReader p_99496_, boolean p_99497_)
```

**Parameters:**

- `p_99496_` (`StringReader`)
- `p_99497_` (`boolean`)

**Returns:** `private static NbtPathArgument.Node`

### readObjectNode

```java
private static NbtPathArgument.Node readObjectNode(StringReader p_99493_, String p_99494_)
```

**Parameters:**

- `p_99493_` (`StringReader`)
- `p_99494_` (`String`)

**Returns:** `private static NbtPathArgument.Node`

### readUnquotedName

```java
private static String readUnquotedName(StringReader p_99509_)
```

**Parameters:**

- `p_99509_` (`StringReader`)

**Returns:** `private static String`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### isAllowedInUnquotedName

```java
private static boolean isAllowedInUnquotedName(char p_99489_)
```

**Parameters:**

- `p_99489_` (`char`)

**Returns:** `private static boolean`

### createTagPredicate

```java
static Predicate<Tag> createTagPredicate(CompoundTag p_99511_)
```

**Parameters:**

- `p_99511_` (`CompoundTag`)

**Returns:** `static Predicate<Tag>`

### AllElementsNode

```java
private AllElementsNode()
```

**Returns:** `private`

### getTag

```java
public void getTag(Tag p_99522_, List<Tag> p_99523_)
```

**Parameters:**

- `p_99522_` (`Tag`)
- `p_99523_` (`List<Tag>`)

### getOrCreateTag

```java
public void getOrCreateTag(Tag p_99528_, Supplier<Tag> p_99529_, List<Tag> p_99530_)
```

**Parameters:**

- `p_99528_` (`Tag`)
- `p_99529_` (`Supplier<Tag>`)
- `p_99530_` (`List<Tag>`)

### createPreferredParentTag

```java
public Tag createPreferredParentTag()
```

**Returns:** `Tag`

### ListTag

```java
return new ListTag()
```

**Returns:** `return new`

### setTag

```java
public int setTag(Tag p_99525_, Supplier<Tag> p_99526_)
```

**Parameters:**

- `p_99525_` (`Tag`)
- `p_99526_` (`Supplier<Tag>`)

**Returns:** `int`

### removeTag

```java
public int removeTag(Tag p_99520_)
```

**Parameters:**

- `p_99520_` (`Tag`)

**Returns:** `int`

### CompoundChildNode

```java
public CompoundChildNode(String p_99533_)
```

**Parameters:**

- `p_99533_` (`String`)

**Returns:** `public`

### getTag

```java
public void getTag(Tag p_99538_, List<Tag> p_99539_)
```

**Parameters:**

- `p_99538_` (`Tag`)
- `p_99539_` (`List<Tag>`)

### getOrCreateTag

```java
public void getOrCreateTag(Tag p_99544_, Supplier<Tag> p_99545_, List<Tag> p_99546_)
```

**Parameters:**

- `p_99544_` (`Tag`)
- `p_99545_` (`Supplier<Tag>`)
- `p_99546_` (`List<Tag>`)

### createPreferredParentTag

```java
public Tag createPreferredParentTag()
```

**Returns:** `Tag`

### CompoundTag

```java
return new CompoundTag()
```

**Returns:** `return new`

### setTag

```java
public int setTag(Tag p_99541_, Supplier<Tag> p_99542_)
```

**Parameters:**

- `p_99541_` (`Tag`)
- `p_99542_` (`Supplier<Tag>`)

**Returns:** `int`

### removeTag

```java
public int removeTag(Tag p_99536_)
```

**Parameters:**

- `p_99536_` (`Tag`)

**Returns:** `int`

### IndexedElementNode

```java
public IndexedElementNode(int p_99549_)
```

**Parameters:**

- `p_99549_` (`int`)

**Returns:** `public`

### getTag

```java
public void getTag(Tag p_99554_, List<Tag> p_99555_)
```

**Parameters:**

- `p_99554_` (`Tag`)
- `p_99555_` (`List<Tag>`)

### getOrCreateTag

```java
public void getOrCreateTag(Tag p_99560_, Supplier<Tag> p_99561_, List<Tag> p_99562_)
```

**Parameters:**

- `p_99560_` (`Tag`)
- `p_99561_` (`Supplier<Tag>`)
- `p_99562_` (`List<Tag>`)

### createPreferredParentTag

```java
public Tag createPreferredParentTag()
```

**Returns:** `Tag`

### ListTag

```java
return new ListTag()
```

**Returns:** `return new`

### setTag

```java
public int setTag(Tag p_99557_, Supplier<Tag> p_99558_)
```

**Parameters:**

- `p_99557_` (`Tag`)
- `p_99558_` (`Supplier<Tag>`)

**Returns:** `int`

### removeTag

```java
public int removeTag(Tag p_99552_)
```

**Parameters:**

- `p_99552_` (`Tag`)

**Returns:** `int`

### MatchElementNode

```java
public MatchElementNode(CompoundTag p_99566_)
```

**Parameters:**

- `p_99566_` (`CompoundTag`)

**Returns:** `public`

### getTag

```java
public void getTag(Tag p_99575_, List<Tag> p_99576_)
```

**Parameters:**

- `p_99575_` (`Tag`)
- `p_99576_` (`List<Tag>`)

### getOrCreateTag

```java
public void getOrCreateTag(Tag p_99581_, Supplier<Tag> p_99582_, List<Tag> p_99583_)
```

**Parameters:**

- `p_99581_` (`Tag`)
- `p_99582_` (`Supplier<Tag>`)
- `p_99583_` (`List<Tag>`)

### createPreferredParentTag

```java
public Tag createPreferredParentTag()
```

**Returns:** `Tag`

### ListTag

```java
return new ListTag()
```

**Returns:** `return new`

### setTag

```java
public int setTag(Tag p_99578_, Supplier<Tag> p_99579_)
```

**Parameters:**

- `p_99578_` (`Tag`)
- `p_99579_` (`Supplier<Tag>`)

**Returns:** `int`

### removeTag

```java
public int removeTag(Tag p_99573_)
```

**Parameters:**

- `p_99573_` (`Tag`)

**Returns:** `int`

### MatchObjectNode

```java
public MatchObjectNode(String p_99588_, CompoundTag p_99589_)
```

**Parameters:**

- `p_99588_` (`String`)
- `p_99589_` (`CompoundTag`)

**Returns:** `public`

### getTag

```java
public void getTag(Tag p_99594_, List<Tag> p_99595_)
```

**Parameters:**

- `p_99594_` (`Tag`)
- `p_99595_` (`List<Tag>`)

### getOrCreateTag

```java
public void getOrCreateTag(Tag p_99600_, Supplier<Tag> p_99601_, List<Tag> p_99602_)
```

**Parameters:**

- `p_99600_` (`Tag`)
- `p_99601_` (`Supplier<Tag>`)
- `p_99602_` (`List<Tag>`)

### createPreferredParentTag

```java
public Tag createPreferredParentTag()
```

**Returns:** `Tag`

### CompoundTag

```java
return new CompoundTag()
```

**Returns:** `return new`

### setTag

```java
public int setTag(Tag p_99597_, Supplier<Tag> p_99598_)
```

**Parameters:**

- `p_99597_` (`Tag`)
- `p_99598_` (`Supplier<Tag>`)

**Returns:** `int`

### removeTag

```java
public int removeTag(Tag p_99592_)
```

**Parameters:**

- `p_99592_` (`Tag`)

**Returns:** `int`

### MatchRootObjectNode

```java
public MatchRootObjectNode(CompoundTag p_99605_)
```

**Parameters:**

- `p_99605_` (`CompoundTag`)

**Returns:** `public`

### getTag

```java
public void getTag(Tag p_99610_, List<Tag> p_99611_)
```

**Parameters:**

- `p_99610_` (`Tag`)
- `p_99611_` (`List<Tag>`)

### getOrCreateTag

```java
public void getOrCreateTag(Tag p_99616_, Supplier<Tag> p_99617_, List<Tag> p_99618_)
```

**Parameters:**

- `p_99616_` (`Tag`)
- `p_99617_` (`Supplier<Tag>`)
- `p_99618_` (`List<Tag>`)

### createPreferredParentTag

```java
public Tag createPreferredParentTag()
```

**Returns:** `Tag`

### CompoundTag

```java
return new CompoundTag()
```

**Returns:** `return new`

### setTag

```java
public int setTag(Tag p_99613_, Supplier<Tag> p_99614_)
```

**Parameters:**

- `p_99613_` (`Tag`)
- `p_99614_` (`Supplier<Tag>`)

**Returns:** `int`

### removeTag

```java
public int removeTag(Tag p_99608_)
```

**Parameters:**

- `p_99608_` (`Tag`)

**Returns:** `int`

### of

```java
public static NbtPathArgument.NbtPath of(String p_336101_)
```

**Parameters:**

- `p_336101_` (`String`)

**Returns:** `public static NbtPathArgument.NbtPath`

### NbtPath

```java
public NbtPath(String p_99623_, NbtPathArgument.Node[] p_99624_, Object2IntMap<NbtPathArgument.Node> p_99625_)
```

**Parameters:**

- `p_99623_` (`String`)
- `p_99624_` (`NbtPathArgument.Node[]`)
- `p_99625_` (`Object2IntMap<NbtPathArgument.Node>`)

**Returns:** `public`

### get

```java
public List<Tag> get(Tag p_99639_)
```

**Parameters:**

- `p_99639_` (`Tag`)

**Returns:** `public List<Tag>`

### countMatching

```java
public int countMatching(Tag p_99644_)
```

**Parameters:**

- `p_99644_` (`Tag`)

**Returns:** `public int`

### getOrCreateParents

```java
private List<Tag> getOrCreateParents(Tag p_99651_)
```

**Parameters:**

- `p_99651_` (`Tag`)

**Returns:** `private List<Tag>`

### getOrCreate

```java
public List<Tag> getOrCreate(Tag p_99641_, Supplier<Tag> p_99642_)
```

**Parameters:**

- `p_99641_` (`Tag`)
- `p_99642_` (`Supplier<Tag>`)

**Returns:** `public List<Tag>`

### apply

```java
private static int apply(List<Tag> p_99636_, Function<Tag, Integer> p_99637_)
```

**Parameters:**

- `p_99636_` (`List<Tag>`)
- `p_99637_` (`Function<Tag, Integer>`)

**Returns:** `private static int`

### isTooDeep

```java
public static boolean isTooDeep(Tag p_263392_, int p_263386_)
```

**Parameters:**

- `p_263392_` (`Tag`)
- `p_263386_` (`int`)

**Returns:** `public static boolean`

### set

```java
public int set(Tag p_169536_, Tag p_169537_)
```

**Parameters:**

- `p_169536_` (`Tag`)
- `p_169537_` (`Tag`)

**Returns:** `public int`

### estimatePathDepth

```java
private int estimatePathDepth()
```

**Returns:** `private int`

### insert

```java
public int insert(int p_263397_, CompoundTag p_263348_, List<Tag> p_263419_)
```

**Parameters:**

- `p_263397_` (`int`)
- `p_263348_` (`CompoundTag`)
- `p_263419_` (`List<Tag>`)

**Returns:** `public int`

### remove

```java
public int remove(Tag p_99649_)
```

**Parameters:**

- `p_99649_` (`Tag`)

**Returns:** `public int`

### apply

```java
return apply()
```

**Returns:** `return`

### createNotFoundException

```java
private CommandSyntaxException createNotFoundException(NbtPathArgument.Node p_99627_)
```

**Parameters:**

- `p_99627_` (`NbtPathArgument.Node`)

**Returns:** `private CommandSyntaxException`

### toString

```java
public String toString()
```

**Returns:** `String`

### asString

```java
public String asString()
```

**Returns:** `public String`

### getTag

```java
void getTag(Tag p_99666_, List<Tag> p_99667_)
```

**Parameters:**

- `p_99666_` (`Tag`)
- `p_99667_` (`List<Tag>`)

### getOrCreateTag

```java
void getOrCreateTag(Tag p_99670_, Supplier<Tag> p_99671_, List<Tag> p_99672_)
```

**Parameters:**

- `p_99670_` (`Tag`)
- `p_99671_` (`Supplier<Tag>`)
- `p_99672_` (`List<Tag>`)

### createPreferredParentTag

```java
Tag createPreferredParentTag()
```

**Returns:** `Tag`

### setTag

```java
int setTag(Tag p_99668_, Supplier<Tag> p_99669_)
```

**Parameters:**

- `p_99668_` (`Tag`)
- `p_99669_` (`Supplier<Tag>`)

**Returns:** `int`

### removeTag

```java
int removeTag(Tag p_99665_)
```

**Parameters:**

- `p_99665_` (`Tag`)

**Returns:** `int`

### get

```java
default List<Tag> get(List<Tag> p_99654_)
```

**Parameters:**

- `p_99654_` (`List<Tag>`)

**Returns:** `default List<Tag>`

### getOrCreate

```java
default List<Tag> getOrCreate(List<Tag> p_99659_, Supplier<Tag> p_99660_)
```

**Parameters:**

- `p_99659_` (`List<Tag>`)
- `p_99660_` (`Supplier<Tag>`)

**Returns:** `default List<Tag>`

### collect

```java
default List<Tag> collect(List<Tag> p_99656_, BiConsumer<Tag, List<Tag>> p_99657_)
```

**Parameters:**

- `p_99656_` (`List<Tag>`)
- `p_99657_` (`BiConsumer<Tag, List<Tag>>`)

**Returns:** `default List<Tag>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `NbtPath` | class |  |
