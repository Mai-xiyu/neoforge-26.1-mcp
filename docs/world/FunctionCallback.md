# FunctionCallback

**Package:** `net.minecraft.world.level.timers`
**Type:** class
**Implements:** `TimerCallback<MinecraftServer>`

## Methods

### FunctionCallback

```java
public FunctionCallback(ResourceLocation p_82164_)
```

**Parameters:**

- `p_82164_` (`ResourceLocation`)

**Returns:** `public`

### handle

```java
public void handle(MinecraftServer p_82172_, TimerQueue<MinecraftServer> p_82173_, long p_82174_)
```

**Parameters:**

- `p_82172_` (`MinecraftServer`)
- `p_82173_` (`TimerQueue<MinecraftServer>`)
- `p_82174_` (`long`)

**Returns:** `public void`

### Serializer

```java
public Serializer()
```

**Returns:** `public`

### serialize

```java
public void serialize(CompoundTag p_82182_, FunctionCallback p_82183_)
```

**Parameters:**

- `p_82182_` (`CompoundTag`)
- `p_82183_` (`FunctionCallback`)

**Returns:** `public void`

### deserialize

```java
public FunctionCallback deserialize(CompoundTag p_82180_)
```

**Parameters:**

- `p_82180_` (`CompoundTag`)

**Returns:** `public FunctionCallback`

### FunctionCallback

```java
return new FunctionCallback()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Serializer` | class |  |
