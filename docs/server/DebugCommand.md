# DebugCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_136906_)
```

**Parameters:**

- `p_136906_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### start

```java
private static int start(CommandSourceStack p_136910_)
```

**Parameters:**

- `p_136910_` (`CommandSourceStack`)

**Returns:** `private static int`

### stop

```java
private static int stop(CommandSourceStack p_136916_)
```

**Parameters:**

- `p_136916_` (`CommandSourceStack`)

**Returns:** `private static int`

### runGuarded

```java
public void runGuarded(CommandSourceStack p_309716_, ContextChain<CommandSourceStack> p_306169_, ChainModifiers p_309697_, ExecutionControl<CommandSourceStack> p_306283_)
```

**Parameters:**

- `p_309716_` (`CommandSourceStack`)
- `p_306169_` (`ContextChain<CommandSourceStack>`)
- `p_309697_` (`ChainModifiers`)
- `p_306283_` (`ExecutionControl<CommandSourceStack>`)

**Returns:** `public void`

### execute

```java
public void execute(CommandSourceStack p_309660_, ExecutionContext<CommandSourceStack> p_309654_, Frame p_309674_)
```

**Parameters:**

- `p_309660_` (`CommandSourceStack`)
- `p_309654_` (`ExecutionContext<CommandSourceStack>`)
- `p_309674_` (`Frame`)

**Returns:** `public void`

### Tracer

```java
 Tracer(PrintWriter p_180079_)
```

**Parameters:**

- `p_180079_` (`PrintWriter`)

**Returns:** ``

### indentAndSave

```java
private void indentAndSave(int p_180082_)
```

**Parameters:**

- `p_180082_` (`int`)

**Returns:** `private void`

### printIndent

```java
private void printIndent(int p_180098_)
```

**Parameters:**

- `p_180098_` (`int`)

**Returns:** `private void`

### newLine

```java
private void newLine()
```

**Returns:** `private void`

### onCommand

```java
public void onCommand(int p_180084_, String p_180085_)
```

**Parameters:**

- `p_180084_` (`int`)
- `p_180085_` (`String`)

### onReturn

```java
public void onReturn(int p_180087_, String p_180088_, int p_180089_)
```

**Parameters:**

- `p_180087_` (`int`)
- `p_180088_` (`String`)
- `p_180089_` (`int`)

### onCall

```java
public void onCall(int p_180091_, ResourceLocation p_180092_, int p_180093_)
```

**Parameters:**

- `p_180091_` (`int`)
- `p_180092_` (`ResourceLocation`)
- `p_180093_` (`int`)

### onError

```java
public void onError(String p_180101_)
```

**Parameters:**

- `p_180101_` (`String`)

### sendSystemMessage

```java
public void sendSystemMessage(Component p_214427_)
```

**Parameters:**

- `p_214427_` (`Component`)

### acceptsSuccess

```java
public boolean acceptsSuccess()
```

**Returns:** `boolean`

### acceptsFailure

```java
public boolean acceptsFailure()
```

**Returns:** `boolean`

### shouldInformAdmins

```java
public boolean shouldInformAdmins()
```

**Returns:** `boolean`

### alwaysAccepts

```java
public boolean alwaysAccepts()
```

**Returns:** `boolean`

### close

```java
public void close()
```
