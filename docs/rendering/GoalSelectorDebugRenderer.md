# GoalSelectorDebugRenderer

**Package:** `net.minecraft.client.renderer.debug`
**Type:** class
**Implements:** `DebugRenderer.SimpleDebugRenderer`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### clear

```java
public void clear()
```

### addGoalSelector

```java
public void addGoalSelector(int p_113549_, BlockPos p_295031_, List<GoalDebugPayload.DebugGoal> p_113550_)
```

**Parameters:**

- `p_113549_` (`int`)
- `p_295031_` (`BlockPos`)
- `p_113550_` (`List<GoalDebugPayload.DebugGoal>`)

**Returns:** `public void`

### removeGoalSelector

```java
public void removeGoalSelector(int p_173889_)
```

**Parameters:**

- `p_173889_` (`int`)

**Returns:** `public void`

### GoalSelectorDebugRenderer

```java
public GoalSelectorDebugRenderer(Minecraft p_113546_)
```

**Parameters:**

- `p_113546_` (`Minecraft`)

**Returns:** `public`

### render

```java
public void render(PoseStack p_113552_, MultiBufferSource p_113553_, double p_113554_, double p_113555_, double p_113556_)
```

**Parameters:**

- `p_113552_` (`PoseStack`)
- `p_113553_` (`MultiBufferSource`)
- `p_113554_` (`double`)
- `p_113555_` (`double`)
- `p_113556_` (`double`)

### EntityGoalInfo

```java
static record EntityGoalInfo(BlockPos entityPos, List<GoalDebugPayload.DebugGoal> goals)
```

**Parameters:**

- `entityPos` (`BlockPos`)
- `goals` (`List<GoalDebugPayload.DebugGoal>`)

**Returns:** `record`
