# Scoreboard

**Package:** `net.minecraft.world.scores`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `HIDDEN_SCORE_PREFIX` | `String` |  |

## Methods

### getObjective

```java
public Objective getObjective(String p_83478_)
```

**Parameters:**

- `p_83478_` (`String`)

**Returns:** `Objective`

### addObjective

```java
public Objective addObjective(String p_83437_, ObjectiveCriteria p_83438_, Component p_83439_, ObjectiveCriteria.RenderType p_83440_, boolean p_313815_, NumberFormat p_313909_)
```

**Parameters:**

- `p_83437_` (`String`)
- `p_83438_` (`ObjectiveCriteria`)
- `p_83439_` (`Component`)
- `p_83440_` (`ObjectiveCriteria.RenderType`)
- `p_313815_` (`boolean`)
- `p_313909_` (`NumberFormat`)

**Returns:** `public Objective`

### IllegalArgumentException

```java
throw new IllegalArgumentException("An objective with the name '" + p_83437_ + "' already exists!")
```

**Parameters:**

- `exists!"` (`"An objective with the name '" + p_83437_ + "' already`)

**Returns:** `throw new`

### forAllObjectives

```java
public final void forAllObjectives(ObjectiveCriteria p_83428_, ScoreHolder p_313805_, Consumer<ScoreAccess> p_83430_)
```

**Parameters:**

- `p_83428_` (`ObjectiveCriteria`)
- `p_313805_` (`ScoreHolder`)
- `p_83430_` (`Consumer<ScoreAccess>`)

**Returns:** `public final void`

### getOrCreatePlayerInfo

```java
private PlayerScores getOrCreatePlayerInfo(String p_313892_)
```

**Parameters:**

- `p_313892_` (`String`)

**Returns:** `private PlayerScores`

### getOrCreatePlayerScore

```java
public ScoreAccess getOrCreatePlayerScore(ScoreHolder p_313714_, Objective p_313948_)
```

**Parameters:**

- `p_313714_` (`ScoreHolder`)
- `p_313948_` (`Objective`)

**Returns:** `public ScoreAccess`

### getOrCreatePlayerScore

```java
public ScoreAccess getOrCreatePlayerScore(ScoreHolder p_313717_, Objective p_83473_, boolean p_313939_)
```

**Parameters:**

- `p_313717_` (`ScoreHolder`)
- `p_83473_` (`Objective`)
- `p_313939_` (`boolean`)

**Returns:** `public ScoreAccess`

### ScoreAccess

```java
return new ScoreAccess()
```

**Returns:** `return new`

### get

```java
public int get()
```

**Returns:** `int`

### set

```java
public void set(int p_313831_)
```

**Parameters:**

- `p_313831_` (`int`)

### IllegalStateException

```java
throw new IllegalStateException("Cannot modify read-only score")
```

**Parameters:**

- `score"` (`"Cannot modify read-only`)

**Returns:** `throw new`

### display

```java
public Component display()
```

**Returns:** `Component`

### display

```java
public void display(Component p_313826_)
```

**Parameters:**

- `p_313826_` (`Component`)

### numberFormatOverride

```java
public void numberFormatOverride(NumberFormat p_313875_)
```

**Parameters:**

- `p_313875_` (`NumberFormat`)

### locked

```java
public boolean locked()
```

**Returns:** `boolean`

### unlock

```java
public void unlock()
```

### lock

```java
public void lock()
```

### setLocked

```java
private void setLocked(boolean p_313822_)
```

**Parameters:**

- `p_313822_` (`boolean`)

**Returns:** `private void`

### sendScoreToPlayers

```java
private void sendScoreToPlayers()
```

**Returns:** `private void`

### getPlayerScoreInfo

```java
public ReadOnlyScoreInfo getPlayerScoreInfo(ScoreHolder p_313711_, Objective p_313813_)
```

**Parameters:**

- `p_313711_` (`ScoreHolder`)
- `p_313813_` (`Objective`)

**Returns:** `ReadOnlyScoreInfo`

### listPlayerScores

```java
public Collection<PlayerScoreEntry> listPlayerScores(Objective p_313802_)
```

**Parameters:**

- `p_313802_` (`Objective`)

**Returns:** `public Collection<PlayerScoreEntry>`

### getObjectives

```java
public Collection<Objective> getObjectives()
```

**Returns:** `public Collection<Objective>`

### getObjectiveNames

```java
public Collection<String> getObjectiveNames()
```

**Returns:** `public Collection<String>`

### getTrackedPlayers

```java
public Collection<ScoreHolder> getTrackedPlayers()
```

**Returns:** `public Collection<ScoreHolder>`

### resetAllPlayerScores

```java
public void resetAllPlayerScores(ScoreHolder p_313823_)
```

**Parameters:**

- `p_313823_` (`ScoreHolder`)

**Returns:** `public void`

### resetSinglePlayerScore

```java
public void resetSinglePlayerScore(ScoreHolder p_313783_, Objective p_313928_)
```

**Parameters:**

- `p_313783_` (`ScoreHolder`)
- `p_313928_` (`Objective`)

**Returns:** `public void`

### listPlayerScores

```java
public Object2IntMap<Objective> listPlayerScores(ScoreHolder p_313893_)
```

**Parameters:**

- `p_313893_` (`ScoreHolder`)

**Returns:** `public Object2IntMap<Objective>`

### removeObjective

```java
public void removeObjective(Objective p_83503_)
```

**Parameters:**

- `p_83503_` (`Objective`)

**Returns:** `public void`

### setDisplayObjective

```java
public void setDisplayObjective(DisplaySlot p_296205_, Objective p_83419_)
```

**Parameters:**

- `p_296205_` (`DisplaySlot`)
- `p_83419_` (`Objective`)

**Returns:** `public void`

### getDisplayObjective

```java
public Objective getDisplayObjective(DisplaySlot p_295165_)
```

**Parameters:**

- `p_295165_` (`DisplaySlot`)

**Returns:** `Objective`

### getPlayerTeam

```java
public PlayerTeam getPlayerTeam(String p_83490_)
```

**Parameters:**

- `p_83490_` (`String`)

**Returns:** `PlayerTeam`

### addPlayerTeam

```java
public PlayerTeam addPlayerTeam(String p_83493_)
```

**Parameters:**

- `p_83493_` (`String`)

**Returns:** `public PlayerTeam`

### removePlayerTeam

```java
public void removePlayerTeam(PlayerTeam p_83476_)
```

**Parameters:**

- `p_83476_` (`PlayerTeam`)

**Returns:** `public void`

### addPlayerToTeam

```java
public boolean addPlayerToTeam(String p_83434_, PlayerTeam p_83435_)
```

**Parameters:**

- `p_83434_` (`String`)
- `p_83435_` (`PlayerTeam`)

**Returns:** `public boolean`

### removePlayerFromTeam

```java
public boolean removePlayerFromTeam(String p_83496_)
```

**Parameters:**

- `p_83496_` (`String`)

**Returns:** `public boolean`

### removePlayerFromTeam

```java
public void removePlayerFromTeam(String p_83464_, PlayerTeam p_83465_)
```

**Parameters:**

- `p_83464_` (`String`)
- `p_83465_` (`PlayerTeam`)

**Returns:** `public void`

### getTeamNames

```java
public Collection<String> getTeamNames()
```

**Returns:** `public Collection<String>`

### getPlayerTeams

```java
public Collection<PlayerTeam> getPlayerTeams()
```

**Returns:** `public Collection<PlayerTeam>`

### getPlayersTeam

```java
public PlayerTeam getPlayersTeam(String p_83501_)
```

**Parameters:**

- `p_83501_` (`String`)

**Returns:** `PlayerTeam`

### onObjectiveAdded

```java
public void onObjectiveAdded(Objective p_83422_)
```

**Parameters:**

- `p_83422_` (`Objective`)

**Returns:** `public void`

### onObjectiveChanged

```java
public void onObjectiveChanged(Objective p_83455_)
```

**Parameters:**

- `p_83455_` (`Objective`)

**Returns:** `public void`

### onObjectiveRemoved

```java
public void onObjectiveRemoved(Objective p_83467_)
```

**Parameters:**

- `p_83467_` (`Objective`)

**Returns:** `public void`

### onScoreChanged

```java
protected void onScoreChanged(ScoreHolder p_313729_, Objective p_313930_, Score p_83424_)
```

**Parameters:**

- `p_313729_` (`ScoreHolder`)
- `p_313930_` (`Objective`)
- `p_83424_` (`Score`)

**Returns:** `protected void`

### onScoreLockChanged

```java
protected void onScoreLockChanged(ScoreHolder p_313727_, Objective p_313708_)
```

**Parameters:**

- `p_313727_` (`ScoreHolder`)
- `p_313708_` (`Objective`)

**Returns:** `protected void`

### onPlayerRemoved

```java
public void onPlayerRemoved(ScoreHolder p_313917_)
```

**Parameters:**

- `p_313917_` (`ScoreHolder`)

**Returns:** `public void`

### onPlayerScoreRemoved

```java
public void onPlayerScoreRemoved(ScoreHolder p_313899_, Objective p_83433_)
```

**Parameters:**

- `p_313899_` (`ScoreHolder`)
- `p_83433_` (`Objective`)

**Returns:** `public void`

### onTeamAdded

```java
public void onTeamAdded(PlayerTeam p_83423_)
```

**Parameters:**

- `p_83423_` (`PlayerTeam`)

**Returns:** `public void`

### onTeamChanged

```java
public void onTeamChanged(PlayerTeam p_83456_)
```

**Parameters:**

- `p_83456_` (`PlayerTeam`)

**Returns:** `public void`

### onTeamRemoved

```java
public void onTeamRemoved(PlayerTeam p_83468_)
```

**Parameters:**

- `p_83468_` (`PlayerTeam`)

**Returns:** `public void`

### entityRemoved

```java
public void entityRemoved(Entity p_83421_)
```

**Parameters:**

- `p_83421_` (`Entity`)

**Returns:** `public void`

### savePlayerScores

```java
protected ListTag savePlayerScores(HolderLookup.Provider p_331535_)
```

**Parameters:**

- `p_331535_` (`HolderLookup.Provider`)

**Returns:** `protected ListTag`

### loadPlayerScores

```java
protected void loadPlayerScores(ListTag p_83446_, HolderLookup.Provider p_330625_)
```

**Parameters:**

- `p_83446_` (`ListTag`)
- `p_330625_` (`HolderLookup.Provider`)

**Returns:** `protected void`
