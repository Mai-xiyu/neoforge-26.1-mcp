# AdvancementCommands

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_136311_)
```

**Parameters:**

- `p_136311_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### perform

```java
private static int perform(CommandSourceStack p_136320_, Collection<ServerPlayer> p_136321_, AdvancementCommands.Action p_136322_, Collection<AdvancementHolder> p_136323_)
```

**Parameters:**

- `p_136320_` (`CommandSourceStack`)
- `p_136321_` (`Collection<ServerPlayer>`)
- `p_136322_` (`AdvancementCommands.Action`)
- `p_136323_` (`Collection<AdvancementHolder>`)

**Returns:** `private static int`

### performCriterion

```java
private static int performCriterion(CommandSourceStack p_136325_, Collection<ServerPlayer> p_136326_, AdvancementCommands.Action p_136327_, AdvancementHolder p_301324_, String p_136329_)
```

**Parameters:**

- `p_136325_` (`CommandSourceStack`)
- `p_136326_` (`Collection<ServerPlayer>`)
- `p_136327_` (`AdvancementCommands.Action`)
- `p_301324_` (`AdvancementHolder`)
- `p_136329_` (`String`)

**Returns:** `private static int`

### getAdvancements

```java
private static List<AdvancementHolder> getAdvancements(CommandContext<CommandSourceStack> p_300960_, AdvancementHolder p_301220_, AdvancementCommands.Mode p_136335_)
```

**Parameters:**

- `p_300960_` (`CommandContext<CommandSourceStack>`)
- `p_301220_` (`AdvancementHolder`)
- `p_136335_` (`AdvancementCommands.Mode`)

**Returns:** `private static List<AdvancementHolder>`

### addChildren

```java
 addChildren()
```

**Returns:** ``

### addChildren

```java
private static void addChildren(AdvancementNode p_300871_, List<AdvancementHolder> p_136332_)
```

**Parameters:**

- `p_300871_` (`AdvancementNode`)
- `p_136332_` (`List<AdvancementHolder>`)

**Returns:** `private static void`

### addChildren

```java
 addChildren()
```

**Returns:** ``

### GRANT

```java
 GRANT()
```

**Returns:** ``

### perform

```java
protected boolean perform(ServerPlayer p_136395_, AdvancementHolder p_301029_)
```

**Parameters:**

- `p_136395_` (`ServerPlayer`)
- `p_301029_` (`AdvancementHolder`)

**Returns:** `boolean`

### performCriterion

```java
protected boolean performCriterion(ServerPlayer p_136398_, AdvancementHolder p_301300_, String p_136400_)
```

**Parameters:**

- `p_136398_` (`ServerPlayer`)
- `p_301300_` (`AdvancementHolder`)
- `p_136400_` (`String`)

**Returns:** `boolean`

### REVOKE

```java
, REVOKE()
```

**Returns:** `,`

### perform

```java
protected boolean perform(ServerPlayer p_136406_, AdvancementHolder p_301273_)
```

**Parameters:**

- `p_136406_` (`ServerPlayer`)
- `p_301273_` (`AdvancementHolder`)

**Returns:** `boolean`

### performCriterion

```java
protected boolean performCriterion(ServerPlayer p_136409_, AdvancementHolder p_301094_, String p_136411_)
```

**Parameters:**

- `p_136409_` (`ServerPlayer`)
- `p_301094_` (`AdvancementHolder`)
- `p_136411_` (`String`)

**Returns:** `boolean`

### Action

```java
 Action(String p_136372_)
```

**Parameters:**

- `p_136372_` (`String`)

**Returns:** ``

### perform

```java
public int perform(ServerPlayer p_136380_, Iterable<AdvancementHolder> p_136381_)
```

**Parameters:**

- `p_136380_` (`ServerPlayer`)
- `p_136381_` (`Iterable<AdvancementHolder>`)

**Returns:** `public int`

### perform

```java
protected abstract boolean perform(ServerPlayer p_136384_, AdvancementHolder p_301251_)
```

**Parameters:**

- `p_136384_` (`ServerPlayer`)
- `p_301251_` (`AdvancementHolder`)

**Returns:** `protected abstract boolean`

### performCriterion

```java
protected abstract boolean performCriterion(ServerPlayer p_136382_, AdvancementHolder p_301120_, String p_301262_)
```

**Parameters:**

- `p_136382_` (`ServerPlayer`)
- `p_301120_` (`AdvancementHolder`)
- `p_301262_` (`String`)

**Returns:** `protected abstract boolean`

### getKey

```java
protected String getKey()
```

**Returns:** `protected String`

### EVERYTHING

```java
, EVERYTHING()
```

**Returns:** `,`

### Mode

```java
private Mode(boolean p_136424_, boolean p_136425_)
```

**Parameters:**

- `p_136424_` (`boolean`)
- `p_136425_` (`boolean`)

**Returns:** `private`
