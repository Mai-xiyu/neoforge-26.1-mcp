# ContainerSynchronizer

**Package:** `net.minecraft.world.inventory`
**Type:** interface

## Methods

### sendInitialData

```java
void sendInitialData(AbstractContainerMenu p_150535_, NonNullList<ItemStack> p_150536_, ItemStack p_150537_, int[] p_150538_)
```

**Parameters:**

- `p_150535_` (`AbstractContainerMenu`)
- `p_150536_` (`NonNullList<ItemStack>`)
- `p_150537_` (`ItemStack`)
- `p_150538_` (`int[]`)

### sendSlotChange

```java
void sendSlotChange(AbstractContainerMenu p_150530_, int p_150531_, ItemStack p_150532_)
```

**Parameters:**

- `p_150530_` (`AbstractContainerMenu`)
- `p_150531_` (`int`)
- `p_150532_` (`ItemStack`)

### sendCarriedChange

```java
void sendCarriedChange(AbstractContainerMenu p_150533_, ItemStack p_150534_)
```

**Parameters:**

- `p_150533_` (`AbstractContainerMenu`)
- `p_150534_` (`ItemStack`)

### sendDataChange

```java
void sendDataChange(AbstractContainerMenu p_150527_, int p_150528_, int p_150529_)
```

**Parameters:**

- `p_150527_` (`AbstractContainerMenu`)
- `p_150528_` (`int`)
- `p_150529_` (`int`)
