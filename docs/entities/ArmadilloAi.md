# ArmadilloAi

**Package:** `net.minecraft.world.entity.animal.armadillo`
**Type:** class

## Methods

### brainProvider

```java
public static Brain.Provider<Armadillo> brainProvider()
```

**Returns:** `public static Brain.Provider<Armadillo>`

### makeBrain

```java
protected static Brain<?> makeBrain(Brain<Armadillo> p_316225_)
```

**Parameters:**

- `p_316225_` (`Brain<Armadillo>`)

**Returns:** `protected static Brain<?>`

### initCoreActivity

```java
 initCoreActivity()
```

**Returns:** ``

### initIdleActivity

```java
 initIdleActivity()
```

**Returns:** ``

### initScaredActivity

```java
 initScaredActivity()
```

**Returns:** ``

### initCoreActivity

```java
private static void initCoreActivity(Brain<Armadillo> p_316229_)
```

**Parameters:**

- `p_316229_` (`Brain<Armadillo>`)

**Returns:** `private static void`

### MoveToTargetSink

```java
,
                new MoveToTargetSink()
```

**Returns:** `,
                new`

### checkExtraStartConditions

```java
protected boolean checkExtraStartConditions(ServerLevel p_316506_, Mob p_316710_)
```

**Parameters:**

- `p_316506_` (`ServerLevel`)
- `p_316710_` (`Mob`)

**Returns:** `boolean`

### initIdleActivity

```java
private static void initIdleActivity(Brain<Armadillo> p_316840_)
```

**Parameters:**

- `p_316840_` (`Brain<Armadillo>`)

**Returns:** `private static void`

### initScaredActivity

```java
private static void initScaredActivity(Brain<Armadillo> p_316854_)
```

**Parameters:**

- `p_316854_` (`Brain<Armadillo>`)

**Returns:** `private static void`

### updateActivity

```java
public static void updateActivity(Armadillo p_316575_)
```

**Parameters:**

- `p_316575_` (`Armadillo`)

**Returns:** `public static void`

### getTemptations

```java
public static Predicate<ItemStack> getTemptations()
```

**Returns:** `public static Predicate<ItemStack>`

### ArmadilloBallUp

```java
public ArmadilloBallUp()
```

**Returns:** `public`

### tick

```java
protected void tick(ServerLevel p_316315_, Armadillo p_316310_, long p_316415_)
```

**Parameters:**

- `p_316315_` (`ServerLevel`)
- `p_316310_` (`Armadillo`)
- `p_316415_` (`long`)

**Returns:** `protected void`

### pickNextPeekTimer

```java
private int pickNextPeekTimer(Armadillo p_326014_)
```

**Parameters:**

- `p_326014_` (`Armadillo`)

**Returns:** `private int`

### checkExtraStartConditions

```java
protected boolean checkExtraStartConditions(ServerLevel p_316768_, Armadillo p_316762_)
```

**Parameters:**

- `p_316768_` (`ServerLevel`)
- `p_316762_` (`Armadillo`)

**Returns:** `protected boolean`

### canStillUse

```java
protected boolean canStillUse(ServerLevel p_316577_, Armadillo p_316565_, long p_316753_)
```

**Parameters:**

- `p_316577_` (`ServerLevel`)
- `p_316565_` (`Armadillo`)
- `p_316753_` (`long`)

**Returns:** `protected boolean`

### start

```java
protected void start(ServerLevel p_316659_, Armadillo p_316121_, long p_316872_)
```

**Parameters:**

- `p_316659_` (`ServerLevel`)
- `p_316121_` (`Armadillo`)
- `p_316872_` (`long`)

**Returns:** `protected void`

### stop

```java
protected void stop(ServerLevel p_316572_, Armadillo p_316192_, long p_316823_)
```

**Parameters:**

- `p_316572_` (`ServerLevel`)
- `p_316192_` (`Armadillo`)
- `p_316823_` (`long`)

**Returns:** `protected void`

### ArmadilloPanic

```java
public ArmadilloPanic(float p_316413_)
```

**Parameters:**

- `p_316413_` (`float`)

**Returns:** `public`

### super

```java
 super(p_350284_ -> DamageTypeTags.PANIC_ENVIRONMENTAL_CAUSES)
```

**Parameters:**

- `DamageTypeTags.PANIC_ENVIRONMENTAL_CAUSES` (`p_350284_ ->`)

**Returns:** ``

### start

```java
protected void start(ServerLevel p_326201_, Armadillo p_326188_, long p_325949_)
```

**Parameters:**

- `p_326201_` (`ServerLevel`)
- `p_326188_` (`Armadillo`)
- `p_325949_` (`long`)

**Returns:** `protected void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ArmadilloBallUp` | class |  |
| `ArmadilloPanic` | class |  |
