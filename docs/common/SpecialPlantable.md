# SpecialPlantable

**Package:** `net.neoforged.neoforge.common`
**Type:** interface

## Description

Intended for mods to help mark if a modded item allows for placing modded plants of any kind or size.
Also allows Villagers to properly plant items with this interface on and villagerCanPlantItem returning true.



People trying to plant modded items should check if item implements this interface.
Then check for true from canPlacePlantAtPosition first before calling spawnPlantAtPosition.
Implementers of this interface would ideally call canSurvive on their plant block in canPlacePlantAtPosition.



(Note: Vanilla plantable items are BlockItem where you can get their states directly and call canSurvive)

## Methods

### canPlacePlantAtPosition

```java
boolean canPlacePlantAtPosition(ItemStack itemStack, LevelReader level, BlockPos pos, Direction direction)
```

**Parameters:**

- `itemStack` (`ItemStack`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `direction` (`Direction`)

**Returns:** `boolean`

### spawnPlantAtPosition

```java
void spawnPlantAtPosition(ItemStack itemStack, LevelAccessor level, BlockPos pos, Direction direction)
```

**Parameters:**

- `itemStack` (`ItemStack`)
- `level` (`LevelAccessor`)
- `pos` (`BlockPos`)
- `direction` (`Direction`)

### villagerCanPlantItem

```java
default boolean villagerCanPlantItem(Villager villager)
```

**Parameters:**

- `villager` (`Villager`)

**Returns:** `boolean`
