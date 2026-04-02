# Brain

**Package:** `net.minecraft.world.entity.ai`
**Type:** class<E extends LivingEntity>

## Methods

### provider

```java
<E extends LivingEntity> public static <E extends LivingEntity> Brain.Provider<E> provider(Collection<? extends MemoryModuleType<?>> p_21924_, Collection<? extends SensorType<? extends Sensor<? super E>>> p_21925_)
```

**Parameters:**

- `p_21924_` (`Collection<? extends MemoryModuleType<?>>`)
- `p_21925_` (`Collection<? extends SensorType<? extends Sensor<? super E>>>`)

**Returns:** `public static <E extends LivingEntity> Brain.Provider<E>`

### codec

```java
<E extends LivingEntity> public static <E extends LivingEntity> Codec<Brain<E>> codec(Collection<? extends MemoryModuleType<?>> p_21947_, Collection<? extends SensorType<? extends Sensor<? super E>>> p_21948_)
```

**Parameters:**

- `p_21947_` (`Collection<? extends MemoryModuleType<?>>`)
- `p_21948_` (`Collection<? extends SensorType<? extends Sensor<? super E>>>`)

**Returns:** `public static <E extends LivingEntity> Codec<Brain<E>>`

### keys

```java
public <T> Stream<T> keys(DynamicOps<T> p_22029_)
```

**Parameters:**

- `p_22029_` (`DynamicOps<T>`)

**Returns:** `Stream<T>`

### decode

```java
public <T> DataResult<Brain<E>> decode(DynamicOps<T> p_22022_, MapLike<T> p_22023_)
```

**Parameters:**

- `p_22022_` (`DynamicOps<T>`)
- `p_22023_` (`MapLike<T>`)

**Returns:** `DataResult<Brain<E>>`

### captureRead

```java
<T, U> private <T, U> DataResult<Brain.MemoryValue<U>> captureRead(MemoryModuleType<U> p_21997_, DynamicOps<T> p_21998_, T p_21999_)
```

**Parameters:**

- `p_21997_` (`MemoryModuleType<U>`)
- `p_21998_` (`DynamicOps<T>`)
- `p_21999_` (`T`)

**Returns:** `private <T, U> DataResult<Brain.MemoryValue<U>>`

### encode

```java
<T> public <T> RecordBuilder<T> encode(Brain<E> p_21985_, DynamicOps<T> p_21986_, RecordBuilder<T> p_21987_)
```

**Parameters:**

- `p_21985_` (`Brain<E>`)
- `p_21986_` (`DynamicOps<T>`)
- `p_21987_` (`RecordBuilder<T>`)

**Returns:** `public <T> RecordBuilder<T>`

### Brain

```java
public Brain(Collection<? extends MemoryModuleType<?>> p_21855_, Collection<? extends SensorType<? extends Sensor<? super E>>> p_21856_, ImmutableList<Brain.MemoryValue<?>> p_21857_, Supplier<Codec<Brain<E>>> p_21858_)
```

**Parameters:**

- `p_21855_` (`Collection<? extends MemoryModuleType<?>>`)
- `p_21856_` (`Collection<? extends SensorType<? extends Sensor<? super E>>>`)
- `p_21857_` (`ImmutableList<Brain.MemoryValue<?>>`)
- `p_21858_` (`Supplier<Codec<Brain<E>>>`)

**Returns:** `public`

### serializeStart

```java
<T> public <T> DataResult<T> serializeStart(DynamicOps<T> p_21915_)
```

**Parameters:**

- `p_21915_` (`DynamicOps<T>`)

**Returns:** `public <T> DataResult<T>`

### memories

```java
Stream<Brain.MemoryValue<?>> memories()
```

**Returns:** `Stream<Brain.MemoryValue<?>>`

### hasMemoryValue

```java
public boolean hasMemoryValue(MemoryModuleType<?> p_21875_)
```

**Parameters:**

- `p_21875_` (`MemoryModuleType<?>`)

**Returns:** `public boolean`

### clearMemories

```java
public void clearMemories()
```

**Returns:** `public void`

### eraseMemory

```java
<U> public <U> void eraseMemory(MemoryModuleType<U> p_21937_)
```

**Parameters:**

- `p_21937_` (`MemoryModuleType<U>`)

**Returns:** `public <U> void`

### setMemory

```java
<U> public <U> void setMemory(MemoryModuleType<U> p_21880_, U p_21881_)
```

**Parameters:**

- `p_21880_` (`MemoryModuleType<U>`)
- `p_21881_` (`U`)

**Returns:** `public <U> void`

### setMemoryWithExpiry

```java
<U> public <U> void setMemoryWithExpiry(MemoryModuleType<U> p_21883_, U p_21884_, long p_21885_)
```

**Parameters:**

- `p_21883_` (`MemoryModuleType<U>`)
- `p_21884_` (`U`)
- `p_21885_` (`long`)

**Returns:** `public <U> void`

### setMemory

```java
<U> public <U> void setMemory(MemoryModuleType<U> p_21887_, Optional<? extends U> p_21888_)
```

**Parameters:**

- `p_21887_` (`MemoryModuleType<U>`)
- `p_21888_` (`Optional<? extends U>`)

**Returns:** `public <U> void`

### setMemoryInternal

```java
<U> <U> void setMemoryInternal(MemoryModuleType<U> p_21942_, Optional<? extends ExpirableValue<?>> p_21943_)
```

**Parameters:**

- `p_21942_` (`MemoryModuleType<U>`)
- `p_21943_` (`Optional<? extends ExpirableValue<?>>`)

**Returns:** `<U> void`

### getMemory

```java
<U> public <U> Optional<U> getMemory(MemoryModuleType<U> p_21953_)
```

**Parameters:**

- `p_21953_` (`MemoryModuleType<U>`)

**Returns:** `public <U> Optional<U>`

### IllegalStateException

```java
throw new IllegalStateException("Unregistered memory fetched: " + p_21953_)
```

**Parameters:**

- `p_21953_` (`"Unregistered memory fetched: " +`)

**Returns:** `throw new`

### getMemoryInternal

```java
public <U> Optional<U> getMemoryInternal(MemoryModuleType<U> p_259344_)
```

**Parameters:**

- `p_259344_` (`MemoryModuleType<U>`)

**Returns:** `Optional<U>`

### getTimeUntilExpiry

```java
<U> public <U> long getTimeUntilExpiry(MemoryModuleType<U> p_147342_)
```

**Parameters:**

- `p_147342_` (`MemoryModuleType<U>`)

**Returns:** `public <U> long`

### getMemories

```java
public Map<MemoryModuleType<?>, Optional<? extends ExpirableValue<?>>> getMemories()
```

**Returns:** `Map<MemoryModuleType<?>, Optional<? extends ExpirableValue<?>>>`

### isMemoryValue

```java
<U> public <U> boolean isMemoryValue(MemoryModuleType<U> p_21939_, U p_21940_)
```

**Parameters:**

- `p_21939_` (`MemoryModuleType<U>`)
- `p_21940_` (`U`)

**Returns:** `public <U> boolean`

### checkMemory

```java
public boolean checkMemory(MemoryModuleType<?> p_21877_, MemoryStatus p_21878_)
```

**Parameters:**

- `p_21877_` (`MemoryModuleType<?>`)
- `p_21878_` (`MemoryStatus`)

**Returns:** `public boolean`

### getSchedule

```java
public Schedule getSchedule()
```

**Returns:** `public Schedule`

### setSchedule

```java
public void setSchedule(Schedule p_21913_)
```

**Parameters:**

- `p_21913_` (`Schedule`)

**Returns:** `public void`

### setCoreActivities

```java
public void setCoreActivities(Set<Activity> p_21931_)
```

**Parameters:**

- `p_21931_` (`Set<Activity>`)

**Returns:** `public void`

### getActiveActivities

```java
public Set<Activity> getActiveActivities()
```

**Returns:** `Set<Activity>`

### getRunningBehaviors

```java
public List<BehaviorControl<? super E>> getRunningBehaviors()
```

**Returns:** `List<BehaviorControl<? super E>>`

### useDefaultActivity

```java
public void useDefaultActivity()
```

**Returns:** `public void`

### getActiveNonCoreActivity

```java
public Optional<Activity> getActiveNonCoreActivity()
```

**Returns:** `public Optional<Activity>`

### setActiveActivityIfPossible

```java
public void setActiveActivityIfPossible(Activity p_21890_)
```

**Parameters:**

- `p_21890_` (`Activity`)

**Returns:** `public void`

### setActiveActivity

```java
private void setActiveActivity(Activity p_21961_)
```

**Parameters:**

- `p_21961_` (`Activity`)

**Returns:** `private void`

### eraseMemoriesForOtherActivitesThan

```java
private void eraseMemoriesForOtherActivitesThan(Activity p_21967_)
```

**Parameters:**

- `p_21967_` (`Activity`)

**Returns:** `private void`

### updateActivityFromSchedule

```java
public void updateActivityFromSchedule(long p_21863_, long p_21864_)
```

**Parameters:**

- `p_21863_` (`long`)
- `p_21864_` (`long`)

**Returns:** `public void`

### setActiveActivityToFirstValid

```java
public void setActiveActivityToFirstValid(List<Activity> p_21927_)
```

**Parameters:**

- `p_21927_` (`List<Activity>`)

**Returns:** `public void`

### setDefaultActivity

```java
public void setDefaultActivity(Activity p_21945_)
```

**Parameters:**

- `p_21945_` (`Activity`)

**Returns:** `public void`

### addActivity

```java
public void addActivity(Activity p_21892_, int p_21893_, ImmutableList<? extends BehaviorControl<? super E>> p_21894_)
```

**Parameters:**

- `p_21892_` (`Activity`)
- `p_21893_` (`int`)
- `p_21894_` (`ImmutableList<? extends BehaviorControl<? super E>>`)

**Returns:** `public void`

### addActivityAndRemoveMemoryWhenStopped

```java
public void addActivityAndRemoveMemoryWhenStopped(Activity p_21896_, int p_21897_, ImmutableList<? extends BehaviorControl<? super E>> p_21898_, MemoryModuleType<?> p_21899_)
```

**Parameters:**

- `p_21896_` (`Activity`)
- `p_21897_` (`int`)
- `p_21898_` (`ImmutableList<? extends BehaviorControl<? super E>>`)
- `p_21899_` (`MemoryModuleType<?>`)

**Returns:** `public void`

### addActivity

```java
public void addActivity(Activity p_21901_, ImmutableList<? extends Pair<Integer, ? extends BehaviorControl<? super E>>> p_21902_)
```

**Parameters:**

- `p_21901_` (`Activity`)
- `p_21902_` (`ImmutableList<? extends Pair<Integer, ? extends BehaviorControl<? super E>>>`)

**Returns:** `public void`

### addActivityWithConditions

```java
public void addActivityWithConditions(Activity p_21904_, ImmutableList<? extends Pair<Integer, ? extends BehaviorControl<? super E>>> p_21905_, Set<Pair<MemoryModuleType<?>, MemoryStatus>> p_21906_)
```

**Parameters:**

- `p_21904_` (`Activity`)
- `p_21905_` (`ImmutableList<? extends Pair<Integer, ? extends BehaviorControl<? super E>>>`)
- `p_21906_` (`Set<Pair<MemoryModuleType<?>, MemoryStatus>>`)

**Returns:** `public void`

### addActivityAndRemoveMemoriesWhenStopped

```java
public void addActivityAndRemoveMemoriesWhenStopped(Activity p_21908_, ImmutableList<? extends Pair<Integer, ? extends BehaviorControl<? super E>>> p_21909_, Set<Pair<MemoryModuleType<?>, MemoryStatus>> p_21910_, Set<MemoryModuleType<?>> p_21911_)
```

**Parameters:**

- `p_21908_` (`Activity`)
- `p_21909_` (`ImmutableList<? extends Pair<Integer, ? extends BehaviorControl<? super E>>>`)
- `p_21910_` (`Set<Pair<MemoryModuleType<?>, MemoryStatus>>`)
- `p_21911_` (`Set<MemoryModuleType<?>>`)

**Returns:** `public void`

### removeAllBehaviors

```java
public void removeAllBehaviors()
```

### isActive

```java
public boolean isActive(Activity p_21955_)
```

**Parameters:**

- `p_21955_` (`Activity`)

**Returns:** `public boolean`

### copyWithoutBehaviors

```java
public Brain<E> copyWithoutBehaviors()
```

**Returns:** `public Brain<E>`

### tick

```java
public void tick(ServerLevel p_21866_, E p_21867_)
```

**Parameters:**

- `p_21866_` (`ServerLevel`)
- `p_21867_` (`E`)

**Returns:** `public void`

### tickSensors

```java
private void tickSensors(ServerLevel p_21950_, E p_21951_)
```

**Parameters:**

- `p_21950_` (`ServerLevel`)
- `p_21951_` (`E`)

**Returns:** `private void`

### forgetOutdatedMemories

```java
private void forgetOutdatedMemories()
```

**Returns:** `private void`

### stopAll

```java
public void stopAll(ServerLevel p_21934_, E p_21935_)
```

**Parameters:**

- `p_21934_` (`ServerLevel`)
- `p_21935_` (`E`)

**Returns:** `public void`

### startEachNonRunningBehavior

```java
private void startEachNonRunningBehavior(ServerLevel p_21958_, E p_21959_)
```

**Parameters:**

- `p_21958_` (`ServerLevel`)
- `p_21959_` (`E`)

**Returns:** `private void`

### tickEachRunningBehavior

```java
private void tickEachRunningBehavior(ServerLevel p_21964_, E p_21965_)
```

**Parameters:**

- `p_21964_` (`ServerLevel`)
- `p_21965_` (`E`)

**Returns:** `private void`

### activityRequirementsAreMet

```java
private boolean activityRequirementsAreMet(Activity p_21970_)
```

**Parameters:**

- `p_21970_` (`Activity`)

**Returns:** `private boolean`

### isEmptyCollection

```java
private boolean isEmptyCollection(Object p_21919_)
```

**Parameters:**

- `p_21919_` (`Object`)

**Returns:** `private boolean`

### createPriorityPairs

```java
ImmutableList<? extends Pair<Integer, ? extends BehaviorControl<? super E>>> createPriorityPairs(int p_21860_, ImmutableList<? extends BehaviorControl<? super E>> p_21861_)
```

**Parameters:**

- `p_21860_` (`int`)
- `p_21861_` (`ImmutableList<? extends BehaviorControl<? super E>>`)

**Returns:** `ImmutableList<? extends Pair<Integer, ? extends BehaviorControl<? super E>>>`

### createUnchecked

```java
<U> static <U> Brain.MemoryValue<U> createUnchecked(MemoryModuleType<U> p_22060_, Optional<? extends ExpirableValue<?>> p_22061_)
```

**Parameters:**

- `p_22060_` (`MemoryModuleType<U>`)
- `p_22061_` (`Optional<? extends ExpirableValue<?>>`)

**Returns:** `static <U> Brain.MemoryValue<U>`

### MemoryValue

```java
 MemoryValue(MemoryModuleType<U> p_22033_, Optional<? extends ExpirableValue<U>> p_22034_)
```

**Parameters:**

- `p_22033_` (`MemoryModuleType<U>`)
- `p_22034_` (`Optional<? extends ExpirableValue<U>>`)

**Returns:** ``

### setMemoryInternal

```java
void setMemoryInternal(Brain<?> p_22043_)
```

**Parameters:**

- `p_22043_` (`Brain<?>`)

### serialize

```java
<T> public <T> void serialize(DynamicOps<T> p_22048_, RecordBuilder<T> p_22049_)
```

**Parameters:**

- `p_22048_` (`DynamicOps<T>`)
- `p_22049_` (`RecordBuilder<T>`)

**Returns:** `public <T> void`

### Provider

```java
 Provider(Collection<? extends MemoryModuleType<?>> p_22066_, Collection<? extends SensorType<? extends Sensor<? super E>>> p_22067_)
```

**Parameters:**

- `p_22066_` (`Collection<? extends MemoryModuleType<?>>`)
- `p_22067_` (`Collection<? extends SensorType<? extends Sensor<? super E>>>`)

**Returns:** ``

### makeBrain

```java
public Brain<E> makeBrain(Dynamic<?> p_22074_)
```

**Parameters:**

- `p_22074_` (`Dynamic<?>`)

**Returns:** `public Brain<E>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Provider` | class |  |
