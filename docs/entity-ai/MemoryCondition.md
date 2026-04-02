# MemoryCondition

**Package:** `net.minecraft.world.entity.ai.behavior.declarative`
**Type:** interface<F extends K1, Value>

## Methods

### memory

```java
MemoryModuleType<Value> memory()
```

**Returns:** `MemoryModuleType<Value>`

### condition

```java
MemoryStatus condition()
```

**Returns:** `MemoryStatus`

### createAccessor

```java
MemoryAccessor<F, Value> createAccessor(Brain<?> p_259936_, Optional<Value> p_259724_)
```

**Parameters:**

- `p_259936_` (`Brain<?>`)
- `p_259724_` (`Optional<Value>`)

**Returns:** `MemoryAccessor<F, Value>`

### condition

```java
public MemoryStatus condition()
```

**Returns:** `MemoryStatus`

### createAccessor

```java
public MemoryAccessor<Mu<Unit>, Value> createAccessor(Brain<?> p_259727_, Optional<Value> p_260359_)
```

**Parameters:**

- `p_259727_` (`Brain<?>`)
- `p_260359_` (`Optional<Value>`)

**Returns:** `MemoryAccessor<Mu<Unit>, Value>`

### condition

```java
public MemoryStatus condition()
```

**Returns:** `MemoryStatus`

### createAccessor

```java
public MemoryAccessor<com.mojang.datafixers.kinds.IdF.Mu, Value> createAccessor(Brain<?> p_259253_, Optional<Value> p_260268_)
```

**Parameters:**

- `p_259253_` (`Brain<?>`)
- `p_260268_` (`Optional<Value>`)

**Returns:** `MemoryAccessor<com.mojang.datafixers.kinds.IdF.Mu, Value>`

### condition

```java
public MemoryStatus condition()
```

**Returns:** `MemoryStatus`

### createAccessor

```java
public MemoryAccessor<com.mojang.datafixers.kinds.OptionalBox.Mu, Value> createAccessor(Brain<?> p_260149_, Optional<Value> p_259303_)
```

**Parameters:**

- `p_260149_` (`Brain<?>`)
- `p_259303_` (`Optional<Value>`)

**Returns:** `MemoryAccessor<com.mojang.datafixers.kinds.OptionalBox.Mu, Value>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Absent` | record |  |
| `Present` | record |  |
| `Registered` | record |  |
