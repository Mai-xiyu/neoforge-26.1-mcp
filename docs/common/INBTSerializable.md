# INBTSerializable

**Package:** `net.neoforged.neoforge.common.util`
**Type:** interface<T extends Tag>

## Description

An interface designed to unify various things in the Minecraft
code base that can be serialized to and from a NBT tag.

## Methods

### serializeNBT

```java
T serializeNBT(HolderLookup.Provider provider)
```

**Parameters:**

- `provider` (`HolderLookup.Provider`)

**Returns:** `T`

### deserializeNBT

```java
void deserializeNBT(HolderLookup.Provider provider, T nbt)
```

**Parameters:**

- `provider` (`HolderLookup.Provider`)
- `nbt` (`T`)
