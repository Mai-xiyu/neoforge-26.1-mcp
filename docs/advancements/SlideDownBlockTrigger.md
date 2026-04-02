# SlideDownBlockTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<SlideDownBlockTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<SlideDownBlockTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<SlideDownBlockTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<SlideDownBlockTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_66979_, BlockState p_66980_)
```

**Parameters:**

- `p_66979_` (`ServerPlayer`)
- `p_66980_` (`BlockState`)

**Returns:** `public void`

### validate

```java
private static DataResult<SlideDownBlockTrigger.TriggerInstance> validate(SlideDownBlockTrigger.TriggerInstance p_312038_)
```

**Parameters:**

- `p_312038_` (`SlideDownBlockTrigger.TriggerInstance`)

**Returns:** `private static DataResult<SlideDownBlockTrigger.TriggerInstance>`

### slidesDownBlock

```java
public static Criterion<SlideDownBlockTrigger.TriggerInstance> slidesDownBlock(Block p_67007_)
```

**Parameters:**

- `p_67007_` (`Block`)

**Returns:** `public static Criterion<SlideDownBlockTrigger.TriggerInstance>`

### matches

```java
public boolean matches(BlockState p_67009_)
```

**Parameters:**

- `p_67009_` (`BlockState`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
