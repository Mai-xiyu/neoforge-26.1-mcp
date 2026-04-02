# ScoreboardSaveData

**Package:** `net.minecraft.world.scores`
**Type:** class
**Extends:** `SavedData`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FILE_ID` | `String` |  |

## Methods

### ScoreboardSaveData

```java
public ScoreboardSaveData(Scoreboard p_166101_)
```

**Parameters:**

- `p_166101_` (`Scoreboard`)

**Returns:** `public`

### load

```java
public ScoreboardSaveData load(CompoundTag p_166103_, HolderLookup.Provider p_332093_)
```

**Parameters:**

- `p_166103_` (`CompoundTag`)
- `p_332093_` (`HolderLookup.Provider`)

**Returns:** `public ScoreboardSaveData`

### loadTeams

```java
private void loadTeams(ListTag p_83525_, HolderLookup.Provider p_331819_)
```

**Parameters:**

- `p_83525_` (`ListTag`)
- `p_331819_` (`HolderLookup.Provider`)

**Returns:** `private void`

### loadTeamPlayers

```java
private void loadTeamPlayers(PlayerTeam p_83515_, ListTag p_83516_)
```

**Parameters:**

- `p_83515_` (`PlayerTeam`)
- `p_83516_` (`ListTag`)

**Returns:** `private void`

### loadDisplaySlots

```java
private void loadDisplaySlots(CompoundTag p_83531_)
```

**Parameters:**

- `p_83531_` (`CompoundTag`)

**Returns:** `private void`

### loadObjectives

```java
private void loadObjectives(ListTag p_83529_, HolderLookup.Provider p_331574_)
```

**Parameters:**

- `p_83529_` (`ListTag`)
- `p_331574_` (`HolderLookup.Provider`)

**Returns:** `private void`

### save

```java
public CompoundTag save(CompoundTag p_83527_, HolderLookup.Provider p_324474_)
```

**Parameters:**

- `p_83527_` (`CompoundTag`)
- `p_324474_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### saveTeams

```java
private ListTag saveTeams(HolderLookup.Provider p_331247_)
```

**Parameters:**

- `p_331247_` (`HolderLookup.Provider`)

**Returns:** `private ListTag`

### saveDisplaySlots

```java
private void saveDisplaySlots(CompoundTag p_83533_)
```

**Parameters:**

- `p_83533_` (`CompoundTag`)

**Returns:** `private void`

### saveObjectives

```java
private ListTag saveObjectives(HolderLookup.Provider p_330495_)
```

**Parameters:**

- `p_330495_` (`HolderLookup.Provider`)

**Returns:** `private ListTag`
