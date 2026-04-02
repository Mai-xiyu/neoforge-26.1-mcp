# RandomCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_295018_)
```

**Parameters:**

- `p_295018_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### drawRandomValueTree

```java
private static LiteralArgumentBuilder<CommandSourceStack> drawRandomValueTree(String p_295419_, boolean p_295785_)
```

**Parameters:**

- `p_295419_` (`String`)
- `p_295785_` (`boolean`)

**Returns:** `private static LiteralArgumentBuilder<CommandSourceStack>`

### suggestRandomSequence

```java
private static CompletableFuture<Suggestions> suggestRandomSequence(CommandContext<CommandSourceStack> p_296223_, SuggestionsBuilder p_295797_)
```

**Parameters:**

- `p_296223_` (`CommandContext<CommandSourceStack>`)
- `p_295797_` (`SuggestionsBuilder`)

**Returns:** `private static CompletableFuture<Suggestions>`

### randomSample

```java
private static int randomSample(CommandSourceStack p_295774_, MinMaxBounds.Ints p_295453_, ResourceLocation p_294336_, boolean p_296222_)
```

**Parameters:**

- `p_295774_` (`CommandSourceStack`)
- `p_295453_` (`MinMaxBounds.Ints`)
- `p_294336_` (`ResourceLocation`)
- `p_296222_` (`boolean`)

**Returns:** `private static int`

### resetSequence

```java
private static int resetSequence(CommandSourceStack p_295984_, ResourceLocation p_296220_)
```

**Parameters:**

- `p_295984_` (`CommandSourceStack`)
- `p_296220_` (`ResourceLocation`)

**Returns:** `private static int`

### resetSequence

```java
private static int resetSequence(CommandSourceStack p_296416_, ResourceLocation p_294611_, int p_295199_, boolean p_295241_, boolean p_294844_)
```

**Parameters:**

- `p_296416_` (`CommandSourceStack`)
- `p_294611_` (`ResourceLocation`)
- `p_295199_` (`int`)
- `p_295241_` (`boolean`)
- `p_294844_` (`boolean`)

**Returns:** `private static int`

### resetAllSequences

```java
private static int resetAllSequences(CommandSourceStack p_294291_)
```

**Parameters:**

- `p_294291_` (`CommandSourceStack`)

**Returns:** `private static int`

### resetAllSequencesAndSetNewDefaults

```java
private static int resetAllSequencesAndSetNewDefaults(CommandSourceStack p_294151_, int p_295754_, boolean p_294405_, boolean p_294396_)
```

**Parameters:**

- `p_294151_` (`CommandSourceStack`)
- `p_295754_` (`int`)
- `p_294405_` (`boolean`)
- `p_294396_` (`boolean`)

**Returns:** `private static int`
