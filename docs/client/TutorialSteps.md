# TutorialSteps

**Package:** `net.minecraft.client.tutorial`
**Type:** enum
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### NONE

```java
, NONE()
```

**Returns:** `,`

### TutorialSteps

```java
private <T extends TutorialStepInstance> TutorialSteps(String p_120637_, Function<Tutorial, T> p_120638_)
```

**Parameters:**

- `p_120637_` (`String`)
- `p_120638_` (`Function<Tutorial, T>`)

**Returns:** `private <T extends TutorialStepInstance>`

### create

```java
public TutorialStepInstance create(Tutorial p_120641_)
```

**Parameters:**

- `p_120641_` (`Tutorial`)

**Returns:** `public TutorialStepInstance`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getByName

```java
public static TutorialSteps getByName(String p_120643_)
```

**Parameters:**

- `p_120643_` (`String`)

**Returns:** `public static TutorialSteps`
