# TimerCallback

**Package:** `net.minecraft.world.level.timers`
**Type:** interface<T>
**Annotations:** `@FunctionalInterface`

## Methods

### handle

```java
void handle(T p_82213_, TimerQueue<T> p_82214_, long p_82215_)
```

**Parameters:**

- `p_82213_` (`T`)
- `p_82214_` (`TimerQueue<T>`)
- `p_82215_` (`long`)

### Serializer

```java
public Serializer(ResourceLocation p_82219_, Class<?> p_82220_)
```

**Parameters:**

- `p_82219_` (`ResourceLocation`)
- `p_82220_` (`Class<?>`)

**Returns:** `public`

### getId

```java
public ResourceLocation getId()
```

**Returns:** `public ResourceLocation`

### getCls

```java
public Class<?> getCls()
```

**Returns:** `public Class<?>`

### serialize

```java
public abstract void serialize(CompoundTag p_82222_, C p_82223_)
```

**Parameters:**

- `p_82222_` (`CompoundTag`)
- `p_82223_` (`C`)

**Returns:** `public abstract void`

### deserialize

```java
public abstract C deserialize(CompoundTag p_82225_)
```

**Parameters:**

- `p_82225_` (`CompoundTag`)

**Returns:** `public abstract C`
