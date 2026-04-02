# BossBarCommands

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SUGGEST_BOSS_BAR` | `SuggestionProvider<CommandSourceStack>` |  |

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_136583_, CommandBuildContext p_323939_)
```

**Parameters:**

- `p_136583_` (`CommandDispatcher<CommandSourceStack>`)
- `p_323939_` (`CommandBuildContext`)

**Returns:** `public static void`

### getValue

```java
private static int getValue(CommandSourceStack p_136596_, CustomBossEvent p_136597_)
```

**Parameters:**

- `p_136596_` (`CommandSourceStack`)
- `p_136597_` (`CustomBossEvent`)

**Returns:** `private static int`

### getMax

```java
private static int getMax(CommandSourceStack p_136629_, CustomBossEvent p_136630_)
```

**Parameters:**

- `p_136629_` (`CommandSourceStack`)
- `p_136630_` (`CustomBossEvent`)

**Returns:** `private static int`

### getVisible

```java
private static int getVisible(CommandSourceStack p_136640_, CustomBossEvent p_136641_)
```

**Parameters:**

- `p_136640_` (`CommandSourceStack`)
- `p_136641_` (`CustomBossEvent`)

**Returns:** `private static int`

### getPlayers

```java
private static int getPlayers(CommandSourceStack p_136645_, CustomBossEvent p_136646_)
```

**Parameters:**

- `p_136645_` (`CommandSourceStack`)
- `p_136646_` (`CustomBossEvent`)

**Returns:** `private static int`

### setVisible

```java
private static int setVisible(CommandSourceStack p_136619_, CustomBossEvent p_136620_, boolean p_136621_)
```

**Parameters:**

- `p_136619_` (`CommandSourceStack`)
- `p_136620_` (`CustomBossEvent`)
- `p_136621_` (`boolean`)

**Returns:** `private static int`

### setValue

```java
private static int setValue(CommandSourceStack p_136599_, CustomBossEvent p_136600_, int p_136601_)
```

**Parameters:**

- `p_136599_` (`CommandSourceStack`)
- `p_136600_` (`CustomBossEvent`)
- `p_136601_` (`int`)

**Returns:** `private static int`

### setMax

```java
private static int setMax(CommandSourceStack p_136632_, CustomBossEvent p_136633_, int p_136634_)
```

**Parameters:**

- `p_136632_` (`CommandSourceStack`)
- `p_136633_` (`CustomBossEvent`)
- `p_136634_` (`int`)

**Returns:** `private static int`

### setColor

```java
private static int setColor(CommandSourceStack p_136603_, CustomBossEvent p_136604_, BossEvent.BossBarColor p_136605_)
```

**Parameters:**

- `p_136603_` (`CommandSourceStack`)
- `p_136604_` (`CustomBossEvent`)
- `p_136605_` (`BossEvent.BossBarColor`)

**Returns:** `private static int`

### setStyle

```java
private static int setStyle(CommandSourceStack p_136607_, CustomBossEvent p_136608_, BossEvent.BossBarOverlay p_136609_)
```

**Parameters:**

- `p_136607_` (`CommandSourceStack`)
- `p_136608_` (`CustomBossEvent`)
- `p_136609_` (`BossEvent.BossBarOverlay`)

**Returns:** `private static int`

### setName

```java
private static int setName(CommandSourceStack p_136615_, CustomBossEvent p_136616_, Component p_136617_)
```

**Parameters:**

- `p_136615_` (`CommandSourceStack`)
- `p_136616_` (`CustomBossEvent`)
- `p_136617_` (`Component`)

**Returns:** `private static int`

### setPlayers

```java
private static int setPlayers(CommandSourceStack p_136611_, CustomBossEvent p_136612_, Collection<ServerPlayer> p_136613_)
```

**Parameters:**

- `p_136611_` (`CommandSourceStack`)
- `p_136612_` (`CustomBossEvent`)
- `p_136613_` (`Collection<ServerPlayer>`)

**Returns:** `private static int`

### listBars

```java
private static int listBars(CommandSourceStack p_136590_)
```

**Parameters:**

- `p_136590_` (`CommandSourceStack`)

**Returns:** `private static int`

### createBar

```java
private static int createBar(CommandSourceStack p_136592_, ResourceLocation p_136593_, Component p_136594_)
```

**Parameters:**

- `p_136592_` (`CommandSourceStack`)
- `p_136593_` (`ResourceLocation`)
- `p_136594_` (`Component`)

**Returns:** `private static int`

### removeBar

```java
private static int removeBar(CommandSourceStack p_136650_, CustomBossEvent p_136651_)
```

**Parameters:**

- `p_136650_` (`CommandSourceStack`)
- `p_136651_` (`CustomBossEvent`)

**Returns:** `private static int`

### getBossBar

```java
public static CustomBossEvent getBossBar(CommandContext<CommandSourceStack> p_136585_)
```

**Parameters:**

- `p_136585_` (`CommandContext<CommandSourceStack>`)

**Returns:** `public static CustomBossEvent`
