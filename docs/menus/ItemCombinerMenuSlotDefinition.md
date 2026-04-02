# ItemCombinerMenuSlotDefinition

**Package:** `net.minecraft.world.inventory`
**Type:** class

## Methods

### ItemCombinerMenuSlotDefinition

```java
 ItemCombinerMenuSlotDefinition(List<ItemCombinerMenuSlotDefinition.SlotDefinition> p_266947_, ItemCombinerMenuSlotDefinition.SlotDefinition p_266715_)
```

**Parameters:**

- `p_266947_` (`List<ItemCombinerMenuSlotDefinition.SlotDefinition>`)
- `p_266715_` (`ItemCombinerMenuSlotDefinition.SlotDefinition`)

**Returns:** ``

### IllegalArgumentException

```java
throw new IllegalArgumentException("Need to define both inputSlots and resultSlot")
```

**Parameters:**

- `resultSlot"` (`"Need to define both inputSlots and`)

**Returns:** `throw new`

### create

```java
public static ItemCombinerMenuSlotDefinition.Builder create()
```

**Returns:** `public static ItemCombinerMenuSlotDefinition.Builder`

### hasSlot

```java
public boolean hasSlot(int p_267185_)
```

**Parameters:**

- `p_267185_` (`int`)

**Returns:** `public boolean`

### getSlot

```java
public ItemCombinerMenuSlotDefinition.SlotDefinition getSlot(int p_266907_)
```

**Parameters:**

- `p_266907_` (`int`)

**Returns:** `public ItemCombinerMenuSlotDefinition.SlotDefinition`

### getResultSlot

```java
public ItemCombinerMenuSlotDefinition.SlotDefinition getResultSlot()
```

**Returns:** `public ItemCombinerMenuSlotDefinition.SlotDefinition`

### getSlots

```java
public List<ItemCombinerMenuSlotDefinition.SlotDefinition> getSlots()
```

**Returns:** `public List<ItemCombinerMenuSlotDefinition.SlotDefinition>`

### getNumOfInputSlots

```java
public int getNumOfInputSlots()
```

**Returns:** `public int`

### getResultSlotIndex

```java
public int getResultSlotIndex()
```

**Returns:** `public int`

### getInputSlotIndexes

```java
public List<Integer> getInputSlotIndexes()
```

**Returns:** `public List<Integer>`

### withSlot

```java
public ItemCombinerMenuSlotDefinition.Builder withSlot(int p_267315_, int p_267028_, int p_266815_, Predicate<ItemStack> p_267120_)
```

**Parameters:**

- `p_267315_` (`int`)
- `p_267028_` (`int`)
- `p_266815_` (`int`)
- `p_267120_` (`Predicate<ItemStack>`)

**Returns:** `public ItemCombinerMenuSlotDefinition.Builder`

### withResultSlot

```java
public ItemCombinerMenuSlotDefinition.Builder withResultSlot(int p_267180_, int p_267130_, int p_266910_)
```

**Parameters:**

- `p_267180_` (`int`)
- `p_267130_` (`int`)
- `p_266910_` (`int`)

**Returns:** `public ItemCombinerMenuSlotDefinition.Builder`

### build

```java
public ItemCombinerMenuSlotDefinition build()
```

**Returns:** `public ItemCombinerMenuSlotDefinition`

### ItemCombinerMenuSlotDefinition

```java
return new ItemCombinerMenuSlotDefinition()
```

**Returns:** `return new`

### SlotDefinition

```java
public static record SlotDefinition(int slotIndex, int x, int y, Predicate<ItemStack> mayPlace)
```

**Parameters:**

- `slotIndex` (`int`)
- `x` (`int`)
- `y` (`int`)
- `mayPlace` (`Predicate<ItemStack>`)

**Returns:** `public static record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `SlotDefinition` | record |  |
