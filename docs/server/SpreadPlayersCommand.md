# SpreadPlayersCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_138697_)
```

**Parameters:**

- `p_138697_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### spreadPlayers

```java
private static int spreadPlayers(CommandSourceStack p_138703_, Vec2 p_138704_, float p_138705_, float p_138706_, int p_138707_, boolean p_138708_, Collection<? extends Entity> p_138709_)
```

**Parameters:**

- `p_138703_` (`CommandSourceStack`)
- `p_138704_` (`Vec2`)
- `p_138705_` (`float`)
- `p_138706_` (`float`)
- `p_138707_` (`int`)
- `p_138708_` (`boolean`)
- `p_138709_` (`Collection<? extends Entity>`)

**Returns:** `private static int`

### getNumberOfTeams

```java
private static int getNumberOfTeams(Collection<? extends Entity> p_138728_)
```

**Parameters:**

- `p_138728_` (`Collection<? extends Entity>`)

**Returns:** `private static int`

### spreadPositions

```java
private static void spreadPositions(Vec2 p_214741_, double p_214742_, ServerLevel p_214743_, RandomSource p_214744_, double p_214745_, double p_214746_, double p_214747_, double p_214748_, int p_214749_, SpreadPlayersCommand.Position[] p_214750_, boolean p_214751_)
```

**Parameters:**

- `p_214741_` (`Vec2`)
- `p_214742_` (`double`)
- `p_214743_` (`ServerLevel`)
- `p_214744_` (`RandomSource`)
- `p_214745_` (`double`)
- `p_214746_` (`double`)
- `p_214747_` (`double`)
- `p_214748_` (`double`)
- `p_214749_` (`int`)
- `p_214750_` (`SpreadPlayersCommand.Position[]`)
- `p_214751_` (`boolean`)

**Returns:** `private static void`

### setPlayerPositions

```java
private static double setPlayerPositions(Collection<? extends Entity> p_138730_, ServerLevel p_138731_, SpreadPlayersCommand.Position[] p_138732_, int p_138733_, boolean p_138734_)
```

**Parameters:**

- `p_138730_` (`Collection<? extends Entity>`)
- `p_138731_` (`ServerLevel`)
- `p_138732_` (`SpreadPlayersCommand.Position[]`)
- `p_138733_` (`int`)
- `p_138734_` (`boolean`)

**Returns:** `private static double`

### createInitialPositions

```java
private static SpreadPlayersCommand.Position[] createInitialPositions(RandomSource p_214734_, int p_214735_, double p_214736_, double p_214737_, double p_214738_, double p_214739_)
```

**Parameters:**

- `p_214734_` (`RandomSource`)
- `p_214735_` (`int`)
- `p_214736_` (`double`)
- `p_214737_` (`double`)
- `p_214738_` (`double`)
- `p_214739_` (`double`)

**Returns:** `private static SpreadPlayersCommand.Position[]`

### dist

```java
double dist(SpreadPlayersCommand.Position p_138768_)
```

**Parameters:**

- `p_138768_` (`SpreadPlayersCommand.Position`)

**Returns:** `double`

### normalize

```java
void normalize()
```

### getLength

```java
double getLength()
```

**Returns:** `double`

### moveAway

```java
public void moveAway(SpreadPlayersCommand.Position p_138777_)
```

**Parameters:**

- `p_138777_` (`SpreadPlayersCommand.Position`)

**Returns:** `public void`

### clamp

```java
public boolean clamp(double p_138754_, double p_138755_, double p_138756_, double p_138757_)
```

**Parameters:**

- `p_138754_` (`double`)
- `p_138755_` (`double`)
- `p_138756_` (`double`)
- `p_138757_` (`double`)

**Returns:** `public boolean`

### getSpawnY

```java
public int getSpawnY(BlockGetter p_138759_, int p_138760_)
```

**Parameters:**

- `p_138759_` (`BlockGetter`)
- `p_138760_` (`int`)

**Returns:** `public int`

### isSafe

```java
public boolean isSafe(BlockGetter p_138774_, int p_138775_)
```

**Parameters:**

- `p_138774_` (`BlockGetter`)
- `p_138775_` (`int`)

**Returns:** `public boolean`

### randomize

```java
public void randomize(RandomSource p_214753_, double p_214754_, double p_214755_, double p_214756_, double p_214757_)
```

**Parameters:**

- `p_214753_` (`RandomSource`)
- `p_214754_` (`double`)
- `p_214755_` (`double`)
- `p_214756_` (`double`)
- `p_214757_` (`double`)

**Returns:** `public void`
