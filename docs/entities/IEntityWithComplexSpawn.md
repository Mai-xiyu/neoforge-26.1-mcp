# IEntityWithComplexSpawn

**Package:** `net.neoforged.neoforge.entity`
**Type:** interface

## Description

An interface for Entities that need extra information to be communicated
between the server and client when they are spawned.

## Methods

### writeSpawnData

```java
void writeSpawnData(RegistryFriendlyByteBuf buffer)
```

**Parameters:**

- `buffer` (`RegistryFriendlyByteBuf`)

### readSpawnData

```java
void readSpawnData(RegistryFriendlyByteBuf additionalData)
```

**Parameters:**

- `additionalData` (`RegistryFriendlyByteBuf`)
