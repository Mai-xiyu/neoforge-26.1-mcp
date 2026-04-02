# CriteriaTriggers

**Package:** `net.minecraft.advancements`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<CriterionTrigger<?>>` |  |
| `IMPOSSIBLE` | `ImpossibleTrigger` |  |
| `PLAYER_KILLED_ENTITY` | `KilledTrigger` |  |
| `ENTITY_KILLED_PLAYER` | `KilledTrigger` |  |
| `ENTER_BLOCK` | `EnterBlockTrigger` |  |
| `INVENTORY_CHANGED` | `InventoryChangeTrigger` |  |
| `RECIPE_UNLOCKED` | `RecipeUnlockedTrigger` |  |
| `PLAYER_HURT_ENTITY` | `PlayerHurtEntityTrigger` |  |
| `ENTITY_HURT_PLAYER` | `EntityHurtPlayerTrigger` |  |
| `ENCHANTED_ITEM` | `EnchantedItemTrigger` |  |
| `FILLED_BUCKET` | `FilledBucketTrigger` |  |
| `BREWED_POTION` | `BrewedPotionTrigger` |  |
| `CONSTRUCT_BEACON` | `ConstructBeaconTrigger` |  |
| `USED_ENDER_EYE` | `UsedEnderEyeTrigger` |  |
| `SUMMONED_ENTITY` | `SummonedEntityTrigger` |  |
| `BRED_ANIMALS` | `BredAnimalsTrigger` |  |
| `LOCATION` | `PlayerTrigger` |  |
| `SLEPT_IN_BED` | `PlayerTrigger` |  |
| `CURED_ZOMBIE_VILLAGER` | `CuredZombieVillagerTrigger` |  |
| `TRADE` | `TradeTrigger` |  |
| `ITEM_DURABILITY_CHANGED` | `ItemDurabilityTrigger` |  |
| `LEVITATION` | `LevitationTrigger` |  |
| `CHANGED_DIMENSION` | `ChangeDimensionTrigger` |  |
| `TICK` | `PlayerTrigger` |  |
| `TAME_ANIMAL` | `TameAnimalTrigger` |  |
| `PLACED_BLOCK` | `ItemUsedOnLocationTrigger` |  |
| `CONSUME_ITEM` | `ConsumeItemTrigger` |  |
| `EFFECTS_CHANGED` | `EffectsChangedTrigger` |  |
| `USED_TOTEM` | `UsedTotemTrigger` |  |
| `NETHER_TRAVEL` | `DistanceTrigger` |  |
| `FISHING_ROD_HOOKED` | `FishingRodHookedTrigger` |  |
| `CHANNELED_LIGHTNING` | `ChanneledLightningTrigger` |  |
| `SHOT_CROSSBOW` | `ShotCrossbowTrigger` |  |
| `KILLED_BY_CROSSBOW` | `KilledByCrossbowTrigger` |  |
| `RAID_WIN` | `PlayerTrigger` |  |
| `RAID_OMEN` | `PlayerTrigger` |  |
| `HONEY_BLOCK_SLIDE` | `SlideDownBlockTrigger` |  |
| `BEE_NEST_DESTROYED` | `BeeNestDestroyedTrigger` |  |
| `TARGET_BLOCK_HIT` | `TargetBlockTrigger` |  |
| `ITEM_USED_ON_BLOCK` | `ItemUsedOnLocationTrigger` |  |
| `DEFAULT_BLOCK_USE` | `DefaultBlockInteractionTrigger` |  |
| `ANY_BLOCK_USE` | `AnyBlockInteractionTrigger` |  |

## Methods

### register

```java
public static <T extends CriterionTrigger<?>> T register(String p_300853_, T p_10596_)
```

**Parameters:**

- `p_300853_` (`String`)
- `p_10596_` (`T`)

**Returns:** `public static <T extends CriterionTrigger<?>> T`

### bootstrap

```java
public static CriterionTrigger<?> bootstrap(Registry<CriterionTrigger<?>> p_312285_)
```

**Parameters:**

- `p_312285_` (`Registry<CriterionTrigger<?>>`)

**Returns:** `public static CriterionTrigger<?>`
