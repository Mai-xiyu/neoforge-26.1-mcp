# ServerScoreboard

**Package:** `net.minecraft.server`
**Type:** class
**Extends:** `Scoreboard`
**Side:** 🖧 Server

## Methods

### ServerScoreboard

```java
public ServerScoreboard(MinecraftServer p_136197_)
```

**Parameters:**

- `p_136197_` (`MinecraftServer`)

**Returns:** `public`

### onScoreChanged

```java
protected void onScoreChanged(ScoreHolder p_313858_, Objective p_313953_, Score p_136206_)
```

**Parameters:**

- `p_313858_` (`ScoreHolder`)
- `p_313953_` (`Objective`)
- `p_136206_` (`Score`)

### onScoreLockChanged

```java
protected void onScoreLockChanged(ScoreHolder p_313796_, Objective p_313806_)
```

**Parameters:**

- `p_313796_` (`ScoreHolder`)
- `p_313806_` (`Objective`)

### onPlayerRemoved

```java
public void onPlayerRemoved(ScoreHolder p_313870_)
```

**Parameters:**

- `p_313870_` (`ScoreHolder`)

### onPlayerScoreRemoved

```java
public void onPlayerScoreRemoved(ScoreHolder p_313777_, Objective p_136213_)
```

**Parameters:**

- `p_313777_` (`ScoreHolder`)
- `p_136213_` (`Objective`)

### setDisplayObjective

```java
public void setDisplayObjective(DisplaySlot p_294118_, Objective p_136200_)
```

**Parameters:**

- `p_294118_` (`DisplaySlot`)
- `p_136200_` (`Objective`)

### addPlayerToTeam

```java
public boolean addPlayerToTeam(String p_136215_, PlayerTeam p_136216_)
```

**Parameters:**

- `p_136215_` (`String`)
- `p_136216_` (`PlayerTeam`)

**Returns:** `boolean`

### removePlayerFromTeam

```java
public void removePlayerFromTeam(String p_136223_, PlayerTeam p_136224_)
```

**Parameters:**

- `p_136223_` (`String`)
- `p_136224_` (`PlayerTeam`)

### onObjectiveAdded

```java
public void onObjectiveAdded(Objective p_136202_)
```

**Parameters:**

- `p_136202_` (`Objective`)

### onObjectiveChanged

```java
public void onObjectiveChanged(Objective p_136219_)
```

**Parameters:**

- `p_136219_` (`Objective`)

### onObjectiveRemoved

```java
public void onObjectiveRemoved(Objective p_136226_)
```

**Parameters:**

- `p_136226_` (`Objective`)

### onTeamAdded

```java
public void onTeamAdded(PlayerTeam p_136204_)
```

**Parameters:**

- `p_136204_` (`PlayerTeam`)

### onTeamChanged

```java
public void onTeamChanged(PlayerTeam p_136221_)
```

**Parameters:**

- `p_136221_` (`PlayerTeam`)

### onTeamRemoved

```java
public void onTeamRemoved(PlayerTeam p_136228_)
```

**Parameters:**

- `p_136228_` (`PlayerTeam`)

### addDirtyListener

```java
public void addDirtyListener(Runnable p_136208_)
```

**Parameters:**

- `p_136208_` (`Runnable`)

**Returns:** `public void`

### setDirty

```java
protected void setDirty()
```

**Returns:** `protected void`

### getStartTrackingPackets

```java
public List<Packet<?>> getStartTrackingPackets(Objective p_136230_)
```

**Parameters:**

- `p_136230_` (`Objective`)

**Returns:** `public List<Packet<?>>`

### startTrackingObjective

```java
public void startTrackingObjective(Objective p_136232_)
```

**Parameters:**

- `p_136232_` (`Objective`)

**Returns:** `public void`

### getStopTrackingPackets

```java
public List<Packet<?>> getStopTrackingPackets(Objective p_136234_)
```

**Parameters:**

- `p_136234_` (`Objective`)

**Returns:** `public List<Packet<?>>`

### stopTrackingObjective

```java
public void stopTrackingObjective(Objective p_136236_)
```

**Parameters:**

- `p_136236_` (`Objective`)

**Returns:** `public void`

### getObjectiveDisplaySlotCount

```java
public int getObjectiveDisplaySlotCount(Objective p_136238_)
```

**Parameters:**

- `p_136238_` (`Objective`)

**Returns:** `public int`

### dataFactory

```java
public SavedData.Factory<ScoreboardSaveData> dataFactory()
```

**Returns:** `public SavedData.Factory<ScoreboardSaveData>`

### createData

```java
private ScoreboardSaveData createData()
```

**Returns:** `private ScoreboardSaveData`

### createData

```java
private ScoreboardSaveData createData(CompoundTag p_180014_, HolderLookup.Provider p_324580_)
```

**Parameters:**

- `p_180014_` (`CompoundTag`)
- `p_324580_` (`HolderLookup.Provider`)

**Returns:** `private ScoreboardSaveData`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Method` | enum |  |
