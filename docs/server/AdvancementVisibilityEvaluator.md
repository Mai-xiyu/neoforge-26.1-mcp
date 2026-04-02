# AdvancementVisibilityEvaluator

**Package:** `net.minecraft.server.advancements`
**Type:** class
**Side:** 🖧 Server

## Methods

### evaluateVisibilityRule

```java
private static AdvancementVisibilityEvaluator.VisibilityRule evaluateVisibilityRule(Advancement p_265736_, boolean p_265426_)
```

**Parameters:**

- `p_265736_` (`Advancement`)
- `p_265426_` (`boolean`)

**Returns:** `private static AdvancementVisibilityEvaluator.VisibilityRule`

### evaluateVisiblityForUnfinishedNode

```java
private static boolean evaluateVisiblityForUnfinishedNode(Stack<AdvancementVisibilityEvaluator.VisibilityRule> p_265343_)
```

**Parameters:**

- `p_265343_` (`Stack<AdvancementVisibilityEvaluator.VisibilityRule>`)

**Returns:** `private static boolean`

### evaluateVisibility

```java
private static boolean evaluateVisibility(AdvancementNode p_301282_, Stack<AdvancementVisibilityEvaluator.VisibilityRule> p_301009_, Predicate<AdvancementNode> p_265359_, AdvancementVisibilityEvaluator.Output p_265303_)
```

**Parameters:**

- `p_301282_` (`AdvancementNode`)
- `p_301009_` (`Stack<AdvancementVisibilityEvaluator.VisibilityRule>`)
- `p_265359_` (`Predicate<AdvancementNode>`)
- `p_265303_` (`AdvancementVisibilityEvaluator.Output`)

**Returns:** `private static boolean`

### evaluateVisibility

```java
public static void evaluateVisibility(AdvancementNode p_301203_, Predicate<AdvancementNode> p_265561_, AdvancementVisibilityEvaluator.Output p_265381_)
```

**Parameters:**

- `p_301203_` (`AdvancementNode`)
- `p_265561_` (`Predicate<AdvancementNode>`)
- `p_265381_` (`AdvancementVisibilityEvaluator.Output`)

**Returns:** `public static void`

### evaluateVisibility

```java
 evaluateVisibility()
```

**Returns:** ``

### isVisible

```java
public static boolean isVisible(AdvancementNode advancement, Predicate<AdvancementNode> test)
```

**Parameters:**

- `advancement` (`AdvancementNode`)
- `test` (`Predicate<AdvancementNode>`)

**Returns:** `public static boolean`

### accept

```java
void accept(AdvancementNode p_300909_, boolean p_265580_)
```

**Parameters:**

- `p_300909_` (`AdvancementNode`)
- `p_265580_` (`boolean`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Output` | interface |  |
