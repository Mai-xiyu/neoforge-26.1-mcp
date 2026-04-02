# LootItemFunctions

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `IDENTITY` | `BiFunction<ItemStack, LootContext, ItemStack>` |  |
| `TYPED_CODEC` | `Codec<LootItemFunction>` |  |
| `ROOT_CODEC` | `Codec<LootItemFunction>` |  |
| `CODEC` | `Codec<Holder<LootItemFunction>>` |  |
| `SET_COUNT` | `LootItemFunctionType<SetItemCountFunction>` |  |
| `SET_ITEM` | `LootItemFunctionType<SetItemFunction>` |  |
| `ENCHANT_WITH_LEVELS` | `LootItemFunctionType<EnchantWithLevelsFunction>` |  |
| `ENCHANT_RANDOMLY` | `LootItemFunctionType<EnchantRandomlyFunction>` |  |
| `SET_ENCHANTMENTS` | `LootItemFunctionType<SetEnchantmentsFunction>` |  |
| `SET_CUSTOM_DATA` | `LootItemFunctionType<SetCustomDataFunction>` |  |
| `SET_COMPONENTS` | `LootItemFunctionType<SetComponentsFunction>` |  |
| `FURNACE_SMELT` | `LootItemFunctionType<SmeltItemFunction>` |  |
| `ENCHANTED_COUNT_INCREASE` | `LootItemFunctionType<EnchantedCountIncreaseFunction>` |  |
| `SET_DAMAGE` | `LootItemFunctionType<SetItemDamageFunction>` |  |
| `SET_ATTRIBUTES` | `LootItemFunctionType<SetAttributesFunction>` |  |
| `SET_NAME` | `LootItemFunctionType<SetNameFunction>` |  |
| `EXPLORATION_MAP` | `LootItemFunctionType<ExplorationMapFunction>` |  |
| `SET_STEW_EFFECT` | `LootItemFunctionType<SetStewEffectFunction>` |  |
| `COPY_NAME` | `LootItemFunctionType<CopyNameFunction>` |  |
| `SET_CONTENTS` | `LootItemFunctionType<SetContainerContents>` |  |
| `MODIFY_CONTENTS` | `LootItemFunctionType<ModifyContainerContents>` |  |
| `FILTERED` | `LootItemFunctionType<FilteredFunction>` |  |
| `LIMIT_COUNT` | `LootItemFunctionType<LimitCount>` |  |
| `APPLY_BONUS` | `LootItemFunctionType<ApplyBonusCount>` |  |
| `SET_LOOT_TABLE` | `LootItemFunctionType<SetContainerLootTable>` |  |
| `EXPLOSION_DECAY` | `LootItemFunctionType<ApplyExplosionDecay>` |  |
| `SET_LORE` | `LootItemFunctionType<SetLoreFunction>` |  |
| `FILL_PLAYER_HEAD` | `LootItemFunctionType<FillPlayerHead>` |  |
| `COPY_CUSTOM_DATA` | `LootItemFunctionType<CopyCustomDataFunction>` |  |
| `COPY_STATE` | `LootItemFunctionType<CopyBlockState>` |  |
| `SET_BANNER_PATTERN` | `LootItemFunctionType<SetBannerPatternFunction>` |  |
| `SET_POTION` | `LootItemFunctionType<SetPotionFunction>` |  |
| `SET_INSTRUMENT` | `LootItemFunctionType<SetInstrumentFunction>` |  |
| `REFERENCE` | `LootItemFunctionType<FunctionReference>` |  |
| `SEQUENCE` | `LootItemFunctionType<SequenceFunction>` |  |
| `COPY_COMPONENTS` | `LootItemFunctionType<CopyComponentsFunction>` |  |

## Methods

### register

```java
<T extends LootItemFunction> private static <T extends LootItemFunction> LootItemFunctionType<T> register(String p_80763_, MapCodec<T> p_338516_)
```

**Parameters:**

- `p_80763_` (`String`)
- `p_338516_` (`MapCodec<T>`)

**Returns:** `private static <T extends LootItemFunction> LootItemFunctionType<T>`

### compose

```java
public static BiFunction<ItemStack, LootContext, ItemStack> compose(List<? extends BiFunction<ItemStack, LootContext, ItemStack>> p_298851_)
```

**Parameters:**

- `p_298851_` (`List<? extends BiFunction<ItemStack, LootContext, ItemStack>>`)

**Returns:** `public static BiFunction<ItemStack, LootContext, ItemStack>`
