# InteractWith

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class

## Methods

### of

```java
<T extends LivingEntity> public static <T extends LivingEntity> BehaviorControl<LivingEntity> of(EntityType<? extends T> p_259703_, int p_260224_, MemoryModuleType<T> p_259995_, float p_259991_, int p_259933_)
```

**Parameters:**

- `p_259703_` (`EntityType<? extends T>`)
- `p_260224_` (`int`)
- `p_259995_` (`MemoryModuleType<T>`)
- `p_259991_` (`float`)
- `p_259933_` (`int`)

**Returns:** `public static <T extends LivingEntity> BehaviorControl<LivingEntity>`

### of

```java
return of(p_23287_ -> true, p_23285_ -> true, p_259995_, p_259991_, p_259933_)
```

**Parameters:**

- `p_259933_` (`p_23287_ -> true, p_23285_ -> true, p_259995_, p_259991_,`)

**Returns:** `return`

### of

```java
<E extends LivingEntity, T extends LivingEntity> public static <E extends LivingEntity, T extends LivingEntity> BehaviorControl<E> of(EntityType<? extends T> p_259366_, int p_259564_, Predicate<E> p_259570_, Predicate<T> p_260254_, MemoryModuleType<T> p_260229_, float p_259369_, int p_259065_)
```

**Parameters:**

- `p_259366_` (`EntityType<? extends T>`)
- `p_259564_` (`int`)
- `p_259570_` (`Predicate<E>`)
- `p_260254_` (`Predicate<T>`)
- `p_260229_` (`MemoryModuleType<T>`)
- `p_259369_` (`float`)
- `p_259065_` (`int`)

**Returns:** `public static <E extends LivingEntity, T extends LivingEntity> BehaviorControl<E>`
