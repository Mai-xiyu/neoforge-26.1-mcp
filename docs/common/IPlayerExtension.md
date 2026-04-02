# IPlayerExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private Player self()
```

**Returns:** `private Player`

### isCloseEnough

```java
default boolean isCloseEnough(Entity entity, double dist)
```

**Parameters:**

- `entity` (`Entity`)
- `dist` (`double`)

**Returns:** `boolean`

### openMenu

```java
default OptionalInt openMenu(MenuProvider menuProvider, BlockPos pos)
```

**Parameters:**

- `menuProvider` (`MenuProvider`)
- `pos` (`BlockPos`)

**Returns:** `OptionalInt`

### openMenu

```java
default OptionalInt openMenu(MenuProvider menuProvider, Consumer<RegistryFriendlyByteBuf> extraDataWriter)
```

**Parameters:**

- `menuProvider` (`MenuProvider`)
- `extraDataWriter` (`Consumer<RegistryFriendlyByteBuf>`)

**Returns:** `OptionalInt`

### mayFly

```java
default boolean mayFly()
```

**Returns:** `boolean`

### isFakePlayer

```java
default boolean isFakePlayer()
```

**Returns:** `boolean`
