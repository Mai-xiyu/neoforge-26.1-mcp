# ICommandSourceStackExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Description

Additional methods for `CommandSourceStack` so that commands and arguments can access various things without directly referencing using server specific classes

## Methods

### self

```java
private CommandSourceStack self()
```

**Returns:** `private CommandSourceStack`

### getScoreboard

```java
default Scoreboard getScoreboard()
```

**Returns:** `Scoreboard`

### getAdvancement

```java
default AdvancementHolder getAdvancement(ResourceLocation id)
```

**Parameters:**

- `id` (`ResourceLocation`)

**Returns:** `AdvancementHolder`

### getRecipeManager

```java
default RecipeManager getRecipeManager()
```

**Returns:** `RecipeManager`

### getUnsidedLevel

```java
default Level getUnsidedLevel()
```

**Returns:** `Level`
