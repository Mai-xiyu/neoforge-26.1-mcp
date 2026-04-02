# Stats

**Package:** `net.minecraft.stats`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BLOCK_MINED` | `StatType<Block>` |  |
| `ITEM_CRAFTED` | `StatType<Item>` |  |
| `ITEM_USED` | `StatType<Item>` |  |
| `ITEM_BROKEN` | `StatType<Item>` |  |
| `ITEM_PICKED_UP` | `StatType<Item>` |  |
| `ITEM_DROPPED` | `StatType<Item>` |  |
| `ENTITY_KILLED` | `StatType<EntityType<?>>` |  |
| `ENTITY_KILLED_BY` | `StatType<EntityType<?>>` |  |
| `CUSTOM` | `StatType<ResourceLocation>` |  |
| `LEAVE_GAME` | `ResourceLocation` |  |
| `PLAY_TIME` | `ResourceLocation` |  |
| `TOTAL_WORLD_TIME` | `ResourceLocation` |  |
| `TIME_SINCE_DEATH` | `ResourceLocation` |  |
| `TIME_SINCE_REST` | `ResourceLocation` |  |
| `CROUCH_TIME` | `ResourceLocation` |  |
| `WALK_ONE_CM` | `ResourceLocation` |  |
| `CROUCH_ONE_CM` | `ResourceLocation` |  |
| `SPRINT_ONE_CM` | `ResourceLocation` |  |
| `WALK_ON_WATER_ONE_CM` | `ResourceLocation` |  |
| `FALL_ONE_CM` | `ResourceLocation` |  |
| `CLIMB_ONE_CM` | `ResourceLocation` |  |
| `FLY_ONE_CM` | `ResourceLocation` |  |
| `WALK_UNDER_WATER_ONE_CM` | `ResourceLocation` |  |
| `MINECART_ONE_CM` | `ResourceLocation` |  |
| `BOAT_ONE_CM` | `ResourceLocation` |  |
| `PIG_ONE_CM` | `ResourceLocation` |  |
| `HORSE_ONE_CM` | `ResourceLocation` |  |
| `AVIATE_ONE_CM` | `ResourceLocation` |  |
| `SWIM_ONE_CM` | `ResourceLocation` |  |
| `STRIDER_ONE_CM` | `ResourceLocation` |  |
| `JUMP` | `ResourceLocation` |  |
| `DROP` | `ResourceLocation` |  |
| `DAMAGE_DEALT` | `ResourceLocation` |  |
| `DAMAGE_DEALT_ABSORBED` | `ResourceLocation` |  |
| `DAMAGE_DEALT_RESISTED` | `ResourceLocation` |  |
| `DAMAGE_TAKEN` | `ResourceLocation` |  |
| `DAMAGE_BLOCKED_BY_SHIELD` | `ResourceLocation` |  |
| `DAMAGE_ABSORBED` | `ResourceLocation` |  |
| `DAMAGE_RESISTED` | `ResourceLocation` |  |
| `DEATHS` | `ResourceLocation` |  |
| `MOB_KILLS` | `ResourceLocation` |  |
| `ANIMALS_BRED` | `ResourceLocation` |  |
| `PLAYER_KILLS` | `ResourceLocation` |  |

## Methods

### makeCustomStat

```java
private static ResourceLocation makeCustomStat(String p_13008_, StatFormatter p_13009_)
```

**Parameters:**

- `p_13008_` (`String`)
- `p_13009_` (`StatFormatter`)

**Returns:** `private static ResourceLocation`

### makeRegistryStatType

```java
<T> private static <T> StatType<T> makeRegistryStatType(String p_13011_, Registry<T> p_13012_)
```

**Parameters:**

- `p_13011_` (`String`)
- `p_13012_` (`Registry<T>`)

**Returns:** `private static <T> StatType<T>`
