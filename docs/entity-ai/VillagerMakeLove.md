# VillagerMakeLove

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class
**Extends:** `Behavior<Villager>`

## Methods

### VillagerMakeLove

```java
public VillagerMakeLove()
```

**Returns:** `public`

### checkExtraStartConditions

```java
protected boolean checkExtraStartConditions(ServerLevel p_24623_, Villager p_24624_)
```

**Parameters:**

- `p_24623_` (`ServerLevel`)
- `p_24624_` (`Villager`)

**Returns:** `protected boolean`

### canStillUse

```java
protected boolean canStillUse(ServerLevel p_24626_, Villager p_24627_, long p_24628_)
```

**Parameters:**

- `p_24626_` (`ServerLevel`)
- `p_24627_` (`Villager`)
- `p_24628_` (`long`)

**Returns:** `protected boolean`

### start

```java
protected void start(ServerLevel p_24652_, Villager p_24653_, long p_24654_)
```

**Parameters:**

- `p_24652_` (`ServerLevel`)
- `p_24653_` (`Villager`)
- `p_24654_` (`long`)

**Returns:** `protected void`

### tick

```java
protected void tick(ServerLevel p_24667_, Villager p_24668_, long p_24669_)
```

**Parameters:**

- `p_24667_` (`ServerLevel`)
- `p_24668_` (`Villager`)
- `p_24669_` (`long`)

**Returns:** `protected void`

### tryToGiveBirth

```java
private void tryToGiveBirth(ServerLevel p_24630_, Villager p_24631_, Villager p_24632_)
```

**Parameters:**

- `p_24630_` (`ServerLevel`)
- `p_24631_` (`Villager`)
- `p_24632_` (`Villager`)

**Returns:** `private void`

### stop

```java
protected void stop(ServerLevel p_24675_, Villager p_24676_, long p_24677_)
```

**Parameters:**

- `p_24675_` (`ServerLevel`)
- `p_24676_` (`Villager`)
- `p_24677_` (`long`)

**Returns:** `protected void`

### isBreedingPossible

```java
private boolean isBreedingPossible(Villager p_24640_)
```

**Parameters:**

- `p_24640_` (`Villager`)

**Returns:** `private boolean`

### takeVacantBed

```java
private Optional<BlockPos> takeVacantBed(ServerLevel p_24649_, Villager p_24650_)
```

**Parameters:**

- `p_24649_` (`ServerLevel`)
- `p_24650_` (`Villager`)

**Returns:** `private Optional<BlockPos>`

### canReach

```java
private boolean canReach(Villager p_217501_, BlockPos p_217502_, Holder<PoiType> p_217503_)
```

**Parameters:**

- `p_217501_` (`Villager`)
- `p_217502_` (`BlockPos`)
- `p_217503_` (`Holder<PoiType>`)

**Returns:** `private boolean`

### breed

```java
private Optional<Villager> breed(ServerLevel p_24656_, Villager p_24657_, Villager p_24658_)
```

**Parameters:**

- `p_24656_` (`ServerLevel`)
- `p_24657_` (`Villager`)
- `p_24658_` (`Villager`)

**Returns:** `private Optional<Villager>`

### giveBedToChild

```java
private void giveBedToChild(ServerLevel p_24634_, Villager p_24635_, BlockPos p_24636_)
```

**Parameters:**

- `p_24634_` (`ServerLevel`)
- `p_24635_` (`Villager`)
- `p_24636_` (`BlockPos`)

**Returns:** `private void`
