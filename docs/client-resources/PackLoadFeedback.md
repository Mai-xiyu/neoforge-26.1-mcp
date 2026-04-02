# PackLoadFeedback

**Package:** `net.minecraft.client.resources.server`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### reportUpdate

```java
void reportUpdate(UUID p_315007_, PackLoadFeedback.Update p_314979_)
```

**Parameters:**

- `p_315007_` (`UUID`)
- `p_314979_` (`PackLoadFeedback.Update`)

### reportFinalResult

```java
void reportFinalResult(UUID p_314623_, PackLoadFeedback.FinalResult p_314920_)
```

**Parameters:**

- `p_314623_` (`UUID`)
- `p_314920_` (`PackLoadFeedback.FinalResult`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `FinalResult` | enum |  |
| `Update` | enum |  |
