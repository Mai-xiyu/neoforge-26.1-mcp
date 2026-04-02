# PlayerTeam

**Package:** `net.minecraft.world.scores`
**Type:** class
**Extends:** `Team`

## Methods

### PlayerTeam

```java
public PlayerTeam(Scoreboard p_83340_, String p_83341_)
```

**Parameters:**

- `p_83340_` (`Scoreboard`)
- `p_83341_` (`String`)

**Returns:** `public`

### getScoreboard

```java
public Scoreboard getScoreboard()
```

**Returns:** `public Scoreboard`

### getName

```java
public String getName()
```

**Returns:** `String`

### getDisplayName

```java
public Component getDisplayName()
```

**Returns:** `public Component`

### getFormattedDisplayName

```java
public MutableComponent getFormattedDisplayName()
```

**Returns:** `public MutableComponent`

### setDisplayName

```java
public void setDisplayName(Component p_83354_)
```

**Parameters:**

- `p_83354_` (`Component`)

**Returns:** `public void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Name cannot be null")
```

**Parameters:**

- `null"` (`"Name cannot be`)

**Returns:** `throw new`

### setPlayerPrefix

```java
public void setPlayerPrefix(Component p_83361_)
```

**Parameters:**

- `p_83361_` (`Component`)

**Returns:** `public void`

### getPlayerPrefix

```java
public Component getPlayerPrefix()
```

**Returns:** `public Component`

### setPlayerSuffix

```java
public void setPlayerSuffix(Component p_83366_)
```

**Parameters:**

- `p_83366_` (`Component`)

**Returns:** `public void`

### getPlayerSuffix

```java
public Component getPlayerSuffix()
```

**Returns:** `public Component`

### getPlayers

```java
public Collection<String> getPlayers()
```

**Returns:** `Collection<String>`

### getFormattedName

```java
public MutableComponent getFormattedName(Component p_83369_)
```

**Parameters:**

- `p_83369_` (`Component`)

**Returns:** `MutableComponent`

### formatNameForTeam

```java
public static MutableComponent formatNameForTeam(Team p_83349_, Component p_83350_)
```

**Parameters:**

- `p_83349_` (`Team`)
- `p_83350_` (`Component`)

**Returns:** `public static MutableComponent`

### isAllowFriendlyFire

```java
public boolean isAllowFriendlyFire()
```

**Returns:** `boolean`

### setAllowFriendlyFire

```java
public void setAllowFriendlyFire(boolean p_83356_)
```

**Parameters:**

- `p_83356_` (`boolean`)

**Returns:** `public void`

### canSeeFriendlyInvisibles

```java
public boolean canSeeFriendlyInvisibles()
```

**Returns:** `boolean`

### setSeeFriendlyInvisibles

```java
public void setSeeFriendlyInvisibles(boolean p_83363_)
```

**Parameters:**

- `p_83363_` (`boolean`)

**Returns:** `public void`

### getNameTagVisibility

```java
public Team.Visibility getNameTagVisibility()
```

**Returns:** `Team.Visibility`

### getDeathMessageVisibility

```java
public Team.Visibility getDeathMessageVisibility()
```

**Returns:** `Team.Visibility`

### setNameTagVisibility

```java
public void setNameTagVisibility(Team.Visibility p_83347_)
```

**Parameters:**

- `p_83347_` (`Team.Visibility`)

**Returns:** `public void`

### setDeathMessageVisibility

```java
public void setDeathMessageVisibility(Team.Visibility p_83359_)
```

**Parameters:**

- `p_83359_` (`Team.Visibility`)

**Returns:** `public void`

### getCollisionRule

```java
public Team.CollisionRule getCollisionRule()
```

**Returns:** `Team.CollisionRule`

### setCollisionRule

```java
public void setCollisionRule(Team.CollisionRule p_83345_)
```

**Parameters:**

- `p_83345_` (`Team.CollisionRule`)

**Returns:** `public void`

### packOptions

```java
public int packOptions()
```

**Returns:** `public int`

### unpackOptions

```java
public void unpackOptions(int p_83343_)
```

**Parameters:**

- `p_83343_` (`int`)

**Returns:** `public void`

### setColor

```java
public void setColor(ChatFormatting p_83352_)
```

**Parameters:**

- `p_83352_` (`ChatFormatting`)

**Returns:** `public void`

### getColor

```java
public ChatFormatting getColor()
```

**Returns:** `ChatFormatting`
