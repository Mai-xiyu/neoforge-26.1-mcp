# ChangeDimensionTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<ChangeDimensionTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<ChangeDimensionTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<ChangeDimensionTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<ChangeDimensionTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_19758_, ResourceKey<Level> p_19759_, ResourceKey<Level> p_19760_)
```

**Parameters:**

- `p_19758_` (`ServerPlayer`)
- `p_19759_` (`ResourceKey<Level>`)
- `p_19760_` (`ResourceKey<Level>`)

**Returns:** `public void`

### changedDimension

```java
public static Criterion<ChangeDimensionTrigger.TriggerInstance> changedDimension()
```

**Returns:** `public static Criterion<ChangeDimensionTrigger.TriggerInstance>`

### changedDimension

```java
public static Criterion<ChangeDimensionTrigger.TriggerInstance> changedDimension(ResourceKey<Level> p_301026_, ResourceKey<Level> p_301124_)
```

**Parameters:**

- `p_301026_` (`ResourceKey<Level>`)
- `p_301124_` (`ResourceKey<Level>`)

**Returns:** `public static Criterion<ChangeDimensionTrigger.TriggerInstance>`

### changedDimensionTo

```java
public static Criterion<ChangeDimensionTrigger.TriggerInstance> changedDimensionTo(ResourceKey<Level> p_19783_)
```

**Parameters:**

- `p_19783_` (`ResourceKey<Level>`)

**Returns:** `public static Criterion<ChangeDimensionTrigger.TriggerInstance>`

### changedDimensionFrom

```java
public static Criterion<ChangeDimensionTrigger.TriggerInstance> changedDimensionFrom(ResourceKey<Level> p_147564_)
```

**Parameters:**

- `p_147564_` (`ResourceKey<Level>`)

**Returns:** `public static Criterion<ChangeDimensionTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ResourceKey<Level> p_19785_, ResourceKey<Level> p_19786_)
```

**Parameters:**

- `p_19785_` (`ResourceKey<Level>`)
- `p_19786_` (`ResourceKey<Level>`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
