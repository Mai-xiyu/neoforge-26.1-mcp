# DispensibleContainerItem

**Package:** `net.minecraft.world.item`
**Type:** interface
**Extends:** `net.neoforged.neoforge.common.extensions.IDispensibleContainerItemExtension`

## Methods

### checkExtraContent

```java
default void checkExtraContent(Player p_150817_, Level p_150818_, ItemStack p_150819_, BlockPos p_150820_)
```

**Parameters:**

- `p_150817_` (`Player`)
- `p_150818_` (`Level`)
- `p_150819_` (`ItemStack`)
- `p_150820_` (`BlockPos`)

**Returns:** `default void`

### emptyContents ⚠️ *Deprecated*

```java
use the ItemStack sensitive version
    boolean emptyContents(Player p_150821_, Level p_150822_, BlockPos p_150823_, BlockHitResult p_150824_)
```

**Parameters:**

- `p_150821_` (`Player`)
- `p_150822_` (`Level`)
- `p_150823_` (`BlockPos`)
- `p_150824_` (`BlockHitResult`)

**Returns:** `use the ItemStack sensitive version
    boolean`
