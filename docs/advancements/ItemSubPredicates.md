# ItemSubPredicates

**Package:** `net.minecraft.advancements.critereon`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DAMAGE` | `ItemSubPredicate.Type<ItemDamagePredicate>` |  |
| `ENCHANTMENTS` | `ItemSubPredicate.Type<ItemEnchantmentsPredicate.Enchantments>` |  |
| `STORED_ENCHANTMENTS` | `ItemSubPredicate.Type<ItemEnchantmentsPredicate.StoredEnchantments>` |  |
| `POTIONS` | `ItemSubPredicate.Type<ItemPotionsPredicate>` |  |
| `CUSTOM_DATA` | `ItemSubPredicate.Type<ItemCustomDataPredicate>` |  |
| `CONTAINER` | `ItemSubPredicate.Type<ItemContainerPredicate>` |  |
| `BUNDLE_CONTENTS` | `ItemSubPredicate.Type<ItemBundlePredicate>` |  |
| `FIREWORK_EXPLOSION` | `ItemSubPredicate.Type<ItemFireworkExplosionPredicate>` |  |
| `FIREWORKS` | `ItemSubPredicate.Type<ItemFireworksPredicate>` |  |
| `WRITABLE_BOOK` | `ItemSubPredicate.Type<ItemWritableBookPredicate>` |  |
| `WRITTEN_BOOK` | `ItemSubPredicate.Type<ItemWrittenBookPredicate>` |  |
| `ATTRIBUTE_MODIFIERS` | `ItemSubPredicate.Type<ItemAttributeModifiersPredicate>` |  |
| `ARMOR_TRIM` | `ItemSubPredicate.Type<ItemTrimPredicate>` |  |
| `JUKEBOX_PLAYABLE` | `ItemSubPredicate.Type<ItemJukeboxPlayablePredicate>` |  |

## Methods

### register

```java
<T extends ItemSubPredicate> private static <T extends ItemSubPredicate> ItemSubPredicate.Type<T> register(String p_333883_, Codec<T> p_333785_)
```

**Parameters:**

- `p_333883_` (`String`)
- `p_333785_` (`Codec<T>`)

**Returns:** `private static <T extends ItemSubPredicate> ItemSubPredicate.Type<T>`

### bootstrap

```java
public static ItemSubPredicate.Type<?> bootstrap(Registry<ItemSubPredicate.Type<?>> p_333896_)
```

**Parameters:**

- `p_333896_` (`Registry<ItemSubPredicate.Type<?>>`)

**Returns:** `public static ItemSubPredicate.Type<?>`
