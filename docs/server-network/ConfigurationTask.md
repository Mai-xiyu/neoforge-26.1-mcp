# ConfigurationTask

**Package:** `net.minecraft.server.network`
**Type:** interface
**Side:** 🖧 Server

## Methods

### start

```java
void start(Consumer<Packet<?>> p_294184_)
```

**Parameters:**

- `p_294184_` (`Consumer<Packet<?>>`)

### type

```java
ConfigurationTask.Type type()
```

**Returns:** `ConfigurationTask.Type`

### Type

```java
public static record Type(String id)
```

**Parameters:**

- `id` (`String`)

**Returns:** `public static record`

### Type

```java
public Type(net.minecraft.resources.ResourceLocation location)
```

**Parameters:**

- `location` (`net.minecraft.resources.ResourceLocation`)

**Returns:** `public`

### toString

```java
public String toString()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | record |  |
