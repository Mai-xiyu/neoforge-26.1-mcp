# GameRules

**Package:** `net.minecraft.world.level`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_RANDOM_TICK_SPEED` | `int` |  |
| `RULE_DOFIRETICK` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_MOBGRIEFING` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_KEEPINVENTORY` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_DOMOBSPAWNING` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_DOMOBLOOT` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_PROJECTILESCANBREAKBLOCKS` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_DOBLOCKDROPS` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_DOENTITYDROPS` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_COMMANDBLOCKOUTPUT` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_NATURAL_REGENERATION` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_DAYLIGHT` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_LOGADMINCOMMANDS` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_SHOWDEATHMESSAGES` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_RANDOMTICKING` | `GameRules.Key<GameRules.IntegerValue>` |  |
| `RULE_SENDCOMMANDFEEDBACK` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_REDUCEDDEBUGINFO` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_SPECTATORSGENERATECHUNKS` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_SPAWN_RADIUS` | `GameRules.Key<GameRules.IntegerValue>` |  |
| `RULE_DISABLE_ELYTRA_MOVEMENT_CHECK` | `GameRules.Key<GameRules.BooleanValue>` |  |
| `RULE_MAX_ENTITY_CRAMMING` | `GameRules.Key<GameRules.IntegerValue>` |  |
| `RULE_WEATHER_CYCLE` | `GameRules.Key<GameRules.BooleanValue>` |  |

## Methods

### register

```java
public static <T extends GameRules.Value<T>> GameRules.Key<T> register(String p_46190_, GameRules.Category p_46191_, GameRules.Type<T> p_46192_)
```

**Parameters:**

- `p_46190_` (`String`)
- `p_46191_` (`GameRules.Category`)
- `p_46192_` (`GameRules.Type<T>`)

**Returns:** `public static <T extends GameRules.Value<T>> GameRules.Key<T>`

### IllegalStateException

```java
throw new IllegalStateException("Duplicate game rule registration for " + p_46190_)
```

**Parameters:**

- `p_46190_` (`"Duplicate game rule registration for " +`)

**Returns:** `throw new`

### GameRules

```java
public GameRules(DynamicLike<?> p_46160_)
```

**Parameters:**

- `p_46160_` (`DynamicLike<?>`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### GameRules

```java
public GameRules()
```

**Returns:** `public`

### GameRules

```java
private GameRules(Map<GameRules.Key<?>, GameRules.Value<?>> p_46162_)
```

**Parameters:**

- `p_46162_` (`Map<GameRules.Key<?>, GameRules.Value<?>>`)

**Returns:** `private`

### getRule

```java
public <T extends GameRules.Value<T>> T getRule(GameRules.Key<T> p_46171_)
```

**Parameters:**

- `p_46171_` (`GameRules.Key<T>`)

**Returns:** `public <T extends GameRules.Value<T>> T`

### createTag

```java
public CompoundTag createTag()
```

**Returns:** `public CompoundTag`

### loadFromTag

```java
private void loadFromTag(DynamicLike<?> p_46184_)
```

**Parameters:**

- `p_46184_` (`DynamicLike<?>`)

**Returns:** `private void`

### copy

```java
public GameRules copy()
```

**Returns:** `public GameRules`

### visitGameRuleTypes

```java
public static void visitGameRuleTypes(GameRules.GameRuleTypeVisitor p_46165_)
```

**Parameters:**

- `p_46165_` (`GameRules.GameRuleTypeVisitor`)

**Returns:** `public static void`

### callVisitorCap

```java
private static <T extends GameRules.Value<T>> void callVisitorCap(GameRules.GameRuleTypeVisitor p_46167_, GameRules.Key<?> p_46168_, GameRules.Type<?> p_46169_)
```

**Parameters:**

- `p_46167_` (`GameRules.GameRuleTypeVisitor`)
- `p_46168_` (`GameRules.Key<?>`)
- `p_46169_` (`GameRules.Type<?>`)

**Returns:** `private static <T extends GameRules.Value<T>> void`

### assignFrom

```java
public void assignFrom(GameRules p_46177_, MinecraftServer p_46178_)
```

**Parameters:**

- `p_46177_` (`GameRules`)
- `p_46178_` (`MinecraftServer`)

**Returns:** `public void`

### assignCap

```java
private <T extends GameRules.Value<T>> void assignCap(GameRules.Key<T> p_46173_, GameRules p_46174_, MinecraftServer p_46175_)
```

**Parameters:**

- `p_46173_` (`GameRules.Key<T>`)
- `p_46174_` (`GameRules`)
- `p_46175_` (`MinecraftServer`)

**Returns:** `private <T extends GameRules.Value<T>> void`

### getBoolean

```java
public boolean getBoolean(GameRules.Key<GameRules.BooleanValue> p_46208_)
```

**Parameters:**

- `p_46208_` (`GameRules.Key<GameRules.BooleanValue>`)

**Returns:** `public boolean`

### getInt

```java
public int getInt(GameRules.Key<GameRules.IntegerValue> p_46216_)
```

**Parameters:**

- `p_46216_` (`GameRules.Key<GameRules.IntegerValue>`)

**Returns:** `public int`

### create

```java
public static GameRules.Type<GameRules.BooleanValue> create(boolean p_46253_, BiConsumer<MinecraftServer, GameRules.BooleanValue> p_46254_)
```

**Parameters:**

- `p_46253_` (`boolean`)
- `p_46254_` (`BiConsumer<MinecraftServer, GameRules.BooleanValue>`)

**Returns:** `public static GameRules.Type<GameRules.BooleanValue>`

### create

```java
public static GameRules.Type<GameRules.BooleanValue> create(boolean p_46251_)
```

**Parameters:**

- `p_46251_` (`boolean`)

**Returns:** `public static GameRules.Type<GameRules.BooleanValue>`

### BooleanValue

```java
public BooleanValue(GameRules.Type<GameRules.BooleanValue> p_46221_, boolean p_46222_)
```

**Parameters:**

- `p_46221_` (`GameRules.Type<GameRules.BooleanValue>`)
- `p_46222_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### updateFromArgument

```java
protected void updateFromArgument(CommandContext<CommandSourceStack> p_46231_, String p_46232_)
```

**Parameters:**

- `p_46231_` (`CommandContext<CommandSourceStack>`)
- `p_46232_` (`String`)

### get

```java
public boolean get()
```

**Returns:** `public boolean`

### set

```java
public void set(boolean p_46247_, MinecraftServer p_46248_)
```

**Parameters:**

- `p_46247_` (`boolean`)
- `p_46248_` (`MinecraftServer`)

**Returns:** `public void`

### serialize

```java
public String serialize()
```

**Returns:** `String`

### deserialize

```java
protected void deserialize(String p_46234_)
```

**Parameters:**

- `p_46234_` (`String`)

### getCommandResult

```java
public int getCommandResult()
```

**Returns:** `int`

### getSelf

```java
protected GameRules.BooleanValue getSelf()
```

**Returns:** `protected GameRules.BooleanValue`

### copy

```java
protected GameRules.BooleanValue copy()
```

**Returns:** `protected GameRules.BooleanValue`

### setFrom

```java
public void setFrom(GameRules.BooleanValue p_46225_, MinecraftServer p_46226_)
```

**Parameters:**

- `p_46225_` (`GameRules.BooleanValue`)
- `p_46226_` (`MinecraftServer`)

**Returns:** `public void`

### MISC

```java
, MISC()
```

**Returns:** `,`

### Category

```java
private Category(String p_46273_)
```

**Parameters:**

- `p_46273_` (`String`)

**Returns:** `private`

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `public String`

### visit

```java
default <T extends GameRules.Value<T>> void visit(GameRules.Key<T> p_46278_, GameRules.Type<T> p_46279_)
```

**Parameters:**

- `p_46278_` (`GameRules.Key<T>`)
- `p_46279_` (`GameRules.Type<T>`)

**Returns:** `default <T extends GameRules.Value<T>> void`

### visitBoolean

```java
default void visitBoolean(GameRules.Key<GameRules.BooleanValue> p_46280_, GameRules.Type<GameRules.BooleanValue> p_46281_)
```

**Parameters:**

- `p_46280_` (`GameRules.Key<GameRules.BooleanValue>`)
- `p_46281_` (`GameRules.Type<GameRules.BooleanValue>`)

**Returns:** `default void`

### visitInteger

```java
default void visitInteger(GameRules.Key<GameRules.IntegerValue> p_46282_, GameRules.Type<GameRules.IntegerValue> p_46283_)
```

**Parameters:**

- `p_46282_` (`GameRules.Key<GameRules.IntegerValue>`)
- `p_46283_` (`GameRules.Type<GameRules.IntegerValue>`)

**Returns:** `default void`

### create

```java
public static GameRules.Type<GameRules.IntegerValue> create(int p_46295_, BiConsumer<MinecraftServer, GameRules.IntegerValue> p_46296_)
```

**Parameters:**

- `p_46295_` (`int`)
- `p_46296_` (`BiConsumer<MinecraftServer, GameRules.IntegerValue>`)

**Returns:** `public static GameRules.Type<GameRules.IntegerValue>`

### create

```java
static GameRules.Type<GameRules.IntegerValue> create(int p_320826_, int p_320897_, int p_320198_, BiConsumer<MinecraftServer, GameRules.IntegerValue> p_320846_)
```

**Parameters:**

- `p_320826_` (`int`)
- `p_320897_` (`int`)
- `p_320198_` (`int`)
- `p_320846_` (`BiConsumer<MinecraftServer, GameRules.IntegerValue>`)

**Returns:** `static GameRules.Type<GameRules.IntegerValue>`

### create

```java
public static GameRules.Type<GameRules.IntegerValue> create(int p_46313_)
```

**Parameters:**

- `p_46313_` (`int`)

**Returns:** `public static GameRules.Type<GameRules.IntegerValue>`

### IntegerValue

```java
public IntegerValue(GameRules.Type<GameRules.IntegerValue> p_46286_, int p_46287_)
```

**Parameters:**

- `p_46286_` (`GameRules.Type<GameRules.IntegerValue>`)
- `p_46287_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### updateFromArgument

```java
protected void updateFromArgument(CommandContext<CommandSourceStack> p_46304_, String p_46305_)
```

**Parameters:**

- `p_46304_` (`CommandContext<CommandSourceStack>`)
- `p_46305_` (`String`)

### get

```java
public int get()
```

**Returns:** `public int`

### set

```java
public void set(int p_151490_, MinecraftServer p_151491_)
```

**Parameters:**

- `p_151490_` (`int`)
- `p_151491_` (`MinecraftServer`)

**Returns:** `public void`

### serialize

```java
public String serialize()
```

**Returns:** `String`

### deserialize

```java
protected void deserialize(String p_46307_)
```

**Parameters:**

- `p_46307_` (`String`)

### tryDeserialize

```java
public boolean tryDeserialize(String p_46315_)
```

**Parameters:**

- `p_46315_` (`String`)

**Returns:** `public boolean`

### safeParse

```java
private static int safeParse(String p_46318_)
```

**Parameters:**

- `p_46318_` (`String`)

**Returns:** `private static int`

### getCommandResult

```java
public int getCommandResult()
```

**Returns:** `int`

### getSelf

```java
protected GameRules.IntegerValue getSelf()
```

**Returns:** `protected GameRules.IntegerValue`

### copy

```java
protected GameRules.IntegerValue copy()
```

**Returns:** `protected GameRules.IntegerValue`

### setFrom

```java
public void setFrom(GameRules.IntegerValue p_46298_, MinecraftServer p_46299_)
```

**Parameters:**

- `p_46298_` (`GameRules.IntegerValue`)
- `p_46299_` (`MinecraftServer`)

**Returns:** `public void`

### Key

```java
public Key(String p_46326_, GameRules.Category p_46327_)
```

**Parameters:**

- `p_46326_` (`String`)
- `p_46327_` (`GameRules.Category`)

**Returns:** `public`

### toString

```java
public String toString()
```

**Returns:** `String`

### equals

```java
public boolean equals(Object p_46334_)
```

**Parameters:**

- `p_46334_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### getId

```java
public String getId()
```

**Returns:** `public String`

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `public String`

### getCategory

```java
public GameRules.Category getCategory()
```

**Returns:** `public GameRules.Category`

### Type

```java
 Type(Supplier<ArgumentType<?>> p_46342_, Function<GameRules.Type<T>, T> p_46343_, BiConsumer<MinecraftServer, T> p_46344_, GameRules.VisitorCaller<T> p_46345_)
```

**Parameters:**

- `p_46342_` (`Supplier<ArgumentType<?>>`)
- `p_46343_` (`Function<GameRules.Type<T>, T>`)
- `p_46344_` (`BiConsumer<MinecraftServer, T>`)
- `p_46345_` (`GameRules.VisitorCaller<T>`)

**Returns:** ``

### createArgument

```java
public RequiredArgumentBuilder<CommandSourceStack, ?> createArgument(String p_46359_)
```

**Parameters:**

- `p_46359_` (`String`)

**Returns:** `public RequiredArgumentBuilder<CommandSourceStack, ?>`

### createRule

```java
public T createRule()
```

**Returns:** `public T`

### callVisitor

```java
public void callVisitor(GameRules.GameRuleTypeVisitor p_46354_, GameRules.Key<T> p_46355_)
```

**Parameters:**

- `p_46354_` (`GameRules.GameRuleTypeVisitor`)
- `p_46355_` (`GameRules.Key<T>`)

**Returns:** `public void`

### Value

```java
public Value(GameRules.Type<T> p_46362_)
```

**Parameters:**

- `p_46362_` (`GameRules.Type<T>`)

**Returns:** `public`

### updateFromArgument

```java
protected abstract void updateFromArgument(CommandContext<CommandSourceStack> p_46365_, String p_46366_)
```

**Parameters:**

- `p_46365_` (`CommandContext<CommandSourceStack>`)
- `p_46366_` (`String`)

**Returns:** `protected abstract void`

### setFromArgument

```java
public void setFromArgument(CommandContext<CommandSourceStack> p_46371_, String p_46372_)
```

**Parameters:**

- `p_46371_` (`CommandContext<CommandSourceStack>`)
- `p_46372_` (`String`)

**Returns:** `public void`

### onChanged

```java
protected void onChanged(MinecraftServer p_46369_)
```

**Parameters:**

- `p_46369_` (`MinecraftServer`)

**Returns:** `protected void`

### deserialize

```java
protected abstract void deserialize(String p_46367_)
```

**Parameters:**

- `p_46367_` (`String`)

**Returns:** `protected abstract void`

### serialize

```java
public abstract String serialize()
```

**Returns:** `public abstract String`

### toString

```java
public String toString()
```

**Returns:** `String`

### getCommandResult

```java
public abstract int getCommandResult()
```

**Returns:** `public abstract int`

### getSelf

```java
protected abstract T getSelf()
```

**Returns:** `protected abstract T`

### copy

```java
protected abstract T copy()
```

**Returns:** `protected abstract T`

### setFrom

```java
public abstract void setFrom(T p_46363_, MinecraftServer p_46364_)
```

**Parameters:**

- `p_46363_` (`T`)
- `p_46364_` (`MinecraftServer`)

**Returns:** `public abstract void`

### call

```java
void call(GameRules.GameRuleTypeVisitor p_46375_, GameRules.Key<T> p_46376_, GameRules.Type<T> p_46377_)
```

**Parameters:**

- `p_46375_` (`GameRules.GameRuleTypeVisitor`)
- `p_46376_` (`GameRules.Key<T>`)
- `p_46377_` (`GameRules.Type<T>`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BooleanValue` | class |  |
| `Category` | enum |  |
| `GameRuleTypeVisitor` | interface |  |
| `IntegerValue` | class |  |
| `Key` | class |  |
| `Type` | class |  |
