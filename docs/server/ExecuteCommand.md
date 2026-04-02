# ExecuteCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_214435_, CommandBuildContext p_214436_)
```

**Parameters:**

- `p_214435_` (`CommandDispatcher<CommandSourceStack>`)
- `p_214436_` (`CommandBuildContext`)

**Returns:** `public static void`

### wrapStores

```java
private static ArgumentBuilder<CommandSourceStack, ?> wrapStores(LiteralCommandNode<CommandSourceStack> p_137094_, LiteralArgumentBuilder<CommandSourceStack> p_137095_, boolean p_137096_)
```

**Parameters:**

- `p_137094_` (`LiteralCommandNode<CommandSourceStack>`)
- `p_137095_` (`LiteralArgumentBuilder<CommandSourceStack>`)
- `p_137096_` (`boolean`)

**Returns:** `private static ArgumentBuilder<CommandSourceStack, ?>`

### storeValue

```java
private static CommandSourceStack storeValue(CommandSourceStack p_137108_, Collection<ScoreHolder> p_137109_, Objective p_137110_, boolean p_137111_)
```

**Parameters:**

- `p_137108_` (`CommandSourceStack`)
- `p_137109_` (`Collection<ScoreHolder>`)
- `p_137110_` (`Objective`)
- `p_137111_` (`boolean`)

**Returns:** `private static CommandSourceStack`

### storeValue

```java
private static CommandSourceStack storeValue(CommandSourceStack p_137113_, CustomBossEvent p_137114_, boolean p_137115_, boolean p_137116_)
```

**Parameters:**

- `p_137113_` (`CommandSourceStack`)
- `p_137114_` (`CustomBossEvent`)
- `p_137115_` (`boolean`)
- `p_137116_` (`boolean`)

**Returns:** `private static CommandSourceStack`

### storeData

```java
private static CommandSourceStack storeData(CommandSourceStack p_137118_, DataAccessor p_137119_, NbtPathArgument.NbtPath p_137120_, IntFunction<Tag> p_137121_, boolean p_137122_)
```

**Parameters:**

- `p_137118_` (`CommandSourceStack`)
- `p_137119_` (`DataAccessor`)
- `p_137120_` (`NbtPathArgument.NbtPath`)
- `p_137121_` (`IntFunction<Tag>`)
- `p_137122_` (`boolean`)

**Returns:** `private static CommandSourceStack`

### isChunkLoaded

```java
private static boolean isChunkLoaded(ServerLevel p_265261_, BlockPos p_265260_)
```

**Parameters:**

- `p_265261_` (`ServerLevel`)
- `p_265260_` (`BlockPos`)

**Returns:** `private static boolean`

### addConditionals

```java
private static ArgumentBuilder<CommandSourceStack, ?> addConditionals(CommandNode<CommandSourceStack> p_214438_, LiteralArgumentBuilder<CommandSourceStack> p_214439_, boolean p_214440_, CommandBuildContext p_214441_)
```

**Parameters:**

- `p_214438_` (`CommandNode<CommandSourceStack>`)
- `p_214439_` (`LiteralArgumentBuilder<CommandSourceStack>`)
- `p_214440_` (`boolean`)
- `p_214441_` (`CommandBuildContext`)

**Returns:** `private static ArgumentBuilder<CommandSourceStack, ?>`

### countItems

```java
private static int countItems(Iterable<? extends Entity> p_332642_, SlotRange p_332729_, Predicate<ItemStack> p_332803_)
```

**Parameters:**

- `p_332642_` (`Iterable<? extends Entity>`)
- `p_332729_` (`SlotRange`)
- `p_332803_` (`Predicate<ItemStack>`)

**Returns:** `private static int`

### countItems

```java
private static int countItems(CommandSourceStack p_332730_, BlockPos p_332679_, SlotRange p_332656_, Predicate<ItemStack> p_332801_)
```

**Parameters:**

- `p_332730_` (`CommandSourceStack`)
- `p_332679_` (`BlockPos`)
- `p_332656_` (`SlotRange`)
- `p_332801_` (`Predicate<ItemStack>`)

**Returns:** `private static int`

### createNumericConditionalHandler

```java
private static Command<CommandSourceStack> createNumericConditionalHandler(boolean p_137167_, ExecuteCommand.CommandNumericPredicate p_137168_)
```

**Parameters:**

- `p_137167_` (`boolean`)
- `p_137168_` (`ExecuteCommand.CommandNumericPredicate`)

**Returns:** `private static Command<CommandSourceStack>`

### checkMatchingData

```java
private static int checkMatchingData(DataAccessor p_137146_, NbtPathArgument.NbtPath p_137147_)
```

**Parameters:**

- `p_137146_` (`DataAccessor`)
- `p_137147_` (`NbtPathArgument.NbtPath`)

**Returns:** `private static int`

### checkScore

```java
private static boolean checkScore(CommandContext<CommandSourceStack> p_137065_, ExecuteCommand.IntBiPredicate p_313900_)
```

**Parameters:**

- `p_137065_` (`CommandContext<CommandSourceStack>`)
- `p_313900_` (`ExecuteCommand.IntBiPredicate`)

**Returns:** `private static boolean`

### checkScore

```java
private static boolean checkScore(CommandContext<CommandSourceStack> p_137059_, MinMaxBounds.Ints p_137060_)
```

**Parameters:**

- `p_137059_` (`CommandContext<CommandSourceStack>`)
- `p_137060_` (`MinMaxBounds.Ints`)

**Returns:** `private static boolean`

### checkCustomPredicate

```java
private static boolean checkCustomPredicate(CommandSourceStack p_137105_, Holder<LootItemCondition> p_335673_)
```

**Parameters:**

- `p_137105_` (`CommandSourceStack`)
- `p_335673_` (`Holder<LootItemCondition>`)

**Returns:** `private static boolean`

### expect

```java
private static Collection<CommandSourceStack> expect(CommandContext<CommandSourceStack> p_137071_, boolean p_137072_, boolean p_137073_)
```

**Parameters:**

- `p_137071_` (`CommandContext<CommandSourceStack>`)
- `p_137072_` (`boolean`)
- `p_137073_` (`boolean`)

**Returns:** `private static Collection<CommandSourceStack>`

### addConditional

```java
private static ArgumentBuilder<CommandSourceStack, ?> addConditional(CommandNode<CommandSourceStack> p_137075_, ArgumentBuilder<CommandSourceStack, ?> p_137076_, boolean p_137077_, ExecuteCommand.CommandPredicate p_137078_)
```

**Parameters:**

- `p_137075_` (`CommandNode<CommandSourceStack>`)
- `p_137076_` (`ArgumentBuilder<CommandSourceStack, ?>`)
- `p_137077_` (`boolean`)
- `p_137078_` (`ExecuteCommand.CommandPredicate`)

**Returns:** `private static ArgumentBuilder<CommandSourceStack, ?>`

### addIfBlocksConditional

```java
private static ArgumentBuilder<CommandSourceStack, ?> addIfBlocksConditional(CommandNode<CommandSourceStack> p_137080_, ArgumentBuilder<CommandSourceStack, ?> p_137081_, boolean p_137082_, boolean p_137083_)
```

**Parameters:**

- `p_137080_` (`CommandNode<CommandSourceStack>`)
- `p_137081_` (`ArgumentBuilder<CommandSourceStack, ?>`)
- `p_137082_` (`boolean`)
- `p_137083_` (`boolean`)

**Returns:** `private static ArgumentBuilder<CommandSourceStack, ?>`

### checkIfRegions

```java
private static int checkIfRegions(CommandContext<CommandSourceStack> p_137068_, boolean p_137069_)
```

**Parameters:**

- `p_137068_` (`CommandContext<CommandSourceStack>`)
- `p_137069_` (`boolean`)

**Returns:** `private static int`

### checkUnlessRegions

```java
private static int checkUnlessRegions(CommandContext<CommandSourceStack> p_137194_, boolean p_137195_)
```

**Parameters:**

- `p_137194_` (`CommandContext<CommandSourceStack>`)
- `p_137195_` (`boolean`)

**Returns:** `private static int`

### checkRegions

```java
private static OptionalInt checkRegions(CommandContext<CommandSourceStack> p_137221_, boolean p_137222_)
```

**Parameters:**

- `p_137221_` (`CommandContext<CommandSourceStack>`)
- `p_137222_` (`boolean`)

**Returns:** `private static OptionalInt`

### checkRegions

```java
private static OptionalInt checkRegions(ServerLevel p_137037_, BlockPos p_137038_, BlockPos p_137039_, BlockPos p_137040_, boolean p_137041_)
```

**Parameters:**

- `p_137037_` (`ServerLevel`)
- `p_137038_` (`BlockPos`)
- `p_137039_` (`BlockPos`)
- `p_137040_` (`BlockPos`)
- `p_137041_` (`boolean`)

**Returns:** `private static OptionalInt`

### expandOneToOneEntityRelation

```java
private static RedirectModifier<CommandSourceStack> expandOneToOneEntityRelation(Function<Entity, Optional<Entity>> p_265114_)
```

**Parameters:**

- `p_265114_` (`Function<Entity, Optional<Entity>>`)

**Returns:** `private static RedirectModifier<CommandSourceStack>`

### expandOneToManyEntityRelation

```java
private static RedirectModifier<CommandSourceStack> expandOneToManyEntityRelation(Function<Entity, Stream<Entity>> p_265496_)
```

**Parameters:**

- `p_265496_` (`Function<Entity, Stream<Entity>>`)

**Returns:** `private static RedirectModifier<CommandSourceStack>`

### createRelationOperations

```java
private static LiteralArgumentBuilder<CommandSourceStack> createRelationOperations(CommandNode<CommandSourceStack> p_265189_, LiteralArgumentBuilder<CommandSourceStack> p_265783_)
```

**Parameters:**

- `p_265189_` (`CommandNode<CommandSourceStack>`)
- `p_265783_` (`LiteralArgumentBuilder<CommandSourceStack>`)

**Returns:** `private static LiteralArgumentBuilder<CommandSourceStack>`

### spawnEntityAndRedirect

```java
private static CommandSourceStack spawnEntityAndRedirect(CommandSourceStack p_270320_, Holder.Reference<EntityType<?>> p_270344_)
```

**Parameters:**

- `p_270320_` (`CommandSourceStack`)
- `p_270344_` (`Holder.Reference<EntityType<?>>`)

**Returns:** `private static CommandSourceStack`

### scheduleFunctionConditionsAndTest

```java
public static <T extends ExecutionCommandSource<T>> void scheduleFunctionConditionsAndTest(T p_309624_, List<T> p_306057_, Function<T, T> p_306045_, IntPredicate p_306343_, ContextChain<T> p_306308_, CompoundTag p_306076_, ExecutionControl<T> p_306202_, ExecuteCommand.CommandGetter<T, Collection<CommandFunction<T>>> p_305836_, ChainModifiers p_309703_)
```

**Parameters:**

- `p_309624_` (`T`)
- `p_306057_` (`List<T>`)
- `p_306045_` (`Function<T, T>`)
- `p_306343_` (`IntPredicate`)
- `p_306308_` (`ContextChain<T>`)
- `p_306076_` (`CompoundTag`)
- `p_306202_` (`ExecutionControl<T>`)
- `p_305836_` (`ExecuteCommand.CommandGetter<T, Collection<CommandFunction<T>>>`)
- `p_309703_` (`ChainModifiers`)

**Returns:** `public static <T extends ExecutionCommandSource<T>> void`

### get

```java
R get(CommandContext<T> p_306207_)
```

**Parameters:**

- `p_306207_` (`CommandContext<T>`)

**Returns:** `R`

### test

```java
int test(CommandContext<CommandSourceStack> p_137301_)
```

**Parameters:**

- `p_137301_` (`CommandContext<CommandSourceStack>`)

**Returns:** `int`

### test

```java
boolean test(CommandContext<CommandSourceStack> p_137303_)
```

**Parameters:**

- `p_137303_` (`CommandContext<CommandSourceStack>`)

**Returns:** `boolean`

### ExecuteIfFunctionCustomModifier

```java
 ExecuteIfFunctionCustomModifier(boolean p_305979_)
```

**Parameters:**

- `p_305979_` (`boolean`)

**Returns:** ``

### apply

```java
public void apply(CommandSourceStack p_309582_, List<CommandSourceStack> p_309642_, ContextChain<CommandSourceStack> p_309682_, ChainModifiers p_309694_, ExecutionControl<CommandSourceStack> p_309646_)
```

**Parameters:**

- `p_309582_` (`CommandSourceStack`)
- `p_309642_` (`List<CommandSourceStack>`)
- `p_309682_` (`ContextChain<CommandSourceStack>`)
- `p_309694_` (`ChainModifiers`)
- `p_309646_` (`ExecutionControl<CommandSourceStack>`)

**Returns:** `public void`

### test

```java
boolean test(int p_313938_, int p_313809_)
```

**Parameters:**

- `p_313938_` (`int`)
- `p_313809_` (`int`)

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CommandGetter` | interface |  |
