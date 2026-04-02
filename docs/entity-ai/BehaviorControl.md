# BehaviorControl

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** interface<E extends LivingEntity>

## Methods

### getStatus

```java
Behavior.Status getStatus()
```

**Returns:** `Behavior.Status`

### tryStart

```java
boolean tryStart(ServerLevel p_259494_, E p_259608_, long p_260186_)
```

**Parameters:**

- `p_259494_` (`ServerLevel`)
- `p_259608_` (`E`)
- `p_260186_` (`long`)

**Returns:** `boolean`

### tickOrStop

```java
void tickOrStop(ServerLevel p_259926_, E p_260016_, long p_259089_)
```

**Parameters:**

- `p_259926_` (`ServerLevel`)
- `p_260016_` (`E`)
- `p_259089_` (`long`)

### doStop

```java
void doStop(ServerLevel p_259056_, E p_259620_, long p_260105_)
```

**Parameters:**

- `p_259056_` (`ServerLevel`)
- `p_259620_` (`E`)
- `p_260105_` (`long`)

### debugString

```java
String debugString()
```

**Returns:** `String`
