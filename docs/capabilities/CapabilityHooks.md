# CapabilityHooks

**Package:** `net.neoforged.neoforge.capabilities`
**Type:** class
**Annotations:** `@ApiStatus`

## Methods

### init

```java
public static void init()
```

**Returns:** `public static void`

### registerVanillaProviders

```java
public static void registerVanillaProviders(RegisterCapabilitiesEvent event)
```

**Parameters:**

- `event` (`RegisterCapabilitiesEvent`)

**Returns:** `public static void`

### VanillaHopperItemHandler

```java
Use custom hopper wrapper that respects cooldown
            return new VanillaHopperItemHandler()
```

**Returns:** `Use custom hopper wrapper that respects cooldown
            return new`

### SidedInvWrapper

```java
override.
            return new SidedInvWrapper()
```

**Returns:** `override.
            return new`

### registerFallbackVanillaProviders

```java
public static void registerFallbackVanillaProviders(RegisterCapabilitiesEvent event)
```

**Parameters:**

- `event` (`RegisterCapabilitiesEvent`)

**Returns:** `public static void`

### invalidateCapsOnChunkLoad

```java
public static void invalidateCapsOnChunkLoad(ChunkEvent.Load event)
```

**Parameters:**

- `event` (`ChunkEvent.Load`)

**Returns:** `public static void`

### invalidateCapsOnChunkUnload

```java
public static void invalidateCapsOnChunkUnload(ChunkEvent.Unload event)
```

**Parameters:**

- `event` (`ChunkEvent.Unload`)

**Returns:** `public static void`

### cleanCapabilityListenerReferencesOnTick

```java
public static void cleanCapabilityListenerReferencesOnTick(LevelTickEvent.Post event)
```

**Parameters:**

- `event` (`LevelTickEvent.Post`)

**Returns:** `public static void`
