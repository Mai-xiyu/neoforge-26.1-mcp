# BehaviorBuilder

**Package:** `net.minecraft.world.entity.ai.behavior.declarative`
**Type:** class<E extends LivingEntity, M> implements App<BehaviorBuilder.Mu<E>, M>

## Methods

### unbox

```java
<E extends LivingEntity, M> public static <E extends LivingEntity, M> BehaviorBuilder<E, M> unbox(App<BehaviorBuilder.Mu<E>, M> p_259593_)
```

**Parameters:**

- `p_259593_` (`App<BehaviorBuilder.Mu<E>, M>`)

**Returns:** `public static <E extends LivingEntity, M> BehaviorBuilder<E, M>`

### instance

```java
<E extends LivingEntity> public static <E extends LivingEntity> BehaviorBuilder.Instance<E> instance()
```

**Returns:** `public static <E extends LivingEntity> BehaviorBuilder.Instance<E>`

### create

```java
<E extends LivingEntity> public static <E extends LivingEntity> OneShot<E> create(Function<BehaviorBuilder.Instance<E>, ? extends App<BehaviorBuilder.Mu<E>, Trigger<E>>> p_259386_)
```

**Parameters:**

- `p_259386_` (`Function<BehaviorBuilder.Instance<E>, ? extends App<BehaviorBuilder.Mu<E>, Trigger<E>>>`)

**Returns:** `public static <E extends LivingEntity> OneShot<E>`

### trigger

```java
public boolean trigger(ServerLevel p_259385_, E p_260003_, long p_259194_)
```

**Parameters:**

- `p_259385_` (`ServerLevel`)
- `p_260003_` (`E`)
- `p_259194_` (`long`)

**Returns:** `boolean`

### debugString

```java
public String debugString()
```

**Returns:** `String`

### toString

```java
public String toString()
```

**Returns:** `String`

### sequence

```java
<E extends LivingEntity> public static <E extends LivingEntity> OneShot<E> sequence(Trigger<? super E> p_260174_, Trigger<? super E> p_259134_)
```

**Parameters:**

- `p_260174_` (`Trigger<? super E>`)
- `p_259134_` (`Trigger<? super E>`)

**Returns:** `public static <E extends LivingEntity> OneShot<E>`

### triggerIf

```java
<E extends LivingEntity> public static <E extends LivingEntity> OneShot<E> triggerIf(Predicate<E> p_260059_, OneShot<? super E> p_259640_)
```

**Parameters:**

- `p_260059_` (`Predicate<E>`)
- `p_259640_` (`OneShot<? super E>`)

**Returns:** `public static <E extends LivingEntity> OneShot<E>`

### triggerIf

```java
<E extends LivingEntity> public static <E extends LivingEntity> OneShot<E> triggerIf(Predicate<E> p_260112_)
```

**Parameters:**

- `p_260112_` (`Predicate<E>`)

**Returns:** `public static <E extends LivingEntity> OneShot<E>`

### triggerIf

```java
<E extends LivingEntity> public static <E extends LivingEntity> OneShot<E> triggerIf(BiPredicate<ServerLevel, E> p_259227_)
```

**Parameters:**

- `p_259227_` (`BiPredicate<ServerLevel, E>`)

**Returns:** `public static <E extends LivingEntity> OneShot<E>`

### get

```java
<E extends LivingEntity, M> static <E extends LivingEntity, M> BehaviorBuilder.TriggerWithResult<E, M> get(App<BehaviorBuilder.Mu<E>, M> p_259615_)
```

**Parameters:**

- `p_259615_` (`App<BehaviorBuilder.Mu<E>, M>`)

**Returns:** `static <E extends LivingEntity, M> BehaviorBuilder.TriggerWithResult<E, M>`

### BehaviorBuilder

```java
 BehaviorBuilder(BehaviorBuilder.TriggerWithResult<E, M> p_260164_)
```

**Parameters:**

- `p_260164_` (`BehaviorBuilder.TriggerWithResult<E, M>`)

**Returns:** ``

### create

```java
<E extends LivingEntity, M> static <E extends LivingEntity, M> BehaviorBuilder<E, M> create(BehaviorBuilder.TriggerWithResult<E, M> p_259575_)
```

**Parameters:**

- `p_259575_` (`BehaviorBuilder.TriggerWithResult<E, M>`)

**Returns:** `static <E extends LivingEntity, M> BehaviorBuilder<E, M>`

### Constant

```java
 Constant(A p_259906_)
```

**Parameters:**

- `p_259906_` (`A`)

**Returns:** ``

### Constant

```java
 Constant(A p_259514_, Supplier<String> p_259950_)
```

**Parameters:**

- `p_259514_` (`A`)
- `p_259950_` (`Supplier<String>`)

**Returns:** ``

### super

```java
 super(new BehaviorBuilder.TriggerWithResult<E, A>()
```

**Parameters:**

- `A>(` (`new BehaviorBuilder.TriggerWithResult<E,`)

**Returns:** ``

### tryTrigger

```java
public A tryTrigger(ServerLevel p_259561_, E p_259467_, long p_259297_)
```

**Parameters:**

- `p_259561_` (`ServerLevel`)
- `p_259467_` (`E`)
- `p_259297_` (`long`)

**Returns:** `A`

### debugString

```java
public String debugString()
```

**Returns:** `String`

### toString

```java
public String toString()
```

**Returns:** `String`

### tryGet

```java
<Value> public <Value> Optional<Value> tryGet(MemoryAccessor<OptionalBox.Mu, Value> p_259352_)
```

**Parameters:**

- `p_259352_` (`MemoryAccessor<OptionalBox.Mu, Value>`)

**Returns:** `public <Value> Optional<Value>`

### get

```java
<Value> public <Value> Value get(MemoryAccessor<IdF.Mu, Value> p_259206_)
```

**Parameters:**

- `p_259206_` (`MemoryAccessor<IdF.Mu, Value>`)

**Returns:** `public <Value> Value`

### registered

```java
<Value> public <Value> BehaviorBuilder<E, MemoryAccessor<OptionalBox.Mu, Value>> registered(MemoryModuleType<Value> p_259477_)
```

**Parameters:**

- `p_259477_` (`MemoryModuleType<Value>`)

**Returns:** `public <Value> BehaviorBuilder<E, MemoryAccessor<OptionalBox.Mu, Value>>`

### present

```java
<Value> public <Value> BehaviorBuilder<E, MemoryAccessor<IdF.Mu, Value>> present(MemoryModuleType<Value> p_259673_)
```

**Parameters:**

- `p_259673_` (`MemoryModuleType<Value>`)

**Returns:** `public <Value> BehaviorBuilder<E, MemoryAccessor<IdF.Mu, Value>>`

### absent

```java
<Value> public <Value> BehaviorBuilder<E, MemoryAccessor<Const.Mu<Unit>, Value>> absent(MemoryModuleType<Value> p_260198_)
```

**Parameters:**

- `p_260198_` (`MemoryModuleType<Value>`)

**Returns:** `public <Value> BehaviorBuilder<E, MemoryAccessor<Const.Mu<Unit>, Value>>`

### ifTriggered

```java
public BehaviorBuilder<E, Unit> ifTriggered(Trigger<? super E> p_260247_)
```

**Parameters:**

- `p_260247_` (`Trigger<? super E>`)

**Returns:** `public BehaviorBuilder<E, Unit>`

### point

```java
<A> public <A> BehaviorBuilder<E, A> point(A p_259634_)
```

**Parameters:**

- `p_259634_` (`A`)

**Returns:** `public <A> BehaviorBuilder<E, A>`

### point

```java
<A> public <A> BehaviorBuilder<E, A> point(Supplier<String> p_260070_, A p_260295_)
```

**Parameters:**

- `p_260070_` (`Supplier<String>`)
- `p_260295_` (`A`)

**Returns:** `public <A> BehaviorBuilder<E, A>`

### lift1

```java
public <A, R> Function<App<BehaviorBuilder.Mu<E>, A>, App<BehaviorBuilder.Mu<E>, R>> lift1(App<BehaviorBuilder.Mu<E>, Function<A, R>> p_259294_)
```

**Parameters:**

- `p_259294_` (`App<BehaviorBuilder.Mu<E>, Function<A, R>>`)

**Returns:** `Function<App<BehaviorBuilder.Mu<E>, A>, App<BehaviorBuilder.Mu<E>, R>>`

### tryTrigger

```java
public R tryTrigger(ServerLevel p_259603_, E p_260233_, long p_259654_)
```

**Parameters:**

- `p_259603_` (`ServerLevel`)
- `p_260233_` (`E`)
- `p_259654_` (`long`)

**Returns:** `R`

### debugString

```java
public String debugString()
```

**Returns:** `String`

### toString

```java
public String toString()
```

**Returns:** `String`

### map

```java
<T, R> public <T, R> BehaviorBuilder<E, R> map(Function<? super T, ? extends R> p_259963_, App<BehaviorBuilder.Mu<E>, T> p_260355_)
```

**Parameters:**

- `p_259963_` (`Function<? super T, ? extends R>`)
- `p_260355_` (`App<BehaviorBuilder.Mu<E>, T>`)

**Returns:** `public <T, R> BehaviorBuilder<E, R>`

### tryTrigger

```java
public R tryTrigger(ServerLevel p_259755_, E p_259656_, long p_259300_)
```

**Parameters:**

- `p_259755_` (`ServerLevel`)
- `p_259656_` (`E`)
- `p_259300_` (`long`)

**Returns:** `R`

### debugString

```java
public String debugString()
```

**Returns:** `String`

### toString

```java
public String toString()
```

**Returns:** `String`

### ap2

```java
<A, B, R> public <A, B, R> BehaviorBuilder<E, R> ap2(App<BehaviorBuilder.Mu<E>, BiFunction<A, B, R>> p_259535_, App<BehaviorBuilder.Mu<E>, A> p_259162_, App<BehaviorBuilder.Mu<E>, B> p_259733_)
```

**Parameters:**

- `p_259535_` (`App<BehaviorBuilder.Mu<E>, BiFunction<A, B, R>>`)
- `p_259162_` (`App<BehaviorBuilder.Mu<E>, A>`)
- `p_259733_` (`App<BehaviorBuilder.Mu<E>, B>`)

**Returns:** `public <A, B, R> BehaviorBuilder<E, R>`

### tryTrigger

```java
public R tryTrigger(ServerLevel p_259274_, E p_259817_, long p_259820_)
```

**Parameters:**

- `p_259274_` (`ServerLevel`)
- `p_259817_` (`E`)
- `p_259820_` (`long`)

**Returns:** `R`

### debugString

```java
public String debugString()
```

**Returns:** `String`

### toString

```java
public String toString()
```

**Returns:** `String`

### ap3

```java
<T1, T2, T3, R> public <T1, T2, T3, R> BehaviorBuilder<E, R> ap3(App<BehaviorBuilder.Mu<E>, Function3<T1, T2, T3, R>> p_260239_, App<BehaviorBuilder.Mu<E>, T1> p_259239_, App<BehaviorBuilder.Mu<E>, T2> p_259638_, App<BehaviorBuilder.Mu<E>, T3> p_259969_)
```

**Parameters:**

- `p_260239_` (`App<BehaviorBuilder.Mu<E>, Function3<T1, T2, T3, R>>`)
- `p_259239_` (`App<BehaviorBuilder.Mu<E>, T1>`)
- `p_259638_` (`App<BehaviorBuilder.Mu<E>, T2>`)
- `p_259969_` (`App<BehaviorBuilder.Mu<E>, T3>`)

**Returns:** `public <T1, T2, T3, R> BehaviorBuilder<E, R>`

### tryTrigger

```java
public R tryTrigger(ServerLevel p_259096_, E p_260221_, long p_259035_)
```

**Parameters:**

- `p_259096_` (`ServerLevel`)
- `p_260221_` (`E`)
- `p_259035_` (`long`)

**Returns:** `R`

### debugString

```java
public String debugString()
```

**Returns:** `String`

### toString

```java
public String toString()
```

**Returns:** `String`

### ap4

```java
<T1, T2, T3, T4, R> public <T1, T2, T3, T4, R> BehaviorBuilder<E, R> ap4(App<BehaviorBuilder.Mu<E>, Function4<T1, T2, T3, T4, R>> p_259519_, App<BehaviorBuilder.Mu<E>, T1> p_259829_, App<BehaviorBuilder.Mu<E>, T2> p_259314_, App<BehaviorBuilder.Mu<E>, T3> p_260089_, App<BehaviorBuilder.Mu<E>, T4> p_259136_)
```

**Parameters:**

- `p_259519_` (`App<BehaviorBuilder.Mu<E>, Function4<T1, T2, T3, T4, R>>`)
- `p_259829_` (`App<BehaviorBuilder.Mu<E>, T1>`)
- `p_259314_` (`App<BehaviorBuilder.Mu<E>, T2>`)
- `p_260089_` (`App<BehaviorBuilder.Mu<E>, T3>`)
- `p_259136_` (`App<BehaviorBuilder.Mu<E>, T4>`)

**Returns:** `public <T1, T2, T3, T4, R> BehaviorBuilder<E, R>`

### tryTrigger

```java
public R tryTrigger(ServerLevel p_259537_, E p_259581_, long p_259423_)
```

**Parameters:**

- `p_259537_` (`ServerLevel`)
- `p_259581_` (`E`)
- `p_259423_` (`long`)

**Returns:** `R`

### debugString

```java
public String debugString()
```

**Returns:** `String`

### toString

```java
public String toString()
```

**Returns:** `String`

### Mu

```java
private Mu()
```

**Returns:** `private`

### PureMemory

```java
 PureMemory(MemoryCondition<F, Value> p_259776_)
```

**Parameters:**

- `p_259776_` (`MemoryCondition<F, Value>`)

**Returns:** ``

### super

```java
 super(new BehaviorBuilder.TriggerWithResult<E, MemoryAccessor<F, Value>>()
```

**Parameters:**

- `Value>>(` (`new BehaviorBuilder.TriggerWithResult<E, MemoryAccessor<F,`)

**Returns:** ``

### tryTrigger

```java
public MemoryAccessor<F, Value> tryTrigger(ServerLevel p_259899_, E p_259558_, long p_259793_)
```

**Parameters:**

- `p_259899_` (`ServerLevel`)
- `p_259558_` (`E`)
- `p_259793_` (`long`)

**Returns:** `public MemoryAccessor<F, Value>`

### debugString

```java
public String debugString()
```

**Returns:** `String`

### toString

```java
public String toString()
```

**Returns:** `String`

### tryTrigger

```java
R tryTrigger(ServerLevel p_259864_, E p_259042_, long p_260282_)
```

**Parameters:**

- `p_259864_` (`ServerLevel`)
- `p_259042_` (`E`)
- `p_260282_` (`long`)

**Returns:** `R`

### debugString

```java
String debugString()
```

**Returns:** `String`

### TriggerWrapper

```java
 TriggerWrapper(Trigger<? super E> p_259310_)
```

**Parameters:**

- `p_259310_` (`Trigger<? super E>`)

**Returns:** ``

### super

```java
 super(new BehaviorBuilder.TriggerWithResult<E, Unit>()
```

**Parameters:**

- `Unit>(` (`new BehaviorBuilder.TriggerWithResult<E,`)

**Returns:** ``

### tryTrigger

```java
public Unit tryTrigger(ServerLevel p_259397_, E p_260169_, long p_259155_)
```

**Parameters:**

- `p_259397_` (`ServerLevel`)
- `p_260169_` (`E`)
- `p_259155_` (`long`)

**Returns:** `Unit`

### debugString

```java
public String debugString()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Instance` | class |  |
| `Mu` | class |  |
