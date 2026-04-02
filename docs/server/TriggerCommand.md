# TriggerCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_139142_)
```

**Parameters:**

- `p_139142_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### suggestObjectives

```java
public static CompletableFuture<Suggestions> suggestObjectives(CommandSourceStack p_139149_, SuggestionsBuilder p_139150_)
```

**Parameters:**

- `p_139149_` (`CommandSourceStack`)
- `p_139150_` (`SuggestionsBuilder`)

**Returns:** `public static CompletableFuture<Suggestions>`

### addValue

```java
private static int addValue(CommandSourceStack p_139155_, ServerPlayer p_313736_, Objective p_313848_, int p_139157_)
```

**Parameters:**

- `p_139155_` (`CommandSourceStack`)
- `p_313736_` (`ServerPlayer`)
- `p_313848_` (`Objective`)
- `p_139157_` (`int`)

**Returns:** `private static int`

### setValue

```java
private static int setValue(CommandSourceStack p_139161_, ServerPlayer p_313837_, Objective p_313724_, int p_139163_)
```

**Parameters:**

- `p_139161_` (`CommandSourceStack`)
- `p_313837_` (`ServerPlayer`)
- `p_313724_` (`Objective`)
- `p_139163_` (`int`)

**Returns:** `private static int`

### simpleTrigger

```java
private static int simpleTrigger(CommandSourceStack p_139152_, ServerPlayer p_313865_, Objective p_313706_)
```

**Parameters:**

- `p_139152_` (`CommandSourceStack`)
- `p_313865_` (`ServerPlayer`)
- `p_313706_` (`Objective`)

**Returns:** `private static int`

### getScore

```java
private static ScoreAccess getScore(Scoreboard p_313748_, ScoreHolder p_313873_, Objective p_139140_)
```

**Parameters:**

- `p_313748_` (`Scoreboard`)
- `p_313873_` (`ScoreHolder`)
- `p_139140_` (`Objective`)

**Returns:** `private static ScoreAccess`
