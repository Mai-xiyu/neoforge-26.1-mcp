# CriterionTrigger

**Package:** `net.minecraft.advancements`
**Type:** interface<T extends CriterionTriggerInstance>

## Methods

### addPlayerListener

```java
void addPlayerListener(PlayerAdvancements p_13674_, CriterionTrigger.Listener<T> p_13675_)
```

**Parameters:**

- `p_13674_` (`PlayerAdvancements`)
- `p_13675_` (`CriterionTrigger.Listener<T>`)

### removePlayerListener

```java
void removePlayerListener(PlayerAdvancements p_13676_, CriterionTrigger.Listener<T> p_13677_)
```

**Parameters:**

- `p_13676_` (`PlayerAdvancements`)
- `p_13677_` (`CriterionTrigger.Listener<T>`)

### removePlayerListeners

```java
void removePlayerListeners(PlayerAdvancements p_13673_)
```

**Parameters:**

- `p_13673_` (`PlayerAdvancements`)

### codec

```java
Codec<T> codec()
```

**Returns:** `Codec<T>`

### createCriterion

```java
default Criterion<T> createCriterion(T p_301092_)
```

**Parameters:**

- `p_301092_` (`T`)

**Returns:** `default Criterion<T>`

### run

```java
public void run(PlayerAdvancements p_13687_)
```

**Parameters:**

- `p_13687_` (`PlayerAdvancements`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Listener` | record |  |
