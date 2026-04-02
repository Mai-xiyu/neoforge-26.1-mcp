# TeamCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_138878_, CommandBuildContext p_323744_)
```

**Parameters:**

- `p_138878_` (`CommandDispatcher<CommandSourceStack>`)
- `p_323744_` (`CommandBuildContext`)

**Returns:** `public static void`

### getFirstMemberName

```java
private static Component getFirstMemberName(Collection<ScoreHolder> p_313883_)
```

**Parameters:**

- `p_313883_` (`Collection<ScoreHolder>`)

**Returns:** `private static Component`

### leaveTeam

```java
private static int leaveTeam(CommandSourceStack p_138918_, Collection<ScoreHolder> p_138919_)
```

**Parameters:**

- `p_138918_` (`CommandSourceStack`)
- `p_138919_` (`Collection<ScoreHolder>`)

**Returns:** `private static int`

### joinTeam

```java
private static int joinTeam(CommandSourceStack p_138895_, PlayerTeam p_138896_, Collection<ScoreHolder> p_138897_)
```

**Parameters:**

- `p_138895_` (`CommandSourceStack`)
- `p_138896_` (`PlayerTeam`)
- `p_138897_` (`Collection<ScoreHolder>`)

**Returns:** `private static int`

### setNametagVisibility

```java
private static int setNametagVisibility(CommandSourceStack p_138891_, PlayerTeam p_138892_, Team.Visibility p_138893_)
```

**Parameters:**

- `p_138891_` (`CommandSourceStack`)
- `p_138892_` (`PlayerTeam`)
- `p_138893_` (`Team.Visibility`)

**Returns:** `private static int`

### setDeathMessageVisibility

```java
private static int setDeathMessageVisibility(CommandSourceStack p_138930_, PlayerTeam p_138931_, Team.Visibility p_138932_)
```

**Parameters:**

- `p_138930_` (`CommandSourceStack`)
- `p_138931_` (`PlayerTeam`)
- `p_138932_` (`Team.Visibility`)

**Returns:** `private static int`

### setCollision

```java
private static int setCollision(CommandSourceStack p_138887_, PlayerTeam p_138888_, Team.CollisionRule p_138889_)
```

**Parameters:**

- `p_138887_` (`CommandSourceStack`)
- `p_138888_` (`PlayerTeam`)
- `p_138889_` (`Team.CollisionRule`)

**Returns:** `private static int`

### setFriendlySight

```java
private static int setFriendlySight(CommandSourceStack p_138907_, PlayerTeam p_138908_, boolean p_138909_)
```

**Parameters:**

- `p_138907_` (`CommandSourceStack`)
- `p_138908_` (`PlayerTeam`)
- `p_138909_` (`boolean`)

**Returns:** `private static int`

### setFriendlyFire

```java
private static int setFriendlyFire(CommandSourceStack p_138938_, PlayerTeam p_138939_, boolean p_138940_)
```

**Parameters:**

- `p_138938_` (`CommandSourceStack`)
- `p_138939_` (`PlayerTeam`)
- `p_138940_` (`boolean`)

**Returns:** `private static int`

### setDisplayName

```java
private static int setDisplayName(CommandSourceStack p_138903_, PlayerTeam p_138904_, Component p_138905_)
```

**Parameters:**

- `p_138903_` (`CommandSourceStack`)
- `p_138904_` (`PlayerTeam`)
- `p_138905_` (`Component`)

**Returns:** `private static int`

### setColor

```java
private static int setColor(CommandSourceStack p_138899_, PlayerTeam p_138900_, ChatFormatting p_138901_)
```

**Parameters:**

- `p_138899_` (`CommandSourceStack`)
- `p_138900_` (`PlayerTeam`)
- `p_138901_` (`ChatFormatting`)

**Returns:** `private static int`

### emptyTeam

```java
private static int emptyTeam(CommandSourceStack p_138884_, PlayerTeam p_138885_)
```

**Parameters:**

- `p_138884_` (`CommandSourceStack`)
- `p_138885_` (`PlayerTeam`)

**Returns:** `private static int`

### deleteTeam

```java
private static int deleteTeam(CommandSourceStack p_138927_, PlayerTeam p_138928_)
```

**Parameters:**

- `p_138927_` (`CommandSourceStack`)
- `p_138928_` (`PlayerTeam`)

**Returns:** `private static int`

### createTeam

```java
private static int createTeam(CommandSourceStack p_138911_, String p_138912_)
```

**Parameters:**

- `p_138911_` (`CommandSourceStack`)
- `p_138912_` (`String`)

**Returns:** `private static int`

### createTeam

```java
private static int createTeam(CommandSourceStack p_138914_, String p_138915_, Component p_138916_)
```

**Parameters:**

- `p_138914_` (`CommandSourceStack`)
- `p_138915_` (`String`)
- `p_138916_` (`Component`)

**Returns:** `private static int`

### listMembers

```java
private static int listMembers(CommandSourceStack p_138944_, PlayerTeam p_138945_)
```

**Parameters:**

- `p_138944_` (`CommandSourceStack`)
- `p_138945_` (`PlayerTeam`)

**Returns:** `private static int`

### listTeams

```java
private static int listTeams(CommandSourceStack p_138882_)
```

**Parameters:**

- `p_138882_` (`CommandSourceStack`)

**Returns:** `private static int`

### setPrefix

```java
private static int setPrefix(CommandSourceStack p_138934_, PlayerTeam p_138935_, Component p_138936_)
```

**Parameters:**

- `p_138934_` (`CommandSourceStack`)
- `p_138935_` (`PlayerTeam`)
- `p_138936_` (`Component`)

**Returns:** `private static int`

### setSuffix

```java
private static int setSuffix(CommandSourceStack p_138947_, PlayerTeam p_138948_, Component p_138949_)
```

**Parameters:**

- `p_138947_` (`CommandSourceStack`)
- `p_138948_` (`PlayerTeam`)
- `p_138949_` (`Component`)

**Returns:** `private static int`
