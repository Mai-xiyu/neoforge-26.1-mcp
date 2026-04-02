# NeoForgeRegistriesSetup

**Package:** `net.neoforged.neoforge.registries`
**Type:** class
**Annotations:** `@ApiStatus`

## Methods

### setup

```java
public static synchronized void setup(IEventBus modEventBus)
```

**Parameters:**

- `modEventBus` (`IEventBus`)

**Returns:** `public static synchronized void`

### IllegalStateException

```java
throw new IllegalStateException("Setup has already been called!")
```

**Parameters:**

- `called!"` (`"Setup has already been`)

**Returns:** `throw new`

### registerRegistries

```java
private static void registerRegistries(NewRegistryEvent event)
```

**Parameters:**

- `event` (`NewRegistryEvent`)

**Returns:** `private static void`

### modifyRegistries

```java
private static void modifyRegistries(ModifyRegistriesEvent event)
```

**Parameters:**

- `event` (`ModifyRegistriesEvent`)

**Returns:** `private static void`
