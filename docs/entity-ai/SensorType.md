# SensorType

**Package:** `net.minecraft.world.entity.ai.sensing`
**Type:** class<U extends Sensor<?>>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DUMMY` | `SensorType<DummySensor>` |  |
| `NEAREST_ITEMS` | `SensorType<NearestItemSensor>` |  |
| `NEAREST_LIVING_ENTITIES` | `SensorType<NearestLivingEntitySensor<LivingEntity>>` |  |
| `NEAREST_PLAYERS` | `SensorType<PlayerSensor>` |  |
| `NEAREST_BED` | `SensorType<NearestBedSensor>` |  |
| `HURT_BY` | `SensorType<HurtBySensor>` |  |
| `VILLAGER_HOSTILES` | `SensorType<VillagerHostilesSensor>` |  |
| `VILLAGER_BABIES` | `SensorType<VillagerBabiesSensor>` |  |
| `SECONDARY_POIS` | `SensorType<SecondaryPoiSensor>` |  |
| `GOLEM_DETECTED` | `SensorType<GolemSensor>` |  |
| `ARMADILLO_SCARE_DETECTED` | `SensorType<MobSensor<Armadillo>>` |  |
| `PIGLIN_SPECIFIC_SENSOR` | `SensorType<PiglinSpecificSensor>` |  |
| `PIGLIN_BRUTE_SPECIFIC_SENSOR` | `SensorType<PiglinBruteSpecificSensor>` |  |
| `HOGLIN_SPECIFIC_SENSOR` | `SensorType<HoglinSpecificSensor>` |  |
| `NEAREST_ADULT` | `SensorType<AdultSensor>` |  |
| `AXOLOTL_ATTACKABLES` | `SensorType<AxolotlAttackablesSensor>` |  |
| `AXOLOTL_TEMPTATIONS` | `SensorType<TemptingSensor>` |  |
| `GOAT_TEMPTATIONS` | `SensorType<TemptingSensor>` |  |
| `FROG_TEMPTATIONS` | `SensorType<TemptingSensor>` |  |
| `CAMEL_TEMPTATIONS` | `SensorType<TemptingSensor>` |  |
| `ARMADILLO_TEMPTATIONS` | `SensorType<TemptingSensor>` |  |
| `FROG_ATTACKABLES` | `SensorType<FrogAttackablesSensor>` |  |
| `IS_IN_WATER` | `SensorType<IsInWaterSensor>` |  |
| `WARDEN_ENTITY_SENSOR` | `SensorType<WardenEntitySensor>` |  |
| `SNIFFER_TEMPTATIONS` | `SensorType<TemptingSensor>` |  |
| `BREEZE_ATTACK_ENTITY_SENSOR` | `SensorType<BreezeAttackEntitySensor>` |  |

## Methods

### SensorType

```java
public SensorType(Supplier<U> p_26826_)
```

**Parameters:**

- `p_26826_` (`Supplier<U>`)

**Returns:** `public`

### create

```java
public U create()
```

**Returns:** `public U`

### register

```java
private static <U extends Sensor<?>> SensorType<U> register(String p_26829_, Supplier<U> p_26830_)
```

**Parameters:**

- `p_26829_` (`String`)
- `p_26830_` (`Supplier<U>`)

**Returns:** `private static <U extends Sensor<?>> SensorType<U>`
