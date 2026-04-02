# CraftingContainer

**Package:** `net.minecraft.world.inventory`
**Type:** interface
**Extends:** `Container, StackedContentsCompatible`

## Methods

### getWidth

```java
int getWidth()
```

**Returns:** `int`

### getHeight

```java
int getHeight()
```

**Returns:** `int`

### getItems

```java
List<ItemStack> getItems()
```

**Returns:** `List<ItemStack>`

### asCraftInput

```java
default CraftingInput asCraftInput()
```

**Returns:** `default CraftingInput`

### asPositionedCraftInput

```java
default CraftingInput.Positioned asPositionedCraftInput()
```

**Returns:** `default CraftingInput.Positioned`
