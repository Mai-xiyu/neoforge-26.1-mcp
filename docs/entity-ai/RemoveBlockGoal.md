# RemoveBlockGoal

**Package:** `net.minecraft.world.entity.ai.goal`
**Type:** class
**Extends:** `MoveToBlockGoal`

## Methods

### RemoveBlockGoal

```java
public RemoveBlockGoal(Block p_25840_, PathfinderMob p_25841_, double p_25842_, int p_25843_)
```

**Parameters:**

- `p_25840_` (`Block`)
- `p_25841_` (`PathfinderMob`)
- `p_25842_` (`double`)
- `p_25843_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### stop

```java
public void stop()
```

### start

```java
public void start()
```

### playDestroyProgressSound

```java
public void playDestroyProgressSound(LevelAccessor p_25847_, BlockPos p_25848_)
```

**Parameters:**

- `p_25847_` (`LevelAccessor`)
- `p_25848_` (`BlockPos`)

**Returns:** `public void`

### playBreakSound

```java
public void playBreakSound(Level p_25845_, BlockPos p_25846_)
```

**Parameters:**

- `p_25845_` (`Level`)
- `p_25846_` (`BlockPos`)

**Returns:** `public void`

### tick

```java
public void tick()
```

### isValidTarget

```java
protected boolean isValidTarget(LevelReader p_25850_, BlockPos p_25851_)
```

**Parameters:**

- `p_25850_` (`LevelReader`)
- `p_25851_` (`BlockPos`)

**Returns:** `boolean`
