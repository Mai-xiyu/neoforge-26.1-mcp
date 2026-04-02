# MonsterRoomHooks

**Package:** `net.neoforged.neoforge.common`
**Type:** class
**Annotations:** `@EventBusSubscriber(bus = EventBusSubscriber.Bus.GAME, modid = NeoForgeVersion.MOD_ID)`

## Methods

### onDataMapsUpdated

```java
public static void onDataMapsUpdated(DataMapsUpdatedEvent event)
```

**Parameters:**

- `event` (`DataMapsUpdatedEvent`)

### getRandomMonsterRoomMob

```java
public static EntityType<?> getRandomMonsterRoomMob(RandomSource rand)
```

**Parameters:**

- `rand` (`RandomSource`)

**Returns:** `EntityType<?>`

### getWeight

```java
public Weight getWeight()
```

**Returns:** `Weight`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `MobEntry` | record |  |
