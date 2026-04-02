# DeferredSpawnEggItem

**Package:** `net.neoforged.neoforge.common`
**Type:** class
**Extends:** `SpawnEggItem`

## Methods

### DeferredSpawnEggItem

```java
public DeferredSpawnEggItem(Supplier<? extends EntityType<? extends Mob>> type, int backgroundColor, int highlightColor, Properties props)
```

**Parameters:**

- `type` (`Supplier<? extends EntityType<? extends Mob>>`)
- `backgroundColor` (`int`)
- `highlightColor` (`int`)
- `props` (`Properties`)

**Returns:** `public`

### createDispenseBehavior

```java
protected DispenseItemBehavior createDispenseBehavior()
```

**Returns:** `DispenseItemBehavior`

### deferredOnlyById

```java
public static SpawnEggItem deferredOnlyById(EntityType<?> type)
```

**Parameters:**

- `type` (`EntityType<?>`)

**Returns:** `SpawnEggItem`

### getDefaultType

```java
protected EntityType<?> getDefaultType()
```

**Returns:** `EntityType<?>`

### onCommonSetup

```java
public static void onCommonSetup(FMLCommonSetupEvent event)
```

**Parameters:**

- `event` (`FMLCommonSetupEvent`)

### registerSpawnEggColors

```java
public static void registerSpawnEggColors(RegisterColorHandlersEvent.Item event)
```

**Parameters:**

- `event` (`RegisterColorHandlersEvent.Item`)
