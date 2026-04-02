# EntitySelectorParser

**Package:** `net.minecraft.commands.arguments.selector`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SYNTAX_SELECTOR_START` | `char` |  |
| `SYNTAX_OPTIONS_KEY_VALUE_SEPARATOR` | `char` |  |
| `SYNTAX_NOT` | `char` |  |
| `SYNTAX_TAG` | `char` |  |
| `ERROR_INVALID_NAME_OR_UUID` | `SimpleCommandExceptionType` |  |
| `ERROR_UNKNOWN_SELECTOR_TYPE` | `DynamicCommandExceptionType` |  |
| `ERROR_SELECTORS_NOT_ALLOWED` | `SimpleCommandExceptionType` |  |
| `ERROR_MISSING_SELECTOR_TYPE` | `SimpleCommandExceptionType` |  |
| `ERROR_EXPECTED_END_OF_OPTIONS` | `SimpleCommandExceptionType` |  |
| `ERROR_EXPECTED_OPTION_VALUE` | `DynamicCommandExceptionType` |  |
| `ORDER_NEAREST` | `BiConsumer<Vec3, List<? extends Entity>>` |  |
| `ORDER_FURTHEST` | `BiConsumer<Vec3, List<? extends Entity>>` |  |
| `ORDER_RANDOM` | `BiConsumer<Vec3, List<? extends Entity>>` |  |
| `SUGGEST_NOTHING` | `BiFunction<SuggestionsBuilder, Consumer<SuggestionsBuilder>, CompletableFuture<Suggestions>>` |  |

## Methods

### EntitySelectorParser

```java
public EntitySelectorParser(StringReader p_121220_, boolean p_121221_)
```

**Parameters:**

- `p_121220_` (`StringReader`)
- `p_121221_` (`boolean`)

**Returns:** `public`

### allowSelectors

```java
<S> public static <S> boolean allowSelectors(S p_353135_)
```

**Parameters:**

- `p_353135_` (`S`)

**Returns:** `public static <S> boolean`

### getSelector

```java
public EntitySelector getSelector()
```

**Returns:** `public EntitySelector`

### Vec3

```java
> new Vec3(this.x == null ? p_121258_.x : this.x, this.y == null ? p_121258_.y : this.y, this.z == null ? p_121258_.z : this.z)
```

**Parameters:**

- `this.x` (`this.x == null ? p_121258_.x :`)
- `this.y` (`this.y == null ? p_121258_.y :`)
- `this.z` (`this.z == null ? p_121258_.z :`)

**Returns:** `> new`

### createAabb

```java
private AABB createAabb(double p_121234_, double p_121235_, double p_121236_)
```

**Parameters:**

- `p_121234_` (`double`)
- `p_121235_` (`double`)
- `p_121236_` (`double`)

**Returns:** `private AABB`

### AABB

```java
return new AABB()
```

**Returns:** `return new`

### finalizePredicates

```java
public void finalizePredicates()
```

**Returns:** `public void`

### createRotationPredicate

```java
private Predicate<Entity> createRotationPredicate(WrappedMinMaxBounds p_121255_, ToDoubleFunction<Entity> p_121256_)
```

**Parameters:**

- `p_121255_` (`WrappedMinMaxBounds`)
- `p_121256_` (`ToDoubleFunction<Entity>`)

**Returns:** `private Predicate<Entity>`

### parseSelector

```java
protected void parseSelector()
```

**Returns:** `protected void`

### parseNameOrUUID

```java
protected void parseNameOrUUID()
```

**Returns:** `protected void`

### parseOptions

```java
public void parseOptions()
```

**Returns:** `public void`

### shouldInvertValue

```java
public boolean shouldInvertValue()
```

**Returns:** `public boolean`

### isTag

```java
public boolean isTag()
```

**Returns:** `public boolean`

### getReader

```java
public StringReader getReader()
```

**Returns:** `public StringReader`

### addPredicate

```java
public void addPredicate(Predicate<Entity> p_121273_)
```

**Parameters:**

- `p_121273_` (`Predicate<Entity>`)

**Returns:** `public void`

### setWorldLimited

```java
public void setWorldLimited()
```

**Returns:** `public void`

### getDistance

```java
public MinMaxBounds.Doubles getDistance()
```

**Returns:** `public MinMaxBounds.Doubles`

### setDistance

```java
public void setDistance(MinMaxBounds.Doubles p_175128_)
```

**Parameters:**

- `p_175128_` (`MinMaxBounds.Doubles`)

**Returns:** `public void`

### getLevel

```java
public MinMaxBounds.Ints getLevel()
```

**Returns:** `public MinMaxBounds.Ints`

### setLevel

```java
public void setLevel(MinMaxBounds.Ints p_121246_)
```

**Parameters:**

- `p_121246_` (`MinMaxBounds.Ints`)

**Returns:** `public void`

### getRotX

```java
public WrappedMinMaxBounds getRotX()
```

**Returns:** `public WrappedMinMaxBounds`

### setRotX

```java
public void setRotX(WrappedMinMaxBounds p_121253_)
```

**Parameters:**

- `p_121253_` (`WrappedMinMaxBounds`)

**Returns:** `public void`

### getRotY

```java
public WrappedMinMaxBounds getRotY()
```

**Returns:** `public WrappedMinMaxBounds`

### setRotY

```java
public void setRotY(WrappedMinMaxBounds p_121290_)
```

**Parameters:**

- `p_121290_` (`WrappedMinMaxBounds`)

**Returns:** `public void`

### getX

```java
public Double getX()
```

**Returns:** `Double`

### getY

```java
public Double getY()
```

**Returns:** `Double`

### getZ

```java
public Double getZ()
```

**Returns:** `Double`

### setX

```java
public void setX(double p_121232_)
```

**Parameters:**

- `p_121232_` (`double`)

**Returns:** `public void`

### setY

```java
public void setY(double p_121283_)
```

**Parameters:**

- `p_121283_` (`double`)

**Returns:** `public void`

### setZ

```java
public void setZ(double p_121306_)
```

**Parameters:**

- `p_121306_` (`double`)

**Returns:** `public void`

### setDeltaX

```java
public void setDeltaX(double p_121319_)
```

**Parameters:**

- `p_121319_` (`double`)

**Returns:** `public void`

### setDeltaY

```java
public void setDeltaY(double p_121332_)
```

**Parameters:**

- `p_121332_` (`double`)

**Returns:** `public void`

### setDeltaZ

```java
public void setDeltaZ(double p_121340_)
```

**Parameters:**

- `p_121340_` (`double`)

**Returns:** `public void`

### getDeltaX

```java
public Double getDeltaX()
```

**Returns:** `Double`

### getDeltaY

```java
public Double getDeltaY()
```

**Returns:** `Double`

### getDeltaZ

```java
public Double getDeltaZ()
```

**Returns:** `Double`

### setMaxResults

```java
public void setMaxResults(int p_121238_)
```

**Parameters:**

- `p_121238_` (`int`)

**Returns:** `public void`

### setIncludesEntities

```java
public void setIncludesEntities(boolean p_121280_)
```

**Parameters:**

- `p_121280_` (`boolean`)

**Returns:** `public void`

### getOrder

```java
public BiConsumer<Vec3, List<? extends Entity>> getOrder()
```

**Returns:** `public BiConsumer<Vec3, List<? extends Entity>>`

### setOrder

```java
public void setOrder(BiConsumer<Vec3, List<? extends Entity>> p_121269_)
```

**Parameters:**

- `p_121269_` (`BiConsumer<Vec3, List<? extends Entity>>`)

**Returns:** `public void`

### parse

```java
public EntitySelector parse()
```

**Returns:** `public EntitySelector`

### fillSelectorSuggestions

```java
private static void fillSelectorSuggestions(SuggestionsBuilder p_121248_)
```

**Parameters:**

- `p_121248_` (`SuggestionsBuilder`)

**Returns:** `private static void`

### suggestNameOrSelector

```java
private CompletableFuture<Suggestions> suggestNameOrSelector(SuggestionsBuilder p_121287_, Consumer<SuggestionsBuilder> p_121288_)
```

**Parameters:**

- `p_121287_` (`SuggestionsBuilder`)
- `p_121288_` (`Consumer<SuggestionsBuilder>`)

**Returns:** `private CompletableFuture<Suggestions>`

### fillSelectorSuggestions

```java
 fillSelectorSuggestions()
```

**Returns:** ``

### suggestName

```java
private CompletableFuture<Suggestions> suggestName(SuggestionsBuilder p_121310_, Consumer<SuggestionsBuilder> p_121311_)
```

**Parameters:**

- `p_121310_` (`SuggestionsBuilder`)
- `p_121311_` (`Consumer<SuggestionsBuilder>`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestSelector

```java
private CompletableFuture<Suggestions> suggestSelector(SuggestionsBuilder p_121323_, Consumer<SuggestionsBuilder> p_121324_)
```

**Parameters:**

- `p_121323_` (`SuggestionsBuilder`)
- `p_121324_` (`Consumer<SuggestionsBuilder>`)

**Returns:** `private CompletableFuture<Suggestions>`

### fillSelectorSuggestions

```java
 fillSelectorSuggestions()
```

**Returns:** ``

### suggestOpenOptions

```java
private CompletableFuture<Suggestions> suggestOpenOptions(SuggestionsBuilder p_121334_, Consumer<SuggestionsBuilder> p_121335_)
```

**Parameters:**

- `p_121334_` (`SuggestionsBuilder`)
- `p_121335_` (`Consumer<SuggestionsBuilder>`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestOptionsKeyOrClose

```java
private CompletableFuture<Suggestions> suggestOptionsKeyOrClose(SuggestionsBuilder p_121342_, Consumer<SuggestionsBuilder> p_121343_)
```

**Parameters:**

- `p_121342_` (`SuggestionsBuilder`)
- `p_121343_` (`Consumer<SuggestionsBuilder>`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestOptionsKey

```java
private CompletableFuture<Suggestions> suggestOptionsKey(SuggestionsBuilder p_121348_, Consumer<SuggestionsBuilder> p_121349_)
```

**Parameters:**

- `p_121348_` (`SuggestionsBuilder`)
- `p_121349_` (`Consumer<SuggestionsBuilder>`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestOptionsNextOrClose

```java
private CompletableFuture<Suggestions> suggestOptionsNextOrClose(SuggestionsBuilder p_121354_, Consumer<SuggestionsBuilder> p_121355_)
```

**Parameters:**

- `p_121354_` (`SuggestionsBuilder`)
- `p_121355_` (`Consumer<SuggestionsBuilder>`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestEquals

```java
private CompletableFuture<Suggestions> suggestEquals(SuggestionsBuilder p_175144_, Consumer<SuggestionsBuilder> p_175145_)
```

**Parameters:**

- `p_175144_` (`SuggestionsBuilder`)
- `p_175145_` (`Consumer<SuggestionsBuilder>`)

**Returns:** `private CompletableFuture<Suggestions>`

### isCurrentEntity

```java
public boolean isCurrentEntity()
```

**Returns:** `public boolean`

### setSuggestions

```java
public void setSuggestions(BiFunction<SuggestionsBuilder, Consumer<SuggestionsBuilder>, CompletableFuture<Suggestions>> p_121271_)
```

**Parameters:**

- `p_121271_` (`BiFunction<SuggestionsBuilder, Consumer<SuggestionsBuilder>, CompletableFuture<Suggestions>>`)

**Returns:** `public void`

### fillSuggestions

```java
public CompletableFuture<Suggestions> fillSuggestions(SuggestionsBuilder p_121250_, Consumer<SuggestionsBuilder> p_121251_)
```

**Parameters:**

- `p_121250_` (`SuggestionsBuilder`)
- `p_121251_` (`Consumer<SuggestionsBuilder>`)

**Returns:** `public CompletableFuture<Suggestions>`

### hasNameEquals

```java
public boolean hasNameEquals()
```

**Returns:** `public boolean`

### setHasNameEquals

```java
public void setHasNameEquals(boolean p_121303_)
```

**Parameters:**

- `p_121303_` (`boolean`)

**Returns:** `public void`

### hasNameNotEquals

```java
public boolean hasNameNotEquals()
```

**Returns:** `public boolean`

### setHasNameNotEquals

```java
public void setHasNameNotEquals(boolean p_121316_)
```

**Parameters:**

- `p_121316_` (`boolean`)

**Returns:** `public void`

### isLimited

```java
public boolean isLimited()
```

**Returns:** `public boolean`

### setLimited

```java
public void setLimited(boolean p_121329_)
```

**Parameters:**

- `p_121329_` (`boolean`)

**Returns:** `public void`

### isSorted

```java
public boolean isSorted()
```

**Returns:** `public boolean`

### setSorted

```java
public void setSorted(boolean p_121337_)
```

**Parameters:**

- `p_121337_` (`boolean`)

**Returns:** `public void`

### hasGamemodeEquals

```java
public boolean hasGamemodeEquals()
```

**Returns:** `public boolean`

### setHasGamemodeEquals

```java
public void setHasGamemodeEquals(boolean p_121345_)
```

**Parameters:**

- `p_121345_` (`boolean`)

**Returns:** `public void`

### hasGamemodeNotEquals

```java
public boolean hasGamemodeNotEquals()
```

**Returns:** `public boolean`

### setHasGamemodeNotEquals

```java
public void setHasGamemodeNotEquals(boolean p_121351_)
```

**Parameters:**

- `p_121351_` (`boolean`)

**Returns:** `public void`

### hasTeamEquals

```java
public boolean hasTeamEquals()
```

**Returns:** `public boolean`

### setHasTeamEquals

```java
public void setHasTeamEquals(boolean p_121357_)
```

**Parameters:**

- `p_121357_` (`boolean`)

**Returns:** `public void`

### hasTeamNotEquals

```java
public boolean hasTeamNotEquals()
```

**Returns:** `public boolean`

### setHasTeamNotEquals

```java
public void setHasTeamNotEquals(boolean p_121360_)
```

**Parameters:**

- `p_121360_` (`boolean`)

**Returns:** `public void`

### limitToType

```java
public void limitToType(EntityType<?> p_121242_)
```

**Parameters:**

- `p_121242_` (`EntityType<?>`)

**Returns:** `public void`

### setTypeLimitedInversely

```java
public void setTypeLimitedInversely()
```

**Returns:** `public void`

### isTypeLimited

```java
public boolean isTypeLimited()
```

**Returns:** `public boolean`

### isTypeLimitedInversely

```java
public boolean isTypeLimitedInversely()
```

**Returns:** `public boolean`

### hasScores

```java
public boolean hasScores()
```

**Returns:** `public boolean`

### setHasScores

```java
public void setHasScores(boolean p_121366_)
```

**Parameters:**

- `p_121366_` (`boolean`)

**Returns:** `public void`

### hasAdvancements

```java
public boolean hasAdvancements()
```

**Returns:** `public boolean`

### setHasAdvancements

```java
public void setHasAdvancements(boolean p_121369_)
```

**Parameters:**

- `p_121369_` (`boolean`)

**Returns:** `public void`
