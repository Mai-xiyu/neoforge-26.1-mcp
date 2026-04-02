# TeleportCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_139009_)
```

**Parameters:**

- `p_139009_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### teleportToEntity

```java
private static int teleportToEntity(CommandSourceStack p_139033_, Collection<? extends Entity> p_139034_, Entity p_139035_)
```

**Parameters:**

- `p_139033_` (`CommandSourceStack`)
- `p_139034_` (`Collection<? extends Entity>`)
- `p_139035_` (`Entity`)

**Returns:** `private static int`

### teleportToPos

```java
private static int teleportToPos(CommandSourceStack p_139026_, Collection<? extends Entity> p_139027_, ServerLevel p_139028_, Coordinates p_139029_, Coordinates p_139030_, TeleportCommand.LookAt p_139031_)
```

**Parameters:**

- `p_139026_` (`CommandSourceStack`)
- `p_139027_` (`Collection<? extends Entity>`)
- `p_139028_` (`ServerLevel`)
- `p_139029_` (`Coordinates`)
- `p_139030_` (`Coordinates`)
- `p_139031_` (`TeleportCommand.LookAt`)

**Returns:** `private static int`

### performTeleport

```java
 performTeleport()
```

**Returns:** ``

### formatDouble

```java
private static String formatDouble(double p_142776_)
```

**Parameters:**

- `p_142776_` (`double`)

**Returns:** `private static String`

### performTeleport

```java
private static void performTeleport(CommandSourceStack p_139015_, Entity p_139016_, ServerLevel p_139017_, double p_139018_, double p_139019_, double p_139020_, Set<RelativeMovement> p_139021_, float p_139022_, float p_139023_, TeleportCommand.LookAt p_139024_)
```

**Parameters:**

- `p_139015_` (`CommandSourceStack`)
- `p_139016_` (`Entity`)
- `p_139017_` (`ServerLevel`)
- `p_139018_` (`double`)
- `p_139019_` (`double`)
- `p_139020_` (`double`)
- `p_139021_` (`Set<RelativeMovement>`)
- `p_139022_` (`float`)
- `p_139023_` (`float`)
- `p_139024_` (`TeleportCommand.LookAt`)

**Returns:** `private static void`

### perform

```java
void perform(CommandSourceStack p_139061_, Entity p_139062_)
```

**Parameters:**

- `p_139061_` (`CommandSourceStack`)
- `p_139062_` (`Entity`)

### perform

```java
public void perform(CommandSourceStack p_326864_, Entity p_326807_)
```

**Parameters:**

- `p_326864_` (`CommandSourceStack`)
- `p_326807_` (`Entity`)

### perform

```java
public void perform(CommandSourceStack p_326870_, Entity p_326894_)
```

**Parameters:**

- `p_326870_` (`CommandSourceStack`)
- `p_326894_` (`Entity`)
