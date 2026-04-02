# GenericGameRuleEntry

**Package:** `net.neoforged.neoforge.client.gamerules`
**Type:** class<T>
**Extends:** `GameRuleEntry`
**Side:** 🖥️ Client

## Description

Copy of `AbstractGameRulesScreen.IntegerRuleEntry` updated to be used in a static context for any `GameRule`



It is recommended for advanced types to make use of `RegisterGameRuleEntryFactoryEvent`

## Methods

### GenericGameRuleEntry

```java
public GenericGameRuleEntry(AbstractGameRulesScreen screen, Component label, List<FormattedCharSequence> tooltip, String narration, GameRule<T> gameRule)
```

**Parameters:**

- `screen` (`AbstractGameRulesScreen`)
- `label` (`Component`)
- `tooltip` (`List<FormattedCharSequence>`)
- `narration` (`String`)
- `gameRule` (`GameRule<T>`)

**Returns:** `public`

### extractContent

```java
public void extractContent(GuiGraphicsExtractor graphics, int mouseX, int mouseY, boolean hovered, float a)
```

**Parameters:**

- `graphics` (`GuiGraphicsExtractor`)
- `mouseX` (`int`)
- `mouseY` (`int`)
- `hovered` (`boolean`)
- `a` (`float`)
