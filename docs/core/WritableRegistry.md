# WritableRegistry

**Package:** `net.minecraft.core`
**Type:** interface<T> extends Registry<T>

## Methods

### register

```java
Holder.Reference<T> register(ResourceKey<T> p_256320_, T p_255978_, RegistrationInfo p_326122_)
```

**Parameters:**

- `p_256320_` (`ResourceKey<T>`)
- `p_255978_` (`T`)
- `p_326122_` (`RegistrationInfo`)

**Returns:** `Holder.Reference<T>`

### isEmpty

```java
boolean isEmpty()
```

**Returns:** `boolean`

### createRegistrationLookup

```java
HolderGetter<T> createRegistrationLookup()
```

**Returns:** `HolderGetter<T>`
