# RecipeOutput

**Package:** `net.minecraft.data.recipes`
**Type:** interface
**Extends:** `net.neoforged.neoforge.common.extensions.IRecipeOutputExtension`

## Methods

### accept

```java
default void accept(ResourceLocation p_312249_, Recipe<?> p_312328_, AdvancementHolder p_312176_)
```

**Parameters:**

- `p_312249_` (`ResourceLocation`)
- `p_312328_` (`Recipe<?>`)
- `p_312176_` (`AdvancementHolder`)

**Returns:** `default void`

### accept

```java
 accept(new net.neoforged.neoforge.common.conditions.ICondition[0])
```

**Parameters:**

- `net.neoforged.neoforge.common.conditions.ICondition[0]` (`new`)

**Returns:** ``

### advancement

```java
Advancement.Builder advancement()
```

**Returns:** `Advancement.Builder`
