# GameRuleEntryFactory

**Package:** `net.neoforged.neoforge.client.gamerules`
**Type:** interface<T>
**Side:** 🖥️ Client
**Annotations:** `@FunctionalInterface`

## Methods

### create

```java
AbstractGameRulesScreen.RuleEntry create(AbstractGameRulesScreen screen, Component description, List<FormattedCharSequence> tooltip, String str, GameRule<T> gameRule)
```

**Parameters:**

- `screen` (`AbstractGameRulesScreen`)
- `description` (`Component`)
- `tooltip` (`List<FormattedCharSequence>`)
- `str` (`String`)
- `gameRule` (`GameRule<T>`)

**Returns:** `AbstractGameRulesScreen.RuleEntry`

### toVanilla

```java
default AbstractGameRulesScreen.EntryFactory<T> toVanilla(AbstractGameRulesScreen screen)
```

**Parameters:**

- `screen` (`AbstractGameRulesScreen`)

**Returns:** `default AbstractGameRulesScreen.EntryFactory<T>`

### create

```java
> create()
```

**Returns:** `>`
