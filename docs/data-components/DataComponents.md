# DataComponents

**Package:** `net.minecraft.core.component`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CUSTOM_DATA` | `DataComponentType<CustomData>` |  |
| `MAX_STACK_SIZE` | `DataComponentType<Integer>` |  |
| `MAX_DAMAGE` | `DataComponentType<Integer>` |  |
| `DAMAGE` | `DataComponentType<Integer>` |  |
| `UNBREAKABLE` | `DataComponentType<Unbreakable>` |  |
| `CUSTOM_NAME` | `DataComponentType<Component>` |  |
| `ITEM_NAME` | `DataComponentType<Component>` |  |
| `LORE` | `DataComponentType<ItemLore>` |  |
| `RARITY` | `DataComponentType<Rarity>` |  |
| `ENCHANTMENTS` | `DataComponentType<ItemEnchantments>` |  |
| `CAN_PLACE_ON` | `DataComponentType<AdventureModePredicate>` |  |
| `CAN_BREAK` | `DataComponentType<AdventureModePredicate>` |  |
| `ATTRIBUTE_MODIFIERS` | `DataComponentType<ItemAttributeModifiers>` |  |
| `CUSTOM_MODEL_DATA` | `DataComponentType<CustomModelData>` |  |
| `HIDE_ADDITIONAL_TOOLTIP` | `DataComponentType<Unit>` |  |
| `HIDE_TOOLTIP` | `DataComponentType<Unit>` |  |
| `REPAIR_COST` | `DataComponentType<Integer>` |  |
| `CREATIVE_SLOT_LOCK` | `DataComponentType<Unit>` |  |
| `ENCHANTMENT_GLINT_OVERRIDE` | `DataComponentType<Boolean>` |  |
| `INTANGIBLE_PROJECTILE` | `DataComponentType<Unit>` |  |
| `FOOD` | `DataComponentType<FoodProperties>` |  |
| `FIRE_RESISTANT` | `DataComponentType<Unit>` |  |

## Methods

### bootstrap

```java
public static DataComponentType<?> bootstrap(Registry<DataComponentType<?>> p_330821_)
```

**Parameters:**

- `p_330821_` (`Registry<DataComponentType<?>>`)

**Returns:** `public static DataComponentType<?>`

### register

```java
<T> private static <T> DataComponentType<T> register(String p_332092_, UnaryOperator<DataComponentType.Builder<T>> p_331261_)
```

**Parameters:**

- `p_332092_` (`String`)
- `p_331261_` (`UnaryOperator<DataComponentType.Builder<T>>`)

**Returns:** `private static <T> DataComponentType<T>`
