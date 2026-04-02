# FunctionTagCallback

**Package:** `net.minecraft.world.level.timers`
**Type:** class
**Implements:** `TimerCallback<MinecraftServer>`

## Methods

### FunctionTagCallback

```java
public FunctionTagCallback(ResourceLocation p_82191_)
```

**Parameters:**

- `p_82191_` (`ResourceLocation`)

**Returns:** `public`

### handle

```java
public void handle(MinecraftServer p_82199_, TimerQueue<MinecraftServer> p_82200_, long p_82201_)
```

**Parameters:**

- `p_82199_` (`MinecraftServer`)
- `p_82200_` (`TimerQueue<MinecraftServer>`)
- `p_82201_` (`long`)

**Returns:** `public void`

### Serializer

```java
public Serializer()
```

**Returns:** `public`

### serialize

```java
public void serialize(CompoundTag p_82206_, FunctionTagCallback p_82207_)
```

**Parameters:**

- `p_82206_` (`CompoundTag`)
- `p_82207_` (`FunctionTagCallback`)

**Returns:** `public void`

### deserialize

```java
public FunctionTagCallback deserialize(CompoundTag p_82204_)
```

**Parameters:**

- `p_82204_` (`CompoundTag`)

**Returns:** `public FunctionTagCallback`

### FunctionTagCallback

```java
return new FunctionTagCallback()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Serializer` | class |  |
