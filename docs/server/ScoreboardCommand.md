# ScoreboardCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_138469_, CommandBuildContext p_324608_)
```

**Parameters:**

- `p_138469_` (`CommandDispatcher<CommandSourceStack>`)
- `p_324608_` (`CommandBuildContext`)

**Returns:** `public static void`

### addNumberFormats

```java
private static ArgumentBuilder<CommandSourceStack, ?> addNumberFormats(CommandBuildContext p_323655_, ArgumentBuilder<CommandSourceStack, ?> p_313757_, ScoreboardCommand.NumberFormatCommandExecutor p_313912_)
```

**Parameters:**

- `p_323655_` (`CommandBuildContext`)
- `p_313757_` (`ArgumentBuilder<CommandSourceStack, ?>`)
- `p_313912_` (`ScoreboardCommand.NumberFormatCommandExecutor`)

**Returns:** `private static ArgumentBuilder<CommandSourceStack, ?>`

### createRenderTypeModify

```java
private static LiteralArgumentBuilder<CommandSourceStack> createRenderTypeModify()
```

**Returns:** `private static LiteralArgumentBuilder<CommandSourceStack>`

### suggestTriggers

```java
private static CompletableFuture<Suggestions> suggestTriggers(CommandSourceStack p_138511_, Collection<ScoreHolder> p_138512_, SuggestionsBuilder p_138513_)
```

**Parameters:**

- `p_138511_` (`CommandSourceStack`)
- `p_138512_` (`Collection<ScoreHolder>`)
- `p_138513_` (`SuggestionsBuilder`)

**Returns:** `private static CompletableFuture<Suggestions>`

### getScore

```java
private static int getScore(CommandSourceStack p_138499_, ScoreHolder p_313820_, Objective p_138501_)
```

**Parameters:**

- `p_138499_` (`CommandSourceStack`)
- `p_313820_` (`ScoreHolder`)
- `p_138501_` (`Objective`)

**Returns:** `private static int`

### getFirstTargetName

```java
private static Component getFirstTargetName(Collection<ScoreHolder> p_313737_)
```

**Parameters:**

- `p_313737_` (`Collection<ScoreHolder>`)

**Returns:** `private static Component`

### performOperation

```java
private static int performOperation(CommandSourceStack p_138524_, Collection<ScoreHolder> p_138525_, Objective p_138526_, OperationArgument.Operation p_138527_, Collection<ScoreHolder> p_138528_, Objective p_138529_)
```

**Parameters:**

- `p_138524_` (`CommandSourceStack`)
- `p_138525_` (`Collection<ScoreHolder>`)
- `p_138526_` (`Objective`)
- `p_138527_` (`OperationArgument.Operation`)
- `p_138528_` (`Collection<ScoreHolder>`)
- `p_138529_` (`Objective`)

**Returns:** `private static int`

### enableTrigger

```java
private static int enableTrigger(CommandSourceStack p_138515_, Collection<ScoreHolder> p_138516_, Objective p_138517_)
```

**Parameters:**

- `p_138515_` (`CommandSourceStack`)
- `p_138516_` (`Collection<ScoreHolder>`)
- `p_138517_` (`Objective`)

**Returns:** `private static int`

### resetScores

```java
private static int resetScores(CommandSourceStack p_138508_, Collection<ScoreHolder> p_138509_)
```

**Parameters:**

- `p_138508_` (`CommandSourceStack`)
- `p_138509_` (`Collection<ScoreHolder>`)

**Returns:** `private static int`

### resetScore

```java
private static int resetScore(CommandSourceStack p_138541_, Collection<ScoreHolder> p_138542_, Objective p_138543_)
```

**Parameters:**

- `p_138541_` (`CommandSourceStack`)
- `p_138542_` (`Collection<ScoreHolder>`)
- `p_138543_` (`Objective`)

**Returns:** `private static int`

### setScore

```java
private static int setScore(CommandSourceStack p_138519_, Collection<ScoreHolder> p_138520_, Objective p_138521_, int p_138522_)
```

**Parameters:**

- `p_138519_` (`CommandSourceStack`)
- `p_138520_` (`Collection<ScoreHolder>`)
- `p_138521_` (`Objective`)
- `p_138522_` (`int`)

**Returns:** `private static int`

### setScoreDisplay

```java
private static int setScoreDisplay(CommandSourceStack p_313937_, Collection<ScoreHolder> p_313923_, Objective p_313702_, Component p_313807_)
```

**Parameters:**

- `p_313937_` (`CommandSourceStack`)
- `p_313923_` (`Collection<ScoreHolder>`)
- `p_313702_` (`Objective`)
- `p_313807_` (`Component`)

**Returns:** `private static int`

### setScoreNumberFormat

```java
private static int setScoreNumberFormat(CommandSourceStack p_313794_, Collection<ScoreHolder> p_313780_, Objective p_313752_, NumberFormat p_313869_)
```

**Parameters:**

- `p_313794_` (`CommandSourceStack`)
- `p_313780_` (`Collection<ScoreHolder>`)
- `p_313752_` (`Objective`)
- `p_313869_` (`NumberFormat`)

**Returns:** `private static int`

### addScore

```java
private static int addScore(CommandSourceStack p_138545_, Collection<ScoreHolder> p_138546_, Objective p_138547_, int p_138548_)
```

**Parameters:**

- `p_138545_` (`CommandSourceStack`)
- `p_138546_` (`Collection<ScoreHolder>`)
- `p_138547_` (`Objective`)
- `p_138548_` (`int`)

**Returns:** `private static int`

### removeScore

```java
private static int removeScore(CommandSourceStack p_138554_, Collection<ScoreHolder> p_138555_, Objective p_138556_, int p_138557_)
```

**Parameters:**

- `p_138554_` (`CommandSourceStack`)
- `p_138555_` (`Collection<ScoreHolder>`)
- `p_138556_` (`Objective`)
- `p_138557_` (`int`)

**Returns:** `private static int`

### listTrackedPlayers

```java
private static int listTrackedPlayers(CommandSourceStack p_138476_)
```

**Parameters:**

- `p_138476_` (`CommandSourceStack`)

**Returns:** `private static int`

### listTrackedPlayerScores

```java
private static int listTrackedPlayerScores(CommandSourceStack p_138496_, ScoreHolder p_313835_)
```

**Parameters:**

- `p_138496_` (`CommandSourceStack`)
- `p_313835_` (`ScoreHolder`)

**Returns:** `private static int`

### clearDisplaySlot

```java
private static int clearDisplaySlot(CommandSourceStack p_138478_, DisplaySlot p_294251_)
```

**Parameters:**

- `p_138478_` (`CommandSourceStack`)
- `p_294251_` (`DisplaySlot`)

**Returns:** `private static int`

### setDisplaySlot

```java
private static int setDisplaySlot(CommandSourceStack p_138481_, DisplaySlot p_294651_, Objective p_138483_)
```

**Parameters:**

- `p_138481_` (`CommandSourceStack`)
- `p_294651_` (`DisplaySlot`)
- `p_138483_` (`Objective`)

**Returns:** `private static int`

### setDisplayName

```java
private static int setDisplayName(CommandSourceStack p_138492_, Objective p_138493_, Component p_138494_)
```

**Parameters:**

- `p_138492_` (`CommandSourceStack`)
- `p_138493_` (`Objective`)
- `p_138494_` (`Component`)

**Returns:** `private static int`

### setDisplayAutoUpdate

```java
private static int setDisplayAutoUpdate(CommandSourceStack p_313915_, Objective p_313747_, boolean p_313790_)
```

**Parameters:**

- `p_313915_` (`CommandSourceStack`)
- `p_313747_` (`Objective`)
- `p_313790_` (`boolean`)

**Returns:** `private static int`

### setObjectiveFormat

```java
private static int setObjectiveFormat(CommandSourceStack p_313788_, Objective p_313769_, NumberFormat p_313731_)
```

**Parameters:**

- `p_313788_` (`CommandSourceStack`)
- `p_313769_` (`Objective`)
- `p_313731_` (`NumberFormat`)

**Returns:** `private static int`

### setRenderType

```java
private static int setRenderType(CommandSourceStack p_138488_, Objective p_138489_, ObjectiveCriteria.RenderType p_138490_)
```

**Parameters:**

- `p_138488_` (`CommandSourceStack`)
- `p_138489_` (`Objective`)
- `p_138490_` (`ObjectiveCriteria.RenderType`)

**Returns:** `private static int`

### removeObjective

```java
private static int removeObjective(CommandSourceStack p_138485_, Objective p_138486_)
```

**Parameters:**

- `p_138485_` (`CommandSourceStack`)
- `p_138486_` (`Objective`)

**Returns:** `private static int`

### addObjective

```java
private static int addObjective(CommandSourceStack p_138503_, String p_138504_, ObjectiveCriteria p_138505_, Component p_138506_)
```

**Parameters:**

- `p_138503_` (`CommandSourceStack`)
- `p_138504_` (`String`)
- `p_138505_` (`ObjectiveCriteria`)
- `p_138506_` (`Component`)

**Returns:** `private static int`

### listObjectives

```java
private static int listObjectives(CommandSourceStack p_138539_)
```

**Parameters:**

- `p_138539_` (`CommandSourceStack`)

**Returns:** `private static int`

### run

```java
int run(CommandContext<CommandSourceStack> p_313745_, NumberFormat p_313763_)
```

**Parameters:**

- `p_313745_` (`CommandContext<CommandSourceStack>`)
- `p_313763_` (`NumberFormat`)

**Returns:** `int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `NumberFormatCommandExecutor` | interface |  |
