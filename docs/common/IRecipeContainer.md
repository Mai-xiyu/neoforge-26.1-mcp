# IRecipeContainer

**Package:** `net.neoforged.neoforge.common.crafting`
**Type:** interface

## Description

This interface is to be implemented on Container objects.
For GUIs with recipe books, this allows their containers to have
recipe completion and ghost recipes in their craft matrices.

## Methods

### getCraftResult

```java
ResultContainer getCraftResult()
```

**Returns:** `ResultContainer`

### getCraftMatrix

```java
CraftingContainer getCraftMatrix()
```

**Returns:** `CraftingContainer`
